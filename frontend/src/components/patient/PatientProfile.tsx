import React from 'react';
import { User, Phone, Mail } from 'lucide-react';

export interface PatientProfileProps {
  profile: {
    name: string;
    email: string;
    phone?: string;
  };
}

export const PatientProfile: React.FC<PatientProfileProps> = ({ profile }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative">
      <div className="flex items-center space-x-6">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
          {profile.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-blue-500" />
            <span className="text-xl font-bold text-gray-900">{profile.name}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Mail className="w-5 h-5 text-blue-400" /> {profile.email}
          </div>
          <div className="flex items-center gap-2 text-gray-400 italic">
            <Phone className="w-5 h-5 text-blue-200" /> {profile.phone ? profile.phone : 'No phone'}
          </div>
        </div>
      </div>
    </div>
  );
};