import type { CurrentMonthSummary } from "@/types/dashboard";

interface CurrentMonthCardProps {
  summary: CurrentMonthSummary | null;
  loading: boolean;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const CurrentMonthCard = ({ summary, loading }: CurrentMonthCardProps) => {
  if (loading || !summary) {
    return null;
  }

  const currentMonth = summary.currentMonth;

  return (
    <div className="rounded-2xl border border-border/50 bg-card p-5 shadow-sm">
      <p className="text-sm font-medium text-muted-foreground">Current month</p>
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Income</span>
          <span className="font-semibold text-foreground">
            {formatCurrency(currentMonth.income)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Expense</span>
          <span className="font-semibold text-foreground">
            {formatCurrency(currentMonth.expense)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Balance</span>
          <span className="font-semibold text-foreground">
            {formatCurrency(currentMonth.balance)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurrentMonthCard;
