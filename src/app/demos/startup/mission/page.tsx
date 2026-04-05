"use client";

import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Rocket, ShieldCheck, Leaf, Handshake, Menu, X, ArrowRight } from "lucide-react";
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

export default function MissionPage() {
  return (
    <div style={{ background: P.bg, color: P.white, fontFamily: "var(--font-body)" }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <Reveal type="fade">
          <span className="inline-block text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full mb-6" style={{ color: P.blue, border: `1px solid ${P.blue}33` }}>Our Mission</span>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">Making orbit accessible to&nbsp;everyone</h1>
        </Reveal>
        <Reveal type="slide-up" delay={0.2}>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: P.mutedLight }}>
            We believe that space should not be the privilege of a few. Nova Space builds compact, affordable propulsion systems that give every satellite operator the power to manoeuvre, extend missions, and responsibly deorbit.
          </p>
        </Reveal>
      </section>

      {/* Vision */}
      <section className="py-20 px-6 lg:px-12 max-w-4xl mx-auto">
        <Reveal type="slide-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Vision</h2>
        </Reveal>
        <div className="space-y-6" style={{ color: P.mutedLight }}>
          <Reveal type="slide-up" delay={0.1}>
            <p className="text-base leading-relaxed">
              The space economy is projected to surpass $1 trillion by 2040, driven by constellations of small satellites delivering connectivity, Earth observation, and scientific data. Yet most of these spacecraft launch without propulsion &mdash; unable to adjust their orbit, avoid debris, or safely deorbit at end of life.
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.2}>
            <p className="text-base leading-relaxed">
              Nova Space exists to close this gap. Our vision is a future where every satellite, from a 1U CubeSat to a 500&thinsp;kg microsatellite, carries a propulsion module as standard &mdash; as fundamental as a solar panel or radio. We are building the propulsion layer that the new space economy demands.
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.3}>
            <p className="text-base leading-relaxed">
              By making orbit access affordable and responsible, we empower startups, universities, and governments to build the satellite infrastructure that will define the next century of progress on Earth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Propulsion Gap */}
      <section className="py-20 px-6 lg:px-12" style={{ background: P.surface }}>
        <div className="max-w-4xl mx-auto">
          <Reveal type="slide-up">
            <div className="flex items-center gap-3 mb-2">
              <Rocket size={20} color={P.amber} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: P.amber }}>The Problem</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">The Propulsion Gap</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "80%", desc: "of small satellites launched in 2025 carried no propulsion system whatsoever." },
              { stat: "12,000+", desc: "pieces of tracked orbital debris, growing every year and threatening active missions." },
              { stat: "5 yrs", desc: "the new ESA guideline for post-mission deorbit, requiring active propulsion." },
            ].map((item, i) => (
              <Reveal key={i} type="slide-up" delay={i * 0.1}>
                <div className="p-6 rounded-xl" style={{ background: P.surfaceLight, border: `1px solid ${P.border}` }}>
                  <div className="text-3xl font-bold mb-2" style={{ color: P.blue, fontFamily: "var(--font-mono)" }}>{item.stat}</div>
                  <p className="text-sm leading-relaxed" style={{ color: P.mutedLight }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-6 lg:px-12 max-w-4xl mx-auto">
        <Reveal type="slide-up">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck size={20} color={P.green} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: P.green }}>Our Solution</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Propulsion as a Standard</h2>
        </Reveal>
        <div className="space-y-6" style={{ color: P.mutedLight }}>
          <Reveal type="slide-up" delay={0.1}>
            <p className="text-base leading-relaxed">
              The NPX-200 is our flagship electrospray thruster: a matchbox-sized module that delivers precise, efficient thrust using non-toxic ionic liquid propellant. It integrates into any CubeSat or microsatellite bus with a single mounting plate and a standard CAN interface.
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.2}>
            <p className="text-base leading-relaxed">
              With a specific impulse of 1,200 seconds and a total delta-v budget exceeding 200&thinsp;m/s for a 20&thinsp;kg spacecraft, the NPX-200 enables orbit raising, station-keeping, collision avoidance, and controlled deorbit &mdash; all from a single unit that costs less than a launch adapter.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 px-6 lg:px-12" style={{ background: P.surface }}>
        <div className="max-w-4xl mx-auto">
          <Reveal type="slide-up">
            <div className="flex items-center gap-3 mb-2">
              <Leaf size={20} color={P.green} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: P.green }}>Sustainability</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Responsible Spaceflight</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Zero-Debris Policy", text: "Every NPX-200 ships with pre-programmed deorbit sequences that activate automatically at end of mission, ensuring compliance with ESA and FCC 5-year deorbit guidelines." },
              { title: "Non-Toxic Propellant", text: "Our ionic liquid propellant (EMI-BF4) is non-toxic, non-pressurised, and safe to handle in any university cleanroom &mdash; eliminating the hazardous fuelling procedures of legacy systems." },
              { title: "Carbon-Neutral Manufacturing", text: "Our Zurich facility runs on 100% renewable energy. We offset remaining Scope 3 emissions through verified carbon removal credits, targeting net-zero operations by 2027." },
              { title: "Debris Tracking Partnership", text: "We partner with LeoLabs and ESA's Space Debris Office to track every spacecraft equipped with an NPX-200, providing real-time collision avoidance data to the community." },
            ].map((item, i) => (
              <Reveal key={i} type="slide-up" delay={i * 0.1}>
                <div className="p-6 rounded-xl" style={{ background: P.surfaceLight, border: `1px solid ${P.border}` }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: P.white }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: P.mutedLight }}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <Reveal type="slide-up">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Handshake size={20} color={P.blue} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: P.blue }}>Partners</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-12 tracking-tight">Backed by the best in European space</h2>
        </Reveal>
        <Reveal type="fade" delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {["ESA", "DLR", "ETH Z\u00fcrich", "Airbus Defence", "OHB SE"].map((name, i) => (
              <div key={i} className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: P.muted, fontFamily: "var(--font-mono)" }}>{name}</div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 text-center" style={{ background: P.surface }}>
        <div className="max-w-2xl mx-auto">
          <Reveal type="scale">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Join us on the mission</h2>
            <p className="text-base mb-8" style={{ color: P.mutedLight }}>We are hiring engineers, scientists, and operators to build the future of satellite propulsion.</p>
            <Link href="/demos/startup/careers" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-colors" style={{ background: P.blue, color: P.buttonText }}>
              View Open Positions <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
