import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export default function FeatureMockup({ id }: { id: number }) {
  switch (id) {
    case 1: // Smart Tracking (Transactions)
      return (
        <div className="w-full space-y-3 opacity-90 p-2">
          {[ 
            { name: "Salary", amt: "+₹45,000", color: "text-success", bg: "bg-success/20" },
            { name: "Food", amt: "-₹1,250", color: "text-danger", bg: "bg-danger/20" },
            { name: "Transport", amt: "-₹800", color: "text-danger", bg: "bg-danger/20" }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center p-2.5 bg-background rounded-lg border border-border shadow-sm">
              <div className="flex gap-3 items-center">
                <div className={`w-8 h-8 rounded-md ${item.bg}`}></div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold">{item.name}</span>
                  <span className="text-[10px] text-muted-foreground">Income/Expense</span>
                </div>
              </div>
              <span className={`text-xs font-bold ${item.color}`}>{item.amt}</span>
            </div>
          ))}
        </div>
      );

    case 2: // AI Insights
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-4 overflow-hidden">
  <div className="p-3 bg-background rounded-xl text-xs font-medium border border-border shadow-sm text-center z-10">
    <span className="text-ai font-bold">✨ AI Insight</span>
    <p className="mt-1 text-muted-foreground">
      You spend 23% more on dining out this month.
    </p>
  </div>
  
  {/* Updated Smooth SVG Graph */}
  <svg 
    className="w-full h-16 stroke-ai" 
    style={{ filter: "drop-shadow(0px 8px 6px rgba(124, 58, 237, 0.25))" }}
    viewBox="0 0 100 40" 
    fill="none"
  >
    <path 
      d="M 5 35 C 25 15, 45 42, 65 35 C 80 30, 90 15, 95 10" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
</div>
      );

    case 3: // Budget Goals
      return (
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="relative flex items-center justify-center">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
              <path className="stroke-muted" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="stroke-warning" strokeWidth="3" strokeDasharray="72, 100" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="absolute text-lg font-bold text-foreground">72%</div>
          </div>
          <div className="text-[10px] text-muted-foreground font-medium mt-2">₹28,800 / ₹40,000 spent</div>
        </div>
      );

    case 4: // Secure & Private
      return (
        <div className="flex flex-col items-center justify-center gap-4 w-full px-4">
          <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center shadow-inner">
            <ShieldCheck className="w-8 h-8 text-success" />
          </div>
          <div className="space-y-2 w-full bg-background p-3 rounded-lg border border-border">
            {["Data Encrypted", "Secure Login", "Privacy Protected"].map((text, i) => (
              <div key={i} className="flex justify-between items-center text-xs text-muted-foreground font-medium">
                <span>{text}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-success" />
              </div>
            ))}
          </div>
        </div>
      );

    case 5: // Analytics Dashboard
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full h-full p-4">
      
      {/* CSS Conic Gradient Donut Chart (With Gaps!) */}
      <div 
        className="relative w-24 h-24 rounded-full flex items-center justify-center drop-shadow-md" 
        style={{ 
          background: `conic-gradient(
            var(--primary) 0deg 132deg, 
            
            var(--success) 132deg 242deg, 
             
            var(--warning) 242deg 307deg, 
           
            var(--ai) 307deg 360deg, 
            var(--muted) 360deg
          )` 
        }}
      >
        {/* Inner Circle (The Hole) - Now perfectly centered with Absolute & Flex */}
        <div className="absolute w-14 h-14 bg-card rounded-full shadow-inner"></div>
      </div>
      
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 text-[11px] text-muted-foreground font-medium">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>Food
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-success"></span>Transport
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-warning"></span>Shopping
        </span>
      </div>
    </div>
  );

    case 6: // Lightning Fast
      return (
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="relative w-24 h-12 overflow-hidden">
            <div className="w-24 h-24 rounded-full border-[4px] border-muted border-t-ai border-r-ai rotate-[-45deg]"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-foreground origin-bottom -translate-x-1/2 rotate-[30deg] rounded-full"></div>
          </div>
          <div className="text-center mt-2">
            <div className="text-2xl font-bold">2.4s</div>
            <div className="text-xs text-muted-foreground">Lightning Fast<br/>Load Time</div>
          </div>
        </div>
      );

    default:
      return null;
  }
}