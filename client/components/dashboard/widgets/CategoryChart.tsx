"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Food & Dining", value: 35, color: "#10b981" }, // Green
  { name: "Shopping", value: 25, color: "#3b82f6" },      // Blue
  { name: "Transport", value: 15, color: "#f59e0b" },     // Yellow
  { name: "Bills & Utilities", value: 15, color: "#8b5cf6" }, // Purple
  { name: "Entertainment", value: 10, color: "#ef4444" }, // Red
];

export default function CategoryChart() {
  return (
    <div className="flex flex-col xl:flex-row items-center gap-6 mt-4 h-[250px]">
      
      {/* Chart Section */}
      <div className="relative w-full xl:w-1/2 h-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={85}
              paddingAngle={4}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: "var(--card)", borderRadius: "8px", border: "1px solid var(--border)", fontSize: "12px" }}
              itemStyle={{ fontWeight: "bold" }}
            />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-xl font-bold text-foreground">$2,350</span>
          <span className="text-[10px] text-muted-foreground">Total</span>
        </div>
      </div>

      {/* Legend Section */}
      <div className="w-full xl:w-1/2 flex flex-col justify-center gap-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span 
                className="w-2.5 h-2.5 rounded-full" 
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="font-medium text-foreground">{item.name}</span>
            </div>
            <span className="font-bold text-muted-foreground">{item.value}%</span>
          </div>
        ))}
      </div>
      
    </div>
  );
}