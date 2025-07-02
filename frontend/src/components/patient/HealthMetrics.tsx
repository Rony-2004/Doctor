import React from 'react';
import { TrendingUp, Target, Award } from 'lucide-react';

interface HealthMetric {
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

const healthMetrics: HealthMetric[] = [
  {
    name: 'Steps',
    value: 8547,
    target: 10000,
    unit: 'steps',
    trend: 'up',
    color: 'blue'
  },
  {
    name: 'Weight',
    value: 145,
    target: 140,
    unit: 'lbs',
    trend: 'down',
    color: 'green'
  },
  {
    name: 'Sleep',
    value: 7.2,
    target: 8,
    unit: 'hours',
    trend: 'stable',
    color: 'purple'
  },
  {
    name: 'Water',
    value: 6,
    target: 8,
    unit: 'glasses',
    trend: 'up',
    color: 'cyan'
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: 'bg-blue-500 text-blue-600 bg-blue-50',
    green: 'bg-green-500 text-green-600 bg-green-50',
    purple: 'bg-purple-500 text-purple-600 bg-purple-50',
    cyan: 'bg-cyan-500 text-cyan-600 bg-cyan-50'
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export const HealthMetrics: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Health Metrics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {healthMetrics.map((metric, index) => {
          const percentage = (metric.value / metric.target) * 100;
          const colorClasses = getColorClasses(metric.color).split(' ');
          const bgColor = colorClasses[0];
          const textColor = colorClasses[1];
          const lightBg = colorClasses[2];
          
          return (
            <div key={index} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{metric.name}</h3>
                  <p className="text-2xl font-bold text-gray-900">
                    {metric.value.toLocaleString()}
                    <span className="text-sm font-normal text-gray-500 ml-1">
                      {metric.unit}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Target: {metric.target.toLocaleString()} {metric.unit}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${lightBg}`}>
                  {metric.trend === 'up' ? (
                    <TrendingUp className={`w-6 h-6 ${textColor}`} />
                  ) : metric.value >= metric.target ? (
                    <Award className={`w-6 h-6 ${textColor}`} />
                  ) : (
                    <Target className={`w-6 h-6 ${textColor}`} />
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className={`font-medium ${textColor}`}>
                    {Math.round(percentage)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${bgColor}`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};