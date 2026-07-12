import React from "react";

export default function CtaMockup() {
  return (
    <div className="flex-1 w-full max-w-md relative z-10">
      <div className="bg-card border border-border/80 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 transform rotate-1 hover:rotate-0 transition-transform duration-500">
        {/* Top Row Cards */}
        <div className="flex gap-4">
          <div className="flex-1 bg-background border border-border/50 rounded-xl p-4">
            <div className="text-[10px] text-muted-foreground font-semibold mb-1">Total Balance</div>
            <div className="text-xl font-bold">₹72,450.00</div>
            <div className="text-[10px] text-success mt-1">↑ 12.5% from last month</div>
          </div>
          <div className="flex-1 bg-background border border-border/50 rounded-xl p-4 relative overflow-hidden">
            <div className="text-[10px] text-muted-foreground font-semibold mb-2">Spending</div>
            <svg className="w-full h-10 stroke-primary absolute bottom-0 left-0" viewBox="0 0 100 30" fill="none">
              <path d="M0 25 C 20 15, 40 30, 60 20 C 80 10, 90 25, 100 5" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        {/* Bottom Card */}
        <div className="bg-background border border-border/50 rounded-xl p-4 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold mb-2">Top Categories</div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground"><span className="w-2 h-2 rounded-full bg-ai"></span>Food & Dining (35%)</div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground"><span className="w-2 h-2 rounded-full bg-primary"></span>Transport (25%)</div>
            </div>
          </div>
          <div className="w-16 h-16 rounded-full border-[5px] border-secondary border-t-ai border-r-primary rotate-45"></div>
        </div>
      </div>
    </div>
  );
}