// components/shared/CTASection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="w-full bg-primary text-primary-foreground rounded-2xl px-8 py-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          
          {/* Subtle Background Accent Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-0 pointer-events-none" />
          
          {/* Text Content */}
          <div className="flex flex-col space-y-3 max-w-2xl text-center md:text-left z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to take control of your finances?
            </h2>
            <p className="text-primary-foreground/80 text-base sm:text-lg font-medium">
              Join thousands of users who are already saving smarter with AI.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex-shrink-0 z-10 w-full md:w-auto">
            <Button 
              className="w-full md:w-auto px-8 py-6 rounded-lg font-bold text-primary bg-white hover:bg-white/95 transition-all text-base cursor-pointer shadow-md"
              asChild
            >
              <Link href="/register">Get Started Free</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
