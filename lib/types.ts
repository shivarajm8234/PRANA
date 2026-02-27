// Ambulance types
export interface Coordinates {
  latitude: number;
  longitude: number;
}

export type IssueType = 'trauma' | 'cardiac' | 'respiratory' | 'stroke' | 'burn' | 'poisoning' | 'other';
export type Severity = 'critical' | 'high' | 'medium' | 'low';
export type AmbulanceStatus = 'idle' | 'responding' | 'enroute' | 'onsite' | 'transporting';

export interface Ambulance {
  id: string;
  name: string;
  location: Coordinates;
  status: AmbulanceStatus;
  currentIncidentId?: string;
  lastUpdate: number;
}

// Hospital types
export interface HospitalCapacity {
  icuBeds: number;
  generalBeds: number;
  doctors: number;
}

export interface Hospital {
  id: string;
  name: string;
  location: Coordinates;
  capacity: HospitalCapacity;
  capabilities: IssueType[];
  affordability: 'budget' | 'standard' | 'premium';
  accessCode?: string;
}

// Incident types
export type IncidentStatus = 'created' | 'allocated' | 'acknowledged' | 'arrived' | 'completed';

export interface Incident {
  id: string;
  ambulanceId: string;
  hospitalId?: string;
  issueType: IssueType;
  severity: Severity;
  patientLocation: Coordinates;
  createdAt: number;
  allocatedAt?: number;
  arrivedAt?: number;
  completedAt?: number;
  status: IncidentStatus;
  estimatedArrivalTime?: number; // ETA in seconds
}

// Hospital matching result
export interface HospitalMatch {
  hospital: Hospital;
  score: number;
  distance: number; // in km
  estimatedArrivalTime: number; // in seconds
  reason: string;
}

// Traffic Signal
export interface TrafficSignal {
  id: string;
  name?: string;
  location: Coordinates;
  status: 'green' | 'red' | 'yellow';
}
