"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";

/* ─────────────────────────── REVEAL ─────────────────────────── */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────── DATA ─────────────────────────── */

const UPCOMING = [
  {
    date: "12 June — 28 August 2026",
    month: "June 2026",
    title: "Echoes of Stone",
    type: "Group Exhibition",
    description:
      "Five Mediterranean artists explore the dialogue between ancient architecture and contemporary practice. Works in limestone, pigment, and video installation occupy the ground-floor galleries.",
    artists: "M. Delacroix, T. Borg, A. Khoury, L. Ferretti, N. Vassallo",
  },
  {
    date: "15 September — 30 November 2026",
    month: "September 2026",
    title: "New Materiality",
    type: "Solo Exhibition",
    description:
      "Thomas Borg presents a new body of work investigating the boundaries between sculpture and painting. Raw industrial materials—steel, concrete, salvaged glass—are assembled into compositions that question the permanence of form.",
    artists: "Thomas Borg",
  },
  {
    date: "10 December 2026 — 15 February 2027",
    month: "December 2026",
    title: "Annual Open",
    type: "Open Call",
    description:
      "Atelier Noir’s annual open submission exhibition. Artists working in any medium are invited to submit proposals exploring the theme of threshold—the spaces between interior and exterior, memory and forgetting, presence and absence.",
    artists: "Open submission",
  },
];

const PAST = [
  { year: "2025", title: "Palimpsest", artist: "Amira Khoury", dates: "Jan — Mar 2025" },
  { year: "2025", title: "The Weight of Light", artist: "Jonas Eriksson", dates: "Apr — Jun 2025" },
  { year: "2024", title: "Terra Incognita", artist: "Group show", dates: "Sep — Dec 2024" },
  { year: "2024", title: "Harbour Variations", artist: "Mara Delacroix", dates: "Mar — Jun 2024" },
];

/* ─────────────────────────── NAV ─────────────────────────── */

function Nav() {
  return (
    <nav
      className="fixed top-10 left-0 right-0 z-50 h-12 flex items-center justify-between px-6 md:px-12"
      style={{ background: "transparent", borderBottom: "none" }}
    >
      <a
        href="/demos/gallery"
        className="text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        Atelier Noir
      </a>
      <div className="flex gap-6">
        {[
          { label: "Works", href: "/demos/gallery" },
          { label: "Artist", href: "/demos/gallery/artist" },
          { label: "Upcoming", href: "/demos/gallery/upcoming" },
          { label: "Visit", href: "/demos/gallery/visit" },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-[11px] tracking-[0.15em] uppercase transition-colors hover:text-white/60"
            style={{ color: l.label === "Upcoming" ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.25)" }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */

function Footer() {
  return (
    <footer className="border-t py-12" style={{ background: "#0A0A0A", borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[13px]">
          <a href="/demos/gallery" className="tracking-[0.15em] uppercase font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
            Atelier Noir
          </a>
          <p style={{ color: "rgba(255,255,255,0.2)" }}>74 Strait Street, Valletta VLT 1436</p>
          <a href="/demos/gallery/impressum" className="tracking-[0.1em] uppercase hover:text-white/40 transition-colors" style={{ color: "rgba(255,255,255,0.2)" }}>
            Impressum
          </a>
        </div>
        <p className="text-center mt-8 text-[12px]" style={{ color: "rgba(255,255,255,0.15)" }}>
          &copy; 2026 Atelier Noir
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function UpcomingPage() {
  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen pt-10">
      <DemoBanner />
      <Nav />

      {/* Film grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[60] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal>
          <p className="text-[9px] tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.15)" }}>
            Upcoming
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            className="text-[36px] font-light leading-tight"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Future Exhibitions
          </h1>
        </Reveal>
      </section>

      {/* ── Timeline ── */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="relative ml-4 md:ml-8" style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
          {UPCOMING.map((ev, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="relative pl-10 md:pl-14 pb-20 last:pb-0">
                {/* Timeline circle marker */}
                <div
                  className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.15)",
                    borderRadius: "50%",
                    background: "#0A0A0A",
                  }}
                />

                <p
                  className="text-[11px] tracking-[0.15em] uppercase mb-2"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {ev.month}
                </p>
                <h3
                  className="text-[24px] md:text-[28px] font-light italic mb-1 leading-tight"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {ev.title}
                </h3>
                <p className="text-[12px] mb-1" style={{ color: "rgba(255,255,255,0.25)" }}>
                  {ev.type}
                </p>
                <p className="text-[12px] mb-4" style={{ color: "rgba(255,255,255,0.2)" }}>
                  {ev.date}
                </p>
                <p
                  className="text-[14px] leading-relaxed max-w-xl mb-3"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {ev.description}
                </p>
                <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
                  {ev.artists}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Past Exhibitions ── */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal>
          <div className="w-full h-px mb-16" style={{ background: "rgba(255,255,255,0.06)" }} />
        </Reveal>
        <Reveal>
          <p
            className="text-[10px] tracking-[0.25em] uppercase mb-8"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Past Exhibitions
          </p>
        </Reveal>
        <div className="space-y-3">
          {PAST.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="text-[11px] shrink-0" style={{ color: "rgba(255,255,255,0.12)" }}>
                  {p.dates}
                </span>
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.15)" }}>
                  {p.title} &mdash; {p.artist}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
