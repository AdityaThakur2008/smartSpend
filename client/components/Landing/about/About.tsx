import React from "react";
import { Heart, ArrowRight } from "lucide-react";
import CoreValues from "./CoreValues";
import TechStack from "./TechStack";
import WhyWeBuilt from "./WhyWeBuilt";
import AboutDashboardPreview from "./AboutDashboardPreview";

export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto bg-background">
      {/* 1. Top Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-ai bg-ai/10 uppercase border border-ai/20">
          About SmartSpend
          <span className="w-1.5 h-1.5 rounded-full bg-ai animate-pulse"></span>
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Making personal finance <br className="hidden md:block" />
          <span className="text-primary">smarter</span> with AI
        </h2>
      </div>

      {/* 2. Top Grid: Mission/Vision & Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
        {/* Left Side: Text & Core Values Component */}
        <div className="space-y-10">
          <p className="text-muted-foreground text-lg leading-relaxed">
            SmartSpend is an AI-powered personal finance platform designed to
            help you track, analyze, and manage your money smarter, so you can
            focus on what truly matters.
          </p>
          {/* Imported Component */}
          <CoreValues />
        </div>

        {/* Right Side: Image Placeholder */}
        <AboutDashboardPreview />
      </div>

      {/* 3. Bottom Big Container (Bento Style) */}
      <div className="bg-secondary/30 border border-border/60 rounded-[2rem] p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column: Tech Stack Component */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Built with modern technology
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              SmartSpend is built using a robust and scalable tech stack to
              ensure performance, security, and a seamless user experience.
            </p>
            {/* Imported Component */}
            <TechStack />
          </div>

          {/* Right Column: Why We Built Component */}
          <div className="lg:col-span-7 lg:pl-10 lg:border-l border-border/60 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Why we built SmartSpend
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                Managing money is hard. Most apps are either too complicated,
                lack insights, or don&apos;t help you make better decisions. We
                built SmartSpend to change that.
              </p>
            </div>
            {/* Imported Component */}
            <WhyWeBuilt />
          </div>
        </div>

        {/* 4. Bottom Footer Note & Button */}
        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 text-ai fill-ai/20 shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground font-medium">
              Thank you for choosing SmartSpend. <br />
              Together, let&apos;s build a smarter financial future.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-6 py-2.5 rounded-full text-sm font-bold transition-colors">
            Get Started Free <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
