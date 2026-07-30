"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import TransactionService from "@/services/transaction.service";
import AddTransactionForm, {
  AddTransactionFormData,
} from "@/components/forms/AddTransactionForm";
import { Loader2 } from "lucide-react";
import { ITransaction } from "@/types/transaction";
import { TransactionType, TransactionCategory } from "@/types/dashboard";

export default function EditTransactionPage() {
  const router = useRouter();
  const params = useParams();
  const transactionId = params.id as string;

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const [formData, setFormData] = useState<AddTransactionFormData>({
    title: "",
    amount: "",
    type: "EXPENSE",
    category: "",
    date: "",
    note: "",
  });

  useEffect(() => {
    const fetchSingleTransaction = async () => {
      try {
        const res = await TransactionService.getTransactionById(transactionId);
        if (res.success) {
          const tx = res.data;

          setFormData({
            title: tx.title,
            amount: tx.amount.toString(),
            type: tx.type as TransactionType,
            category: tx.category as TransactionCategory,

            date: new Date(tx.date).toISOString().split("T")[0],
            note: tx.note || "",
          });
        } else {
          toast.error("Failed to load transaction data.");
        }
      } catch {
        toast.error("Error fetching transaction details.");
      } finally {
        setFetching(false);
      }
    };

    if (transactionId) {
      fetchSingleTransaction();
    }
  }, [transactionId]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTypeChange = (type: "INCOME" | "EXPENSE") => {
    setFormData({ ...formData, type });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.amount ||
      !formData.category ||
      !formData.date
    ) {
      toast.error("Please fill all required fields!");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...formData,
        amount: Number(formData.amount),
        date: new Date(formData.date).toISOString(),
      };

      const res = await TransactionService.updateTransaction(transactionId, {
        ...payload,
        id: transactionId,
      } as ITransaction);
      if (res.success) {
        toast.success("Transaction updated successfully!");
        router.push("/dashboard/transactions");
      } else {
        toast.error(res.message || "Failed to update transaction.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 pb-10 animate-in fade-in duration-500">
      <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link
            href="/dashboard/transactions"
            className="hover:text-foreground transition-colors">
            Transactions
          </Link>
          <span>›</span>
          <span className="text-foreground font-medium">Edit Transaction</span>
        </div>

        <h1 className="text-2xl font-bold text-foreground">Edit Transaction</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Modify your transaction details below.
        </p>
      </div>

      <div className="max-w-5xl">
        {fetching ? (
          <div className="flex justify-center items-center h-64 bg-card border border-border/50 rounded-2xl">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <AddTransactionForm
            formData={formData}
            loading={loading}
            isEdit={true}
            handleChange={handleChange}
            handleTypeChange={handleTypeChange}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
