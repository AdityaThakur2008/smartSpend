import React from "react";

export default function SettingAndProfileSkeleton() {
  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your profile, preferences, and account settings.
        </p>
      </div>

      <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm">
        <div className="bg-secondary/50 px-6 py-4 border-b border-border/50 flex items-center gap-2">
          <div className="w-5 h-5 bg-muted rounded animate-pulse"></div>
          <div className="h-5 w-40 bg-muted rounded animate-pulse"></div>
        </div>

        <div className="p-6 space-y-6">
          {/* Avatar and Name */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-muted animate-pulse shrink-0"></div>
            <div className="space-y-2">
              <div className="h-6 w-48 bg-muted rounded animate-pulse"></div>
              <div className="h-4 w-64 bg-muted rounded animate-pulse"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border/30">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-20 bg-muted rounded-xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm">
        <div className="bg-secondary/50 px-6 py-4 border-b border-border/50 flex items-center gap-2">
          <div className="w-5 h-5 bg-muted rounded animate-pulse"></div>
          <div className="h-5 w-40 bg-muted rounded animate-pulse"></div>
        </div>

        <div className="divide-y divide-border/40">
          <div className="flex items-center justify-between p-6">
            <div className="space-y-2">
              <div className="h-5 w-24 bg-muted rounded animate-pulse"></div>
              <div className="h-4 w-48 bg-muted rounded animate-pulse md:block hidden"></div>
            </div>
            <div className="h-10 w-32 bg-muted rounded-lg animate-pulse"></div>
          </div>

          <div className="flex items-center justify-between p-6">
            <div className="space-y-2">
              <div className="h-5 w-24 bg-muted rounded animate-pulse"></div>
              <div className="h-4 w-48 bg-muted rounded animate-pulse md:block hidden"></div>
            </div>
            <div className="h-10 w-32 bg-muted rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="border border-red-500/20 bg-red-500/5 rounded-2xl overflow-hidden shadow-sm">
        <div className="bg-red-500/10 px-6 py-4 border-b border-red-500/10 flex items-center gap-2">
          <div className="w-5 h-5 bg-red-500/20 rounded animate-pulse"></div>
          <div className="h-5 w-32 bg-red-500/20 rounded animate-pulse"></div>
        </div>

        <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-2 w-full">
            <div className="h-5 w-32 bg-muted rounded animate-pulse"></div>
            <div className="h-4 w-64 max-w-full bg-muted rounded animate-pulse"></div>
          </div>
          <div className="h-10 w-full sm:w-40 bg-red-500/20 rounded-lg animate-pulse shrink-0"></div>
        </div>
      </div>

      <div className="pt-4">
        <div className="h-12 w-full sm:w-48 bg-muted rounded-xl animate-pulse"></div>
      </div>
    </div>
  );
}
