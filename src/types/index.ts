export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  medicalHistory?: string[];
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  profilePic?: string;
  qualifications?: string;
  availability: string[];
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  type: 'in-person' | 'video';
}

export interface Notification {
  id: string;
  userId: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'patient' | 'doctor' | 'admin';
} 