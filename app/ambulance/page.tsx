'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useAmbulanceLocation } from '@/hooks/useAmbulanceLocation';
import { useHospitalSelection } from '@/hooks/useHospitalSelection';
import { EmergencyButton } from '@/components/ambulance/EmergencyButton';
import { IssueSelector } from '@/components/ambulance/IssueSelector';
import { BestHospitalCard } from '@/components/ambulance/BestHospitalCard';
import { IssueType, Severity } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { AlertCircle, Activity, Volume2, ArrowRight, PlusCircle, Phone, Siren, Check, Mic, Settings, PhoneCall } from 'lucide-react';

// Dynamically import LiveMapView with SSR disabled because Leaflet depends on window
const LiveMapView = dynamic(
  () => import('@/components/ambulance/LiveMapView').then(mod => mod.LiveMapView),
  { ssr: false, loading: () => <div className="w-full h-96 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center text-gray-400">Loading map...</div> }
);

export default function AmbulancePage() {
  const { location, error: locationError, isTracking, startTracking, stopTracking } = useAmbulanceLocation();
  const [selectedIssue, setSelectedIssue] = useState<IssueType | null>(null);
  const [selectedSeverity, setSelectedSeverity] = useState<Severity | null>(null);
  const [incidentCreated, setIncidentCreated] = useState(false);
  const [incidentData, setIncidentData] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  // Feature specific states
  const [isSirenOn, setIsSirenOn] = useState(false);
  const [contactStatus, setContactStatus] = useState<'idle' | 'calling' | 'connected'>('idle');
  const [isRerouting, setIsRerouting] = useState(false);
  const [routeUpdateText, setRouteUpdateText] = useState("Turn Left in 300m");
  const [isTrafficCleared, setIsTrafficCleared] = useState(false);
  const [dispatchTime, setDispatchTime] = useState<number | null>(null);
  const [timeSinceDispatch, setTimeSinceDispatch] = useState('00:00:00');

  const { bestMatch, isLoading: isLoadingHospital, createIncident } = useHospitalSelection(
    selectedIssue || '',
    selectedSeverity || '',
    location
  );

  const handleEmergencyClick = async () => {
    if (!location) {
      setSubmissionError('Please enable GPS/location services for live tracking');
      return;
    }
    if (!selectedIssue || !selectedSeverity) {
      setSubmissionError('Please select emergency type and severity');
      return;
    }
    if (!bestMatch) {
      setSubmissionError('Searching for nearest hospital... Please wait');
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const result = await createIncident('amb-001');
      if (result) {
        setIncidentData(result);
        setIncidentCreated(true);
        setIsSirenOn(true);
        setDispatchTime(Date.now());
      } else {
        setSubmissionError('Failed to create incident');
      }
    } catch (err: any) {
      setSubmissionError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Start tracking location when component mounts
    startTracking();

    return () => {
      stopTracking();
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (incidentCreated && dispatchTime) {
      interval = setInterval(() => {
        const diff = Math.floor((Date.now() - dispatchTime) / 1000);
        const hours = Math.floor(diff / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;
        setTimeSinceDispatch(
          `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        );
      }, 1000);
    } else {
      setTimeSinceDispatch('00:00:00');
    }
    return () => clearInterval(interval);
  }, [incidentCreated, dispatchTime]);

  const toggleSiren = () => setIsSirenOn(!isSirenOn);

  const handleContactHospital = () => {
    if (contactStatus === 'idle') {
      setContactStatus('calling');
      setTimeout(() => setContactStatus('connected'), 2000);
      setTimeout(() => setContactStatus('idle'), 7000);
    } else {
      setContactStatus('idle');
    }
  };

  const handleManualReroute = () => {
    setIsRerouting(true);
    setRouteUpdateText("Calculating alternate...");
    setTimeout(() => {
      setIsRerouting(false);
      setRouteUpdateText("Take next exit to HWY 4");
    }, 2500);
  };

  return (
    <div className="bg-[#1e2336] text-white flex flex-col font-sans h-[100dvh] overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#161a2b] border-b border-gray-800">
        <div className="text-sm font-bold tracking-wider text-gray-300">
          AMBULANCE ID: {incidentData?.ambulanceId || 'A72B'}
        </div>
        <div className={`px-6 py-2 rounded text-sm font-bold tracking-wide shadow-lg ${incidentCreated ? 'bg-red-600 text-white shadow-red-900/50' : 'bg-gray-700 text-gray-300'}`}>
          EMERGENCY LEVEL: {incidentCreated ? selectedSeverity?.toUpperCase() || 'CRITICAL' : 'STANDBY'}
        </div>
        <div className="flex items-center gap-3 text-sm font-semibold text-gray-300">
          <Volume2 size={18} />
          <span>{incidentCreated ? `TIME SINCE DISPATCH ${timeSinceDispatch}` : 'SYSTEM READY'}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 p-6 gap-6 min-h-0 bg-[#0f121d]">
        {/* Left Col - Map */}
        <div className="flex-1 relative rounded-xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-black">
          {incidentCreated && incidentData && (
            <>
              {/* Map Overlays */}
              <div className="absolute top-4 left-4 z-[1000] bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg text-white font-bold text-3xl tracking-wider">
                ETA: {new Date(Date.now() + incidentData.estimatedArrivalTime * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>

              <div className="absolute top-4 right-4 z-[1000] bg-white text-gray-900 px-6 py-4 rounded-xl flex items-center gap-4 shadow-2xl font-bold text-2xl border-b-4 border-gray-200 transition-all duration-300">
                <ArrowRight className="text-red-500" size={32} />
                {routeUpdateText}
              </div>

              {isRerouting && (
                <div className="absolute top-28 right-[30%] z-[1000] bg-white text-red-500 px-3 py-1 text-xs font-bold rounded shadow-md border border-red-200 tracking-wider animate-pulse transition-all">
                  REROUTING......
                </div>
              )}

              <div className="absolute bottom-20 left-4 z-[1000] bg-black/70 backdrop-blur-md text-white px-3 py-1.5 rounded font-bold text-sm tracking-wider">
                SPEED: 95 km/h
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-[1000] bg-white rounded-full h-10 flex items-center px-4 shadow-lg border-2 border-gray-200">
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-blue-500"></div>
                </div>
                <PlusCircle className="text-gray-400 ml-4 cursor-pointer" size={24} />
              </div>
            </>
          )}

          <LiveMapView
            ambulanceLocation={location}
            hospitalLocation={incidentCreated && incidentData ? incidentData.hospital.location : (bestMatch ? bestMatch.hospital.location : null)}
            isTrafficCleared={isTrafficCleared}
            className="w-full h-full"
          />
        </div>

        {/* Right Col - Controls */}
        <div className="w-[400px] flex flex-col gap-4">
          {incidentCreated && incidentData ? (
            <>
              <div className="flex items-center gap-3 text-white font-bold tracking-wider px-2">
                <Activity size={20} />
                <span>PATIENT STATUS</span>
              </div>

              <div className="bg-[#2a3149] rounded-xl p-5 border border-slate-700 shadow-lg">
                <h2 className="text-xl font-bold text-white mb-6 tracking-wide">{incidentData.hospital.name}</h2>

                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-3 text-sm text-gray-300 font-medium tracking-wide">
                    <p>HR: 88 BPM</p>
                    <p>O2: 96%</p>
                    <p>DISTANCE: {incidentData.distance.toFixed(1)} km</p>
                  </div>
                  <div className="bg-red-500 text-white px-5 py-2.5 rounded font-bold text-sm tracking-wider shadow-md">
                    CRITICAL
                  </div>
                </div>

                <div className="text-sm font-bold text-green-400 tracking-wider">
                  EMERGENCY CAPACITY: LOW
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-2 flex-1">
                <button
                  onClick={handleContactHospital}
                  className={`flex items-center justify-center gap-3 text-white p-5 rounded-xl font-bold text-lg transition-colors shadow-lg ${contactStatus !== 'idle' ? 'bg-green-600 hover:bg-green-700 shadow-green-900/50' : 'bg-[#3b82f6] hover:bg-blue-600'}`}>
                  <Phone size={24} />
                  {contactStatus === 'idle' ? 'CONTACT HOSPITAL' : contactStatus === 'calling' ? 'DIALING...' : 'CONNECTED [LIVE]'}
                </button>
                <button
                  onClick={() => setIsTrafficCleared(true)}
                  disabled={isTrafficCleared}
                  className={`flex items-center justify-center gap-3 text-white p-5 rounded-xl font-bold text-lg transition-colors shadow-lg ${isTrafficCleared ? 'bg-green-600 shadow-green-900/50' : 'bg-[#e84142] hover:bg-red-600 shadow-red-900/20'}`}>
                  <Siren size={24} /> {isTrafficCleared ? 'TRAFFIC CLEARED [LIVE]' : 'REQUEST TRAFFIC CLEARANCE'}
                </button>
                <button
                  onClick={handleManualReroute}
                  className={`flex items-center justify-center gap-3 text-white p-5 rounded-xl font-bold text-lg transition-colors shadow-lg ${isRerouting ? 'bg-[#2a3149] text-gray-400' : 'bg-[#3b82f6] hover:bg-blue-600'}`}>
                  <PhoneCall size={24} /> {isRerouting ? 'CALCULATING...' : 'ALTERNATE ROUTE'}
                </button>
                <button
                  onClick={() => {
                    setIncidentCreated(false);
                    setIncidentData(null);
                    setSelectedIssue(null);
                    setSelectedSeverity(null);
                    setIsSirenOn(false);
                    setContactStatus('idle');
                    setIsTrafficCleared(false);
                    setDispatchTime(null);
                    setRouteUpdateText("Turn Left in 300m");
                  }}
                  className="flex items-center justify-center gap-3 bg-[#22c55e] hover:bg-green-600 text-white p-5 rounded-xl font-bold text-lg transition-colors shadow-lg mt-auto">
                  <Check size={24} /> MARK ARRIVAL
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-4 text-gray-900 h-full overflow-y-auto pr-2 pb-4">
              <div className="flex items-center gap-3 text-white font-bold tracking-wider px-2 pt-2">
                <AlertCircle size={20} />
                <span>NEW DISPATCH</span>
              </div>

              <Card className={`p-3 border-0 shadow-lg ${locationError ? 'bg-yellow-100 border-yellow-300' : 'bg-blue-100 border-blue-300'}`}>
                <p className="text-xs text-gray-700">
                  {locationError ? (
                    <span className="font-semibold text-yellow-800">GPS Warning: Using test location</span>
                  ) : (
                    <span className="font-semibold text-blue-800">GPS Active: Tracking location</span>
                  )}
                </p>
              </Card>

              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                <IssueSelector
                  selectedIssue={selectedIssue}
                  selectedSeverity={selectedSeverity}
                  onIssueChange={setSelectedIssue}
                  onSeverityChange={setSelectedSeverity}
                  disabled={isSubmitting}
                />
              </div>

              {bestMatch && (
                <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                  <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Recommended Destination</h2>
                  <BestHospitalCard match={bestMatch} isLoading={isLoadingHospital} />
                </div>
              )}

              {submissionError && (
                <Card className="p-3 bg-red-100 border-0 shadow-sm border-s-4 border-s-red-500">
                  <div className="flex gap-2 text-red-800">
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                    <p className="text-xs font-medium">{submissionError}</p>
                  </div>
                </Card>
              )}

              {isSubmitting ? (
                <div className="mt-auto bg-gray-800 rounded-xl p-5 text-center flex flex-col items-center justify-center text-white border border-gray-700">
                  <Activity className="animate-spin mb-3 text-blue-400" size={32} />
                  <span className="font-bold tracking-wide">CREATING INCIDENT...</span>
                </div>
              ) : (
                <div className="mt-auto pt-4">
                  <EmergencyButton
                    onClick={handleEmergencyClick}
                    isActive={false}
                    disabled={isSubmitting}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#161a2b] border-t border-gray-800">
        <button className="bg-[#3b82f6] p-4 rounded-full text-white shadow-lg shadow-blue-900/50 hover:bg-blue-400 transition-colors">
          <Mic size={24} />
        </button>

        <div className="flex items-center gap-6">
          <div
            onClick={toggleSiren}
            className={`rounded-full flex items-center p-1 cursor-pointer shadow-lg border transition-colors pr-4 relative select-none ${isSirenOn ? 'bg-[#e84142] shadow-red-900/50 border-red-500 hover:bg-red-600' : 'bg-gray-700 border-gray-600 hover:bg-gray-600'}`}>
            <div className="px-4 py-2 text-white font-bold text-sm tracking-wider">SIREN:</div>
            <div className={`rounded-full px-5 py-2 text-white font-bold text-sm tracking-widest shadow-inner relative right-[-4px] transition-colors ${isSirenOn ? 'bg-red-800' : 'bg-gray-800'}`}>{isSirenOn ? 'ON' : 'OFF'}</div>
          </div>
          <button
            onClick={handleManualReroute}
            disabled={isRerouting}
            className={`px-8 py-4 rounded-xl text-white font-bold tracking-wider shadow-lg transition-colors ${isRerouting ? 'bg-[#2a3149] text-gray-400' : 'bg-[#3b82f6] shadow-blue-900/50 hover:bg-blue-400'}`}>
            {isRerouting ? 'REROUTING...' : 'MANUAL REROUTE'}
          </button>
        </div>

        <button className="text-gray-400 hover:text-white p-3 hover:bg-slate-800 rounded-full transition-colors">
          <Settings size={28} />
        </button>
      </div>
    </div>
  );
}
