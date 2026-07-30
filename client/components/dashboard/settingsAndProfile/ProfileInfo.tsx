import { format } from "date-fns";
import { formatCurrency } from "@/utils/formatter";
import {
  LogOut,
  User,
  Mail,
  CalendarDays,
  Wallet,
  TrendingUp,
  TrendingDown,
  Loader2,
  Moon,
  Sun,
  Globe,
  AlertTriangle,
} from "lucide-react";
import type { DashboardSummary } from "@/types/dashboard";

interface ProfileInfoProps {
  user: any;
  summary: DashboardSummary | null;
}

export default function ProfileInfo({ user, summary }: ProfileInfoProps) {
  return (
    <div className="p-6 space-y-6">
      {/* Basic Info */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-secondary overflow-hidden border-2 border-background shadow-sm shrink-0">
          <img
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.name}&backgroundColor=c0aede`}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground capitalize">
            {user?.name || "Kaliram Patil"}
          </h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />{" "}
              {user?.email || "kaliram@example.com"}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5" /> Joined{" "}
              {user?.createdAt
                ? format(new Date(user.createdAt), "MMM yyyy")
                : "Recently"}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border/30">
        <div className="bg-secondary/30 rounded-xl p-4">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <Wallet className="w-4 h-4" />{" "}
            <span className="text-xs font-medium">Total Transactions</span>
          </div>
          <p className="text-lg font-bold text-foreground">
            {summary?.totalTransactions || 0}
          </p>
        </div>

        <div className="bg-emerald-500/5 rounded-xl p-4">
          <div className="flex items-center gap-2 text-emerald-500 mb-1">
            <TrendingUp className="w-4 h-4" />{" "}
            <span className="text-xs font-medium">Total Income</span>
          </div>
          <p className="text-lg font-bold text-emerald-600 dark:text-emerald-500">
            {formatCurrency(summary?.totalIncome || 0)}
          </p>
        </div>

        <div className="bg-red-500/5 rounded-xl p-4">
          <div className="flex items-center gap-2 text-red-500 mb-1">
            <TrendingDown className="w-4 h-4" />{" "}
            <span className="text-xs font-medium">Total Expense</span>
          </div>
          <p className="text-lg font-bold text-red-600 dark:text-red-500">
            {formatCurrency(summary?.totalExpense || 0)}
          </p>
        </div>
      </div>
    </div>
  );
}
