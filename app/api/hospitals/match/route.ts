import { NextRequest, NextResponse } from 'next/server';
import { mockHospitals } from '@/lib/mock-data';
import { matchHospitals } from '@/lib/engines/HospitalMatchingEngine';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { issueType, severity, patientLocation, topN = 3 } = body;

    if (!issueType || !severity || !patientLocation) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const matches = matchHospitals(
      mockHospitals,
      patientLocation,
      issueType,
      severity,
      undefined,
      topN
    );

    return NextResponse.json({ matches }, { status: 200 });
  } catch (error) {
    console.error('Error matching hospitals:', error);
    return NextResponse.json(
      { error: 'Failed to match hospitals' },
      { status: 500 }
    );
  }
}
