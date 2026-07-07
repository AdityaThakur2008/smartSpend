import { Wallet } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <Wallet className="size-6 text-primary" />

      <h1 className="text-xl font-bold tracking-tight">
        SmartSpend
        <span className="text-primary">.ai</span>
      </h1>
    </div>
  );
}