import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full text-center py-4 text-gray-500 text-sm bg-white/60 backdrop-blur-md mt-8">
      &copy; {new Date().getFullYear()} Doctor Booking. All rights reserved.
    </footer>
  );
} 