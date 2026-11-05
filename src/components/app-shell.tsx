import Link from "next/link";

export function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-[#e8ede9] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-semibold tracking-tight"
            aria-label="WorkBot home"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-[#176b4a] text-lg text-white">
              ✳
            </span>
            <span className="text-lg">workbot</span>
          </Link>
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-6 text-sm text-[#53635a]"
          >
            <Link href="/#features" className="hidden transition hover:text-[#176b4a] sm:inline">
              Features
            </Link>
            <Link href="/settings" className="transition hover:text-[#176b4a]">
              Settings
            </Link>
            <Link
              href="/settings"
              className="rounded-full bg-[#17231d] px-4 py-2 font-medium text-white transition hover:bg-[#176b4a]"
            >
              Get started
            </Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="border-t border-[#e8ede9] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-7 text-sm text-[#718078] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} WorkBot. Make work work better.</span>
          <Link href="/api/health" className="hover:text-[#176b4a]">
            System status
          </Link>
        </div>
      </footer>
    </div>
  );
}
