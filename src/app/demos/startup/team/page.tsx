"use client";

import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Users, Award, Building2, ArrowRight, Menu, X } from "lucide-react";
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

function PersonCard({ name, role, bio, initials, color }: { name: string; role: string; bio: string; initials: string; color: string }) {
  return (
    <div className="p-6 rounded-xl h-full" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
      <div className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold mb-4" style={{ background: `${color}15`, color }}>{initials}</div>
      <h3 className="text-lg font-semibold mb-1" style={{ color: P.white }}>{name}</h3>
      <p className="text-sm font-medium mb-3" style={{ color }}>{role}</p>
      <p className="text-sm leading-relaxed" style={{ color: P.mutedLight }}>{bio}</p>
    </div>
  );
}

const founders = [
  { name: "Dr. Elena Vasquez", role: "CEO & Co-Founder", initials: "EV", color: P.blue, bio: "Former ESA electric propulsion engineer with 12 years in thruster development. Led the LISA Pathfinder micronewton thruster qualification. PhD in Aerospace Engineering from TU Delft. Elena founded Nova Space in 2022 with a conviction that every satellite deserves propulsion." },
  { name: "Dr. Marcus Chen", role: "CTO & Co-Founder", initials: "MC", color: P.cyan, bio: "Electrochemist and MEMS fabrication specialist. Invented the NPX emitter architecture during his postdoc at ETH Z\u00fcrich. 14 patents in microfluidics and ion optics. Marcus leads the R&D team that took the NPX-200 from lab prototype to flight hardware in under 18 months." },
  { name: "Lena Hofmann", role: "COO & Co-Founder", initials: "LH", color: P.green, bio: "Former McKinsey engagement manager specialising in deep-tech scale-ups. MBA from INSEAD. Lena built Nova Space\u2019s operations from scratch\u2014supply chain, quality management, and the clean-room facility in Technopark Z\u00fcrich that produces 50 thrusters per quarter." },
];

const keyTeam = [
  { name: "Dr. Amir Patel", role: "Head of Propulsion Engineering", initials: "AP", color: P.amber, bio: "15 years at Airbus Defence & Space. Led ion engine development for Eurostar Neo. Oversees all thruster design, testing, and qualification at Nova Space." },
  { name: "Sofia Lindqvist", role: "Head of Flight Software", initials: "SL", color: P.blue, bio: "Former CERN controls engineer. Expert in real-time embedded systems for safety-critical applications. Architected the NPX-200\u2019s autonomous fault-handling firmware." },
  { name: "James Okafor", role: "Head of Business Development", initials: "JO", color: P.cyan, bio: "10 years at OneWeb and Telesat. Deep relationships across the constellation and launch provider ecosystem. Leads commercial partnerships and government contracts." },
  { name: "Dr. Yuki Tanaka", role: "Head of Quality & Compliance", initials: "YT", color: P.green, bio: "Former JAXA quality assurance lead. ECSS and ISO 9001 certified auditor. Ensures every NPX-200 meets the most demanding space-grade qualification standards." },
];

const advisors = [
  { name: "Prof. Jean-Pierre Lebreton", role: "Scientific Advisor", initials: "JL", color: P.mutedLight, bio: "Former ESA Chief Scientist. Led the Huygens probe mission to Titan. Advises on mission architecture and ESA programme alignment." },
  { name: "Dr. Sarah Mitchell", role: "Commercial Advisor", initials: "SM", color: P.mutedLight, bio: "Managing Partner at SpaceFund. Early investor in Rocket Lab, Planet, and Spire. Guides Nova Space on fundraising strategy and market positioning." },
  { name: "Prof. Andreas M\u00fcller", role: "Technical Advisor", initials: "AM", color: P.mutedLight, bio: "Chair of Plasma Physics at ETH Z\u00fcrich. Pioneer in FEEP and electrospray propulsion research. Co-inventor of the ionic liquid propellant used in the NPX-200." },
];

const board = [
  { name: "Dr. Elena Vasquez", role: "Chair & CEO", initials: "EV", color: P.blue, bio: "Co-Founder of Nova Space. Represents the founding team on the board." },
  { name: "Thomas Keller", role: "Board Member (Lakestar)", initials: "TK", color: P.mutedLight, bio: "Partner at Lakestar, lead investor in Series A. Board experience with Lilium, Isar Aerospace, and Volocopter." },
  { name: "Maria Gonzalez", role: "Board Member (ESA BIC)", initials: "MG", color: P.mutedLight, bio: "Director of ESA Business Incubation Centre Switzerland. Represents ESA BIC\u2019s strategic interest in Nova Space\u2019s technology development." },
];

export default function TeamPage() {
  return (
    <div style={{ background: P.bg, color: P.white, fontFamily: "var(--font-body)" }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <Reveal type="fade">
          <span className="inline-block text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full mb-6" style={{ color: P.blue, border: `1px solid ${P.blue}33` }}>Team</span>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">The People Behind Nova Space</h1>
        </Reveal>
        <Reveal type="slide-up" delay={0.2}>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: P.mutedLight }}>
            22 engineers, scientists, and operators building the propulsion layer for the new space economy from Z&uuml;rich, Switzerland.
          </p>
        </Reveal>
      </section>

      {/* Founders */}
      <section className="py-20 px-6 lg:px-12" style={{ background: P.surface }}>
        <div className="max-w-5xl mx-auto">
          <Reveal type="slide-up">
            <div className="flex items-center gap-3 mb-2">
              <Users size={20} color={P.blue} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: P.blue }}>Founders</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">Leadership</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {founders.map((p, i) => (
              <Reveal key={i} type="slide-up" delay={i * 0.1}>
                <PersonCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Team */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Reveal type="slide-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">Key Team Members</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {keyTeam.map((p, i) => (
              <Reveal key={i} type="slide-up" delay={i * 0.1}>
                <PersonCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 px-6 lg:px-12" style={{ background: P.surface }}>
        <div className="max-w-5xl mx-auto">
          <Reveal type="slide-up">
            <div className="flex items-center gap-3 mb-2">
              <Award size={20} color={P.amber} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: P.amber }}>Advisory Board</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">Advisors</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {advisors.map((p, i) => (
              <Reveal key={i} type="slide-up" delay={i * 0.1}>
                <PersonCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Reveal type="slide-up">
            <div className="flex items-center gap-3 mb-2">
              <Building2 size={20} color={P.cyan} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: P.cyan }}>Governance</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">Board of Directors</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {board.map((p, i) => (
              <Reveal key={i} type="slide-up" delay={i * 0.1}>
                <PersonCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 text-center" style={{ background: P.surface }}>
        <div className="max-w-2xl mx-auto">
          <Reveal type="scale">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">We&apos;re 22 people &mdash; and growing</h2>
            <p className="text-base mb-8" style={{ color: P.mutedLight }}>Join a team of world-class engineers and operators building critical infrastructure for the space economy.</p>
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
