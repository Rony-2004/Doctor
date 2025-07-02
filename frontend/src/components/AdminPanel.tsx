import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, CalendarCheck, BarChart, Link2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Users, color: 'text-gray-800', label: 'Manage users & Doctors ' },
  { icon: CalendarCheck, color: 'text-blue-500', label: 'Oversee appointments' },
  { icon: BarChart, color: 'text-green-600', label: 'View analytics & reports of all Data' },
  { icon: Link2, color: 'text-purple-600', label: 'Integrate with other systems' },
];

export default function AdminPanel() {
  return (
    <motion.div
      className="space-y-6 bg-white/60 backdrop-blur-xl rounded-2xl shadow-2xl py-4 px-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(31,41,55,0.15)' }}
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
              whileHover={{ color: '#a21caf', rotate: 8 }}
            >
              <Icon />
            </motion.span>
            {label}
          </motion.li>
        ))}
      </ul>
      <motion.div whileHover={{ scale: 1.04 }}>
        <Button className="w-full bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 hover:from-blue-900 hover:to-gray-900 text-lg transition-all duration-300 shadow-lg backdrop-blur-xl">
          Login
        </Button>
      </motion.div>
    </motion.div>
  );
} 