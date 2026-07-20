import React from "react";
import { Bell, Search, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 border-b border-border/60 bg-background/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-6">
      
      {/* Left Side: Mobile Menu Button & Search */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle (Visible only on small screens) */}
        <button className="md:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground rounded-md">
          <Menu className="w-5 h-5" />
        </button>
        
        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-secondary/50 border border-border/50 rounded-lg text-sm text-muted-foreground focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
          <Search className="w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search transactions..." 
            className="bg-transparent border-none outline-none placeholder:text-muted-foreground/70 w-48"
          />
        </div>
      </div>

      {/* Right Side: Notifications & Profile */}
      <div className="flex items-center gap-4">
        <button className="p-2 relative text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border border-background"></span>
        </button>
        
        {/* Profile Avatar */}
        <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sm font-bold text-primary cursor-pointer">
          KP
        </div>
      </div>
      
    </header>
  );
}