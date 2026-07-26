"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { CategorySummary } from "@/types/dashboard";

interface CategoryExpenseChartProps {
  data: CategorySummary[];
}

const colors = ["#10b981", "#3b82f6", "#f59e0b", "#8b5cf6", "#ef4444"];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const CategoryExpenseChart = ({ data }: CategoryExpenseChartProps) => {
  if (!data.length) {
    return null;
  }

  const total = data.reduce((sum, item) => sum + item.totalAmount, 0);

  return (
    <div className="mt-4 flex flex-col gap-6 xl:flex-row xl:items-center">
      <div className="h-60 w-full xl:w-1/2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="totalAmount"
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="90%"
              paddingAngle={2}>
              {data.map((entry, index) => (
                <Cell
                  key={`${entry.category}-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => formatCurrency(Number(value ?? 0))}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full xl:w-1/2 space-y-3">
        <div className="rounded-xl border border-border/50 bg-muted/30 p-3 text-sm">
          <p className="text-muted-foreground">Total spent</p>
          <p className="text-lg font-semibold text-foreground">
            {formatCurrency(total)}
          </p>
        </div>
        {data.map((item, index) => (
          <div
            key={item.category}
            className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              <span className="text-foreground">{item.category}</span>
            </div>
            <span className="font-medium text-muted-foreground">
              {formatCurrency(item.totalAmount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryExpenseChart;
