"use client";

import Link from "next/link";
import { useState, useEffect, createContext, useContext, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

/* Distinct palette: near-black + deep burgundy + aged cream + copper */
export const C = {
  bg: "#0B0908",          // true near-black
  surface: "#141110",     // slightly warmer black
  cream: "#F2E9D8",       // aged cream
  burgundy: "#7B1E28",    // deep burgundy
  copper: "#C88B53",      // aged copper
  muted: "#8A7F6F",
  border: "rgba(242,233,216,0.12)",
  borderStrong: "rgba(242,233,216,0.22)",
};
export const fHead = "var(--font-serif-display), 'Fraunces', 'Cormorant Garamond', Georgia, serif";
export const fBody = "var(--font-body), 'Inter Tight', 'Inter', system-ui, sans-serif";
export const fMono = "var(--font-mono), 'JetBrains Mono', 'Space Mono', monospace";

/* trilingual */
export type Lang = "en" | "it" | "fr";
const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void } | null>(null);

export function RestaurantLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("restaurant-lang") as Lang | null;
      if (saved === "en" || saved === "it" || saved === "fr") setLangState(saved);
    } catch {}
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("restaurant-lang", l); } catch {}
  };
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export function useRestaurantLang() {
  return useContext(LangCtx) ?? { lang: "en" as Lang, setLang: () => {} };
}

export function tri<T>(en: T, it: T, fr: T, lang: Lang): T {
  return lang === "it" ? it : lang === "fr" ? fr : en;
}

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Rule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-14" style={{ background: C.copper }} />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
        <path d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z" fill={C.copper} />
      </svg>
      <span className="h-px w-14" style={{ background: C.copper }} />
    </div>
  );
}

const NAV = [
  { href: "/demos/restaurant/menu", en: "Menu", it: "Menù", fr: "Menu" },
  { href: "/demos/restaurant/chef", en: "The Chef", it: "Lo Chef", fr: "Le Chef" },
  { href: "/demos/restaurant/wine", en: "Wine", it: "Vini", fr: "Cave" },
  { href: "/demos/restaurant/private", en: "Private", it: "Eventi", fr: "Privé" },
  { href: "/demos/restaurant/gallery", en: "Gallery", it: "Galleria", fr: "Galerie" },
];

export function RestaurantNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useRestaurantLang();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav
        className="fixed top-10 left-0 right-0 z-50 px-6 md:px-10 transition-all"
        style={{
          background: scrolled ? "rgba(11,9,8,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
          paddingTop: 18,
          paddingBottom: 18,
        }}
      >
        <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-4">
          <Link
            href="/demos/restaurant"
            className="no-underline flex items-baseline gap-3 shrink-0"
            style={{ color: C.cream, fontFamily: fHead }}
          >
            <span style={{ fontSize: 22, fontWeight: 400, letterSpacing: "-0.01em" }}>
              Porto <em style={{ fontStyle: "italic", color: C.copper }}>Valletta</em>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] tracking-[0.18em] uppercase no-underline transition-opacity hover:opacity-70"
                style={{ color: C.cream, fontFamily: fBody, fontWeight: 500 }}
              >
                {tri(l.en, l.it, l.fr, lang)}
              </Link>
            ))}
            <div className="flex items-center text-[10px] tracking-wider" style={{ fontFamily: fMono }}>
              {(["en", "it", "fr"] as Lang[]).map((l, i) => (
                <span key={l} className="flex items-center">
                  {i > 0 && <span className="mx-1 opacity-40" style={{ color: C.muted }}>/</span>}
                  <button
                    onClick={() => setLang(l)}
                    className="uppercase px-0.5"
                    style={{ color: lang === l ? C.copper : C.muted, fontWeight: lang === l ? 700 : 400 }}
                  >
                    {l}
                  </button>
                </span>
              ))}
            </div>
            <Link
              href="/demos/restaurant/contact"
              className="inline-flex items-center px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase no-underline transition-colors"
              style={{ background: C.burgundy, color: C.cream, fontFamily: fBody, fontWeight: 600 }}
            >
              {tri("Reserve", "Prenota", "Réserver", lang)}
            </Link>
          </div>

          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} style={{ color: C.cream }} /> : <Menu size={22} style={{ color: C.cream }} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 px-6" style={{ background: C.bg }}>
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-3xl italic no-underline"
              style={{ fontFamily: fHead, color: C.cream, fontStyle: "italic" }}
            >
              {tri(l.en, l.it, l.fr, lang)}
            </Link>
          ))}
          <div className="flex items-center gap-3 text-xs mt-3" style={{ fontFamily: fMono, color: C.muted }}>
            {(["en", "it", "fr"] as Lang[]).map((l) => (
              <button key={l} onClick={() => setLang(l)} className="uppercase px-2" style={{ color: lang === l ? C.copper : C.muted, fontWeight: lang === l ? 700 : 400 }}>
                {l}
              </button>
            ))}
          </div>
          <Link
            href="/demos/restaurant/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center px-7 py-3 text-[11px] tracking-wider uppercase no-underline"
            style={{ background: C.burgundy, color: C.cream, fontFamily: fBody, fontWeight: 600 }}
          >
            {tri("Reserve", "Prenota", "Réserver", lang)}
          </Link>
        </div>
      )}
    </>
  );
}

export function RestaurantFooter() {
  const { lang } = useRestaurantLang();
  return (
    <footer className="px-6 md:px-10 pt-24 pb-10" style={{ background: C.surface, color: C.cream, fontFamily: fBody, borderTop: `1px solid ${C.border}` }}>
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: C.copper, fontFamily: fMono }}>
            — Valletta · Since 2016
          </p>
          <p className="text-[42px] md:text-[58px] leading-[0.95] mb-6" style={{ fontFamily: fHead, fontWeight: 400, paddingBottom: "0.15em" }}>
            Porto <em style={{ fontStyle: "italic", color: C.copper }}>Valletta</em>
          </p>
          <p className="text-[13px] leading-relaxed opacity-80 max-w-sm">
            {tri(
              "A sixteen-seat dining room on the Valletta waterfront. One chef, one tasting menu, six nights a week.",
              "Una sala da sedici coperti sul lungomare di Valletta. Un solo chef, un solo menù degustazione, sei sere a settimana.",
              "Une salle de seize couverts sur le front de mer de Valletta. Un chef, un menu dégustation, six soirs par semaine.",
              lang
            )}
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: C.copper, fontFamily: fMono }}>— {tri("Visit", "Visita", "Visite", lang)}</p>
          <ul className="space-y-2 text-[13px]">
            <li><Link href="/demos/restaurant/menu" className="no-underline hover:text-white transition-colors" style={{ color: C.cream }}>{tri("Menu", "Menù", "Menu", lang)}</Link></li>
            <li><Link href="/demos/restaurant/chef" className="no-underline hover:text-white transition-colors" style={{ color: C.cream }}>{tri("The Chef", "Lo Chef", "Le Chef", lang)}</Link></li>
            <li><Link href="/demos/restaurant/wine" className="no-underline hover:text-white transition-colors" style={{ color: C.cream }}>{tri("Wine", "Vini", "Cave", lang)}</Link></li>
            <li><Link href="/demos/restaurant/gallery" className="no-underline hover:text-white transition-colors" style={{ color: C.cream }}>{tri("Gallery", "Galleria", "Galerie", lang)}</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: C.copper, fontFamily: fMono }}>— {tri("Hours", "Orari", "Horaires", lang)}</p>
          <p className="text-[13px] leading-relaxed opacity-80">
            {tri("Tue – Sun", "Mar – Dom", "Mar – Dim", lang)}<br />
            19:00 – 23:30<br />
            {tri("One seating only.", "Un unico turno.", "Un seul service.", lang)}
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: C.copper, fontFamily: fMono }}>— {tri("Reserve", "Prenota", "Réserver", lang)}</p>
          <p className="text-[13px] leading-relaxed opacity-80">
            Lascaris Wharf 8<br />Valletta VLT 1922<br />+356 2123 4411
          </p>
        </div>
      </div>
      <div className="max-w-[1500px] mx-auto mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] tracking-wider uppercase opacity-60" style={{ borderTop: `1px solid ${C.border}`, fontFamily: fMono }}>
        <span>© {new Date().getFullYear()} Porto Valletta SA · Malta</span>
        <span>
          — Website by{" "}
          <a href="https://amenzo.co" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors" style={{ color: C.cream }}>
            Amenzo Studio
          </a>
        </span>
      </div>
    </footer>
  );
}
