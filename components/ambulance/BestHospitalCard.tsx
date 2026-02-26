'use client';

import React from 'react';
import { HospitalMatch } from '@/lib/types';
import { formatETA } from '@/lib/utils/incident-utils';
import { Card } from '@/components/ui/card';
import { Navigation, Clock, MapPin, Users } from 'lucide-react';

interface BestHospitalCardProps {
  match: HospitalMatch | null;
  isLoading?: boolean;
}

export function BestHospitalCard({ match, isLoading = false }: BestHospitalCardProps) {
  if (isLoading) {
    return (
      <Card className="p-4 bg-gray-50">
        <div className="animate-pulse space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      </Card>
    );
  }

  if (!match) {
    return (
      <Card className="p-4 bg-yellow-50 border-yellow-200">
        <p className="text-sm text-yellow-800">
          Select emergency type and severity to find the best hospital
        </p>
      </Card>
    );
  }

  const hospital = match.hospital;

  return (
    <Card className="p-4 border-l-4 border-l-green-500 bg-green-50">
      <div className="space-y-3">
        <div>
          <h3 className="font-bold text-lg text-gray-900">{hospital.name}</h3>
          <p className="text-xs text-gray-500 mt-1">{match.reason}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Navigation size={16} className="text-blue-600" />
            <span className="font-semibold text-gray-900">
              {match.distance.toFixed(1)} km
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} className="text-red-600" />
            <span className="font-semibold text-gray-900">
              {formatETA(match.estimatedArrivalTime)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-purple-600" />
            <span className="text-xs text-gray-700">
              Beds: {hospital.capacity.generalBeds}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={16} className="text-orange-600" />
            <span className="text-xs text-gray-700">
              Doctors: {hospital.capacity.doctors}
            </span>
          </div>
        </div>

        <div className="pt-2 border-t border-green-200">
          <p className="text-xs text-gray-600">
            <strong>Capabilities:</strong> {hospital.capabilities.join(', ')}
          </p>
        </div>
      </div>
    </Card>
  );
}
