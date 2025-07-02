import React, { useState } from 'react';
import { Patient } from '../types';

interface Props {
  patient: Patient;
  onSave?: (updated: Patient) => void;
}

export default function ProfileForm({ patient, onSave }: Props) {
  const [form, setForm] = useState(patient);
  return (
    <form className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="mt-1 block w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="mt-1 block w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="mt-1 block w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Medical History</label>
        <textarea value={form.medicalHistory?.join('\n') || ''} onChange={e => setForm(f => ({ ...f, medicalHistory: e.target.value.split('\n') }))} className="mt-1 block w-full border rounded px-3 py-2" rows={3} />
      </div>
      <button type="button" onClick={() => onSave?.(form)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
    </form>
  );
} 