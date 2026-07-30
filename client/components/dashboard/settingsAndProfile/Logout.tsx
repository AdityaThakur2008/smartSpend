import { LogOut } from "lucide-react";

interface LogoutProps {
  handleLogout: () => void;
}

export default function Logout({ handleLogout }: LogoutProps) {
  return (
    <div className="pt-4">
      <button
        onClick={handleLogout}
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-secondary hover:bg-red-500/10 text-foreground hover:text-red-500 px-8 py-3 rounded-xl font-bold transition-colors border border-border/50 hover:border-red-500/20">
        <LogOut className="w-5 h-5" />
        Logout of SmartSpend
      </button>
    </div>
  );
}
