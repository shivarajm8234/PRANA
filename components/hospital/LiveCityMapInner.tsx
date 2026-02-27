'use client';

import React, { useState, useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { Coordinates, Incident } from '@/lib/types';
import L from 'leaflet';

export interface LiveCityMapInnerProps {
  hospitalLocation: Coordinates | null;
  hospitalName?: string;
  incidents?: Incident[];
  className?: string;
}

export function LiveCityMapInner({ hospitalLocation, hospitalName, incidents = [], className }: LiveCityMapInnerProps) {
  const [map, setMap] = useState<L.Map | null>(null);
  const activeAmbulancesRef = useRef<{ [key: string]: { marker: L.Marker, line: L.Polyline | null, moveInterval: NodeJS.Timeout | null } }>({});

  useEffect(() => {
    if (typeof window === 'undefined' || !hospitalLocation) return;

    // Default config to center on Bangalore
    const defaultLocation: [number, number] = [12.9716, 77.5946];
    const centerObj: [number, number] = hospitalLocation ? [hospitalLocation.latitude, hospitalLocation.longitude] : defaultLocation;

    // Check if map container is already initialized to fix hot-reloading errors
    const container = L.DomUtil.get('hospital-city-map');
    if (container != null && (container as any)._leaflet_id !== null) {
      (container as any)._leaflet_id = null;
    }

    // Create map
    const newMap = L.map('hospital-city-map', {
      zoomControl: false,
      attributionControl: false
    }).setView(centerObj, 14);

    // Light style to match the ambulance map
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
    }).addTo(newMap);

    // Hospital Marker with Pulse
    const hospIcon = L.divIcon({
      className: 'custom-hosp-marker',
      html: `<div style="background-color: #ef4444; border: 4px solid white; border-radius: 4px; padding: 4px; box-shadow: 0 0 15px rgba(239, 68, 68, 0.8), 0 0 30px rgba(239, 68, 68, 0.4); width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;"><div style="background: white; width: 100%; height: 25%; position: absolute;"></div><div style="background: white; width: 25%; height: 100%; position: absolute;"></div></div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });
    L.marker(centerObj, { icon: hospIcon }).addTo(newMap);

    // Draw fake routes for map effect matching design (Background traffic)
    const drawMockRoute = (pathCoords: [number, number][], color: string) => {
      L.polyline(pathCoords, { color, weight: 2, opacity: 0.3, dashArray: '4' }).addTo(newMap);
    }

    // Background ambient traffic routes
    drawMockRoute([centerObj, [centerObj[0] + 0.015, centerObj[1] - 0.005], [centerObj[0] + 0.02, centerObj[1] - 0.015]], '#9ca3af');
    drawMockRoute([centerObj, [centerObj[0] - 0.015, centerObj[1] + 0.005], [centerObj[0] - 0.025, centerObj[1] + 0.01]], '#9ca3af');
    drawMockRoute([centerObj, [centerObj[0] - 0.01, centerObj[1] - 0.015], [centerObj[0] - 0.02, centerObj[1] - 0.02], [centerObj[0] - 0.03, centerObj[1] - 0.025]], '#9ca3af');
    drawMockRoute([centerObj, [centerObj[0] + 0.01, centerObj[1] + 0.02], [centerObj[0] + 0.02, centerObj[1] + 0.03]], '#9ca3af');

    setMap(newMap);

    return () => {
      newMap.remove();
      if (container != null) {
        container.innerHTML = '';
      }
    };
  }, [hospitalLocation]);

  useEffect(() => {
    if (!map || !hospitalLocation) return;
    let isMounted = true;
    const centerObj: [number, number] = [hospitalLocation.latitude, hospitalLocation.longitude];

    const currentIncidentIds = new Set(incidents.map(i => i.id));

    // Cleanup ambulances no longer incoming
    Object.keys(activeAmbulancesRef.current).forEach(id => {
       if (!currentIncidentIds.has(id)) {
           const ref = activeAmbulancesRef.current[id];
           if (ref.moveInterval) clearInterval(ref.moveInterval);
           if (ref.marker) map.removeLayer(ref.marker);
           if (ref.line) map.removeLayer(ref.line);
           delete activeAmbulancesRef.current[id];
       }
    });

    // Render real incidents / incoming ambulances
    if (incidents && incidents.length > 0) {
      incidents.forEach((incident) => {
        if (!incident.patientLocation || activeAmbulancesRef.current[incident.id]) return;
        
        const isCritical = incident.severity === 'critical';
        const color = isCritical ? '#ef4444' : '#3b82f6'; // Match ambulance map styling

        const pos: [number, number] = [incident.patientLocation.latitude, incident.patientLocation.longitude];

        const amboIcon = L.divIcon({
          className: 'custom-ambo-marker',
          html: `<div style="background-color: ${color}; border: 2px solid white; border-radius: 50%; box-shadow: 0 0 15px ${color}; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 14px; color: white; animation: pulse 2s infinite;">🚑</div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });

        const amboMarker = L.marker(pos, { icon: amboIcon }).addTo(map);
        activeAmbulancesRef.current[incident.id] = { marker: amboMarker, line: null, moveInterval: null };

        // Fetch actual driving directions from OSRM instead of straight line
        const fetchRoute = async () => {
          try {
            const start = `${incident.patientLocation.longitude},${incident.patientLocation.latitude}`;
            const end = `${hospitalLocation.longitude},${hospitalLocation.latitude}`;
            const url = `https://router.project-osrm.org/route/v1/driving/${start};${end}?geometries=geojson`;
            
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch hospital route');
            
            const data = await response.json();
            if (!isMounted || !map || !activeAmbulancesRef.current[incident.id]) return;
            
            if (data.routes && data.routes.length > 0) {
              const routeCoordinates: [number, number][] = data.routes[0].geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]]);
              
              const line = L.polyline(routeCoordinates, {
                color, 
                weight: 4, 
                opacity: 0.8
              }).addTo(map);

              activeAmbulancesRef.current[incident.id].line = line;

              // Simulate movement towards hospital (Synchronized with 700ms ambulance interval)
              let step = 0;
              const moveInterval = setInterval(() => {
                if (!isMounted || !map || !activeAmbulancesRef.current[incident.id]) {
                  clearInterval(moveInterval);
                  return;
                }
                step += 1;
                if (step >= routeCoordinates.length) {
                  clearInterval(moveInterval);
                  return;
                }
                const currentLoc = routeCoordinates[step];
                activeAmbulancesRef.current[incident.id].marker.setLatLng(currentLoc);
              }, 700);

              activeAmbulancesRef.current[incident.id].moveInterval = moveInterval;

            } else {
              const line = L.polyline([pos, centerObj], { color, weight: 3, dashArray: '10, 10', opacity: 0.8 }).addTo(map);
              activeAmbulancesRef.current[incident.id].line = line;
            }
          } catch (e) {
            console.error("Route error:", e);
            if (isMounted && map && activeAmbulancesRef.current[incident.id]) {
               const line = L.polyline([pos, centerObj], { color, weight: 3, dashArray: '10, 10', opacity: 0.8 }).addTo(map);
               activeAmbulancesRef.current[incident.id].line = line;
            }
          }
        };
        fetchRoute();
      });
    }

    return () => {
      isMounted = false;
    };
  }, [map, incidents, hospitalLocation]);

  return (
    <div className={className || "w-full h-full relative"}>
      <div id="hospital-city-map" className="w-full h-full rounded-xl overflow-hidden border-2 border-[#2b3346]" style={{ zIndex: 1 }} />
      <div className="absolute top-4 right-4 bg-[#1b2230]/90 border border-gray-600 px-4 py-2 rounded-lg backdrop-blur text-white font-bold text-xl tracking-wider shadow-xl z-[1000]">
        ETA: {incidents && incidents.length > 0 ? Math.ceil((incidents[0].estimatedArrivalTime || 180)/60) : 0} MIN
      </div>
    </div>
  );
}
