'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

interface EmergencyButtonProps {
  onClick: () => void;
  isActive: boolean;
  disabled?: boolean;
}

export function EmergencyButton({
  onClick,
  isActive,
  disabled = false,
}: EmergencyButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full h-32 rounded-2xl font-bold text-white text-2xl
        flex items-center justify-center gap-4
        transition-all duration-200 shadow-lg
        ${
          isActive
            ? 'bg-red-600 hover:bg-red-700 active:scale-95'
            : 'bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 active:scale-95'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        disabled:cursor-not-allowed
      `}
    >
      <AlertTriangle size={40} className="animate-pulse" />
      <span>EMERGENCY</span>
    </button>
  );
}
