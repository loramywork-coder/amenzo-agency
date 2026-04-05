"use client";

import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Newspaper, ExternalLink, Download, Mail, Menu, X } from "lucide-react";
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

const pressReleases = [
  { date: "Jan 15, 2025", title: "Nova Space Completes ESA OPS-SAT-2 Technology Validation", summary: "All flight objectives met as the NPX-200 thruster achieves ESA qualification milestone, confirming 210 m/s delta-v budget for the 20 kg spacecraft class." },
  { date: "Sep 22, 2024", title: "NOVA-2 Demonstrates First Electrospray Formation Flying", summary: "Two NPX-200-equipped CubeSats achieve 10 km inter-satellite spacing in a world-first for electrospray-propelled formation flying on Rocket Lab Electron." },
  { date: "Jun 8, 2024", title: "Nova Space Closes \u20AC12M Series A Led by Lakestar", summary: "Funding to scale production to 200 thrusters per year and expand the team to 30 engineers at the Technopark Z\u00fcrich facility." },
  { date: "Mar 4, 2024", title: "NPX-200 Fires in Orbit for the First Time on NOVA-1 Mission", summary: "Nova Space\u2019s flagship electrospray thruster ignites on SpaceX Transporter-10, delivering measured specific impulse of 1,185 seconds." },
];

const mediaCoverage = [
  { outlet: "SpaceNews", title: "Swiss startup Nova Space bets on electrospray for CubeSat propulsion", url: "#" },
  { outlet: "TechCrunch", title: "Nova Space raises \u20AC12M to put thrusters on every satellite", url: "#" },
  { outlet: "The Verge", title: "This tiny thruster could clean up space debris", url: "#" },
  { outlet: "Handelszeitung", title: "Z\u00fcrcher Startup Nova Space startet ins All", url: "#" },
  { outlet: "ESA Blog", title: "OPS-SAT-2 validates next-generation electric propulsion", url: "#" },
  { outlet: "Ars Technica", title: "Electrospray thrusters: the propulsion revolution you haven\u2019t heard of", url: "#" },
];

export default function PressPage() {
  return (
    <div style={{ background: P.bg, color: P.white, fontFamily: "var(--font-body)" }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <Reveal type="fade">
          <span className="inline-block text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full mb-6" style={{ color: P.amber, border: `1px solid ${P.amber}33` }}>Press &amp; Media</span>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">Newsroom</h1>
        </Reveal>
        <Reveal type="slide-up" delay={0.2}>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: P.mutedLight }}>
            Press releases, media coverage, and resources for journalists covering Nova Space.
          </p>
        </Reveal>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-6 lg:px-12" style={{ background: P.surface }}>
        <div className="max-w-4xl mx-auto">
          <Reveal type="slide-up">
            <div className="flex items-center gap-3 mb-2">
              <Newspaper size={20} color={P.blue} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: P.blue }}>Press Releases</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">Latest Announcements</h2>
          </Reveal>
          <div className="space-y-4">
            {pressReleases.map((pr, i) => (
              <Reveal key={i} type="slide-up" delay={i * 0.1}>
                <div className="p-6 rounded-xl" style={{ background: P.surfaceLight, border: `1px solid ${P.border}` }}>
                  <div className="text-xs font-medium mb-2" style={{ color: P.muted, fontFamily: "var(--font-mono)" }}>{pr.date}</div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: P.white }}>{pr.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: P.mutedLight }}>{pr.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <Reveal type="slide-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">Media Coverage</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {mediaCoverage.map((m, i) => (
              <Reveal key={i} type="slide-up" delay={i * 0.05}>
                <a href={m.url} className="flex items-start justify-between p-5 rounded-xl transition-colors group" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: P.blue, fontFamily: "var(--font-mono)" }}>{m.outlet}</div>
                    <p className="text-sm font-medium leading-snug" style={{ color: P.white }}>{m.title}</p>
                  </div>
                  <ExternalLink size={16} className="flex-shrink-0 mt-1 ml-3 opacity-40 group-hover:opacity-100 transition-opacity" color={P.muted} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit & Contact */}
      <section className="py-20 px-6 lg:px-12" style={{ background: P.surface }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Reveal type="slide-up">
            <div className="p-8 rounded-xl h-full" style={{ background: P.surfaceLight, border: `1px solid ${P.border}` }}>
              <Download size={24} color={P.blue} className="mb-4" />
              <h3 className="text-xl font-bold mb-3" style={{ color: P.white }}>Media Kit</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: P.mutedLight }}>
                Download our press kit containing the Nova Space logo in multiple formats, product photography of the NPX-200, founder headshots, and a company fact sheet.
              </p>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors" style={{ background: P.blue, color: P.buttonText }}>
                <Download size={14} /> Download Media Kit
              </button>
            </div>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <div className="p-8 rounded-xl h-full" style={{ background: P.surfaceLight, border: `1px solid ${P.border}` }}>
              <Mail size={24} color={P.amber} className="mb-4" />
              <h3 className="text-xl font-bold mb-3" style={{ color: P.white }}>Press Contact</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: P.mutedLight }}>
                For media enquiries, interview requests, or additional information, please contact our communications team.
              </p>
              <div className="space-y-2 text-sm" style={{ fontFamily: "var(--font-mono)" }}>
                <div><span style={{ color: P.muted }}>Email: </span><a href="mailto:press@novaspace.example" className="transition-colors hover:text-gray-900" style={{ color: P.blue }}>press@novaspace.example</a></div>
                <div><span style={{ color: P.muted }}>Phone: </span><span style={{ color: P.mutedLight }}>+41 44 123 45 67</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
