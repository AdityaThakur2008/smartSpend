import { Wallet, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";
import type { DashboardSummary } from "@/types/dashboard";
import{ formatCurrency}  from "@/utils/fomatter"

interface AnalyticsSummaryCardProps {
  summary: DashboardSummary | null;
  loading: boolean;
}



const AnalyticsSummaryCards = ({ summary, loading }: AnalyticsSummaryCardProps) => {
  if (loading || !summary) {
    return null;
  }

  const stats = [
    {
      title: "Total Balance",
      value: formatCurrency(summary.totalBalance),
      icon: Wallet,
      accent: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Total Income",
      value: formatCurrency(summary.totalIncome),
      icon: TrendingUp,
      accent: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      title: "Total Expense",
      value: formatCurrency(summary.totalExpense),
      icon: TrendingDown,
      accent: "text-red-500",
      bg: "bg-red-500/10",
    },
    {
      title: "Total Savings",
      value: formatCurrency(summary.totalSavings),
      icon: PiggyBank,
      accent: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-border/50 bg-card p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className={`rounded-xl p-3 ${stat.bg}`}>
                <Icon className={`h-5 w-5 ${stat.accent}`} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-xl font-semibold text-foreground">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnalyticsSummaryCards;
