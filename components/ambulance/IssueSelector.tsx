'use client';

import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ISSUE_TYPES, SEVERITY_LEVELS } from '@/lib/mock-data';
import { IssueType, Severity } from '@/lib/types';

interface IssueSelectorProps {
  selectedIssue: IssueType | null;
  selectedSeverity: Severity | null;
  onIssueChange: (issue: IssueType) => void;
  onSeverityChange: (severity: Severity) => void;
  disabled?: boolean;
}

export function IssueSelector({
  selectedIssue,
  selectedSeverity,
  onIssueChange,
  onSeverityChange,
  disabled = false,
}: IssueSelectorProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Emergency Type
        </label>
        <Select
          value={selectedIssue || ''}
          onValueChange={(value) => onIssueChange(value as IssueType)}
          disabled={disabled}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select emergency type" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(ISSUE_TYPES).map(([key, label]) => (
              <SelectItem key={key} value={key}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Severity Level
        </label>
        <Select
          value={selectedSeverity || ''}
          onValueChange={(value) => onSeverityChange(value as Severity)}
          disabled={disabled}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select severity" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(SEVERITY_LEVELS).map(([key, label]) => (
              <SelectItem key={key} value={key}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
