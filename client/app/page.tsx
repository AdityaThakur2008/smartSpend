
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Landing from "@/components/Landing/LandingPage";
import {Loader} from "lucide-react"

export default function HomePage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isLoading, isAuthenticated, router]);

 if (isLoading) {
    return <Loader className="animate-spin " size={48} />;
  }  
  

  return <Landing />;
}

