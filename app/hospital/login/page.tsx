'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Hospital, AlertTriangle, Activity } from 'lucide-react';

export default function HospitalLogin() {
    const router = useRouter();
    const [hospitals, setHospitals] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Filtered list of hospitals based on search query
    const filteredHospitals = hospitals.filter(hospital =>
        hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        // Fetch available hospitals for the dropdown
        fetch('/api/hospitals')
            .then((res) => res.json())
            .then((data) => {
                if (data.hospitals) {
                    setHospitals(data.hospitals);
                } else {
                    setError('Failed to load hospitals');
                }
            })
            .catch((err) => setError('Error connecting to server: ' + err.message))
            .finally(() => setIsLoading(false));
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const selectedHospital = hospitals.find(h => h.name === searchQuery);
        if (!selectedHospital) {
            setError('Please select a valid hospital from the list.');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        // Simulate auth delay
        setTimeout(() => {
            // Redirect to the dashboard with the hospital ID in query string
            router.push(`/hospital?id=${selectedHospital.id}`);
        }, 800);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-[#1b2230] to-black flex items-center justify-center p-4">
            <Card className="w-full max-w-md bg-[#22283a] border-[#30394f] shadow-2xl overflow-hidden relative">
                {/* Top Accent Line */}
                <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-green-500"></div>

                <div className="p-8">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 bg-[#1b2230] rounded-2xl flex items-center justify-center shadow-inner border border-[#30394f] mb-4">
                            <Hospital size={32} className="text-blue-400" />
                        </div>
                        <h1 className="text-2xl font-bold text-white tracking-widest uppercase">Select Facility</h1>
                        <p className="text-gray-400 text-sm mt-2 text-center">Authenticate to access emergency resource dashboard</p>
                    </div>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg mb-6 flex items-start gap-3 text-sm">
                            <AlertTriangle size={16} className="mt-0.5 shrink-0" />
                            <p>{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                                Authorized Medical Facility
                            </label>

                            {isLoading ? (
                                <div className="h-12 bg-[#1b2230] animate-pulse rounded-lg border border-[#30394f]"></div>
                            ) : (
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Type to search..."
                                        value={searchQuery}
                                        onChange={(e) => {
                                            setSearchQuery(e.target.value);
                                            setIsDropdownOpen(true);
                                            setError(null);
                                        }}
                                        onFocus={() => setIsDropdownOpen(true)}
                                        onBlur={() => {
                                            // Slight delay to allow click event on dropdown item to fire
                                            setTimeout(() => setIsDropdownOpen(false), 200);
                                        }}
                                        className="w-full h-12 bg-[#1b2230] border border-[#30394f] rounded-lg text-white px-4 focus:outline-none focus:border-blue-500 transition-colors"
                                        disabled={hospitals.length === 0}
                                        autoComplete="off"
                                    />

                                    {isDropdownOpen && (
                                        <div className="absolute z-50 w-full mt-2 bg-[#1b2230] border border-[#30394f] rounded-lg shadow-xl max-h-48 overflow-y-auto overflow-x-hidden">
                                            {filteredHospitals.length > 0 ? (
                                                filteredHospitals.map((hospital) => (
                                                    <div
                                                        key={hospital.id}
                                                        className="px-4 py-3 text-white hover:bg-blue-600 cursor-pointer transition-colors text-sm border-b border-[#30394f]/50 last:border-b-0"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSearchQuery(hospital.name);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                    >
                                                        {hospital.name}
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="px-4 py-3 text-gray-500 text-sm text-center">
                                                    No hospitals match your search.
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                                Authorization Code (Optional)
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full h-12 bg-[#1b2230] border border-[#30394f] rounded-lg text-white px-4 focus:outline-none focus:border-blue-500 transition-colors font-mono placeholder-gray-600"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading || isSubmitting || hospitals.length === 0}
                            className={`w-full h-14 rounded-lg font-bold text-white tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-lg
                ${isSubmitting || isLoading || hospitals.length === 0
                                    ? 'bg-[#30394f] text-gray-500 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-500 shadow-blue-900/50 border border-blue-500'}
              `}
                        >
                            {isSubmitting ? (
                                <>
                                    <Activity size={20} className="animate-spin" />
                                    AUTHENTICATING...
                                </>
                            ) : (
                                'ACCESS DASHBOARD'
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer info */}
                <div className="bg-[#1b2230] p-4 text-center border-t border-[#30394f]">
                    <p className="text-[10px] text-gray-500 tracking-widest uppercase font-mono">Prana Emergency Network v2.1</p>
                </div>
            </Card>
        </div>
    );
}
