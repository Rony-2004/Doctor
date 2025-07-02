import React from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="pt-24">
      <AuthForm mode="register" onSubmit={() => navigate('/dashboard')} />
    </div>
  );
} 