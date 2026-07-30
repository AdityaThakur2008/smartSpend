"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import {
  LayoutDashboard, ReceiptText, Sparkles, Settings, 
  LogOut, Wallet, ChevronRight, Plus, ChartArea, X
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const { logout ,user} = useAuth();
  const router = useRouter();
  const pathname = usePathname();


  async function handleLogout() {
    await logout();
    router.replace("/login");
  }

 
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const getLinkClass = (path: string) => {
    const baseClass = "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors mb-1 text-sm font-medium";
    const activeClass = "bg-primary/10 text-primary";
    const inactiveClass = "text-muted-foreground hover:bg-secondary hover:text-foreground";
    return `${baseClass} ${pathname === path ? activeClass : inactiveClass}`;
  };

  return (
    <>
     
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

 
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 h-screen border-r border-border/60 bg-card flex flex-col flex-shrink-0 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-border/60">
          <Link href="/dashboard" className="flex items-center gap-2 text-xl font-extrabold text-foreground" onClick={handleLinkClick}>
            <div className="bg-primary p-1.5 rounded-lg shadow-sm">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            SmartSpend
          </Link>
       
          <button className="md:hidden text-muted-foreground hover:text-foreground p-1" onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-4">
          <Link href="/dashboard" className={getLinkClass("/dashboard")} onClick={handleLinkClick}>
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/dashboard/transactions" className={getLinkClass("/dashboard/transactions")} onClick={handleLinkClick}>
            <ReceiptText className="w-5 h-5" /> Transactions
          </Link>
          <Link href="/dashboard/add-transaction" className={getLinkClass("/dashboard/add-transaction")} onClick={handleLinkClick}>
            <Plus className="w-5 h-5" /> Add Transaction
          </Link>
          <Link href="/dashboard/analytics" className={getLinkClass("/dashboard/analytics")} onClick={handleLinkClick}>
            <ChartArea className="w-5 h-5" /> Analytics
          </Link>
          <Link href="/dashboard/ai-insights" className={getLinkClass("/dashboard/ai-insights")} onClick={handleLinkClick}>
            <Sparkles className="w-5 h-5" /> AI Insights
          </Link>
          <Link href="/dashboard/settings" className={getLinkClass("/dashboard/settings")} onClick={handleLinkClick}>
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </nav>

        <div  className="p-4 space-y-4 border-t border-border/40">
       <Link href="/dashboard/settings">
          <div className="flex items-center justify-between p-2 rounded-xl hover:bg-secondary/50 cursor-pointer transition-colors border border-transparent hover:border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-secondary overflow-hidden shrink-0">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name}&backgroundColor=c0aede`}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-foreground">
                 {user?.name}
                </span>
                <span className="text-[10px] text-muted-foreground">
              {user?.email}
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
</Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 w-full text-muted-foreground hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-colors text-sm font-semibold cursor-pointer"
          >
            <LogOut className="w-5 h-5" /> Log out
          </button>
        </div>
      </aside>
    </>
  );
}