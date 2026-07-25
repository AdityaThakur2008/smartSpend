"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Wallet,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { SiGithub, SiGoogle } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginInput } from "@/Validator/auth.Validator";
import AuthService from "@/services/auth.Service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth } from "@/hooks/useAuth";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { setUser, setIsAuthenticated } = useAuth();

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(data: LoginInput) {
    try {
      const user = await AuthService.login(data);
      setUser(user);
      setIsAuthenticated(true);
      toast.success("Login successful! Welcome back.");
      form.reset();
      router.push("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message ||
            "Invalid credentials. Please try again.",
        );
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-card border border-border/60 rounded-[2rem] p-8 md:p-10 shadow-2xl dark:shadow-none dark:border-border">
   
      <div className="flex justify-center mb-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-foreground">
          <div className="bg-primary p-2 rounded-xl shadow-sm">
            <Wallet className="w-6 h-6 text-primary-foreground" />
          </div>
          SmartSpend
        </Link>
      </div>

    
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground">Welcome back</h2>
        <p className="text-sm text-muted-foreground mt-2">
          Log in to your account to continue.
        </p>
      </div>

      
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
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
              className="w-full pl-10 pr-4 py-2.5 bg-background dark:bg-input/10 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/50 disabled:opacity-50"
            />
          </div>
          {form.formState.errors.email && (
            <p className="text-red-500 text-xs px-1 mt-1">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

       
        <div className="space-y-1.5">
          <div className="flex items-center justify-between px-1">
            <label className="text-xs font-semibold text-foreground">
              Password
            </label>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              disabled={isSubmitting}
              {...form.register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full pl-10 pr-10 py-2.5 bg-background dark:bg-input/10 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/50 disabled:opacity-50"
            />
            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50">
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          {form.formState.errors.password && (
            <p className="text-red-500 text-xs px-1 mt-1">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

       
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl font-bold transition-all shadow-md mt-6 disabled:opacity-70 disabled:cursor-not-allowed">
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Signing In...
            </>
          ) : (
            <>
              Sign In <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

     
      <p className="text-center text-sm text-muted-foreground mt-6">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-bold text-primary hover:underline underline-offset-4">
          Sign up
        </Link>
      </p>
    </div>
  );
}
