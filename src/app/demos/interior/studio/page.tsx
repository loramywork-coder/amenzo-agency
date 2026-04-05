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

const TEAM = [
  { name: "Isabelle Morel", role: "Founder & Creative Director" },
  { name: "Lukas Bauer", role: "Senior Designer" },
  { name: "Anh Nguyen", role: "Materials Specialist" },
  { name: "Clara Fontaine", role: "Project Architect" },
  { name: "Matteo Ricci", role: "Lighting Designer" },
  { name: "Yuki Tanaka", role: "Junior Designer" },
  { name: "Sara Lindqvist", role: "Studio Manager" },
];

const TIMELINE = [
  { year: "2014", event: "Studio founded in Z\u00FCrich by Isabelle Morel" },
  { year: "2017", event: "First AD Award \u2014 Residential Interior of the Year" },
  { year: "2020", event: "Named to the AD100 list of top design firms" },
  { year: "2023", event: "50th project completed \u2014 H\u00F4tel Noire, Geneva" },
  { year: "2026", event: "80th project milestone \u2014 Atelier Noir, Z\u00FCrich" },
];

const AWARDS = [
  "AD100 \u2014 Architectural Digest, 2020\u20132026",
  "Frame Awards \u2014 Residential Interior, 2021",
  "Interior Design Best of Year \u2014 Hospitality, 2022",
  "Frame Awards \u2014 Hospitality, 2023",
  "Swiss Design Award \u2014 Interior Practice, 2024",
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
export default function StudioPage() {
  return (
    <div style={{ background: P.bg, color: P.text }}>
      <DemoBanner />
      <Nav />

      {/* Hero Image */}
      <section className="pt-10">
        <div className="w-full h-[60vh] md:h-[75vh] relative overflow-hidden">
          <Image
            src="/images/interior/project-06.jpg"
            alt="Studio Ēlan workspace"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,24,22,0.2), rgba(26,24,22,0.5))" }} />
        </div>
      </section>

      {/* The Studio */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <Reveal type="fade">
              <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]" style={{ color: P.textMuted }}>
                About
              </p>
            </Reveal>
            <Reveal type="slide-up" delay={0.1}>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl font-light mt-4 leading-[1.05]">
                The Studio
              </h1>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal type="slide-up" delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-base md:text-lg leading-[1.8] mb-8" style={{ color: P.textBody }}>
                Studio Ēlan was founded in 2014 by Isabelle Morel, following a decade of practice at Yabu Pushelberg in Toronto and a formative period studying the quiet disciplines of Japanese spatial design. The studio operates from the conviction that interiors should not merely be decorated \u2014 they should be felt.
              </p>
            </Reveal>
            <Reveal type="slide-up" delay={0.3}>
              <p className="font-[family-name:var(--font-body)] text-base md:text-lg leading-[1.8] mb-8" style={{ color: P.textBody }}>
                Based in Z\u00FCrich, the practice has grown to a team of seven, each bringing a distinct sensibility to the studio&rsquo;s interdisciplinary approach. We work across residential, hospitality, and commercial projects, united by a shared attention to light, material, and the emotional register of space.
              </p>
            </Reveal>
            <Reveal type="slide-up" delay={0.4}>
              <p className="font-[family-name:var(--font-body)] text-base md:text-lg leading-[1.8]" style={{ color: P.textBody }}>
                Every project begins with listening \u2014 to the client, the site, the way light enters a room at different hours. We believe restraint is a form of generosity: each material chosen, each proportion calibrated, serves the life that will unfold within the space.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="h-px w-full" style={{ background: P.border }} />
      </div>

      {/* Team */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <Reveal type="fade">
          <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)] mb-4" style={{ color: P.textMuted }}>
            People
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-light mb-16 leading-tight">
            The Team
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} type="slide-up" delay={i * 0.06}>
              <div className="flex items-baseline justify-between py-5 border-b" style={{ borderColor: P.border }}>
                <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-light">
                  {member.name}
                </h3>
                <span className="font-[family-name:var(--font-body)] text-sm" style={{ color: P.textMuted }}>
                  {member.role}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="h-px w-full" style={{ background: P.border }} />
      </div>

      {/* Timeline */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <Reveal type="fade">
          <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)] mb-4" style={{ color: P.textMuted }}>
            Milestones
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-light mb-16 leading-tight">
            2014 \u2014 2026
          </h2>
        </Reveal>
        <div className="space-y-0">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.year} type="slide-up" delay={i * 0.08}>
              <div className="grid grid-cols-12 gap-4 py-6 border-b items-baseline" style={{ borderColor: P.border }}>
                <div className="col-span-3 md:col-span-2">
                  <span className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-light italic" style={{ color: P.accent }}>
                    {item.year}
                  </span>
                </div>
                <div className="col-span-9 md:col-span-10">
                  <p className="font-[family-name:var(--font-body)] text-base md:text-lg" style={{ color: P.textBody }}>
                    {item.event}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="h-px w-full" style={{ background: P.border }} />
      </div>

      {/* Awards */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <Reveal type="fade">
          <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)] mb-4" style={{ color: P.textMuted }}>
            Recognition
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-light mb-16 leading-tight">
            Awards
          </h2>
        </Reveal>
        <div className="space-y-0">
          {AWARDS.map((award, i) => (
            <Reveal key={i} type="fade" delay={i * 0.06}>
              <div className="py-5 border-b" style={{ borderColor: P.border }}>
                <p className="font-[family-name:var(--font-body)] text-base md:text-lg" style={{ color: P.textBody }}>
                  {award}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
