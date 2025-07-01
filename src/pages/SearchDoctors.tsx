import React, { useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import { mockDoctors } from '../api/mock';

export default function SearchDoctors() {
  const [query, setQuery] = useState('');
  const filtered = mockDoctors.filter(d => d.name.toLowerCase().includes(query.toLowerCase()) || d.specialty.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="pt-24 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Find a Doctor</h1>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by name or specialty" className="border rounded px-3 py-2 w-full mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.length === 0 && <div className="text-gray-500">No doctors found.</div>}
        {filtered.map(d => <DoctorCard key={d.id} doctor={d} onViewProfile={() => {}} />)}
      </div>
    </div>
  );
} 