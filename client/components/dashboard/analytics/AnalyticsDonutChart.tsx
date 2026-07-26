"use client";

import { PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";
import { formatCurrency } from "@/utils/fomatter";

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ef4444', '#64748b', '#06b6d4', '#f97316'];

interface AnalyticsDonutChartProps {
  data: any[];
}

export default function AnalyticsDonutChart({ data }: AnalyticsDonutChartProps) {
  return (
    <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col">
      <h3 className="font-bold text-foreground mb-6">Expense by Category</h3>
      
      <div className="flex-1 min-h-[300px] w-full flex flex-col items-center justify-center">
        {data && data.length > 0 ? (
          <>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={1}
                  dataKey="totalAmount"
                  nameKey="category"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  formatter={(value: any) => formatCurrency(value)}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="w-full mt-4 flex flex-wrap justify-center gap-3">
              {data.map((item, index) => (
                <div key={item.category} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                  <span className="capitalize">{item.category?.toLowerCase()}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground text-sm">
            No expenses found.
          </div>
        )}
      </div>
    </div>
  );
}