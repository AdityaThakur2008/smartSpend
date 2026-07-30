import type { DashboardTransaction } from "@/types/dashboard";

interface RecentTransactionsProps {
  transactions: DashboardTransaction[];
  loading: boolean;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const RecentTransactions = ({
  transactions,
  loading,
}: RecentTransactionsProps) => {
  if (loading) {
    return null;
  }

  if (!transactions.length) {
    return (
      <p className="text-sm text-muted-foreground">No transactions yet.</p>
    );
  }

  return (
    <div className="space-y-3">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between rounded-xl border border-border/50 bg-background/50 p-3">
          <div>
            <p className="font-medium text-foreground">{transaction.title}</p>
            <p className="text-xs text-muted-foreground">
              {transaction.category}
            </p>
          </div>
          <div className="text-right">
            <p
              className={`font-semibold ${transaction.type === "INCOME" ? "text-green-500" : "text-red-500"}`}>
              {transaction.type === "INCOME" ? "+" : "-"}
              {formatCurrency(transaction.amount)}
            </p>
            <p className="text-xs text-muted-foreground">{transaction.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentTransactions;
