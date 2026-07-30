import { AIInsightsData } from "@/types/ai-insights";
import { Wallet, TrendingDown, Target, Lightbulb } from "lucide-react";

interface AiDataProps {
  data: AIInsightsData | null;
  loading: boolean;
}

export default function AiData({ data, loading }: AiDataProps) {
  return (
    <div>
      {data && !loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Card 1: Overall Spending */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                <Wallet className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Overall Spending
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {data.overallSpending}
            </p>
          </div>

          {/* Card 2: Overspending Areas */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-500/10 rounded-xl text-red-500">
                <TrendingDown className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Focus Areas
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {data.overspendingCategories}
            </p>
          </div>

          {/* Card 3: Savings Strategy (Full Width) */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Savings & Budget Strategy
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {data.savingsAndBudget}
            </p>
          </div>

          {/* Card 4: Practical Tips (Full Width with distinct background) */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-sm md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary">
                Actionable Tips for You
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.practicalTips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-4 border border-primary/10 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary text-xs font-bold mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-sm text-foreground">{tip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
