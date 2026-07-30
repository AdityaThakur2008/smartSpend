import React from "react";
import FeatureMockup from "./FeatureMockups";
import { LucideIcon } from "lucide-react";

interface FeatureProps {
  feature: {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
    iconColor: string;
    bgColor: string;
  };
}

export default function FeatureCard({ feature }: FeatureProps) {
  return (
    <div className="group relative overflow-hidden bg-card border border-border/60 rounded-3xl p-6 md:p-8 flex flex-col gap-6 hover:shadow-xl hover:border-border transition-all duration-300">
      
      {/* Top Content (Icon + Text) */}
      <div className="flex-col space-y-4 z-10">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${feature.bgColor} shadow-sm`}>
          <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            {feature.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>

      {/* Bottom Mockup Area */}
      <div className="w-full flex-1 bg-secondary/40 rounded-2xl p-4 min-h-[160px] border border-border/50 flex items-center justify-center relative overflow-hidden group-hover:bg-secondary/60 transition-colors duration-300">
        <div className="group-hover:scale-105 transition-transform duration-500 w-full h-full flex items-center justify-center">
          <FeatureMockup id={feature.id} />
        </div>
      </div>

    </div>
  );
}