import React, { useState } from 'react';

interface Props {
  mode: 'login' | 'register';
  onSubmit: (data: { email: string; password: string }) => void;
}

export default function AuthForm({ mode, onSubmit }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 max-w-sm mx-auto" onSubmit={e => { e.preventDefault(); onSubmit({ email, password }); }}>
      <h2 className="text-xl font-bold text-center mb-2">{mode === 'login' ? 'Login' : 'Register'}</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border rounded px-3 py-2" required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border rounded px-3 py-2" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">{mode === 'login' ? 'Login' : 'Register'}</button>
    </form>
  );
} 