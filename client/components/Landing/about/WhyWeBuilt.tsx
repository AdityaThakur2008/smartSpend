import React from "react";
import { whyWeBuilt } from "@/constants/landingConstants/aboutData";

export default function WhyWeBuilt() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {whyWeBuilt.map((item) => (
        <div key={item.id} className="space-y-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.bgColor}`}>
            <item.icon className={`w-5 h-5 ${item.iconColor}`} />
          </div>
          <h5 className="text-sm font-bold text-foreground leading-tight">{item.title}</h5>
          <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}