import React from 'react';
import { Doctor } from '../types';
import { Star } from 'lucide-react';

interface Props {
  doctor: Doctor;
  onViewProfile?: () => void;
}

export default function DoctorCard({ doctor, onViewProfile }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 border border-blue-100">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-700">
          {doctor.name[0]}
        </div>
        <div>
          <div className="font-semibold text-lg text-blue-800">{doctor.name}</div>
          <div className="text-sm text-gray-500">{doctor.specialty}</div>
        </div>
      </div>
      <div className="flex items-center gap-1 text-yellow-500 text-sm">
        <Star className="w-4 h-4" /> {doctor.rating}
      </div>
      <div className="text-xs text-gray-400">Available: {doctor.availability.join(', ')}</div>
      <button onClick={onViewProfile} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">View Profile</button>
    </div>
  );
} 