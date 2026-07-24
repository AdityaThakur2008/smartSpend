import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import ProtectedRoute from "@/components/ProtectedRoutes";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen overflow-hidden bg-secondary/10 dark:bg-background">
        
      
        <Sidebar />

        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          
      
          <Header />

          <main className="flex-1 overflow-y-auto p-6 md:p-8">
            <div className="w-full mx-auto">
              {children}
            </div>
          </main>
          
        </div>
        
      </div>
    </ProtectedRoute>
  );
}