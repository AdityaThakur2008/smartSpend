class PromptBuilder {
  buildFinancialInsightsPrompt(userInsights) {
    const topCategories = userInsights.topSpendingCategories
      .map(
        (category, index) =>
          `${index + 1}. ${category.category}: ₹${category.totalAmount}`,
      )
      .join("\n");

    const currentMonth = `
Current Month Summary
- Income : ₹${userInsights.currentMonthSummary.currentMonth.income}
- Expense : ₹${userInsights.currentMonthSummary.currentMonth.expense}
- Balance : ₹${userInsights.currentMonthSummary.currentMonth.balance}
`;

    const monthlyTrend = userInsights.monthlySummary
      .map(
        (month) =>
          `${month.month}: Income ₹${month.income}, Expense ₹${month.expense}`,
      )
      .join("\n");

    return `
You are an expert financial advisor.

Your task is to analyze the user's financial data and provide practical, personalized advice.

Rules:
- Keep the response under 150 words.
- Use simple and easy-to-understand English.
- Respond using bullet points.
- Do not mention missing or unavailable data.
- Focus on actionable financial advice.
- Address the user directly. Don't say "the user".
- Say "You".
- Don't use emojis.
- Keep a professional tone.

========================
OVERALL FINANCIAL SUMMARY
========================

Total Income : ₹${userInsights.totalIncome}
Total Expense : ₹${userInsights.totalExpense}
Current Balance : ₹${userInsights.totalBalance}
Total Transactions : ${userInsights.totalTransactions}

========================
TOP SPENDING CATEGORIES
========================

${topCategories}

========================
CURRENT MONTH
========================

${currentMonth}

========================
MONTHLY TREND
========================

${monthlyTrend}

========================
YOUR RESPONSE SHOULD INCLUDE
========================

1. Overall spending analysis.
2. Identify overspending categories.
3. Savings suggestions.
4. Budget recommendations.
5. Three practical financial tips.

`;
  }
}

export default new PromptBuilder();
