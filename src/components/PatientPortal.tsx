import React from 'react';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Calendar, User, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import { SignInButton } from '@clerk/clerk-react';

const features = [
  { icon: BadgeCheck, color: 'text-blue-500', label: 'Search for doctors' },
  { icon: Calendar, color: 'text-purple-500', label: 'Book, reschedule, or cancel appointments' },
  { icon: User, color: 'text-green-500', label: 'Manage your profile' },
  { icon: Bell, color: 'text-yellow-500', label: 'View reminders & notifications' },
];

export default function PatientPortal() {
  return (
    <motion.div
      className="space-y-6 bg-white/60 backdrop-blur-xl rounded-2xl shadow-2xl py-4 px-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.15)' }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    >
      <ul className="space-y-3">
        {features.map(({ icon: Icon, color, label }) => (
          <motion.li
            key={label}
            className="flex items-center gap-3 text-lg group"
            whileHover={{ scale: 1.07 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.span
              className={`transition-colors duration-300 group-hover:scale-125 ${color}`}
              whileHover={{ color: '#ec4899', rotate: 8 }}
            >
              <Icon />
            </motion.span>
            {label}
          </motion.li>
        ))}
      </ul>
      <motion.div whileHover={{ scale: 1.04 }}>
        <SignInButton mode="modal">
          <Button
            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-pink-600 hover:to-blue-600 text-lg transition-all duration-300 shadow-lg backdrop-blur-xl"
          >
            Login
          </Button>
        </SignInButton>
      </motion.div>
    </motion.div>
  );
} 