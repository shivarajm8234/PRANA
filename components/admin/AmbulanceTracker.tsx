'use client';

import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Ambulance, Incident } from '@/lib/types';
import { AMBULANCE_STATUSES } from '@/lib/mock-data';

interface AmbulanceTrackerProps {
  ambulances: Ambulance[];
  incidents: Incident[];
  className?: string;
}

export function AmbulanceTracker({ ambulances, incidents, className }: AmbulanceTrackerProps) {
  const [map, setMap] = useState<L.Map | null>(null);
  const [markers, setMarkers] = useState<Map<string, L.Marker>>(new Map());

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

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
    }).addTo(newMap);

    setMap(newMap);

    return () => {
      newMap.remove();
    };
  }, []);

  useEffect(() => {
    if (!map) return;

    const newMarkers = new Map<string, L.Marker>();

    // Mock heatmap data to match the design (Red, Yellow, Green points in city center)
    const drawHeatmapMocks = () => {
       const center = [12.9716, 77.5946];
       for(let i=0; i<300; i++) {
          const lat = center[0] + (Math.random() - 0.5) * 0.08;
          const lng = center[1] + (Math.random() - 0.5) * 0.08;
          const dist = Math.sqrt(Math.pow(lat - center[0], 2) + Math.pow(lng - center[1], 2));
          let color = '#22c55e'; // Green
          if(dist < 0.02) color = '#ef4444'; // Red
          else if(dist < 0.04) color = '#eab308'; // Yellow
          
          L.circle([lat, lng], { radius: 150, color: 'none', fillColor: color, fillOpacity: 0.4 }).addTo(map);
       }
    };
    
    drawHeatmapMocks();

    ambulances.forEach((ambulance) => {
      const incident = incidents.find((inc) => inc.ambulanceId === ambulance.id && inc.status !== 'completed');
      const hasActiveIncident = !!incident;

      const icon = L.icon({
        iconUrl: hasActiveIncident
          ? 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik05IDIyQzkuNTUyMjggMjIgMTAgMjEuNTUyMyAxMCAyMUMxMCAyMC40NDc3IDkuNTUyMjggMjAgOSAyMEM4LjQ0NzcyIDIwIDggMjAuNDQ3NyA4IDIxQzggMjEuNTUyMyA4LjQ0NzcyIDIyIDkgMjJaIiBmaWxsPSIjZGMyNjI2Ii8+PHBhdGggZD0iTTE2IDIyQzE2LjU1MjMgMjIgMTcgMjEuNTUyMyAxNyAyMUMxNyAyMC40NDc3IDE2LjU1MjMgMjAgMTYgMjBDMTUuNDQ3NyAyMCAxNSAyMC40NDc3IDE1IDIxQzE1IDIxLjU1MjMgMTUuNDQ3NyAyMiAxNiAyMloiIGZpbGw9IiNkYzI2MjYiLz48cGF0aCBkPSJNNSA5SDE2VjE5SDVWOVoiIHN0cm9rZT0iI2RjMjYyNiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTIgOEw1IDE0SDE5TDIyIDhIMjFWNkg3VjhIMnoiIHN0cm9rZT0iI2RjMjYyNiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+'
          : 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik05IDIyQzkuNTUyMjggMjIgMTAgMjEuNTUyMyAxMCAyMUMxMCAyMC40NDc3IDkuNTUyMjggMjAgOSAyMEM4LjQ0NzcyIDIwIDggMjAuNDQ3NyA4IDIxQzggMjEuNTUyMyA4LjQ0NzcyIDIyIDkgMjJaIiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTE2IDIyQzE2LjU1MjMgMjIgMTcgMjEuNTUyMyAxNyAyMUMxNyAyMC40NDc3IDE2LjU1MjMgMjAgMTYgMjBDMTUuNDQ3NyAyMCAxNSAyMC40NDc3IDE1IDIxQzE1IDIxLjU1MjMgMTUuNDQ3NyAyMiAxNiAyMloiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNNSA5SDE2VjE5SDVWOVoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTIgOEw1IDE0SDE5TDIyIDhIMjFWNkg3VjhIMnoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      const marker = L.marker([ambulance.location.latitude, ambulance.location.longitude], {
        icon,
      })
        .addTo(map)
        .bindPopup(
          `<strong>${ambulance.name}</strong><br/>${AMBULANCE_STATUSES[ambulance.status]}`
        );

      newMarkers.set(ambulance.id, marker);
    });

    setMarkers(newMarkers);
  }, [map, ambulances, incidents]);

  return (
    <div className={className || "w-full h-96 rounded-lg overflow-hidden border-2 border-gray-200"}>
      <div id="admin-ambulance-map" className="w-full h-full bg-[#11131a]" />
    </div>
  );
}
