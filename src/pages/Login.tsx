import React from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="pt-24">
      <AuthForm mode="login" onSubmit={() => navigate('/dashboard')} />
    </div>
  );
} 