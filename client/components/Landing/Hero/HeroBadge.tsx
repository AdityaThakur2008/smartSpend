// components/Hero/HeroBadge.tsx
import { Sparkles } from "lucide-react";

export function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ai/10 border border-ai/20 text-ai text-sm font-medium animate-fade-in">
      <Sparkles className="w-4 h-4 text-ai" />
      <span>AI-Powered Finance</span>
    </div>
  );
}
