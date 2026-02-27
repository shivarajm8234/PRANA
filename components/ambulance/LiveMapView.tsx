'use client';

import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Coordinates } from '@/lib/types';

interface LiveMapViewProps {
  ambulanceLocation: Coordinates | null;
  hospitalLocation: Coordinates | null;
  isLoading?: boolean;
  isTrafficCleared?: boolean;
  isRerouting?: boolean;
  isDriving?: boolean;
  onNavigationUpdate?: (text: string) => void;
  onArrival?: () => void;
  className?: string;
}

export function LiveMapView({
  ambulanceLocation,
  hospitalLocation,
  isLoading = false,
  isTrafficCleared = false,
  isRerouting = false,
  isDriving = false,
  onNavigationUpdate,
  onArrival,
  className = "w-full h-96 rounded-lg overflow-hidden border-2 border-gray-200",
}: LiveMapViewProps) {
  const [map, setMap] = useState<L.Map | null>(null);
  const ambulanceMarkerRef = useRef<L.Marker | null>(null);
  const hospitalMarkerRef = useRef<L.Marker | null>(null);
  const routeRef = useRef<L.Polyline | null>(null);
  const activeRoutePointsRef = useRef<[number, number][]>([]);
  const signalLeafletMarkersRef = useRef<L.Marker[]>([]);
  const stepRef = useRef<number>(0);
  const moveIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Keep refs for callbacks and props so interval always has fresh closures without restarting
  const onArrivalRef = useRef(onArrival);
  const onNavigationUpdateRef = useRef(onNavigationUpdate);
  const isTrafficClearedRef = useRef(isTrafficCleared);
  const isDrivingRef = useRef(isDriving);
  const ambulanceLocationRef = useRef(ambulanceLocation);
  // Track the last isRerouting value we fetched with, to prevent duplicate fetches
  // null = never fetched, false = fetched initial route, true = fetched alternate route
  const lastFetchedRerouteRef = useRef<boolean | null>(null);

  useEffect(() => {
    onArrivalRef.current = onArrival;
    onNavigationUpdateRef.current = onNavigationUpdate;
    isTrafficClearedRef.current = isTrafficCleared;
    isDrivingRef.current = isDriving;
    ambulanceLocationRef.current = ambulanceLocation;
  }, [onArrival, onNavigationUpdate, isTrafficCleared, isDriving, ambulanceLocation]);

  // Map Initialization
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mapContainer = document.getElementById('ambulance-map');
    if (!mapContainer) return;

    if ((mapContainer as any)._leaflet_id) {
       (mapContainer as any)._leaflet_id = null;
    }

    const newMap = L.map('ambulance-map', {
      zoomControl: false,
    }).setView([12.9716, 77.5946], 13);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 20
    }).addTo(newMap);

    L.control.zoom({ position: 'bottomright' }).addTo(newMap);

    setMap(newMap);

    return () => {
      newMap.remove();
    };
  }, []);

  // Update Ambulance Marker
  useEffect(() => {
    if (!map || !ambulanceLocation) return;

    if (ambulanceMarkerRef.current) {
      if (!isDrivingRef.current) {
        ambulanceMarkerRef.current.setLatLng([ambulanceLocation.latitude, ambulanceLocation.longitude]);
      }
    } else {
      const marker = L.marker([ambulanceLocation.latitude, ambulanceLocation.longitude], {
        icon: L.divIcon({
          className: 'bg-transparent border-none',
          html: `
            <div class="relative flex items-center justify-center w-12 h-12">
              <div class="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30"></div>
              <div class="relative flex items-center justify-center w-10 h-10 bg-[#1b2230] border-2 border-blue-500 rounded-full shadow-xl z-10 transition-transform hover:scale-110">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3M22 17h-2v-5l-3-4h-3M22 17v-4.5M2 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0M14 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0M4.5 10.5h3v-3h3v3h3"/></svg>
              </div>
            </div>
          `,
          iconSize: [48, 48],
          iconAnchor: [24, 24],
          popupAnchor: [0, -24],
        }),
      }).addTo(map);

      marker.bindPopup('Current Location');
      ambulanceMarkerRef.current = marker;
      map.setView([ambulanceLocation.latitude, ambulanceLocation.longitude], 13);
    }
  }, [map, ambulanceLocation]);

  // Update Hospital Marker & Route computation
  // IMPORTANT: ambulanceLocation is accessed via ref to avoid re-triggering route fetch on GPS updates
  useEffect(() => {
    if (!map || !hospitalLocation) return;

    if (hospitalMarkerRef.current) {
      hospitalMarkerRef.current.setLatLng([hospitalLocation.latitude, hospitalLocation.longitude]);
    } else {
      const marker = L.marker([hospitalLocation.latitude, hospitalLocation.longitude], {
        icon: L.divIcon({
          className: 'bg-transparent border-none',
          html: `
            <div class="relative flex items-center justify-center w-12 h-12">
              <div class="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"></div>
              <div class="relative flex items-center justify-center w-10 h-10 bg-red-600 border-2 border-white rounded-full shadow-2xl z-10 transition-transform hover:scale-110">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20"/></svg>
              </div>
            </div>
          `,
          iconSize: [48, 48],
          iconAnchor: [24, 24],
          popupAnchor: [0, -24],
        }),
      }).addTo(map);

      marker.bindPopup('Hospital Destination');
      hospitalMarkerRef.current = marker;
    }

    // Use the ref for ambulance location so GPS updates don't re-trigger route fetching
    const currentAmbulanceLoc = ambulanceLocationRef.current;

    if (currentAmbulanceLoc && hospitalLocation) {
      // Prevent duplicate fetches: skip if we already fetched for this exact rerouting state
      if (lastFetchedRerouteRef.current !== null && lastFetchedRerouteRef.current === isRerouting) return;

      const fetchRoute = async () => {
        try {
          const start = `${currentAmbulanceLoc.longitude},${currentAmbulanceLoc.latitude}`;
          const end = `${hospitalLocation.longitude},${hospitalLocation.latitude}`;
          const url = `https://router.project-osrm.org/route/v1/driving/${start};${end}?geometries=geojson&alternatives=${isRerouting ? 'true' : 'false'}`;
          
          const response = await fetch(url);
          if (!response.ok) throw new Error('Route fetch failed');
          
          const data = await response.json();
          let routeCoordinates: [number, number][] = [];
          
          if (data.routes && data.routes.length > 0) {
            const routeIndex = (isRerouting && data.routes.length > 1) ? 1 : 0;
            routeCoordinates = data.routes[routeIndex].geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]]);
          } else {
             routeCoordinates = [
              [currentAmbulanceLoc.latitude, currentAmbulanceLoc.longitude],
              [hospitalLocation.latitude, hospitalLocation.longitude],
            ];
          }

          activeRoutePointsRef.current = routeCoordinates;
          
          // Clear existing interval before starting fresh
          if (moveIntervalRef.current) {
            clearInterval(moveIntervalRef.current);
            moveIntervalRef.current = null;
          }
          
          // Always reset step to 0 for a new route fetch
          stepRef.current = 0;
          lastFetchedRerouteRef.current = isRerouting;
          
          if (routeRef.current) {
            map.removeLayer(routeRef.current);
          }

          const newRoute = L.polyline(routeCoordinates, {
            color: isRerouting ? '#a855f7' : '#3b82f6', // Purple for alternate route
            weight: 4,
            opacity: 0.8,
            dashArray: undefined, // Solid line for actual roads
          }).addTo(map);

          routeRef.current = newRoute;
          map.fitBounds(newRoute.getBounds().pad(0.1));

          setupTrafficSignals();
          startDrivingSimulation();

        } catch (error) {
          console.error("Error drawing map route:", error);
        }
      };

      fetchRoute();
    } else {
        activeRoutePointsRef.current = [];
        lastFetchedRerouteRef.current = null;
        if (moveIntervalRef.current) clearInterval(moveIntervalRef.current);
    }
  }, [map, hospitalLocation, isRerouting]); // ambulanceLocation accessed via ref, not in deps

  const getSignalIcon = (isGreen: boolean) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `
      <div class="relative flex items-center justify-center w-8 h-8">
        <div class="w-5 h-5 rounded-full border-2 border-[#1b2230] flex ${isGreen ? 'bg-green-500 shadow-[0_0_20px_#22c55e]' : 'bg-red-500 shadow-[0_0_20px_#ef4444]'} transition-colors duration-300"></div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });

  const setupTrafficSignals = () => {
    if (!map || activeRoutePointsRef.current.length === 0) return;
    
    // Clear old
    signalLeafletMarkersRef.current.forEach(m => map.removeLayer(m));
    signalLeafletMarkersRef.current = [];

    const pts = activeRoutePointsRef.current;
    const signals = [
      pts[Math.floor(pts.length * 0.25)],
      pts[Math.floor(pts.length * 0.50)],
      pts[Math.floor(pts.length * 0.75)],
    ];

    signals.forEach(sig => {
      const marker = L.marker(sig, { icon: getSignalIcon(false) }).addTo(map);
      signalLeafletMarkersRef.current.push(marker);
    });
  };

  const startDrivingSimulation = () => {
    if (!map || !ambulanceMarkerRef.current || activeRoutePointsRef.current.length === 0) return;

    if (moveIntervalRef.current) clearInterval(moveIntervalRef.current);
    
    moveIntervalRef.current = setInterval(() => {
      if (!isDrivingRef.current) return; // Do not move if not actively driving

      stepRef.current += 1;
      const pts = activeRoutePointsRef.current;

      if (stepRef.current >= pts.length - 1) {
         if (moveIntervalRef.current) clearInterval(moveIntervalRef.current);
         if (onArrivalRef.current) onArrivalRef.current();
         return;
      }

      const currentLoc = pts[stepRef.current];
      
      if (ambulanceMarkerRef.current) {
        ambulanceMarkerRef.current.setLatLng(currentLoc);
        map.panTo(currentLoc, { animate: true, duration: 0.1 });
      }

      if (onNavigationUpdateRef.current && stepRef.current % 15 === 0) {
        const directions = ["Continue straight for 400m", "Keep right at the fork", "Turn Left in 300m", "Merge onto HWY", "Slight right in 200m", "Approaching Hospital zone"];
        onNavigationUpdateRef.current(directions[Math.floor(Math.random() * directions.length)]);
      }

      // Update signal lights
      const signalPts = [
        pts[Math.floor(pts.length * 0.25)],
        pts[Math.floor(pts.length * 0.50)],
        pts[Math.floor(pts.length * 0.75)],
      ];

      signalLeafletMarkersRef.current.forEach((sigMarker, idx) => {
         const sig = signalPts[idx];
         const dist = Math.sqrt(Math.pow(currentLoc[0] - sig[0], 2) + Math.pow(currentLoc[1] - sig[1], 2));
         let isGreen = isTrafficClearedRef.current;
         if (!isTrafficClearedRef.current) {
           isGreen = dist < 0.005; 
         }
         sigMarker.setIcon(getSignalIcon(isGreen));
      });
    }, 700);
  };

  // If we just toggled driving without route change, maybe trigger simulation
  useEffect(() => {
     if (isDriving && !moveIntervalRef.current && activeRoutePointsRef.current.length > 0) {
        startDrivingSimulation();
     }
  }, [isDriving]);

  // Clean up
  useEffect(() => {
    return () => {
      if (moveIntervalRef.current) clearInterval(moveIntervalRef.current);
      signalLeafletMarkersRef.current.forEach(m => {
        if (map) map.removeLayer(m);
      });
    };
  }, [map]);

  return (
    <div className={className}>
      <div id="ambulance-map" className="w-full h-full" />
    </div>
  );
}
