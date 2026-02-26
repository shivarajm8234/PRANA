'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Server, Activity, Clock, ShieldCheck, Database, Zap } from 'lucide-react';

export function ServerStatus() {
  const [uptime, setUptime] = useState(0);
  const [latency, setLatency] = useState(12);

  useEffect(() => {
    // Simulate uptime
    const start = Date.now() - 3600000 * 48; // 48 hours ago
    const interval = setInterval(() => {
      setUptime(Math.floor((Date.now() - start) / 1000));
    }, 1000);

    // Simulate fluctuating latency
    const pingInterval = setInterval(() => {
      setLatency((prev) => Math.max(8, Math.min(45, prev + (Math.random() * 10 - 5))));
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(pingInterval);
    };
  }, []);

  const formatUptime = (seconds: number) => {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${d}d ${h}h ${m}m ${s}s`;
  };

  return (
    <div className="space-y-3 mt-6">
      <div className="flex items-center gap-2">
        <Server className="text-gray-700" size={18} />
        <h3 className="text-sm font-semibold text-gray-700">Internal Server & Connection Details</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {/* Connection Status */}
        <Card className="p-3 bg-slate-50 border-slate-200 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-2">
            <Activity size={16} className="text-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-600">Network</span>
          </div>
          <p className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Online
          </p>
          <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
            <ShieldCheck size={12} /> Secure TLS
          </p>
        </Card>

        {/* Latency */}
        <Card className="p-3 bg-slate-50 border-slate-200 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={16} className="text-amber-500" />
            <span className="text-xs font-semibold text-slate-600">Latency</span>
          </div>
          <p className="text-lg font-bold text-slate-800">
            {latency.toFixed(0)} ms
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Central PRANA Core
          </p>
        </Card>

        {/* Database Sync */}
        <Card className="p-3 bg-slate-50 border-slate-200 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-2">
            <Database size={16} className="text-blue-500" />
            <span className="text-xs font-semibold text-slate-600">Local DB Sync</span>
          </div>
          <p className="text-lg font-bold text-slate-800">
            Real-time
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Last synced: just now
          </p>
        </Card>

        {/* Uptime (span full width on small screens) */}
        <Card className="p-3 bg-slate-50 border-slate-200 col-span-2 sm:col-span-3 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-2">
            <Clock size={16} className="text-indigo-500" />
            <span className="text-xs font-semibold text-slate-600">System Uptime</span>
          </div>
          <p className="text-lg font-mono font-bold text-slate-800 tracking-tight">
            {formatUptime(uptime)}
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Hospital Endpoint Agent v1.2.4
          </p>
        </Card>
      </div>
    </div>
  );
}
