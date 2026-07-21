import React from "react";
import { Wallet, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";
import {StatsData} from "@/data/dashboard"


export default function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {StatsData.map((stat, index) => (
        <div key={index} className="bg-card border border-border/50 rounded-2xl p-5 shadow-sm flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg}`}>
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-1">{stat.title}</p>
            <h3 className="text-xl font-bold text-foreground">{stat.amount}</h3>
            <p className={`text-[10px] font-medium mt-1 ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
              {stat.trendUp ? '↑' : '↓'} {stat.trend} <span className="text-muted-foreground font-normal">vs last month</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}