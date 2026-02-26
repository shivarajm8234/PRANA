(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ambulance/LiveMapView.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_leaflet_dist_leaflet-src_8608e1e4.js",
  "static/chunks/components_ambulance_LiveMapView_tsx_a4d96685._.js",
  {
    "path": "static/chunks/node_modules_leaflet_dist_leaflet_ef5f0413.css",
    "included": [
      "[project]/node_modules/leaflet/dist/leaflet.css [app-client] (css)"
    ]
  },
  "static/chunks/components_ambulance_LiveMapView_tsx_cf2568a6._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/ambulance/LiveMapView.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);