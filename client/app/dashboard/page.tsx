import React from 'react';
import ProtectedRoute from '@/components/ProtectedRoutes';

export const metadata = {
  title: 'Dashboard - SmartSpend',
  description: 'Your personal dashboard on SmartSpend',
};

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen flex items-center justify-center bg-secondary/20 p-6 relative overflow-hidden">
        <h1 className="text-4xl font-bold text-primary">Welcome to your Dashboard!</h1>
      </div>
    </ProtectedRoute>
  );
}