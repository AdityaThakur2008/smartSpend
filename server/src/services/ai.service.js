import dashboardService from "./dashboard.service.js";
import PromptBuilder from "../utils/promptBuilder.js";
import GeminiProvider from "../providers/gemini.provider.js";

class AIService {
  async getInsights(userId) {
    const [summary, summaryByCategory, currentMonthSummary, monthlySummary] =
      await Promise.all([
        dashboardService.summary(userId),
        dashboardService.summaryByCategory(userId),
        dashboardService.currentMonthSummery(userId),
        dashboardService.monthlySummary(userId),
      ]);
    const userInsights = {
      totalIncome: summary.totalIncome,
      totalExpense: summary.totalExpense,
      totalBalance: summary.totalBalance,
      totalTransactions: summary.totalTransactions,
      topSpendingCategories: summaryByCategory.slice(0, 3),
      currentMonthSummary,
      monthlySummary,
    };

    const prompt = PromptBuilder.buildFinancialInsightsPrompt(userInsights);

    const insights = await GeminiProvider.generateContent(prompt);
    return insights;
  }
}


export default new AIService();