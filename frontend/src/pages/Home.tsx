import React from 'react';
import { useNavigate } from 'react-router-dom';
import PatientPortal from '../components/PatientPortal';
import DoctorPortal from '../components/DoctorPortal';
import AdminPanel from '../components/AdminPanel';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-12">Welcome to Doctor Booking</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
        <div className="flex-1 flex flex-col items-center cursor-pointer" onClick={() => navigate('/login')} tabIndex={0} role="button" aria-label="Go to Patient Login">
          <PatientPortal />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <DoctorPortal />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <AdminPanel />
        </div>
      </div>
    </div>
  );
};

export default Home; 