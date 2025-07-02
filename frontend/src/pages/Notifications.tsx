import React from 'react';
import { mockNotifications } from '../api/mock';
import NotificationItem from '../components/NotificationItem';

export default function Notifications() {
  return (
    <div className="pt-24 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <div className="space-y-3">
        {mockNotifications.length === 0 && <div className="text-gray-500">No notifications.</div>}
        {mockNotifications.map(n => <NotificationItem key={n.id} notification={n} />)}
      </div>
    </div>
  );
} 