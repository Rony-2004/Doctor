import React from 'react';
import { Appointment, Doctor } from '../types';

interface Props {
  appointment: Appointment;
  doctor: Doctor;
  onReschedule?: () => void;
  onCancel?: () => void;
}

export default function AppointmentCard({ appointment, doctor, onReschedule, onCancel }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 border border-green-100">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-lg font-bold text-green-700">
          {doctor.name[0]}
        </div>
        <div>
          <div className="font-semibold text-base text-green-800">{doctor.name}</div>
          <div className="text-xs text-gray-500">{appointment.type === 'video' ? 'Video' : 'In-person'} | {appointment.status}</div>
        </div>
      </div>
      <div className="text-sm text-gray-700">{appointment.date} at {appointment.time}</div>
      <div className="flex gap-2 mt-2">
        <button onClick={onReschedule} className="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600">Reschedule</button>
        <button onClick={onCancel} className="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600">Cancel</button>
      </div>
    </div>
  );
} 