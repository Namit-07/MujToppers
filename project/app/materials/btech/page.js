import Link from "next/link";

const branches = [
  {
    id: "chemical-engineering",
    title: "B Tech Chemical Engineering",
    icon: "⚗️",
    href: "/materials/btech/chemical-engineering",
  },
  {
    id: "civil-engineering",
    title: "B Tech Civil Engineering",
    icon: "🏗️",
    href: "/materials/btech/civil-engineering",
  },
  {
    id: "computer-science-engineering",
    title: "B Tech Computer Science & Engineering",
    icon: "💻",
    href: "/materials/btech/computer-science-engineering",
  },
  {
    id: "electrical-computer-engineering",
    title: "B Tech Electrical and Computer Engineering",
    icon: "⚡",
    href: "/materials/btech/electrical-computer-engineering",
  },
  {
    id: "electronics-communication-engineering",
    title: "B Tech Electronics & Communication Engineering",
    icon: "📡",
    href: "/materials/btech/electronics-communication-engineering",
  },
  {
    id: "electronics-vlsi",
    title: "B Tech Electronics Engineering (VLSI Design and Technology)",
    icon: "🔬",
    href: "/materials/btech/electronics-vlsi",
  },
  {
    id: "mechanical-engineering",
    title: "B Tech Mechanical Engineering",
    icon: "⚙️",
    href: "/materials/btech/mechanical-engineering",
  },
  {
    id: "mechatronics-engineering",
    title: "B Tech Mechatronics Engineering",
    icon: "🤖",
    href: "/materials/btech/mechatronics-engineering",
  },
  {
    id: "computer-science-biosciences",
    title: "B Tech Computer Science and Biosciences",
    icon: "🧬",
    href: "/materials/btech/computer-science-biosciences",
  },
  {
    id: "robotics-ai",
    title: "B Tech (Robotics and Artificial Intelligence)",
    icon: "🦾",
    href: "/materials/btech/robotics-ai",
  },
];

export default function BTechBranches() {
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
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-zinc-900/80 px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-zinc-900"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <header className="flex flex-col gap-5 text-center lg:max-w-3xl lg:text-left">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span style={{ color: '#ff6a00' }}>BTech</span> Branches
          </h1>
          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
            Select your engineering branch to access curated study materials, notes, and resources.
          </p>
        </header>

        {/* Branches Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <Link
              key={branch.id}
              href={branch.href}
              className="group flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-zinc-100/90 p-8 text-zinc-800 shadow-lg shadow-zinc-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">
                  {branch.icon}
                </span>
              </div>
              <h2 className="text-xl font-semibold leading-tight text-zinc-900 group-hover:text-sky-600 transition-colors duration-200">
                {branch.title}
              </h2>
              <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition-colors duration-200 group-hover:text-sky-600">
                View resources
                <span aria-hidden="true">&gt;</span>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
