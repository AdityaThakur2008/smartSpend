"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation"; // usePathname import kiya
import { useAuth } from "@/hooks/useAuth";
import {
  LayoutDashboard,
  ReceiptText,
  Target,
  Sparkles,
  Settings,
  LogOut,
  Wallet,
  ChevronRight,
  Plus,
} from "lucide-react";

export default function Sidebar() {
  const { logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname(); 

  async function handleLogout() {
    await logout();
    router.replace("/login");
  }


  const getLinkClass = (path: string) => {
    const baseClass = "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors mb-1 text-sm font-medium";
    const activeClass = "bg-primary/10 text-primary";
    const inactiveClass = "text-muted-foreground hover:bg-secondary hover:text-foreground";
    
    return `${baseClass} ${pathname === path ? activeClass : inactiveClass}`;
  };

  return (
    <aside className="w-64 h-screen border-r border-border/60 bg-card hidden md:flex flex-col flex-shrink-0 sticky top-0">
     
      <div className="h-20 flex items-center px-6 border-b border-border/60">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-xl font-extrabold text-foreground">
          <div className="bg-primary p-1.5 rounded-lg shadow-sm">
            <Wallet className="w-5 h-5 text-white" />
          </div>
          SmartSpend
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-4">
        <Link href="/dashboard" className={getLinkClass("/dashboard")}>
          <LayoutDashboard className="w-5 h-5" /> Dashboard
        </Link>
        
        <Link href="/dashboard/transactions" className={getLinkClass("/dashboard/transactions")}>
          <ReceiptText className="w-5 h-5" /> Transactions
        </Link>
        <Link href="/dashboard/transactions/new" className={getLinkClass("/dashboard/transactions/new")}>
          <Plus className="w-5 h-5" /> Transactions
        </Link>
        
        <Link href="/dashboard/budget" className={getLinkClass("/dashboard/budget")}>
          <Target className="w-5 h-5" /> Budget
        </Link>
        
        <Link href="/dashboard/ai-insights" className={getLinkClass("/dashboard/ai-insights")}>
          <Sparkles className="w-5 h-5" /> AI Insights
        </Link>
        
        <Link href="/dashboard/settings" className={getLinkClass("/dashboard/settings")}>
          <Settings className="w-5 h-5" /> Settings
        </Link>
      </nav>

      <div className="p-4 space-y-4 border-t border-border/40">
        <div className="flex items-center justify-between p-2 rounded-xl hover:bg-secondary/50 cursor-pointer transition-colors border border-transparent hover:border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-secondary overflow-hidden shrink-0">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=jphn&backgroundColor=c0aede"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-foreground">
                john deo
              </span>
              <span className="text-[10px] text-muted-foreground">
                johndeo@example.com
              </span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 w-full text-muted-foreground hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-colors text-sm font-semibold cursor-pointer">
          <LogOut className="w-5 h-5" /> Log out
        </button>
      </div>
    </aside>
  );
}
