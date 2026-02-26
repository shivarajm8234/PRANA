'use client';

import React, { useState, useEffect } from 'react';
import { IncidentAlert } from '@/components/hospital/IncidentAlert';
import { ResourceStatus } from '@/components/hospital/ResourceStatus';
import { ServerStatus } from '@/components/hospital/ServerStatus';
import { EtaCountdown } from '@/components/hospital/EtaCountdown';
import { IncidentList } from '@/components/hospital/IncidentList';
import { Incident, Hospital } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import { mockHospitals } from '@/lib/mock-data';
import useSWR from 'swr';
import { LiveCityMap } from '@/components/hospital/LiveCityMap';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Select a hospital for demo (in production, this would be determined by auth)
const HOSPITAL_ID = mockHospitals[0]?.id || 'hosp-1';

export default function HospitalPage() {
  const [currentHospital, setCurrentHospital] = useState<Hospital | null>(null);
  const [hospitalsMap] = useState<Map<string, Hospital>>(
    new Map(mockHospitals.map((h) => [h.id, h]))
  );

  // Fetch incidents
  const { data, isLoading, error } = useSWR('/api/incidents', fetcher, {
    refreshInterval: 2000, // Poll every 2 seconds
  });

  const incidents: Incident[] = data?.incidents || [];
  
  // For the sake of the demo, we show any incoming incident across the city so the dashboard lights up
  const myIncidents = incidents;

  useEffect(() => {
    // Dynamically update the hospital header to match the incoming incident if one exists, otherwise default
    const activeInc = myIncidents.find((inc) => inc.status !== 'completed');
    const targetHospitalId = activeInc ? activeInc.hospitalId : HOSPITAL_ID;
    
    const hospital = mockHospitals.find((h) => h.id === targetHospitalId);
    if (hospital) {
      setCurrentHospital(hospital);
    }
  }, [myIncidents]);

  if (!currentHospital) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4">
        <div className="max-w-2xl mx-auto text-center pt-12">
          <AlertTriangle size={48} className="text-yellow-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900">Hospital Not Found</h1>
        </div>
      </div>
    );
  }

  // Get active incidents (not completed)
  const activeIncidents = myIncidents.filter((inc) => inc.status !== 'completed');
  const completedIncidents = myIncidents.filter((inc) => inc.status === 'completed');
  const primaryIncident = activeIncidents[0] || null;

  return (
    <div className="bg-[#1b2230] text-gray-200 flex flex-col font-sans h-[100dvh] overflow-hidden selection:bg-red-500/30">
      {/* Top Banner Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#212838] border-b border-[#30394f] shadow-md z-10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-[#0f8b8d] text-white p-2 text-xl font-bold flex items-center justify-center rounded-full shadow-[0_0_15px_rgba(15,139,141,0.5)]">
             <AlertTriangle size={20} />
          </div>
          <span className="text-lg font-bold tracking-widest text-[#d8deeb] uppercase ml-1">
             St. Mary's Hospital
          </span>
        </div>

        <div className="flex-1 flex justify-center items-center gap-12 font-bold tracking-wider text-sm opacity-90 hidden lg:flex">
          <span className="text-gray-400">10:30:45 AM</span>
          <div className="flex items-center gap-2 text-green-400">
             <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></span>
             TOTAL EMERGENCY LOAD: HIGH
          </div>
        </div>

        <div className="flex items-center gap-4">
           <button className="text-gray-400 hover:text-white transition-colors relative">
               <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
               <AlertTriangle size={24} />
           </button>
           <div className="bg-[#1b2230] border border-[#3b4761] px-4 py-2 rounded font-bold text-xs tracking-wider text-gray-400 flex items-center gap-2 cursor-pointer hover:bg-[#30394f] transition-colors">
              ADMIN
           </div>
           <div className="bg-[#1b2230] border border-[#3b4761] px-4 py-2 rounded font-bold text-xs tracking-wider flex items-center gap-2 cursor-pointer hover:bg-[#30394f] transition-colors">
              <span>👤</span> ADMIN v
           </div>
        </div>
      </div>

      {/* Main Content Pane */}
      <div className="flex-1 flex p-6 gap-8 overflow-hidden bg-[#22283a] relative min-h-0">
         
         {/* Top Emergency Red Banner - Absolute overlay over Columns */}
         {primaryIncident && (
           <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50 bg-[#c53133] text-white px-8 py-2 rounded-lg shadow-[0_0_30px_rgba(197,49,51,0.4)] border border-[#e64749] font-bold tracking-wider text-sm animate-[pulse_2s_ease-in-out_infinite] hidden lg:block uppercase">
               {primaryIncident.severity} {primaryIncident.issueType} CASE ARRIVING IN {Math.ceil((primaryIncident.estimatedArrivalTime || 0) / 60)} MINUTES
           </div>
         )}

         {/* Left Col - City Map */}
         <div className="flex-1 flex flex-col h-full bg-[#1b2230] rounded-xl border border-[#30394f] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#1b2230] to-transparent h-32 z-10 pointer-events-none p-6">
               <h2 className="text-xl font-bold text-white tracking-widest mb-1 shadow-black drop-shadow-lg">Live City Map</h2>
               <div className="text-xs font-bold tracking-wider text-gray-400 space-y-1">
                 <p className="opacity-90">TOTAL ACTIVE AMBULANCES: 7</p>
                 <p className="opacity-90">INCOMING EMERGENCY CASES: 3</p>
                 <p className="opacity-90">AVG. ARRIVAL TIME: 5 MIN</p>
               </div>
            </div>

            <div className="flex-1 bg-black w-full h-full">
               <LiveCityMap hospitalLocation={currentHospital.location} />
            </div>

         </div>

         {/* Right Col - Dashboards */}
         <div className="w-[480px] flex flex-col gap-6 overflow-y-auto pr-2 pb-4 shrink-0 rounded-xl relative" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            
            {/* Incoming Case Monitor */}
            <div className="space-y-3">
               <h3 className="font-bold text-lg tracking-wider text-white">Incoming Case Monitor</h3>
               
               {activeIncidents.length > 0 ? (
                 activeIncidents.map((incident) => {
                   const isCritical = incident.severity === 'critical';
                   const colorClass = isCritical ? 'border-[#e84142] text-[#e84142]' : 'border-[#eab308] text-[#eab308]';
                   const badgeClass = isCritical ? 'bg-[#4ade80] text-[#064e3b]' : 'bg-[#eab308] text-[#713f12]';
                   
                   return (
                     <div key={incident.id} className={`bg-[#191f2e] border-2 ${isCritical ? 'border-[#e84142]' : 'border-[#eab308]'} rounded-xl p-5 shadow-[0_0_15px_rgba(0,0,0,0.15)] relative overflow-hidden group transition-colors`}>
                         <div className="absolute top-0 right-0 p-3">
                            <div className={`font-bold text-[10px] tracking-widest px-2 py-1 rounded shadow cursor-pointer ${badgeClass}`}>
                               {isCritical ? 'SIREN' : `${Math.ceil((incident.estimatedArrivalTime || 0) / 60)} MIN`}
                            </div>
                         </div>
                         <div className="space-y-2 relative z-10">
                            <div className="text-sm font-bold tracking-wider opacity-90 text-gray-300">AMBULANCE ID: {incident.ambulanceId || 'A72B'}</div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                               <div className="font-bold tracking-wide opacity-80 uppercase">ETA</div>
                               <div className={`font-mono font-bold text-right text-lg ${isCritical ? 'text-[#e84142]' : 'text-[#eab308]'}`}>~{Math.ceil((incident.estimatedArrivalTime || 0) / 60)} MIN</div>
                            </div>
                            <div className="text-sm font-bold tracking-wide mt-2 uppercase">
                               <span className="opacity-80">EMERGENCY LEVEL </span>
                               <span className={isCritical ? 'text-[#e84142]' : 'text-[#eab308]'}>{incident.severity}</span> <span className="opacity-80 font-normal">({incident.issueType})</span>
                            </div>
                            <div className="text-sm font-bold tracking-wide pt-1 text-gray-300 text-center">
                               WAITING FOR LIVE VITALS...
                            </div>
                         </div>
                     </div>
                   );
                 })
               ) : (
                 <>
                   {/* Red Card Mock Fallback */}
                   <div className="bg-[#191f2e] border-2 border-[#e84142] rounded-xl p-5 shadow-[0_0_15px_rgba(232,65,66,0.15)] relative overflow-hidden group hover:border-red-400 transition-colors">
                       <div className="absolute top-0 right-0 p-3">
                          <div className="bg-[#4ade80] text-[#064e3b] font-bold text-[10px] tracking-widest px-2 py-1 rounded shadow cursor-pointer">SIREN</div>
                       </div>
                       <div className="space-y-2 relative z-10">
                          <div className="text-sm font-bold tracking-wider opacity-90 text-gray-300">AMBULANCE ID: A72B</div>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                             <div className="font-bold tracking-wide opacity-80 uppercase">Distance</div>
                             <div className="text-[#e84142] font-mono font-bold text-right text-lg">07.15</div>
                          </div>
                          <div className="text-sm font-bold tracking-wide mt-2">
                             <span className="opacity-80">EMERGENCY LEVEL </span>
                             <span className="text-[#e84142]">CRITICAL</span> <span className="opacity-80 font-normal">(Cardiac)</span>
                          </div>
                          <div className="text-sm font-bold tracking-wide pt-1 text-gray-300 text-center">
                             VITALS: HR 140, O2 78%, BP 60/40
                          </div>
                       </div>
                   </div>
    
                   {/* Yellow Card Mock Fallback */}
                   <div className="bg-[#191f2e] border border-[#eab308] rounded-xl p-5 shadow-[0_0_15px_rgba(234,179,8,0.1)] relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-3">
                          <div className="bg-[#eab308] text-[#713f12] font-bold text-[10px] tracking-widest px-2 py-1 rounded shadow opacity-90">3 MIN</div>
                       </div>
                       <div className="space-y-2">
                          <div className="text-sm font-bold tracking-wider opacity-90 text-gray-300">AMBULANCE ID: A98C</div>
                          <div className="text-sm font-bold tracking-wide mt-2">
                             <span className="opacity-80">EMERGENCY LEVEL </span>
                             <span className="text-[#eab308]">CRITICAL</span> <span className="opacity-80 font-normal">(Trauma)</span>
                          </div>
                          <div className="text-sm font-bold tracking-wide pt-1 text-gray-300 text-center">
                             VITALS: HR 110, O2 98%, BP 90/60
                          </div>
                       </div>
                   </div>
                 </>
               )}
            </div>

            {/* Middle Section */}
            <div className="space-y-3 pt-2">
                <h3 className="font-bold text-lg tracking-wider text-white">Resource & Capacity Monitor</h3>
                <div className="bg-[#191f2e] border border-[#22c55e] border-dashed rounded-xl p-5 shadow-[0_0_15px_rgba(34,197,94,0.1)] relative">
                    <div className="absolute top-0 right-0 p-3">
                      <div className="bg-[#22c55e] text-[#064e3b] font-bold text-[10px] tracking-widest px-2 py-1 rounded shadow">YELLOW</div>
                   </div>
                   <div className="space-y-2">
                      <div className="text-sm font-bold tracking-wider opacity-90 text-gray-300">AMBULANCE ID: A98B</div>
                      <div className="text-sm font-bold tracking-wide flex justify-between items-center text-gray-300 border-b border-gray-700/50 pb-2">
                          <span className="opacity-90 uppercase">ICU Availability</span>
                          <span className="bg-[#30394e] px-3 border border-[#44506c] rounded text-white shadow-inner font-mono">1 / 4</span>
                      </div>
                      <div className="text-sm font-bold tracking-wide flex justify-between items-center text-gray-300 pt-1">
                          <span className="opacity-90 uppercase">Operation Theatre Availability</span>
                          <span className="opacity-80 font-mono">2 / 3</span>
                      </div>
                   </div>
                </div>
            </div>

            {/* Bottom Resources Grid */}
            <div className="space-y-3 pt-2 pb-6">
                <h3 className="font-bold text-lg tracking-wider text-white">Resource & Capacity Monitor</h3>
                
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-xs font-bold tracking-wider">
                   <div className="space-y-1">
                      <div className="opacity-70 uppercase">Emergency Beds:</div>
                      <div className="text-lg font-mono tracking-widest text-[#d8deeb]">12 / 20</div>
                      <div className="text-[#eab308] uppercase text-[10px]">ETA (YELLOW)</div>
                   </div>
                   
                   <div className="space-y-1 relative">
                      <div className="opacity-70 uppercase flex justify-between items-center pr-2">
                         ICU Availability:
                         <span className="bg-[#e84142] text-white px-2 rounded font-bold shadow-md shadow-red-900/50 drop-shadow">RED</span>
                      </div>
                      <div className="text-lg font-mono tracking-widest text-[#d8deeb]">3 / 8</div>
                   </div>
                   
                   <div className="space-y-1 col-span-2 pt-2 border-t border-gray-700/50 mt-2">
                      <div className="opacity-70 uppercase">ON-DUTY DOCTORS:</div>
                      <div className="text-sm tracking-wide text-[#d8deeb] font-normal leading-relaxed">
                          Trauma 5, Cardiac 3, Pediatric 4, <br/>
                          Neuro 4, General 8
                      </div>
                   </div>
                   
                   <div className="space-y-1 col-span-2 flex items-center gap-4 border-t border-gray-700/50 pt-4 mt-2">
                      <div className="uppercase">BLOOD BANK:</div>
                      <div className="bg-[#22c55e] text-[#064e3b] px-3 py-1 rounded text-[10px] font-bold shadow-md shadow-green-900/50 tracking-widest border border-[#4ade80]">GREEN</div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6">
                    <button className="bg-[#3b82f6] text-white font-bold tracking-wider py-4 rounded shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:bg-[#60a5fa] transition-colors border border-[#60a5fa] uppercase text-xs">
                       Allocate Emergency Bed
                    </button>
                    <button className="bg-[#22c55e] text-white font-bold tracking-wider py-4 rounded shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:bg-[#4ade80] transition-colors border border-[#4ade80] uppercase text-xs">
                       NOTIFY SPECIALTY TEAM
                    </button>
                    <button className="bg-[#eab308] text-[#713f12] font-bold tracking-wider py-4 rounded shadow-[0_0_15px_rgba(234,179,8,0.5)] hover:bg-[#fde047] transition-colors border border-[#fde047] uppercase text-xs">
                       ALLOCATE SURGERY SUITE
                    </button>
                    <button className="bg-[#ef4444] text-white font-bold tracking-wider py-4 rounded shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:bg-[#f87171] transition-colors border border-[#f87171] uppercase text-[10px] lg:text-xs text-center flex items-center justify-center p-2">
                       ACTIVATE EMERGENCY PROTOCOL
                    </button>
                </div>
            </div>
         </div>
         
      </div>
    </div>
  );
}
