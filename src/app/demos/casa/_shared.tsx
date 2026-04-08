"use client";

import Link from "next/link";
import { useState, createContext, useContext, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

/* ═══ tokens ═══ */
export const C = {
  bg: "#FFFBF5",        // parchment
  dark: "#1A1612",      // deep olive-black
  terra: "#B34233",     // terracotta
  gold: "#C4A265",      // warm gold
  muted: "#6B6256",
  border: "rgba(26,22,18,0.12)",
};
export const fHead = "var(--font-serif-display), 'Playfair Display', 'DM Serif Display', Georgia, serif";
export const fBody = "var(--font-body), 'Source Sans 3', system-ui, sans-serif";

/* ═══ locale (demo-scoped, persists in session) ═══ */
type Locale = "en" | "de";
type CasaLocaleCtx = { locale: Locale; setLocale: (l: Locale) => void };
const LocaleCtx = createContext<CasaLocaleCtx | null>(null);
const STORAGE_KEY = "casa-locale";

export function CasaLocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "en" || saved === "de") setLocaleState(saved);
    } catch {}
  }, []);
  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
  };
  return <LocaleCtx.Provider value={{ locale, setLocale }}>{children}</LocaleCtx.Provider>;
}

export function useCasaLocale() {
  const ctx = useContext(LocaleCtx);
  if (!ctx) return { locale: "en" as Locale, setLocale: () => {} };
  return ctx;
}

export function bi<T>(en: T, de: T, locale: Locale): T {
  return locale === "de" ? de : en;
}

/* ═══ reveal ═══ */
export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ═══ olive branch svg ═══ */
export function OliveBranch({ className = "", width = 120 }: { className?: string; width?: number }) {
  return (
    <svg
      className={className}
      width={width}
      height={width * 0.3}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M10 30 Q 100 10, 190 30" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      <g stroke="currentColor" strokeWidth="0.6" fill="currentColor" opacity="0.55">
        {Array.from({ length: 10 }).map((_, i) => {
          const x = 20 + i * 18;
          const y = 26 - Math.sin(i) * 2;
          return (
            <ellipse key={`t-${i}`} cx={x} cy={y - 6} rx="4" ry="2" transform={`rotate(${-30 + i * 5} ${x} ${y - 6})`} />
          );
        })}
        {Array.from({ length: 10 }).map((_, i) => {
          const x = 28 + i * 18;
          const y = 34 - Math.sin(i) * 2;
          return (
            <ellipse key={`b-${i}`} cx={x} cy={y + 6} rx="4" ry="2" transform={`rotate(${30 - i * 5} ${x} ${y + 6})`} />
          );
        })}
      </g>
    </svg>
  );
}

/* ═══ gold divider ═══ */
export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-12" style={{ background: C.gold }} />
      <span className="w-1.5 h-1.5 rotate-45" style={{ background: C.gold }} />
      <span className="h-px w-12" style={{ background: C.gold }} />
    </div>
  );
}

/* ═══ nav ═══ */
const NAV_LINKS: Array<{ href: string; en: string; de: string }> = [
  { href: "/demos/casa/menu", en: "Menu", de: "Speisekarte" },
  { href: "/demos/casa/wines", en: "Wine", de: "Weine" },
  { href: "/demos/casa/about", en: "About", de: "Über uns" },
  { href: "/demos/casa/gallery", en: "Gallery", de: "Galerie" },
  { href: "/demos/casa/events", en: "Events", de: "Events" },
  { href: "/demos/casa/blog", en: "Journal", de: "Journal" },
];

export function CasaNav() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useCasaLocale();
  return (
    <>
      <nav
        className="fixed top-10 left-0 right-0 z-50 px-5 md:px-10 py-5"
        style={{
          background: "rgba(255,251,245,0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <Link
            href="/demos/casa"
            className="no-underline tracking-[0.25em] whitespace-nowrap"
            style={{ fontFamily: fHead, color: C.dark, fontSize: 20, fontWeight: 500 }}
          >
            CASA <em style={{ color: C.terra, fontStyle: "italic", fontFamily: fHead }}>LUMA</em>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] no-underline tracking-wide transition-colors hover:opacity-70"
                style={{ color: C.dark, fontFamily: fBody }}
              >
                {bi(l.en, l.de, locale)}
              </Link>
            ))}
            {/* Locale toggle */}
            <div
              className="flex items-center text-[11px] font-semibold tracking-wider"
              style={{ border: `1px solid ${C.border}`, borderRadius: 999, overflow: "hidden" }}
            >
              <button
                onClick={() => setLocale("en")}
                className="px-2.5 py-1 transition-colors"
                style={{ background: locale === "en" ? C.dark : "transparent", color: locale === "en" ? C.bg : C.dark }}
              >
                EN
              </button>
              <button
                onClick={() => setLocale("de")}
                className="px-2.5 py-1 transition-colors"
                style={{ background: locale === "de" ? C.dark : "transparent", color: locale === "de" ? C.bg : C.dark }}
              >
                DE
              </button>
            </div>
            <Link
              href="/demos/casa/contact"
              className="inline-flex items-center px-5 py-2.5 text-[12px] font-semibold tracking-wider uppercase no-underline transition-opacity hover:opacity-90"
              style={{ background: C.terra, color: C.bg, borderRadius: 2, fontFamily: fBody }}
            >
              {bi("Reserve", "Reservieren", locale)}
            </Link>
          </div>

          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} style={{ color: C.dark }} /> : <Menu size={22} style={{ color: C.dark }} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 px-6"
          style={{ background: C.bg }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-2xl italic no-underline"
              style={{ fontFamily: fHead, color: C.dark }}
            >
              {bi(l.en, l.de, locale)}
            </Link>
          ))}
          <div className="flex items-center gap-2 mt-4 text-[11px] tracking-wider font-semibold">
            <button
              onClick={() => setLocale("en")}
              className="px-3 py-1.5"
              style={{ background: locale === "en" ? C.dark : "transparent", color: locale === "en" ? C.bg : C.dark, border: `1px solid ${C.border}` }}
            >
              EN
            </button>
            <button
              onClick={() => setLocale("de")}
              className="px-3 py-1.5"
              style={{ background: locale === "de" ? C.dark : "transparent", color: locale === "de" ? C.bg : C.dark, border: `1px solid ${C.border}` }}
            >
              DE
            </button>
          </div>
          <Link
            href="/demos/casa/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center px-6 py-3 text-sm font-semibold tracking-wider uppercase no-underline"
            style={{ background: C.terra, color: C.bg, borderRadius: 2, fontFamily: fBody }}
          >
            {bi("Reserve", "Reservieren", locale)}
          </Link>
        </div>
      )}
    </>
  );
}

/* ═══ footer ═══ */
export function CasaFooter() {
  const { locale } = useCasaLocale();
  return (
    <footer className="px-6 md:px-10 py-20" style={{ background: C.dark, color: "#D6CFC4", fontFamily: fBody }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="tracking-[0.25em] mb-5" style={{ fontFamily: fHead, fontSize: 22 }}>
            CASA <em style={{ color: C.gold, fontStyle: "italic" }}>LUMA</em>
          </p>
          <p className="text-sm max-w-xs leading-relaxed opacity-75">
            {bi(
              "Mediterranean kitchen in the heart of Bern. Seasonal menu, thoughtful wines, warm hospitality since 2018.",
              "Mediterrane Küche im Herzen von Bern. Saisonale Karte, ausgewählte Weine, herzliche Gastfreundschaft seit 2018.",
              locale
            )}
          </p>
          <div className="flex items-center gap-5 mt-6 text-[11px] tracking-wider uppercase opacity-75">
            <a href="https://instagram.com" className="hover:opacity-100 transition-opacity">Instagram</a>
            <a href="https://facebook.com" className="hover:opacity-100 transition-opacity">Facebook</a>
          </div>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: C.gold }}>
            {bi("Hours", "Öffnungszeiten", locale)}
          </p>
          <p className="text-sm leading-relaxed opacity-75">
            {bi("Tue – Sat", "Di – Sa", locale)}<br />
            17:30 – 23:00<br />
            {bi("Sun", "So", locale)}<br />
            12:00 – 21:00
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: C.gold }}>
            {bi("Contact", "Kontakt", locale)}
          </p>
          <p className="text-sm leading-relaxed opacity-75">
            Gerechtigkeitsgasse 32<br />
            3011 Bern<br />
            +41 31 311 22 33<br />
            hello@casaluma.ch
          </p>
        </div>
      </div>
      <div
        className="max-w-6xl mx-auto mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] opacity-50"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <span>&copy; {new Date().getFullYear()} Casa Luma. {bi("All rights reserved.", "Alle Rechte vorbehalten.", locale)}</span>
        <span>
          Website by{" "}
          <a href="https://amenzo.co" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-100 transition-opacity">
            Amenzo Studio
          </a>
        </span>
      </div>
    </footer>
  );
}
