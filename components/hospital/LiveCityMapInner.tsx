'use client';

import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { Coordinates } from '@/lib/types';
import L from 'leaflet';

export interface LiveCityMapInnerProps {
  hospitalLocation: Coordinates | null;
  className?: string;
}

export function LiveCityMapInner({ hospitalLocation, className }: LiveCityMapInnerProps) {
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

      // Draw fake routes for map effect matching design
      const drawMockRoute = (pathCoords: [number, number][], color: string) => {
         L.polyline(pathCoords, { color, weight: 4, opacity: 0.9 }).addTo(newMap);
         
         // Intersections
         pathCoords.forEach(c => {
           L.circleMarker(c, {
              radius: 5, color: '#9ca3af', fillColor: '#1f2937', fillOpacity: 1, weight: 2
           }).addTo(newMap);
         })
         
         // Ambo maker start
         L.circleMarker(pathCoords[pathCoords.length - 1], {
             radius: 8, color: color, fillColor: color, fillOpacity: 1, weight: 2
         }).addTo(newMap);
      }

      // Red Route
      drawMockRoute([centerObj, [centerObj[0] + 0.015, centerObj[1] - 0.005], [centerObj[0] + 0.02, centerObj[1] - 0.015]], '#ef4444');
      drawMockRoute([centerObj, [centerObj[0] - 0.015, centerObj[1] + 0.005], [centerObj[0] - 0.025, centerObj[1] + 0.01]], '#ef4444');
      
      // Blue Route
      drawMockRoute([centerObj, [centerObj[0] - 0.01, centerObj[1] - 0.015], [centerObj[0] - 0.02, centerObj[1] - 0.02], [centerObj[0] - 0.03, centerObj[1] - 0.025]], '#3b82f6');
      drawMockRoute([centerObj, [centerObj[0] + 0.01, centerObj[1] + 0.02], [centerObj[0] + 0.02, centerObj[1] + 0.03]], '#3b82f6');
      
      // Green Route
      drawMockRoute([centerObj, [centerObj[0] - 0.015, centerObj[1] + 0.015], [centerObj[0] - 0.02, centerObj[1] + 0.02]], '#22c55e');
      drawMockRoute([centerObj, [centerObj[0] + 0.005, centerObj[1] - 0.01], [centerObj[0] + 0.015, centerObj[1] - 0.02]], '#22c55e');

      // Yellow Route
      drawMockRoute([centerObj, [centerObj[0] - 0.005, centerObj[1] + 0.02], [centerObj[0] - 0.008, centerObj[1] + 0.03]], '#eab308');
      drawMockRoute([centerObj, [centerObj[0] + 0.02, centerObj[1] - 0.025]], '#eab308');

      return () => {
        newMap.remove();
        if (container != null) {
          container.innerHTML = '';
        }
      };
  }, [hospitalLocation]);

  return (
    <div className={className || "w-full h-full relative"}>
       <div id="hospital-city-map" className="w-full h-full rounded-xl overflow-hidden border-2 border-[#2b3346]" style={{ zIndex: 1 }} />
       <div className="absolute top-4 right-4 bg-[#1b2230]/90 border border-gray-600 px-4 py-2 rounded-lg backdrop-blur text-white font-bold text-xl tracking-wider shadow-xl z-[1000]">
           ETA: 3 MIN
       </div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-16 bg-[#2a3045]/90 px-4 py-2 rounded text-white font-bold tracking-wider shadow-lg z-[1000] border border-gray-600 whitespace-nowrap hidden lg:block">
           St. Mary's Hospital
       </div>
    </div>
  );
}
