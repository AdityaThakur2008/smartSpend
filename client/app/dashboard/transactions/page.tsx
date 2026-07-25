"use client";

import { useState, useEffect } from "react";
import { DateRange } from "react-day-picker";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import TransactionHeader from "@/components/dashboard/transactions/TransactionHeader";
import TransactionFilters from "@/components/dashboard/transactions/TransactionFilters";
import TransactionTable from "@/components/dashboard/transactions/TransactionTable";
import TransactionPagination from "@/components/dashboard/transactions/TransactionPagination";
import { TransactionType, TransactionCategory } from "@/types/dashboard";
import TransactionService from "@/services/transaction.service";
import { useDebounce } from "@/hooks/useDebounce";

export default function TransactionPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<TransactionType | "ALL">("ALL");
  const [category, setCategory] = useState<TransactionCategory | "ALL">("ALL");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const debouncedSearch = useDebounce(search, 500);

  const [transactions, setTransactions] = useState<any[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  });
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async (currentPage = 1) => {
    try {
      setLoading(true);
      const res = await TransactionService.getTransactions({
        page: currentPage,
        limit: 10,
        type,
        category,
        search: debouncedSearch,
      });

      if (res.success) {
        setTransactions(res.result.data);
        setPagination(res.result.pagination);
      }
    } catch (error) {
      toast.error("Failed to fetch transactions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions(1);
  }, [debouncedSearch, type, category]); // Ab typing rokne ke 500ms baad hi API call hogi!

  const handleReset = () => {
    setSearch("");
    setType("ALL");
    setCategory("ALL");
    setDateRange(undefined);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchTransactions(newPage);
    }
  };

  return (
    <div className="space-y-6 pb-10 animate-in fade-in duration-500">
      <TransactionHeader
        title="Transactions"
        description="View and manage all your income and expenses"
      />

      <TransactionFilters
        searchValue={search}
        typeValue={type}
        categoryValue={category}
        date={dateRange}
        onSearchChange={setSearch}
        onTypeChange={setType}
        onCategoryChange={setCategory}
        onDateChange={setDateRange}
        onReset={handleReset}
      />

      {loading ? (
        <div className="flex h-64 items-center justify-center bg-card border border-border/50 rounded-2xl">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : (
        <>
          <TransactionTable
            transactions={transactions}
            onDeleteSuccess={() => fetchTransactions(pagination.page)}
          />

          {transactions.length > 0 && (
            <TransactionPagination
              currentPage={pagination.page}
              totalPages={pagination.totalPages}
              totalItems={pagination.total}
              limit={pagination.limit}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
}
