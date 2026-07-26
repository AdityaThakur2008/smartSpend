"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import DashboardService from "@/services/dashboard.service";

// 🔥 Import all your new dumb components
import AnalyticsHeader from "@/components/dashboard/analytics/AnalyticsHeader";
import AnalyticsSummaryCards from "@/components/dashboard/analytics/AnalyticsSummaryCards";
import AnalyticsBarChart from "@/components/dashboard/analytics/AnalyticsBarChart";
import AnalyticsDonutChart from "@/components/dashboard/analytics/AnalyticsDonutChart";
import AnalyticsLineChart from "@/components/dashboard/analytics/AnalyticsLineChart";
import AnalyticsTopCategories from "@/components/dashboard/analytics/AnalyticsTopCategories";
import AnalyticsQuickInsights from "@/components/dashboard/analytics/AnalyticsQuickInsights";

export default function AnalyticsPage() {
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState("30 Days");

  // Data States
  const [summary, setSummary] = useState<any>(null);
  const [categoryData, setCategoryData] = useState<any[]>([]);
  const [monthlyData, setMonthlyData] = useState<any[]>([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);

        const [summaryRes, categoryRes, monthlyRes] = await Promise.all([
          DashboardService.getSummary(),
          DashboardService.getSummaryByCategory(),
          DashboardService.getMonthlySummary(),
        ]);

        setSummary(summaryRes?.data || summaryRes);
        setCategoryData(categoryRes?.data || categoryRes || []);
        setMonthlyData(monthlyRes?.data || monthlyRes || []);
      } catch (error) {
        toast.error("Failed to load analytics data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-500 max-w-7xl mx-auto">
      {/* 1. Header component */}
      <AnalyticsHeader timeRange={timeRange} setTimeRange={setTimeRange} />

      {/* 2. Top Summary Cards */}
      <AnalyticsSummaryCards summary={summary} loading={loading} />

      {/* 3. Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Row 1 */}
        <AnalyticsBarChart data={monthlyData} />
        <AnalyticsDonutChart data={categoryData} />

        {/* Row 2: Monthly Trend (Line Chart) */}
        <AnalyticsLineChart data={monthlyData} />
        <AnalyticsTopCategories data={categoryData} />
      </div>
      {/* 3. Quick Stats Section */}
      <AnalyticsQuickInsights summary={summary} monthlyData={monthlyData} />
    </div>
  );
}
