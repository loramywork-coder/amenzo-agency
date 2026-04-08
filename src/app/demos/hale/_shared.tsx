"use client";

import Link from "next/link";
import { useState, createContext, useContext, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

/* tokens */
export const C = {
  bg: "#FAFAFA",
  dark: "#0A0A0A",
  grey: "#6B6B6B",
  brass: "#E8C46A",
  border: "rgba(10,10,10,0.08)",
  borderStrong: "rgba(10,10,10,0.16)",
};
export const fHead = "var(--font-serif-display), 'Instrument Serif', 'DM Serif Display', Georgia, serif";
export const fBody = "var(--font-body), 'Syne', 'Inter', system-ui, sans-serif";
export const fMono = "var(--font-mono), 'Space Mono', 'JetBrains Mono', monospace";

/* trilingual */
export type Lang = "en" | "de" | "fr";
type LangCtx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<LangCtx | null>(null);
const STORAGE_KEY = "hale-lang";

export function HaleLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "en" || saved === "de" || saved === "fr") setLangState(saved);
    } catch {}
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
  };
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}
export function useHaleLang() {
  const ctx = useContext(LangContext);
  return ctx ?? { lang: "en" as Lang, setLang: () => {} };
}
export function tri<T>(en: T, de: T, fr: T, lang: Lang): T {
  return lang === "de" ? de : lang === "fr" ? fr : en;
}

/* reveal */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* clip-path text reveal */
export function ClipReveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay, ease: [0.77, 0, 0.175, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* rule */
export function Rule({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full ${className}`} style={{ background: C.dark }} />;
}

/* nav */
const NAV = [
  { href: "/demos/hale/projects", en: "Projects", de: "Projekte", fr: "Projets" },
  { href: "/demos/hale/studio", en: "Studio", de: "Studio", fr: "Studio" },
  { href: "/demos/hale/approach", en: "Approach", de: "Ansatz", fr: "Approche" },
  { href: "/demos/hale/services", en: "Services", de: "Leistungen", fr: "Services" },
  { href: "/demos/hale/journal", en: "Journal", de: "Journal", fr: "Journal" },
];

export function HaleNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useHaleLang();

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
          background: scrolled ? "rgba(250,250,250,0.96)" : "transparent",
          borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          paddingTop: 18,
          paddingBottom: 18,
        }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-6">
          <Link
            href="/demos/hale"
            className="no-underline tracking-[0.16em] uppercase text-[15px] md:text-[16px]"
            style={{ fontFamily: fBody, color: C.dark, fontWeight: 500, whiteSpace: "nowrap" }}
          >
            Hale & Partners
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[12px] tracking-[0.1em] uppercase no-underline transition-opacity hover:opacity-60"
                style={{ color: C.dark, fontFamily: fBody }}
              >
                {tri(l.en, l.de, l.fr, lang)}
              </Link>
            ))}
            <div className="flex items-center text-[10px] tracking-wider" style={{ color: C.grey, fontFamily: fMono }}>
              {(["en", "de", "fr"] as Lang[]).map((l, i) => (
                <span key={l} className="flex items-center">
                  {i > 0 && <span className="mx-1.5 opacity-40">/</span>}
                  <button
                    onClick={() => setLang(l)}
                    className="uppercase transition-colors"
                    style={{ color: lang === l ? C.dark : C.grey, fontWeight: lang === l ? 700 : 400 }}
                  >
                    {l}
                  </button>
                </span>
              ))}
            </div>
            <Link
              href="/demos/hale/contact"
              className="inline-flex items-center px-5 py-2 text-[11px] tracking-[0.1em] uppercase no-underline transition-colors"
              style={{ background: C.dark, color: C.bg, fontFamily: fBody, borderRadius: 0 }}
            >
              {tri("Contact", "Kontakt", "Contact", lang)}
            </Link>
          </div>

          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} style={{ color: C.dark }} /> : <Menu size={20} style={{ color: C.dark }} />}
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
              className="text-2xl no-underline tracking-wide"
              style={{ fontFamily: fHead, color: C.dark }}
            >
              {tri(l.en, l.de, l.fr, lang)}
            </Link>
          ))}
          <div className="flex items-center gap-3 text-xs" style={{ fontFamily: fMono, color: C.grey }}>
            {(["en", "de", "fr"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="uppercase"
                style={{ color: lang === l ? C.dark : C.grey, fontWeight: lang === l ? 700 : 400 }}
              >
                {l}
              </button>
            ))}
          </div>
          <Link
            href="/demos/hale/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center px-6 py-3 text-xs tracking-wider uppercase no-underline"
            style={{ background: C.dark, color: C.bg, fontFamily: fBody }}
          >
            {tri("Contact", "Kontakt", "Contact", lang)}
          </Link>
        </div>
      )}
    </>
  );
}

/* footer */
export function HaleFooter() {
  const { lang } = useHaleLang();
  return (
    <footer className="px-6 md:px-10 pt-20 pb-10" style={{ background: C.bg, color: C.dark, fontFamily: fBody, borderTop: `1px solid ${C.borderStrong}` }}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-6" style={{ color: C.grey, fontFamily: fMono }}>
            — {tri("Studio", "Studio", "Studio", lang)}
          </p>
          <p className="text-[42px] md:text-[56px] leading-[0.95] mb-8" style={{ fontFamily: fHead, fontWeight: 400, color: C.dark }}>
            Hale <em style={{ fontStyle: "italic" }}>& Partners</em>
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: C.grey, fontFamily: fMono }}>— Navigate</p>
          <ul className="space-y-2 text-[13px]">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="no-underline hover:opacity-60 transition-opacity" style={{ color: C.dark }}>
                  {tri(l.en, l.de, l.fr, lang)}
                </Link>
              </li>
            ))}
            <li><Link href="/demos/hale/press" className="no-underline hover:opacity-60 transition-opacity" style={{ color: C.dark }}>Press</Link></li>
            <li><Link href="/demos/hale/careers" className="no-underline hover:opacity-60 transition-opacity" style={{ color: C.dark }}>Careers</Link></li>
            <li><Link href="/demos/hale/legal" className="no-underline hover:opacity-60 transition-opacity" style={{ color: C.dark }}>Legal</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: C.grey, fontFamily: fMono }}>— Studio</p>
          <p className="text-[13px] leading-relaxed">
            Seefeldstrasse 110<br />8008 Zürich<br />Switzerland
          </p>
          <p className="text-[13px] leading-relaxed mt-4">
            +41 44 380 12 34<br />studio@haleandpartners.ch
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: C.grey, fontFamily: fMono }}>— Follow</p>
          <ul className="space-y-2 text-[13px]">
            <li><a href="https://instagram.com" className="no-underline hover:opacity-60 transition-opacity" style={{ color: C.dark }}>Instagram</a></li>
            <li><a href="https://linkedin.com" className="no-underline hover:opacity-60 transition-opacity" style={{ color: C.dark }}>LinkedIn</a></li>
            <li><a href="https://pinterest.com" className="no-underline hover:opacity-60 transition-opacity" style={{ color: C.dark }}>Pinterest</a></li>
          </ul>
        </div>
      </div>
      <Rule className="mt-16 opacity-30" />
      <div className="max-w-[1400px] mx-auto mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] tracking-wider uppercase" style={{ color: C.grey, fontFamily: fMono }}>
        <span>© {new Date().getFullYear()} Hale & Partners · {tri("All rights reserved", "Alle Rechte vorbehalten", "Tous droits réservés", lang)}</span>
        <span>
          — Website by{" "}
          <a href="https://amenzo.co" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity" style={{ color: C.dark }}>
            Amenzo Studio
          </a>
        </span>
      </div>
    </footer>
  );
}

/* projects data (shared) */
export const projects = [
  {
    slug: "haus-alpenblick",
    num: "01",
    titleEn: "Haus Alpenblick",
    titleDe: "Haus Alpenblick",
    titleFr: "Haus Alpenblick",
    type: { en: "Residential", de: "Wohnbau", fr: "Résidentiel" },
    location: "Vitznau, CH",
    year: "2024",
    area: "580m²",
    images: ["p1-1.jpg", "p1-2.jpg", "p1-3.jpg", "p1-4.jpg", "p1-5.jpg", "p1-6.jpg"],
    heroImg: "p1-1.jpg",
    descEn:
      "A concrete and oak residence overlooking Lake Lucerne. The brief was simple: a house that disappears into the landscape during the day and becomes a lantern at night. Full structural rebuild with interior millwork designed in-house.",
    descDe:
      "Ein Wohnhaus aus Beton und Eiche mit Blick auf den Vierwaldstättersee. Die Vorgabe war einfach: ein Haus, das tagsüber in der Landschaft verschwindet und nachts zur Laterne wird. Kompletter konstruktiver Umbau mit Innenausbau aus eigener Werkstatt.",
    descFr:
      "Une résidence en béton et chêne surplombant le lac des Quatre-Cantons. Le brief était simple : une maison qui disparaît dans le paysage le jour et devient lanterne la nuit. Reconstruction structurelle complète avec ébénisterie intérieure conçue en interne.",
  },
  {
    slug: "volta-office",
    num: "02",
    titleEn: "Volta Office",
    titleDe: "Volta Büro",
    titleFr: "Bureau Volta",
    type: { en: "Commercial", de: "Gewerbebau", fr: "Commercial" },
    location: "Basel, CH",
    year: "2023",
    area: "2,400m²",
    images: ["p2-1.jpg", "p2-2.jpg", "p2-3.jpg", "p2-4.jpg", "p2-5.jpg", "p2-6.jpg"],
    heroImg: "p2-1.jpg",
    descEn:
      "Adaptive reuse of a 1920s industrial warehouse into open-plan offices for a technology company. The existing brick shell was preserved and paired with raw steel interventions — no drywall, no suspended ceilings, no paint.",
    descDe:
      "Adaptive Nachnutzung eines Industriebaus aus den 1920er-Jahren zu offenen Büroflächen für ein Tech-Unternehmen. Die bestehende Ziegelhülle wurde erhalten und mit rohen Stahleinbauten ergänzt — kein Trockenbau, keine abgehängten Decken, keine Farbe.",
    descFr:
      "Réutilisation adaptative d'un entrepôt industriel des années 1920 en bureaux ouverts pour une entreprise tech. L'enveloppe de brique existante a été préservée et complétée par des interventions en acier brut — sans cloisons sèches, sans faux plafond, sans peinture.",
  },
  {
    slug: "atelier-blanc",
    num: "03",
    titleEn: "Atelier Blanc",
    titleDe: "Atelier Blanc",
    titleFr: "Atelier Blanc",
    type: { en: "Interior", de: "Innenarchitektur", fr: "Intérieur" },
    location: "Geneva, CH",
    year: "2024",
    area: "320m²",
    images: ["p3-1.jpg", "p3-2.jpg", "p3-3.jpg", "p3-4.jpg", "p3-5.jpg"],
    heroImg: "p3-1.jpg",
    descEn:
      "Showroom and atelier for a Swiss fashion designer. Every surface is white. Every light is indirect. The garments are the only colour in the room. A study in restraint.",
    descDe:
      "Showroom und Atelier für eine Schweizer Modedesignerin. Jede Oberfläche ist weiss. Jedes Licht indirekt. Die Kleidungsstücke sind die einzige Farbe im Raum. Eine Studie in Zurückhaltung.",
    descFr:
      "Showroom et atelier pour une créatrice de mode suisse. Chaque surface est blanche. Chaque éclairage est indirect. Les vêtements sont la seule couleur de la pièce. Une étude en retenue.",
  },
  {
    slug: "jardin-carouge",
    num: "04",
    titleEn: "Jardin Carouge",
    titleDe: "Jardin Carouge",
    titleFr: "Jardin Carouge",
    type: { en: "Landscape", de: "Landschaftsbau", fr: "Paysage" },
    location: "Carouge, CH",
    year: "2023",
    area: "1,100m²",
    images: ["p4-1.jpg", "p4-2.jpg", "p4-3.jpg", "p4-4.jpg", "p4-5.jpg"],
    heroImg: "p4-1.jpg",
    descEn:
      "Public garden on a reclaimed industrial lot. Native planting, permeable paving, and a single steel pavilion. Designed in collaboration with Studio Vert and the City of Carouge.",
    descDe:
      "Öffentlicher Garten auf einem rekultivierten Industrieareal. Einheimische Bepflanzung, durchlässige Pflasterung und ein einziger Stahlpavillon. In Zusammenarbeit mit Studio Vert und der Stadt Carouge entworfen.",
    descFr:
      "Jardin public sur un ancien site industriel réhabilité. Plantation indigène, pavage perméable et un unique pavillon en acier. Conçu en collaboration avec Studio Vert et la Ville de Carouge.",
  },
];
