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
  className?: string;
}

export function LiveMapView({
  ambulanceLocation,
  hospitalLocation,
  isLoading = false,
  isTrafficCleared = false,
  className = "w-full h-96 rounded-lg overflow-hidden border-2 border-gray-200",
}: LiveMapViewProps) {
  const [map, setMap] = useState<L.Map | null>(null);
  const [ambulanceMarker, setAmbulanceMarker] = useState<L.Marker | null>(null);
  const [hospitalMarker, setHospitalMarker] = useState<L.Marker | null>(null);
  const [activeRoutePoints, setActiveRoutePoints] = useState<[number, number][]>([]);
  const routeRef = useRef<L.Polyline | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mapContainer = document.getElementById('ambulance-map');
    if (!mapContainer) return;

    // Initialize map (Center on Bangalore)
    const newMap = L.map('ambulance-map').setView([12.9716, 77.5946], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(newMap);

    setMap(newMap);

    return () => {
      newMap.remove();
    };
  }, []);

  // Update ambulance marker
  useEffect(() => {
    if (!map || !ambulanceLocation) return;

    if (ambulanceMarker) {
      ambulanceMarker.setLatLng([ambulanceLocation.latitude, ambulanceLocation.longitude]);
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
      setAmbulanceMarker(marker);
      map.setView([ambulanceLocation.latitude, ambulanceLocation.longitude], 13);
    }
  }, [map, ambulanceLocation, ambulanceMarker]);

  // Update hospital marker and route
  useEffect(() => {
    if (!map || !hospitalLocation) return;

    if (hospitalMarker) {
      hospitalMarker.setLatLng([hospitalLocation.latitude, hospitalLocation.longitude]);
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
      setHospitalMarker(marker);
    }

    // Draw route
    if (ambulanceLocation && hospitalLocation) {
      const fetchRoute = async () => {
        try {
          // OpenRouteService expects longitude,latitude
          const start = `${ambulanceLocation.longitude},${ambulanceLocation.latitude}`;
          const end = `${hospitalLocation.longitude},${hospitalLocation.latitude}`;
          const url = `https://router.project-osrm.org/route/v1/driving/${ambulanceLocation.longitude},${ambulanceLocation.latitude};${hospitalLocation.longitude},${hospitalLocation.latitude}?geometries=geojson`;
          
          const response = await fetch(url);
          
          if (!response.ok) throw new Error('Route fetch failed');
          
          const data = await response.json();
          let routeCoordinates: [number, number][] = [];
          
          if (data.routes && data.routes.length > 0) {
            // OSRM returns coordinates directly in geojson format [lng, lat]
            routeCoordinates = data.routes[0].geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]]);
          } else {
             routeCoordinates = [
              [ambulanceLocation.latitude, ambulanceLocation.longitude],
              [hospitalLocation.latitude, hospitalLocation.longitude],
            ];
          }

          // Remove Fake generator fallbacks
          if (routeCoordinates.length === 0) {
             routeCoordinates = [
              [ambulanceLocation.latitude, ambulanceLocation.longitude],
              [hospitalLocation.latitude, hospitalLocation.longitude],
            ];
          }

          setActiveRoutePoints(routeCoordinates);          if (routeRef.current) {
            map.removeLayer(routeRef.current);
          }

          const newRoute = L.polyline(routeCoordinates, {
            color: '#3b82f6', // Changed to blue to indicate actual routing
            weight: 4,
            opacity: 0.8,
            dashArray: undefined, // Solid line for actual roads
          }).addTo(map);

          routeRef.current = newRoute;

          // Fit bounds to show the whole route
          map.fitBounds(newRoute.getBounds().pad(0.1));
        } catch (error) {
          console.error("Error drawing map route:", error);
          
          // Fallback on error
          if (routeRef.current) map.removeLayer(routeRef.current);
          routeRef.current = L.polyline(
            [
              [ambulanceLocation.latitude, ambulanceLocation.longitude],
              [hospitalLocation.latitude, hospitalLocation.longitude],
            ],
            { color: '#ef4444', weight: 3, dashArray: '5, 5' }
          ).addTo(map);
        }
      };

      fetchRoute();
    } else {
        setActiveRoutePoints([]);
    }
  }, [map, hospitalLocation, ambulanceLocation, hospitalMarker]);

  // Traffic Signal Simulation
  useEffect(() => {
    if (!isTrafficCleared || !map || !ambulanceMarker || activeRoutePoints.length === 0) return;

    // Pick 3 points as traffic signals along the route
    const signals = [
      activeRoutePoints[Math.floor(activeRoutePoints.length * 0.25)],
      activeRoutePoints[Math.floor(activeRoutePoints.length * 0.50)],
      activeRoutePoints[Math.floor(activeRoutePoints.length * 0.75)],
    ];

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

    const signalLeafletMarkers = signals.map(sig => {
       return L.marker(sig, { icon: getSignalIcon(false) }).addTo(map);
    });

    let step = 0;
    const interval = setInterval(() => {
       step += 1;
       if (step >= activeRoutePoints.length) {
          clearInterval(interval);
          return;
       }
       const currentLoc = activeRoutePoints[step];
       
       ambulanceMarker.setLatLng(currentLoc);
       map.panTo(currentLoc, { animate: true, duration: 0.1 });

       signalLeafletMarkers.forEach((sigMarker, idx) => {
          const sig = signals[idx];
          // Simple euclidian distance map logic
          const dist = Math.sqrt(Math.pow(currentLoc[0] - sig[0], 2) + Math.pow(currentLoc[1] - sig[1], 2));
          const isGreen = dist < 0.005; // Roughly 500m threshold on latlng metrics
          sigMarker.setIcon(getSignalIcon(isGreen));
       });
    }, 1000); // Drastically slower interval

    return () => {
      clearInterval(interval);
      signalLeafletMarkers.forEach(m => map.removeLayer(m));
    };
  }, [isTrafficCleared, map, ambulanceMarker, activeRoutePoints]);

  return (
    <div className={className}>
      <div id="ambulance-map" className="w-full h-full" />
    </div>
  );
}
