import React from "react";
import { LucideIcon } from "lucide-react";

interface StepProps {
  step: {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor: string;
    bgColor: string;
  };
}

export default function StepCard({ step }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center relative z-10 w-full px-4">
      {/* Number Circle */}
      <div className="w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center text-sm font-bold text-primary mb-8 shadow-sm">
        {step.id}
      </div>

      {/* Main Icon */}
      <div className={`w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-6 shadow-sm ${step.bgColor}`}>
        <step.icon className={`w-10 h-10 ${step.iconColor}`} />
      </div>

      {/* Text Content */}
      <h4 className="text-lg font-bold text-foreground mb-3">
        {step.title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
        {step.description}
      </p>
    </div>
  );
}