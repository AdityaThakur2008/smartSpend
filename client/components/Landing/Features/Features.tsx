import React from "react";
import { featuresData } from "../../../constants/landingConstants/featuresData";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto bg-background">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center space-y-4">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-ai bg-ai/10 uppercase border border-ai/20">
          Features
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Everything you need to <br className="hidden md:block" />
          <span className="text-primary">manage your finances</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Powerful features designed to help you track, analyze, and grow your
          wealth with AI intelligence.
        </p>
      </div>

      {/* Grid Layout (3 columns on Desktop, 2 on Tablet, 1 on Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}
