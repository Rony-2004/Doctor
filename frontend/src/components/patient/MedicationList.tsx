import React from 'react';
import { Pill, Clock, AlertCircle } from 'lucide-react';

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  nextDose: string;
  status: 'current' | 'missed' | 'upcoming';
}

const medications: Medication[] = [
  {
    name: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    nextDose: '8:00 AM Tomorrow',
    status: 'current'
  },
  {
    name: 'Metformin',
    dosage: '500mg',
    frequency: 'Twice daily',
    nextDose: '6:00 PM Today',
    status: 'upcoming'
  },
  {
    name: 'Vitamin D3',
    dosage: '1000 IU',
    frequency: 'Once daily',
    nextDose: '9:00 AM Yesterday',
    status: 'missed'
  },
  {
    name: 'Omega-3',
    dosage: '1000mg',
    frequency: 'Once daily',
    nextDose: '8:30 AM Tomorrow',
    status: 'current'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'current': return 'bg-green-100 text-green-800 border-green-200';
    case 'upcoming': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'missed': return 'bg-red-100 text-red-800 border-red-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const MedicationList: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Current Medications</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {medications.map((med, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-200 hover:shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Pill className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{med.name}</h3>
                  <p className="text-sm text-gray-600">{med.dosage} • {med.frequency}</p>
                  <div className="flex items-center space-x-1 mt-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Next dose: {med.nextDose}</span>
                  </div>
                </div>
              </div>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(med.status)}`}>
                {med.status === 'missed' && <AlertCircle className="w-3 h-3 mr-1" />}
                {med.status.charAt(0).toUpperCase() + med.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};