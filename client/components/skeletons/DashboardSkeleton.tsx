const DashboardSkeleton = () => {
  return (
    
      <div className="flex-1 flex flex-col min-w-0">

        <header className="h-16 border-b border-border/60 bg-background/80 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-muted animate-pulse rounded md:hidden"></div>
            <div className="hidden md:block h-5 w-64 bg-muted animate-pulse rounded-md"></div>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-8 h-8 rounded-full bg-muted animate-pulse hidden md:block"></div>
            <div className="w-8 h-8 rounded-full bg-muted animate-pulse"></div>
            <div className="w-8 h-8 rounded-full bg-muted animate-pulse ml-1"></div>
          </div>
        </header>

      
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-28 bg-muted animate-pulse rounded-2xl border border-border/30"></div>
            ))}
          </div>
       
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="h-[400px] bg-muted animate-pulse rounded-2xl lg:col-span-2 border border-border/30"></div>
            <div className="h-[400px] bg-muted animate-pulse rounded-2xl border border-border/30"></div>
          </div>
        </div>
      </div>
  );
};

export default DashboardSkeleton;
