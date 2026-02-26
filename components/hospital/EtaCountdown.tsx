'use client';

import React, { useState, useEffect } from 'react';
import { Incident } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Clock, AlertCircle } from 'lucide-react';

interface EtaCountdownProps {
  incident: Incident;
}

export function EtaCountdown({ incident }: EtaCountdownProps) {
  const [remaining, setRemaining] = useState<number>(
    incident.estimatedArrivalTime || 0
  );

  useEffect(() => {
    if (!incident.estimatedArrivalTime) return;

    const createdTime = incident.allocatedAt || incident.createdAt;
    const interval = setInterval(() => {
      const elapsed = (Date.now() - createdTime) / 1000;
      const timeLeft = Math.max(0, (incident.estimatedArrivalTime || 0) - elapsed);
      setRemaining(timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [incident]);

  const minutes = Math.floor(remaining / 60);
  const seconds = Math.floor(remaining % 60);
  const isUrgent = remaining < 300; // Less than 5 minutes

  const formatTime = (mins: number, secs: number) => {
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card
      className={`p-4 text-center ${
        isUrgent
          ? 'bg-red-100 border-red-400'
          : 'bg-blue-100 border-blue-400'
      }`}
    >
      <div className="flex items-center justify-center gap-2 mb-2">
        <Clock
          size={20}
          className={isUrgent ? 'text-red-600 animate-pulse' : 'text-blue-600'}
        />
        <p className="text-sm font-semibold">
          {isUrgent ? 'Urgent - Arriving Soon' : 'Ambulance ETA'}
        </p>
      </div>

      <div className="text-4xl font-mono font-bold text-gray-900 mb-2">
        {formatTime(minutes, seconds)}
      </div>

      {isUrgent && (
        <div className="flex items-center justify-center gap-1 text-red-600 text-xs font-semibold">
          <AlertCircle size={14} />
          Prepare reception area
        </div>
      )}
    </Card>
  );
}
