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

Analyze the user's financial data below and provide actionable insights.

CRITICAL INSTRUCTION:
You MUST return ONLY a valid, raw JSON object. 
Do NOT include any markdown formatting (like \`\`\`json).
Do NOT include any introductory or concluding text.
Do NOT use bullet points, markdown, or newline characters (\\n) inside the JSON string values.

Use this exact JSON structure:
{
  "overallSpending": "Analyze overall spending behavior in 2 to 3 simple sentences.",
  "overspendingCategories": "Identify high spending categories and explain why they need attention.",
  "savingsAndBudget": "Provide suggestions for improving savings and managing the budget.",
  "practicalTips": [
    "First actionable financial tip",
    "Second actionable financial tip",
    "Third actionable financial tip"
  ]
}

Rules for the content:
- Keep the total response under 150 words.
- Use simple and easy-to-understand English.
- Address the user directly using "You" or "Your". Do not say "the user".
- Do not mention missing or unavailable data.
- Focus strictly on actionable financial advice.
- Keep a professional and encouraging tone.
- Do not use emojis.

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
`;
  }
}

export default new PromptBuilder();