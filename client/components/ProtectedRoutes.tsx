"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();

  const { isAuthenticated, isLoading } = useAuth();
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return <Loader className="animate-spin " size={48} />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
