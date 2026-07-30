"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

import { useRouter } from "next/navigation";
import  DahboardLayoutSkeleton from "@/components/skeletons/DahboardLayoutSkeleton"

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
    return <DahboardLayoutSkeleton />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
