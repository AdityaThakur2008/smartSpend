"use client";

import { useState } from "react";
import { AIInsightsData } from "@/types/ai-insights";
import AiInsightsService from "@/services/AiInsights.service";
import {toast} from "sonner"

import AiHeader from "@/components/dashboard/Ai-insights/AiHeader";
import EmptyState from "@/components/dashboard/Ai-insights/EmptyState";
import AiData from "@/components/dashboard/Ai-insights/AiData";

export default function AIInsightsPage() {
  const [data, setData] = useState<AIInsightsData | null>(null);
  const [loading, setLoading] = useState(false);


  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await AiInsightsService.generateInsights();

      if (response.success) {
        const parsedData =
          typeof response.data.insights === "string"
            ? JSON.parse(response.data.insights)
            : response.data.insights;

        setData(parsedData);
      }
    } catch  {
      toast.error("Failed to fetch insights");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-500 max-w-7xl mx-auto">
      <AiHeader handleGenerate={handleGenerate} loading={loading} />

      <EmptyState data={data} loading={loading} />

      <AiData data={data} loading={loading} />
    </div>
  );
}
