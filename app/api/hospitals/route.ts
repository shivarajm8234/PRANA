import { NextResponse } from 'next/server';
import { mockHospitals } from '@/lib/mock-data';

export async function GET() {
  try {
    return NextResponse.json({ hospitals: mockHospitals }, { status: 200 });
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    return NextResponse.json(
      { error: 'Failed to fetch hospitals' },
      { status: 500 }
    );
  }
}
