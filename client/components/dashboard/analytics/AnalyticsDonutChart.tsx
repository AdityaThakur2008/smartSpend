"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";
import { formatCurrency } from "@/utils/formatter";
import { ChartColor } from "@/utils/chartColors";

interface AnalyticsDonutChartProps {
  data: any[];
}

export default function AnalyticsDonutChart({
  data,
}: AnalyticsDonutChartProps) {
  const total = data.reduce((sum, item) => sum + item.totalAmount, 0);

  return (
    <div className=" flex flex-col gap-6 xl:flex-row xl:items-center border border-border/50 rounded-2xl p-6 shadow-sm ">
      <div className="h-60 w-full xl:w-1/2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="totalAmount"
              nameKey="category"
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="90%"
              paddingAngle={2}>
              {data.map((entry, index) => (
                <Cell
                  key={`${entry.category}-${index}`}
                  fill={ChartColor[index % ChartColor.length]}
                />
              ))}
            </Pie>
            <RechartsTooltip
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
            className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 ">
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: ChartColor[index % ChartColor.length],
                }}></div>
              <span className="capitalize">{item.category?.toLowerCase()}</span>
              <span className="font-medium text-muted-foreground">
                {formatCurrency(item.totalAmount)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
