import React, { useState, useEffect } from 'react';
import { Header } from '../components/patient/Header';
import { PatientProfile } from '../components/patient/PatientProfile';
import { VitalSigns } from '../components/patient/VitalSigns';
import { MedicationList } from '../components/patient/MedicationList';
import { AppointmentSchedule } from '../components/patient/AppointmentSchedule';
import { HealthMetrics } from '../components/patient/HealthMetrics';
import { RecentActivity } from '../components/patient/RecentActivity';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const PatientDashboard = () => {
  const { user } = useUser();
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [form, setForm] = useState(profile);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.fullName || '',
        email: user.primaryEmailAddress?.emailAddress || '',
        phone: user.phoneNumbers?.[0]?.phoneNumber || '',
      });
      setForm({
        name: user.fullName || '',
        email: user.primaryEmailAddress?.emailAddress || '',
        phone: user.phoneNumbers?.[0]?.phoneNumber || '',
      });
    }
  }, [user]);

  const handleProfileClick = () => {
    setForm(profile);
    setEditing(true);
  };

  const handleProfileSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProfile(form);
    setEditing(false);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLogout={handleLogout} onProfileClick={handleProfileClick} />
      <main className="px-6 py-8 max-w-7xl mx-auto">
        <div className="space-y-8">
          <PatientProfile profile={profile} />
          <VitalSigns />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <AppointmentSchedule />
              <MedicationList />
            </div>
            <div className="space-y-8">
              <HealthMetrics />
              <RecentActivity />
            </div>
          </div>
        </div>
      </main>
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button onClick={() => setEditing(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700" title="Close">
              <X className="w-6 h-6" />
            </button>
            <form onSubmit={handleProfileSave} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="mt-1 block w-full border rounded px-3 py-2"
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  name="email"
                  value={form.email}
                  disabled
                  className="mt-1 block w-full border rounded px-3 py-2 bg-gray-100"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="mt-1 block w-full border rounded px-3 py-2"
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientDashboard; 