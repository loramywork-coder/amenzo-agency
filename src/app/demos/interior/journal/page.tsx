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

const NAV = [
  { label: "Projects", href: "/demos/interior/projects" },
  { label: "Studio", href: "/demos/interior/studio" },
  { label: "Approach", href: "/demos/interior/approach" },
  { label: "Contact", href: "/demos/interior/contact" },
];

const POSTS = [
  {
    img: "/images/interior/project-01.jpg",
    tag: "Materials",
    title: "The Quiet Power of Lime Plaster",
    date: "March 2026",
    excerpt: "Why we keep returning to this ancient finish \u2014 and the Swiss artisan who taught us to see its imperfections as poetry.",
  },
  {
    img: "/images/interior/project-02.jpg",
    tag: "Philosophy",
    title: "Designing for the Senses, Not the Camera",
    date: "February 2026",
    excerpt: "In an age of visual saturation, we argue for interiors that prioritise touch, scent, and acoustics over the perfect photograph.",
  },
  {
    img: "/images/interior/project-04.jpg",
    tag: "Projects",
    title: "Inside H\u00F4tel Noire: A Year Later",
    date: "January 2026",
    excerpt: "Revisiting our Geneva hospitality project twelve months after handover \u2014 how the spaces have evolved with their inhabitants.",
  },
  {
    img: "/images/interior/project-05.jpg",
    tag: "Materials",
    title: "Bronze, Patina, and the Beauty of Age",
    date: "December 2025",
    excerpt: "A meditation on materials that improve with time \u2014 and why we specify them for every project.",
  },
  {
    img: "/images/interior/project-07.jpg",
    tag: "Philosophy",
    title: "The Space Between: On Negative Space",
    date: "November 2025",
    excerpt: "What we choose not to fill matters as much as what we place. Lessons from Japanese ma and Swiss precision.",
  },
  {
    img: "/images/interior/project-09.jpg",
    tag: "Projects",
    title: "Five Lessons from the Engadin",
    date: "October 2025",
    excerpt: "Mountain light, local stone, and the challenge of designing warmth at altitude \u2014 reflections from our latest residential project.",
  },
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
          <p className="text-sm text-white/40 font-[family-name:var(--font-body)] leading-relaxed">Refined interiors for<br />discerning spaces.</p>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-white/30 mb-4 font-[family-name:var(--font-body)]">Navigation</p>
          {["Projects", "Studio", "Approach", "Journal"].map(l => (
            <Link key={l} href={`/demos/interior/${l.toLowerCase()}`} className="block text-sm text-white/60 hover:text-white transition-colors mb-2 font-[family-name:var(--font-body)]">{l}</Link>
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
          <p className="text-sm text-white/60 font-[family-name:var(--font-body)] leading-relaxed">L\u00F6wenstrasse 42<br />8001 Z\u00FCrich, Switzerland</p>
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
export default function JournalPage() {
  return (
    <div style={{ background: P.bg, color: P.text }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 md:px-10 max-w-[1400px] mx-auto">
        <Reveal type="fade">
          <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]" style={{ color: P.textMuted }}>
            Journal
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl font-light mt-4 leading-[1.05]">
            Thoughts &amp; Process
          </h1>
        </Reveal>
        <Reveal type="slide-up" delay={0.2}>
          <p className="font-[family-name:var(--font-body)] text-base md:text-lg mt-6 max-w-xl leading-relaxed" style={{ color: P.textBody }}>
            Essays on materials, philosophy, and the slow practice of making spaces that endure.
          </p>
        </Reveal>
      </section>

      {/* Posts Grid */}
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-14">
          {POSTS.map((post, i) => (
            <Reveal key={i} type="slide-up" delay={i * 0.08}>
              <article className="group cursor-pointer">
                <div className="overflow-hidden mb-5" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[10px] tracking-widest uppercase font-[family-name:var(--font-body)] px-3 py-1"
                    style={{ background: P.bgDark, color: P.accent }}
                  >
                    {post.tag}
                  </span>
                  <span className="text-xs font-[family-name:var(--font-body)]" style={{ color: P.textMuted }}>
                    {post.date}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-light leading-snug group-hover:opacity-70 transition-opacity duration-300">
                  {post.title}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed mt-3" style={{ color: P.textBody }}>
                  {post.excerpt}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
