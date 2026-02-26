(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ambulance/LiveMapView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveMapView",
    ()=>LiveMapView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function LiveMapView({ ambulanceLocation, hospitalLocation, isLoading = false, isTrafficCleared = false, className = "w-full h-96 rounded-lg overflow-hidden border-2 border-gray-200" }) {
    _s();
    const [map, setMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ambulanceMarker, setAmbulanceMarker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hospitalMarker, setHospitalMarker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeRoutePoints, setActiveRoutePoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const routeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveMapView.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const mapContainer = document.getElementById('ambulance-map');
            if (!mapContainer) return;
            // Initialize map (Center on Bangalore)
            const newMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map('ambulance-map').setView([
                12.9716,
                77.5946
            ], 13);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 19
            }).addTo(newMap);
            setMap(newMap);
            return ({
                "LiveMapView.useEffect": ()=>{
                    newMap.remove();
                }
            })["LiveMapView.useEffect"];
        }
    }["LiveMapView.useEffect"], []);
    // Update ambulance marker
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveMapView.useEffect": ()=>{
            if (!map || !ambulanceLocation) return;
            if (ambulanceMarker) {
                ambulanceMarker.setLatLng([
                    ambulanceLocation.latitude,
                    ambulanceLocation.longitude
                ]);
            } else {
                const marker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                    ambulanceLocation.latitude,
                    ambulanceLocation.longitude
                ], {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                        className: 'bg-transparent border-none',
                        html: `
            <div class="relative flex items-center justify-center w-12 h-12">
              <div class="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30"></div>
              <div class="relative flex items-center justify-center w-10 h-10 bg-[#1b2230] border-2 border-blue-500 rounded-full shadow-xl z-10 transition-transform hover:scale-110">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3M22 17h-2v-5l-3-4h-3M22 17v-4.5M2 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0M14 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0M4.5 10.5h3v-3h3v3h3"/></svg>
              </div>
            </div>
          `,
                        iconSize: [
                            48,
                            48
                        ],
                        iconAnchor: [
                            24,
                            24
                        ],
                        popupAnchor: [
                            0,
                            -24
                        ]
                    })
                }).addTo(map);
                marker.bindPopup('Current Location');
                setAmbulanceMarker(marker);
                map.setView([
                    ambulanceLocation.latitude,
                    ambulanceLocation.longitude
                ], 13);
            }
        }
    }["LiveMapView.useEffect"], [
        map,
        ambulanceLocation,
        ambulanceMarker
    ]);
    // Update hospital marker and route
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveMapView.useEffect": ()=>{
            if (!map || !hospitalLocation) return;
            if (hospitalMarker) {
                hospitalMarker.setLatLng([
                    hospitalLocation.latitude,
                    hospitalLocation.longitude
                ]);
            } else {
                const marker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                    hospitalLocation.latitude,
                    hospitalLocation.longitude
                ], {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                        className: 'bg-transparent border-none',
                        html: `
            <div class="relative flex items-center justify-center w-12 h-12">
              <div class="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"></div>
              <div class="relative flex items-center justify-center w-10 h-10 bg-red-600 border-2 border-white rounded-full shadow-2xl z-10 transition-transform hover:scale-110">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20"/></svg>
              </div>
            </div>
          `,
                        iconSize: [
                            48,
                            48
                        ],
                        iconAnchor: [
                            24,
                            24
                        ],
                        popupAnchor: [
                            0,
                            -24
                        ]
                    })
                }).addTo(map);
                marker.bindPopup('Hospital Destination');
                setHospitalMarker(marker);
            }
            // Draw route
            if (ambulanceLocation && hospitalLocation) {
                const fetchRoute = {
                    "LiveMapView.useEffect.fetchRoute": async ()=>{
                        try {
                            // OpenRouteService expects longitude,latitude
                            const start = `${ambulanceLocation.longitude},${ambulanceLocation.latitude}`;
                            const end = `${hospitalLocation.longitude},${hospitalLocation.latitude}`;
                            const url = `https://router.project-osrm.org/route/v1/driving/${ambulanceLocation.longitude},${ambulanceLocation.latitude};${hospitalLocation.longitude},${hospitalLocation.latitude}?geometries=geojson`;
                            const response = await fetch(url);
                            if (!response.ok) throw new Error('Route fetch failed');
                            const data = await response.json();
                            let routeCoordinates = [];
                            if (data.routes && data.routes.length > 0) {
                                // OSRM returns coordinates directly in geojson format [lng, lat]
                                routeCoordinates = data.routes[0].geometry.coordinates.map({
                                    "LiveMapView.useEffect.fetchRoute": (coord)=>[
                                            coord[1],
                                            coord[0]
                                        ]
                                }["LiveMapView.useEffect.fetchRoute"]);
                            } else {
                                routeCoordinates = [
                                    [
                                        ambulanceLocation.latitude,
                                        ambulanceLocation.longitude
                                    ],
                                    [
                                        hospitalLocation.latitude,
                                        hospitalLocation.longitude
                                    ]
                                ];
                            }
                            // Remove Fake generator fallbacks
                            if (routeCoordinates.length === 0) {
                                routeCoordinates = [
                                    [
                                        ambulanceLocation.latitude,
                                        ambulanceLocation.longitude
                                    ],
                                    [
                                        hospitalLocation.latitude,
                                        hospitalLocation.longitude
                                    ]
                                ];
                            }
                            setActiveRoutePoints(routeCoordinates);
                            if (routeRef.current) {
                                map.removeLayer(routeRef.current);
                            }
                            const newRoute = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].polyline(routeCoordinates, {
                                color: '#3b82f6',
                                weight: 4,
                                opacity: 0.8,
                                dashArray: undefined
                            }).addTo(map);
                            routeRef.current = newRoute;
                            // Fit bounds to show the whole route
                            map.fitBounds(newRoute.getBounds().pad(0.1));
                        } catch (error) {
                            console.error("Error drawing map route:", error);
                            // Fallback on error
                            if (routeRef.current) map.removeLayer(routeRef.current);
                            routeRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].polyline([
                                [
                                    ambulanceLocation.latitude,
                                    ambulanceLocation.longitude
                                ],
                                [
                                    hospitalLocation.latitude,
                                    hospitalLocation.longitude
                                ]
                            ], {
                                color: '#ef4444',
                                weight: 3,
                                dashArray: '5, 5'
                            }).addTo(map);
                        }
                    }
                }["LiveMapView.useEffect.fetchRoute"];
                fetchRoute();
            } else {
                setActiveRoutePoints([]);
            }
        }
    }["LiveMapView.useEffect"], [
        map,
        hospitalLocation,
        ambulanceLocation,
        hospitalMarker
    ]);
    // Traffic Signal Simulation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveMapView.useEffect": ()=>{
            if (!isTrafficCleared || !map || !ambulanceMarker || activeRoutePoints.length === 0) return;
            // Pick 3 points as traffic signals along the route
            const signals = [
                activeRoutePoints[Math.floor(activeRoutePoints.length * 0.25)],
                activeRoutePoints[Math.floor(activeRoutePoints.length * 0.50)],
                activeRoutePoints[Math.floor(activeRoutePoints.length * 0.75)]
            ];
            const getSignalIcon = {
                "LiveMapView.useEffect.getSignalIcon": (isGreen)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                        className: 'bg-transparent border-none',
                        html: `
        <div class="relative flex items-center justify-center w-8 h-8">
          <div class="w-5 h-5 rounded-full border-2 border-[#1b2230] flex ${isGreen ? 'bg-green-500 shadow-[0_0_20px_#22c55e]' : 'bg-red-500 shadow-[0_0_20px_#ef4444]'} transition-colors duration-300"></div>
        </div>
      `,
                        iconSize: [
                            32,
                            32
                        ],
                        iconAnchor: [
                            16,
                            16
                        ]
                    })
            }["LiveMapView.useEffect.getSignalIcon"];
            const signalLeafletMarkers = signals.map({
                "LiveMapView.useEffect.signalLeafletMarkers": (sig)=>{
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker(sig, {
                        icon: getSignalIcon(false)
                    }).addTo(map);
                }
            }["LiveMapView.useEffect.signalLeafletMarkers"]);
            let step = 0;
            const interval = setInterval({
                "LiveMapView.useEffect.interval": ()=>{
                    step += 1;
                    if (step >= activeRoutePoints.length) {
                        clearInterval(interval);
                        return;
                    }
                    const currentLoc = activeRoutePoints[step];
                    ambulanceMarker.setLatLng(currentLoc);
                    map.panTo(currentLoc, {
                        animate: true,
                        duration: 0.1
                    });
                    signalLeafletMarkers.forEach({
                        "LiveMapView.useEffect.interval": (sigMarker, idx)=>{
                            const sig = signals[idx];
                            // Simple euclidian distance map logic
                            const dist = Math.sqrt(Math.pow(currentLoc[0] - sig[0], 2) + Math.pow(currentLoc[1] - sig[1], 2));
                            const isGreen = dist < 0.005; // Roughly 500m threshold on latlng metrics
                            sigMarker.setIcon(getSignalIcon(isGreen));
                        }
                    }["LiveMapView.useEffect.interval"]);
                }
            }["LiveMapView.useEffect.interval"], 1000); // Drastically slower interval
            return ({
                "LiveMapView.useEffect": ()=>{
                    clearInterval(interval);
                    signalLeafletMarkers.forEach({
                        "LiveMapView.useEffect": (m)=>map.removeLayer(m)
                    }["LiveMapView.useEffect"]);
                }
            })["LiveMapView.useEffect"];
        }
    }["LiveMapView.useEffect"], [
        isTrafficCleared,
        map,
        ambulanceMarker,
        activeRoutePoints
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "ambulance-map",
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/components/ambulance/LiveMapView.tsx",
            lineNumber: 233,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ambulance/LiveMapView.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
_s(LiveMapView, "YpyTgVeyv8l8CTsahVjwFKQpPDQ=");
_c = LiveMapView;
var _c;
__turbopack_context__.k.register(_c, "LiveMapView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ambulance/LiveMapView.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/ambulance/LiveMapView.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_ambulance_LiveMapView_tsx_a4d96685._.js.map