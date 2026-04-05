"use client";

import Link from "next/link";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";

/* ─────────────────────────── DATA ─────────────────────────── */

const PRESS = [
  {
    publication: "The Art Newspaper",
    quote: "A commanding presence in the Mediterranean art scene",
    year: "2025",
  },
  {
    publication: "Frieze",
    quote: "Atelier Noir bridges the gap between emerging and established",
    year: "2024",
  },
  {
    publication: "Wallpaper*",
    quote: "One of Europe\u2019s most intriguing gallery spaces",
    year: "2024",
  },
  {
    publication: "Apollo",
    quote: "Curating with conviction and clarity",
    year: "2023",
  },
  {
    publication: "Monocle",
    quote: "The gallery Malta needed",
    year: "2023",
  },
];

/* ─────────────────────────── NAV ─────────────────────────── */

function Nav() {
  return (
    <nav className="absolute top-10 left-0 right-0 z-50 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5">
        <Link
          href="/demos/gallery"
          className="text-[11px] tracking-[0.3em] uppercase"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Atelier Noir
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Exhibition", href: "/demos/gallery/exhibition" },
            { label: "Collection", href: "/demos/gallery/collection" },
            { label: "Press", href: "/demos/gallery/press" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 hover:text-white/60"
              style={{
                color:
                  l.label === "Press"
                    ? "rgba(255,255,255,0.6)"
                    : "rgba(255,255,255,0.3)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */

function Footer() {
  return (
    <footer
      className="border-t py-10"
      style={{ background: "#0A0A0A", borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
          <p
            className="tracking-[0.2em] uppercase font-light"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Atelier Noir
          </p>
          <p style={{ color: "rgba(255,255,255,0.15)" }}>
            74 Strait Street, Valletta VLT 1436
          </p>
          <a
            href="#"
            className="tracking-[0.1em] uppercase transition-colors duration-300 hover:text-white/30"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Instagram
          </a>
        </div>
        <p
          className="text-center mt-6 text-[10px]"
          style={{ color: "rgba(255,255,255,0.12)" }}
        >
          &copy; 2026 Atelier Noir
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function PressPage() {
  return (
    <main className="bg-[#0A0A0A] text-white pt-10 min-h-screen">
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
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal>
          <p
            className="text-[9px] tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            Selected Coverage
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            className="text-[48px] md:text-[64px] font-light leading-none"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Press
          </h1>
        </Reveal>
      </section>

      {/* ── Press List ── */}
      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        {PRESS.map((item, i) => (
          <Reveal key={item.publication} delay={i * 0.06}>
            <div
              className="py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 flex-1">
                <p
                  className="text-[14px] font-medium shrink-0 md:w-48"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {item.publication}
                </p>
                <p
                  className="text-[14px] font-light italic leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <p
                className="text-[12px] tracking-[0.1em] shrink-0"
                style={{ color: "rgba(255,255,255,0.18)" }}
              >
                {item.year}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      <Footer />
    </main>
  );
}
