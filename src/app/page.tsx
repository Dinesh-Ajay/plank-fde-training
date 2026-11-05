import Link from "next/link";

const features = [
  {
    number: "01",
    title: "See the whole picture",
    body: "Bring projects, people, and priorities into one clear view. Everyone knows what matters next.",
  },
  {
    number: "02",
    title: "Give busywork a better job",
    body: "Let thoughtful automations handle the handoffs, reminders, and repeatable work.",
  },
  {
    number: "03",
    title: "Make room for good work",
    body: "Spend less time chasing updates and more time making meaningful progress together.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#f0f5f1]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d7e4da] bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[.12em] text-[#176b4a]">
              <span className="size-1.5 rounded-full bg-[#48a579]" /> Your team&apos;s new rhythm
            </p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.06] tracking-[-.055em] sm:text-6xl lg:text-7xl">
              Good work, <span className="text-[#347c59]">without</span> the busywork.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#627169]">
              WorkBot brings your team and your tools together, so the right work keeps moving
              forward.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/settings"
                className="rounded-full bg-[#176b4a] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#10563b]"
              >
                Build your workspace <span aria-hidden="true">→</span>
              </Link>
              <a
                href="#features"
                className="px-2 py-3 text-sm font-semibold text-[#43564a] hover:text-[#176b4a]"
              >
                See how it works <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="mt-7 text-xs text-[#718078]">A more human way to get work done.</p>
          </div>
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -inset-8 rounded-[3rem] bg-[#dce9de] blur-2xl" />
            <div className="relative rounded-[1.7rem] border border-white bg-white p-5 shadow-[0_28px_80px_-40px_rgba(32,69,47,.35)] sm:p-7">
              <div className="flex items-center justify-between border-b border-[#edf1ee] pb-5">
                <div>
                  <p className="text-xs font-medium text-[#87948c]">MONDAY, MAY 19</p>
                  <h2 className="mt-1 text-xl font-semibold tracking-tight">
                    Your team at a glance
                  </h2>
                </div>
                <div className="flex -space-x-2" aria-label="Three team members">
                  <span className="grid size-8 place-items-center rounded-full border-2 border-white bg-[#f2d9c7] text-xs">
                    AL
                  </span>
                  <span className="grid size-8 place-items-center rounded-full border-2 border-white bg-[#d7e8d9] text-xs">
                    MK
                  </span>
                  <span className="grid size-8 place-items-center rounded-full border-2 border-white bg-[#e8dcf1] text-xs">
                    +4
                  </span>
                </div>
              </div>
              <div className="mt-5 rounded-2xl bg-[#f5f8f5] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">Product launch</span>
                  <span className="rounded-full bg-[#e3f1e7] px-2.5 py-1 text-[11px] font-medium text-[#347c59]">
                    On track
                  </span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#e3eae4]">
                  <div className="h-full w-[72%] rounded-full bg-[#5ca477]" />
                </div>
                <div className="mt-2 flex justify-between text-xs text-[#87948c]">
                  <span>18 of 25 tasks</span>
                  <span>72%</span>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 rounded-xl border border-[#edf1ee] p-3.5">
                  <span className="grid size-9 place-items-center rounded-xl bg-[#f1e9f6] text-[#7c58a0]">
                    ✦
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">Weekly update is ready</p>
                    <p className="mt-0.5 text-xs text-[#87948c]">
                      Pulled together from 6 project updates
                    </p>
                  </div>
                  <span className="text-[#9ca9a0]">↗</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-[#edf1ee] p-3.5">
                  <span className="grid size-9 place-items-center rounded-xl bg-[#fff2dc] text-[#b58031]">
                    ◷
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">2 decisions need a nudge</p>
                    <p className="mt-0.5 text-xs text-[#87948c]">
                      Your team is waiting on a quick yes
                    </p>
                  </div>
                  <span className="text-[#9ca9a0]">↗</span>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 border-t border-[#edf1ee] pt-4 text-xs text-[#718078]">
                <span className="size-2 rounded-full bg-[#60a77a]" /> Everything important, in one
                place.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#478060]">
            A little more flow
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">
            Work should feel like progress.
          </h2>
          <p className="mt-4 leading-7 text-[#718078]">
            Less noise around the work. More momentum in it.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.number} className="border-t border-[#dfe7e1] pt-5">
              <p className="text-xs font-semibold tracking-wider text-[#8ba595]">
                {feature.number}
              </p>
              <h3 className="mt-7 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-[#718078]">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-6 mb-16 rounded-[1.5rem] bg-[#172d22] px-6 py-12 text-center text-white sm:mx-auto sm:max-w-7xl sm:px-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#a5c8af]">
          Make space for what matters
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-[-.04em] sm:text-4xl">
          Your next good idea deserves a little more room.
        </h2>
        <Link
          href="/settings"
          className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#172d22] transition hover:bg-[#e5f0e8]"
        >
          Set up your workspace{" "}
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </Link>
      </section>
    </main>
  );
}
