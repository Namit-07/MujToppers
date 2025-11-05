import Link from "next/link";

const tracks = [
  {
    id: "first-year",
    icon: "📚",
    title: "First Year",
    shortLabel: "FY",
    description:
      "Foundation courses and core fundamentals with curated lecture notes and PYQs.",
    bullets: [
      "Semester-wise roadmaps",
      "Lab manuals and viva decks",
      "Continuous assessment prep kits",
    ],
    href: "/first-year",
    cta: "Explore cycles",
  },
  {
    id: "bba",
    icon: "📈",
    title: "BBA",
    shortLabel: "BBA",
    description:
      "Business modules, finance briefs, and case-study breakdowns tailored for MUJ BBA cohorts.",
    bullets: [
      "Subject cheat-sheets",
      "Presentation templates",
      "Interview-ready talking points",
    ],
    href: "/materials/bba",
    cta: "View details",
  },
  {
    id: "btech",
    icon: "⚙️",
    title: "BTech",
    shortLabel: "BTech",
    description:
      "Branch-specific deep dives, project starter kits, and placement-focused resources.",
    bullets: [
      "Core concept refreshers",
      "Mini project blueprints",
      "DSA and aptitude drills",
    ],
    href: "/materials/btech",
    cta: "View details",
  },
];

export default function Home() {
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
        <section className="flex flex-col gap-5 text-center lg:max-w-3xl lg:text-left">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Your <span style={{ color: '#ff6a00' }}>Semester</span> Playbook Starts Here
          </h1>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <article
              key={track.id}
              className="group flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-zinc-100/90 p-8 text-zinc-800 shadow-lg shadow-zinc-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <span className="text-4xl" aria-hidden="true">
                  {track.icon}
                </span>
                <span className="rounded-full bg-zinc-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                  {track.shortLabel}
                </span>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-zinc-900">
                  {track.title}
                </h2>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {track.description}
                </p>
                <ul className="space-y-2 text-sm text-zinc-600">
                  {track.bullets.map((bullet) => (
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
                href={track.href}
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition-colors duration-200 group-hover:text-sky-600"
              >
                {track.cta}
                <span aria-hidden="true">&gt;</span>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
