import React from "react";
import CtaContent from "./CtaContent";
import CtaMockup from "./CtaMockup";

export default function CtaSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
      <div className="relative rounded-[2.5rem] bg-gradient-to-br from-primary/5 via-background to-ai/5 border border-border/60 p-8 md:p-14 overflow-hidden flex flex-col lg:flex-row items-center gap-12 shadow-xl">
        
        {/* Background Decorative Blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        {/* Imported Components */}
        <CtaContent />
        <CtaMockup />

      </div>
    </section>
  );
}