import React from "react";
import { Moon, Sun, Globe } from "lucide-react";

interface AppPreferencesProps {
  theme : any;
  setTheme: any;
  currency: any;
  handleCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function AppPreferences({
  theme,
  setTheme,
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
        {/* Theme Toggle */}
        <div className="flex items-center justify-between p-6">
          <div>
            <p className="font-medium text-foreground">Theme</p>
            <p className="text-sm text-muted-foreground">
              Select your interface color mode.
            </p>
          </div>
          <div className="flex bg-secondary rounded-lg p-1">
            <button
              onClick={() => setTheme("light")}
              className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center gap-2 transition-colors ${theme === "light" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              <Sun className="w-4 h-4" /> Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center gap-2 transition-colors ${theme === "dark" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              <Moon className="w-4 h-4" /> Dark
            </button>
          </div>
        </div>

        {/* Currency Toggle */}
        <div className="flex items-center justify-between p-6">
          <div>
            <p className="font-medium text-foreground">Currency</p>
            <p className="text-sm text-muted-foreground">
              Set your default currency for the dashboard.
            </p>
          </div>
          <select
            value={currency}
            onChange={handleCurrencyChange}
            className="bg-secondary text-foreground border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary/50 outline-none">
            <option value="INR">INR (₹)</option>
            <option value="USD">USD ($)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
