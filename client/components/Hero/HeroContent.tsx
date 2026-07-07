// components/Hero/HeroContent.tsx
interface HeroContentProps {
  children: React.ReactNode;
}

export function HeroContent({ children }: HeroContentProps) {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-2xl">
      {children}
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
        Track. Analyze. <br />
        <span className="text-primary">Save Smarter.</span>
      </h1>
      <p className="text-muted-foreground text-lg sm:text-xl font-normal max-w-lg leading-relaxed">
        SmartSpend.ai helps you take control of your money with AI insights, smart budgeting, and real-time tracking.
      </p>
    </div>
  );
}
