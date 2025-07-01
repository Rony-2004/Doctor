import React from 'react';
import { mockPatients } from '../api/mock';
import ProfileForm from '../components/ProfileForm';

export default function Profile() {
  return (
    <div className="pt-24 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <ProfileForm patient={mockPatients[0]} onSave={() => alert('Profile saved!')} />
    </div>
  );
} 