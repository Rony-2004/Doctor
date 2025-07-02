import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="pt-24 flex justify-center items-center min-h-screen">
      <SignIn afterSignInUrl="/dashboard" />
    </div>
  );
} 