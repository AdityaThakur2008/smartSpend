import { Wallet } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <Wallet className="size-6 text-primary" />

      <h1 className="text-xl font-bold tracking-tight">
        SmartSpend
      </h1>
    </div>
  );
}