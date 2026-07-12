// components/Hero/HeroButtons.tsx
import { Play } from "lucide-react";

export function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 w-full">
      <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-md hover:bg-primary/90 transition-all cursor-pointer">
        Get Started Free
      </button>
      <button className="flex items-center gap-2 px-5 py-3 text-foreground font-semibold rounded-lg border border-border hover:bg-muted/50 transition-all cursor-pointer">
        <Play className="w-4 h-4 fill-current" />
        <span>See How It Works</span>
      </button>
    </div>
  );
}
