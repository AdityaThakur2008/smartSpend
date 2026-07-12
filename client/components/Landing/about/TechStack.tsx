import React from "react";
import { techStack } from "@/constants/landingConstants/aboutData";

export default function TechStack() {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      {techStack.map((tech, idx) => (
        <div 
          key={idx} 
          className="flex items-center gap-2 bg-background border border-border/50 px-3 py-2 rounded-lg shadow-sm hover:border-border transition-colors cursor-default"
        >
          <tech.icon className={`w-4 h-4 ${tech.color}`} />
          <span className="text-xs font-semibold text-foreground">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}