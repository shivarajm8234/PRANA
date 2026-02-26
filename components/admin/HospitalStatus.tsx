'use client';

import React from 'react';
import { Hospital, Incident } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Bed, Users, AlertCircle } from 'lucide-react';

interface HospitalStatusProps {
  hospitals: Hospital[];
  incidents: Incident[];
}

export function HospitalStatus({ hospitals, incidents }: HospitalStatusProps) {
  return (
    <div className="space-y-2">
      {hospitals.map((hospital) => {
        const activeIncidents = incidents.filter(
          (inc) => inc.hospitalId === hospital.id && inc.status !== 'completed'
        );

        const occupancy = Math.round(
          (activeIncidents.length /
            (hospital.capacity.generalBeds + hospital.capacity.icuBeds)) *
            100
        );

        return (
          <Card key={hospital.id} className="p-3 border-l-4 border-l-blue-500">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-sm text-gray-900">
                {hospital.name}
              </h3>
              {activeIncidents.length > 0 && (
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">
                  {activeIncidents.length} active
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-purple-50 p-2 rounded">
                <div className="flex items-center gap-1 mb-1">
                  <Bed size={14} className="text-purple-600" />
                  <span className="text-gray-600">ICU</span>
                </div>
                <p className="font-bold text-purple-900">
                  {hospital.capacity.icuBeds}
                </p>
              </div>

              <div className="bg-blue-50 p-2 rounded">
                <div className="flex items-center gap-1 mb-1">
                  <Bed size={14} className="text-blue-600" />
                  <span className="text-gray-600">General</span>
                </div>
                <p className="font-bold text-blue-900">
                  {hospital.capacity.generalBeds}
                </p>
              </div>

              <div className="bg-green-50 p-2 rounded">
                <div className="flex items-center gap-1 mb-1">
                  <Users size={14} className="text-green-600" />
                  <span className="text-gray-600">Doctors</span>
                </div>
                <p className="font-bold text-green-900">
                  {hospital.capacity.doctors}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
