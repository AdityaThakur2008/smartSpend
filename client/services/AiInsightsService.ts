import Api from "@/lib/axios";
import type { AIInsightsResponse } from "@/types/ai-insights";

class AiInsightsService {
  async generateInsights(): Promise<AIInsightsResponse> {
    const response = await Api.get<AIInsightsResponse>("/ai/insights");

    return response.data;
  }
}

export default new AiInsightsService();
