import React from "react";


export const metadata = {
  title: "Dashboard - SmartSpend",
  description: "Your personal dashboard on SmartSpend",
};

export default function Dashboard() {
  return (
    
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Page Title */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Overview</h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening with your finances today.
          </p>
        </div>

        {/* Placeholder Cards to see the layout working */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border/60 rounded-2xl p-6 h-32 shadow-sm">
            Card 1
          </div>
          <div className="bg-card border border-border/60 rounded-2xl p-6 h-32 shadow-sm">
            Card 2
          </div>
          <div className="bg-card border border-border/60 rounded-2xl p-6 h-32 shadow-sm">
            Card 3
          </div>
        </div>

        <div className="bg-card border border-border/60 rounded-2xl p-6 h-96 shadow-sm">
          Big Chart Area
        </div>
      </div>
    
  );
}
