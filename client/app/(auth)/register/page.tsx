import React from "react";
import RegisterForm from "@/components/forms/RegisterFom";

export const metadata = {
  title: "Register - SmartSpend.ai",
  description: "Create a new account on SmartSpend.ai",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/20 p-6 relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Form Component */}
      <div className="relative z-10 w-full max-w-md">
        <RegisterForm />
      </div>
      
    </div>
  );
}