"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Wallet,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterInput } from "@/Validator/auth.Validator";
import AuthService from "@/services/auth.Service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterForm() {
  const { setUser, setIsAuthenticated } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(data: RegisterInput) {
    try {
      await AuthService.register(data);

      const user = await AuthService.login({
        email: data.email,
        password: data.password,
      });

      setUser(user);
      setIsAuthenticated(true);
      form.reset();
      toast.success("Account created successfully!");
      router.replace("/dashboard");
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message ||
            "Registration failed. Please try again.",
        );
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-card border border-border/60 rounded-[2rem] p-8 md:p-10 shadow-2xl">
      {/* Brand / Logo */}
      <div className="flex justify-center mb-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-foreground">
          <div className="bg-primary p-2 rounded-xl shadow-sm">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          SmartSpend
        </Link>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground">
          Create an account
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          Start managing your finances smarter today.
        </p>
      </div>

      {/* Form Fields */}
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground px-1">
            Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              disabled={isSubmitting}
              {...form.register("name")}
              type="text"
              placeholder="John Doe"
              className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
            {form.formState.errors.name && (
              <p className="text-red-500 text-xs">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground px-1">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              disabled={isSubmitting}
              {...form.register("email")}
              type="email"
              placeholder="john.doe@example.com"
              className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-xs">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground px-1">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              disabled={isSubmitting}
              {...form.register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full pl-10 pr-10 py-2.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors">
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
            {form.formState.errors.password && (
              <p className="text-red-500 text-xs">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl font-bold transition-all shadow-md mt-6">
          {isSubmitting ? (
            <>
              {" "}
              <Loader2 className="w-4 h-4 animate-spin" /> "Creating Account..."
            </>
          ) : (
            <>
              {" "}
              "Create Account" <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Footer / Login Link */}
      <p className="text-center text-sm text-muted-foreground mt-6">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-bold text-primary hover:underline underline-offset-4">
          Log in
        </Link>
      </p>
    </div>
  );
}
