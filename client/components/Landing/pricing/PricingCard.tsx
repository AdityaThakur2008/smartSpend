import React from "react";
import { Check } from "lucide-react";

interface PricingCardProps {
  plan: {
    id: number;
    name: string;
    description: string;
    monthlyPrice: string;
    yearlyPrice: string;
    buttonText: string;
    buttonVariant: string;
    isPopular: boolean;
    features: string[];
  };
  isYearly: boolean;
}

export default function PricingCard({ plan, isYearly }: PricingCardProps) {
  // Determine button styles based on variant
  const getButtonStyles = (variant: string) => {
    switch (variant) {
      case "solid-primary":
        return "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md";
      case "light-ai":
        return "bg-ai/10 text-ai hover:bg-ai/20";
      case "light-primary":
      default:
        return "bg-primary/10 text-primary hover:bg-primary/20";
    }
  };

  return (
    <div
      className={`relative rounded-3xl p-8 flex flex-col justify-between bg-card transition-all duration-300 ${
        plan.isPopular
          ? "border-2 border-primary shadow-xl md:-translate-y-2"
          : "border border-border/70 shadow-sm hover:border-border"
      }`}
    >
      {/* MOST POPULAR Badge */}
      {plan.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[11px] font-bold py-1 px-4 rounded-full uppercase tracking-wider shadow-sm">
          Most Popular
        </div>
      )}

      {/* Top Details */}
      <div>
        <h3 className={`text-2xl font-bold mb-1 ${plan.isPopular ? "text-primary" : "text-foreground"}`}>
          {plan.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          {plan.description}
        </p>

        {/* Price Display */}
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-5xl font-extrabold text-foreground tracking-tight">
            {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
          </span>
          <span className="text-muted-foreground text-sm font-medium">
            / month
          </span>
        </div>

        {/* CTA Button */}
        <button
          className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-colors duration-200 mb-8 ${getButtonStyles(
            plan.buttonVariant
          )}`}
        >
          {plan.buttonText}
        </button>

        {/* Features List */}
        <div className="space-y-3.5 pt-6 border-t border-border/40">
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              <div className={`mt-0.5 rounded-full p-0.5 ${plan.isPopular ? "bg-primary/10 text-primary" : "bg-secondary text-foreground"}`}>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-muted-foreground font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}