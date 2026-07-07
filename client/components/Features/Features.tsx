// components/dashboard/Features.tsx
import { LineChart, Brain, Target, ShieldCheck } from "lucide-react";
import {featuresData} from "@/constants/featuresData"


export function Features() {
  return (
    <section id="#features" className="w-full bg-background py-20 px-6 sm:px-12 lg:px-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            Everything you need to <br />
            manage your finances
          </h2>
        </div>

        {/* Features 4-Column Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-xl shadow-xs transition-all duration-200 hover:shadow-md hover:border-border/80"
              >
                {/* Visual Anchor Box for Icon */}
                <div className={`p-4 rounded-xl ${feature.bgColor} ${feature.iconColor} mb-5 flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6 stroke-[2.5]" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
