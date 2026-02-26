'use client';

import React from 'react';
import { Incident, Hospital } from '@/lib/types';
import { ISSUE_TYPES, SEVERITY_LEVELS } from '@/lib/mock-data';
import { formatETA } from '@/lib/utils/incident-utils';
import { Card } from '@/components/ui/card';
import { AlertTriangle, Clock, MapPin, Zap } from 'lucide-react';

interface IncidentAlertProps {
  incident: Incident;
  hospital: Hospital;
}

const severityColors = {
  critical: 'bg-red-100 border-red-400 text-red-900',
  high: 'bg-orange-100 border-orange-400 text-orange-900',
  medium: 'bg-yellow-100 border-yellow-400 text-yellow-900',
  low: 'bg-blue-100 border-blue-400 text-blue-900',
};

const severityIcons = {
  critical: 'text-red-600',
  high: 'text-orange-600',
  medium: 'text-yellow-600',
  low: 'text-blue-600',
};

export function IncidentAlert({ incident, hospital }: IncidentAlertProps) {
  const severityClass = severityColors[incident.severity];
  const severityIconClass = severityIcons[incident.severity];
  const timeElapsed = Date.now() - incident.createdAt;
  const etaMinutes = incident.estimatedArrivalTime
    ? Math.round((incident.estimatedArrivalTime * 1000 - timeElapsed) / 1000 / 60)
    : 0;

  return (
    <div className={`border-4 rounded-lg p-4 ${severityClass}`}>
      <div className="space-y-3">
        {/* Header with severity */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle size={24} className={severityIconClass} />
            <div>
              <p className="text-xs font-semibold opacity-75">
                {SEVERITY_LEVELS[incident.severity]}
              </p>
              <p className="text-lg font-bold">{ISSUE_TYPES[incident.issueType]}</p>
            </div>
          </div>
          <span className="text-2xl font-bold">{etaMinutes > 0 ? `${etaMinutes}m` : 'Arrived'}</span>
        </div>

        {/* ETA Countdown */}
        <div className="bg-white/50 rounded p-2 flex items-center gap-2">
          <Clock size={16} className={severityIconClass} />
          <span className="text-sm font-semibold">
            ETA: {formatETA(incident.estimatedArrivalTime || 0)}
          </span>
        </div>

        {/* Hospital Info */}
        <div className="bg-white/50 rounded p-2 space-y-1">
          <p className="text-xs font-semibold opacity-75">Sent To:</p>
          <p className="font-bold text-base">{hospital.name}</p>
        </div>

        {/* Location */}
        <div className="bg-white/50 rounded p-2 flex items-center gap-2">
          <MapPin size={14} className={severityIconClass} />
          <span className="text-xs">
            Lat: {incident.patientLocation.latitude.toFixed(4)}, Lng:{' '}
            {incident.patientLocation.longitude.toFixed(4)}
          </span>
        </div>

        {/* Incident ID */}
        <div className="bg-white/20 rounded px-2 py-1 text-center">
          <p className="text-xs font-mono opacity-75">ID: {incident.id}</p>
        </div>
      </div>
    </div>
  );
}
