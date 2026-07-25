"use client"; // Next.js hooks ke liye required

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Router import kiya
import { Plus } from "lucide-react";

interface TransactionHeaderProps {
  title: string;
  description?: string;
}

const TransactionHeader = ({ title, description }: TransactionHeaderProps) => {
  const router = useRouter(); 
  

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-border/60">
      <header className="space-y-1.5">
        <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {title}
        </h1>
        {description && (
          <p className="text-sm text-muted-foreground/90 font-medium">
            {description}
          </p>
        )}
      </header>

      
      <Button
        onClick={() => router.push("/dashboard/transactions/new")}
        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold shadow-sm shadow-primary/20 transition-all rounded-xl px-4 py-2.5 active:scale-98 cursor-pointer self-start sm:self-auto">
        <Plus className="w-4 h-4 stroke-[2.5]" />
        <span>Add Transaction</span>
      </Button>
    </div>
  );
};

export default TransactionHeader;
