"use client"; // Interactive billing toggle ke liye zaroori hai

import React, { useState } from "react";
import { pricingPlans } from "@/constants/landingConstants/pricingData";
import PricingCard from "./PricingCard";
import TrustBanner from "./TrustBanner";
import { ShieldAlert } from "lucide-react";

export default function Pricing() {
  // Yearly by default selected (as shown in image with Save 20%)
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto bg-background">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center space-y-4">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-ai bg-ai/10 uppercase border border-ai/20">
          Pricing
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Simple, transparent pricing <br className="hidden sm:block" />
          for <span className="text-primary">everyone</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl">
          Start for free and upgrade anytime. No hidden fees, no contracts.
        </p>

        {/* Billing Toggle Switch */}
        <div className="flex items-center gap-4 mt-6 pt-2">
          <span className={`text-sm font-medium cursor-pointer transition-colors ${!isYearly ? "text-foreground font-bold" : "text-muted-foreground"}`}
                onClick={() => setIsYearly(false)}>
            Monthly
          </span>

          {/* Toggle Button */}
          <button
            type="button"
            onClick={() => setIsYearly(!isYearly)}
            className="w-12 h-6.5 bg-secondary rounded-full p-1 relative transition-colors duration-300 border border-border flex items-center focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Toggle billing frequency"
          >
            <div
              className={`w-4 h-4 rounded-full bg-primary shadow-md transition-transform duration-300 ${
                isYearly ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>

          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsYearly(true)}>
            <span className={`text-sm font-medium transition-colors ${isYearly ? "text-foreground font-bold" : "text-muted-foreground"}`}>
              Yearly
            </span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-ai/10 text-ai border border-ai/20">
              Save 20%
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto pt-4">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-center text-center space-y-1">
        <div className="flex items-center gap-2 text-ai font-bold text-sm">
          <div className="w-6 h-6 rounded-full bg-ai/10 flex items-center justify-center">
            <ShieldAlert className="w-3.5 h-3.5 text-ai" />
          </div>
          SmartSpend is currently a portfolio project built for learning and demonstration.
        </div>
        <p className="text-xs text-muted-foreground">
          Pricing plans are mock examples and not available for purchase.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <TrustBanner />
      </div>

      
      

    </section>
  );
}