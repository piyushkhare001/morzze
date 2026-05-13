"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function AdminSettingsPage() {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (loggingOut) return;
    setLoggingOut(true);

    const toastId = toast.loading("Logging out...");
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (!res.ok) {
        throw new Error("Logout failed");
      }

      try {
        localStorage.removeItem("userEmail");
      } catch {
        // ignore
      }

      toast.success("Logged out", { id: toastId });
      router.replace("/admin/login");
      router.refresh();
    } catch (e: any) {
      toast.error(e?.message || "Logout failed", { id: toastId });
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <div className="p-6 space-y-4">
      <header>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Admin account and session settings.
        </p>
      </header>

      <div className="rounded-md border bg-background p-4 flex items-center justify-between gap-4">
        <div>
          <p className="font-medium">Sign out</p>
          <p className="text-sm text-muted-foreground">
            End your current admin session.
          </p>
        </div>
        <Button variant="destructive" onClick={handleLogout} disabled={loggingOut}>
          {loggingOut ? "Logging out..." : "Logout"}
        </Button>
      </div>
    </div>
  );
}

