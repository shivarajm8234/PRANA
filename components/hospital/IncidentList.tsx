'use client';

import React from 'react';
import { Incident, Hospital } from '@/lib/types';
import { ISSUE_TYPES, SEVERITY_LEVELS, INCIDENT_STATUSES } from '@/lib/mock-data';
import { Card } from '@/components/ui/card';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface IncidentListProps {
  incidents: Incident[];
  hospitals: Map<string, Hospital>;
}

const statusIcons = {
  created: AlertCircle,
  allocated: Clock,
  acknowledged: Clock,
  arrived: CheckCircle,
  completed: CheckCircle,
};

const statusColors = {
  created: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  allocated: 'bg-blue-50 text-blue-700 border-blue-200',
  acknowledged: 'bg-blue-50 text-blue-700 border-blue-200',
  arrived: 'bg-green-50 text-green-700 border-green-200',
  completed: 'bg-gray-50 text-gray-700 border-gray-200',
};

export function IncidentList({ incidents, hospitals }: IncidentListProps) {
  if (incidents.length === 0) {
    return (
      <Card className="p-6 text-center bg-gray-50">
        <p className="text-gray-600">No incidents assigned yet</p>
      </Card>
    );
  }

  return (
    <div className="space-y-2">
      {incidents.map((incident) => {
        const StatusIcon = statusIcons[incident.status];
        const statusColor = statusColors[incident.status];
        const hospital = hospitals.get(incident.hospitalId || '');

        return (
          <Card key={incident.id} className={`p-3 border ${statusColor}`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <StatusIcon size={16} />
                  <p className="text-sm font-semibold">
                    {ISSUE_TYPES[incident.issueType]}
                  </p>
                </div>
                <p className="text-xs opacity-75">
                  {INCIDENT_STATUSES[incident.status]}
                </p>
              </div>

              <div className="text-right text-xs">
                <p className="font-mono text-xs opacity-75">
                  {incident.id.split('-')[0]}...
                </p>
                <p className="font-semibold text-gray-900 mt-1">
                  {SEVERITY_LEVELS[incident.severity].split(' - ')[0]}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
