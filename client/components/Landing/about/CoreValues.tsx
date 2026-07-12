import React from "react";
import { coreValues } from "@/constants/landingConstants/aboutData";

export default function CoreValues() {
  return (
    <div className="space-y-8">
      {coreValues.map((val) => (
        <div key={val.id} className="flex gap-5">
          <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${val.bgColor}`}>
            <val.icon className={`w-6 h-6 ${val.iconColor}`} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-foreground mb-1">{val.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {val.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}