import { Sparkles, Loader2, } from "lucide-react";


interface AiHeaderProps {
  loading: boolean;
  handleGenerate: () => void; 
}


export default function AiHeader({loading , handleGenerate} : AiHeaderProps) {
  return (
   <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Financial Advisor</h1>
          <p className="text-muted-foreground mt-1">
            Get personalized, AI-driven analysis of your spending habits and budget.
          </p>
        </div>
        
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-70"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Sparkles className="h-5 w-5" />
          )}
          {loading ? "Analyzing Data..." : "Generate New Insights"}
        </button>
      </div>
  )
}
