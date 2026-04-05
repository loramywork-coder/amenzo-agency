"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";

/* ─── palette ─── */
const P = {
  bg: "#F5F2ED", bgDark: "#EDE9E3", surface: "#FFFFFF",
  dark: "#1A1816", darkSurface: "#242220",
  text: "#1A1816", textBody: "#6B6560", textMuted: "#9E9891",
  accent: "#8B7355", accentLight: "#A89070",
  border: "#E2DED8", borderDark: "#333028",
};

/* ─── nav ─── */
const NAV = [
  { label: "Projects", href: "/demos/interior/projects" },
  { label: "Studio", href: "/demos/interior/studio" },
  { label: "Approach", href: "/demos/interior/approach" },
  { label: "Contact", href: "/demos/interior/contact" },
];

const FILTERS = ["All", "Residential", "Hospitality", "Commercial"] as const;

const PROJECTS = [
  { num: "01", title: "Lake House Lucerne", type: "Residential", area: "320 m\u00B2", year: "2024", slug: "lake-house", img: "/images/interior/project-01.jpg" },
  { num: "02", title: "Alpine Retreat Verbier", type: "Hospitality", area: "580 m\u00B2", year: "2023", slug: "alpine-retreat", img: "/images/interior/project-02.jpg" },
  { num: "03", title: "Z\u00FCrich Penthouse", type: "Residential", area: "210 m\u00B2", year: "2024", slug: "zurich-penthouse", img: "/images/interior/project-03.jpg" },
  { num: "04", title: "H\u00F4tel Noire Geneva", type: "Hospitality", area: "1,200 m\u00B2", year: "2022", slug: "hotel-noire", img: "/images/interior/project-04.jpg" },
  { num: "05", title: "Gallery Loft Basel", type: "Commercial", area: "440 m\u00B2", year: "2023", slug: "gallery-loft", img: "/images/interior/project-05.jpg" },
  { num: "06", title: "Engadin Chalet", type: "Residential", area: "290 m\u00B2", year: "2025", slug: "engadin-chalet", img: "/images/interior/project-06.jpg" },
  { num: "07", title: "Brasserie Z\u00FCri", type: "Hospitality", area: "350 m\u00B2", year: "2025", slug: "brasserie-zuri", img: "/images/interior/project-07.jpg" },
  { num: "08", title: "Atelier Noir", type: "Commercial", area: "180 m\u00B2", year: "2026", slug: "atelier-noir", img: "/images/interior/project-08.jpg" },
];

/* ─── Nav ─── */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-10 left-0 right-0 z-50 mix-blend-difference">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <Link href="/demos/interior" className="text-white font-[family-name:var(--font-heading)] text-xl tracking-wide">
          Studio Ēlan
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV.map(l => (
            <Link key={l.href} href={l.href} className="text-white/80 hover:text-white text-[13px] font-[family-name:var(--font-body)] tracking-widest uppercase transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4">
          {NAV.map(l => (
            <Link key={l.href} href={l.href} className="text-white/80 hover:text-white text-sm font-[family-name:var(--font-body)] tracking-widest uppercase">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer style={{ background: P.dark, color: "#fff" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div>
          <p className="font-[family-name:var(--font-heading)] text-2xl mb-4">Studio Ēlan</p>
          <p className="text-sm text-white/40 font-[family-name:var(--font-body)] leading-relaxed">
            Refined interiors for<br />discerning spaces.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-white/30 mb-4 font-[family-name:var(--font-body)]">Navigation</p>
          {["Projects", "Studio", "Approach", "Journal"].map(l => (
            <Link key={l} href={`/demos/interior/${l.toLowerCase()}`} className="block text-sm text-white/60 hover:text-white transition-colors mb-2 font-[family-name:var(--font-body)]">
              {l}
            </Link>
          ))}
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-white/30 mb-4 font-[family-name:var(--font-body)]">Connect</p>
          {["Instagram", "Pinterest", "LinkedIn"].map(l => (
            <span key={l} className="block text-sm text-white/60 mb-2 font-[family-name:var(--font-body)]">{l}</span>
          ))}
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-white/30 mb-4 font-[family-name:var(--font-body)]">Contact</p>
          <p className="text-sm text-white/60 font-[family-name:var(--font-body)] leading-relaxed">
            L\u00F6wenstrasse 42<br />8001 Z\u00FCrich, Switzerland
          </p>
          <p className="text-sm text-white/60 font-[family-name:var(--font-body)] mt-2">hello@studioelan.ch</p>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: P.borderDark }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-[family-name:var(--font-body)]">&copy; 2026 Studio Ēlan. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/demos/interior/press" className="text-xs text-white/30 hover:text-white/60 transition-colors font-[family-name:var(--font-body)]">Press</Link>
            <Link href="/demos/interior/impressum" className="text-xs text-white/30 hover:text-white/60 transition-colors font-[family-name:var(--font-body)]">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── page ─── */
export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.type === filter);

  return (
    <div style={{ background: P.bg, color: P.text }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 md:px-10 max-w-[1400px] mx-auto">
        <Reveal type="fade">
          <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]" style={{ color: P.textMuted }}>
            Portfolio
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl font-light mt-4 leading-[1.05]">
            All Projects
          </h1>
        </Reveal>
        <Reveal type="slide-up" delay={0.2}>
          <p className="font-[family-name:var(--font-body)] text-base md:text-lg mt-6 max-w-xl leading-relaxed" style={{ color: P.textBody }}>
            A curated collection of residential, hospitality, and commercial interiors shaped by light, material, and quiet intention.
          </p>
        </Reveal>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-12">
        <Reveal type="fade" delay={0.3}>
          <div className="flex gap-2 flex-wrap">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="rounded-none px-5 py-2.5 text-xs tracking-widest uppercase font-[family-name:var(--font-body)] transition-all duration-300"
                style={{
                  background: filter === f ? P.dark : "transparent",
                  color: filter === f ? "#fff" : P.textBody,
                  border: `1px solid ${filter === f ? P.dark : P.border}`,
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
          {filtered.map((project, i) => {
            const colIndex = i % 3;
            const offsetClass = colIndex === 1 ? "md:mt-[60px]" : "";
            return (
              <Reveal key={project.slug} type="slide-up" delay={i * 0.08} className={offsetClass}>
                <Link href={`/demos/interior/projects/${project.slug}`} className="group block">
                  <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-5">
                    <span className="font-[family-name:var(--font-heading)] text-sm italic" style={{ color: P.accent }}>
                      {project.num}
                    </span>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-light mt-1 group-hover:opacity-70 transition-opacity duration-300">
                      {project.title}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-xs tracking-wide mt-2" style={{ color: P.textMuted }}>
                      {project.type} &middot; {project.area} &middot; {project.year}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
