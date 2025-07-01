import React from 'react';
import { User, Calendar, Search, Bell, LogOut, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/dashboard', label: 'Home', icon: <Home className="w-5 h-5" /> },
  { to: '/search', label: 'Search', icon: <Search className="w-5 h-5" /> },
  { to: '/appointments', label: 'Appointments', icon: <Calendar className="w-5 h-5" /> },
  { to: '/profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
  { to: '/notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="w-full bg-white/70 backdrop-blur-md shadow flex items-center px-4 py-2 fixed top-0 left-0 z-20">
      <div className="flex-1 flex items-center gap-6">
        <span className="text-xl font-bold text-blue-700">Patient Portal</span>
        {navItems.map(item => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center gap-1 px-3 py-1 rounded transition text-base font-medium ${location.pathname === item.to ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
      <button className="ml-auto flex items-center gap-1 text-red-500 hover:text-red-700 font-semibold">
        <LogOut className="w-5 h-5" /> Logout
      </button>
    </nav>
  );
} 