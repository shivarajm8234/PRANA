import { Incident } from '../types';

// Store incidents in memory (in production, use a database)
let incidents: Map<string, Incident> = new Map();

export function generateIncidentId(): string {
  return `inc-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function createIncident(incident: Incident): Incident {
  incidents.set(incident.id, incident);
  return incident;
}

export function getIncident(id: string): Incident | undefined {
  return incidents.get(id);
}

export function updateIncident(id: string, updates: Partial<Incident>): Incident | undefined {
  const incident = incidents.get(id);
  if (!incident) return undefined;

  const updated = { ...incident, ...updates };
  incidents.set(id, updated);
  return updated;
}

export function getAllIncidents(): Incident[] {
  return Array.from(incidents.values());
}

export function getIncidentsByStatus(status: string): Incident[] {
  return Array.from(incidents.values()).filter((inc) => inc.status === status);
}

export function getIncidentsByAmbulance(ambulanceId: string): Incident[] {
  return Array.from(incidents.values()).filter((inc) => inc.ambulanceId === ambulanceId);
}

export function getIncidentsByHospital(hospitalId: string): Incident[] {
  return Array.from(incidents.values()).filter((inc) => inc.hospitalId === hospitalId);
}

export function formatETA(seconds: number): string {
  if (seconds < 60) return 'less than 1 min';
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
}
