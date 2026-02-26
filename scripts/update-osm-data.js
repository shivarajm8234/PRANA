const fs = require('fs');

async function fetchOSMData() {
  const overpassUrl = 'https://lz4.overpass-api.de/api/interpreter';
  
  // 1. Fetch Hospitals
  console.log('Fetching hospitals in Bengaluru (bounding box)...');
  const hospitalsQuery = '[out:json][timeout:90];(node["amenity"="hospital"](12.8340,77.4601,13.1436,77.7840);way["amenity"="hospital"](12.8340,77.4601,13.1436,77.7840););out center;';
  
  const hospitalsResponse = await fetch(overpassUrl, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'PRANA-Emergency-Platform/1.0'
    },
    body: 'data=' + encodeURIComponent(hospitalsQuery),
  });
  
  if (!hospitalsResponse.ok) {
    throw new Error(`Failed to fetch hospitals: ${hospitalsResponse.statusText}`);
  }
  
  const hospitalsData = await hospitalsResponse.json();
  const hospitals = hospitalsData.elements
    .filter(el => el.tags && el.tags.name && !el.tags.name.toLowerCase().includes("clinic"))
    .map((el, index) => {
      let lat = el.lat;
      let lon = el.lon;

      if (el.type !== 'node' && el.center) {
        lat = el.center.lat;
        lon = el.center.lon;
      }

      const icuBeds = Math.floor(Math.random() * 20) + 5;
      const generalBeds = Math.floor(Math.random() * 100) + 20;
      const doctors = Math.floor(Math.random() * 30) + 10;
      
      const capabilitiesMap = ['trauma', 'cardiac', 'respiratory', 'stroke', 'burn', 'poisoning', 'other'];
      const numCaps = Math.floor(Math.random() * 4) + 1;
      const capabilities = [];
      
      for (let i = 0; i < numCaps; i++) {
         const cap = capabilitiesMap[Math.floor(Math.random() * capabilitiesMap.length)];
         if (!capabilities.includes(cap)) capabilities.push(cap);
      }
      if (capabilities.length === 0) capabilities.push('other');

      const roll = Math.random();
      const affordability = roll > 0.7 ? 'premium' : (roll > 0.4 ? 'standard' : 'budget');

      return {
        id: `hosp-${index + 1}`,
        name: el.tags.name,
        location: { latitude: lat, longitude: lon },
        capacity: { icuBeds, generalBeds, doctors },
        capabilities,
        affordability
      };
    });
  
  console.log(`Found ${hospitals.length} hospitals.`);

  // 2. Fetch Traffic Signals
  console.log('Fetching traffic signals in Bengaluru (administrative boundary)...');
  const signalsQuery = '[out:json][timeout:90]; area["name"="Bengaluru"]["boundary"="administrative"]->.a; node["highway"="traffic_signals"](area.a); out;';
  
  const signalsResponse = await fetch(overpassUrl, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'PRANA-Emergency-Platform/1.0'
    },
    body: 'data=' + encodeURIComponent(signalsQuery),
  });
  
  if (!signalsResponse.ok) {
    throw new Error(`Failed to fetch traffic signals: ${signalsResponse.statusText}`);
  }
  
  const signalsData = await signalsResponse.json();
  const trafficSignals = signalsData.elements
    .filter(el => el.lat && el.lon)
    .map((el, index) => {
      const rand = Math.random();
      let status = 'green';
      if (rand > 0.6) status = 'red';
      else if (rand > 0.5) status = 'yellow';

      const name = el.tags && (el.tags.name || el.tags['name:en'] || el.tags.description);

      return {
        id: `ts-${el.id || index + 1}`,
        name: name || `Signal ${index + 1}`,
        location: { latitude: el.lat, longitude: el.lon },
        status: status
      };
    });

  console.log(`Found ${trafficSignals.length} traffic signals.`);

  // 3. Static mocked data chunks that need to be preserved
  const mockAmbulances = `// Mock ambulances (Bangalore locations)
export const mockAmbulances: Ambulance[] = [
  {
    id: 'amb-001',
    name: 'Unit 101 (Central BLR)',
    location: { latitude: 12.9716, longitude: 77.5946 },
    status: 'idle',
    lastUpdate: Date.now(),
  },
  {
    id: 'amb-002',
    name: 'Unit 102 (Koramangala)',
    location: { latitude: 12.9279, longitude: 77.6271 },
    status: 'idle',
    lastUpdate: Date.now(),
  },
  {
    id: 'amb-003',
    name: 'Unit 103 (Indiranagar)',
    location: { latitude: 12.9784, longitude: 77.6408 },
    status: 'idle',
    lastUpdate: Date.now(),
  },
  {
    id: 'amb-004',
    name: 'Unit 104 (Whitefield)',
    location: { latitude: 12.9698, longitude: 77.7499 },
    status: 'idle',
    lastUpdate: Date.now(),
  },
  {
    id: 'amb-005',
    name: 'Unit 105 (Jayanagar)',
    location: { latitude: 12.9299, longitude: 77.5826 },
    status: 'idle',
    lastUpdate: Date.now(),
  },
];`;

  const constantsStr = `// Mock incidents
export const mockIncidents: Incident[] = [];

export const ISSUE_TYPES = {
  trauma: 'Trauma/Accident',
  cardiac: 'Cardiac Emergency',
  respiratory: 'Respiratory Distress',
  stroke: 'Stroke',
  burn: 'Burn Injury',
  poisoning: 'Poisoning/Overdose',
  other: 'Other Emergency',
};

export const SEVERITY_LEVELS = {
  critical: 'Critical - Immediate',
  high: 'High - Urgent',
  medium: 'Medium - Soon',
  low: 'Low - Stable',
};

export const AMBULANCE_STATUSES = {
  idle: 'Available',
  responding: 'Responding to Scene',
  enroute: 'Enroute to Hospital',
  onsite: 'On Scene',
  transporting: 'Transporting Patient',
};

export const INCIDENT_STATUSES = {
  created: 'Emergency Reported',
  allocated: 'Hospital Allocated',
  acknowledged: 'Hospital Acknowledged',
  arrived: 'Ambulance Arrived',
  completed: 'Incident Completed',
};`;

  // 4. Update the mock-data.ts file
  console.log('Writing to lib/mock-data.ts...');
  
  const fileContent = `import { Hospital, Ambulance, Incident, TrafficSignal } from './types';

// Mock hospitals from OSM (Bangalore)
export const mockHospitals: Hospital[] = ${JSON.stringify(hospitals, null, 2)};

${mockAmbulances}

// Mock traffic signals from OSM (Bangalore)
export const mockTrafficSignals: TrafficSignal[] = ${JSON.stringify(trafficSignals, null, 2)};

${constantsStr}
`;

  // Format slightly to make it look nice (e.g. remove quotes around objects keys)
  const formattedContent = fileContent.replace(/"([^"]+)":/g, '$1:');

  fs.writeFileSync('lib/mock-data.ts', formattedContent);
  console.log('Successfully updated lib/mock-data.ts with all OSM data! Done.');
}

fetchOSMData().catch(console.error);
