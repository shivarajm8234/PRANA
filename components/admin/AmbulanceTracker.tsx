'use client';

import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Ambulance, Incident } from '@/lib/types';
import { AMBULANCE_STATUSES, mockTrafficSignals } from '@/lib/mock-data';

interface AmbulanceTrackerProps {
  ambulances: Ambulance[];
  incidents: Incident[];
  className?: string;
}

export function AmbulanceTracker({ ambulances, incidents, className }: AmbulanceTrackerProps) {
  const [map, setMap] = useState<L.Map | null>(null);
  const activeMarkersRef = useRef<{ [ambId: string]: { marker: L.Marker, line: L.Polyline | null, moveInterval: NodeJS.Timeout | null, targetIncidentId: string | null } }>({});
  const heatmapLayerRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    const mapContainer = document.getElementById('admin-ambulance-map');
    if (!mapContainer) return;
    
    if ((mapContainer as any)._leaflet_id) {
       (mapContainer as any)._leaflet_id = null;
    }

    const newMap = L.map('admin-ambulance-map', {
        zoomControl: false,
        attributionControl: false
      }).setView([12.9716, 77.5946], 12);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
    }).addTo(newMap);

    const layerGroup = L.layerGroup().addTo(newMap);
    heatmapLayerRef.current = layerGroup;

    // Mock heatmap data to match the design (Red, Yellow, Green points in city center)
    const center = [12.9716, 77.5946];
    for(let i=0; i<300; i++) {
        const lat = center[0] + (Math.random() - 0.5) * 0.08;
        const lng = center[1] + (Math.random() - 0.5) * 0.08;
        const dist = Math.sqrt(Math.pow(lat - center[0], 2) + Math.pow(lng - center[1], 2));
        let color = '#22c55e'; // Green
        if(dist < 0.02) color = '#ef4444'; // Red
        else if(dist < 0.04) color = '#eab308'; // Yellow
        
        L.circle([lat, lng], { radius: 150, color: 'none', fillColor: color, fillOpacity: 0.4 }).addTo(layerGroup);
    }

    // Traffic Signals
    const tsIcon = L.divIcon({
      className: 'custom-ts',
      html: `<div style="width:12px; height:12px; background:#eab308; border-radius:50%; border:2px solid #111; box-shadow:0 0 5px #eab308"></div>`,
      iconSize: [12, 12],
      iconAnchor: [6, 6]
    });
    mockTrafficSignals.forEach(signal => {
        L.marker([signal.location.latitude, signal.location.longitude], { icon: tsIcon, interactive: false }).addTo(layerGroup);
    });

    setMap(newMap);

    return () => {
      newMap.remove();
    };
  }, []);

  useEffect(() => {
    if (!map) return;
    let isMounted = true;

    // Cleanup ambulances no longer in fleet
    const currentAmbulanceIds = new Set(ambulances.map(a => a.id));
    Object.keys(activeMarkersRef.current).forEach(id => {
       if (!currentAmbulanceIds.has(id)) {
           const ref = activeMarkersRef.current[id];
           if (ref.moveInterval) clearInterval(ref.moveInterval);
           if (ref.marker) map.removeLayer(ref.marker);
           if (ref.line) map.removeLayer(ref.line);
           delete activeMarkersRef.current[id];
       }
    });

    ambulances.forEach((ambulance) => {
      const incident = incidents.find((inc) => inc.ambulanceId === ambulance.id && inc.status !== 'completed');
      const hasActiveIncident = !!incident;

      const iconUrl = hasActiveIncident
        ? 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik05IDIyQzkuNTUyMjggMjIgMTAgMjEuNTUyMyAxMCAyMUMxMCAyMC40NDc3IDkuNTUyMjggMjAgOSAyMEM4LjQ0NzcyIDIwIDggMjAuNDQ3NyA4IDIxQzggMjEuNTUyMyA4LjQ0NzcyIDIyIDkgMjJaIiBmaWxsPSIjZGMyNjI2Ii8+PHBhdGggZD0iTTE2IDIyQzE2LjU1MjMgMjIgMTcgMjEuNTUyMyAxNyAyMUMxNyAyMC40NDc3IDE2LjU1MjMgMjAgMTYgMjBDMTUuNDQ3NyAyMCAxNSAyMC40NDc3IDE1IDIxQzE1IDIxLjU1MjMgMTUuNDQ3NyAyMiAxNiAyMloiIGZpbGw9IiNkYzI2MjYiLz48cGF0aCBkPSJNNSA5SDE2VjE5SDVWOVoiIHN0cm9rZT0iI2RjMjYyNiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTIgOEw1IDE0SDE5TDIyIDhIMjFWNkg3VjhIMnoiIHN0cm9rZT0iI2RjMjYyNiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+'
        : 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik05IDIyQzkuNTUyMjggMjIgMTAgMjEuNTUyMyAxMCAyMUMxMCAyMC40NDc3IDkuNTUyMjggMjAgOSAyMEM4LjQ0NzcyIDIwIDggMjAuNDQ3NyA4IDIxQzggMjEuNTUyMyA4LjQ0NzcyIDIyIDkgMjJaIiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTE2IDIyQzE2LjU1MjMgMjIgMTcgMjEuNTUyMyAxNyAyMUMxNyAyMC40NDc3IDE2LjU1MjMgMjAgMTYgMjBDMTUuNDQ3NyAyMCAxNSAyMC40NDc3IDE1IDIxQzE1IDIxLjU1MjMgMTUuNDQ3NyAyMiAxNiAyMloiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNNSA5SDE2VjE5SDVWOVoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTIgOEw1IDE0SDE5TDIyIDhIMjFWNkg3VjhIMnoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+';

      const icon = L.icon({
        iconUrl,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      let ref = activeMarkersRef.current[ambulance.id];
      if (!ref) {
        // Create new marker
        const marker = L.marker([ambulance.location.latitude, ambulance.location.longitude], { icon })
          .addTo(map)
          .bindPopup(`<strong>${ambulance.name}</strong><br/>${AMBULANCE_STATUSES[ambulance.status]}`);
        
        activeMarkersRef.current[ambulance.id] = { marker, line: null, moveInterval: null, targetIncidentId: null };
        ref = activeMarkersRef.current[ambulance.id];
      } else {
        // Update existing marker's icon and popup
        ref.marker.setIcon(icon);
        ref.marker.setPopupContent(`<strong>${ambulance.name}</strong><br/>${AMBULANCE_STATUSES[ambulance.status]}`);
      }

      // If there's an active incident we haven't targeted yet, animate towards it
      if (incident && ref.targetIncidentId !== incident.id) {
        if (ref.moveInterval) clearInterval(ref.moveInterval);
        if (ref.line) map.removeLayer(ref.line);
        ref.targetIncidentId = incident.id;
        
        const fetchRoute = async () => {
          try {
            const start = `${ambulance.location.longitude},${ambulance.location.latitude}`;
            const end = `${incident.patientLocation.longitude},${incident.patientLocation.latitude}`;
            const url = `https://router.project-osrm.org/route/v1/driving/${start};${end}?geometries=geojson`;
            
            const response = await fetch(url);
            if (!response.ok) throw new Error('OSRM failed');
            const data = await response.json();
            
            if (!isMounted || !map || !activeMarkersRef.current[ambulance.id]) return;
            
            if (data.routes && data.routes.length > 0) {
              const routeCoordinates: [number, number][] = data.routes[0].geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]]);
              
              ref.line = L.polyline(routeCoordinates, {
                color: '#ef4444', 
                weight: 4, 
                opacity: 0.6,
                dashArray: '10, 10'
              }).addTo(map);

              let step = 0;
              ref.moveInterval = setInterval(() => {
                if (!isMounted || !map || !activeMarkersRef.current[ambulance.id]) {
                  if (ref.moveInterval) clearInterval(ref.moveInterval);
                  return;
                }
                step += 1;
                if (step >= routeCoordinates.length) {
                  clearInterval(ref.moveInterval!);
                  return;
                }
                activeMarkersRef.current[ambulance.id].marker.setLatLng(routeCoordinates[step]);
              }, 700);
            }
          } catch (e) {
             console.error('Route fetch fail:', e);
          }
        };
        fetchRoute();
      } else if (!incident && ref.targetIncidentId !== null) {
        // Incident resolved, reset
        if (ref.moveInterval) clearInterval(ref.moveInterval);
        if (ref.line) map.removeLayer(ref.line);
        ref.targetIncidentId = null;
        ref.marker.setLatLng([ambulance.location.latitude, ambulance.location.longitude]);
      }
    });

    return () => {
       isMounted = false;
    };
  }, [map, ambulances, incidents]);

  return (
    <div className={className || "w-full h-96 rounded-lg overflow-hidden border-2 border-gray-200"}>
      <div id="admin-ambulance-map" className="w-full h-full bg-[#11131a]" />
    </div>
  );
}
