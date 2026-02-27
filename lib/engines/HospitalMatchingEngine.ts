import { Hospital, Coordinates, IssueType, Severity, HospitalMatch } from '../types';

// Calculate distance between two coordinates using Haversine formula (in km)
export function calculateDistance(
  from: Coordinates,
  to: Coordinates
): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(to.latitude - from.latitude);
  const dLon = toRad(to.longitude - from.longitude);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(from.latitude)) *
      Math.cos(toRad(to.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

// Estimate ambulance arrival time in seconds (assuming average speed of 60 km/h)
export function estimateArrivalTime(distanceKm: number): number {
  const speedKmPerHour = 60;
  const timeHours = distanceKm / speedKmPerHour;
  return Math.round(timeHours * 3600);
}

// Score capability match (0-30 points)
function scoreCapability(hospital: Hospital, issueType: IssueType): number {
  if (hospital.capabilities.includes(issueType)) {
    return 30;
  }
  // Partial credit if hospital can handle any emergency
  return hospital.capabilities.length > 0 ? 15 : 0;
}

// Score bed availability (0-25 points)
function scoreBedAvailability(hospital: Hospital, severity: Severity): number {
  const totalBeds = hospital.capacity.icuBeds + hospital.capacity.generalBeds;
  // Simulate realistic utilization: hospitals with more beds tend to have more available
  const utilizationFactor = Math.max(0.2, 1 - (totalBeds / 150)); // Larger hospitals = lower utilization
  const points = Math.max(0, 25 * (1 - utilizationFactor));

  // Prioritize ICU for critical cases
  if (severity === 'critical' && hospital.capacity.icuBeds > 0) {
    return points + 5;
  }
  return points;
}

// Score doctor availability (0-20 points)
function scoreDoctorAvailability(hospital: Hospital): number {
  const doctorCapacity = Math.min(1, hospital.capacity.doctors / 15);
  return 20 * doctorCapacity;
}

// Score distance (0-15 points, closer is better)
function scoreDistance(distanceKm: number): number {
  // 0 km = 15 points, 20 km = 0 points
  return Math.max(0, 15 * (1 - distanceKm / 20));
}

// Score affordability (0-10 points)
function scoreAffordability(
  hospital: Hospital,
  userAffordability?: string
): number {
  if (!userAffordability) {
    return 5; // Neutral score if no preference
  }

  if (hospital.affordability === userAffordability) {
    return 10;
  }

  if (
    (userAffordability === 'budget' && hospital.affordability === 'standard') ||
    (userAffordability === 'standard' &&
      (hospital.affordability === 'budget' || hospital.affordability === 'premium'))
  ) {
    return 5;
  }

  if (userAffordability === 'budget' && hospital.affordability === 'premium') {
    return 0;
  }

  return 5;
}

// Main matching engine
export function matchHospital(
  hospitals: Hospital[],
  patientLocation: Coordinates,
  issueType: IssueType,
  severity: Severity,
  userAffordability?: string
): HospitalMatch {
  const matches = hospitals.map((hospital) => {
    const distance = calculateDistance(patientLocation, hospital.location);
    const arrivalTime = estimateArrivalTime(distance);

    const capabilityScore = scoreCapability(hospital, issueType);
    const bedScore = scoreBedAvailability(hospital, severity);
    const doctorScore = scoreDoctorAvailability(hospital);
    const distanceScore = scoreDistance(distance);
    const affordabilityScore = scoreAffordability(
      hospital,
      userAffordability
    );

    // Total score (0-100)
    const totalScore =
      capabilityScore +
      bedScore +
      doctorScore +
      distanceScore +
      affordabilityScore;

    let reason = 'Selected based on ';
    const reasons = [];

    if (capabilityScore > 20) reasons.push('capability match');
    if (bedScore > 15) reasons.push('bed availability');
    if (doctorScore > 12) reasons.push('doctor availability');
    if (distanceScore > 12) reasons.push('proximity');
    if (affordabilityScore > 7) reasons.push('affordability');

    reason += reasons.join(', ') || 'overall suitability';

    return {
      hospital,
      score: totalScore,
      distance,
      estimatedArrivalTime: arrivalTime,
      reason,
    };
  });

  // Sort by score and return the best match
  const bestMatch = matches.sort((a, b) => b.score - a.score)[0];
  return bestMatch;
}

// Match multiple hospitals for comparison
export function matchHospitals(
  hospitals: Hospital[],
  patientLocation: Coordinates,
  issueType: IssueType,
  severity: Severity,
  userAffordability?: string,
  topN: number = 3
): HospitalMatch[] {
  const matches = hospitals.map((hospital) => {
    const distance = calculateDistance(patientLocation, hospital.location);
    const arrivalTime = estimateArrivalTime(distance);

    const capabilityScore = scoreCapability(hospital, issueType);
    const bedScore = scoreBedAvailability(hospital, severity);
    const doctorScore = scoreDoctorAvailability(hospital);
    const distanceScore = scoreDistance(distance);
    const affordabilityScore = scoreAffordability(
      hospital,
      userAffordability
    );

    const totalScore =
      capabilityScore +
      bedScore +
      doctorScore +
      distanceScore +
      affordabilityScore;

    let reason = 'Selected based on ';
    const reasons = [];

    if (capabilityScore > 20) reasons.push('capability match');
    if (bedScore > 15) reasons.push('bed availability');
    if (doctorScore > 12) reasons.push('doctor availability');
    if (distanceScore > 12) reasons.push('proximity');
    if (affordabilityScore > 7) reasons.push('affordability');

    reason += reasons.join(', ') || 'overall suitability';

    return {
      hospital,
      score: totalScore,
      distance,
      estimatedArrivalTime: arrivalTime,
      reason,
    };
  });

  return matches
    .sort((a, b) => b.score - a.score)
    .slice(0, topN);
}
