"use client";

import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Cpu, Zap, ArrowRight, Menu, X, Download } from "lucide-react";
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

const specs = [
  { param: "Thruster Type", value: "Electrospray (colloid)" },
  { param: "Propellant", value: "EMI-BF\u2084 ionic liquid" },
  { param: "Thrust", value: "0.3 \u2013 1.1 mN" },
  { param: "Specific Impulse (Isp)", value: "1,200 s" },
  { param: "Total Impulse", value: "4,200 N\u00B7s" },
  { param: "Delta-V (20 kg s/c)", value: "> 200 m/s" },
  { param: "Input Power", value: "8 \u2013 28 W" },
  { param: "Mass (dry)", value: "0.42 kg" },
  { param: "Volume", value: "0.3U (96 \u00D7 96 \u00D7 32 mm)" },
  { param: "Interface", value: "CAN bus / I\u00B2C" },
  { param: "Propellant Mass", value: "0.35 kg" },
  { param: "Operating Temp", value: "\u221240 \u00B0C to +60 \u00B0C" },
  { param: "Radiation Tolerance", value: "> 30 krad TID" },
  { param: "Lifetime", value: "> 10,000 hours" },
  { param: "Flight Heritage", value: "4 missions, 8 units on orbit" },
];

const steps = [
  { num: "01", title: "Ionisation", desc: "A high electric field at the emitter tips extracts ions directly from the ionic liquid surface via electrospray, creating a focused ion beam without the need for a discharge chamber.", color: P.cyan },
  { num: "02", title: "Acceleration", desc: "Extracted ions are accelerated through a precision-etched grid stack at up to 2,000 V, converting electrical energy into directed kinetic energy with > 90% beam efficiency.", color: P.blue },
  { num: "03", title: "Neutralisation", desc: "A dedicated cathode emitter releases electrons downstream of the acceleration grid, ensuring the exhaust beam is charge-neutral and preventing spacecraft charging.", color: P.green },
  { num: "04", title: "Thrust", desc: "The expelled ion beam generates continuous, precise thrust. An onboard microcontroller modulates extraction voltage in real time to deliver exact impulse profiles for any manoeuvre.", color: P.amber },
];

const comparison = [
  { param: "Type", npx: "Electrospray", busek: "Hall-effect", enpulsion: "FEEP" },
  { param: "Thrust (mN)", npx: "0.3 \u2013 1.1", busek: "12.8", enpulsion: "0.01 \u2013 0.5" },
  { param: "Isp (s)", npx: "1,200", busek: "1,390", enpulsion: "2,000 \u2013 6,000" },
  { param: "Mass (kg)", npx: "0.42", busek: "1.35", enpulsion: "0.9" },
  { param: "Volume", npx: "0.3U", busek: "1U+", enpulsion: "0.8U" },
  { param: "Power (W)", npx: "8 \u2013 28", busek: "200", enpulsion: "40" },
  { param: "Propellant", npx: "Ionic liquid", busek: "Xenon", enpulsion: "Indium" },
  { param: "Toxic", npx: "No", busek: "No", enpulsion: "Low" },
  { param: "Price (approx.)", npx: "\u20AC 85k", busek: "\u20AC 150k+", enpulsion: "\u20AC 120k" },
];

const heritage = [
  { mission: "NOVA-1 (IOD)", date: "Mar 2024", vehicle: "SpaceX Transporter-10", orbit: "525 km SSO", units: 2, status: "Nominal" },
  { mission: "NOVA-2 (Constellation Pathfinder)", date: "Sep 2024", vehicle: "Rocket Lab Electron", orbit: "550 km SSO", units: 2, status: "Nominal" },
  { mission: "ESA OPS-SAT-2", date: "Jan 2025", vehicle: "Arianespace Vega-C", orbit: "515 km SSO", units: 2, status: "Nominal" },
  { mission: "DLR ERNST", date: "Q3 2025", vehicle: "ISAR Spectrum-1", orbit: "600 km SSO", units: 2, status: "Upcoming" },
];

export default function TechnologyPage() {
  return (
    <div style={{ background: P.bg, color: P.white, fontFamily: "var(--font-body)" }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <Reveal type="fade">
          <span className="inline-block text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full mb-6" style={{ color: P.cyan, border: `1px solid ${P.cyan}33` }}>Technology</span>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">NPX-200 Electrospray Thruster</h1>
        </Reveal>
        <Reveal type="slide-up" delay={0.2}>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: P.mutedLight }}>
            Flight-proven compact propulsion for CubeSats and microsatellites. 0.3U form factor, 1,200&thinsp;s specific impulse, non-toxic propellant.
          </p>
        </Reveal>
      </section>

      {/* Full Spec Table */}
      <section className="py-20 px-6 lg:px-12" style={{ background: P.surface }}>
        <div className="max-w-4xl mx-auto">
          <Reveal type="slide-up">
            <div className="flex items-center gap-3 mb-2">
              <Cpu size={20} color={P.blue} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: P.blue }}>Specifications</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">NPX-200 Full Spec Sheet</h2>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${P.border}` }}>
              <table className="w-full text-sm" style={{ fontFamily: "var(--font-mono)" }}>
                <tbody>
                  {specs.map((s, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? P.surfaceLight : P.surface, borderBottom: `1px solid ${P.border}` }}>
                      <td className="px-5 py-3 font-medium" style={{ color: P.mutedLight }}>{s.param}</td>
                      <td className="px-5 py-3 text-right font-medium" style={{ color: P.white }}>{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-6 lg:px-12 max-w-4xl mx-auto">
        <Reveal type="slide-up">
          <div className="flex items-center gap-3 mb-2">
            <Zap size={20} color={P.amber} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: P.amber }}>How It Works</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-12 tracking-tight">From Liquid to Thrust in Four Steps</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <Reveal key={i} type="slide-up" delay={i * 0.1}>
              <div className="p-6 rounded-xl h-full" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
                <div className="text-xs font-bold tracking-widest mb-3" style={{ color: s.color, fontFamily: "var(--font-mono)" }}>{s.num}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: P.white }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: P.mutedLight }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 lg:px-12" style={{ background: P.surface }}>
        <div className="max-w-4xl mx-auto">
          <Reveal type="slide-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Competitive Comparison</h2>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <div className="rounded-xl overflow-x-auto" style={{ border: `1px solid ${P.border}` }}>
              <table className="w-full text-sm min-w-[600px]" style={{ fontFamily: "var(--font-mono)" }}>
                <thead>
                  <tr style={{ background: P.surfaceLight, borderBottom: `1px solid ${P.border}` }}>
                    <th className="px-5 py-3 text-left font-semibold" style={{ color: P.mutedLight }}>Parameter</th>
                    <th className="px-5 py-3 text-right font-semibold" style={{ color: P.blue }}>NPX-200</th>
                    <th className="px-5 py-3 text-right font-semibold" style={{ color: P.mutedLight }}>Busek BHT-200</th>
                    <th className="px-5 py-3 text-right font-semibold" style={{ color: P.mutedLight }}>Enpulsion NANO</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((r, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? P.surface : P.surfaceLight, borderBottom: `1px solid ${P.border}` }}>
                      <td className="px-5 py-3 font-medium" style={{ color: P.mutedLight }}>{r.param}</td>
                      <td className="px-5 py-3 text-right font-medium" style={{ color: P.white }}>{r.npx}</td>
                      <td className="px-5 py-3 text-right" style={{ color: P.muted }}>{r.busek}</td>
                      <td className="px-5 py-3 text-right" style={{ color: P.muted }}>{r.enpulsion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Flight Heritage */}
      <section className="py-20 px-6 lg:px-12 max-w-4xl mx-auto">
        <Reveal type="slide-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Flight Heritage</h2>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <div className="rounded-xl overflow-x-auto" style={{ border: `1px solid ${P.border}` }}>
            <table className="w-full text-sm min-w-[700px]" style={{ fontFamily: "var(--font-mono)" }}>
              <thead>
                <tr style={{ background: P.surface, borderBottom: `1px solid ${P.border}` }}>
                  {["Mission", "Date", "Vehicle", "Orbit", "Units", "Status"].map(h => (
                    <th key={h} className="px-5 py-3 text-left font-semibold" style={{ color: P.mutedLight }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {heritage.map((m, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? P.surfaceLight : P.surface, borderBottom: `1px solid ${P.border}` }}>
                    <td className="px-5 py-3 font-medium" style={{ color: P.white }}>{m.mission}</td>
                    <td className="px-5 py-3" style={{ color: P.mutedLight }}>{m.date}</td>
                    <td className="px-5 py-3" style={{ color: P.mutedLight }}>{m.vehicle}</td>
                    <td className="px-5 py-3" style={{ color: P.mutedLight }}>{m.orbit}</td>
                    <td className="px-5 py-3" style={{ color: P.mutedLight }}>{m.units}</td>
                    <td className="px-5 py-3">
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-medium" style={{ background: m.status === "Nominal" ? `${P.green}15` : `${P.amber}15`, color: m.status === "Nominal" ? P.green : P.amber }}>{m.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 text-center" style={{ background: P.surface }}>
        <div className="max-w-2xl mx-auto">
          <Reveal type="scale">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Need the full datasheet?</h2>
            <p className="text-base mb-8" style={{ color: P.mutedLight }}>Request the NPX-200 technical datasheet with detailed performance curves, qualification data, and integration guidelines.</p>
            <Link href="/demos/startup/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-colors" style={{ background: P.blue, color: P.buttonText }}>
              <Download size={16} /> Request Datasheet
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
