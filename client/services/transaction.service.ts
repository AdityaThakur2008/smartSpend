import Api from "@/lib/axios";
import { TransactionType, TransactionCategory } from "@/types/dashboard";
import type { 
  PaginatedTransactionResponse, 
  SingleTransactionResponse 
} from "@/types/transaction"; 

export interface FetchTransactionsParams {
  page?: number;
  limit?: number;
  type?: TransactionType | "ALL";
  category?: TransactionCategory | "ALL";
  search?: string;
}

class TransactionService {
  
 
  async getTransactions(params: FetchTransactionsParams): Promise<PaginatedTransactionResponse> {
    const queryParams: any = { ...params };
    
    if (queryParams.type === "ALL") delete queryParams.type;
    if (queryParams.category === "ALL") delete queryParams.category;
    if (!queryParams.search) delete queryParams.search;

    const response = await Api.get<PaginatedTransactionResponse>("/transactions", { 
      params: queryParams 
    });
    
    return response.data;
  }

  async createTransaction(data: any): Promise<SingleTransactionResponse> {
    const response = await Api.post<SingleTransactionResponse>("/transactions", data);
    return response.data;
  }

  async deleteTransaction(id: string): Promise<SingleTransactionResponse> {
    const response = await Api.delete<SingleTransactionResponse>(`/transactions/${id}`);
    return response.data;
  }
}

export default new TransactionService();