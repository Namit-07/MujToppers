"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const subjects = [
  {
    id: "bme",
    title: "Basic Mechanical Engineering",
    image: "/btech-2nd-year.jpg",
    resources: [
      { label: "PYQs", href: "/coming-soon" },
      { label: "Topper Notes", href: "/coming-soon" },
      { label: "Video Playlists", href: "/coming-soon" },
      { label: "Roadmap", href: "/coming-soon" },
      { label: "PPT Links", href: "/coming-soon" },
    ],
  },
  {
    id: "cam",
    title: "Calculus And Matrices",
    image: "/btech-3rd-year.jpg",
    resources: [
      { label: "PYQs", href: "/coming-soon" },
      { label: "Topper Notes", href: "/coming-soon" },
      { label: "Video Playlists", href: "/coming-soon" },
      { label: "Roadmap", href: "/coming-soon" },
      { label: "PPT Links", href: "/coming-soon" },
    ],
  },
  {
    id: "communication",
    title: "Communication Skills",
    image: "/btech-4th-year.jpg",
    resources: [
      { label: "PYQs", href: "/coming-soon" },
      { label: "Topper Notes", href: "/coming-soon" },
      { label: "Video Playlists", href: "/coming-soon" },
      { label: "Roadmap", href: "/coming-soon" },
      { label: "PPT Links", href: "/coming-soon" },
    ],
  },
  {
    id: "digital-systems",
    title: "Digital Systems",
    image: "/btech-2nd-year.jpg",
    resources: [
      { label: "PYQs", href: "/coming-soon" },
      { label: "Topper Notes", href: "/coming-soon" },
      { label: "Video Playlists", href: "/coming-soon" },
      { label: "Roadmap", href: "/coming-soon" },
      { label: "PPT Links", href: "/coming-soon" },
    ],
  },
  {
    id: "eg",
    title: "Engineering Graphics",
    image: "/btech-3rd-year.jpg",
    resources: [
      { label: "PYQs", href: "/coming-soon" },
      { label: "Topper Notes", href: "/coming-soon" },
      { label: "Video Playlists", href: "/coming-soon" },
      { label: "Roadmap", href: "/coming-soon" },
      { label: "PPT Links", href: "/coming-soon" },
    ],
  },
  {
    id: "electronics-circuits",
    title: "Electronics Circuits",
    image: "/btech-4th-year.jpg",
    resources: [
      { label: "PYQs", href: "/coming-soon" },
      { label: "Topper Notes", href: "/coming-soon" },
      { label: "Video Playlists", href: "/coming-soon" },
      { label: "Roadmap", href: "/coming-soon" },
      { label: "PPT Links", href: "/coming-soon" },
    ],
  },
  {
    id: "engineering-chemistry",
    title: "Engineering Chemistry",
    image: "/btech-2nd-year.jpg",
    resources: [
      { label: "PYQs", href: "/coming-soon" },
      { label: "Topper Notes", href: "/coming-soon" },
      { label: "Video Playlists", href: "/coming-soon" },
      { label: "Roadmap", href: "/coming-soon" },
      { label: "PPT Links", href: "/coming-soon" },
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing Process",
    image: "/btech-3rd-year.jpg",
    resources: [
      { label: "PYQs", href: "/coming-soon" },
      { label: "Topper Notes", href: "/coming-soon" },
      { label: "Video Playlists", href: "/coming-soon" },
      { label: "Roadmap", href: "/coming-soon" },
      { label: "PPT Links", href: "/coming-soon" },
    ],
  },
  {
    id: "psuc",
    title: "Problem Solving Using Computers",
    image: "/btech-4th-year.jpg",
    resources: [
      { label: "PYQs", href: "/coming-soon" },
      { label: "Topper Notes", href: "/coming-soon" },
      { label: "Video Playlists", href: "/coming-soon" },
      { label: "Roadmap", href: "/coming-soon" },
      { label: "PPT Links", href: "/coming-soon" },
    ],
  },
  {
    id: "uhv",
    title: "Universal Human Values",
    image: "/btech-2nd-year.jpg",
    resources: [
      { label: "PYQs", href: "/coming-soon" },
      { label: "Topper Notes", href: "/coming-soon" },
      { label: "Video Playlists", href: "/coming-soon" },
      { label: "Roadmap", href: "/coming-soon" },
      { label: "PPT Links", href: "/coming-soon" },
    ],
  },
];

export default function ChemistryCycleSubjects() {
  const [openSubject, setOpenSubject] = useState(null);

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
        <header className="flex flex-col gap-5 text-center lg:max-w-3xl lg:text-left">
          <span className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-white/15 bg-zinc-900/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur lg:self-start">
            Chemistry Cycle
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Pick Your <span style={{ color: '#ff6a00' }}>Subject</span> And Dive Into The Resources
          </h1>
          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
            Handpicked PDFs, PYQs, slide decks, and lab files to keep your cycle prep focussed. Tap a subject to jump straight to the external
            resource listing.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, index) => {
            // Open upward for last 6 cards (bottom 2 rows), downward for first 4 (top row and second row)
            const isBottomRow = index >= 6;
            
            return (
            <article
              key={subject.id}
              className={`relative flex h-full flex-col overflow-visible rounded-3xl border border-gray-200 bg-white text-zinc-800 shadow-lg shadow-gray-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-orange-500 hover:shadow-orange-100/50 ${openSubject === subject.id ? "z-30" : "z-0"}`}
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-3xl">
                <Image
                  src={subject.image}
                  alt={subject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/70 via-zinc-900/0" aria-hidden="true" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-900">
                  📚 Select a Resource
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-6 p-8">
                <h2 className="text-xl font-semibold leading-tight text-zinc-900">
                  {subject.title}
                </h2>
                <button
                  type="button"
                  onClick={() => setOpenSubject((prev) => (prev === subject.id ? null : subject.id))}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-orange-200 bg-orange-50/50 px-4 py-3 text-sm font-semibold text-zinc-700 transition duration-200 hover:border-orange-400 hover:bg-orange-50"
                >
                  <span>Resource bundles</span>
                  <span className={`text-xs font-semibold uppercase tracking-wide transition ${openSubject === subject.id ? "text-orange-600" : "text-zinc-500"}`}>
                    {openSubject === subject.id ? "Hide" : "View"}
                  </span>
                </button>
              </div>
              {openSubject === subject.id && (
                <div className={`absolute left-6 right-6 z-40 duration-200 ${
                  isBottomRow 
                    ? 'bottom-[calc(40%-1rem)] animate-in fade-in slide-in-from-bottom-2' 
                    : 'top-[calc(95%-1rem)] animate-in fade-in slide-in-from-top-2'
                }`}>
                  <div className="rounded-2xl border border-zinc-200 bg-white/95 p-4 text-sm text-zinc-700 shadow-xl shadow-zinc-900/10 backdrop-blur">
                    <ul className="space-y-2">
                      {subject.resources.map((resource) => (
                        <li
                          key={resource.label}
                          className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2 transition duration-200 hover:bg-orange-50"
                        >
                          <span className="transition-colors duration-200 group-hover:text-zinc-900">
                            {resource.label}
                          </span>
                          {resource.href.startsWith('/') ? (
                            <Link
                              href={resource.href}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-700 transition-colors duration-200 hover:text-orange-600"
                            >
                              Open
                              <span aria-hidden="true">&gt;</span>
                            </Link>
                          ) : (
                            <a
                              href={resource.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-700 transition-colors duration-200 hover:text-orange-600"
                            >
                              Open
                              <span aria-hidden="true">&gt;</span>
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </article>
            );
          })}
        </section>

        <Link
          href="/first-year"
          className="inline-flex w-fit items-center gap-2 self-center rounded-full border border-white/15 bg-zinc-900/80 px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-zinc-900 lg:self-start"
        >
          &larr; Back to cycles overview
        </Link>
      </main>
    </div>
  );
}
