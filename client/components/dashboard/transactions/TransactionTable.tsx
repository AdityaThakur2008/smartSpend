
import { ShoppingCart, Briefcase, Coffee, Car, CreditCard, Ticket, Shirt, Activity, Zap, FileText } from "lucide-react";
import TransactionActions from "./TransactionActions";
import { format } from "date-fns";


const getCategoryStyles = (category: string) => {
  switch (category) {
    case "FOOD": return { icon: ShoppingCart, bg: "bg-emerald-500/10", color: "text-emerald-500" };
    case "TRAVEL": return { icon: Car, bg: "bg-orange-500/10", color: "text-orange-500" };
    case "ENTERTAINMENT": return { icon: Ticket, bg: "bg-yellow-500/10", color: "text-yellow-600 dark:text-yellow-500" };
    case "BILLS": return { icon: Zap, bg: "bg-indigo-500/10", color: "text-indigo-500" };
    case "SALARY": return { icon: Briefcase, bg: "bg-blue-500/10", color: "text-blue-500" };
    case "HEALTH": return { icon: Activity, bg: "bg-red-500/10", color: "text-red-500" };
    case "SHOPPING": return { icon: Shirt, bg: "bg-purple-500/10", color: "text-purple-500" };
    default: return { icon: FileText, bg: "bg-gray-500/10", color: "text-gray-500" };
  }
};

interface TransactionTableProps {
  
  transactions: any[]; 
}

export default function TransactionTable({ transactions }: TransactionTableProps) {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="w-full bg-card border border-border/50 rounded-2xl p-10 flex flex-col items-center justify-center shadow-sm">
        <FileText className="w-10 h-10 text-muted-foreground mb-3" />
        <h3 className="font-semibold text-foreground">No transactions found</h3>
        <p className="text-sm text-muted-foreground">Try adjusting your filters or add a new transaction.</p>
      </div>
    );
  }

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
            {transactions.map((tx) => {
              const { icon: Icon, bg, color } = getCategoryStyles(tx.category);
              const isIncome = tx.type === "INCOME";

              return (
                <tr key={tx.id} className="border-b border-border/20 hover:bg-secondary/20 transition-colors">
                  <td className="px-6 py-4 text-muted-foreground font-medium">
                    {format(new Date(tx.date), "MMM dd, yyyy")}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${bg}`}>
                        <Icon className={`w-5 h-5 ${color}`} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-foreground capitalize">{tx.title}</span>
                        {tx.note && <span className="text-xs text-muted-foreground truncate max-w-[200px]">{tx.note}</span>}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold capitalize ${bg} ${color}`}>
                      {tx.category.toLowerCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${
                      isIncome ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
                    }`}>
                      {isIncome ? "Income" : "Expense"}
                    </span>
                  </td>
                  <td className={`px-6 py-4 text-right font-bold ${isIncome ? 'text-emerald-500' : 'text-red-500'}`}>
                    {isIncome ? "+" : "-"}${Math.abs(tx.amount).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <TransactionActions transactionId={tx.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}