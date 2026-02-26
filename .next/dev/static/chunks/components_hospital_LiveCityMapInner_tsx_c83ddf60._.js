(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/hospital/LiveCityMapInner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveCityMapInner",
    ()=>LiveCityMapInner
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
function LiveCityMapInner({ hospitalLocation, className }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveCityMapInner.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !hospitalLocation) return;
            // Default config to center on Bangalore
            const defaultLocation = [
                12.9716,
                77.5946
            ];
            const centerObj = hospitalLocation ? [
                hospitalLocation.latitude,
                hospitalLocation.longitude
            ] : defaultLocation;
            // Check if map container is already initialized to fix hot-reloading errors
            const container = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DomUtil.get('hospital-city-map');
            if (container != null && container._leaflet_id !== null) {
                container._leaflet_id = null;
            }
            // Create map
            const newMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map('hospital-city-map', {
                zoomControl: false,
                attributionControl: false
            }).setView(centerObj, 14);
            // Dark style perfectly matching image 
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                maxZoom: 19
            }).addTo(newMap);
            // Hospital Marker with Pulse
            const hospIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                className: 'custom-hosp-marker',
                html: `<div style="background-color: #ef4444; border: 4px solid white; border-radius: 4px; padding: 4px; box-shadow: 0 0 15px rgba(239, 68, 68, 0.8), 0 0 30px rgba(239, 68, 68, 0.4); width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;"><div style="background: white; width: 100%; height: 25%; position: absolute;"></div><div style="background: white; width: 25%; height: 100%; position: absolute;"></div></div>`,
                iconSize: [
                    40,
                    40
                ],
                iconAnchor: [
                    20,
                    20
                ]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker(centerObj, {
                icon: hospIcon
            }).addTo(newMap);
            // Draw fake routes for map effect matching design
            const drawMockRoute = {
                "LiveCityMapInner.useEffect.drawMockRoute": (pathCoords, color)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].polyline(pathCoords, {
                        color,
                        weight: 4,
                        opacity: 0.9
                    }).addTo(newMap);
                    // Intersections
                    pathCoords.forEach({
                        "LiveCityMapInner.useEffect.drawMockRoute": (c)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].circleMarker(c, {
                                radius: 5,
                                color: '#9ca3af',
                                fillColor: '#1f2937',
                                fillOpacity: 1,
                                weight: 2
                            }).addTo(newMap);
                        }
                    }["LiveCityMapInner.useEffect.drawMockRoute"]);
                    // Ambo maker start
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].circleMarker(pathCoords[pathCoords.length - 1], {
                        radius: 8,
                        color: color,
                        fillColor: color,
                        fillOpacity: 1,
                        weight: 2
                    }).addTo(newMap);
                }
            }["LiveCityMapInner.useEffect.drawMockRoute"];
            // Red Route
            drawMockRoute([
                centerObj,
                [
                    centerObj[0] + 0.015,
                    centerObj[1] - 0.005
                ],
                [
                    centerObj[0] + 0.02,
                    centerObj[1] - 0.015
                ]
            ], '#ef4444');
            drawMockRoute([
                centerObj,
                [
                    centerObj[0] - 0.015,
                    centerObj[1] + 0.005
                ],
                [
                    centerObj[0] - 0.025,
                    centerObj[1] + 0.01
                ]
            ], '#ef4444');
            // Blue Route
            drawMockRoute([
                centerObj,
                [
                    centerObj[0] - 0.01,
                    centerObj[1] - 0.015
                ],
                [
                    centerObj[0] - 0.02,
                    centerObj[1] - 0.02
                ],
                [
                    centerObj[0] - 0.03,
                    centerObj[1] - 0.025
                ]
            ], '#3b82f6');
            drawMockRoute([
                centerObj,
                [
                    centerObj[0] + 0.01,
                    centerObj[1] + 0.02
                ],
                [
                    centerObj[0] + 0.02,
                    centerObj[1] + 0.03
                ]
            ], '#3b82f6');
            // Green Route
            drawMockRoute([
                centerObj,
                [
                    centerObj[0] - 0.015,
                    centerObj[1] + 0.015
                ],
                [
                    centerObj[0] - 0.02,
                    centerObj[1] + 0.02
                ]
            ], '#22c55e');
            drawMockRoute([
                centerObj,
                [
                    centerObj[0] + 0.005,
                    centerObj[1] - 0.01
                ],
                [
                    centerObj[0] + 0.015,
                    centerObj[1] - 0.02
                ]
            ], '#22c55e');
            // Yellow Route
            drawMockRoute([
                centerObj,
                [
                    centerObj[0] - 0.005,
                    centerObj[1] + 0.02
                ],
                [
                    centerObj[0] - 0.008,
                    centerObj[1] + 0.03
                ]
            ], '#eab308');
            drawMockRoute([
                centerObj,
                [
                    centerObj[0] + 0.02,
                    centerObj[1] - 0.025
                ]
            ], '#eab308');
            return ({
                "LiveCityMapInner.useEffect": ()=>{
                    newMap.remove();
                    if (container != null) {
                        container.innerHTML = '';
                    }
                }
            })["LiveCityMapInner.useEffect"];
        }
    }["LiveCityMapInner.useEffect"], [
        hospitalLocation
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className || "w-full h-full relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "hospital-city-map",
                className: "w-full h-full rounded-xl overflow-hidden border-2 border-[#2b3346]",
                style: {
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/components/hospital/LiveCityMapInner.tsx",
                lineNumber: 90,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 bg-[#1b2230]/90 border border-gray-600 px-4 py-2 rounded-lg backdrop-blur text-white font-bold text-xl tracking-wider shadow-xl z-[1000]",
                children: "ETA: 3 MIN"
            }, void 0, false, {
                fileName: "[project]/components/hospital/LiveCityMapInner.tsx",
                lineNumber: 91,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-16 bg-[#2a3045]/90 px-4 py-2 rounded text-white font-bold tracking-wider shadow-lg z-[1000] border border-gray-600 whitespace-nowrap hidden lg:block",
                children: "St. Mary's Hospital"
            }, void 0, false, {
                fileName: "[project]/components/hospital/LiveCityMapInner.tsx",
                lineNumber: 94,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hospital/LiveCityMapInner.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(LiveCityMapInner, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = LiveCityMapInner;
var _c;
__turbopack_context__.k.register(_c, "LiveCityMapInner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hospital/LiveCityMapInner.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/hospital/LiveCityMapInner.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_hospital_LiveCityMapInner_tsx_c83ddf60._.js.map