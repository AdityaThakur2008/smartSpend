import React from "react";
import StatCards from "@/components/dashboard/widgets/StatCards";
import IncomeExpenseChart from "@/components/dashboard/widgets/IncomeExpenseChart";
import CategoryChart from "@/components/dashboard/widgets/CategoryChart";
import RecentTransactions from "@/components/dashboard/widgets/RecentTransactions";
import MonthlyBudget from "@/components/dashboard/widgets/MonthlyBudget";
import AiInsightsCard from "@/components/dashboard/widgets/AiInsightsCard"; // NEW
import QuickActions from "@/components/dashboard/widgets/QuickActions"; // NEW

export const metadata = {
  title: "Dashboard - SmartSpend",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6 pb-10">
      
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
      </div>

      {/* Top 4 Stats */}
      <StatCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ROW 1 */}
        <div className="lg:col-span-2 bg-card border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-foreground">Income vs Expense</h3>
            <span className="px-3 py-1 bg-secondary rounded-lg text-xs font-semibold cursor-pointer">This Month v</span>
          </div>
          <IncomeExpenseChart />
        </div>
        <div className="lg:col-span-1 bg-card border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-foreground">Spending by Category</h3>
            <span className="px-3 py-1 bg-secondary rounded-lg text-xs font-semibold cursor-pointer">This Month v</span>
          </div>
          <CategoryChart />
        </div>

        {/* ROW 2 */}
        <div className="lg:col-span-2 bg-card border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-foreground">Recent Transactions</h3>
            <button className="px-3 py-1 border border-border/50 hover:bg-secondary rounded-lg text-xs font-semibold transition-colors">
              View All
            </button>
          </div>
          <RecentTransactions />
        </div>
        <div className="lg:col-span-1 bg-card border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-foreground">Monthly Budget</h3>
            <button className="px-3 py-1 border border-border/50 hover:bg-secondary rounded-lg text-xs font-semibold transition-colors">
              View All
            </button>
          </div>
          <MonthlyBudget />
        </div>

        {/* ROW 3 (NEW) */}
        <div className="lg:col-span-2 bg-gradient-to-r from-ai/5 to-transparent border border-ai/20 rounded-2xl p-6 shadow-sm flex flex-col relative overflow-hidden">
          <h3 className="font-bold text-foreground flex items-center gap-2">
             ✨ AI Insights
          </h3>
          <AiInsightsCard />
        </div>

        <div className="lg:col-span-1 bg-card border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col">
          <h3 className="font-bold text-foreground">Quick Actions</h3>
          <QuickActions />
        </div>

      </div>
    </div>
  );
}