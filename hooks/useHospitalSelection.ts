'use client';

import { useState } from 'react';
import { HospitalMatch } from '@/lib/types';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useHospitalSelection(issueType: string, severity: string, patientLocation: any) {
  const [selectedHospital, setSelectedHospital] = useState<HospitalMatch | null>(null);
  const [isCreatingIncident, setIsCreatingIncident] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch hospital matches when location/issue/severity change
  const { data, isLoading, error: fetchError } = useSWR(
    patientLocation && issueType && severity
      ? `/api/hospitals/match?issueType=${issueType}&severity=${severity}`
      : null,
    () => {
      if (!patientLocation) return null;
      return fetch('/api/hospitals/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          issueType,
          severity,
          patientLocation,
          topN: 1,
        }),
      }).then((res) => res.json());
    }
  );

  const bestMatch = data?.matches?.[0] || null;

  const createIncident = async (ambulanceId: string) => {
    if (!bestMatch || !patientLocation) {
      setError('No hospital selected');
      return null;
    }

    setIsCreatingIncident(true);
    setError(null);

    try {
      const response = await fetch('/api/incidents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ambulanceId,
          issueType,
          severity,
          patientLocation,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create incident');
      }

      const result = await response.json();
      return result;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setIsCreatingIncident(false);
    }
  };

  return {
    bestMatch,
    isLoading,
    error: error || fetchError?.message,
    isCreatingIncident,
    createIncident,
  };
}
