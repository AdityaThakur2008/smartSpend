"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import TransactionService from "@/services/transaction.service";
import { ITransaction } from "@/types/transaction";
import { TransactionCategory, TransactionType } from "@/types/dashboard";
import AddTransactionForm, {
  AddTransactionFormData,
} from "@/components/forms/AddTransactionForm";

export default function AddTransactionPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<AddTransactionFormData>({
    title: "",
    amount: "",
    type: "EXPENSE",
    category: "",
    date: "",
    note: "",
  });

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

      const payload: Omit<ITransaction, "id"> = {
        title: formData.title,
        amount: Number(formData.amount),
        category: formData.category as TransactionCategory,
        note: formData.note,
        date: new Date(formData.date).toISOString(),
        type: formData.type as TransactionType,
      };

      const res = await TransactionService.createTransaction(payload);

      if (res.success) {
        toast.success("Transaction added successfully!");
        router.push("/dashboard/transactions");
      } else {
        toast.error(res.message || "Failed to add transaction.");
      }
    } catch {
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
          <span className="text-foreground font-medium">Add Transaction</span>
        </div>

        <h1 className="text-2xl font-bold text-foreground">Add Transaction</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Track your income and expenses by adding a new transaction.
        </p>
      </div>

      <div className="max-w-5xl">
        <AddTransactionForm
          formData={formData}
          loading={loading}
          handleChange={handleChange}
          handleTypeChange={handleTypeChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
