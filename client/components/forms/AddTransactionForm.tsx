"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  IndianRupee,
  LayoutGrid,
  ChevronDown,
  Calendar,
  ArrowUpCircle,
  ArrowDownCircle,
  Save,
  Loader2,
} from "lucide-react";
import { TransactionType } from "@/types/dashboard";

export interface AddTransactionFormData {
  title: string;
  amount: string;
  type: "INCOME" | "EXPENSE";
  category: string;
  date: string | Date;

  note: string;
}

interface AddTransactionFormProps {
  formData: AddTransactionFormData;
  loading: boolean;
  isEdit?: boolean;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  handleTypeChange: (type: TransactionType) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function AddTransactionForm({
  formData,
  loading,
  isEdit,
  handleChange,
  handleTypeChange,
  handleSubmit,
}: AddTransactionFormProps) {
  const router = useRouter();

  return (
    <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 shadow-sm">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">
              Title <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter title (e.g. Grocery Shopping)"
                className="w-full pl-10 pr-4 py-3 bg-background border border-border/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">
              Amount <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="number"
                name="amount"
                step="1"
                min="0"
                value={formData.amount}
                onChange={handleChange}
                placeholder="0"
                className="w-full pl-10 pr-4 py-3 bg-background border border-border/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-right placeholder:text-muted-foreground"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">
              Type <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div
                onClick={() => handleTypeChange("INCOME")}
                className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  formData.type === "INCOME"
                    ? "border-green-500 bg-green-500/5 ring-1 ring-green-500"
                    : "border-border/50 hover:border-border"
                }`}>
                <ArrowUpCircle
                  className={`w-5 h-5 ${formData.type === "INCOME" ? "text-green-500" : "text-muted-foreground"}`}
                />
                <span
                  className={`text-sm font-medium ${formData.type === "INCOME" ? "text-foreground" : "text-muted-foreground"}`}>
                  Income
                </span>
              </div>
              <div
                onClick={() => handleTypeChange("EXPENSE")}
                className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  formData.type === "EXPENSE"
                    ? "border-red-500 bg-red-500/5 ring-1 ring-red-500"
                    : "border-border/50 hover:border-border"
                }`}>
                <ArrowDownCircle
                  className={`w-5 h-5 ${formData.type === "EXPENSE" ? "text-red-500" : "text-muted-foreground"}`}
                />
                <span
                  className={`text-sm font-medium ${formData.type === "EXPENSE" ? "text-foreground" : "text-muted-foreground"}`}>
                  Expense
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">
              Category <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <LayoutGrid className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full appearance-none pl-10 pr-10 py-3 bg-background border border-border/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground cursor-pointer"
                required>
                <option value="" disabled>
                  Select category
                </option>
                <option value="FOOD">Food & Dining</option>
                <option value="SHOPPING">Shopping</option>
                <option value="TRAVEL">Travel</option>
                <option value="BILLS">Bills</option>
                <option value="HEALTH">Health</option>
                <option value="EDUCATION">Education</option>
                <option value="ENTERTAINMENT">Entertainment</option>
                <option value="SALARY">Salary</option>
                <option value="OTHER">Other</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">
              Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input
                type="date"
                name="date"
                value={
                  formData.date instanceof Date
                    ? formData.date.toISOString().split("T")[0]
                    : formData.date || ""
                }
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-background border border-border/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground cursor-pointer"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">
              Note{" "}
              <span className="text-muted-foreground font-normal">
                (Optional)
              </span>
            </label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              rows={3}
              placeholder="Add a note (e.g. payment method, details, etc.)"
              className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-border/40">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2.5 rounded-xl border border-border/60 text-foreground font-semibold text-sm hover:bg-secondary transition-colors">
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed">
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}

            {loading
              ? "Saving..."
              : isEdit
                ? "Update Transaction"
                : "Save Transaction"}
          </button>
        </div>
      </form>
    </div>
  );
}
