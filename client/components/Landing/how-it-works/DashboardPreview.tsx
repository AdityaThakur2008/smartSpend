import React from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

export default function DashboardPreview() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-20 rounded-2xl border border-border/50 bg-background shadow-2xl overflow-hidden relative group">
      
      {/* ---------------------------------------------------
          1. TEMPORARY PLACEHOLDER (Delete this when you have the image)
          --------------------------------------------------- */}
      <div className="w-full aspect-[16/9] md:aspect-[12/7] bg-secondary/30 flex flex-col items-center justify-center border-2 border-dashed border-border/50 rounded-xl m-1">
        <ImageIcon className="w-12 h-12 text-muted-foreground mb-4 opacity-50" />
        <p className="text-muted-foreground font-medium">
          Dashboard Image Placeholder
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1">
          Dimensions: 1200 x 700px recommended
        </p>
      </div>

      {/* ---------------------------------------------------
          2. ACTUAL IMAGE CODE (Uncomment this when image is ready)
          --------------------------------------------------- */}
      {/* <Image
        src="/dashboard-mockup.png" // Apni image ka exact path yahan dalna
        alt="SmartSpend dashboard preview"
        width={1200}
        height={700}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        priority 
      /> 
      */}
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none"></div>
    </div>
  );
}