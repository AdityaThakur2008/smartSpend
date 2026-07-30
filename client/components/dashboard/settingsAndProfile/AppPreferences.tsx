import React from "react";
import { Moon, Sun, Globe } from "lucide-react";

interface AppPreferencesProps {
  theme: string;

  currency: string;
  handleCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function AppPreferences({
  theme,

  currency,
  handleCurrencyChange,
}: AppPreferencesProps) {
  return (
    <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm">
      <div className="bg-secondary/50 px-6 py-4 border-b border-border/50 flex items-center gap-2">
        <Globe className="w-5 h-5 text-primary" />
        <h2 className="font-semibold text-foreground">App Preferences</h2>
      </div>

      <div className="p-0 divide-y divide-border/40">
        <div className="flex items-center justify-between p-6 opacity-75">
          <div>
            <div className="flex items-center gap-2">
              <p className="font-medium text-foreground">Theme</p>

              <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              Select your interface color mode.
            </p>
          </div>

          <div className="flex bg-secondary rounded-lg p-1 opacity-60 cursor-not-allowed pointer-events-none">
            <button
              disabled
              className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center gap-2 transition-colors ${
                theme === "light"
                  ? "bg-background shadow-sm text-foreground"
                  : "text-muted-foreground"
              }`}>
              <Sun className="w-4 h-4" /> Light
            </button>
            <button
              disabled
              className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center gap-2 transition-colors ${
                theme === "dark"
                  ? "bg-background shadow-sm text-foreground"
                  : "text-muted-foreground"
              }`}>
              <Moon className="w-4 h-4" /> Dark
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between p-6">
          <div>
            <p className="font-medium text-foreground">Currency</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Set your default currency for the dashboard.
            </p>
          </div>
          <select
            value={currency}
            onChange={handleCurrencyChange}
            className="bg-secondary text-foreground border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary/50 outline-none cursor-pointer">
            <option value="INR">INR (₹)</option>
            <option value="USD">USD ($)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
