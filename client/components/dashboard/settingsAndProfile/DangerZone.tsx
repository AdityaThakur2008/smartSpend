import React from "react";
import { AlertTriangle } from "lucide-react";

export default function DangerZone() {
  return (
    <div className="border border-red-500/20 bg-red-500/5 rounded-2xl overflow-hidden shadow-sm">
      <div className="bg-red-500/10 px-6 py-4 border-b border-red-500/10 flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-red-500" />
        <h2 className="font-semibold text-red-600 dark:text-red-500">
          Danger Zone
        </h2>
      </div>

      <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-medium text-foreground">Delete Account</p>
          <p className="text-sm text-muted-foreground mt-1">
            Permanently remove your account and all financial data.
          </p>
        </div>
        <button
          disabled
          className="px-4 py-2 bg-red-500/50 text-white rounded-lg font-medium text-sm cursor-not-allowed opacity-70 border border-red-500/20 whitespace-nowrap">
          Delete Account (Coming Soon)
        </button>
      </div>
    </div>
  );
}
