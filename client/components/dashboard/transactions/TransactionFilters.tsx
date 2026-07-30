


import { format } from "date-fns"; 
import { DateRange } from "react-day-picker"; 
import { Search, SlidersHorizontal, Folder, Calendar as CalendarIcon, RotateCcw } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar"; 
import { cn } from "@/lib/utils"; 

import { TransactionType, TransactionCategory } from "@/types/dashboard";

interface TransactionFiltersProps {
  searchValue: string;
  typeValue: TransactionType | "ALL";
  categoryValue: TransactionCategory | "ALL";
  date: DateRange | undefined;
  
  onSearchChange: (value: string) => void;
  onTypeChange: (value: TransactionType | "ALL") => void;
  onCategoryChange: (value: TransactionCategory | "ALL") => void;
onDateChange: (range: DateRange | undefined) => void;
  onReset: () => void;
}

export default function TransactionFilters({
  searchValue,
  typeValue,
  categoryValue,
  date,
  onSearchChange,
  onTypeChange,
  onCategoryChange,
  onDateChange,
  onReset,
}: TransactionFiltersProps) {


  return (
    <div className="flex flex-col xl:flex-row items-start xl:items-center gap-4 w-full bg-card p-5 rounded-2xl border border-border/50 shadow-sm mb-6">
      
      
      <div className="relative w-full xl:flex-1">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <Input
          placeholder="Search transactions..."
          value={searchValue}
          onChange={(e) => {
            
            onSearchChange(e.target.value);
          }}
          className="pl-10 h-11 w-full bg-background/50 border-border/50 rounded-xl focus-visible:ring-1 focus-visible:ring-primary/50 text-sm shadow-sm transition-all placeholder:text-muted-foreground"
        />
      </div>

     
      <div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-3 w-full xl:w-auto">
        
      
        <Select
          value={typeValue}
          onValueChange={(val) => {
       
            onTypeChange(val as TransactionType | "ALL");
          }}
        >
          <SelectTrigger className="h-11 px-4 bg-background/50 border-border/50 rounded-xl flex items-center gap-2 text-muted-foreground text-sm font-medium w-full md:w-[140px] justify-between cursor-pointer hover:bg-secondary/50 transition-colors shadow-sm focus:ring-1 focus:ring-primary/50">
            <div className="flex items-center gap-2 truncate">
              <SlidersHorizontal className="h-4 w-4 shrink-0" />
              <SelectValue placeholder="All Types" />
            </div>
          </SelectTrigger>
          <SelectContent className="bg-card border-border/50 rounded-xl shadow-lg">
            <SelectItem value="ALL" className="cursor-pointer">All Types</SelectItem>
            <SelectItem value="INCOME" className="cursor-pointer">Income</SelectItem>
            <SelectItem value="EXPENSE" className="cursor-pointer">Expense</SelectItem>
          </SelectContent>
        </Select>

        
        <Select
          value={categoryValue}
          onValueChange={(val) => {
           
            onCategoryChange(val as TransactionCategory | "ALL");
          }}
        >
          <SelectTrigger className="h-11 px-4 bg-background/50 border-border/50 rounded-xl flex items-center gap-2 text-muted-foreground text-sm font-medium w-full md:w-[170px] justify-between cursor-pointer hover:bg-secondary/50 transition-colors shadow-sm focus:ring-1 focus:ring-primary/50">
            <div className="flex items-center gap-2 truncate">
              <Folder className="h-4 w-4 shrink-0" />
              <SelectValue placeholder="All Categories" />
            </div>
          </SelectTrigger>
          <SelectContent className="bg-card border-border/50 rounded-xl max-h-60 shadow-lg">
            <SelectItem value="ALL" className="cursor-pointer">All Categories</SelectItem>
            <SelectItem value="FOOD" className="cursor-pointer">Food</SelectItem>
            <SelectItem value="TRAVEL" className="cursor-pointer">Travel</SelectItem>
            <SelectItem value="SHOPPING" className="cursor-pointer">Shopping</SelectItem>
            <SelectItem value="HEALTH" className="cursor-pointer">Health</SelectItem>
            <SelectItem value="BILLS" className="cursor-pointer">Bills</SelectItem>
            <SelectItem value="EDUCATION" className="cursor-pointer">Education</SelectItem>
            <SelectItem value="ENTERTAINMENT" className="cursor-pointer">Entertainment</SelectItem>
            <SelectItem value="SALARY" className="cursor-pointer">Salary</SelectItem>
            <SelectItem value="OTHER" className="cursor-pointer">Other</SelectItem>
          </SelectContent>
        </Select>

        <div className="col-span-2 md:col-span-1 w-full md:w-auto">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "h-11 px-4 bg-background/50 border-border/50 rounded-xl flex items-center gap-2 text-sm font-medium w-full md:w-[240px] justify-start cursor-pointer hover:bg-secondary hover:text-foreground transition-colors shadow-sm",
                  !date && "text-muted-foreground" 
                )}
              >
                <CalendarIcon className="h-4 w-4 shrink-0" />
                <span className="truncate">
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    "Select Date Range"
                  )}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                
                mode="range" 
                defaultMonth={date?.from}
                selected={date}
                onSelect={
                
                  onDateChange
                }
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>

       
        <Button
          variant="outline"
          onClick={onReset}
          className="h-11 px-4 bg-background/50 border-border/50 rounded-xl flex items-center gap-2 text-muted-foreground text-sm font-medium w-full md:w-auto col-span-2 md:col-span-1 justify-center cursor-pointer hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/30 transition-colors shadow-sm"
        >
          <RotateCcw className="h-4 w-4 shrink-0" />
          <span>Reset</span>
        </Button>
      </div>
    </div>
  );
}