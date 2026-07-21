"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dummy data based on the image
const data = [
  { date: "1 Jun", income: 1000, expense: 800 },
  { date: "5 Jun", income: 2200, expense: 1200 },
  { date: "10 Jun", income: 3000, expense: 1900 },
  { date: "15 Jun", income: 4250, expense: 1850 },
  { date: "20 Jun", income: 3800, expense: 2400 },
  { date: "25 Jun", income: 5100, expense: 1900 },
  { date: "30 Jun", income: 6000, expense: 2800 },
];

export default function IncomeExpenseChart() {
  return (
    <div className="w-full h-full min-h-[250px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          {/* Background Grid Lines */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.5} />
          
          {/* X & Y Axes */}
          <XAxis 
            dataKey="date" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          
          {/* Custom Tooltip */}
          <Tooltip
            contentStyle={{ backgroundColor: "var(--card)", borderRadius: "12px", border: "1px solid var(--border)", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
            itemStyle={{ fontSize: "12px", fontWeight: "bold" }}
            labelStyle={{ fontSize: "12px", color: "var(--muted-foreground)", marginBottom: "4px" }}
          />

          {/* Income Line (Green) */}
          <Area
            type="monotone"
            dataKey="income"
            name="Income"
            stroke="#10b981" // Tailwind emerald-500
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorIncome)"
          />
          
          {/* Expense Line (Red) */}
          <Area
            type="monotone"
            dataKey="expense"
            name="Expense"
            stroke="#ef4444" // Tailwind red-500
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorExpense)"
          />

          {/* Gradients for the Area fill */}
          <defs>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}