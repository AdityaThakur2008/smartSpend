

export default function AboutDashboardPreview() {
  return (
    <div className=" relative w-full max-w-5xl mx-auto mt-20 rounded-2xl border border-border/50 bg-background shadow-2xl overflow-hidden  group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-ai/10 rounded-full blur-3xl -z-10" />

          <div className="w-full bg-card border border-border rounded-xl shadow-2xl p-2 sm:p-4 overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <div className="relative aspect-[5/3] w-full bg-muted/30 rounded-lg overflow-hidden flex items-center justify-center border border-border/50">
              <img src="dashboardImage.png" alt="Dashboard Preview" />
            </div>
          </div>
        </div>
  )
}
