import { MoreVertical, Edit2, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TransactionActionMenuProps {
  transactionId: string;
}

export default function TransactionActions({
  transactionId,
}: TransactionActionMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20">
          <MoreVertical className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 bg-card border-border/50 rounded-xl shadow-lg">
        <DropdownMenuItem className="cursor-pointer flex items-center gap-2 py-2.5">
          <Edit2 className="w-4 h-4 text-muted-foreground" />
          <span className="font-medium text-sm">Edit</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-border/50" />
        <DropdownMenuItem className="cursor-pointer flex items-center gap-2 py-2.5 text-red-500 focus:text-red-500 focus:bg-red-500/10">
          <Trash2 className="w-4 h-4" />
          <span className="font-medium text-sm">Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
