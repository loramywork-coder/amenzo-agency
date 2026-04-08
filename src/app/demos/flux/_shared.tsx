"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export const C = {
  bg: "#0C0C0C",
  surface: "#161616",
  surfaceLight: "#1E1E1E",
  lime: "#C8FF00",
  text: "#F2F2F2",
  muted: "#8A8A8A",
  border: "rgba(242,242,242,0.08)",
};
export const fHead = "var(--font-display), 'Outfit', system-ui, sans-serif";
export const fBody = "var(--font-body), 'Manrope', system-ui, sans-serif";

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function FluxNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav
        className="fixed top-10 left-0 right-0 z-50 px-6 md:px-12 py-5"
        style={{
          background: "rgba(12,12,12,0.88)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/demos/flux"
            className="text-2xl font-black tracking-[0.02em] no-underline"
            style={{ color: C.text, fontFamily: fHead }}
          >
            FLUX<span style={{ color: C.lime }}>.</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {[
              { label: "Programs", href: "/demos/flux/programs" },
              { label: "About", href: "/demos/flux/about" },
              { label: "Contact", href: "/demos/flux/contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium tracking-wide no-underline uppercase transition-colors hover:text-white"
                style={{ color: C.muted, fontFamily: fBody }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/demos/flux/contact"
              className="inline-flex items-center px-5 py-2.5 text-[12px] font-bold tracking-wider uppercase no-underline transition-all"
              style={{
                background: C.lime,
                color: C.bg,
                fontFamily: fBody,
                borderRadius: 8,
                boxShadow: "0 0 0 0 rgba(200,255,0,0)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 24px 0 rgba(200,255,0,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(200,255,0,0)")}
            >
              Book Free Consult
            </Link>
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} style={{ color: C.text }} /> : <Menu size={22} style={{ color: C.text }} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: C.bg }}
        >
          {[
            { label: "Programs", href: "/demos/flux/programs" },
            { label: "About", href: "/demos/flux/about" },
            { label: "Contact", href: "/demos/flux/contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-3xl font-bold uppercase tracking-wider no-underline"
              style={{ color: C.text, fontFamily: fHead }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/demos/flux/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center px-6 py-3 text-sm font-bold tracking-wider uppercase no-underline"
            style={{ background: C.lime, color: C.bg, borderRadius: 8, fontFamily: fBody }}
          >
            Book Free Consult
          </Link>
        </div>
      )}
    </>
  );
}

export function FluxFooter() {
  return (
    <footer
      className="px-6 md:px-12 py-16"
      style={{ background: "#050505", color: C.muted, fontFamily: fBody, borderTop: `1px solid ${C.border}` }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="text-3xl font-black tracking-tight mb-4" style={{ color: C.text, fontFamily: fHead }}>
            FLUX<span style={{ color: C.lime }}>.</span>
          </p>
          <p className="text-sm max-w-xs leading-relaxed">
            Results-driven performance coaching. Based in Zug, Switzerland. 500+ clients, 8 years, one coach who gives a damn.
          </p>
          <div className="flex items-center gap-5 mt-6 text-[11px] tracking-wider uppercase">
            <a href="https://instagram.com" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://youtube.com" className="hover:text-white transition-colors">YouTube</a>
            <a href="https://linkedin.com" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: C.lime }}>Visit</p>
          <p className="text-sm leading-relaxed">
            Bahnhofstrasse 15<br />6300 Zug<br />Switzerland
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: C.lime }}>Contact</p>
          <p className="text-sm leading-relaxed">
            train@fluxperformance.ch<br />+41 41 555 22 33
          </p>
        </div>
      </div>
      <div
        className="max-w-6xl mx-auto mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]"
        style={{ borderTop: `1px solid ${C.border}` }}
      >
        <span>&copy; {new Date().getFullYear()} Flux Performance AG. All rights reserved.</span>
        <span>
          Website by{" "}
          <a href="https://amenzo.co" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
            Amenzo Studio
          </a>
        </span>
      </div>
    </footer>
  );
}
