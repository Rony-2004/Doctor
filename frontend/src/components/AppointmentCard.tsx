import React from 'react';
import { Appointment, Doctor } from '../types';
import { motion } from 'framer-motion';

interface Props {
  appointment: Appointment;
  doctor: Doctor;
  onReschedule?: () => void;
  onCancel?: () => void;
}

export default function AppointmentCard({ appointment, doctor, onReschedule, onCancel }: Props) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-3 border border-green-100 hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(34,197,94,0.10)' }}
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl font-bold text-green-700 shadow-md">
          {doctor.name[0]}
        </div>
        <div>
          <div className="font-semibold text-lg text-green-800">{doctor.name}</div>
          <div className="text-xs text-gray-500">{appointment.type === 'video' ? 'Video' : 'In-person'} | {appointment.status}</div>
        </div>
      </div>
      <div className="text-base text-gray-700 font-medium">{appointment.date} at {appointment.time}</div>
      <div className="flex gap-3 mt-2">
        <motion.button
          onClick={onReschedule}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold shadow hover:bg-blue-600 active:scale-95 transition-all duration-200"
          whileHover={{ scale: 1.07 }}
        >
          Reschedule
        </motion.button>
        <motion.button
          onClick={onCancel}
          className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-semibold shadow hover:bg-red-600 active:scale-95 transition-all duration-200"
          whileHover={{ scale: 1.07 }}
        >
          Cancel
        </motion.button>
      </div>
    </motion.div>
  );
} 