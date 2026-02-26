'use client';

import React from 'react';
import { Incident, Hospital } from '@/lib/types';
import { ISSUE_TYPES, SEVERITY_LEVELS, INCIDENT_STATUSES } from '@/lib/mock-data';
import { Card } from '@/components/ui/card';

interface IncidentHistoryProps {
  incidents: Incident[];
  hospitals: Map<string, Hospital>;
}

export function IncidentHistory({ incidents, hospitals }: IncidentHistoryProps) {
  if (incidents.length === 0) {
    return (
      <Card className="p-6 text-center bg-gray-50">
        <p className="text-gray-600">No incidents yet</p>
      </Card>
    );
  }

  return (
    <div className="space-y-2 max-h-96 overflow-y-auto">
      {incidents
        .slice()
        .reverse()
        .map((incident) => {
          const hospital = hospitals.get(incident.hospitalId || '');
          const statusColors = {
            created: 'bg-yellow-50 text-yellow-700',
            allocated: 'bg-blue-50 text-blue-700',
            acknowledged: 'bg-blue-50 text-blue-700',
            arrived: 'bg-green-50 text-green-700',
            completed: 'bg-gray-50 text-gray-700',
          };

          return (
            <Card key={incident.id} className={`p-2 text-xs ${statusColors[incident.status]}`}>
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1">
                  <p className="font-semibold">
                    {ISSUE_TYPES[incident.issueType]}
                  </p>
                  <p className="opacity-75">
                    {hospital?.name || 'Unassigned'} •{' '}
                    {SEVERITY_LEVELS[incident.severity].split(' - ')[0]}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs opacity-75">
                    {incident.id.split('-')[0]}
                  </p>
                  <p className="font-semibold">
                    {INCIDENT_STATUSES[incident.status]}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
    </div>
  );
}
