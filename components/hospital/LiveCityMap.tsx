'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Hospital, Coordinates } from '@/lib/types';

interface LiveCityMapProps {
  hospitalLocation: Coordinates | null;
  className?: string;
}

import { LiveCityMapInnerProps } from '@/components/hospital/LiveCityMapInner';

const LiveCityMap = dynamic<LiveCityMapInnerProps>(
  () => import('@/components/hospital/LiveCityMapInner').then((mod) => mod.LiveCityMapInner),
  { ssr: false, loading: () => <div className="w-full h-full bg-[#11131a] animate-pulse rounded-lg flex items-center justify-center text-gray-500 font-bold tracking-wider relative border-2 border-slate-700 shadow-2xl">MAP LOADING...<div className="absolute top-4 right-4 text-white text-sm bg-black/60 px-3 py-1 rounded">ETA: 3 MIN</div></div> }
);

export { LiveCityMap };
