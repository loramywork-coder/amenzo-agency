"use client";

import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { FileText, Menu, X } from "lucide-react";
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

export default function ImpressumPage() {
  return (
    <div className="light-theme" style={{ background: P.bg, color: P.white, fontFamily: "var(--font-body)" }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-12 px-6 lg:px-12 max-w-3xl mx-auto">
        <Reveal type="fade">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full mb-6" style={{ color: P.muted, border: `1px solid ${P.border}` }}>
            <FileText size={14} /> Legal Notice
          </span>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">Impressum</h1>
        </Reveal>
      </section>

      {/* Content */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Company Info */}
          <Reveal type="slide-up">
            <div className="p-6 rounded-xl" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
              <h2 className="text-lg font-bold mb-4" style={{ color: P.white }}>Company Information</h2>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: P.mutedLight }}>
                <div>
                  <span className="font-semibold" style={{ color: P.white }}>Nova Space AG</span>
                </div>
                <div>
                  <span style={{ color: P.muted }}>Commercial Register: </span>
                  <span style={{ fontFamily: "var(--font-mono)" }}>CHE-XXX.XXX.XXX</span>
                </div>
                <div>
                  <span style={{ color: P.muted }}>Registered in: </span>
                  Commercial Register of the Canton of Z&uuml;rich
                </div>
                <div>
                  <span style={{ color: P.muted }}>Legal Form: </span>
                  Aktiengesellschaft (AG) under Swiss law
                </div>
                <div>
                  <span style={{ color: P.muted }}>VAT Number: </span>
                  <span style={{ fontFamily: "var(--font-mono)" }}>CHE-XXX.XXX.XXX MWST</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Address */}
          <Reveal type="slide-up" delay={0.1}>
            <div className="p-6 rounded-xl" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
              <h2 className="text-lg font-bold mb-4" style={{ color: P.white }}>Address</h2>
              <div className="text-sm leading-relaxed" style={{ color: P.mutedLight }}>
                Nova Space AG<br />
                Technoparkstrasse 1<br />
                8005 Z&uuml;rich<br />
                Switzerland
              </div>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal type="slide-up" delay={0.15}>
            <div className="p-6 rounded-xl" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
              <h2 className="text-lg font-bold mb-4" style={{ color: P.white }}>Contact</h2>
              <div className="space-y-2 text-sm" style={{ color: P.mutedLight, fontFamily: "var(--font-mono)" }}>
                <div><span style={{ color: P.muted, fontFamily: "var(--font-body)" }}>Phone: </span>+41 44 123 45 67</div>
                <div><span style={{ color: P.muted, fontFamily: "var(--font-body)" }}>Email: </span><a href="mailto:hello@novaspace.example" className="hover:text-gray-900 transition-colors" style={{ color: P.blue }}>hello@novaspace.example</a></div>
                <div><span style={{ color: P.muted, fontFamily: "var(--font-body)" }}>Web: </span><span style={{ color: P.blue }}>novaspace.example</span></div>
              </div>
            </div>
          </Reveal>

          {/* Board */}
          <Reveal type="slide-up" delay={0.2}>
            <div className="p-6 rounded-xl" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
              <h2 className="text-lg font-bold mb-4" style={{ color: P.white }}>Authorised Representatives</h2>
              <div className="text-sm leading-relaxed" style={{ color: P.mutedLight }}>
                <div className="mb-2"><span className="font-medium" style={{ color: P.white }}>Dr. Elena Vasquez</span> &mdash; Chief Executive Officer, Chair of the Board</div>
                <div className="mb-2"><span className="font-medium" style={{ color: P.white }}>Dr. Marcus Chen</span> &mdash; Chief Technology Officer</div>
                <div><span className="font-medium" style={{ color: P.white }}>Lena Hofmann</span> &mdash; Chief Operating Officer</div>
              </div>
            </div>
          </Reveal>

          {/* Demo Disclaimer */}
          <Reveal type="slide-up" delay={0.25}>
            <div className="p-6 rounded-xl" style={{ background: `${P.amber}10`, border: `1px solid ${P.amber}30` }}>
              <h2 className="text-lg font-bold mb-4" style={{ color: P.amber }}>Demo Disclaimer</h2>
              <div className="text-sm leading-relaxed" style={{ color: P.mutedLight }}>
                <p className="mb-3">
                  This website is a <strong style={{ color: P.white }}>design demonstration</strong> created by Amenzo to showcase web design and development capabilities. Nova Space AG is a fictional company. All names, data, metrics, mission details, and financial information presented on this site are entirely fictitious.
                </p>
                <p className="mb-3">
                  No real products or services are offered. No real investment opportunities exist. No real job positions are available. Email addresses and phone numbers shown are non-functional placeholders.
                </p>
                <p>
                  This demo is provided for illustration purposes only and does not constitute any form of commercial offering, financial advice, or employment opportunity.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Copyright */}
          <Reveal type="slide-up" delay={0.3}>
            <div className="p-6 rounded-xl" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
              <h2 className="text-lg font-bold mb-4" style={{ color: P.white }}>Copyright</h2>
              <div className="text-sm leading-relaxed" style={{ color: P.mutedLight }}>
                <p className="mb-3">
                  &copy; 2026 Nova Space AG (fictional). All content, design, and code on this website are the property of their respective creators.
                </p>
                <p>
                  Design and development by <a href="https://amenzo.co" target="_blank" rel="noopener noreferrer" className="font-medium transition-colors hover:text-gray-900" style={{ color: P.blue }}>Amenzo</a>.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
