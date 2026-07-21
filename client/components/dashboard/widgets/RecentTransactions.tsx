import React from "react";
import { MonitorPlay, Briefcase, ShoppingCart, Car, Zap } from "lucide-react";

const transactions = [
  {
    id: 1,
    merchant: "Netflix",
    category: "Entertainment",
    amount: "-$15.99",
    date: "Today, 10:30 AM",
    isIncome: false,
    icon: MonitorPlay,
    iconBg: "bg-red-500/10",
    iconColor: "text-red-500",
    catBg: "bg-purple-500/10",
    catColor: "text-purple-500",
  },
  {
    id: 2,
    merchant: "Salary",
    category: "Income",
    amount: "+$2,400.00",
    date: "Yesterday, 09:00 AM",
    isIncome: true,
    icon: Briefcase,
    iconBg: "bg-green-500/10",
    iconColor: "text-green-500",
    catBg: "bg-green-500/10",
    catColor: "text-green-500",
  },
  {
    id: 3,
    merchant: "Grocery Store",
    category: "Food & Dining",
    amount: "-$84.75",
    date: "22 Jun 2024",
    isIncome: false,
    icon: ShoppingCart,
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
    catBg: "bg-emerald-500/10",
    catColor: "text-emerald-500",
  },
  {
    id: 4,
    merchant: "Uber",
    category: "Transport",
    amount: "-$18.50",
    date: "22 Jun 2024",
    isIncome: false,
    icon: Car,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    catBg: "bg-yellow-500/10",
    catColor: "text-yellow-600 dark:text-yellow-500",
  },
  {
    id: 5,
    merchant: "Electricity Bill",
    category: "Bills & Utilities",
    amount: "-$120.00",
    date: "21 Jun 2024",
    isIncome: false,
    icon: Zap,
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-500",
    catBg: "bg-indigo-500/10",
    catColor: "text-indigo-500",
  },
];

export default function RecentTransactions() {
  return (
    <div className="w-full overflow-x-auto mt-4">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border/50 text-muted-foreground">
            <th className="pb-3 font-medium">Merchant</th>
            <th className="pb-3 font-medium">Category</th>
            <th className="pb-3 font-medium">Amount</th>
            <th className="pb-3 font-medium hidden sm:table-cell">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-b border-border/20 last:border-0 hover:bg-secondary/30 transition-colors">
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${tx.iconBg}`}>
                    <tx.icon className={`w-4 h-4 ${tx.iconColor}`} />
                  </div>
                  <span className="font-bold text-foreground">{tx.merchant}</span>
                </div>
              </td>
              <td className="py-3">
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${tx.catBg} ${tx.catColor}`}>
                  {tx.category}
                </span>
              </td>
              <td className={`py-3 font-bold ${tx.isIncome ? "text-green-500" : "text-red-500"}`}>
                {tx.amount}
              </td>
              <td className="py-3 text-muted-foreground text-xs hidden sm:table-cell">
                {tx.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}