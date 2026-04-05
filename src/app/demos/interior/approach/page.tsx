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

const PILLARS = [
  {
    title: "Light",
    img: "/images/interior/project-01.jpg",
    text: "Light is the first material we design with. Before selecting a single finish, we study how sunlight enters a room across the seasons \u2014 the warm wash of morning, the sharp geometry of noon, the amber dissolution of evening. Every window becomes a frame for this daily performance. We layer artificial light to echo these natural rhythms, creating spaces that breathe with the passage of hours. A room that honours its light needs very little else.",
  },
  {
    title: "Material",
    img: "/images/interior/project-03.jpg",
    text: "We choose materials not for their novelty, but for their honesty. A hand-trowelled lime plaster wall carries the memory of its maker; a slab of Vals quartzite speaks of geological time. Our material palette is deliberately restrained \u2014 stone, timber, linen, bronze, plaster \u2014 because restraint allows each surface to be truly noticed. We source directly from quarries, mills, and workshops, building relationships with artisans who share our belief that craft is a form of care.",
  },
  {
    title: "Proportion",
    img: "/images/interior/project-05.jpg",
    text: "Proportion is the invisible architecture of comfort. A ceiling height that makes you stand taller. A corridor width that invites you to slow down. The distance between a sofa and a fireplace that creates intimacy without confinement. These calibrations are felt before they are understood. We work in physical models and full-scale mock-ups, testing spatial relationships with our bodies before committing them to construction drawings. The best proportions disappear \u2014 you simply feel at ease.",
  },
  {
    title: "Time",
    img: "/images/interior/project-08.jpg",
    text: "We design for the long view. Oak floors that will patina over decades. Brass hardware that deepens with each touch. Linen upholstery that softens with every season. Trends are temporary; the qualities we seek \u2014 warmth, dignity, quietude \u2014 are permanent. A Studio \u0112lan interior should feel more beautiful in ten years than it does on the day of handover. This is our deepest measure of success: spaces that age with the same grace as the lives lived within them.",
  },
];

const PROCESS = [
  { step: "01", title: "First Meeting", desc: "A conversation about how you live, what you value, and what the space should feel like." },
  { step: "02", title: "Site Reading", desc: "We study the architecture, the light, the neighbourhood \u2014 everything the space already knows." },
  { step: "03", title: "Concept", desc: "A material and spatial narrative distilled into mood boards, sketches, and sample palettes." },
  { step: "04", title: "Design Development", desc: "Detailed drawings, specifications, and 3D visualisations refined through close dialogue." },
  { step: "05", title: "Realisation", desc: "On-site supervision ensuring every joint, finish, and detail meets our shared standard." },
  { step: "06", title: "Handover", desc: "The moment the space becomes yours \u2014 ready to be lived in, not just admired." },
];

/* ─── Nav ─── */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-10 left-0 right-0 z-50 mix-blend-difference">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <Link href="/demos/interior" className="text-white font-[family-name:var(--font-heading)] text-xl tracking-wide">
          Studio \u0112lan
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
          <p className="font-[family-name:var(--font-heading)] text-2xl mb-4">Studio \u0112lan</p>
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
          <p className="text-xs text-white/30 font-[family-name:var(--font-body)]">&copy; 2026 Studio \u0112lan. All rights reserved.</p>
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
export default function ApproachPage() {
  return (
    <div style={{ background: P.bg, color: P.text }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-10 max-w-[1400px] mx-auto">
        <Reveal type="fade">
          <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]" style={{ color: P.textMuted }}>
            Philosophy
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl font-light mt-4 leading-[1.05] max-w-4xl">
            Design is the quiet discipline of paying attention
          </h1>
        </Reveal>
      </section>

      {/* Pillars */}
      {PILLARS.map((pillar, i) => (
        <section key={pillar.title} className="mb-0">
          <Reveal type="fade">
            <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden">
              <Image
                src={pillar.img}
                alt={pillar.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(26,24,22,0.6))" }} />
              <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10">
                <span className="font-[family-name:var(--font-heading)] text-white text-4xl md:text-6xl font-light italic">
                  {pillar.title}
                </span>
              </div>
            </div>
          </Reveal>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24">
            <Reveal type="slide-up" delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-2">
                  <span className="font-[family-name:var(--font-heading)] text-6xl font-light italic" style={{ color: P.border }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-8">
                  <p className="font-[family-name:var(--font-body)] text-base md:text-lg leading-[1.9]" style={{ color: P.textBody }}>
                    {pillar.text}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          {i < PILLARS.length - 1 && (
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <div className="h-px w-full" style={{ background: P.border }} />
            </div>
          )}
        </section>
      ))}

      {/* Process */}
      <section style={{ background: P.bgDark }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <Reveal type="fade">
            <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)] mb-4" style={{ color: P.textMuted }}>
              How We Work
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-light mb-20 leading-tight">
              The Process
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {PROCESS.map((item, i) => (
              <Reveal key={item.step} type="slide-up" delay={i * 0.08}>
                <div>
                  <span className="font-[family-name:var(--font-heading)] text-3xl font-light italic" style={{ color: P.accent }}>
                    {item.step}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-light mt-3 mb-4">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed" style={{ color: P.textBody }}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
        <Reveal type="scale">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-light mb-8 leading-tight">
            Ready to begin?
          </h2>
          <Link
            href="/demos/interior/contact"
            className="inline-block rounded-none px-10 py-4 text-xs tracking-widest uppercase font-[family-name:var(--font-body)] transition-all duration-300 hover:opacity-80"
            style={{ background: P.dark, color: "#fff" }}
          >
            Start a Conversation
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
