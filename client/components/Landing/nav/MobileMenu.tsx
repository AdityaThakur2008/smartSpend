"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/landingConstants/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Toggle Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleMenu} 
        className="md:hidden"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 top-16 w-full border-b border-border/40 bg-background shadow-xl md:hidden animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-6 space-y-4">
            
            {/* Links */}
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)} // Link click hone pe menu close ho jayega
              >
                {link.title}
              </Link>
            ))}

            {/* Actions (Login / Get Started) */}
            <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-border/40">
              <Button 
                className="w-full rounded-lg font-medium" 
                variant="outline" 
                asChild 
                onClick={() => setIsOpen(false)}
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button 
                className="w-full rounded-lg font-medium bg-primary text-primary-foreground" 
                asChild 
                onClick={() => setIsOpen(false)}
              >
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
            
          </nav>
        </div>
      )}
    </>
  );
}