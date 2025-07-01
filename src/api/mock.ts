import { Patient, Doctor, Appointment, Notification } from '../types';

export const mockPatients: Patient[] = [
  { id: 'p1', name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
];

export const mockDoctors: Doctor[] = [
  { id: 'd1', name: 'Dr. Smith', specialty: 'Cardiology', rating: 4.8, availability: ['2024-06-10T10:00', '2024-06-10T11:00'] },
];

export const mockAppointments: Appointment[] = [
  { id: 'a1', patientId: 'p1', doctorId: 'd1', date: '2024-06-10', time: '10:00', status: 'upcoming', type: 'video' },
];

export const mockNotifications: Notification[] = [
  { id: 'n1', userId: 'p1', message: 'Your appointment is confirmed!', read: false, createdAt: '2024-06-09T12:00' },
];

export function getPatientById(id: string) {
  return mockPatients.find(p => p.id === id);
}

export function getDoctorById(id: string) {
  return mockDoctors.find(d => d.id === id);
}

export function getAppointmentsByPatient(patientId: string) {
  return mockAppointments.filter(a => a.patientId === patientId);
}

export function getNotificationsByUser(userId: string) {
  return mockNotifications.filter(n => n.userId === userId);
} 