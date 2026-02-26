'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { mockAmbulances, mockHospitals } from '@/lib/mock-data';
import useSWR from 'swr';
import { Incident } from '@/lib/types';
import { Bell, Activity, TriangleAlert, Building2, Truck, Server, BarChart2, CheckCircle2, AlertOctagon, Settings, Users, ChevronRight, PlusCircle } from 'lucide-react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const AmbulanceTracker = dynamic(
  () => import('@/components/admin/AmbulanceTracker').then(mod => mod.AmbulanceTracker),
  { ssr: false, loading: () => <div className="w-full h-full bg-[#11131a] rounded-lg animate-pulse border-2 border-slate-700 font-bold tracking-widest text-slate-500 flex items-center justify-center">MAP LOADING...</div> }
);

export default function AdminPage() {
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
               <div className="flex items-center gap-3 px-4 py-3 rounded text-gray-400 hover:bg-[#202738] hover:text-white cursor-pointer transition-colors">
                  <BarChart2 size={18} /> Dashboard Overview
               </div>
               <div className="flex items-center justify-between px-4 py-3 rounded bg-[#202738] text-white border-l-2 border-[#3b82f6] cursor-pointer shadow-inner">
                  <div className="flex items-center gap-3"><Truck size={18} /> Ambulance Fleet</div>
               </div>
               <div className="flex items-center gap-3 px-4 py-3 rounded text-gray-400 hover:bg-[#202738] hover:text-white cursor-pointer transition-colors">
                  <Building2 size={18} /> Hospitals
               </div>
               <div className="flex items-center gap-3 px-4 py-3 rounded text-gray-400 hover:bg-[#202738] hover:text-white cursor-pointer transition-colors">
                  <Activity size={18} /> Traffic Signals
               </div>
               <div className="flex items-center gap-3 px-4 py-3 rounded text-gray-400 hover:bg-[#202738] hover:text-white cursor-pointer transition-colors">
                  <Server size={18} /> AI Analytics
               </div>
               <div className="flex items-center gap-3 px-4 py-3 rounded text-gray-400 hover:bg-[#202738] hover:text-white cursor-pointer transition-colors">
                  <AlertOctagon size={18} /> Emergency Logs
               </div>
               <div className="flex items-center gap-3 px-4 py-3 rounded text-gray-400 hover:bg-[#202738] hover:text-white cursor-pointer transition-colors">
                  <Users size={18} /> Users
               </div>
               <div className="flex items-center gap-3 px-4 py-3 rounded text-gray-400 hover:bg-[#202738] hover:text-white cursor-pointer transition-colors">
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
                 
                 {/* Main Map Box */}
                 <div className="flex-1 bg-[#11131a] rounded-xl border border-[#343d54] overflow-hidden shadow-2xl relative">
                     <AmbulanceTracker ambulances={mockAmbulances} incidents={incidents} className="w-full h-full relative z-0" />
                     {/* Map Map Overlay UI */}
                     <div className="absolute top-4 left-4 bg-black/60 backdrop-blur aspect-square w-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-black/90 cursor-pointer shadow-lg z-10 transition-colors">
                        <PlusCircle size={20} className="text-white"/>
                     </div>
                     <div className="absolute top-4 right-4 bg-black/60 backdrop-blur aspect-square w-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-black/90 cursor-pointer shadow-lg z-10 transition-colors">
                        <Activity size={20} className="text-transparent" /> {/* Spacer mock */}
                     </div>
                     <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur aspect-square w-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-black/90 cursor-pointer shadow-lg z-10 transition-colors">
                        <ChevronRight size={20} className="text-white"/>
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
                            <span className={log.isAction ? "text-[#eab308]" : ""}>▶ [{timeStr}] {log.message}</span>
                            <span className="opacity-60 text-[10px]">{timeStr}</span>
                         </div>
                      );
                   })}
                </div>
             </div>
             
          </div>

       </div>
    </div>
  );
}
