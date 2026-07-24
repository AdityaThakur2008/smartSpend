"use client";


import { Bell, Menu, Moon } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 border-b border-border/60 bg-background/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-6">
     
      <div className="flex items-center gap-4">
       
        <button className="md:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground rounded-md transition-colors">
          <Menu className="w-5 h-5" />
        </button>

      
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5  rounded-lg text-sm text-black focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
          Dashboard Welcome back, Aditya 👋 Here's your financial overview.
        </div>
      </div>

      
      <div className="flex items-center gap-3 md:gap-4">

        <button className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors">
          <Moon className="w-5 h-5" />
        </button>

        <button className="p-2 relative text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-background"></span>
        </button>

        
        <div className="w-8 h-8 rounded-full bg-secondary overflow-hidden shrink-0 border border-border cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all ml-1">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=kaliram&backgroundColor=c0aede"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
