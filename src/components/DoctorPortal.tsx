import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, UserCog, FolderOpen, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Calendar, color: 'text-green-500', label: 'Manage your schedule' },
  { icon: UserCog, color: 'text-blue-500', label: 'Edit your profile ' },
  { icon: FolderOpen, color: 'text-purple-500', label: 'Access patient information & EHR' },
  { icon: Video, color: 'text-pink-500', label: 'Conduct online consultations' },
];

export default function DoctorPortal() {
  return (
    <motion.div
      className="space-y-6 bg-white/60 backdrop-blur-xl rounded-2xl shadow-2xl py-4 px-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(16,185,129,0.15)' }}
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
              whileHover={{ color: '#a21caf', rotate: -8 }}
            >
              <Icon />
            </motion.span>
            {label}
          </motion.li>
        ))}
      </ul>
      <motion.div whileHover={{ scale: 1.04 }}>
        <Button className="w-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-purple-600 hover:to-green-600 text-lg transition-all duration-300 shadow-lg backdrop-blur-xl">
          Login
        </Button>
      </motion.div>
    </motion.div>
  );
} 