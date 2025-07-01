import React from 'react';
import { Link } from 'react-router-dom';
import { mockAppointments, mockDoctors } from '../api/mock';
import AppointmentCard from '../components/AppointmentCard';

export default function Dashboard() {
  const upcoming = mockAppointments.filter(a => a.status === 'upcoming');
  return (
    <div className="pt-24 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome, Patient!</h1>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Link to="/search" className="bg-blue-100 text-blue-700 rounded p-4 text-center font-semibold hover:bg-blue-200">Book Appointment</Link>
        <Link to="/appointments" className="bg-green-100 text-green-700 rounded p-4 text-center font-semibold hover:bg-green-200">View Appointments</Link>
        <Link to="/profile" className="bg-purple-100 text-purple-700 rounded p-4 text-center font-semibold hover:bg-purple-200">Profile</Link>
        <Link to="/notifications" className="bg-yellow-100 text-yellow-700 rounded p-4 text-center font-semibold hover:bg-yellow-200">Notifications</Link>
      </div>
      <h2 className="text-xl font-semibold mb-2">Upcoming Appointments</h2>
      <div className="space-y-3">
        {upcoming.length === 0 && <div className="text-gray-500">No upcoming appointments.</div>}
        {upcoming.map(a => (
          <AppointmentCard key={a.id} appointment={a} doctor={mockDoctors[0]} />
        ))}
      </div>
    </div>
  );
} 