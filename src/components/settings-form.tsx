"use client";

import { useState } from "react";

export function SettingsForm() {
  const [saved, setSaved] = useState(false);
  return (
    <form
      className="mt-10 max-w-2xl divide-y divide-[#e8ede9] rounded-2xl border border-[#e8ede9] bg-white px-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSaved(true);
      }}
    >
      <section className="py-6">
        <h2 className="font-semibold">Workspace details</h2>
        <p className="mt-1 text-sm text-[#718078]">A few details to make WorkBot yours.</p>
        <label className="mt-5 block text-sm font-medium" htmlFor="workspace-name">
          Workspace name
        </label>
        <input
          id="workspace-name"
          name="workspaceName"
          defaultValue="Acme Studio"
          className="mt-2 w-full rounded-lg border border-[#dfe7e1] px-3.5 py-2.5 outline-none focus:border-[#478060] focus:ring-2 focus:ring-[#478060]/15"
        />
      </section>
      <section className="flex items-center justify-between gap-6 py-6">
        <div>
          <h2 className="font-semibold">Weekly digest</h2>
          <p className="mt-1 text-sm text-[#718078]">
            Get a Monday summary of your team&apos;s progress.
          </p>
        </div>
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            aria-label="Weekly digest"
            type="checkbox"
            defaultChecked
            className="peer sr-only"
          />
          <span className="h-6 w-11 rounded-full bg-[#d6dfd8] after:absolute after:left-0.5 after:top-0.5 after:size-5 after:rounded-full after:bg-white after:shadow after:transition peer-checked:bg-[#478060] peer-checked:after:translate-x-5 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#176b4a]" />
        </label>
      </section>
      <div className="flex flex-wrap items-center gap-4 py-6">
        <button
          type="submit"
          className="rounded-lg bg-[#176b4a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#10563b]"
        >
          Save changes
        </button>
        {saved && (
          <p role="status" className="text-sm text-[#347c59]">
            Your preferences have been saved.
          </p>
        )}
      </div>
    </form>
  );
}
