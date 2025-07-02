import React from 'react';
import { FileText, TestTube, MessageSquare, Calendar, Clock } from 'lucide-react';

interface Activity {
  type: 'lab' | 'note' | 'appointment' | 'prescription';
  title: string;
  description: string;
  time: string;
  status?: string;
}

const activities: Activity[] = [
  {
    type: 'lab',
    title: 'Lab Results Available',
    description: 'Complete Blood Count (CBC) results are ready for review',
    time: '2 hours ago',
    status: 'new'
  },
  {
    type: 'note',
    title: 'Doctor\'s Note Added',
    description: 'Follow-up notes from your recent checkup with Dr. Johnson',
    time: '1 day ago'
  },
  {
    type: 'appointment',
    title: 'Appointment Confirmed',
    description: 'Cardiology consultation scheduled for March 15',
    time: '2 days ago'
  },
  {
    type: 'prescription',
    title: 'Prescription Refilled',
    description: 'Lisinopril 10mg - 30 day supply refilled',
    time: '3 days ago'
  }
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'lab': return TestTube;
    case 'note': return MessageSquare;
    case 'appointment': return Calendar;
    case 'prescription': return FileText;
    default: return FileText;
  }
};

const getActivityColor = (type: string) => {
  switch (type) {
    case 'lab': return 'bg-green-50 text-green-600';
    case 'note': return 'bg-blue-50 text-blue-600';
    case 'appointment': return 'bg-purple-50 text-purple-600';
    case 'prescription': return 'bg-orange-50 text-orange-600';
    default: return 'bg-gray-50 text-gray-600';
  }
};

export const RecentActivity: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
      
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = getActivityIcon(activity.type);
          return (
            <div
              key={index}
              className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer bg-white"
            >
              <div className={`p-2 rounded-lg ${getActivityColor(activity.type)}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                      <span>{activity.title}</span>
                      {activity.status === 'new' && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          New
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 mt-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="w-full mt-4 py-2 text-center font-semibold rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-colors shadow-none border-none" style={{background: '', border: 'none', boxShadow: 'none'}}>
        View All
      </button>
    </div>
  );
};