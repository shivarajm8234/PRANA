(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/admin/AmbulanceTracker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AmbulanceTracker",
    ()=>AmbulanceTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AmbulanceTracker({ ambulances, incidents, className }) {
    _s();
    const [map, setMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [markers, setMarkers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AmbulanceTracker.useEffect": ()=>{
            const mapContainer = document.getElementById('admin-ambulance-map');
            if (!mapContainer) return;
            if (mapContainer._leaflet_id) {
                mapContainer._leaflet_id = null;
            }
            const newMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map('admin-ambulance-map', {
                zoomControl: false,
                attributionControl: false
            }).setView([
                12.9716,
                77.5946
            ], 12);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                maxZoom: 19
            }).addTo(newMap);
            setMap(newMap);
            return ({
                "AmbulanceTracker.useEffect": ()=>{
                    newMap.remove();
                }
            })["AmbulanceTracker.useEffect"];
        }
    }["AmbulanceTracker.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AmbulanceTracker.useEffect": ()=>{
            if (!map) return;
            const newMarkers = new Map();
            // Mock heatmap data to match the design (Red, Yellow, Green points in city center)
            const drawHeatmapMocks = {
                "AmbulanceTracker.useEffect.drawHeatmapMocks": ()=>{
                    const center = [
                        12.9716,
                        77.5946
                    ];
                    for(let i = 0; i < 300; i++){
                        const lat = center[0] + (Math.random() - 0.5) * 0.08;
                        const lng = center[1] + (Math.random() - 0.5) * 0.08;
                        const dist = Math.sqrt(Math.pow(lat - center[0], 2) + Math.pow(lng - center[1], 2));
                        let color = '#22c55e'; // Green
                        if (dist < 0.02) color = '#ef4444'; // Red
                        else if (dist < 0.04) color = '#eab308'; // Yellow
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].circle([
                            lat,
                            lng
                        ], {
                            radius: 150,
                            color: 'none',
                            fillColor: color,
                            fillOpacity: 0.4
                        }).addTo(map);
                    }
                }
            }["AmbulanceTracker.useEffect.drawHeatmapMocks"];
            drawHeatmapMocks();
            ambulances.forEach({
                "AmbulanceTracker.useEffect": (ambulance)=>{
                    const incident = incidents.find({
                        "AmbulanceTracker.useEffect.incident": (inc)=>inc.ambulanceId === ambulance.id && inc.status !== 'completed'
                    }["AmbulanceTracker.useEffect.incident"]);
                    const hasActiveIncident = !!incident;
                    const icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].icon({
                        iconUrl: hasActiveIncident ? 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik05IDIyQzkuNTUyMjggMjIgMTAgMjEuNTUyMyAxMCAyMUMxMCAyMC40NDc3IDkuNTUyMjggMjAgOSAyMEM4LjQ0NzcyIDIwIDggMjAuNDQ3NyA4IDIxQzggMjEuNTUyMyA4LjQ0NzcyIDIyIDkgMjJaIiBmaWxsPSIjZGMyNjI2Ii8+PHBhdGggZD0iTTE2IDIyQzE2LjU1MjMgMjIgMTcgMjEuNTUyMyAxNyAyMUMxNyAyMC40NDc3IDE2LjU1MjMgMjAgMTYgMjBDMTUuNDQ3NyAyMCAxNSAyMC40NDc3IDE1IDIxQzE1IDIxLjU1MjMgMTUuNDQ3NyAyMiAxNiAyMloiIGZpbGw9IiNkYzI2MjYiLz48cGF0aCBkPSJNNSA5SDE2VjE5SDVWOVoiIHN0cm9rZT0iI2RjMjYyNiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTIgOEw1IDE0SDE5TDIyIDhIMjFWNkg3VjhIMnoiIHN0cm9rZT0iI2RjMjYyNiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+' : 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik05IDIyQzkuNTUyMjggMjIgMTAgMjEuNTUyMyAxMCAyMUMxMCAyMC40NDc3IDkuNTUyMjggMjAgOSAyMEM4LjQ0NzcyIDIwIDggMjAuNDQ3NyA4IDIxQzggMjEuNTUyMyA4LjQ0NzcyIDIyIDkgMjJaIiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTE2IDIyQzE2LjU1MjMgMjIgMTcgMjEuNTUyMyAxNyAyMUMxNyAyMC40NDc3IDE2LjU1MjMgMjAgMTYgMjBDMTUuNDQ3NyAyMCAxNSAyMC40NDc3IDE1IDIxQzE1IDIxLjU1MjMgMTUuNDQ3NyAyMiAxNiAyMloiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNNSA5SDE2VjE5SDVWOVoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTIgOEw1IDE0SDE5TDIyIDhIMjFWNkg3VjhIMnoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+',
                        iconSize: [
                            32,
                            32
                        ],
                        iconAnchor: [
                            16,
                            32
                        ],
                        popupAnchor: [
                            0,
                            -32
                        ]
                    });
                    const marker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                        ambulance.location.latitude,
                        ambulance.location.longitude
                    ], {
                        icon
                    }).addTo(map).bindPopup(`<strong>${ambulance.name}</strong><br/>${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AMBULANCE_STATUSES"][ambulance.status]}`);
                    newMarkers.set(ambulance.id, marker);
                }
            }["AmbulanceTracker.useEffect"]);
            setMarkers(newMarkers);
        }
    }["AmbulanceTracker.useEffect"], [
        map,
        ambulances,
        incidents
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className || "w-full h-96 rounded-lg overflow-hidden border-2 border-gray-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "admin-ambulance-map",
            className: "w-full h-full bg-[#11131a]"
        }, void 0, false, {
            fileName: "[project]/components/admin/AmbulanceTracker.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/admin/AmbulanceTracker.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(AmbulanceTracker, "XJSWzr2tAJyp6TUFxZ5aJODpfr0=");
_c = AmbulanceTracker;
var _c;
__turbopack_context__.k.register(_c, "AmbulanceTracker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/AmbulanceTracker.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/admin/AmbulanceTracker.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_admin_AmbulanceTracker_tsx_5c4e2c03._.js.map