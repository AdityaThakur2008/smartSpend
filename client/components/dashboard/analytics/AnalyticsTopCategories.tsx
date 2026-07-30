

import { formatCurrency } from "@/utils/formatter";
import { CategorySummary } from "@/types/dashboard";

interface AnalyticsTopCategoriesProps {
  data: CategorySummary[];
}

const COLORS = [
  "#10b981",
  "#3b82f6",
  "#f59e0b",
  "#8b5cf6",
  "#ef4444",
  "#64748b",
];

export default function AnalyticsTopCategories({
  data,
}: AnalyticsTopCategoriesProps) {
  const totalAmount = data.reduce(
    (sum, item) => sum + Number(item.totalAmount),
    0,
  );

  const sortedData = [...data]
    .sort((a, b) => b.totalAmount - a.totalAmount)
    .slice(0, 5);
  return (
    <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col">
      <h3 className="font-bold text-foreground mb-6">
        Top Spending Categories
      </h3>

      <div className="flex-1 flex flex-col gap-6 justify-center">
        {sortedData.length > 0 ? (
          sortedData.map((item, index) => {
            const percentage =
              totalAmount > 0
                ? ((item.totalAmount / totalAmount) * 100).toFixed(1)
                : "0";
            const barColor = COLORS[index % COLORS.length];

            return (
              <div key={item.category} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-foreground capitalize">
                    {item.category?.toLowerCase()}
                  </span>
                  <div className="flex gap-3 text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {formatCurrency(item.totalAmount)}
                    </span>
                    <span className="w-10 text-right">{percentage}%</span>
                  </div>
                </div>

                <div className="w-full bg-secondary/50 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: barColor,
                    }}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground text-sm">
            No expenses found.
          </div>
        )}
      </div>
    </div>
  );
}
