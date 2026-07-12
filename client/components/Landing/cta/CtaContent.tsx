import React from "react";
import { Rocket, Sparkles, PlayCircle, ShieldCheck, Lock, Zap } from "lucide-react";

export default function CtaContent() {
  return (
    <div className="flex-1 space-y-8 relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-foreground bg-secondary border border-border">
        <Rocket className="w-4 h-4 text-primary" /> Ready to Get Started?
      </div>
      
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
        Take control of your <br className="hidden md:block" />
        finances <span className="text-ai">today</span>
      </h2>
      
      <p className="text-muted-foreground text-lg max-w-md">
        Join thousands of users who are already tracking expenses, saving smarter, and achieving their financial goals.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
          <Sparkles className="w-5 h-5" /> Get Started Free
        </button>
        <button className="flex items-center justify-center gap-2 bg-background hover:bg-secondary text-foreground border border-border px-8 py-3.5 rounded-full font-bold transition-all">
          <PlayCircle className="w-5 h-5" /> See How It Works
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border/50">
        <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-success" /> 100% Free to Start
        </span>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
          <Lock className="w-4 h-4 text-primary" /> Secure & Private
        </span>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
          <Zap className="w-4 h-4 text-ai" /> No Credit Card Required
        </span>
      </div>
    </div>
  );
}