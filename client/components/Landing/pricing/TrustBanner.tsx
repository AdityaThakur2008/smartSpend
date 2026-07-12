import React from "react";
import { trustFeatures } from "@/constants/landingConstants/pricingData";

export default function TrustBanner() {
  return (
    <div className="w-full mt-16 bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
        {trustFeatures.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-start gap-4 ${
              index !== 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.bgColor}`}
            >
              <item.icon className={`w-5 h-5 ${item.iconColor}`} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}