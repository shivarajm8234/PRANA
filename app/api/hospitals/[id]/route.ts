import { NextRequest, NextResponse } from 'next/server';
import { mockHospitals } from '@/lib/mock-data';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const hospital = mockHospitals.find((h) => h.id === id);

        if (!hospital) {
            return NextResponse.json(
                { error: 'Hospital not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ hospital }, { status: 200 });
    } catch (error) {
        console.error('Error fetching hospital:', error);
        return NextResponse.json(
            { error: 'Failed to fetch hospital' },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { icuBeds, generalBeds, doctors } = body;

        // Find the hospital in the mock data array
        const hospitalIndex = mockHospitals.findIndex((h) => h.id === id);

        if (hospitalIndex === -1) {
            return NextResponse.json(
                { error: 'Hospital not found' },
                { status: 404 }
            );
        }

        // Update the hospital in the in-memory array
        const hospitalToUpdate = mockHospitals[hospitalIndex];

        if (icuBeds !== undefined) {
            hospitalToUpdate.capacity.icuBeds = parseInt(icuBeds, 10);
        }
        if (generalBeds !== undefined) {
            hospitalToUpdate.capacity.generalBeds = parseInt(generalBeds, 10);
        }
        if (doctors !== undefined) {
            hospitalToUpdate.capacity.doctors = parseInt(doctors, 10);
        }

        return NextResponse.json(
            { success: true, hospital: hospitalToUpdate },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error updating hospital:', error);
        return NextResponse.json(
            { error: 'Failed to update hospital capacity' },
            { status: 500 }
        );
    }
}
