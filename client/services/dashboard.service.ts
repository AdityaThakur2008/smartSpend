import Api from "@/lib/axios";
import type {
  AIInsightsResponse,
  CurrentMonthSummaryResponse,
  DashboardSummaryByCategoryResponse,
  DashboardSummaryResponse,
  MonthlySummaryResponse,
} from "@/types/dashboard";

class DashboardService {
  async getSummary(): Promise<DashboardSummaryResponse> {
    const response =
      await Api.get<DashboardSummaryResponse>("/dashboard/summary");
    return response.data;
  }

  async getSummaryByCategory(): Promise<DashboardSummaryByCategoryResponse> {
    const response = await Api.get<DashboardSummaryByCategoryResponse>(
      "/dashboard/summary-by-category",
    );
    return response.data;
  }

  async getCurrentMonthSummary(): Promise<CurrentMonthSummaryResponse> {
    const response = await Api.get<CurrentMonthSummaryResponse>(
      "/dashboard/current-month-summary",
    );
    return response.data;
  }

  async getMonthlySummary(): Promise<MonthlySummaryResponse> {
    const response = await Api.get<MonthlySummaryResponse>(
      "/dashboard/monthly-summary",
    );
    return response.data;
  }

  
}

export default new DashboardService();
