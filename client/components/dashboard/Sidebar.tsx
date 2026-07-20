"use client";

import React from "react";
import Link from "next/link";
import { LayoutDashboard, ReceiptText, Target, Sparkles, Settings, Wallet } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import {useRouter} from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Sidebar() {

const { logout } = useAuth();
const router = useRouter();

    async function handleLogout() {
        await logout();
        router.replace("/login");
    }
    
  return (
    <aside className="w-64 h-screen border-r border-border/60 bg-card hidden md:flex flex-col flex-shrink-0 sticky top-0">
      
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-border/60">
        <Link href="/dashboard" className="flex items-center gap-2 text-xl font-extrabold text-foreground">
          <div className="bg-primary p-1.5 rounded-lg">
            <Wallet className="w-5 h-5 text-primary-foreground" />
          </div>
          SmartSpend
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1.5 text-sm font-medium">
        <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary/10 text-primary">
          <LayoutDashboard className="w-5 h-5" /> Overview
        </Link>
        <Link href="/dashboard/transactions" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
          <ReceiptText className="w-5 h-5" /> Transactions
        </Link>
        <Link href="/dashboard/budgets" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
          <Target className="w-5 h-5" /> Budgets
        </Link>
        <Link href="/dashboard/ai-insights" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
          <Sparkles className="w-5 h-5 text-ai" /> AI Insights
        </Link>
      </nav>

      {/* Bottom Settings */}
      <div className="p-4 border-t border-border/60">
        <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors text-sm font-medium">
          <Settings className="w-5 h-5" /> Settings
        </Link>
        <Button variant="ghost" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors text-sm font-medium mt-2" onClick={handleLogout}>
          <span>Logout</span>
        </Button>
      </div>
      
    </aside>
  );
}