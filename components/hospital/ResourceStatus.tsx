'use client';

import React from 'react';
import { Hospital } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Users, Bed } from 'lucide-react';

interface ResourceStatusProps {
  hospital: Hospital;
}

export function ResourceStatus({ hospital }: ResourceStatusProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-700">Available Resources</h3>

      <div className="grid grid-cols-2 gap-3">
        {/* ICU Beds */}
        <Card className="p-3 border-l-4 border-l-purple-500 bg-purple-50">
          <div className="flex items-center gap-2 mb-2">
            <Bed size={18} className="text-purple-600" />
            <span className="text-xs font-semibold text-gray-600">ICU Beds</span>
          </div>
          <p className="text-2xl font-bold text-purple-900">
            {hospital.capacity.icuBeds}
          </p>
          <p className="text-xs text-purple-700 mt-1">Available now</p>
        </Card>

        {/* General Beds */}
        <Card className="p-3 border-l-4 border-l-blue-500 bg-blue-50">
          <div className="flex items-center gap-2 mb-2">
            <Bed size={18} className="text-blue-600" />
            <span className="text-xs font-semibold text-gray-600">General Beds</span>
          </div>
          <p className="text-2xl font-bold text-blue-900">
            {hospital.capacity.generalBeds}
          </p>
          <p className="text-xs text-blue-700 mt-1">Available now</p>
        </Card>

        {/* Doctors */}
        <Card className="p-3 border-l-4 border-l-green-500 bg-green-50 col-span-2">
          <div className="flex items-center gap-2 mb-2">
            <Users size={18} className="text-green-600" />
            <span className="text-xs font-semibold text-gray-600">On-Duty Doctors</span>
          </div>
          <p className="text-2xl font-bold text-green-900">
            {hospital.capacity.doctors}
          </p>
          <p className="text-xs text-green-700 mt-1">Ready to respond</p>
        </Card>
      </div>
    </div>
  );
}
