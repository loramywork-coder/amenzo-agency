"use client";

import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Orbit, Calendar, Rocket, CheckCircle, Clock, Menu, X } from "lucide-react";
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
      <nav className="fixed top-10 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 h-16" style={{ background: "transparent", borderBottom: "none" }}>
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

const missions = [
  {
    name: "NOVA-1",
    subtitle: "In-Orbit Demonstration",
    date: "March 2024",
    status: "complete" as const,
    vehicle: "SpaceX Falcon 9 (Transporter-10)",
    orbit: "525 km Sun-Synchronous Orbit",
    inclination: "97.5\u00B0",
    units: 2,
    objectives: [
      "First in-orbit firing of the NPX-200 electrospray thruster",
      "Validate thrust vector and specific impulse measurements",
      "Demonstrate CAN bus telemetry and autonomous fault handling",
      "Perform 30-day continuous station-keeping campaign",
    ],
    results: "All objectives met. Measured Isp of 1,185 s (within 1.3% of ground data). Over 200 hours of cumulative firing time. Both units continue nominal operations.",
  },
  {
    name: "NOVA-2",
    subtitle: "Constellation Pathfinder",
    date: "September 2024",
    status: "complete" as const,
    vehicle: "Rocket Lab Electron (KICK Stage)",
    orbit: "550 km Sun-Synchronous Orbit",
    inclination: "97.6\u00B0",
    units: 2,
    objectives: [
      "Multi-satellite formation flying demonstration",
      "Phasing manoeuvre to achieve 10 km inter-satellite spacing",
      "Cross-link telemetry relay between two NPX-200 equipped spacecraft",
      "Collision avoidance demonstration using conjunction data from LeoLabs",
    ],
    results: "Phasing manoeuvre completed within 14 days. Inter-satellite spacing stabilised at 10.3 km. Collision avoidance burn executed successfully on Day 42.",
  },
  {
    name: "ESA OPS-SAT-2",
    subtitle: "ESA Technology Validation",
    date: "January 2025",
    status: "complete" as const,
    vehicle: "Arianespace Vega-C",
    orbit: "515 km Sun-Synchronous Orbit",
    inclination: "97.4\u00B0",
    units: 2,
    objectives: [
      "ESA-qualified validation of electrospray propulsion technology",
      "Deorbit delta-v budget verification for 20 kg spacecraft class",
      "Extended-duration firing test (500+ hours cumulative)",
      "Radiation dose monitoring in conjunction with ESA OPS-SAT payload",
    ],
    results: "ESA validation complete. Delta-v budget confirmed at 210 m/s for 20 kg class. 520 hours of cumulative firing with zero anomalies. Data shared with ESA Clean Space initiative.",
  },
  {
    name: "DLR ERNST",
    subtitle: "German National Mission",
    date: "Q3 2025",
    status: "upcoming" as const,
    vehicle: "ISAR Aerospace Spectrum-1",
    orbit: "600 km Sun-Synchronous Orbit",
    inclination: "97.8\u00B0",
    units: 2,
    objectives: [
      "Demonstrate NPX-200 on DLR’s ERNST nanosatellite platform",
      "Orbit-raising from 500 km to 600 km injection altitude",
      "German national frequency coordination experiment",
      "Deorbit to < 400 km at end of 2-year mission",
    ],
    results: "Integration complete. Flight unit environmental testing passed. Awaiting launch vehicle readiness.",
  },
];

const upcoming = [
  { name: "Constellation Alpha (16 s/c)", date: "Q1 2026", vehicle: "SpaceX Transporter-14", status: "Contracted" },
  { name: "JAXA ETS-10 Technology Rider", date: "Q2 2026", vehicle: "Mitsubishi H3", status: "Under review" },
  { name: "ESA Moonlight Pathfinder", date: "2027", vehicle: "TBD", status: "Phase A" },
];

export default function LaunchesPage() {
  return (
    <div className="light-theme" style={{ background: P.bg, color: P.white, fontFamily: "var(--font-body)" }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section className="relative pt-48 pb-28 px-6 lg:px-12 text-center overflow-hidden">
        <div aria-hidden className="absolute inset-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1457364887197-9150188c107b?auto=format&fit=crop&w=2400&q=85')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,12,16,0.2) 0%, rgba(10,12,16,0.4) 55%, rgba(10,12,16,0.85) 100%)" }} />
        <div className="relative max-w-4xl mx-auto" style={{ color: "#FFFFFF" }}>
        <Reveal type="fade">
          <span className="inline-block text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full mb-6" style={{ color: "#34D399", border: "1px solid rgba(52,211,153,0.4)", background: "rgba(10,12,16,0.45)", backdropFilter: "blur(8px)" }}>Launches</span>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight" style={{ color: "#FFFFFF", textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}>Launch Schedule &amp; Heritage</h1>
        </Reveal>
        <Reveal type="slide-up" delay={0.2}>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}>
            8 thruster units across 4 missions. Every unit nominal. Explore our flight heritage and upcoming launches below.
          </p>
        </Reveal>
        </div>
      </section>

      {/* Mission Timeline */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <Reveal type="slide-up">
            <div className="flex items-center gap-3 mb-2">
              <Orbit size={20} color={P.blue} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: P.blue }}>Mission Timeline</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-12 tracking-tight">Completed &amp; Active Missions</h2>
          </Reveal>

          <div className="space-y-8">
            {missions.map((m, i) => (
              <Reveal key={i} type="slide-up" delay={i * 0.1}>
                <div className="rounded-xl p-6 md:p-8" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold" style={{ color: P.white }}>{m.name}</h3>
                        <span className="inline-block px-2 py-0.5 rounded text-xs font-medium" style={{ background: m.status === "complete" ? `${P.green}15` : `${P.amber}15`, color: m.status === "complete" ? P.green : P.amber }}>
                          {m.status === "complete" ? "Complete" : "Upcoming"}
                        </span>
                      </div>
                      <p className="text-sm" style={{ color: P.mutedLight }}>{m.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm" style={{ color: P.muted, fontFamily: "var(--font-mono)" }}>
                      <Calendar size={14} /> {m.date}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { label: "Vehicle", value: m.vehicle },
                      { label: "Orbit", value: m.orbit },
                      { label: "Inclination", value: m.inclination },
                      { label: "NPX-200 Units", value: String(m.units) },
                    ].map((d, j) => (
                      <div key={j} className="p-3 rounded-lg" style={{ background: P.surfaceLight }}>
                        <div className="text-xs uppercase tracking-widest mb-1" style={{ color: P.muted }}>{d.label}</div>
                        <div className="text-sm font-medium" style={{ color: P.white, fontFamily: "var(--font-mono)" }}>{d.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: P.mutedLight }}>Objectives</h4>
                    <ul className="space-y-2">
                      {m.objectives.map((o, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: P.mutedLight }}>
                          <CheckCircle size={14} className="mt-0.5 flex-shrink-0" color={m.status === "complete" ? P.green : P.muted} />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg" style={{ background: P.surfaceLight }}>
                    <h4 className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: m.status === "complete" ? P.green : P.amber }}>
                      {m.status === "complete" ? "Results" : "Status"}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: P.mutedLight }}>{m.results}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Missions */}
      <section className="py-20 px-6 lg:px-12" style={{ background: P.surface }}>
        <div className="max-w-4xl mx-auto">
          <Reveal type="slide-up">
            <div className="flex items-center gap-3 mb-2">
              <Rocket size={20} color={P.amber} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: P.amber }}>Pipeline</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Upcoming Missions</h2>
          </Reveal>
          <div className="space-y-4">
            {upcoming.map((u, i) => (
              <Reveal key={i} type="slide-up" delay={i * 0.1}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-xl gap-4" style={{ background: P.surfaceLight, border: `1px solid ${P.border}` }}>
                  <div>
                    <h3 className="text-base font-semibold mb-1" style={{ color: P.white }}>{u.name}</h3>
                    <p className="text-sm" style={{ color: P.muted }}>{u.vehicle}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm" style={{ color: P.mutedLight, fontFamily: "var(--font-mono)" }}>
                      <Clock size={14} /> {u.date}
                    </div>
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-medium" style={{ background: `${P.blue}15`, color: P.blue }}>{u.status}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
