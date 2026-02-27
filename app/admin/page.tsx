'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { mockAmbulances, mockHospitals, mockTrafficSignals } from '@/lib/mock-data';
import useSWR from 'swr';
import { Incident, Hospital, Ambulance } from '@/lib/types';
import { Bell, Activity, TriangleAlert, Building2, Truck, Server, BarChart2, CheckCircle2, AlertOctagon, Settings, Users, ChevronRight, PlusCircle, MapPin, X, ArrowRightCircle } from 'lucide-react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const AmbulanceTracker = dynamic(
  () => import('@/components/admin/AmbulanceTracker').then(mod => mod.AmbulanceTracker),
  { ssr: false, loading: () => <div className="w-full h-full bg-[#11131a] rounded-lg animate-pulse border-2 border-slate-700 font-bold tracking-widest text-slate-500 flex items-center justify-center">MAP LOADING...</div> }
);

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('fleet');
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);
  const [selectedAmbulanceForTraffic, setSelectedAmbulanceForTraffic] = useState<Ambulance | null>(null);
  const [hospitalSearchTerm, setHospitalSearchTerm] = useState('');
  const [trafficSignalOverrides, setTrafficSignalOverrides] = useState<Record<string, 'red'|'yellow'|'green'|'auto'>>({});
  
  const getMockAddress = (lat: number, lng: number) => {
      const idx = Math.abs(Math.floor(lat * 100000) + Math.floor(lng * 100000));
      const streets = ["HSR Layout Sec 2", "Koramangala 4th Block", "Indiranagar 100ft Rd", "MG Road Junction", "Whitefield Main Rd", "Outer Ring Road", "Bannerghatta Rd", "Residency Rd", "Jayanagar 4th T Block", "Electronic City Phase 1"];
      return streets[idx % streets.length] + ", Bangalore Urban";
  };
  
  // Local state for CRUD operations on drivers/hospitals
  const [localUsers, setLocalUsers] = useState<Ambulance[]>(mockAmbulances);
  const [localHospitals, setLocalHospitals] = useState<Hospital[]>(mockHospitals);
  const [userTabMode, setUserTabMode] = useState<'drivers' | 'hospitals'>('drivers');
  const [settingsForm, setSettingsForm] = useState({ autoDispatch: true, trafficPreemption: true, aiRouting: true });
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [editingHospitalId, setEditingHospitalId] = useState<string | null>(null);

  const { data } = useSWR('/api/incidents', fetcher, {
    refreshInterval: 2000,
  });

  const incidents: Incident[] = data?.incidents || [];
  const activeIncidentsCount = incidents.filter(i => i.status !== 'completed').length;
  const primaryIncident = incidents.find(i => i.status !== 'completed');
  
  const criticalCount = incidents.filter(i => i.severity === 'critical' && i.status !== 'completed').length;
  const highCount = incidents.filter(i => i.severity === 'high' && i.status !== 'completed').length;
  
  // Base numbers with dynamic augmentations
  const totalAmbulancesMap = mockAmbulances.length > 5 ? mockAmbulances.length : 15;
  const availableAmbos = Math.max(0, totalAmbulancesMap - activeIncidentsCount);
  
  // Fake base utilization but responsive to new incidents
  const icuUtilization = Math.min(100, 78 + (activeIncidentsCount * 2));
  
  // Generate Activity Logs dynamically from live incidents
  const activityLogs: { id: string, message: string; time: number; isAction: boolean }[] = [];
  incidents.forEach(inc => {
      activityLogs.push({ 
         id: `${inc.id}-dispatch`,
         message: `AMBULANCE ${inc.ambulanceId || 'A72B'} DISPATCHED FOR ${inc.issueType.toUpperCase()}`, 
         time: inc.createdAt, 
         isAction: false 
      });
      if (inc.hospitalId) {
          const hosp = mockHospitals.find(h => h.id === inc.hospitalId);
          activityLogs.push({ 
             id: `${inc.id}-allocate`,
             message: `HOSPITAL BED ALLOCATED AT ${hosp?.name?.toUpperCase() || 'ST. MARY\'S'} [${inc.severity.toUpperCase()}]`, 
             time: inc.allocatedAt || inc.createdAt + 1000, 
             isAction: true 
          });
      }
      if (inc.status === 'completed' && inc.completedAt) {
          activityLogs.push({
             id: `${inc.id}-arrived`,
             message: `AMBULANCE ${inc.ambulanceId || 'A72B'} ARRIVED AT HOSPITAL. PATIENT HANDOVER COMPLETE.`,
             time: inc.completedAt,
             isAction: true
          });
      }
  });
  
  activityLogs.sort((a, b) => b.time - a.time);
  
  // Pad logs if empty to keep UI looking like the design
  const displayLogs = activityLogs.length > 0 ? activityLogs.slice(0, 4) : [
    { id: '1', message: 'SYSTEM ONLINE', time: Date.now() - 50000, isAction: false },
    { id: '2', message: 'TRAFFIC DENSITY NORMAL', time: Date.now() - 40000, isAction: false }
  ];

  return (
    <div className="bg-[#1b1f2e] text-gray-200 flex h-[100dvh] overflow-hidden font-sans selection:bg-red-500/30">
        
       {/* Left Navigation Sidebar */}
       <div className="w-64 bg-[#141824] border-r border-[#2a3044] flex flex-col shrink-0">
           {/* Branding Logo */}
           <div className="h-[72px] flex items-center px-6 border-b border-[#2a3044]">
               <div className="bg-[#242b3d] text-gray-300 p-2 rounded shadow flex items-center justify-center">
                  <Activity size={20} className="text-white"/>
               </div>
               <span className="text-[13px] font-bold tracking-widest text-[#d8deeb] uppercase ml-3">
                  CITY-WIDE EMERGENCY <br/> COORDINATION
               </span>
           </div>

           {/* Nav Links */}
           <div className="py-6 flex flex-col gap-2 px-3 text-sm font-bold tracking-wider opacity-80 overflow-y-auto">
               <div onClick={() => setActiveTab('overview')} className={`flex items-center gap-3 px-4 py-3 rounded cursor-pointer transition-colors ${activeTab === 'overview' ? 'bg-[#202738] text-white border-l-2 border-[#3b82f6] shadow-inner' : 'text-gray-400 hover:bg-[#202738] hover:text-white'}`}>
                  <BarChart2 size={18} /> Dashboard Overview
               </div>
               <div onClick={() => setActiveTab('fleet')} className={`flex items-center gap-3 px-4 py-3 rounded cursor-pointer transition-colors ${activeTab === 'fleet' ? 'bg-[#202738] text-white border-l-2 border-[#3b82f6] shadow-inner' : 'text-gray-400 hover:bg-[#202738] hover:text-white'}`}>
                  <Truck size={18} /> Ambulance Fleet
               </div>
               <div onClick={() => setActiveTab('hospitals')} className={`flex items-center gap-3 px-4 py-3 rounded cursor-pointer transition-colors ${activeTab === 'hospitals' ? 'bg-[#202738] text-white border-l-2 border-[#3b82f6] shadow-inner' : 'text-gray-400 hover:bg-[#202738] hover:text-white'}`}>
                  <Building2 size={18} /> Hospitals
               </div>
               <div onClick={() => setActiveTab('traffic')} className={`flex items-center gap-3 px-4 py-3 rounded cursor-pointer transition-colors ${activeTab === 'traffic' ? 'bg-[#202738] text-white border-l-2 border-[#3b82f6] shadow-inner' : 'text-gray-400 hover:bg-[#202738] hover:text-white'}`}>
                  <Activity size={18} /> Traffic Signals
               </div>
               <div onClick={() => setActiveTab('analytics')} className={`flex items-center gap-3 px-4 py-3 rounded cursor-pointer transition-colors ${activeTab === 'analytics' ? 'bg-[#202738] text-white border-l-2 border-[#3b82f6] shadow-inner' : 'text-gray-400 hover:bg-[#202738] hover:text-white'}`}>
                  <Server size={18} /> AI Analytics
               </div>
               <div onClick={() => setActiveTab('logs')} className={`flex items-center gap-3 px-4 py-3 rounded cursor-pointer transition-colors ${activeTab === 'logs' ? 'bg-[#202738] text-white border-l-2 border-[#3b82f6] shadow-inner' : 'text-gray-400 hover:bg-[#202738] hover:text-white'}`}>
                  <AlertOctagon size={18} /> Emergency Logs
               </div>
               <div onClick={() => setActiveTab('users')} className={`flex items-center gap-3 px-4 py-3 rounded cursor-pointer transition-colors ${activeTab === 'users' ? 'bg-[#202738] text-white border-l-2 border-[#3b82f6] shadow-inner' : 'text-gray-400 hover:bg-[#202738] hover:text-white'}`}>
                  <Users size={18} /> Users
               </div>
               <div onClick={() => setActiveTab('settings')} className={`flex items-center gap-3 px-4 py-3 rounded cursor-pointer transition-colors ${activeTab === 'settings' ? 'bg-[#202738] text-white border-l-2 border-[#3b82f6] shadow-inner' : 'text-gray-400 hover:bg-[#202738] hover:text-white'}`}>
                  <Settings size={18} /> Settings
               </div>
           </div>
       </div>

       {/* Main Dashboard Canvas */}
       <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#1b1f2e]">
          
          {/* Top Navbar */}
          <div className="h-[72px] bg-[#141824] border-b border-[#2a3044] flex items-center justify-end px-6 gap-6 shrink-0 shadow-sm z-10">
              <div className="flex items-center gap-2 font-mono text-gray-400 text-sm opacity-80 border-r border-[#2a3044] pr-6">
                 ⨀ 14:23 <span className="text-[#22c55e] ml-2">●</span> <span className="text-[#eab308]">●</span> <span className="text-[#ef4444]">●</span>
              </div>
              <div className="flex items-center gap-4 border-l border-[#2a3044] pl-6 border-r pr-6">
                 <Bell size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
              <div className="bg-[#242b3d] border border-[#3b4761] px-5 py-2 rounded text-xs font-bold tracking-wider flex items-center gap-2 cursor-pointer hover:bg-[#30394f] shadow-inner">
                 ADMIN
              </div>
              <div className="bg-[#242b3d] border border-[#3b4761] px-4 py-2 rounded text-xs font-bold tracking-wider flex items-center justify-center cursor-pointer hover:bg-[#30394f] shadow-inner text-gray-400">
                 C.Z ▾
              </div>
          </div>

          {/* Interactive Control Dashboard */}
          <div className="flex-1 overflow-auto p-6 flex flex-col gap-5 min-h-0 container mx-auto" style={{ scrollbarWidth: 'none' }}>
             
             {activeTab === 'overview' && (
                 <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2 pb-4">
                     {/* Top Row: Mission Critical Highlights */}
                     <div className="grid grid-cols-4 gap-4 shrink-0">
                         <div className="bg-[#1b2230] border-l-4 border-l-[#3b82f6] rounded p-5 shadow-lg relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-4 opacity-10"><Activity size={64}/></div>
                             <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">Total Managed Incidents</h3>
                             <div className="text-3xl font-bold text-white font-mono">{incidents.length + 142}</div>
                             <div className="text-[10px] font-bold tracking-wider text-[#22c55e] mt-2">↑ 12% FROM YESTERDAY</div>
                         </div>
                         <div className="bg-[#1b2230] border-l-4 border-l-[#22c55e] rounded p-5 shadow-lg relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-4 opacity-10"><CheckCircle2 size={64}/></div>
                             <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">Active Fleet Status</h3>
                             <div className="text-3xl font-bold text-white font-mono">{availableAmbos} <span className="text-lg text-gray-500">/ {totalAmbulancesMap}</span></div>
                             <div className="text-[10px] font-bold tracking-wider text-gray-400 mt-2 uppercase">{mockAmbulances.length} AMBULANCES CONNECTED</div>
                         </div>
                         <div className="bg-[#1b2230] border-l-4 border-l-[#eab308] rounded p-5 shadow-lg relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-4 opacity-10"><Server size={64}/></div>
                             <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">System Reroute Avg</h3>
                             <div className="text-3xl font-bold text-white font-mono">-4.2<span className="text-lg text-gray-500"> MIN</span></div>
                             <div className="text-[10px] font-bold tracking-wider text-[#22c55e] mt-2 uppercase">AI OPTIMIZATION ACTIVE</div>
                         </div>
                         <div className="bg-[#1b2230] border-l-4 border-l-[#e84142] rounded p-5 shadow-lg relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-4 opacity-10"><Building2 size={64}/></div>
                             <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">Avg Hospital Wait</h3>
                             <div className="text-3xl font-bold text-white font-mono">1.8<span className="text-lg text-gray-500"> MIN</span></div>
                             <div className="text-[10px] font-bold tracking-wider text-gray-400 mt-2 uppercase">DOWN FROM 12 MIN (PRE-PRANA)</div>
                         </div>
                     </div>

                     {/* Middle Row: Detailed split view */}
                     <div className="grid grid-cols-2 gap-6 flex-1 min-h-[400px]">
                         
                         {/* Live Events Feed */}
                         <div className="bg-[#212738] border border-[#343d54] rounded-lg shadow-lg flex flex-col overflow-hidden">
                            <div className="p-4 border-b border-[#30394f] bg-[#1a202d] flex justify-between items-center shrink-0">
                               <h3 className="font-bold tracking-widest uppercase text-white text-sm">Priority Dispatch Queue</h3>
                               <span className="bg-[#3b82f6] text-white text-[10px] font-bold px-2 py-1 rounded">LIVE</span>
                            </div>
                            <div className="p-4 flex-1 overflow-y-auto space-y-3">
                               {incidents.slice(0, 5).map(inc => (
                                 <div 
                                      key={inc.id} 
                                      onClick={() => setSelectedIncident(inc)}
                                      className={`p-4 rounded border-l-2 bg-[#1b2230] shadow flex items-center justify-between cursor-pointer hover:bg-[#1f2937] transition-all hover:scale-[1.01] ${
                                         inc.severity === 'critical' ? 'border-[#e84142]' : 
                                         inc.severity === 'high' ? 'border-[#eab308]' : 'border-[#3b82f6]'
                                      }`}>
                                      <div>
                                         <div className="flex items-center gap-3 mb-1">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                                               inc.severity === 'critical' ? 'bg-[#e84142]/20 text-[#e84142]' : 
                                               inc.severity === 'high' ? 'bg-[#eab308]/20 text-[#eab308]' : 'bg-[#3b82f6]/20 text-[#3b82f6]'
                                            }`}>
                                               {inc.severity}
                                            </span>
                                            <span className="text-xs font-mono text-gray-400 opacity-80">{new Date(inc.createdAt).toLocaleTimeString()}</span>
                                         </div>
                                         <div className="font-bold text-white tracking-wide uppercase text-sm mt-2">{inc.issueType} EMERGENCY</div>
                                         <div className="text-xs text-gray-500 font-mono mt-1">Amb: {inc.ambulanceId} • Hosp: {inc.hospitalId || 'PENDING'}</div>
                                      </div>
                                      <div className="text-right">
                                         <div className="text-xl font-bold font-mono text-white">~{Math.ceil((inc.estimatedArrivalTime || 0) / 60)}m</div>
                                         <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mt-1">ETA</div>
                                      </div>
                                 </div>
                               ))}

                               {incidents.length === 0 && (
                                   <div className="h-full flex flex-col items-center justify-center text-gray-500 opacity-50 pb-10">
                                      <CheckCircle2 size={48} className="mb-4" />
                                      <p className="font-bold tracking-widest uppercase">No Active Dispatch Events</p>
                                   </div>
                               )}
                            </div>
                         </div>

                         {/* Area Map Summary & Global Settings Grid */}
                         <div className="flex flex-col gap-6">
                            
                            {/* System Status Grid */}
                            <div className="bg-[#212738] border border-[#343d54] rounded-lg shadow-lg p-5">
                               <h3 className="font-bold tracking-widest uppercase text-white text-sm border-b border-[#30394f] pb-3 mb-4">Core Infrastructure Status</h3>
                               
                               <div className="space-y-4">
                                  <div className="flex justify-between items-center group">
                                     <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#4ade80]"></div>
                                        <span className="text-sm font-bold tracking-wider text-gray-300 uppercase">Hospital Gateway API</span>
                                     </div>
                                     <span className="text-xs font-mono text-[#22c55e] bg-[#22c55e]/10 px-2 py-1 rounded">12ms Ping</span>
                                  </div>
                                  
                                  <div className="flex justify-between items-center group">
                                     <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#4ade80]"></div>
                                        <span className="text-sm font-bold tracking-wider text-gray-300 uppercase">Traffic Preemption Server (ATS)</span>
                                     </div>
                                     <span className="text-xs font-mono text-[#22c55e] bg-[#22c55e]/10 px-2 py-1 rounded">24ms Ping</span>
                                  </div>

                                  <div className="flex justify-between items-center group">
                                     <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#eab308] shadow-[0_0_8px_#facc15] animate-pulse"></div>
                                        <span className="text-sm font-bold tracking-wider text-gray-300 uppercase">AI Analytics Engine Module</span>
                                     </div>
                                     <span className="text-xs font-mono text-[#eab308] bg-[#eab308]/10 px-2 py-1 rounded">Processing Load: High</span>
                                  </div>
                               </div>
                            </div>
                            
                            {/* Active Hospitals Quick view */}
                             <div className="bg-[#212738] border border-[#343d54] rounded-lg shadow-lg p-5 flex-1 flex flex-col">
                               <h3 className="font-bold tracking-widest uppercase text-white text-sm border-b border-[#30394f] pb-3 mb-4 flex justify-between">
                                  <span>Integrated Hospital Load</span>
                                  <span className="text-xs text-[#3b82f6] cursor-pointer hover:underline" onClick={()=>setActiveTab('hospitals')}>VIEW ALL</span>
                               </h3>
                               
                               <div className="space-y-4 flex-1 overflow-y-auto">
                                   {mockHospitals.slice(0, 3).map(h => {
                                      // fake loads based on name length for visual interest
                                      const load = Math.min((h.name.length * 5) + (activeIncidentsCount * 5), 100);
                                      const isHigh = load > 85;
                                      
                                      return (
                                        <div key={h.id} className="space-y-1">
                                           <div className="flex justify-between items-end">
                                              <span className="text-xs font-bold tracking-wider text-gray-300 uppercase">{h.name}</span>
                                              <span className={`text-[10px] font-mono font-bold ${isHigh ? 'text-[#e84142]' : 'text-gray-400'}`}>{load}% CAP</span>
                                           </div>
                                           <div className="w-full h-1.5 bg-[#1b2230] rounded overflow-hidden">
                                              <div className={`h-full rounded ${isHigh ? 'bg-[#e84142] shadow-[0_0_5px_#f87171]' : 'bg-[#3b82f6]'}`} style={{width: `${load}%`}}></div>
                                           </div>
                                        </div>
                                      );
                                   })}
                               </div>
                            </div>

                         </div>
                     </div>
                 </div>
              )}

              {activeTab === 'hospitals' && (
                 <div className="flex-1 flex gap-6 h-full min-h-0 overflow-hidden">
                     {/* Hospital List Sidebar */}
                     <div className="w-1/3 min-w-[320px] bg-[#212738] border border-[#343d54] rounded-lg shadow-lg flex flex-col overflow-hidden shrink-0">
                         <div className="p-5 border-b border-[#30394f] bg-[#1a202d] shrink-0 flex items-center gap-3">
                             <Building2 className="text-[#3b82f6]" size={24} />
                             <div>
                                 <h3 className="font-bold tracking-widest uppercase text-white text-sm">Hospitals Directory</h3>
                                 <p className="text-[10px] text-gray-500 font-mono mt-1 font-bold">{mockHospitals.length} REGISTERED FACILITIES</p>
                             </div>
                         </div>
                         <div className="p-3 border-b border-[#30394f] bg-[#1a202d] shrink-0">
                             <input 
                                 type="text" 
                                 placeholder="Search hospitals..." 
                                 value={hospitalSearchTerm}
                                 onChange={(e) => setHospitalSearchTerm(e.target.value)}
                                 className="w-full bg-[#1b2230] text-sm text-white border border-[#30394f] rounded-lg px-4 py-2 focus:outline-none focus:border-[#3b82f6] transition-colors"
                             />
                         </div>
                         <div className="flex-1 overflow-y-auto p-3 space-y-3" style={{ scrollbarWidth: 'none' }}>
                             {mockHospitals.filter(h => h.name.toLowerCase().includes(hospitalSearchTerm.toLowerCase())).map(hospital => (
                                 <div 
                                     key={hospital.id} 
                                     onClick={() => setSelectedHospital(hospital)}
                                     className={`p-4 rounded-lg cursor-pointer border transition-all ${
                                         selectedHospital?.id === hospital.id 
                                             ? 'bg-[#3b82f6]/10 border-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.15)] scale-[1.02]' 
                                             : 'bg-[#1b2230] border-[#30394f] hover:border-[#4b5563] hover:bg-[#1f2937]'
                                     }`}
                                 >
                                     <h4 className={`font-bold tracking-wide ${selectedHospital?.id === hospital.id ? 'text-[#3b82f6]' : 'text-white'}`}>
                                        {hospital.name}
                                     </h4>
                                     <div className="flex gap-4 mt-3 text-[10px] font-bold tracking-wider font-mono uppercase">
                                         <div className="text-gray-400"><span className="text-gray-500">GEN BEDS:</span> <span className={`${hospital.capacity.generalBeds > 10 ? 'text-[#22c55e]' : 'text-[#eab308]'}`}>{hospital.capacity.generalBeds}</span></div>
                                         <div className="text-gray-400"><span className="text-gray-500">ICU:</span> <span className={`${hospital.capacity.icuBeds > 2 ? 'text-[#22c55e]' : 'text-[#e84142]'}`}>{hospital.capacity.icuBeds}</span></div>
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </div>

                     {/* Hospital Details Panel */}
                     <div className="flex-1 bg-[#212738] border border-[#343d54] rounded-lg shadow-lg flex flex-col overflow-auto relative">
                         {selectedHospital ? (
                             <div className="p-8 pb-12 animate-in fade-in duration-300">
                                 {/* Header */}
                                 <div className="flex items-start gap-6 border-b border-[#30394f] pb-8 mb-8">
                                     <div className="w-20 h-20 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] border-2 border-[#60a5fa] shadow-[0_0_20px_rgba(59,130,246,0.3)] rounded-2xl flex items-center justify-center text-white shrink-0">
                                         <Building2 size={36} />
                                     </div>
                                     <div className="flex-1">
                                         <div className="flex justify-between items-start">
                                            <div>
                                                <h2 className="text-3xl font-bold text-white tracking-wider mb-2">{selectedHospital.name}</h2>
                                                <div className="flex gap-4 text-xs font-bold tracking-widest uppercase font-mono mt-2">
                                                    <span className="bg-[#242b3d] px-3 py-1 rounded border border-[#3b4761] text-gray-300">ID: {selectedHospital.id}</span>
                                                    <span className={`px-3 py-1 rounded border shadow-sm ${
                                                        selectedHospital.affordability === 'premium' ? 'bg-[#a855f7]/10 border-[#a855f7]/30 text-[#a855f7]' : 
                                                        selectedHospital.affordability === 'standard' ? 'bg-[#3b82f6]/10 border-[#3b82f6]/30 text-[#3b82f6]' :
                                                        'bg-[#22c55e]/10 border-[#22c55e]/30 text-[#22c55e]'
                                                    }`}>
                                                        {selectedHospital.affordability} CLASS
                                                    </span>
                                                    <span className="bg-[#1b2230] px-3 py-1 rounded border border-[#eab308]/50 text-[#eab308]">PASSCODE: {selectedHospital.accessCode || 'NONE'}</span>
                                                </div>
                                            </div>
                                            <div className="bg-[#1b2230] p-3 rounded-lg border border-[#30394f] flex flex-col items-end">
                                               <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1">Status</span>
                                               <span className="text-[#22c55e] border border-[#22c55e]/30 bg-[#22c55e]/10 px-2 py-1 rounded text-xs font-bold tracking-wider flex items-center gap-2">
                                                   <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse"></span> ONLINE
                                               </span>
                                            </div>
                                         </div>
                                     </div>
                                 </div>

                                 {/* Details Grid */}
                                 <div className="grid grid-cols-2 gap-8 mb-8">
                                     {/* Capacity & Resources */}
                                     <div className="bg-[#1b2230] p-6 rounded-xl border border-[#30394f] shadow-inner relative overflow-hidden">
                                         <div className="absolute top-0 right-0 p-4 opacity-5"><Activity size={100} /></div>
                                         <h3 className="text-sm font-bold tracking-widest text-[#3b82f6] uppercase mb-6 flex items-center gap-2">
                                             <Activity size={16} /> Capacity & Resources
                                         </h3>
                                         
                                         <div className="space-y-6 relative z-10">
                                             <div>
                                                 <div className="flex justify-between text-sm mb-2">
                                                     <span className="text-gray-300 font-bold tracking-wider uppercase">General Wards</span>
                                                     <span className="text-lg font-bold font-mono text-white">{selectedHospital.capacity.generalBeds}</span>
                                                 </div>
                                                 <div className="w-full bg-[#2a3044] rounded-full h-2.5 shadow-inner">
                                                     <div className="bg-[#3b82f6] h-2.5 rounded-full shadow-[0_0_10px_#3b82f6]" style={{width: `${Math.min(100, (selectedHospital.capacity.generalBeds / 150) * 100)}%`}}></div>
                                                 </div>
                                             </div>
                                             
                                             <div>
                                                 <div className="flex justify-between text-sm mb-2">
                                                     <span className="text-gray-300 font-bold tracking-wider uppercase">ICU Capacity</span>
                                                     <span className="text-lg font-bold font-mono text-white">{selectedHospital.capacity.icuBeds}</span>
                                                 </div>
                                                 <div className="w-full bg-[#2a3044] rounded-full h-2.5 shadow-inner">
                                                     <div className="bg-[#eab308] h-2.5 rounded-full shadow-[0_0_10px_#eab308]" style={{width: `${Math.min(100, (selectedHospital.capacity.icuBeds / 30) * 100)}%`}}></div>
                                                 </div>
                                             </div>

                                             <div className="pt-4 border-t border-[#30394f] flex items-center justify-between">
                                                 <span className="text-gray-300 font-bold tracking-wider uppercase text-sm">On-Call Specialists</span>
                                                 <span className="text-2xl font-bold font-mono text-[#22c55e] bg-[#22c55e]/10 px-4 py-1 rounded-lg border border-[#22c55e]/20">
                                                    {selectedHospital.capacity.doctors}
                                                 </span>
                                             </div>
                                         </div>
                                     </div>

                                     {/* Specs & Location */}
                                     <div className="flex flex-col gap-6">
                                         <div className="bg-[#1b2230] p-6 rounded-xl border border-[#30394f] shadow-inner flex-1">
                                             <h3 className="text-sm font-bold tracking-widest text-[#eab308] uppercase mb-4 flex items-center gap-2">
                                                 <CheckCircle2 size={16} /> Specialized Capabilities
                                             </h3>
                                             <div className="flex flex-wrap gap-3">
                                                 {selectedHospital.capabilities.map(cap => (
                                                     <span key={cap} className="px-4 py-2 bg-[#2a3044] border border-[#3b4761] text-gray-200 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-2">
                                                         <span className="w-1.5 h-1.5 rounded-full bg-[#eab308]"></span> {cap}
                                                     </span>
                                                 ))}
                                                 {selectedHospital.capabilities.length === 0 && (
                                                     <span className="text-gray-500 font-mono text-sm">No specialized capabilities specified.</span>
                                                 )}
                                             </div>
                                         </div>

                                         <div className="bg-[#1b2230] p-6 rounded-xl border border-[#30394f] shadow-inner flex flex-col justify-center">
                                             <h3 className="text-sm font-bold tracking-widest text-[#22c55e] uppercase mb-4 flex items-center gap-2">
                                                 <MapPin size={16} /> Geographic Coordinates
                                             </h3>
                                             <div className="grid grid-cols-2 gap-4">
                                                 <div className="bg-[#212738] p-3 rounded border border-[#30394f] flex flex-col items-center justify-center">
                                                     <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1">LATITUDE</span>
                                                     <span className="text-white font-mono font-bold tracking-wider">{selectedHospital.location.latitude.toFixed(6)}</span>
                                                 </div>
                                                 <div className="bg-[#212738] p-3 rounded border border-[#30394f] flex flex-col items-center justify-center">
                                                     <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1">LONGITUDE</span>
                                                     <span className="text-white font-mono font-bold tracking-wider">{selectedHospital.location.longitude.toFixed(6)}</span>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 
                                 {/* Control Actions */}
                                 <div className="flex items-center gap-4 bg-[#1b2230] p-4 rounded-xl border border-[#30394f] justify-end">
                                    <button className="px-6 py-2.5 text-xs font-bold tracking-wider uppercase text-gray-300 hover:text-white transition-colors">
                                        View Logs
                                    </button>
                                    <button className="px-6 py-3 bg-[#3b82f6] hover:bg-[#60a5fa] text-white rounded-lg text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all flex items-center gap-2">
                                        <Truck size={16} /> Route Ambulance Here
                                    </button>
                                 </div>
                             </div>
                         ) : (
                             <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 bg-[#1b2230]/50 backdrop-blur-[2px]">
                                 <div className="w-24 h-24 mb-6 rounded-full bg-[#2a3044] flex items-center justify-center shadow-inner">
                                    <Building2 size={48} className="opacity-40" />
                                 </div>
                                 <h2 className="text-xl font-bold tracking-widest uppercase text-white mb-2 pb-2 border-b border-[#30394f]">No Hospital Selected</h2>
                                 <p className="text-sm font-mono text-gray-400 max-w-xs text-center leading-relaxed">Select a healthcare facility from the directory sidebar to review its real-time capacity and operational metrics.</p>
                             </div>
                         )}
                     </div>
                 </div>
              )}

              {activeTab === 'traffic' && (
                 <div className="flex-1 flex gap-6 h-full min-h-0 overflow-hidden">
                     {/* Left Sidebar: Traffic Signal Directory */}
                     <div className="w-1/3 min-w-[320px] bg-[#212738] border border-[#343d54] rounded-lg shadow-lg flex flex-col overflow-hidden shrink-0">
                         <div className="p-5 border-b border-[#30394f] bg-[#1a202d] shrink-0 flex items-center gap-3">
                             <Activity className="text-[#22c55e]" size={24} />
                             <div>
                                 <h3 className="font-bold tracking-widest uppercase text-white text-sm">Traffic Control</h3>
                                 <p className="text-[10px] text-gray-500 font-mono mt-1 font-bold">SELECT INTERSECTION TO MONITOR</p>
                             </div>
                         </div>
                         <div className="flex-1 overflow-y-auto p-3 space-y-3" style={{ scrollbarWidth: 'none' }}>
                             {mockTrafficSignals.map(signal => {
                                 // Mock determining busy status randomly
                                 const isCongested = Math.random() > 0.7;
                                 const state = trafficSignalOverrides[signal.id] || 'auto';
                                 
                                 return (
                                     <div 
                                         key={signal.id} 
                                         onClick={() => setSelectedAmbulanceForTraffic(signal as any)} // Overloading this state for purely mock toggle 
                                         className={`p-4 rounded-lg cursor-pointer border transition-all ${
                                             (selectedAmbulanceForTraffic as any)?.id === signal.id 
                                                 ? 'bg-[#3b82f6]/10 border-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.15)] scale-[1.02]' 
                                                 : 'bg-[#1b2230] border-[#30394f] hover:border-[#4b5563] hover:bg-[#1f2937]'
                                         }`}
                                     >
                                         <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-3 h-3 rounded-full shadow-inner border border-black/40 ${isCongested ? 'bg-[#ef4444] shadow-[0_0_8px_#ef4444]' : 'bg-[#22c55e] shadow-[0_0_8px_#22c55e]'}`}></div>
                                                <h4 className={`font-bold tracking-wide ${((selectedAmbulanceForTraffic as any)?.id === signal.id) ? 'text-[#3b82f6]' : 'text-white'}`}>
                                                   {signal.id.toUpperCase()} - {signal.name || "Intersection"}
                                                </h4>
                                            </div>
                                         </div>
                                         <div className="text-xs text-gray-400 font-mono mt-1.5 mb-2 whitespace-nowrap overflow-hidden text-ellipsis opacity-80">
                                            <MapPin size={10} className="inline mr-1" />
                                            {getMockAddress(signal.location.latitude, signal.location.longitude)}
                                         </div>
                                         <div className="flex gap-4 mt-3 text-[10px] font-bold tracking-wider font-mono uppercase">
                                             <div className="text-gray-400"><span className="text-gray-500">STATE:</span> <span className={state === 'auto' ? 'text-gray-300' : state === 'red' ? 'text-red-500' : state === 'yellow' ? 'text-yellow-500' : 'text-green-500'}>{state}</span></div>
                                             <div className="text-gray-400"><span className="text-gray-500">DENSITY:</span> <span className={isCongested ? 'text-[#ef4444]' : 'text-[#22c55e]'}>{isCongested ? 'HIGH' : 'NORMAL'}</span></div>
                                         </div>
                                     </div>
                                 )
                             })}
                         </div>
                     </div>

                     {/* Right Panel: Signal details */}
                     <div className="flex-1 bg-[#212738] border border-[#343d54] rounded-lg shadow-lg flex flex-col overflow-auto relative">
                         {selectedAmbulanceForTraffic ? (
                             <div className="p-8 pb-12 animate-in fade-in duration-300">
                                 {/* Header */}
                                 <div className="flex items-start gap-6 border-b border-[#30394f] pb-8 mb-8">
                                     <div className="w-20 h-20 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] border-2 border-[#60a5fa] shadow-[0_0_20px_rgba(59,130,246,0.3)] rounded-xl flex flex-col items-center justify-center gap-1 shrink-0 p-2">
                                         <div className={`w-3.5 h-3.5 rounded-full ${trafficSignalOverrides[(selectedAmbulanceForTraffic as any).id] === 'red' ? 'bg-[#ef4444] shadow-[0_0_10px_#ef4444]' : 'bg-red-900/40'} shadow-inner border border-black/30`}></div>
                                         <div className={`w-3.5 h-3.5 rounded-full ${trafficSignalOverrides[(selectedAmbulanceForTraffic as any).id] === 'yellow' ? 'bg-[#eab308] shadow-[0_0_10px_#eab308]' : 'bg-yellow-900/40'} shadow-inner border border-black/30`}></div>
                                         <div className={`w-3.5 h-3.5 rounded-full ${(!trafficSignalOverrides[(selectedAmbulanceForTraffic as any).id] || trafficSignalOverrides[(selectedAmbulanceForTraffic as any).id] === 'green') ? 'bg-[#22c55e] shadow-[0_0_10px_#22c55e]' : 'bg-green-900/40'} shadow-inner border border-black/30`}></div>
                                     </div>
                                     <div className="flex-1">
                                         <div className="flex justify-between items-start">
                                            <div>
                                                <h2 className="text-3xl font-bold text-white tracking-wider mb-2">{((selectedAmbulanceForTraffic as any).name) || "City Intersection"}</h2>
                                                <div className="text-sm text-gray-400 font-mono mb-3 uppercase tracking-wider">
                                                    <MapPin size={14} className="inline mr-1" />
                                                    {getMockAddress((selectedAmbulanceForTraffic as any).location.latitude, (selectedAmbulanceForTraffic as any).location.longitude)}
                                                </div>
                                                <div className="flex gap-4 text-xs font-bold tracking-widest uppercase font-mono mt-2">
                                                    <span className="bg-[#242b3d] px-3 py-1 rounded border border-[#3b4761] text-gray-300">ATS NODE: {(selectedAmbulanceForTraffic as any).id}</span>
                                                    <span className={`px-3 py-1 rounded border shadow-sm ${
                                                        trafficSignalOverrides[(selectedAmbulanceForTraffic as any).id]
                                                            ? 'bg-red-500/10 border-red-500/30 text-red-500'
                                                            : 'bg-[#3b82f6]/10 border-[#3b82f6]/30 text-[#3b82f6]'
                                                    }`}>
                                                        {trafficSignalOverrides[(selectedAmbulanceForTraffic as any).id] ? 'MANUAL OVERRIDE ACTIVE' : 'CONNECTED TO GRID'}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bg-[#1b2230] p-3 rounded-lg border border-[#30394f] flex flex-col items-end">
                                               <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1">AI OVERRIDE STATUS</span>
                                               <span className="text-gray-400 border border-[#343d54] bg-[#242b3d] px-2 py-1 rounded text-xs font-bold tracking-wider flex items-center gap-2">
                                                   STANDBY / AUTO
                                               </span>
                                            </div>
                                         </div>
                                     </div>
                                 </div>

                                 {/* Parameters Matrix */}
                                 <h3 className="text-sm font-bold tracking-widest text-[#3b82f6] uppercase mb-6 flex items-center gap-2">
                                     <Activity size={16} /> Live Intersection Telemetry
                                 </h3>
                                 <div className="grid grid-cols-2 gap-6">
                                     <div className="bg-[#1b2230] border border-[#30394f] rounded-xl p-5 shadow-inner">
                                         <h4 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase border-b border-[#30394f] pb-2 mb-4">Current Cycle Times</h4>
                                         <div className="space-y-4">
                                            <div className="flex justify-between items-center text-sm font-mono tracking-wider">
                                                <span className="text-gray-300 flex items-center gap-2"><div className="w-2.5 h-2.5 rounded bg-red-500"></div> N-S Red Phase</span>
                                                <span className="text-white font-bold">45.0s</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm font-mono tracking-wider">
                                                <span className="text-gray-300 flex items-center gap-2"><div className="w-2.5 h-2.5 rounded bg-[#22c55e]"></div> N-S Green Phase</span>
                                                <span className="text-white font-bold">90.5s</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm font-mono tracking-wider pt-4 border-t border-[#30394f]">
                                                <span className="text-gray-300 flex items-center gap-2"><div className="w-2.5 h-2.5 rounded bg-red-500"></div> E-W Red Phase</span>
                                                <span className="text-white font-bold">95.0s</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm font-mono tracking-wider">
                                                <span className="text-gray-300 flex items-center gap-2"><div className="w-2.5 h-2.5 rounded bg-[#22c55e]"></div> E-W Green Phase</span>
                                                <span className="text-white font-bold">40.5s</span>
                                            </div>
                                         </div>
                                     </div>

                                     <div className="flex flex-col gap-6">
                                        <div className="bg-[#1b2230] border border-[#30394f] rounded-xl p-5 shadow-inner flex-1 flex flex-col justify-center items-center">
                                            <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1">THROUGHPUT RATE</span>
                                            <div className="text-4xl font-bold font-mono text-white mb-1">1,402</div>
                                            <span className="text-[#eab308] text-xs font-bold tracking-wider">VEHICLES / HOUR</span>
                                        </div>
                                        <div className="bg-[#1b2230] border border-[#30394f] rounded-xl p-5 shadow-inner flex-1 flex flex-col justify-center items-center">
                                            <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1">CONGESTION LEVEL</span>
                                            <div className="w-full bg-[#2a3044] rounded-full h-3 mt-3 mb-2">
                                                <div className="bg-gradient-to-r from-[#22c55e] via-[#eab308] to-[#ef4444] h-3 rounded-full" style={{width: `${Math.floor(Math.random() * 60) + 20}%`}}></div>
                                            </div>
                                            <span className="text-gray-400 text-xs font-bold font-mono tracking-wider">MODERATE</span>
                                        </div>
                                     </div>
                                 </div>
                                 
                                 <div className="mt-8 pt-6 border-t border-[#30394f]">
                                     <h4 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">Manual Signal Override Control</h4>
                                     <div className="flex items-center gap-4">
                                         <button 
                                             onClick={() => setTrafficSignalOverrides(prev => ({...prev, [(selectedAmbulanceForTraffic as any).id]: 'red'}))}
                                             className={`flex-1 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors ${trafficSignalOverrides[(selectedAmbulanceForTraffic as any).id] === 'red' ? 'bg-[#ef4444] text-white shadow-[0_0_15px_#ef4444]' : 'bg-[#2a3044] text-gray-400 hover:bg-[#ef4444]/20 hover:text-[#ef4444]'}`}>
                                             Force Red Phase
                                         </button>
                                         <button 
                                             onClick={() => setTrafficSignalOverrides(prev => ({...prev, [(selectedAmbulanceForTraffic as any).id]: 'yellow'}))}
                                             className={`flex-1 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors ${trafficSignalOverrides[(selectedAmbulanceForTraffic as any).id] === 'yellow' ? 'bg-[#eab308] text-white shadow-[0_0_15px_#eab308]' : 'bg-[#2a3044] text-gray-400 hover:bg-[#eab308]/20 hover:text-[#eab308]'}`}>
                                             Force Yellow Phase
                                         </button>
                                         <button 
                                             onClick={() => setTrafficSignalOverrides(prev => ({...prev, [(selectedAmbulanceForTraffic as any).id]: 'green'}))}
                                             className={`flex-1 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors ${trafficSignalOverrides[(selectedAmbulanceForTraffic as any).id] === 'green' ? 'bg-[#22c55e] text-white shadow-[0_0_15px_#22c55e]' : 'bg-[#2a3044] text-gray-400 hover:bg-[#22c55e]/20 hover:text-[#22c55e]'}`}>
                                             Force Green
                                         </button>
                                         <button 
                                             onClick={() => {
                                                 const newOverrides = {...trafficSignalOverrides};
                                                 delete newOverrides[(selectedAmbulanceForTraffic as any).id];
                                                 setTrafficSignalOverrides(newOverrides);
                                             }}
                                             className={`w-36 py-3 bg-[#1b2230] border border-[#3b82f6]/50 text-[#3b82f6] hover:bg-[#3b82f6]/10 rounded-lg text-xs font-bold tracking-wider uppercase transition-all ${!trafficSignalOverrides[(selectedAmbulanceForTraffic as any).id] ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                             Reset (Auto)
                                         </button>
                                     </div>
                                 </div>

                             </div>
                         ) : (
                             <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 bg-[#1b2230]/50 backdrop-blur-[2px]">
                                 <div className="w-24 h-24 mb-6 rounded-full bg-[#2a3044] flex items-center justify-center shadow-inner pt-2 pb-1 flex-col gap-1">
                                    <div className="w-4 h-4 rounded-full bg-[#343d54]"></div>
                                    <div className="w-4 h-4 rounded-full bg-[#343d54]"></div>
                                    <div className="w-4 h-4 rounded-full bg-[#343d54]"></div>
                                 </div>
                                 <h2 className="text-xl font-bold tracking-widest uppercase text-white mb-2 pb-2 border-b border-[#30394f]">No Signal Selected</h2>
                                 <p className="text-sm font-mono text-gray-400 max-w-xs text-center leading-relaxed">Select an active intersection from the grid layout to monitor realtime traffic flow and routing configurations.</p>
                             </div>
                         )}
                     </div>
                 </div>
              )}

              {activeTab === 'analytics' && (
                 <div className="flex-1 flex flex-col gap-6 h-full overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                     {/* Dashboard Header Banner */}
                     <div className="bg-gradient-to-r from-[#170f2b] to-[#212738] border border-[#3b2d59] rounded-xl p-6 shadow-[0_0_25px_rgba(139,92,246,0.15)] flex justify-between items-center shrink-0">
                         <div className="flex items-center gap-4">
                             <div className="bg-[#8b5cf6]/20 p-4 rounded-lg border border-[#8b5cf6]/40 text-[#a78bfa] shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                                 <Server size={32} />
                             </div>
                             <div>
                                 <h2 className="text-2xl font-bold tracking-widest uppercase text-white drop-shadow-md">AI Optimization Engine</h2>
                                 <p className="text-sm font-mono text-[#a78bfa] font-bold tracking-wider mt-1 opacity-90 text-shadow-sm">MODEL V4.2.0-PROD • PROCESSING LIVE EMERGENCY DATA</p>
                             </div>
                         </div>
                         <div className="flex gap-4">
                             <div className="bg-black/40 p-3 rounded border border-[#343d54] flex flex-col items-end">
                                 <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">LATENCY</span>
                                 <span className="text-white font-mono font-bold">14ms</span>
                             </div>
                             <div className="bg-black/40 p-3 rounded border border-[#343d54] flex flex-col items-end">
                                 <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">LAST TRAINING CYCLE</span>
                                 <span className="text-[#22c55e] font-mono font-bold">02:00 AM (SUCCESS)</span>
                             </div>
                         </div>
                     </div>

                     {/* Key AI Metrics */}
                     <div className="grid grid-cols-4 gap-6 shrink-0">
                         <div className="bg-[#212738] border border-[#3b2d59] p-5 rounded-xl shadow-lg relative overflow-hidden group hover:border-[#8b5cf6]/50 transition-colors">
                            <h4 className="text-[10px] font-bold tracking-widest text-[#a78bfa] uppercase mb-4 opacity-80 border-b border-[#343d54] pb-2">PREDICTION ACCURACY</h4>
                            <div className="text-3xl font-bold text-white font-mono hover:text-[#c4b5fd] transition-colors">94.8%</div>
                            <div className="text-[#22c55e] text-[10px] font-bold mt-2 font-mono flex items-center gap-1">↑ 1.2% VS LAST MONTH</div>
                         </div>
                         <div className="bg-[#212738] border border-[#343d54] p-5 rounded-xl shadow-lg relative overflow-hidden group hover:border-[#8b5cf6]/50 transition-colors">
                            <h4 className="text-[10px] font-bold tracking-widest text-[#a78bfa] uppercase mb-4 opacity-80 border-b border-[#343d54] pb-2">AVG. PREEMPTION SAVINGS</h4>
                            <div className="text-3xl font-bold text-white font-mono">-4.5<span className="text-lg opacity-50">MIN</span></div>
                            <div className="text-[#22c55e] text-[10px] font-bold mt-2 font-mono flex items-center gap-1">↑ 0.8m VS LAST WEEK</div>
                         </div>
                         <div className="bg-[#212738] border border-[#343d54] p-5 rounded-xl shadow-lg relative overflow-hidden group hover:border-[#8b5cf6]/50 transition-colors">
                            <h4 className="text-[10px] font-bold tracking-widest text-[#a78bfa] uppercase mb-4 opacity-80 border-b border-[#343d54] pb-2">FALSE POSITIVE ALERTS</h4>
                            <div className="text-3xl font-bold text-white font-mono">0.02%</div>
                            <div className="text-gray-400 text-[10px] font-bold mt-2 font-mono">STABLE ACROSS 14k EVENTS</div>
                         </div>
                         <div className="bg-[#212738] border border-[#343d54] p-5 rounded-xl shadow-lg relative overflow-hidden group hover:border-[#8b5cf6]/50 transition-colors">
                            <h4 className="text-[10px] font-bold tracking-widest text-[#a78bfa] uppercase mb-4 opacity-80 border-b border-[#343d54] pb-2">HOSPITAL OVERLOAD PREVENTION</h4>
                            <div className="text-3xl font-bold text-white font-mono">142</div>
                            <div className="text-[#22c55e] text-[10px] font-bold mt-2 font-mono">REROUTES IN LAST 24H</div>
                         </div>
                     </div>

                     {/* Visual Data Matrix */}
                     <div className="flex gap-6 flex-1 min-h-[300px]">
                         {/* Trend Bar Chart */}
                         <div className="flex-1 bg-[#212738] border border-[#343d54] p-6 rounded-xl shadow-lg flex flex-col relative">
                             <h4 className="text-sm font-bold tracking-widest text-[#a78bfa] uppercase mb-4 flex items-center justify-between border-b border-[#30394f] pb-3">
                                Dynamic Neural Link Adjustments
                                <span className="bg-[#a78bfa]/20 text-[#a78bfa] text-[10px] px-2 py-1 rounded border border-[#a78bfa]/50">LIVE SYSTEM</span>
                             </h4>
                             <p className="text-gray-300 text-sm font-medium leading-relaxed mb-6 font-mono bg-black/30 p-4 rounded border border-[#30394f]">
                                 The AI allocates hospitals by dynamically balancing internal parameters (e.g., ICU capacity, specialists) and real-time traffic nodes. The neural link continuously adjusts global routing priorities to combat urban fragmentation and reduce Golden Hour response loss.
                             </p>
                             <div className="flex-1 flex items-end gap-3 justify-between mt-auto mx-4 pb-2">
                                 {[65, 59, 80, 81, 56, 95, 120].map((val, i) => (
                                     <div key={i} className="w-full flex flex-col items-center gap-2 group cursor-crosshair">
                                         <div className="h-48 w-full bg-[#1b2230] rounded-sm relative flex items-end overflow-hidden group-hover:bg-[#161c28]">
                                             <div className="w-full bg-gradient-to-t from-[#6d28d9] to-[#8b5cf6] rounded-t-sm shadow-[0_0_10px_#8b5cf6] transition-all duration-500 ease-out" style={{height: `${(val / 120) * 100}%`}}></div>
                                         </div>
                                         <span className="text-xs font-mono font-bold text-gray-500 uppercase group-hover:text-gray-300 transition-colors">DAY {i+1}</span>
                                     </div>
                                 ))}
                             </div>
                         </div>
                         
                         {/* Resource Demand Heatmap (Mocked text representation) */}
                         <div className="w-[400px] bg-[#212738] border border-[#343d54] p-6 rounded-xl shadow-lg flex flex-col gap-6 shrink-0">
                            <h4 className="text-sm font-bold tracking-widest text-white uppercase flex items-center justify-between border-b border-[#30394f] pb-3">
                                Predictive Load Heatmap <span className="text-[10px] font-mono text-[#eab308] bg-[#eab308]/10 px-2 py-1 rounded border border-[#eab308]/30">NEXT 2 HRS</span>
                            </h4>
                            <div className="flex flex-col gap-4 flex-1 justify-center">
                                <div className="space-y-1 group">
                                    <div className="flex justify-between text-[10px] font-bold tracking-widest font-mono text-gray-400 uppercase mb-2">
                                        <span>Cardiac Arrest Incidence</span> <span className="text-[#e84142] group-hover:scale-110 transition-transform origin-right">HIGH RISK SECTOR 4</span>
                                    </div>
                                    <div className="w-full bg-[#1b2230] h-3 rounded-full overflow-hidden border border-black/50 shadow-inner"><div className="bg-[#e84142] h-full rounded-full shadow-[0_0_15px_#e84142] transition-all duration-1000" style={{width: '88%'}}></div></div>
                                </div>
                                <div className="space-y-1 group">
                                    <div className="flex justify-between text-[10px] font-bold tracking-widest font-mono text-gray-400 uppercase mb-2 mt-2">
                                        <span>Trauma Event Vectoring</span> <span className="text-[#eab308] group-hover:scale-110 transition-transform origin-right">ELEVATED HIGHWAY 49</span>
                                    </div>
                                    <div className="w-full bg-[#1b2230] h-3 rounded-full overflow-hidden border border-black/50 shadow-inner"><div className="bg-[#eab308] h-full rounded-full shadow-[0_0_15px_#eab308] transition-all duration-1000" style={{width: '62%'}}></div></div>
                                </div>
                                <div className="space-y-1 group">
                                    <div className="flex justify-between text-[10px] font-bold tracking-widest font-mono text-gray-400 uppercase mb-2 mt-2">
                                        <span>Emergency Ward Demand</span> <span className="text-[#22c55e] group-hover:scale-110 transition-transform origin-right">NOMINAL CAPACITY</span>
                                    </div>
                                    <div className="w-full bg-[#1b2230] h-3 rounded-full overflow-hidden border border-black/50 shadow-inner"><div className="bg-[#22c55e] h-full rounded-full shadow-[0_0_15px_#22c55e] transition-all duration-1000" style={{width: '35%'}}></div></div>
                                </div>
                            </div>
                         </div>
                     </div>
                 </div>
              )}

              {activeTab === 'logs' && (
                 <div className="flex-1 flex flex-col gap-4 h-full overflow-hidden bg-[#1b2230] p-6 rounded-xl border border-[#30394f] shadow-2xl relative">
                     {/* Logs Header */}
                     <div className="border-b border-[#30394f] pb-4 flex items-center justify-between shrink-0">
                         <div className="flex items-center gap-3">
                             <div className="bg-[#eab308]/20 p-2 rounded text-[#eab308]">
                                <AlertOctagon size={24} />
                             </div>
                             <div>
                                <h2 className="text-xl font-bold tracking-widest uppercase text-white">Immutable Event Ledger</h2>
                                <p className="text-[10px] font-mono text-gray-500 mt-1 uppercase">Cryptographically signed system audit trail</p>
                             </div>
                         </div>
                         <div className="flex gap-4 items-center">
                             <span className="text-xs font-mono font-bold text-[#22c55e] flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping"></span> LIVE SYNCING</span>
                             <button className="bg-[#242b3d] text-gray-300 border border-[#343d54] px-4 py-2 rounded text-xs uppercase font-bold tracking-wider hover:bg-[#30394f] transition-colors">Export Logs CSV</button>
                         </div>
                     </div>

                     {/* Logs Table */}
                     <div className="flex-1 overflow-y-auto pr-2 rounded bg-black/20 font-mono text-sm border border-black/30 shadow-inner" style={{ scrollbarWidth: 'thin' }}>
                         <table className="w-full text-left">
                             <thead className="bg-[#141824] text-[10px] uppercase tracking-widest text-gray-500 sticky top-0 z-10 shadow-sm border-b border-[#343d54]">
                                 <tr>
                                     <th className="px-5 py-3 font-bold w-48">Timestamp</th>
                                     <th className="px-5 py-3 font-bold w-32">Event Hash</th>
                                     <th className="px-5 py-3 font-bold w-32">System Module</th>
                                     <th className="px-5 py-3 font-bold">Action / Trigger</th>
                                 </tr>
                             </thead>
                             <tbody className="divide-y divide-[#30394f] text-xs">
                                 {(() => {
                                     // We mix our real actual generated logs with fake historic ones to build a fully robust ledger visualization
                                     const rawAuditLogs = [
                                         ...activityLogs,
                                         ...Array.from({length: 40}).map((_, i) => ({
                                             id: `hist-${i}`,
                                             message: i % 3 === 0 ? "TRAFFIC ATS HEARTBEAT ACKNOWLEDGED" : (i % 5 === 0 ? "HOSPITAL GATEWAY HEALTH-CHECK OK" : "AI MODEL INFERENCE CYCLE COMPLETED [SUB 15MS]"),
                                             time: Date.now() - 60000 - (i * 15000),
                                             isAction: false
                                         }))
                                     ].sort((a,b) => b.time - a.time); // most recent first

                                     return rawAuditLogs.map((log) => {
                                         const dt = new Date(log.time);
                                         const timeString = `${dt.getFullYear()}-${(dt.getMonth()+1).toString().padStart(2,'0')}-${dt.getDate().toString().padStart(2,'0')} ${dt.toTimeString().split(' ')[0]}`;
                                         const moduleType = log.isAction ? 'DISPATCH_ENG' : (log.message.includes('TRAFFIC') ? 'TRAFFIC_ATS' : (log.message.includes('HOSPITAL') ? 'HOSP_BRIDGE' : 'AI_CORE'));
                                         
                                         // Pseudo hash for looks
                                         const pseudoHash = "0x" + Math.random().toString(16).substring(2, 8).toUpperCase() + "..."

                                         return (
                                             <tr key={log.id} className="hover:bg-[#202738] transition-colors group cursor-crosshair">
                                                 <td className="px-5 py-4 text-gray-500 font-bold opacity-80">{timeString}</td>
                                                 <td className="px-5 py-4 text-gray-600 group-hover:text-blue-400 transition-colors">{pseudoHash}</td>
                                                 <td className="px-5 py-4">
                                                     <span className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-wider shadow-sm uppercase ${
                                                        moduleType === 'DISPATCH_ENG' ? 'bg-[#3b82f6]/20 text-[#60a5fa] border border-[#3b82f6]/30' :
                                                        moduleType === 'TRAFFIC_ATS' ? 'bg-[#eab308]/20 text-[#facc15] border border-[#eab308]/30' :
                                                        moduleType === 'HOSP_BRIDGE' ? 'bg-[#22c55e]/20 text-[#4ade80] border border-[#22c55e]/30' :
                                                        'bg-[#a855f7]/20 text-[#c084fc] border border-[#a855f7]/30'
                                                     }`}>{moduleType}</span>
                                                 </td>
                                                 <td className={`px-5 py-4 font-bold tracking-wide ${log.isAction ? 'text-white' : 'text-gray-400'}`}>
                                                     {log.message}
                                                 </td>
                                             </tr>
                                         );
                                     })
                                 })()}
                             </tbody>
                         </table>
                     </div>
                 </div>
              )}

              {activeTab === 'users' && (
                 <div className="flex-1 flex flex-col gap-5 h-full">
                     <div className="bg-[#212738] border border-[#343d54] rounded-lg p-6 shadow-lg flex justify-between items-center shrink-0">
                         <div className="flex gap-6 items-center">
                             <div>
                                <h2 className="text-xl font-bold tracking-widest uppercase text-white flex items-center gap-3">
                                   <Users className="text-[#f97316]" size={24} /> System Users & Directory
                                </h2>
                                <p className="text-sm opacity-60 font-mono mt-1">Manage personnel, vehicles, and hospital network.</p>
                             </div>
                             <div className="flex bg-[#1a1f2e] p-1 rounded-lg border border-[#343d54]">
                                <button onClick={() => setUserTabMode('drivers')} className={`px-4 py-2 font-bold text-xs uppercase tracking-wider rounded transition-colors ${userTabMode === 'drivers' ? 'bg-[#3b82f6] text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>Drivers</button>
                                <button onClick={() => setUserTabMode('hospitals')} className={`px-4 py-2 font-bold text-xs uppercase tracking-wider rounded transition-colors ${userTabMode === 'hospitals' ? 'bg-[#22c55e] text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>Hospitals</button>
                             </div>
                         </div>
                         <button 
                             onClick={() => {
                                 if (userTabMode === 'drivers') {
                                     setLocalUsers([...localUsers, { id: `amb-${Math.floor(Math.random()*1000)}`, name: 'New Driver', status: 'idle', location: { latitude: 12.9716, longitude: 77.5946 }, lastUpdate: Date.now() }]);
                                 } else {
                                     setLocalHospitals([...localHospitals, { id: `hosp-${Math.floor(Math.random()*1000)}`, name: 'New Hospital Center', location: { latitude: 12.9716, longitude: 77.5946 }, capacity: { icuBeds: 10, generalBeds: 50, doctors: 5 }, capabilities: ['other'], affordability: 'standard' }]);
                                 }
                             }}
                            className="bg-[#242b3d] text-white border border-[#343d54] px-4 py-2 font-bold text-xs tracking-wider rounded uppercase hover:bg-[#343d54] hover:border-gray-500 transition-colors shadow-sm">
                            + ADD NEW {userTabMode === 'drivers' ? 'DRIVER' : 'HOSPITAL'}
                         </button>
                     </div>

                     <div className="flex-1 overflow-auto bg-[#1a1f2e] border border-[#2a3044] rounded-lg shadow-inner p-1">
                        <table className="w-full text-left text-sm text-gray-300">
                           <thead className="text-[10px] font-bold tracking-widest uppercase text-gray-500 bg-[#141824] sticky top-0 z-10 shadow-sm">
                              <tr>
                                 {userTabMode === 'drivers' ? (
                                     <>
                                         <th className="px-6 py-4 w-32">Status</th>
                                         <th className="px-6 py-4">Driver Name (Editable)</th>
                                         <th className="px-6 py-4">Ambulance ID</th>
                                         <th className="px-6 py-4">Location</th>
                                         <th className="px-6 py-4 text-right">Actions</th>
                                     </>
                                 ) : (
                                     <>
                                         <th className="px-6 py-4">Hospital Name (Editable)</th>
                                         <th className="px-6 py-4 w-32">ID</th>
                                         <th className="px-6 py-4">ICU Capacity</th>
                                         <th className="px-6 py-4">Affordability</th>
                                         <th className="px-6 py-4 text-right">Actions</th>
                                     </>
                                 )}
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-[#2a3044]">
                               {userTabMode === 'drivers' ? (
                                   localUsers.map(a => (
                                     <tr key={a.id} className="hover:bg-[#202738] transition-colors group">
                                        <td className="px-6 py-4">
                                           <span className={`px-2 py-1 rounded text-[10px] font-bold tracking-wider shadow-sm uppercase ${
                                              a.status === 'idle' ? 'bg-[#22c55e] text-[#064e3b]' : 
                                              a.status === 'enroute' || a.status === 'transporting' ? 'bg-[#eab308] text-[#713f12]' : 
                                              'bg-[#e84142] text-white'
                                           }`}>
                                              {a.status}
                                           </span>
                                        </td>
                                        <td className="px-6 py-4 font-bold text-white tracking-wide">
                                            {editingUserId === a.id ? (
                                                <input 
                                                    autoFocus
                                                    value={a.name} 
                                                    onChange={(e) => setLocalUsers(localUsers.map(u => u.id === a.id ? { ...u, name: e.target.value } : u))}
                                                    onBlur={() => setEditingUserId(null)}
                                                    onKeyDown={(e) => { if(e.key === 'Enter') setEditingUserId(null); }}
                                                    className="bg-[#141824] border border-[#3b82f6] px-2 py-1 rounded outline-none text-white w-full shadow-inner"
                                                />
                                            ) : (
                                                <span>{a.name}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 font-mono font-bold text-[#3b82f6]">{a.id.toUpperCase()}</td>
                                        <td className="px-6 py-4 font-mono text-xs opacity-70">{a.location.latitude.toFixed(4)}, {a.location.longitude.toFixed(4)}</td>
                                        <td className="px-6 py-4 text-right flex justify-end gap-3 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                           {editingUserId === a.id ? (
                                                <button 
                                                    onClick={() => setEditingUserId(null)}
                                                    className="text-[#22c55e] font-bold text-[10px] uppercase tracking-wider p-1 hover:bg-[#22c55e]/20 rounded border border-transparent hover:border-[#22c55e]/50">
                                                    Save
                                                </button>
                                           ) : (
                                                <button 
                                                    onClick={() => setEditingUserId(a.id)}
                                                    className="text-[#3b82f6] font-bold text-[10px] uppercase tracking-wider p-1 hover:bg-[#3b82f6]/20 rounded border border-transparent hover:border-[#3b82f6]/50">
                                                    Edit
                                                </button>
                                           )}
                                           <button 
                                                onClick={() => setLocalUsers(localUsers.map(u => u.id === a.id ? { ...u, status: u.status === 'idle' ? 'enroute' : 'idle' } : u))}
                                                className="text-[#eab308] font-bold text-[10px] uppercase tracking-wider p-1 hover:bg-[#eab308]/20 rounded border border-transparent hover:border-[#eab308]/50">
                                               Toggle Status
                                           </button>
                                           <button 
                                                onClick={() => setLocalUsers(localUsers.filter(u => u.id !== a.id))}
                                                className="text-[#ef4444] font-bold text-[10px] uppercase tracking-wider p-1 hover:bg-[#ef4444]/20 rounded border border-transparent hover:border-[#ef4444]/50">
                                               Delete
                                           </button>
                                        </td>
                                     </tr>
                                  ))
                               ) : (
                                   localHospitals.map(h => (
                                     <tr key={h.id} className="hover:bg-[#202738] transition-colors group">
                                        <td className="px-6 py-4 font-bold text-white tracking-wide">
                                            {editingHospitalId === h.id ? (
                                                <input 
                                                    autoFocus
                                                    value={h.name} 
                                                    onChange={(e) => setLocalHospitals(localHospitals.map(x => x.id === h.id ? { ...x, name: e.target.value } : x))}
                                                    onBlur={() => setEditingHospitalId(null)}
                                                    onKeyDown={(e) => { if(e.key === 'Enter') setEditingHospitalId(null); }}
                                                    className="bg-[#141824] border border-[#22c55e] px-2 py-1 rounded outline-none text-white w-full shadow-inner"
                                                />
                                            ) : (
                                                <span>{h.name}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 font-mono font-bold text-[#22c55e]">{h.id.toUpperCase()}</td>
                                        <td className="px-6 py-4 font-mono text-xs opacity-70">
                                            <span className="text-white font-bold">{h.capacity?.icuBeds || 0}</span> BEDS OPEN
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded text-[10px] font-bold tracking-wider shadow-sm uppercase ${
                                                h.affordability === 'premium' ? 'bg-[#a855f7]/20 text-[#c084fc] border border-[#a855f7]/30' : 
                                                h.affordability === 'standard' ? 'bg-[#3b82f6]/20 text-[#60a5fa] border border-[#3b82f6]/30' : 
                                                'bg-[#22c55e]/20 text-[#4ade80] border border-[#22c55e]/30'
                                            }`}>
                                                {h.affordability || 'standard'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right flex justify-end gap-3 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                           {editingHospitalId === h.id ? (
                                                <button 
                                                    onClick={() => setEditingHospitalId(null)}
                                                    className="text-[#22c55e] font-bold text-[10px] uppercase tracking-wider p-1 hover:bg-[#22c55e]/20 rounded border border-transparent hover:border-[#22c55e]/50">
                                                    Save
                                                </button>
                                           ) : (
                                                <button 
                                                    onClick={() => setEditingHospitalId(h.id)}
                                                    className="text-[#eab308] font-bold text-[10px] uppercase tracking-wider p-1 hover:bg-[#eab308]/20 rounded border border-transparent hover:border-[#eab308]/50">
                                                    Edit
                                                </button>
                                            )}
                                           <button 
                                                onClick={() => setLocalHospitals(localHospitals.map(x => x.id === h.id ? { ...x, affordability: x.affordability === 'budget' ? 'standard' : x.affordability === 'standard' ? 'premium' : 'budget' } : x))}
                                                className="text-[#3b82f6] font-bold text-[10px] uppercase tracking-wider p-1 hover:bg-[#3b82f6]/20 rounded border border-transparent hover:border-[#3b82f6]/50">
                                               Edit Class
                                           </button>
                                           <button 
                                                onClick={() => setLocalHospitals(localHospitals.filter(x => x.id !== h.id))}
                                                className="text-[#ef4444] font-bold text-[10px] uppercase tracking-wider p-1 hover:bg-[#ef4444]/20 rounded border border-transparent hover:border-[#ef4444]/50">
                                               Delete
                                           </button>
                                        </td>
                                     </tr>
                                   ))
                               )}
                           </tbody>
                        </table>
                     </div>
                 </div>
              )}

              {activeTab === 'settings' && (
                 <div className="flex-1 overflow-auto bg-[#1b2230] p-8 rounded-xl border border-[#30394f] shadow-2xl" style={{ scrollbarWidth: 'thin' }}>
                     <div className="flex items-center gap-4 border-b border-[#30394f] pb-6 mb-8">
                         <div className="bg-[#3b82f6]/20 p-3 rounded text-[#60a5fa]">
                             <Settings size={28} />
                         </div>
                         <div>
                             <h2 className="text-2xl font-bold tracking-widest uppercase text-white">Platform Settings</h2>
                             <p className="text-sm font-mono text-gray-500 mt-1 uppercase">Global dispatch, traffic, and AI configurations.</p>
                         </div>
                     </div>

                     <div className="max-w-2xl space-y-8">
                         {/* Setting Block */}
                         <div className="bg-[#212738] border border-[#343d54] p-6 rounded-lg shadow flex items-center justify-between hover:border-[#4b5563] transition-colors">
                             <div>
                                 <h3 className="text-white font-bold tracking-wide flex items-center gap-2">Automated Incident Dispatch <Server size={14} className="text-[#8b5cf6]" /></h3>
                                 <p className="text-sm text-gray-400 font-mono mt-2 pr-10">Allow PRANA AI to automatically dispatch the nearest available ambulance without human operator approval.</p>
                             </div>
                             <div 
                                onClick={() => setSettingsForm({...settingsForm, autoDispatch: !settingsForm.autoDispatch})}
                                className={`w-14 h-7 rounded-full flex items-center p-1 cursor-pointer transition-colors border ${settingsForm.autoDispatch ? 'bg-[#22c55e]/20 border-[#22c55e] justify-end' : 'bg-black/50 border-[#343d54] justify-start'}`}>
                                 <div className={`w-5 h-5 rounded-full shadow-sm ${settingsForm.autoDispatch ? 'bg-[#22c55e]' : 'bg-gray-500'}`}></div>
                             </div>
                         </div>
                         
                         {/* Setting Block */}
                         <div className="bg-[#212738] border border-[#343d54] p-6 rounded-lg shadow flex items-center justify-between hover:border-[#4b5563] transition-colors">
                             <div>
                                 <h3 className="text-white font-bold tracking-wide flex items-center gap-2">Traffic Signal Preemption Mode <Activity size={14} className="text-[#22c55e]" /></h3>
                                 <p className="text-sm text-gray-400 font-mono mt-2 pr-10">Grant active critical emergency vehicles priority override on city traffic infrastructure.</p>
                             </div>
                             <div 
                                onClick={() => setSettingsForm({...settingsForm, trafficPreemption: !settingsForm.trafficPreemption})}
                                className={`w-14 h-7 rounded-full flex items-center p-1 cursor-pointer transition-colors border ${settingsForm.trafficPreemption ? 'bg-[#22c55e]/20 border-[#22c55e] justify-end' : 'bg-black/50 border-[#343d54] justify-start'}`}>
                                 <div className={`w-5 h-5 rounded-full shadow-sm ${settingsForm.trafficPreemption ? 'bg-[#22c55e]' : 'bg-gray-500'}`}></div>
                             </div>
                         </div>
                         
                         {/* Setting Block */}
                         <div className="bg-[#212738] border border-[#343d54] p-6 rounded-lg shadow flex items-center justify-between hover:border-[#4b5563] transition-colors">
                             <div>
                                 <h3 className="text-white font-bold tracking-wide flex items-center gap-2">AI-Driven Hospital Allocation <Building2 size={14} className="text-[#3b82f6]" /></h3>
                                 <p className="text-sm text-gray-400 font-mono mt-2 pr-10">Enable real-time hospital allocation balancing algorithm based on capabilities and ICU load.</p>
                             </div>
                             <div 
                                onClick={() => setSettingsForm({...settingsForm, aiRouting: !settingsForm.aiRouting})}
                                className={`w-14 h-7 rounded-full flex items-center p-1 cursor-pointer transition-colors border ${settingsForm.aiRouting ? 'bg-[#22c55e]/20 border-[#22c55e] justify-end' : 'bg-black/50 border-[#343d54] justify-start'}`}>
                                 <div className={`w-5 h-5 rounded-full shadow-sm ${settingsForm.aiRouting ? 'bg-[#22c55e]' : 'bg-gray-500'}`}></div>
                             </div>
                         </div>

                         {/* Save Settings */}
                         <div className="pt-4 flex justify-end">
                             <button className="bg-[#eab308] hover:bg-[#ca8a04] text-black px-6 py-2.5 rounded font-bold tracking-widest uppercase text-sm shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all transform hover:scale-105">
                                 Save Configuration
                             </button>
                         </div>
                     </div>
                 </div>
              )}

              {activeTab === 'fleet' && (
                <>
             {/* Dynamic Critical Banner Array */}
             {primaryIncident && primaryIncident.severity === 'critical' && (
               <div className="bg-[#e84142] text-white px-5 py-2.5 rounded shadow-[0_0_15px_rgba(232,65,66,0.3)] font-bold tracking-widest text-[11px] uppercase animate-pulse border border-red-400 flex items-center gap-3">
                   <AlertOctagon size={14} className="opacity-80"/>
                   {primaryIncident.severity} {primaryIncident.issueType} CASE ARRIVING. ETA {Math.ceil((primaryIncident.estimatedArrivalTime || 0) / 60)} MINUTES - AMBULANCE {primaryIncident.ambulanceId || 'A72B'}
               </div>
             )}
             
             {/* 3 Top KPIS */}
             <div className="grid grid-cols-3 gap-5">
                 <div className="bg-[#212738] border border-[#343d54] p-5 rounded-lg shadow-lg flex flex-col justify-between h-28 hover:border-gray-500 transition-colors">
                     <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Total Active Emergencies:</span>
                     <div className="flex items-end justify-between">
                        <span className="text-4xl font-bold font-mono tracking-tighter text-white">
                           {activeIncidentsCount}
                        </span>
                        <div className="w-32 h-2 bg-[#2a3044] rounded overflow-hidden shadow-inner border border-black/20 mb-2">
                           <div className="bg-[#22c55e] h-full shadow-[0_0_10px_#4ade80] transition-all duration-1000" style={{ width: `${Math.min(100, (activeIncidentsCount / 20) * 100)}%` }}></div>
                        </div>
                     </div>
                 </div>

                 <div className="bg-[#212738] border border-[#343d54] p-5 rounded-lg shadow-lg flex flex-col justify-between h-28 hover:border-gray-500 transition-colors">
                     <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Available Ambulances:</span>
                     <div className="flex items-end justify-between">
                        <span className="text-4xl font-bold font-mono tracking-tighter text-white">{availableAmbos}</span>
                        <div className="w-32 h-2 bg-[#2a3044] rounded flex gap-1 mb-2">
                           <div className="bg-[#22c55e] h-full rounded shadow-[0_0_10px_#4ade80] transition-all duration-1000" style={{ width: `${(availableAmbos / totalAmbulancesMap) * 100}%` }}></div>
                           <div className="bg-[#ef4444] h-full rounded shadow-[0_0_10px_#ef4444] transition-all duration-1000" style={{ width: `${(activeIncidentsCount / totalAmbulancesMap) * 100}%` }}></div>
                        </div>
                     </div>
                 </div>

                 <div className="bg-[#212738] border border-[#343d54] p-5 rounded-lg shadow-lg flex flex-col justify-between h-28 hover:border-gray-500 transition-colors">
                     <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">ICU Capacity Utilization:</span>
                     <div className="flex items-end justify-between">
                        <span className="text-4xl font-bold font-mono tracking-tighter text-white">{icuUtilization}%</span>
                        <div className={`flex items-center gap-3 font-bold text-xs tracking-widest uppercase mb-1 drop-shadow-md ${icuUtilization > 90 ? 'text-[#e84142]' : 'text-[#22c55e]'}`}>
                           <div className={`w-12 h-1.5 rounded ${icuUtilization > 90 ? 'bg-[#e84142] shadow-[0_0_10px_#f87171]' : 'bg-[#22c55e] shadow-[0_0_10px_#4ade80]'}`}></div> 
                           {icuUtilization > 90 ? 'CRIT' : 'GREEN'}
                        </div>
                     </div>
                 </div>
             </div>

             {/* Split View Map & Dashboards */}
             <div className="flex gap-5 flex-1 min-h-[400px]">
                 
                 {/* Live Tracking Information List (Replacing Map) */}
                 <div className="flex-1 bg-[#1b2230] rounded-xl border border-[#30394f] overflow-hidden shadow-2xl relative flex flex-col">
                     <div className="p-4 border-b border-[#30394f] bg-[#1a202d] flex justify-between items-center shrink-0">
                         <h3 className="font-bold tracking-widest uppercase text-white text-sm">Active Fleet Logistics</h3>
                         <div className="flex gap-4 text-xs font-bold tracking-wider">
                            <span className="text-[#22c55e]">● IDLE: {mockAmbulances.filter(a => a.status === 'idle').length}</span>
                            <span className="text-[#eab308]">● EN ROUTE: {mockAmbulances.filter(a => a.status === 'enroute').length}</span>
                            <span className="text-[#e84142]">● TRANSPORT: {mockAmbulances.filter(a => a.status === 'transporting').length}</span>
                         </div>
                     </div>

                     <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {mockAmbulances.map(amb => {
                           const assignedIncident = incidents.find(i => i.ambulanceId === amb.id);
                           const isBusy = amb.status === 'enroute' || amb.status === 'transporting';

                           return (
                             <div key={amb.id} className="bg-[#212738] border border-[#343d54] p-4 rounded-lg flex items-center justify-between shadow-md">
                                 <div className="flex items-center gap-5">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 shadow-inner font-bold text-lg ${
                                       amb.status === 'idle' ? 'bg-[#22c55e]/10 border-[#22c55e] text-[#22c55e]' : 
                                       isBusy ? 'bg-[#eab308]/10 border-[#eab308] text-[#eab308] animate-pulse' : 
                                       'bg-[#e84142]/10 border-[#e84142] text-[#e84142]'
                                    }`}>
                                       <Truck size={24} />
                                    </div>
                                    <div>
                                       <div className="flex items-center gap-3">
                                          <h4 className="font-bold tracking-widest text-white uppercase">{amb.id}</h4>
                                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase ${
                                             amb.status === 'idle' ? 'bg-[#22c55e] text-[#064e3b]' : 
                                             isBusy ? 'bg-[#eab308] text-[#713f12]' : 
                                             'bg-[#e84142] text-white'
                                            }`}>
                                            {amb.status.replace('-', ' ')}
                                          </span>
                                       </div>
                                       <div className="text-xs font-mono text-gray-500 mt-1 uppercase">
                                          LAT: {amb.location.latitude.toFixed(4)} | LNG: {amb.location.longitude.toFixed(4)}
                                       </div>
                                    </div>
                                 </div>
                                 
                                 {isBusy && assignedIncident ? (
                                    <div className="text-right border-l border-[#343d54] pl-5 flex flex-col justify-center h-full">
                                        <div className="text-sm font-bold tracking-wider text-white uppercase">{assignedIncident.issueType}</div>
                                        <div className={`text-[10px] font-bold tracking-widest uppercase mt-1 ${assignedIncident.severity==='critical'?'text-[#e84142]':'text-[#eab308]'}`}>
                                           PRIORITY: {assignedIncident.severity}
                                        </div>
                                        <div className="text-xl font-bold font-mono text-white mt-1">ETA: Math.ceil({(assignedIncident.estimatedArrivalTime || 0) / 60}m</div>
                                    </div>
                                 ) : (
                                    <div className="text-right border-l border-[#343d54] pl-5 flex flex-col justify-center h-full opacity-50">
                                        <div className="text-sm font-bold tracking-wider text-gray-400 uppercase">AVAILABLE FOR DISPATCH</div>
                                        <div className="text-xs font-mono text-gray-500 mt-1">Awaiting Assignment...</div>
                                    </div>
                                 )}
                             </div>
                           )
                        })}
                     </div>
                 </div>

                 {/* Right Sidebar Widgets */}
                 <div className="w-[340px] flex flex-col gap-5 shrink-0 h-full overflow-hidden">
                     
                     <div className="bg-[#212738] border border-[#343d54] rounded-lg p-5 shadow-lg relative overflow-hidden flex-1 max-h-[170px]">
                        <h3 className="text-[11px] font-bold tracking-widest text-gray-300 uppercase mb-4 opacity-80 border-b border-[#343d54] pb-2">AI ROUTING STATUS</h3>
                        <div className="space-y-2 text-xs font-bold tracking-wider text-gray-400">
                            <div className="flex justify-between items-center"><span className="uppercase opacity-80">Current Reroutes</span><span className="text-white font-mono text-sm">14</span></div>
                            <div className="flex justify-between items-center"><span className="uppercase opacity-80">Avg. ETA Improvement</span><span className="text-white font-mono text-sm">4 MIN</span></div>
                            <div className="flex justify-between items-center"><span className="uppercase opacity-80">Traffic Avoidance Events</span><span className="text-white font-mono text-sm">212</span></div>
                        </div>
                     </div>

                     <div className="bg-[#212738] border border-[#343d54] rounded-lg p-5 shadow-lg relative overflow-hidden flex-1 max-h-[140px]">
                        <h3 className="text-[11px] font-bold tracking-widest text-gray-300 uppercase mb-4 opacity-80 border-b border-[#343d54] pb-2">EMERGENCY PRIORITY QUEUE</h3>
                        <div className="space-y-3 text-xs font-bold tracking-wider text-gray-400">
                            <div className="flex justify-between items-center">
                               <span className={criticalCount > 0 ? 'text-[#e84142]' : 'text-gray-400'}>CRITICAL</span>
                               <span className={`${criticalCount > 0 ? 'text-[#e84142]' : 'text-gray-400'} font-mono text-sm`}>{criticalCount}</span>
                            </div>
                            <div className="flex justify-between items-center">
                               <span className={highCount > 0 ? 'text-[#eab308]' : 'text-gray-400'}>HIGH PRIORITY</span>
                               <span className={`${highCount > 0 ? 'text-[#eab308]' : 'text-gray-400'} font-mono text-sm`}>{highCount}</span>
                            </div>
                            <div className="flex justify-between items-center"><span className="uppercase opacity-80 text-gray-300">Resource Conflicts</span><span className="text-gray-300 font-mono text-sm">0</span></div>
                        </div>
                     </div>

                     <div className="bg-[#212738] border border-[#343d54] rounded-lg p-5 shadow-lg relative overflow-hidden flex-1">
                        <h3 className="text-[11px] font-bold tracking-widest text-gray-300 uppercase mb-4 opacity-80 border-b border-[#343d54] pb-2">PREDICTIVE ALERTS</h3>
                        <div className="space-y-2">
                           <p className="text-xs font-bold tracking-wider text-gray-400 opacity-90 leading-relaxed">
                              HOSPITAL OVERLOAD RISK (NEXT 30 MIN):<br/>
                              {activeIncidentsCount > 2 ? (
                                <span className="text-white">MULTIPLE HOSPITALS <span className="text-[#e84142]">[CRITICAL]</span></span>
                              ) : primaryIncident ? (
                                <span className="text-white">ACTIVE RECEIVING ZONE <span className="text-[#eab308]">[YELLOW]</span></span>
                              ) : (
                                <span className="text-white">NONE DETECTED <span className="text-[#22c55e]">[CLEAR]</span></span>
                              )}
                           </p>
                        </div>
                     </div>

                 </div>

             </div>

             {/* Activity Log Bar Bottom */}
             <div className="bg-[#212738] border border-[#343d54] rounded flex flex-col min-h-[140px] shrink-0 overflow-hidden shadow-lg mt-1 mb-2">
                <div className="bg-[#1b202e] px-4 py-2 text-xs font-bold tracking-widest text-gray-400 border-b border-[#343d54] uppercase flex items-center shadow-inner">
                   Activity Log
                </div>
                <div className="p-3 bg-[#242b3d] flex-1 flex flex-col text-xs font-mono tracking-wider font-bold text-gray-400 opacity-80 gap-1 overflow-y-auto">
                   {displayLogs.map(log => {
                      const dateObj = new Date(log.time);
                      const timeStr = dateObj.toLocaleTimeString([], { hour12: false });
                      
                      return (
                         <div key={log.id} className="flex items-center justify-between hover:bg-[#343d54] px-2 py-1 transition-colors rounded">
                            <span className={log.isAction ? "text-[#eab308]" : ""} suppressHydrationWarning>▶ [{timeStr}] {log.message}</span>
                            <span className="opacity-60 text-[10px]" suppressHydrationWarning>{timeStr}</span>
                         </div>
                      );
                   })}
                </div>
             </div>
            </>
           )}
              
           </div>

       </div>

       {/* Incident Modal */}
       {selectedIncident && (
           <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
               <div className="bg-[#1b2230] border border-[#30394f] rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col">
                   <div className="p-5 border-b border-[#30394f] flex justify-between items-center bg-[#1a202d]">
                       <div className="flex items-center gap-3">
                           <div className={`p-2 rounded-lg ${
                               selectedIncident.severity === 'critical' ? 'bg-[#e84142]/20 text-[#e84142]' :
                               selectedIncident.severity === 'high' ? 'bg-[#eab308]/20 text-[#eab308]' :
                               'bg-[#3b82f6]/20 text-[#3b82f6]'
                           }`}>
                               <TriangleAlert size={24} />
                           </div>
                           <div>
                               <h2 className="text-xl font-bold tracking-widest uppercase text-white">Incident Details</h2>
                               <p className="text-xs font-mono text-gray-500 mt-1">ID: {selectedIncident.id}</p>
                           </div>
                       </div>
                       <button onClick={() => setSelectedIncident(null)} className="text-gray-400 hover:text-white transition-colors p-1">
                           <X size={24} />
                       </button>
                   </div>
                   
                   <div className="p-6 overflow-y-auto space-y-6">
                       <div className="grid grid-cols-2 gap-4">
                           <div className="bg-[#212738] p-4 rounded-lg border border-[#343d54]">
                               <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Ambulance</span>
                               <div className="text-lg font-mono text-white mt-1 flex items-center gap-2">
                                   <Truck size={16} className="text-gray-400"/> {selectedIncident.ambulanceId || 'Unassigned'}
                               </div>
                           </div>
                           <div className="bg-[#212738] p-4 rounded-lg border border-[#343d54]">
                               <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Hospital Target</span>
                               <div className="text-lg font-mono text-white mt-1 flex items-center gap-2">
                                   <Building2 size={16} className="text-gray-400"/> {selectedIncident.hospitalId ? mockHospitals.find(h => h.id === selectedIncident.hospitalId)?.name || selectedIncident.hospitalId : 'Pending Allocation'}
                               </div>
                           </div>
                       </div>
                       
                       <div className="bg-[#212738] p-4 rounded-lg border border-[#343d54] space-y-4">
                           <div>
                               <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Emergency Type</span>
                               <div className="text-xl font-bold text-white uppercase mt-1 flex flex-wrap gap-2 items-center">
                                   {selectedIncident.issueType} 
                                   <span className={`text-xs px-2 py-0.5 rounded font-bold tracking-wider ${
                                       selectedIncident.severity === 'critical' ? 'bg-[#e84142]/20 text-[#e84142]' :
                                       selectedIncident.severity === 'high' ? 'bg-[#eab308]/20 text-[#eab308]' :
                                       'bg-[#3b82f6]/20 text-[#3b82f6]'
                                   }`}>{selectedIncident.severity}</span>
                               </div>
                           </div>
                           
                           <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#30394f]">
                               <div>
                                   <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Reported At</span>
                                   <div className="text-sm font-mono text-gray-300 mt-1">
                                       {new Date(selectedIncident.createdAt).toLocaleString()}
                                   </div>
                               </div>
                               <div>
                                   <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">ETA</span>
                                   <div className="text-sm font-mono text-gray-300 mt-1">
                                       ~{Math.ceil((selectedIncident.estimatedArrivalTime || 0) / 60)} Minutes
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   
                   <div className="p-4 border-t border-[#30394f] bg-[#1a202d] flex justify-end gap-3">
                       <button onClick={() => setSelectedIncident(null)} className="px-4 py-2 rounded text-xs font-bold tracking-wider uppercase text-gray-400 hover:text-white hover:bg-[#202738] transition-colors border border-transparent">Close</button>
                       <button className="px-4 py-2 rounded text-xs font-bold tracking-wider uppercase bg-[#3b82f6] text-white hover:bg-[#60a5fa] transition-colors shadow-[0_0_15px_rgba(59,130,246,0.2)]">Full Report</button>
                   </div>
               </div>
           </div>
       )}
    </div>
  );
}
