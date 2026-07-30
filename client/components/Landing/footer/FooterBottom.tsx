"use client"; // Required in Next.js app router for onClick event
import React from "react";
import { ArrowUp } from "lucide-react";

export default function FooterBottom() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="border-t border-border/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground">
        © 2026 SmartSpend | All rights reserved.
      </p>

      <p className="text-xs font-medium text-foreground flex items-center gap-1.5">
        Made with <span className="text-ai">❤️</span> by Aditya Thakur
      </p>

      <button
        onClick={scrollToTop}
        className="p-2 bg-secondary hover:bg-border rounded-md text-foreground transition-colors"
        aria-label="Scroll to top">
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}
