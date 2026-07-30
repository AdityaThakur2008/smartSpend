import React from "react";
import LoginForm from "@/components/forms/LoginForm";

export const metadata = {
  title: "Login - SmartSpend",
  description: "Log in to your SmartSpend account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/20 dark:bg-background p-6 relative overflow-hidden">
      
    
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai/10 dark:bg-ai/20 rounded-full blur-[100px] pointer-events-none"></div>

     
      <div className="relative z-10 w-full max-w-md">
        <LoginForm />
      </div>
      
    </div>
  );
}