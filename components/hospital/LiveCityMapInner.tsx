'use client';

import React, { useState, useEffect } from 'react';
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

    // Dark style perfectly matching image 
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
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
    drawMockRoute([centerObj, [centerObj[0] + 0.015, centerObj[1] - 0.005], [centerObj[0] + 0.02, centerObj[1] - 0.015]], '#4b5563');
    drawMockRoute([centerObj, [centerObj[0] - 0.015, centerObj[1] + 0.005], [centerObj[0] - 0.025, centerObj[1] + 0.01]], '#4b5563');
    drawMockRoute([centerObj, [centerObj[0] - 0.01, centerObj[1] - 0.015], [centerObj[0] - 0.02, centerObj[1] - 0.02], [centerObj[0] - 0.03, centerObj[1] - 0.025]], '#4b5563');
    drawMockRoute([centerObj, [centerObj[0] + 0.01, centerObj[1] + 0.02], [centerObj[0] + 0.02, centerObj[1] + 0.03]], '#4b5563');

    // Render real incidents / incoming ambulances
    if (incidents && incidents.length > 0) {
      incidents.forEach((incident) => {
        if (!incident.patientLocation) return;
        const isCritical = incident.severity === 'critical';
        const color = isCritical ? '#ef4444' : '#eab308'; // Red for critical, Yellow for others

        const pos: [number, number] = [incident.patientLocation.latitude, incident.patientLocation.longitude];

        const amboIcon = L.divIcon({
          className: 'custom-ambo-marker',
          html: `<div style="background-color: ${color}; border: 2px solid white; border-radius: 50%; box-shadow: 0 0 15px ${color}; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 14px; color: white; animation: pulse 2s infinite;">🚑</div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });

        L.marker(pos, { icon: amboIcon }).addTo(newMap);

        // Draw a thick dashed line from ambulance to hospital
        L.polyline([pos, centerObj], { color, weight: 3, dashArray: '10, 10', opacity: 0.8 }).addTo(newMap);
      });
    }

    return () => {
      newMap.remove();
      if (container != null) {
        container.innerHTML = '';
      }
    };
  }, [hospitalLocation, incidents]);

  return (
    <div className={className || "w-full h-full relative"}>
      <div id="hospital-city-map" className="w-full h-full rounded-xl overflow-hidden border-2 border-[#2b3346]" style={{ zIndex: 1 }} />
      <div className="absolute top-4 right-4 bg-[#1b2230]/90 border border-gray-600 px-4 py-2 rounded-lg backdrop-blur text-white font-bold text-xl tracking-wider shadow-xl z-[1000]">
        ETA: 3 MIN
      </div>
    </div>
  );
}
