import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from './components/ui/sheet'
import { User, Stethoscope, Shield } from 'lucide-react'
import PatientPortal from './components/PatientPortal'
import DoctorPortal from './components/DoctorPortal'
import AdminPanel from './components/AdminPanel'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import SearchDoctors from './pages/SearchDoctors'
import Notifications from './pages/Notifications'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation();

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-start bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {/* Modern animated background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-400/30 via-blue-400/20 to-green-400/30 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>
      {/* Header */}
      <motion.header 
        className="bg-transparent shadow-none fixed w-full z-10 border-b-0"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 12 }}
      >
        <div className="px-4 py-4 flex items-center justify-between w-full">
          <motion.div 
            className="text-2xl font-extrabold text-blue-700 tracking-tight flex items-center gap-2"
            whileHover={{ scale: 1.05, color: '#7c3aed' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Stethoscope className="w-7 h-7 text-blue-500" />
            Doctor Booking
          </motion.div>
        </div>
      </motion.header>
      {/* Main Content */}
      <main className="pt-14 px-2 sm:px-4 w-full flex flex-col items-center">
        <Routes>
          <Route path="/" element={
            <>
              <motion.section 
                className="text-center py-6 w-full max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
              >
                <motion.h1 
                  className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 mb-4 drop-shadow-lg"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  Welcome to Doctor Booking
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-gray-700 mb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                </motion.p>
              </motion.section>
              {/* Patient, Doctor, Admin Sections */}
              <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 justify-center items-stretch mb-2">
                <section id="patient" className="flex-1 flex justify-center min-w-0">
                  <Card className="flex-1 h-[400px] bg-white/80 backdrop-blur-md shadow-2xl border-0 flex flex-col min-w-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700 text-2xl"><User className="w-7 h-7" />Patient Portal</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-center">
                      <div className="flex-1 flex flex-col justify-center h-[260px]">
                        <PatientPortal />
                      </div>
                    </CardContent>
                  </Card>
                </section>
                <section id="doctor" className="flex-1 flex justify-center min-w-0">
                  <Card className="flex-1 h-[400px] bg-white/80 backdrop-blur-md shadow-2xl border-0 flex flex-col min-w-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-700 text-2xl"><Stethoscope className="w-7 h-7" />Doctor Portal</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-center">
                      <div className="flex-1 flex flex-col justify-center h-[260px]">
                        <DoctorPortal />
                      </div>
                    </CardContent>
                  </Card>
                </section>
                <section id="admin" className="flex-1 flex justify-center min-w-0">
                  <Card className="flex-1 h-[400px] bg-white/80 backdrop-blur-md shadow-2xl border-0 flex flex-col min-w-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-gray-900 text-2xl"><Shield className="w-7 h-7" />Admin Panel</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-center">
                      <div className="flex-1 flex flex-col justify-center h-[260px]">
                        <AdminPanel />
                      </div>
                    </CardContent>
                  </Card>
                </section>
              </div>
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<SearchDoctors />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </main>
    </div>
  )
}

export default App 