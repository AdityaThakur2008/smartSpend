import React from "react";
import { Utensils, ShoppingBag, Car, MonitorPlay } from "lucide-react";

const budgets = [
  {
    category: "Food & Dining",
    spent: 350,
    total: 500,
    icon: Utensils,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    barColor: "bg-emerald-500",
  },
  {
    category: "Shopping",
    spent: 225,
    total: 500,
    icon: ShoppingBag,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    barColor: "bg-blue-500",
  },
  {
    category: "Transport",
    spent: 80,
    total: 400,
    icon: Car,
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-500",
    barColor: "bg-yellow-500",
  },
  {
    category: "Entertainment",
    spent: 60,
    total: 200,
    icon: MonitorPlay,
    iconBg: "bg-red-500/10",
    iconColor: "text-red-500",
    barColor: "bg-red-500",
  },
];

export default function MonthlyBudget() {
  return (
    <div className="flex flex-col gap-6 mt-4">
      {budgets.map((budget, index) => {
        const percentage = Math.round((budget.spent / budget.total) * 100);
        
        return (
          <div key={index} className="flex flex-col gap-2">
            
            {/* Top Row: Icon, Name, and Values */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${budget.iconBg}`}>
                  <budget.icon className={`w-4 h-4 ${budget.iconColor}`} />
                </div>
                <span className="text-sm font-bold text-foreground">{budget.category}</span>
              </div>
              <div className="text-xs text-muted-foreground flex items-center gap-3">
                <span className="font-semibold text-foreground">${budget.spent} <span className="text-muted-foreground font-normal">/ ${budget.total}</span></span>
                <span className="font-bold">{percentage}%</span>
              </div>
            </div>

            {/* Bottom Row: Progress Bar */}
            <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden ml-11" style={{ width: 'calc(100% - 44px)' }}>
              <div 
                className={`h-full rounded-full ${budget.barColor}`} 
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            
          </div>
        );
      })}
    </div>
  );
}