'use client';

import Link from 'next/link';
import { Activity, Ambulance, Hospital, BarChart3, Zap, Shield, Clock, Brain, ArrowRight, Radio, HeartPulse, Siren } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);



  const features = [
    { icon: Brain, title: 'AI-Powered Matching', desc: 'Multi-criteria scoring engine allocates the optimal hospital based on capability, bed availability, doctor count, distance, and affordability', color: '#8b5cf6' },
    { icon: Zap, title: 'Golden Hour Optimization', desc: 'Dynamic neural link adjusts routing priorities in real-time to minimize critical response windows', color: '#eab308' },
    { icon: Shield, title: 'Traffic Preemption', desc: 'Adaptive signal control automatically clears intersections for approaching emergency vehicles within 2.5km', color: '#22c55e' },
    { icon: Clock, title: 'Pre-Arrival Readiness', desc: 'Hospitals receive live patient vitals and ETA countdowns so teams are prepared before the ambulance arrives', color: '#3b82f6' },
    { icon: Radio, title: 'Real-Time Telemetry', desc: 'Live GPS tracking, route visualization, and system-wide situational awareness across all connected nodes', color: '#ef4444' },
    { icon: HeartPulse, title: 'Transparent Decisions', desc: 'Every allocation generates an immutable audit trail explaining exactly why each hospital was selected', color: '#f97316' },
  ];

  const interfaces = [
    {
      href: '/ambulance',
      icon: Ambulance,
      title: 'Ambulance Interface',
      subtitle: 'ON-BOARD SMART TERMINAL',
      desc: 'One-tap emergency dispatch with live routing, traffic clearance, hospital contact, and siren control',
      color: '#ef4444',
      glow: 'rgba(239,68,68,0.15)',
      borderColor: '#ef4444',
    },
    {
      href: '/hospital/login',
      icon: Hospital,
      title: 'Hospital Dashboard',
      subtitle: 'EMERGENCY RESOURCE HUB',
      desc: 'Incoming case alerts, live city map, resource management, and real-time ETA tracking',
      color: '#22c55e',
      glow: 'rgba(34,197,94,0.15)',
      borderColor: '#22c55e',
    },
    {
      href: '/admin',
      icon: BarChart3,
      title: 'Command Center',
      subtitle: 'CENTRAL CONTROL SERVER',
      desc: 'Fleet tracking, traffic signal control, AI analytics engine, system audit logs, and user management',
      color: '#3b82f6',
      glow: 'rgba(59,130,246,0.15)',
      borderColor: '#3b82f6',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0c0f1a] text-white overflow-x-hidden relative">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-[#3b82f6]/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-[#8b5cf6]/5 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ef4444]/3 rounded-full blur-[200px]"></div>
      </div>

      {/* Top nav bar */}
      <nav className="relative z-10 border-b border-[#1e2538] bg-[#0c0f1a]/80 backdrop-blur-xl sticky top-0">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] p-2 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <Activity size={20} className="text-white" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-[0.3em] text-white">PRANA</span>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest block -mt-0.5">v2.1.0</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse shadow-[0_0_10px_#22c55e]"></span>
            <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">All Systems Operational</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-[#1e2538] border border-[#2a3550] rounded-full px-5 py-2 mb-8 text-xs font-bold tracking-widest text-gray-400 uppercase">
            <Siren size={14} className="text-[#ef4444]" />
            Open Innovation Emergency Platform
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">City-Wide</span>
            <br />
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">Emergency Coordination</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Unifying ambulances, hospitals, and traffic infrastructure into a single intelligent real-time system.
            Reducing golden-hour response times through AI-powered routing and adaptive signal control.
          </p>


        </div>
      </section>

      {/* Interface Cards */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">Access Interfaces</h2>
          <p className="text-2xl font-bold text-white tracking-wide">Three Portals. One Unified System.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {interfaces.map((item, i) => (
            <Link key={i} href={item.href}>
              <div
                className={`group relative bg-[#141824] border border-[#1e2538] rounded-2xl p-8 cursor-pointer hover:border-opacity-60 transition-all duration-500 hover:shadow-2xl h-full ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{
                  transitionDelay: `${600 + i * 150}ms`,
                  boxShadow: `0 0 0 0 transparent`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${item.glow}`;
                  (e.currentTarget as HTMLElement).style.borderColor = item.borderColor + '40';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 transparent`;
                  (e.currentTarget as HTMLElement).style.borderColor = '#1e2538';
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 border transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: item.color + '15',
                    borderColor: item.color + '30',
                    color: item.color,
                    boxShadow: `0 0 20px ${item.color}20`,
                  }}
                >
                  <item.icon size={26} />
                </div>

                {/* Badge */}
                <div className="text-[9px] font-bold tracking-[0.2em] uppercase mb-3 font-mono" style={{ color: item.color }}>
                  {item.subtitle}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-gray-100 transition-colors">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{item.desc}</p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase group-hover:gap-4 transition-all" style={{ color: item.color }}>
                  LAUNCH <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">Core Capabilities</h2>
          <p className="text-2xl font-bold text-white tracking-wide">Built for the Golden Hour</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <div
              key={i}
              className={`bg-[#141824] border border-[#1e2538] rounded-xl p-6 group hover:border-[#2a3550] transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${800 + i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center border transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: feat.color + '10',
                    borderColor: feat.color + '25',
                    color: feat.color,
                  }}
                >
                  <feat.icon size={18} />
                </div>
                <h3 className="font-bold text-white tracking-wide text-sm">{feat.title}</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Flow */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-[#141824] border border-[#1e2538] rounded-2xl p-8 md:p-12">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-8 text-center">System Architecture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#ef4444]/10 border border-[#ef4444]/25 flex items-center justify-center mx-auto mb-4">
                <Ambulance size={20} className="text-[#ef4444]" />
              </div>
              <h3 className="font-bold tracking-wider text-white text-sm mb-3">AMBULANCE LAYER</h3>
              <div className="space-y-2 text-xs text-gray-400">
                <p className="bg-[#0c0f1a] rounded-lg px-3 py-2 border border-[#1e2538]">Emergency Trigger → Issue Select</p>
                <p className="text-[#ef4444] font-bold">↓</p>
                <p className="bg-[#0c0f1a] rounded-lg px-3 py-2 border border-[#1e2538]">GPS Lock → OSRM Route</p>
                <p className="text-[#ef4444] font-bold">↓</p>
                <p className="bg-[#0c0f1a] rounded-lg px-3 py-2 border border-[#1e2538]">Drive Simulation → Arrival</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/25 flex items-center justify-center mx-auto mb-4">
                <Brain size={20} className="text-[#8b5cf6]" />
              </div>
              <h3 className="font-bold tracking-wider text-white text-sm mb-3">AI CORE ENGINE</h3>
              <div className="space-y-2 text-xs text-gray-400">
                <p className="bg-[#0c0f1a] rounded-lg px-3 py-2 border border-[#1e2538]">Capability Score (30pts)</p>
                <p className="text-[#8b5cf6] font-bold">+</p>
                <p className="bg-[#0c0f1a] rounded-lg px-3 py-2 border border-[#1e2538]">Bed + Doctor + Distance</p>
                <p className="text-[#8b5cf6] font-bold">→</p>
                <p className="bg-[#0c0f1a] rounded-lg px-3 py-2 border border-[#1e2538]">Optimal Hospital Match</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/25 flex items-center justify-center mx-auto mb-4">
                <Hospital size={20} className="text-[#22c55e]" />
              </div>
              <h3 className="font-bold tracking-wider text-white text-sm mb-3">HOSPITAL LAYER</h3>
              <div className="space-y-2 text-xs text-gray-400">
                <p className="bg-[#0c0f1a] rounded-lg px-3 py-2 border border-[#1e2538]">Receive Alert → ETA Countdown</p>
                <p className="text-[#22c55e] font-bold">↓</p>
                <p className="bg-[#0c0f1a] rounded-lg px-3 py-2 border border-[#1e2538]">Resource Check → Team Prep</p>
                <p className="text-[#22c55e] font-bold">↓</p>
                <p className="bg-[#0c0f1a] rounded-lg px-3 py-2 border border-[#1e2538]">Live Map → Patient Handover</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1e2538] bg-[#0c0f1a]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] p-1.5 rounded-lg">
              <Activity size={14} className="text-white" />
            </div>
            <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">PRANA Emergency Platform</span>
          </div>
          <p className="text-[10px] text-gray-600 font-mono tracking-widest uppercase">
            Open Innovation • City-Wide • Modular • Cloud-Native
          </p>
        </div>
      </footer>
    </div>
  );
}
