"use client";

import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Briefcase, TrendingUp, Globe, MapPin, Heart, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const P = { bg: "#FFFFFF", surface: "#F8F9FA", surfaceLight: "#F1F3F5", white: "#111827", muted: "#9CA3AF", mutedLight: "#6B7280", border: "#E5E7EB", blue: "#1D4ED8", blueLight: "#2563EB", blueDark: "#1D4ED8", cyan: "#0891B2", green: "#059669", amber: "#D97706", buttonText: "#FFFFFF" };

const NAV_LINKS = [
  { label: "Mission", href: "/demos/startup/mission" },
  { label: "Technology", href: "/demos/startup/technology" },
  { label: "Launches", href: "/demos/startup/launches" },
  { label: "Team", href: "/demos/startup/team" },
  { label: "Careers", href: "/demos/startup/careers" },
  { label: "Press", href: "/demos/startup/press" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-10 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 h-16" style={{ background: `${P.bg}ee`, backdropFilter: "blur(12px)", borderBottom: `1px solid ${P.border}` }}>
        <Link href="/demos/startup" className="flex items-center gap-2 text-lg font-semibold tracking-tight" style={{ color: P.white, fontFamily: "var(--font-body)" }}><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="13" stroke="#111827" strokeWidth="1" /><path d="M14 4 L18 14 L14 12 L10 14 Z" fill="#111827" opacity="0.9" /><path d="M10 14 L14 12 L18 14 L14 24 Z" fill="#111827" opacity="0.5" /></svg>Nova Space</Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => <Link key={l.href} href={l.href} className="text-sm transition-colors hover:text-gray-900" style={{ color: P.muted, fontFamily: "var(--font-body)" }}>{l.label}</Link>)}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu"><Menu size={22} color={P.white} /></button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col" style={{ background: P.bg }}>
          <div className="flex items-center justify-between px-6 h-16 mt-10">
            <span className="flex items-center gap-2 text-lg font-semibold" style={{ color: P.white }}><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="13" stroke="#111827" strokeWidth="1" /><path d="M14 4 L18 14 L14 12 L10 14 Z" fill="#111827" opacity="0.9" /><path d="M10 14 L14 12 L18 14 L14 24 Z" fill="#111827" opacity="0.5" /></svg>Nova Space</span>
            <button onClick={() => setOpen(false)} aria-label="Close"><X size={22} color={P.white} /></button>
          </div>
          <div className="flex flex-col gap-6 px-6 pt-8">
            {NAV_LINKS.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-2xl font-medium" style={{ color: P.white }}>{l.label}</Link>)}
          </div>
        </div>
      )}
    </>
  );
}

function Footer() {
  const cols = [
    { title: "Product", links: [{ label: "Technology", href: "/demos/startup/technology" }, { label: "Launches", href: "/demos/startup/launches" }, { label: "Datasheet", href: "#" }] },
    { title: "Company", links: [{ label: "Mission", href: "/demos/startup/mission" }, { label: "Team", href: "/demos/startup/team" }, { label: "Careers", href: "/demos/startup/careers" }] },
    { title: "Resources", links: [{ label: "Press", href: "/demos/startup/press" }, { label: "Contact", href: "/demos/startup/contact" }, { label: "Blog", href: "#" }] },
    { title: "Connect", links: [{ label: "LinkedIn", href: "#" }, { label: "Twitter", href: "#" }, { label: "GitHub", href: "#" }] },
    { title: "Legal", links: [{ label: "Impressum", href: "/demos/startup/impressum" }, { label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
  ];
  return (
    <footer style={{ background: P.surface, borderTop: `1px solid ${P.border}` }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {cols.map(c => (
          <div key={c.title}>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: P.mutedLight }}>{c.title}</h4>
            <ul className="space-y-2">
              {c.links.map(l => <li key={l.label}><Link href={l.href} className="text-sm transition-colors hover:text-gray-900" style={{ color: P.muted }}>{l.label}</Link></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="flex items-center gap-2 text-xs" style={{ color: P.muted }}><svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="13" stroke="#111827" strokeWidth="1" /><path d="M14 4 L18 14 L14 12 L10 14 Z" fill="#111827" opacity="0.9" /><path d="M10 14 L14 12 L18 14 L14 24 Z" fill="#111827" opacity="0.5" /></svg>&copy; 2026 Nova Space AG. All rights reserved.</span>
        <span className="text-xs" style={{ color: P.muted }}>Technoparkstrasse 1, 8005 Z&uuml;rich</span>
      </div>
    </footer>
  );
}

const benefits = [
  { icon: TrendingUp, title: "Meaningful Equity", desc: "Every team member receives a significant stock option grant. We want everyone to share in the upside of what we build together.", color: P.blue },
  { icon: Globe, title: "ESA & Agency Access", desc: "Work directly with ESA, DLR, JAXA, and other space agencies. Attend launches, test campaigns, and international conferences.", color: P.cyan },
  { icon: MapPin, title: "Z\u00fcrich, Switzerland", desc: "Our office is in Technopark Z\u00fcrich, one of Europe\u2019s leading innovation hubs. World-class transit, mountains on your doorstep, and a thriving deep-tech community.", color: P.green },
  { icon: Heart, title: "Real Impact", desc: "Your work will fly in space. Every thruster we ship makes orbit safer, more accessible, and more sustainable for everyone.", color: P.amber },
];

const positions = [
  { title: "Senior Propulsion Engineer", dept: "Engineering", location: "Z\u00fcrich", type: "Full-time" },
  { title: "Embedded Systems Engineer", dept: "Engineering", location: "Z\u00fcrich", type: "Full-time" },
  { title: "MEMS Fabrication Technician", dept: "Manufacturing", location: "Z\u00fcrich", type: "Full-time" },
  { title: "Mission Operations Analyst", dept: "Operations", location: "Z\u00fcrich / Remote", type: "Full-time" },
  { title: "Product Manager \u2014 Propulsion Systems", dept: "Product", location: "Z\u00fcrich", type: "Full-time" },
  { title: "Technical Sales Engineer", dept: "Business Development", location: "Z\u00fcrich / Remote", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <div style={{ background: P.bg, color: P.white, fontFamily: "var(--font-body)" }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <Reveal type="fade">
          <span className="inline-block text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full mb-6" style={{ color: P.green, border: `1px solid ${P.green}33` }}>Careers</span>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">Join the Mission</h1>
        </Reveal>
        <Reveal type="slide-up" delay={0.2}>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: P.mutedLight }}>
            We&apos;re building the propulsion standard for the next generation of satellites. Join 22 engineers and operators in Z&uuml;rich making orbit accessible to everyone.
          </p>
        </Reveal>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 lg:px-12" style={{ background: P.surface }}>
        <div className="max-w-5xl mx-auto">
          <Reveal type="slide-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight text-center">Why Nova Space</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={i} type="slide-up" delay={i * 0.1}>
                <div className="p-6 rounded-xl h-full" style={{ background: P.surfaceLight, border: `1px solid ${P.border}` }}>
                  <b.icon size={24} color={b.color} className="mb-4" />
                  <h3 className="text-lg font-semibold mb-2" style={{ color: P.white }}>{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: P.mutedLight }}>{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <Reveal type="slide-up">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase size={20} color={P.blue} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: P.blue }}>Open Positions</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">Current Openings</h2>
          </Reveal>
          <div className="space-y-4">
            {positions.map((p, i) => (
              <Reveal key={i} type="slide-up" delay={i * 0.05}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-xl gap-4" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
                  <div>
                    <h3 className="text-base font-semibold mb-1" style={{ color: P.white }}>{p.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm" style={{ color: P.muted }}>
                      <span>{p.dept}</span>
                      <span style={{ color: P.border }}>&bull;</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> {p.location}</span>
                      <span style={{ color: P.border }}>&bull;</span>
                      <span>{p.type}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors flex-shrink-0" style={{ background: P.blue, color: P.buttonText }}>
                    Apply <ArrowRight size={14} />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Speculative Application */}
      <section className="py-20 px-6 lg:px-12 text-center" style={{ background: P.surface }}>
        <div className="max-w-2xl mx-auto">
          <Reveal type="scale">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Don&apos;t see your role?</h2>
            <p className="text-base mb-8" style={{ color: P.mutedLight }}>
              We&apos;re always looking for exceptional people. Send us a speculative application and tell us what you&apos;d build at Nova Space. We read every one.
            </p>
            <Link href="mailto:careers@novaspace.example" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-colors" style={{ background: P.surfaceLight, color: P.white, border: `1px solid ${P.border}` }}>
              Send Speculative Application <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
