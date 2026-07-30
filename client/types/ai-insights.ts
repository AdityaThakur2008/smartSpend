// types/ai-insights.ts

export interface AIInsightsData {
  overallSpending: string;
  overspendingCategories: string;
  savingsAndBudget: string;
  practicalTips: string[];
}

export interface AIInsightsResponse {
  success: boolean;
  message: string;
  data: {
    
    insights: string;
  };
}