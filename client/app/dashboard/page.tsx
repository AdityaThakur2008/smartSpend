"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import DashboardHeader from "@/components/dashboard/dashboardCMP/DashboardHeader";
import DashboardStats from "@/components/dashboard/dashboardCMP/DashboardStats";
import IncomeExpenseChart from "@/components/dashboard/dashboardCMP/IncomeExpenseChart";
import CategoryExpenseChart from "@/components/dashboard/dashboardCMP/CategoryExpenseChart";
import CurrentMonthCard from "@/components/dashboard/dashboardCMP/CurrentMonthCard";
import RecentTransactions from "@/components/dashboard/dashboardCMP/RecentTransactions";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import dashboardService from "@/services/dashboard.service";
import type {
  CategorySummary,
  CurrentMonthSummary,
  CurrentMonthSummaryResponse,
  DashboardSummary,
  DashboardSummaryByCategoryResponse,
  DashboardSummaryResponse,
  MonthlySummaryItem,
  MonthlySummaryResponse,
} from "@/types/dashboard";

export default function DashboardPage() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [categories, setCategories] = useState<CategorySummary[]>([]);
  const [currentMonth, setCurrentMonth] = useState<CurrentMonthSummary | null>(
    null,
  );
  const [monthlySummary, setMonthlySummary] = useState<MonthlySummaryItem[]>(
    [],
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [summaryRes, categoryRes, currentMonthRes, monthlyRes] =
          await Promise.all([
            dashboardService.getSummary(),
            dashboardService.getSummaryByCategory(),
            dashboardService.getCurrentMonthSummary(),
            dashboardService.getMonthlySummary(),
          ]);

        setSummary((summaryRes as DashboardSummaryResponse).data);
        setCategories((categoryRes as DashboardSummaryByCategoryResponse).data);
        setCurrentMonth(
          (currentMonthRes as CurrentMonthSummaryResponse).data ?? null,
        );
        setMonthlySummary((monthlyRes as MonthlySummaryResponse).data);
      } catch (error) {
        toast.error("Failed to load dashboard data. Please refresh the page.");

      } finally {
        setLoading(false);
      }
    };

    void loadDashboardData();
  }, []);

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="space-y-6 pb-10">
      <DashboardHeader
        title="Dashboard"
        description="Track your financial health at a glance."
      />

      <DashboardStats summary={summary} loading={loading} />

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">
              Income vs Expense
            </h2>
          </div>
          <IncomeExpenseChart data={monthlySummary} />
        </section>

        <section className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">
              Spending by Category
            </h2>
          </div>
          <CategoryExpenseChart data={categories} />
        </section>

        <section className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">
              Recent Transactions
            </h2>
          </div>
          <RecentTransactions
            transactions={summary?.recentTransactions ?? []}
            loading={loading}
          />
        </section>

        <section className="space-y-4">
          <CurrentMonthCard summary={currentMonth} loading={loading} />
        </section>
      </div>
    </div>
  );
}
