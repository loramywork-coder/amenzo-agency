"use client";

import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Mail, MapPin, Phone, Building, Menu, X, Send } from "lucide-react";
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

const contacts = [
  { icon: Mail, label: "General", value: "hello@novaspace.example", color: P.blue },
  { icon: Building, label: "Investor Relations", value: "ir@novaspace.example", color: P.cyan },
  { icon: Mail, label: "Careers", value: "careers@novaspace.example", color: P.green },
  { icon: Mail, label: "Press", value: "press@novaspace.example", color: P.amber },
];

export default function ContactPage() {
  const [role, setRole] = useState("");

  const inputStyle = {
    background: "#FFFFFF",
    border: `1px solid ${P.border}`,
    color: P.white,
    fontFamily: "var(--font-body)",
  };

  return (
    <div className="light-theme" style={{ background: P.bg, color: P.white, fontFamily: "var(--font-body)" }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <Reveal type="fade">
          <span className="inline-block text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full mb-6" style={{ color: P.blue, border: `1px solid ${P.blue}33` }}>Contact</span>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">Get in Touch</h1>
        </Reveal>
        <Reveal type="slide-up" delay={0.2}>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: P.mutedLight }}>
            Whether you&apos;re a satellite operator, investor, or journalist &mdash; we&apos;d love to hear from you.
          </p>
        </Reveal>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <Reveal type="slide-up" className="lg:col-span-3">
            <div className="p-8 rounded-xl" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
              <h2 className="text-xl font-bold mb-6" style={{ color: P.white }}>Send us a message</h2>
              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: P.mutedLight }}>Full Name</label>
                    <input type="text" placeholder="Jane Doe" className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/40 placeholder:text-gray-400" style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: P.mutedLight }}>Email</label>
                    <input type="email" placeholder="jane@company.com" className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/40 placeholder:text-gray-400" style={inputStyle} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: P.mutedLight }}>Company</label>
                    <input type="text" placeholder="Acme Satellites" className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/40 placeholder:text-gray-400" style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: P.mutedLight }}>Role</label>
                    <select value={role} onChange={e => setRole(e.target.value)} className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/40 appearance-none" style={{ ...inputStyle, color: role ? P.white : "#9CA3AF" }}>
                      <option value="" disabled>Select your role</option>
                      <option value="engineer">Engineer / Technical</option>
                      <option value="executive">Executive / Management</option>
                      <option value="investor">Investor / VC</option>
                      <option value="journalist">Journalist / Media</option>
                      <option value="academic">Academic / Researcher</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: P.mutedLight }}>Message</label>
                  <textarea rows={5} placeholder="Tell us about your mission requirements..." className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/40 resize-none placeholder:text-gray-400" style={inputStyle} />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-colors" style={{ background: P.blue, color: P.buttonText }}>
                  <Send size={14} /> Send Message
                </button>
              </form>
            </div>
          </Reveal>

          {/* Contact Info */}
          <Reveal type="slide-up" delay={0.1} className="lg:col-span-2">
            <div className="space-y-6">
              {/* Email contacts */}
              <div className="p-6 rounded-xl" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: P.mutedLight }}>Contact Emails</h3>
                <div className="space-y-4">
                  {contacts.map((c, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <c.icon size={16} color={c.color} className="mt-0.5" />
                      <div>
                        <div className="text-xs font-medium uppercase tracking-widest mb-0.5" style={{ color: P.muted }}>{c.label}</div>
                        <a href={`mailto:${c.value}`} className="text-sm transition-colors hover:text-gray-900" style={{ color: P.mutedLight, fontFamily: "var(--font-mono)" }}>{c.value}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="p-6 rounded-xl" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: P.mutedLight }}>Office</h3>
                <div className="flex items-start gap-3">
                  <MapPin size={16} color={P.blue} className="mt-0.5" />
                  <div className="text-sm leading-relaxed" style={{ color: P.mutedLight }}>
                    <div style={{ color: P.white }} className="font-medium">Nova Space AG</div>
                    Technoparkstrasse 1<br />
                    8005 Z&uuml;rich<br />
                    Switzerland
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-6 rounded-xl" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
                <div className="flex items-start gap-3">
                  <Phone size={16} color={P.green} className="mt-0.5" />
                  <div>
                    <div className="text-xs font-medium uppercase tracking-widest mb-0.5" style={{ color: P.muted }}>Phone</div>
                    <span className="text-sm" style={{ color: P.mutedLight, fontFamily: "var(--font-mono)" }}>+41 44 123 45 67</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
