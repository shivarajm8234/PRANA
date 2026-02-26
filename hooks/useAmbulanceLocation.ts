'use client';

import { useEffect, useState, useRef } from 'react';
import { Coordinates } from '@/lib/types';

export function useAmbulanceLocation() {
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const watchIdRef = useRef<number | null>(null);

  const startTracking = () => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported');
      return;
    }

    setIsTracking(true);

    const geoOptions = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    };

    // Get initial location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setError(null);
      },
      (err) => {
        console.warn('[v0] Geolocation error:', err.message);
        setError(err.message);
        // Use a default Bengaluru location for testing if live tracking fails
        setLocation({
          latitude: 12.9716,
          longitude: 77.5946,
        });
      },
      geoOptions
    );

    // Watch for location changes
    watchIdRef.current = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setError(null);
      },
      (err) => {
        console.warn('[v0] Watch error:', err.message);
        setError(err.message);
        // Only set fallback if we don't already have a location
        setLocation((prev) => prev || {
          latitude: 12.9716,
          longitude: 77.5946,
        });
      },
      geoOptions
    );
  };

  const stopTracking = () => {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
    setIsTracking(false);
  };

  useEffect(() => {
    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, []);

  return { location, error, isTracking, startTracking, stopTracking };
}
