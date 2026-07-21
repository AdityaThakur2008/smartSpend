import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank,
} from "lucide-react";

export const StatsData = [
  {
    title: "Total Balance",
    amount: "$24,560.00",
    trend: "+12.5%",
    trendUp: true,
    icon: Wallet,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Total Income",
    amount: "$5,820.00",
    trend: "+8.4%",
    trendUp: true,
    icon: TrendingUp,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Total Expenses",
    amount: "$2,350.00",
    trend: "-3.7%",
    trendUp: false,
    icon: TrendingDown,
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    title: "Total Savings",
    amount: "$3,470.00",
    trend: "+16.2%",
    trendUp: true,
    icon: PiggyBank,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
] as const;