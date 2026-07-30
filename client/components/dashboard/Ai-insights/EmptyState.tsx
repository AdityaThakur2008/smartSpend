import React from 'react'
import { AIInsightsData}  from "@/types/ai-insights"
import { Sparkles, } from "lucide-react";

interface EmptyStateProps {
    data : AIInsightsData | null;
    loading : boolean;

}

export default function EmptyState( { data , loading}: EmptyStateProps) {
  return ( 
    <div>
       {!data && !loading && (
        <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-border/50 rounded-2xl bg-card/30">
          <Sparkles className="h-12 w-12 text-primary/40 mb-4" />
          <h3 className="text-xl font-semibold text-foreground">
            No Insights Generated Yet
          </h3>
          <p className="text-muted-foreground max-w-md text-center mt-2">
            Click the button above to let our AI analyze your recent
            transactions and provide a tailored financial plan.
          </p>
        </div>
      )}
    </div>
  )
}
