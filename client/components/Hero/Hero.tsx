// components/Hero/Hero.tsx
import { HeroBadge } from "./HeroBadge";
import { HeroContent } from "./HeroContent";
import { HeroButtons } from "./HeroButtons";
import { HeroDashboardPreview } from "./HeroDashboardPreview";
import { ShieldCheck, CheckCircle2, BrainCircuit } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center bg-background px-6 sm:px-12 lg:px-20 py-12 md:py-20 overflow-hidden">
      
      {/* Upper Layout Grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Interactive Side */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <HeroContent>
            <HeroBadge />
          </HeroContent>
          <HeroButtons />
          
          {/* Bottom Trust Indicators Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-6 text-sm text-muted-foreground font-medium border-t border-border/60">
            <div className="flex items-center gap-1.5">
              <BrainCircuit className="w-4 h-4 text-ai" />
              <span>AI Insights</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-success" />
              <span>Bank Level Security</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>100% Free to Start</span>
            </div>
          </div>
        </div>

        {/* Right Dashboard Visualization Side */}
        <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
          <HeroDashboardPreview />
        </div>

      </div>

      
    </section>
  );
}
