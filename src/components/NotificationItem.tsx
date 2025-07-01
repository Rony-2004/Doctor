import React from 'react';
import { Notification } from '../types';

interface Props {
  notification: Notification;
  onMarkRead?: () => void;
}

export default function NotificationItem({ notification, onMarkRead }: Props) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg border ${notification.read ? 'bg-gray-100 border-gray-200' : 'bg-blue-50 border-blue-200'}`}>
      <div className="flex-1 text-gray-700">{notification.message}</div>
      {!notification.read && (
        <button onClick={onMarkRead} className="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">Mark as read</button>
      )}
      <span className="text-xs text-gray-400 ml-2">{new Date(notification.createdAt).toLocaleString()}</span>
    </div>
  );
} 