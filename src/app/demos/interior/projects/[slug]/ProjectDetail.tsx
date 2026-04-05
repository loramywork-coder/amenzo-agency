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

/* ─── types ─── */
interface ProjectData {
  title: string;
  client: string;
  location: string;
  area: string;
  year: string;
  scope: string;
  heroImg: string;
  gallery: string[];
  nextSlug: string;
  nextTitle: string;
  materials: { name: string; color: string }[];
}

/* ─── component ─── */
export default function ProjectDetail({ project, slug }: { project: ProjectData; slug: string }) {
  return (
    <div style={{ background: P.bg, color: P.text }}>
      <DemoBanner />
      <Nav />

      {/* Full-bleed Hero */}
      <section className="relative w-full h-screen">
        <Image
          src={project.heroImg}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,24,22,0.15) 0%, rgba(26,24,22,0.5) 100%)" }} />
        <div className="absolute bottom-12 md:bottom-20 left-6 md:left-10 right-6 md:right-10 max-w-[1400px] mx-auto">
          <Reveal type="slide-up">
            <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)] text-white/60 mb-4">
              Project
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-7xl font-light text-white leading-[1.05]">
              {project.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Project Info */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {[
            { label: "Client", value: project.client },
            { label: "Location", value: project.location },
            { label: "Area", value: project.area },
            { label: "Year", value: project.year },
            { label: "Scope", value: project.scope },
          ].map((item, i) => (
            <Reveal key={item.label} type="slide-up" delay={i * 0.06} className={item.label === "Scope" ? "col-span-2 md:col-span-1" : ""}>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] mb-2" style={{ color: P.textMuted }}>
                  {item.label}
                </p>
                <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed" style={{ color: P.textBody }}>
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="h-px w-full" style={{ background: P.border }} />
      </div>

      {/* Editorial Gallery \u2014 4 images */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Row 1: large left + small right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          <Reveal type="fade" className="md:col-span-8">
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
              <Image src={project.gallery[0]} alt={`${project.title} detail 1`} fill className="object-cover" />
            </div>
          </Reveal>
          <Reveal type="fade" delay={0.1} className="md:col-span-4">
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image src={project.gallery[1]} alt={`${project.title} detail 2`} fill className="object-cover" />
            </div>
          </Reveal>
        </div>
        {/* Row 2: small left + large right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <Reveal type="fade" delay={0.15} className="md:col-span-5">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image src={project.gallery[2]} alt={`${project.title} detail 3`} fill className="object-cover" />
            </div>
          </Reveal>
          <Reveal type="fade" delay={0.2} className="md:col-span-7">
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Image src={project.gallery[3]} alt={`${project.title} detail 4`} fill className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Materials Palette */}
      <section style={{ background: P.bgDark }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <Reveal type="fade">
            <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)] mb-10" style={{ color: P.textMuted }}>
              Material Palette
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <div className="flex flex-wrap gap-6 md:gap-10">
              {project.materials.map((mat) => (
                <div key={mat.name} className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 md:w-20 md:h-20 shrink-0"
                    style={{ background: mat.color, border: `1px solid ${P.border}` }}
                  />
                  <div>
                    <p className="font-[family-name:var(--font-heading)] text-base md:text-lg font-light">
                      {mat.name}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-xs mt-0.5" style={{ color: P.textMuted }}>
                      {mat.color}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next Project */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <Reveal type="scale">
          <Link href={`/demos/interior/projects/${project.nextSlug}`} className="group block text-center">
            <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)] mb-4" style={{ color: P.textMuted }}>
              Next Project
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-6xl font-light group-hover:opacity-60 transition-opacity duration-500">
              {project.nextTitle} &rarr;
            </h2>
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
