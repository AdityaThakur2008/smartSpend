"use client";

export default function TransactionSkeleton() {
  return (
    <div className="w-full bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-secondary/30">
            <tr className="border-b border-border/50 text-muted-foreground">
              <th className="px-6 py-4 font-semibold">Date</th>
              <th className="px-6 py-4 font-semibold">Description</th>
              <th className="px-6 py-4 font-semibold">Category</th>
              <th className="px-6 py-4 font-semibold">Type</th>
              <th className="px-6 py-4 font-semibold text-right">Amount</th>
              <th className="px-6 py-4 font-semibold text-center w-20">Actions</th>
            </tr>
          </thead>
          <tbody>
      
            {[...Array(5)].map((_, i) => (
              <tr key={i} className="border-b border-border/20">
                
               
                <td className="px-6 py-4">
                  <div className="h-4 w-24 bg-muted animate-pulse rounded"></div>
                </td>
                
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted animate-pulse shrink-0"></div>
                    <div className="flex flex-col gap-2">
                      <div className="h-4 w-32 bg-muted animate-pulse rounded"></div>
                      <div className="h-3 w-20 bg-muted animate-pulse rounded"></div>
                    </div>
                  </div>
                </td>
                
            
                <td className="px-6 py-4">
                  <div className="h-6 w-20 bg-muted animate-pulse rounded-md"></div>
                </td>
                
             
                <td className="px-6 py-4">
                  <div className="h-6 w-16 bg-muted animate-pulse rounded-md"></div>
                </td>
                
              
                <td className="px-6 py-4 text-right">
                  <div className="h-4 w-16 bg-muted animate-pulse rounded ml-auto"></div>
                </td>
                
              
                <td className="px-6 py-4">
                  <div className="h-8 w-8 bg-muted animate-pulse rounded-md mx-auto"></div>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}