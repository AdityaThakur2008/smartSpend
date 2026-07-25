"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { MoreVertical, Edit2, Trash2, Loader2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TransactionService from "@/services/transaction.service";

interface TransactionActionMenuProps {
  transactionId: string;
  onDeleteSuccess?: () => void; // Optional: Table ko refresh karne ke liye callback
}

export default function TransactionActions({
  transactionId,
  onDeleteSuccess,
}: TransactionActionMenuProps) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  // 1. Edit Handler
  const handleEdit = () => {
    router.push(`/dashboard/edit-transaction/${transactionId}`);
  };

  // 2. Delete Handler
  const handleDelete = async () => {
    try {
      setDeleting(true);
      const res = await TransactionService.deleteTransaction(transactionId);

      if (res.success) {
        toast.success("Transaction deleted successfully!");
        if (onDeleteSuccess) {
          onDeleteSuccess(); // Table ka data turant refresh karne ke liye
        } else {
          router.refresh(); // Fallback page refresh
        }
      } else {
        toast.error(res.message || "Failed to delete transaction.");
      }
    } catch (error) {
      toast.error("Something went wrong while deleting.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button 
          disabled={deleting}
          className="p-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
        >
          {deleting ? (
            <Loader2 className="w-4 h-4 animate-spin text-primary" />
          ) : (
            <MoreVertical className="w-4 h-4" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 bg-card border-border/50 rounded-xl shadow-lg"
      >
        <DropdownMenuItem 
          onClick={handleEdit}
          className="cursor-pointer flex items-center gap-2 py-2.5"
        >
          <Edit2 className="w-4 h-4 text-muted-foreground" />
          <span className="font-medium text-sm">Edit</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="bg-border/50" />
        
        <DropdownMenuItem 
          onClick={handleDelete}
          className="cursor-pointer flex items-center gap-2 py-2.5 text-red-500 focus:text-red-500 focus:bg-red-500/10"
        >
          <Trash2 className="w-4 h-4" />
          <span className="font-medium text-sm">Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}