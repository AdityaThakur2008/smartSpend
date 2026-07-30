"use client";

import { toast } from "sonner";

interface AnalyticsHeaderProps {
  timeRange: string;
  setTimeRange: (range: string) => void;
}

export default function AnalyticsHeader({ timeRange, setTimeRange }: AnalyticsHeaderProps) {
  const ranges = ["7 Days", "30 Days", "3 Months", "6 Months", "1 Year"];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Deep insights into your income and expenses
        </p>
      </div>

      <div className="flex items-center gap-1.5 bg-card border border-border/50 p-1 rounded-xl shadow-sm overflow-x-auto">
        {ranges.map((range) => (
          <button
            key={range}
            onClick={() => {
              setTimeRange(range);
              toast.info("Backend support for date filtering coming soon!");
            }}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              timeRange === range 
                ? "bg-primary text-primary-foreground shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
}