




export default function DahboardLayoutSkeleton() {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
     
      <aside className="w-64 h-screen border-r border-border/60 bg-card hidden md:flex flex-col sticky top-0">
      
        <div className="h-20 flex items-center px-6 border-b border-border/60 gap-3">
          <div className="w-8 h-8 rounded-lg bg-muted animate-pulse"></div>
          <div className="h-6 w-28 bg-muted animate-pulse rounded-md"></div>
        </div>
    
        <div className="flex-1 py-6 px-4 space-y-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-10 w-full bg-muted animate-pulse rounded-xl"></div>
          ))}
        </div>
        
        <div className="p-4 border-t border-border/40">
          <div className="flex items-center gap-3 p-2">
            <div className="w-9 h-9 rounded-full bg-muted animate-pulse"></div>
            <div className="flex flex-col gap-2">
              <div className="h-3 w-20 bg-muted animate-pulse rounded-full"></div>
              <div className="h-2 w-24 bg-muted animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>
      </aside>
      <></>
    </div>
  );
}
