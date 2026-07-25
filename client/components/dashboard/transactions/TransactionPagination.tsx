import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  limit: number;
  onPageChange: (page: number) => void;
}

export default function TransactionPagination({ 
  currentPage, 
  totalPages, 
  totalItems, 
  limit, 
  onPageChange 
}: PaginationProps) {
  

  const startItem = ((currentPage - 1) * limit) + 1;
  const endItem = Math.min(currentPage * limit, totalItems);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
      <span className="text-sm text-muted-foreground font-medium">
        Showing <span className="text-foreground font-bold">{startItem}</span> to <span className="text-foreground font-bold">{endItem}</span> of <span className="text-foreground font-bold">{totalItems}</span> transactions
      </span>
      
      <div className="flex items-center gap-1.5">
        <button 
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 border border-border/50 rounded-lg hover:bg-secondary text-muted-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm font-bold text-sm">
          {currentPage}
        </button>
        
        <span className="text-muted-foreground text-sm font-medium px-2">of {totalPages}</span>
        
        <button 
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 border border-border/50 rounded-lg hover:bg-secondary text-muted-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}