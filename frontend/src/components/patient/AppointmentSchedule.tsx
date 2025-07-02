import React from 'react';

export const AppointmentSchedule: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Appointment Schedule</h2>
      <div className="text-gray-500">No appointments scheduled.</div>
    </div>
  );
};
