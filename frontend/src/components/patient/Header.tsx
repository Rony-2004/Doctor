import React from 'react';
import { Bell, Settings, Search, Menu, LogOut } from 'lucide-react';
import { SignOutButton } from '@clerk/clerk-react';

export const Header: React.FC<{ onProfileClick?: () => void }> = ({ onProfileClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors" title="Menu">
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Patient Dashboard</h1>
            <p className="text-sm text-gray-600">Welcome back, Sarah</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search medical records..."
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          
          <button className="relative p-2 bg-transparent text-gray-600 hover:text-gray-900 transition-colors border-none shadow-none outline-none focus:outline-none" title="Notifications" style={{background: 'none', border: 'none', boxShadow: 'none'}}>
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          
          <button className="p-2 bg-transparent text-gray-600 hover:text-gray-900 transition-colors border-none shadow-none outline-none focus:outline-none" title="Settings" style={{background: 'none', border: 'none', boxShadow: 'none'}}>
            <Settings className="w-6 h-6" />
          </button>
          <SignOutButton redirectUrl="/">
            <button
              className="p-2 bg-transparent text-blue-600 hover:text-red-600 transition-colors border-none shadow-none outline-none focus:outline-none"
              style={{ boxShadow: 'none', background: 'transparent', border: 'none' }}
              title="Logout"
            >
              <LogOut className="w-6 h-6" />
            </button>
          </SignOutButton>
          <button
            className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm cursor-pointer"
            aria-label="Edit Profile"
            onClick={onProfileClick}
            title="Edit Profile"
          >
            SM
          </button>
        </div>
      </div>
    </header>
  );
};