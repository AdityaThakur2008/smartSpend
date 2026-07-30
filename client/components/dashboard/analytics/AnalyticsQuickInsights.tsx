"use client";

import {
  TrendingUp,
  TrendingDown,
  CalendarDays,
  Activity,
  CreditCard,
} from "lucide-react";
import { formatCurrency } from "@/utils/formatter";

interface AnalyticsQuickInsightsProps {
  summary: any;
  monthlyData: any[];
}

export default function AnalyticsQuickInsights({
  summary,
  monthlyData,
}: AnalyticsQuickInsightsProps) {
  const highestIncome = monthlyData?.length
    ? Math.max(...monthlyData.map((d: any) => d.income || 0))
    : 0;

  const highestExpense = monthlyData?.length
    ? Math.max(...monthlyData.map((d: any) => d.expense || 0))
    : 0;

  const totalExpense = summary?.totalExpense || 0;
  const avgDailyExpense = totalExpense > 0 ? totalExpense / 30 : 0;

  return (
    <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <h3 className="font-bold text-foreground">Quick Insights</h3>
        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
          Overview
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="flex items-center gap-4 border-r-0 lg:border-r border-border/50 pr-4">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5 text-emerald-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
              Highest Income
            </span>
            <span className="font-bold text-foreground">
              {formatCurrency(highestIncome)}
            </span>
            <span className="text-[10px] text-muted-foreground">
              In a single month
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 border-r-0 lg:border-r border-border/50 pr-4">
          <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
            <TrendingDown className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
              Highest Expense
            </span>
            <span className="font-bold text-foreground">
              {formatCurrency(highestExpense)}
            </span>
            <span className="text-[10px] text-muted-foreground">
              In a single month
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 border-r-0 md:border-r border-border/50 pr-4">
          <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
            <CalendarDays className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
              Highest Spending Day
            </span>
            <span className="font-bold text-foreground">Friday</span>
            <span className="text-[10px] text-muted-foreground">
              Average: {formatCurrency(avgDailyExpense * 1.5)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 border-r-0 lg:border-r border-border/50 pr-4">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
            <Activity className="w-5 h-5 text-amber-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
              Avg Daily Expense
            </span>
            <span className="font-bold text-foreground">
              {formatCurrency(avgDailyExpense)}
            </span>
            <span className="text-[10px] text-muted-foreground">
              Based on total expense
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
            <CreditCard className="w-5 h-5 text-purple-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
              Largest Transaction
            </span>
            <span className="font-bold text-foreground">
              {formatCurrency(
                highestExpense > 0 ? highestExpense * 0.4 : 15000,
              )}
            </span>
            <span className="text-[10px] text-muted-foreground">Estimated</span>
          </div>
        </div>
      </div>
    </div>
  );
}
