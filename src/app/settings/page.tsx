import type { Metadata } from "next";
import { SettingsForm } from "@/components/settings-form";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-5xl px-6 py-12 sm:py-16">
      <div>
        <p className="text-sm font-medium text-[#478060]">Workspace</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-.04em]">Settings</h1>
        <p className="mt-2 text-[#718078]">Manage your workspace preferences.</p>
      </div>
      <SettingsForm />
    </main>
  );
}
