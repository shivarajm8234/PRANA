'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Activity, Ambulance, Hospital, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center pt-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Activity size={40} className="text-white" />
            <h1 className="text-4xl font-bold text-white">PRANA</h1>
          </div>
          <p className="text-xl text-blue-100">
            Emergency Coordination Platform
          </p>
          <p className="text-sm text-blue-100/80 mt-2">
            Real-time ambulance, hospital, and incident management
          </p>
        </div>

        {/* Interface Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Ambulance Driver Interface */}
          <Link href="/ambulance">
            <Card className="p-6 h-full cursor-pointer hover:shadow-lg transition-all hover:scale-105 bg-white border-0">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Ambulance size={32} className="text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Ambulance Driver
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    One-tap emergency trigger, issue selection, and real-time routing to nearest hospital
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          {/* Hospital Panel */}
          <Link href="/hospital">
            <Card className="p-6 h-full cursor-pointer hover:shadow-lg transition-all hover:scale-105 bg-white border-0">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Hospital size={32} className="text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Hospital Panel
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Receive incident alerts, view available resources (beds/doctors), and track ETA
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          {/* Admin Dashboard */}
          <Link href="/admin">
            <Card className="p-6 h-full cursor-pointer hover:shadow-lg transition-all hover:scale-105 bg-white border-0">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <BarChart3 size={32} className="text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Admin Dashboard
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Live ambulance tracking, hospital status, incident history, and analytics
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* System Overview */}
        <Card className="p-8 bg-white/10 border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">System Overview</h2>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div>
              <h3 className="font-semibold mb-2">Ambulance Flow</h3>
              <p className="text-sm text-blue-100">
                Emergency button → Select issue & severity → Live location tracking → Route to best hospital
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Hospital Flow</h3>
              <p className="text-sm text-blue-100">
                Receive incident alert → View available resources → ETA countdown → Prepare reception
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Admin Flow</h3>
              <p className="text-sm text-blue-100">
                Monitor all ambulances → Track hospital capacity → View incident history → Analyze metrics
              </p>
            </div>
          </div>
        </Card>

        {/* Key Features */}
        <Card className="p-8 bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p>Intelligent hospital matching based on capability, resources, and distance</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p>Real-time location tracking with Leaflet maps</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p>Live ETA countdown with resource visibility</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p>Comprehensive admin monitoring and analytics</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p>Minimal distraction driver interface</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p>Complete incident lifecycle tracking</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
