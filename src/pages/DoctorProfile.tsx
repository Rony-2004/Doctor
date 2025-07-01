import React from 'react';
import { mockDoctors } from '../api/mock';
import { useParams } from 'react-router-dom';

export default function DoctorProfile() {
  const { id } = useParams();
  const doctor = mockDoctors.find(d => d.id === id) || mockDoctors[0];
  return (
    <div className="pt-24 max-w-2xl mx-auto bg-white rounded-xl shadow p-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl font-bold text-blue-700">{doctor.name[0]}</div>
        <div>
          <div className="text-2xl font-bold text-blue-800">{doctor.name}</div>
          <div className="text-gray-500">{doctor.specialty}</div>
          <div className="text-yellow-500 flex items-center gap-1">Rating: {doctor.rating}</div>
        </div>
      </div>
      <div className="mb-2">Qualifications: {doctor.qualifications || 'MBBS, MD'}</div>
      <div className="mb-2">Available: {doctor.availability.join(', ')}</div>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Book Appointment</button>
    </div>
  );
} 