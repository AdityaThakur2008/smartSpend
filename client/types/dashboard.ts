export type TransactionType = "INCOME" | "EXPENSE";

export type TransactionCategory =
  | "FOOD"
  | "TRAVEL"
  | "SHOPPING"
  | "HEALTH"
  | "BILLS"
  | "EDUCATION"
  | "ENTERTAINMENT"
  | "SALARY"
  | "OTHER";

export interface DashboardTransaction {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  note?: string | null;
  date: string;
}

export interface DashboardSummary {
  totalIncome: number;
  totalExpense: number;
  totalBalance: number;
  totalSavings: number;
  totalTransactions: number;
  recentTransactions: DashboardTransaction[];
}

export interface CategorySummary {
  category: TransactionCategory;
  totalAmount: number;
}

export interface CurrentMonthSummaryData {
  income: number;
  expense: number;
  balance: number;
}

export interface CurrentMonthSummary {
  currentMonth: CurrentMonthSummaryData;
}

export interface MonthlySummaryItem {
  month: string;
  income: number;
  expense: number;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}



export type DashboardSummaryResponse = ApiResponse<DashboardSummary>;
export type DashboardSummaryByCategoryResponse = ApiResponse<CategorySummary[]>;
export type CurrentMonthSummaryResponse = ApiResponse<CurrentMonthSummary>;
export type MonthlySummaryResponse = ApiResponse<MonthlySummaryItem[]>;

export interface AIInsightsData {
  insights: string;
}

export type AIInsightsResponse = ApiResponse<AIInsightsData>;
