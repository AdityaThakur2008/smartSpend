"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image"

import { useAuth } from "@/hooks/useAuth";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { user } = useAuth();

  return (
    <header className="h-16 border-b border-border/60 bg-background/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground rounded-md transition-colors">
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-black focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
          Dashboard Welcome back, {user?.name} 👋 Here&apos;s your financial
          overview.
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <Link href="/dashboard/settings">
          <div className="w-8 h-8 rounded-full bg-secondary overflow-hidden shrink-0 border border-border cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all ml-1">
            <Image
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.name}&backgroundColor=c0aede`}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
