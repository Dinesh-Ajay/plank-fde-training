import type { Metadata } from "next";
import { SettingsForm } from "@/components/settings-form";
import { appConfig } from "@/lib/config";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsPage() {
  const environmentLabel =
    appConfig.environment.charAt(0).toUpperCase() + appConfig.environment.slice(1);

  return (
    <main className="mx-auto min-h-[70vh] max-w-5xl px-6 py-12 sm:py-16">
      <div>
        <p className="text-sm font-medium text-[#478060]">Workspace</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-.04em]">Settings</h1>
        <p className="mt-2 text-[#718078]">Manage your workspace preferences.</p>
        <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-medium text-[#53635a]">Deployment environment</dt>
            <dd className="mt-1 text-[#718078]">{environmentLabel}</dd>
          </div>
          <div>
            <dt className="font-medium text-[#53635a]">Deployment commit</dt>
            <dd className="mt-1 font-mono text-[#718078]">{appConfig.commit}</dd>
          </div>
        </dl>
      </div>
      <SettingsForm />
    </main>
  );
}
