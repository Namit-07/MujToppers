import Link from "next/link";

const cycles = [
  {
    id: "physics-cycle",
    icon: "🔬",
    title: "Physics Cycle",
    description:
      "Mechanics, electromagnetism, and workshop essentials bundled into ready-to-use study paths.",
    bullets: [
      "Curated PYQs by unit",
      "Lab viva companion sheets",
      "Numerical problem banks",
    ],
    href: "/materials/first-year/physics",
    cta: "Open physics resources",
  },
  {
    id: "chemistry-cycle",
    icon: "⚗️",
    title: "Chemistry Cycle",
    description:
      "Chemistry concept sprints, environmental studies briefs, and practical experiment guides.",
    bullets: [
      "High-yield topic playlists",
      "Experiment observation logs",
      "Quiz-ready flash nuggets",
    ],
    href: "/materials/first-year/chemistry",
    cta: "Open chemistry resources",
  },
];

export default function FirstYearPage() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-16 text-zinc-900 sm:px-8 lg:px-10">
      <div
        className="absolute inset-0 -z-20 bg-[url('/study-doodle.jpg')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-b from-white/95 via-zinc-100/90 to-white/95"
        aria-hidden="true"
      />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-0">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-zinc-900/80 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-zinc-900"
        >
          &larr; Back to all tracks
        </Link>

        <section className="flex flex-col gap-5 text-center lg:max-w-3xl lg:text-left">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
             <span className="text-zinc-900">Explore </span>
            <span className="text-[#ff6a00]">First </span>
            <span className="text-zinc-900">Year Cycle</span>
          </h1>
          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
            Pick your specialization and dive into curated study resources, notes, and more.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {cycles.map((cycle) => (
            <article
              key={cycle.id}
              className="group flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-zinc-100/90 p-8 text-zinc-800 shadow-lg shadow-zinc-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl" aria-hidden="true">
                  {cycle.icon}
                </span>
                <span className="rounded-full bg-zinc-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                  {cycle.title.split(" ")[0]}
                </span>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <h2 className="text-3xl font-semibold text-zinc-900">
                  {cycle.title}
                </h2>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {cycle.description}
                </p>
                <ul className="space-y-2 text-sm text-zinc-600">
                  {cycle.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span
                        className="mt-1 block h-1.5 w-1.5 rounded-full bg-zinc-700"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={cycle.href}
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition-colors duration-200 group-hover:text-sky-600"
              >
                {cycle.cta}
                <span aria-hidden="true">&gt;</span>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
