"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
} from "recharts";
import type { CategorySummary } from "@/types/dashboard";
import { ChartColor } from "@/utils/chartColors";

interface CategoryExpenseChartProps {
  data: CategorySummary[];
}

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

  return (
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
                nameKey="category">
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={ChartColor[index % ChartColor.length]}
                  />
                ))}
              </Pie>
              <RechartsTooltip
                formatter={(value) => {
                  return formatCurrency(Number(value));
                }}
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="w-full mt-4 flex flex-wrap justify-center gap-3">
            {data.map((item, index) => (
              <div
                key={item.category}
                className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor: ChartColor[index % ChartColor.length],
                    }}
                  />
                  <span className="text-foreground">{item.category}</span>
                </div>
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
  );
};

export default CategoryExpenseChart;
