import React from "react";
import { Sparkles, ArrowRight, Bot } from "lucide-react";

export default function AiInsightsCard() {
  return (
    <div className="flex items-center justify-between h-full pt-2">
      {/* Left side: Message */}
      <div className="flex-1 pr-6">
        <div className="flex items-start gap-3">
          <div className="mt-0.5">
            <Sparkles className="w-4 h-4 text-ai fill-ai/20" />
          </div>
          <p className="text-sm font-medium text-foreground leading-relaxed">
            Your <span className="font-bold text-foreground">food spending</span> increased by 15% this month compared to last month. Consider cooking at home more to save money.
          </p>
        </div>
      </div>
      
      {/* Right side: Icon & Action */}
      <div className="flex flex-col items-center justify-center gap-3 border-l border-ai/20 pl-6 shrink-0">
        <div className="w-14 h-14 rounded-full bg-ai/10 flex items-center justify-center relative shadow-inner">
          <div className="absolute inset-0 bg-gradient-to-b from-ai/20 to-transparent rounded-full animate-pulse"></div>
          <Bot className="w-8 h-8 text-ai relative z-10" />
        </div>
        <button className="text-xs font-bold text-ai flex items-center gap-1 hover:opacity-80 transition-opacity">
          View All Insights <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}