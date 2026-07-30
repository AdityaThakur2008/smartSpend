import React from "react";
import { stepsData } from "@/constants/landingConstants/howItWorksData";
import StepCard from "./StepCard";
import DashboardPreview from "./DashboardPreview";

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto bg-background overflow-hidden">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center space-y-5">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-ai bg-ai/10 uppercase border border-ai/20">
          How It Works
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Get started in <span className="text-primary">4 simple steps</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          SmartSpend makes managing your finances easy, intuitive, 
          and AI-powered.
        </p>
      </div>

      {/* Steps Grid with Dashed Line */}
      <div className="relative max-w-5xl mx-auto">
        
        {/* The Horizontal Dashed Line (Hidden on mobile, visible on medium+ screens) */}
        {/* Adjusting top-[15px] to exactly align with the middle of the number circles */}
        <div className="hidden md:block absolute top-[15px] left-[12.5%] right-[12.5%] border-t-2 border-dashed border-border/80 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 relative z-10">
          {stepsData.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>

      {/* The Dashboard Mockup */}
      <DashboardPreview />

    </section>
  );
}