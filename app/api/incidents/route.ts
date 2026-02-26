import { NextRequest, NextResponse } from 'next/server';
import { mockHospitals, mockAmbulances } from '@/lib/mock-data';
import { matchHospital } from '@/lib/engines/HospitalMatchingEngine';
import { createIncident, generateIncidentId, getAllIncidents } from '@/lib/utils/incident-utils';
import { Incident } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { ambulanceId, issueType, severity, patientLocation } = body;

    if (!ambulanceId || !issueType || !severity || !patientLocation) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate incident ID
    const incidentId = generateIncidentId();

    // Find best matching hospital
    const bestMatch = matchHospital(
      mockHospitals,
      patientLocation,
      issueType,
      severity
    );

    // Create incident
    const incident: Incident = {
      id: incidentId,
      ambulanceId,
      hospitalId: bestMatch.hospital.id,
      issueType,
      severity,
      patientLocation,
      createdAt: Date.now(),
      allocatedAt: Date.now(),
      status: 'allocated',
      estimatedArrivalTime: bestMatch.estimatedArrivalTime,
    };

    createIncident(incident);

    return NextResponse.json(
      {
        incident,
        hospital: bestMatch.hospital,
        estimatedArrivalTime: bestMatch.estimatedArrivalTime,
        distance: bestMatch.distance,
        reason: bestMatch.reason,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating incident:', error);
    return NextResponse.json(
      { error: 'Failed to create incident' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const incidents = getAllIncidents();
    return NextResponse.json({ incidents }, { status: 200 });
  } catch (error) {
    console.error('Error fetching incidents:', error);
    return NextResponse.json(
      { error: 'Failed to fetch incidents' },
      { status: 500 }
    );
  }
}
