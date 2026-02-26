'use client';

import React from 'react';
import { Incident } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Activity, TrendingUp, Clock, CheckCircle } from 'lucide-react';

interface ResponseMetricsProps {
  incidents: Incident[];
}

export function ResponseMetrics({ incidents }: ResponseMetricsProps) {
  const totalIncidents = incidents.length;
  const completedIncidents = incidents.filter((inc) => inc.status === 'completed').length;
  const activeIncidents = incidents.filter((inc) => inc.status !== 'completed').length;

  const completionRate =
    totalIncidents > 0 ? Math.round((completedIncidents / totalIncidents) * 100) : 0;

  const avgResponseTime =
    incidents.length > 0
      ? Math.round(
          incidents.reduce((sum, inc) => {
            if (inc.allocatedAt && inc.createdAt) {
              return sum + (inc.allocatedAt - inc.createdAt);
            }
            return sum;
          }, 0) /
            incidents.length /
            1000
        )
      : 0;

  const incidentsByType = incidents.reduce((acc, inc) => {
    acc[inc.issueType] = (acc[inc.issueType] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topIncidentType = Object.entries(incidentsByType).sort(([, a], [, b]) => b - a)[0];

  return (
    <div className="grid grid-cols-2 gap-3">
      <Card className="p-3 border-l-4 border-l-blue-500 bg-blue-50">
        <div className="flex items-center gap-2 mb-2">
          <Activity size={16} className="text-blue-600" />
          <span className="text-xs font-semibold text-gray-600">Total Incidents</span>
        </div>
        <p className="text-2xl font-bold text-blue-900">{totalIncidents}</p>
        <p className="text-xs text-blue-700 mt-1">{activeIncidents} active</p>
      </Card>

      <Card className="p-3 border-l-4 border-l-green-500 bg-green-50">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle size={16} className="text-green-600" />
          <span className="text-xs font-semibold text-gray-600">Completion Rate</span>
        </div>
        <p className="text-2xl font-bold text-green-900">{completionRate}%</p>
        <p className="text-xs text-green-700 mt-1">{completedIncidents} completed</p>
      </Card>

      <Card className="p-3 border-l-4 border-l-orange-500 bg-orange-50">
        <div className="flex items-center gap-2 mb-2">
          <Clock size={16} className="text-orange-600" />
          <span className="text-xs font-semibold text-gray-600">Avg Response</span>
        </div>
        <p className="text-2xl font-bold text-orange-900">{avgResponseTime}s</p>
        <p className="text-xs text-orange-700 mt-1">Allocation time</p>
      </Card>

      <Card className="p-3 border-l-4 border-l-purple-500 bg-purple-50">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp size={16} className="text-purple-600" />
          <span className="text-xs font-semibold text-gray-600">Top Issue</span>
        </div>
        <p className="text-2xl font-bold text-purple-900">
          {topIncidentType ? topIncidentType[1] : 0}
        </p>
        <p className="text-xs text-purple-700 mt-1">
          {topIncidentType ? topIncidentType[0] : 'N/A'}
        </p>
      </Card>
    </div>
  );
}
