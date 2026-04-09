"use client";

import Link from "next/link";
import { useState, useEffect, createContext, useContext, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

/* tokens */
export const C = {
  bg: "#F7F1E8",      // warm cream
  dark: "#1A1410",    // dark espresso
  gold: "#B8944D",    // muted brass
  goldLight: "#D4B878",
  navy: "#0E1A2B",    // harbour navy
  muted: "#7A6E5F",
  border: "rgba(26,20,16,0.12)",
};
export const fHead = "var(--font-serif-display), 'Cormorant Garamond', 'Playfair Display', Georgia, serif";
export const fBody = "var(--font-body), 'Montserrat', 'Inter', system-ui, sans-serif";
export const fMono = "var(--font-mono), 'JetBrains Mono', 'Space Mono', monospace";

/* trilingual */
export type Lang = "en" | "de" | "fr";
const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void } | null>(null);

export function HotelLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("hotel-lang") as Lang | null;
      if (saved === "en" || saved === "de" || saved === "fr") setLangState(saved);
    } catch {}
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("hotel-lang", l); } catch {}
  };
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export function useHotelLang() {
  return useContext(LangCtx) ?? { lang: "en" as Lang, setLang: () => {} };
}

export function tri<T>(en: T, de: T, fr: T, lang: Lang): T {
  return lang === "de" ? de : lang === "fr" ? fr : en;
}

/* Reveal */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Ornament — tiny compass rose */
export function Ornament({ className = "", size = 44 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" className={className} aria-hidden>
      <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="22" cy="22" r="3" fill="currentColor" />
      <path d="M22 4 L22 16 M22 28 L22 40 M4 22 L16 22 M28 22 L40 22" stroke="currentColor" strokeWidth="0.8" />
      <path d="M9 9 L17 17 M27 27 L35 35 M35 9 L27 17 M17 27 L9 35" stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
    </svg>
  );
}

export function Rule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-16" style={{ background: C.gold }} />
      <span className="w-1.5 h-1.5 rotate-45" style={{ background: C.gold }} />
      <span className="h-px w-16" style={{ background: C.gold }} />
    </div>
  );
}

/* Nav */
const NAV = [
  { href: "/demos/hotel/rooms", en: "Rooms", de: "Zimmer", fr: "Chambres" },
  { href: "/demos/hotel/dining", en: "Dining", de: "Restaurant", fr: "Restaurant" },
  { href: "/demos/hotel/spa", en: "Spa & Pool", de: "Spa & Pool", fr: "Spa & Piscine" },
  { href: "/demos/hotel/experiences", en: "Experiences", de: "Erlebnisse", fr: "Expériences" },
  { href: "/demos/hotel/events", en: "Events", de: "Events", fr: "Événements" },
  { href: "/demos/hotel/gallery", en: "Gallery", de: "Galerie", fr: "Galerie" },
];

export function HotelNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useHotelLang();

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
          background: scrolled ? "rgba(247,241,232,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
          paddingTop: 18,
          paddingBottom: 18,
        }}
      >
        <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-4">
          {/* Wordmark */}
          <Link
            href="/demos/hotel"
            className="no-underline flex items-center gap-3 shrink-0"
            style={{ color: scrolled ? C.dark : C.bg, fontFamily: fHead }}
          >
            <span className="tracking-[0.15em] leading-[0.9] text-[14px] md:text-[15px] whitespace-nowrap" style={{ fontWeight: 500 }}>
              GRAND HARBOUR
            </span>
            <span
              className="hidden md:inline text-[9px] tracking-[0.2em] uppercase"
              style={{ color: C.gold, fontFamily: fMono, letterSpacing: "0.2em" }}
            >
              — Valletta · 1897
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] tracking-[0.15em] uppercase no-underline transition-opacity hover:opacity-70"
                style={{ color: scrolled ? C.dark : C.bg, fontFamily: fBody, fontWeight: 500 }}
              >
                {tri(l.en, l.de, l.fr, lang)}
              </Link>
            ))}
            <div className="flex items-center text-[10px] tracking-wider" style={{ fontFamily: fMono }}>
              {(["en", "de", "fr"] as Lang[]).map((l, i) => (
                <span key={l} className="flex items-center">
                  {i > 0 && <span className="mx-1 opacity-40" style={{ color: scrolled ? C.muted : "rgba(247,241,232,0.6)" }}>/</span>}
                  <button
                    onClick={() => setLang(l)}
                    className="uppercase px-0.5"
                    style={{
                      color: lang === l ? (scrolled ? C.dark : C.gold) : (scrolled ? C.muted : "rgba(247,241,232,0.65)"),
                      fontWeight: lang === l ? 700 : 400,
                    }}
                  >
                    {l}
                  </button>
                </span>
              ))}
            </div>
            <Link
              href="/demos/hotel/contact"
              className="inline-flex items-center px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase no-underline transition-colors"
              style={{
                background: C.gold,
                color: C.bg,
                fontFamily: fBody,
                fontWeight: 600,
              }}
            >
              {tri("Reserve", "Reservieren", "Réserver", lang)}
            </Link>
          </div>

          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} style={{ color: scrolled ? C.dark : C.bg }} /> : <Menu size={22} style={{ color: scrolled ? C.dark : C.bg }} />}
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
              style={{ fontFamily: fHead, color: C.dark, fontStyle: "italic" }}
            >
              {tri(l.en, l.de, l.fr, lang)}
            </Link>
          ))}
          <div className="flex items-center gap-3 text-xs mt-3" style={{ fontFamily: fMono, color: C.muted }}>
            {(["en", "de", "fr"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="uppercase px-2"
                style={{ color: lang === l ? C.dark : C.muted, fontWeight: lang === l ? 700 : 400 }}
              >
                {l}
              </button>
            ))}
          </div>
          <Link
            href="/demos/hotel/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center px-7 py-3 text-[11px] tracking-wider uppercase no-underline"
            style={{ background: C.gold, color: C.bg, fontFamily: fBody, fontWeight: 600 }}
          >
            {tri("Reserve", "Reservieren", "Réserver", lang)}
          </Link>
        </div>
      )}
    </>
  );
}

/* Footer */
export function HotelFooter() {
  const { lang } = useHotelLang();
  return (
    <footer className="px-6 md:px-10 pt-24 pb-10" style={{ background: C.navy, color: "#D8CEB8", fontFamily: fBody }}>
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: C.goldLight, fontFamily: fMono }}>
            — Valletta · Since 1897
          </p>
          <p className="text-[42px] md:text-[60px] leading-[0.95] mb-6" style={{ fontFamily: fHead, fontWeight: 400 }}>
            Grand <em style={{ fontStyle: "italic", color: C.goldLight }}>Harbour</em><br />Hotel
          </p>
          <p className="text-[13px] leading-relaxed opacity-75 max-w-sm">
            {tri(
              "An intimate five-star hotel facing the Grand Harbour. Thirty-eight rooms, two restaurants, a rooftop spa, and 128 years of stories.",
              "Ein intimes Fünfsternehotel mit Blick auf den Grand Harbour. 38 Zimmer, zwei Restaurants, ein Dach-Spa und 128 Jahre Geschichte.",
              "Un hôtel cinq étoiles intime face au Grand Harbour. Trente-huit chambres, deux restaurants, un spa panoramique et 128 ans d'histoire.",
              lang
            )}
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: C.goldLight, fontFamily: fMono }}>— {tri("Stay", "Aufenthalt", "Séjour", lang)}</p>
          <ul className="space-y-2 text-[13px]">
            <li><Link href="/demos/hotel/rooms" className="no-underline hover:text-white transition-colors" style={{ color: "#D8CEB8" }}>{tri("Rooms & Suites", "Zimmer & Suiten", "Chambres & Suites", lang)}</Link></li>
            <li><Link href="/demos/hotel/dining" className="no-underline hover:text-white transition-colors" style={{ color: "#D8CEB8" }}>{tri("Dining", "Restaurant", "Restaurant", lang)}</Link></li>
            <li><Link href="/demos/hotel/spa" className="no-underline hover:text-white transition-colors" style={{ color: "#D8CEB8" }}>{tri("Spa & Pool", "Spa & Pool", "Spa & Piscine", lang)}</Link></li>
            <li><Link href="/demos/hotel/experiences" className="no-underline hover:text-white transition-colors" style={{ color: "#D8CEB8" }}>{tri("Experiences", "Erlebnisse", "Expériences", lang)}</Link></li>
            <li><Link href="/demos/hotel/events" className="no-underline hover:text-white transition-colors" style={{ color: "#D8CEB8" }}>{tri("Events", "Events", "Événements", lang)}</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: C.goldLight, fontFamily: fMono }}>— Hotel</p>
          <p className="text-[13px] leading-relaxed opacity-80">
            Triq San Pawl 42<br />Valletta VLT 1214<br />Malta
          </p>
          <p className="text-[13px] leading-relaxed opacity-80 mt-4">
            +356 2122 3344<br />stay@grandharbour.mt
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: C.goldLight, fontFamily: fMono }}>— {tri("Follow", "Folgen", "Suivre", lang)}</p>
          <ul className="space-y-2 text-[13px]">
            <li><a href="https://instagram.com" className="no-underline hover:text-white transition-colors" style={{ color: "#D8CEB8" }}>Instagram</a></li>
            <li><a href="https://facebook.com" className="no-underline hover:text-white transition-colors" style={{ color: "#D8CEB8" }}>Facebook</a></li>
            <li><Link href="/demos/hotel/impressum" className="no-underline hover:text-white transition-colors" style={{ color: "#D8CEB8" }}>{tri("Legal", "Impressum", "Mentions", lang)}</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1500px] mx-auto mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] tracking-wider uppercase opacity-60" style={{ borderTop: "1px solid rgba(216,206,184,0.1)", fontFamily: fMono }}>
        <span>© {new Date().getFullYear()} Grand Harbour Hotel SA · Valletta, Malta</span>
        <span>
          — Website by{" "}
          <a href="https://amenzo.co" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors" style={{ color: "#D8CEB8" }}>
            Amenzo Studio
          </a>
        </span>
      </div>
    </footer>
  );
}

/* Rooms data (shared across pages) */
export const rooms = [
  {
    slug: "heritage-double",
    num: "01",
    nameEn: "Heritage Double",
    nameDe: "Heritage Doppelzimmer",
    nameFr: "Chambre Heritage",
    shortEn: "Traditional Maltese character, courtyard views.",
    shortDe: "Maltesischer Charakter, Innenhofblick.",
    shortFr: "Caractère maltais traditionnel, vue sur cour.",
    longEn: "Our most affordable room, and arguably our most characterful. Oak beams, stone floors, and a private window onto the courtyard where breakfast is served in summer. 22m².",
    longDe: "Unser günstigstes Zimmer — und wohl unser charakterstärkstes. Eichenbalken, Steinböden und ein Fenster mit Blick auf den Innenhof, wo im Sommer das Frühstück serviert wird. 22m².",
    longFr: "Notre chambre la plus abordable — et sans doute la plus pleine de caractère. Poutres en chêne, sols en pierre, et une fenêtre privée donnant sur la cour où le petit-déjeuner est servi en été. 22m².",
    price: 340,
    sizeM2: 22,
    beds: "1 king or 2 single",
    view: "Courtyard",
    images: ["room-classic-1.jpg", "room-classic-2.jpg"],
  },
  {
    slug: "deluxe-harbour",
    num: "02",
    nameEn: "Deluxe Harbour",
    nameDe: "Deluxe Hafen",
    nameFr: "Deluxe Port",
    shortEn: "Full harbour view, private balcony.",
    shortDe: "Voller Hafenblick, privater Balkon.",
    shortFr: "Vue intégrale sur le port, balcon privé.",
    longEn: "The view that made us famous. Every Deluxe Harbour room opens onto the Grand Harbour — you can see the Three Cities across the water from your bed. Marble bathroom, Frette linens, private balcony with two chairs and a small table. 32m².",
    longDe: "Die Aussicht, die uns berühmt gemacht hat. Jedes Deluxe-Hafen-Zimmer öffnet sich zum Grand Harbour — vom Bett aus sehen Sie die Drei Städte auf der anderen Seite des Wassers. Marmorbad, Frette-Bettwäsche, privater Balkon mit zwei Stühlen und einem kleinen Tisch. 32m².",
    longFr: "La vue qui a fait notre réputation. Chaque chambre Deluxe Port s'ouvre sur le Grand Harbour — depuis votre lit, vous apercevez les Trois Cités de l'autre côté de l'eau. Salle de bain en marbre, linge Frette, balcon privé avec deux fauteuils et une petite table. 32m².",
    price: 520,
    sizeM2: 32,
    beds: "1 king",
    view: "Grand Harbour",
    images: ["room-deluxe-1.jpg", "room-deluxe-2.jpg", "room-deluxe-3.jpg"],
  },
  {
    slug: "harbour-suite",
    num: "03",
    nameEn: "Harbour Suite",
    nameDe: "Hafen Suite",
    nameFr: "Suite Port",
    shortEn: "Living room, dressing area, harbourside terrace.",
    shortDe: "Wohnzimmer, Ankleide, Hafenterrasse.",
    shortFr: "Salon, dressing, terrasse côté port.",
    longEn: "A proper suite. Separate living room with a reading corner and writing desk, walk-in dressing area, and a private harbourside terrace of 12m² furnished with loungers. Perfect for longer stays. 58m².",
    longDe: "Eine richtige Suite. Separates Wohnzimmer mit Leseecke und Schreibtisch, begehbares Ankleidezimmer und eine private Hafenterrasse von 12m² mit Liegestühlen. Ideal für längere Aufenthalte. 58m².",
    longFr: "Une véritable suite. Salon séparé avec coin lecture et bureau, dressing, et une terrasse privée donnant sur le port de 12m² meublée de transats. Idéale pour les longs séjours. 58m².",
    price: 890,
    sizeM2: 58,
    beds: "1 king",
    view: "Grand Harbour + Terrace",
    images: ["room-suite-1.jpg", "room-suite-2.jpg", "room-suite-3.jpg"],
  },
  {
    slug: "penthouse",
    num: "04",
    nameEn: "The Penthouse",
    nameDe: "Das Penthouse",
    nameFr: "Le Penthouse",
    shortEn: "The top floor. 240° view. Private roof terrace.",
    shortDe: "Oberstes Geschoss. 240°-Blick. Private Dachterrasse.",
    shortFr: "Dernier étage. Vue à 240°. Terrasse privée.",
    longEn: "Top floor, corner position, a single suite that commands 240° of harbour view. Two bedrooms, a full kitchen, a private 40m² roof terrace with outdoor dining. The penthouse is released for only 180 nights a year. 185m².",
    longDe: "Oberste Etage, Eckposition, eine einzige Suite mit 240° Hafenblick. Zwei Schlafzimmer, eine voll ausgestattete Küche, eine private 40m² Dachterrasse mit Aussenküche. Das Penthouse wird nur 180 Nächte pro Jahr freigegeben. 185m².",
    longFr: "Dernier étage, position d'angle, une seule suite offrant une vue à 240° sur le port. Deux chambres, une cuisine complète, une terrasse privée de 40m² avec coin repas extérieur. Le penthouse n'est libéré que 180 nuits par an. 185m².",
    price: 2400,
    sizeM2: 185,
    beds: "2 king",
    view: "240° Panorama",
    images: ["room-penthouse-1.jpg", "room-penthouse-2.jpg", "room-penthouse-3.jpg"],
  },
];
