import { TransactionType, TransactionCategory } from "./dashboard";


export interface ITransaction {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  note?: string;
  date?: Date | string;
}


export interface IPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}


export interface PaginatedTransactionResponse {
  success: boolean;
  message: string;
  result: {
    data: ITransaction[];
    pagination: IPagination;
  };
}


export interface SingleTransactionResponse {
  success: boolean;
  message: string;
  data: ITransaction;
}

export interface FetchTransactionsParams {
  page?: number;
  limit?: number;
  type?: TransactionType | "ALL";
  category?: TransactionCategory | "ALL";
  search?: string;
}