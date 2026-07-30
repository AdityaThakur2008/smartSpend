"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import DashboardService from "@/services/dashboard.service";
import type {
  DashboardSummary,
  DashboardSummaryResponse,
} from "@/types/dashboard";

import { toast } from "sonner";

import ProfileHeader from "@/components/dashboard/settingsAndProfile/ProfileHeader";
import Profileinfo from "@/components/dashboard/settingsAndProfile/ProfileInfo";
import AppPreferences from "@/components/dashboard/settingsAndProfile/AppPreferences";
import DangerZone from "@/components/dashboard/settingsAndProfile/DangerZone";
import Logout from "@/components/dashboard/settingsAndProfile/Logout";
import SettingAndProfileSkeleton from "@/components/skeletons/SettingAndProfileSkeleton";
export default function SettingsPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [loading, setLoading] = useState(true);

  const [theme, setTheme] = useState("dark");
  const [currency, setCurrency] = useState("INR");

  useEffect(() => {
    const savedCurrency = localStorage.getItem("currency") || "INR";
    setCurrency(savedCurrency);

    const fetchStats = async () => {
      try {
        const summaryRes = await DashboardService.getSummary();

        setSummary((summaryRes as DashboardSummaryResponse).data);
      } catch (error) {
        toast.error("Failed to fetch user stats");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = e.target.value;
    setCurrency(newCurrency);
    localStorage.setItem("currency", newCurrency);

    window.location.reload();
  };

  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  if (loading) {
    return <SettingAndProfileSkeleton />;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12 animate-in fade-in duration-500">
      <ProfileHeader />

      <Profileinfo user={user} summary={summary} />

      <AppPreferences
        theme={theme}
        setTheme={setTheme}
        currency={currency}
        handleCurrencyChange={handleCurrencyChange}
      />

      <DangerZone />

      <Logout handleLogout={handleLogout} />
    </div>
  );
}
