import React from 'react';
import { Heart, Thermometer, Activity, Droplets } from 'lucide-react';

interface VitalSign {
  name: string;
  value: string;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  icon: React.ComponentType<{ className?: string }>;
  trend: number;
}

const vitalSigns: VitalSign[] = [
  {
    name: 'Heart Rate',
    value: '72',
    unit: 'bpm',
    status: 'normal',
    icon: Heart,
    trend: 2
  },
  {
    name: 'Blood Pressure',
    value: '120/80',
    unit: 'mmHg',
    status: 'normal',
    icon: Activity,
    trend: -1
  },
  {
    name: 'Temperature',
    value: '98.6',
    unit: '°F',
    status: 'normal',
    icon: Thermometer,
    trend: 0
  },
  {
    name: 'Oxygen Saturation',
    value: '98',
    unit: '%',
    status: 'normal',
    icon: Droplets,
    trend: 1
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'normal': return 'text-green-600 bg-green-50 border-green-200';
    case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'critical': return 'text-red-600 bg-red-50 border-red-200';
    default: return 'text-gray-600 bg-gray-50 border-gray-200';
  }
};

const getTrendIcon = (trend: number) => {
  if (trend > 0) return '↗';
  if (trend < 0) return '↘';
  return '→';
};

export const VitalSigns: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Vital Signs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {vitalSigns.map((vital, index) => {
          const Icon = vital.icon;
          return (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${getStatusColor(vital.status)}`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {getTrendIcon(vital.trend)}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium opacity-80">{vital.name}</p>
                <p className="text-2xl font-bold">
                  {vital.value}
                  <span className="text-sm font-normal ml-1">{vital.unit}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};