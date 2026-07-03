import prisma from "../lib/prisma.js";
import AppError from "../utils/appError.js";
import {
  formatTransaction,
  formatTransactions,
} from "../utils/transactionFormatter.js";

class DashboardService {
  async summary(userId) {
    const totalIncome = await prisma.transaction.aggregate({
      where: { userId, type: "INCOME" },
      _sum: { amount: true },
    });
    const totalExpense = await prisma.transaction.aggregate({
      where: { userId, type: "EXPENSE" },
      _sum: { amount: true },
    });
    const totalTransactions = await prisma.transaction.count({
      where: { userId },
    });
    const totalBalance =
      (totalIncome._sum.amount || 0) - (totalExpense._sum.amount || 0);
    const recentTransactions = await prisma.transaction.findMany({
      where: { userId },
      orderBy: { date: "desc" },
      take: 5,
    });

    return {
      totalIncome: totalIncome._sum.amount || 0,
      totalExpense: totalExpense._sum.amount || 0,
      totalBalance,
      totalTransactions,
      recentTransactions: formatTransactions(recentTransactions),
    };
  }

  async summaryByCategory(userId) {
    const summaryByCategory = await prisma.transaction.groupBy({
      by: ["category"],
      where: { userId, type: "EXPENSE" },
      _sum: { amount: true },
      orderBy: { _sum: { amount: "desc" } },
    });

    const formattedSummary = summaryByCategory.map((item) => ({
      category: item.category,
      totalAmount: item._sum.amount || 0,
    }));
    return formattedSummary;
  }

  async currentMonthSummery(userId) {
    const currentDate = new Date();

    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1,
    );
    const endOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1,
    );

    const [monthlyIncome, monthlyExpense] = await Promise.all([
      prisma.transaction.aggregate({
        where: {
          userId,
          type: "INCOME",
          date: {
            gte: startOfMonth,
            lt: endOfMonth,
          },
        },
        _sum: { amount: true },
      }),
      prisma.transaction.aggregate({
        where: {
          userId,
          type: "EXPENSE",
          date: {
            gte: startOfMonth,
            lt: endOfMonth,
          },
        },
        _sum: { amount: true },
      }),
    ]);

    return {
      currentMonth: {
        Income: monthlyIncome._sum.amount || 0,
        Expense: monthlyExpense._sum.amount || 0,
        Balance:
          (monthlyIncome._sum.amount || 0) - (monthlyExpense._sum.amount || 0),
      },
    };
  }

  async monthlySummary(userId) {
    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
    const endOfYear = new Date(currentDate.getFullYear() + 1, 0, 1);

    const monthlyExpenseSummary = await prisma.transaction.findMany({
      where: {
        userId,
        type: "EXPENSE",
        date: {
          gte: startOfYear,
          lt: endOfYear,
        },
      },
      select: {
        date: true,
        amount: true,
      },
    });

    const monthlyIncomeSummary = await prisma.transaction.findMany({
      where: {
        userId,
        type: "INCOME",
        date: {
          gte: startOfYear,
          lt: endOfYear,
        },
      },
      select: {
        date: true,
        amount: true,
      },
    });

    const summaryMap = {};

    for (let month = 1; month <= 12; month++) {
      summaryMap[month] = { income: 0, expense: 0 };
    }

    monthlyExpenseSummary.forEach((transaction) => {
      const month = transaction.date.getMonth() + 1;
      summaryMap[month].expense += transaction.amount;
    });

    monthlyIncomeSummary.forEach((transaction) => {
      const month = transaction.date.getMonth() + 1;
      summaryMap[month].income += transaction.amount;
    });

    const result = Object.entries(summaryMap).map(([month, data]) => ({
      month: new Date(
        currentDate.getFullYear(),
        Number(month) - 1,
        1,
      ).toLocaleString("en-US", { month: "long" }),
      income: data.income,
      expense: data.expense,
    }));

    return result;
  }
}
export default new DashboardService();
