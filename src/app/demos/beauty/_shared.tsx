"use client";

import Link from "next/link";
import { useState, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

/* Warm luxury tokens — organic minimalism */
export const C = {
  bg: "#FAF7F2",           // primary cream
  warmWhite: "#FFFDF9",    // elevated surface
  highlight: "#F3EDE4",    // subtle alt section
  dark: "#1C1917",         // deep espresso
  darkAccent: "#292524",
  textPrimary: "#1A1A1A",
  textSecondary: "#57534E",
  textTertiary: "#A8A29E",
  onDark: "#FAF7F2",
  onDarkSub: "#D6D3D1",
  gold: "#B8956A",
  goldLight: "#D4B896",
  goldDark: "#96754E",
  taupe: "#D4C5B2",
  blush: "#E8DDD3",
  border: "#E7E1D8",
  borderDark: "#3D3835",
};

export const fHead = "var(--font-serif-display), 'Cormorant Garamond', Georgia, serif";
export const fBody = "var(--font-body), 'Plus Jakarta Sans', system-ui, sans-serif";
export const fMono = "var(--font-mono), 'JetBrains Mono', monospace";

/* Reveal on scroll */
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

/* Gold rule divider */
export function Rule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-14" style={{ background: C.gold }} />
      <span className="w-1 h-1 rotate-45" style={{ background: C.gold }} />
      <span className="h-px w-14" style={{ background: C.gold }} />
    </div>
  );
}

/* Eyebrow label */
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[10px] tracking-[0.3em] uppercase"
      style={{ color: light ? C.goldLight : C.gold, fontFamily: fMono }}
    >
      — {children}
    </p>
  );
}

/* Organic ornament — lotus petal mark */
export function Ornament({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path d="M20 4 C14 12, 14 20, 20 28 C26 20, 26 12, 20 4 Z" stroke="currentColor" strokeWidth="0.7" />
      <path d="M4 20 C12 14, 20 14, 28 20 C20 26, 12 26, 4 20 Z" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
    </svg>
  );
}

/* Navigation */
const NAV = [
  { href: "/demos/beauty/treatments", label: "Treatments" },
  { href: "/demos/beauty/about", label: "About" },
  { href: "/demos/beauty/gallery", label: "Gallery" },
  { href: "/demos/beauty/contact", label: "Contact" },
];

export function BeautyNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav
        className="fixed top-10 left-0 right-0 z-50 px-6 md:px-10 transition-all"
        style={{
          background: scrolled ? "rgba(250,247,242,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
          paddingTop: 18,
          paddingBottom: 18,
        }}
      >
        <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-4">
          <Link
            href="/demos/beauty"
            className="no-underline flex items-center gap-3 shrink-0"
            style={{ color: scrolled ? C.textPrimary : C.onDark, fontFamily: fHead }}
          >
            <span className="tracking-[0.2em] leading-[0.9] text-[15px] md:text-[17px] uppercase" style={{ fontWeight: 600 }}>
              Aura
            </span>
            <span
              className="hidden md:inline text-[9px] tracking-[0.2em] uppercase"
              style={{ color: C.gold, fontFamily: fMono }}
            >
              — Beauty Studio · Zürich
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] tracking-[0.15em] uppercase no-underline transition-opacity hover:opacity-70"
                style={{ color: scrolled ? C.textPrimary : C.onDark, fontFamily: fBody, fontWeight: 500 }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/demos/beauty/contact"
              className="inline-flex items-center px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase no-underline transition-colors rounded-full"
              style={{ background: C.gold, color: C.warmWhite, fontFamily: fBody, fontWeight: 600 }}
            >
              Book Now
            </Link>
          </div>

          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} style={{ color: C.onDark }} /> : <Menu size={22} style={{ color: scrolled ? C.textPrimary : C.onDark }} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center gap-8 px-6 pt-40" style={{ background: C.dark }}>
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-3xl italic no-underline"
              style={{ fontFamily: fHead, color: C.onDark, lineHeight: 1.4 }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/demos/beauty/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center px-8 py-3 text-[11px] tracking-[0.15em] uppercase no-underline rounded-full"
            style={{ background: C.gold, color: C.warmWhite, fontFamily: fBody, fontWeight: 600 }}
          >
            Book Now
          </Link>
        </div>
      )}
    </>
  );
}

/* Footer */
export function BeautyFooter() {
  return (
    <footer className="px-6 md:px-10 pt-24 pb-10" style={{ background: C.dark, color: C.onDarkSub, fontFamily: fBody }}>
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Eyebrow light>Zürich · Since 2019</Eyebrow>
          <p className="text-[42px] md:text-[60px] leading-[0.95] mt-5 mb-6" style={{ fontFamily: fHead, fontWeight: 500, color: C.onDark }}>
            Aura <em style={{ fontStyle: "italic", color: C.goldLight }}>Beauty</em>
            <br />Studio
          </p>
          <p className="text-[13px] leading-relaxed opacity-75 max-w-sm">
            A quiet ritual in the heart of Zurich. Personalised treatments, Swiss-sourced products, and a space designed to honour you.
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: C.goldLight, fontFamily: fMono }}>— Navigate</p>
          <ul className="space-y-2 text-[13px]">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="no-underline hover:text-white transition-colors" style={{ color: C.onDarkSub }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: C.goldLight, fontFamily: fMono }}>— Studio</p>
          <p className="text-[13px] leading-relaxed opacity-80">
            Bahnhofstrasse 42<br />8001 Zürich<br />Switzerland
          </p>
          <p className="text-[13px] leading-relaxed opacity-80 mt-4">
            +41 44 520 88 90<br />hello@aurabeauty.ch
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: C.goldLight, fontFamily: fMono }}>— Follow</p>
          <ul className="space-y-2 text-[13px]">
            <li><a href="https://instagram.com" className="no-underline hover:text-white transition-colors" style={{ color: C.onDarkSub }}>Instagram</a></li>
            <li><a href="https://facebook.com" className="no-underline hover:text-white transition-colors" style={{ color: C.onDarkSub }}>Facebook</a></li>
            <li><a href="#" className="no-underline hover:text-white transition-colors" style={{ color: C.onDarkSub }}>WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1500px] mx-auto mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] tracking-wider uppercase opacity-60" style={{ borderTop: "1px solid rgba(216,211,209,0.1)", fontFamily: fMono }}>
        <span>© {new Date().getFullYear()} Aura Beauty Studio · Zürich, Switzerland</span>
        <span>
          — Website by{" "}
          <a href="https://amenzo.co" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors" style={{ color: C.onDarkSub }}>
            Amenzo Studio
          </a>
        </span>
      </div>
    </footer>
  );
}

/* ----- DATA ----- */

const un = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=90`;

export const IMG = {
  hero: un("1570172619644-dfd03ed5d881", 2400),
  philosophy: un("1617897903246-719242758050", 1400),
  ctaBg: un("1616394584738-fc6e612e71b9", 2400),
  treatmentsHero: un("1583241800698-e8ab01830a07", 2400),
  aboutHero: un("1519415943484-9fa1873496d4", 2400),
  galleryHero: un("1544161515-4ab6ce6db874", 2400),
  contactHero: un("1540555700478-4be289fbecef", 2400),
  founder: un("1508214751196-bcfd4ca60f91", 1200),
};

export type Service = {
  slug: string;
  num: string;
  name: string;
  price: number;
  duration: string;
  shortDesc: string;
  fullDesc: string;
  expect: string[];
  image: string;
  category: "Facials" | "Eyes & Brows" | "Body" | "Packages";
};

export const services: Service[] = [
  {
    slug: "signature-facial",
    num: "01",
    name: "Signature Facial",
    price: 185,
    duration: "60 min",
    shortDesc: "Deep cleansing, custom serums, LED light therapy.",
    fullDesc:
      "Our hero treatment. Double cleanse, skin analysis, gentle exfoliation, extractions, a custom serum cocktail, LED light therapy. Finished with a hydrating mask and facial massage.",
    expect: ["Personalised skin analysis", "LED light therapy", "Custom serum cocktail"],
    image: un("1570172619644-dfd03ed5d881"),
    category: "Facials",
  },
  {
    slug: "hydra-glow",
    num: "02",
    name: "Hydra-Glow Treatment",
    price: 220,
    duration: "75 min",
    shortDesc: "Hyaluronic acid infusion with 24K gold collagen mask.",
    fullDesc:
      "For skin that craves deep hydration. Hyaluronic acid layering, a 24K gold collagen mask, cryotherapy facial massage, and a custom moisture lock. A lit-from-within glow that lasts days.",
    expect: ["24K gold collagen mask", "Hyaluronic acid layering", "Cryotherapy massage"],
    image: un("1616394584738-fc6e612e71b9"),
    category: "Facials",
  },
  {
    slug: "express-refresh",
    num: "03",
    name: "Express Refresh",
    price: 95,
    duration: "30 min",
    shortDesc: "Your lunchbreak glow-up.",
    fullDesc:
      "Short on time, big on results. Cleanse, enzyme peel, vitamin C serum, and SPF finish.",
    expect: ["Enzyme peel", "Vitamin C boost", "SPF finish"],
    image: un("1598440947619-2c35fc9aa908"),
    category: "Facials",
  },
  {
    slug: "brow-architecture",
    num: "04",
    name: "Brow Architecture",
    price: 65,
    duration: "30 min",
    shortDesc: "Precision mapping, shaping, tinting, lamination.",
    fullDesc:
      "Precision mapping, shaping, wax or thread, and tint. We design brows that frame your face perfectly — never a one-shape-fits-all approach.",
    expect: ["Custom brow mapping", "Wax or thread", "Tint & lamination"],
    image: un("1583241800698-e8ab01830a07"),
    category: "Eyes & Brows",
  },
  {
    slug: "lash-lift-tint",
    num: "05",
    name: "Lash Lift & Tint",
    price: 95,
    duration: "45 min",
    shortDesc: "Natural lift and definition — no extensions.",
    fullDesc:
      "A natural alternative to extensions. Lashes are lifted from the root, tinted for definition, and nourished with a keratin treatment.",
    expect: ["Root lift", "Tint for definition", "Keratin nourishment"],
    image: un("1552693673-1bf958298935"),
    category: "Eyes & Brows",
  },
  {
    slug: "lash-extensions",
    num: "06",
    name: "Classic Lash Extensions",
    price: 180,
    duration: "90 min",
    shortDesc: "Silk lashes applied one-to-one for natural enhancement.",
    fullDesc:
      "Individual silk lashes applied one-to-one for a naturally enhanced look. Includes consultation to choose your ideal curl, length, and density.",
    expect: ["Personal consultation", "One-to-one application", "Silk lash fibres"],
    image: un("1512290923902-8a9f81dc236c"),
    category: "Eyes & Brows",
  },
  {
    slug: "body-sculpt-massage",
    num: "07",
    name: "Body Sculpt Massage",
    price: 210,
    duration: "90 min",
    shortDesc: "Deep tissue sculpting with warm Swiss botanical oils.",
    fullDesc:
      "A therapeutic deep-tissue experience using warm Swiss botanical oils, targeted pressure point work, and lymphatic drainage. Relieves tension and reshapes body contours.",
    expect: ["Swiss botanical oils", "Pressure point therapy", "Lymphatic drainage"],
    image: un("1544161515-4ab6ce6db874"),
    category: "Body",
  },
  {
    slug: "alpine-body-wrap",
    num: "08",
    name: "Swiss Alpine Body Wrap",
    price: 175,
    duration: "60 min",
    shortDesc: "Mineral-rich alpine clay wrap with essential oils.",
    fullDesc:
      "Mineral-rich alpine clay wrap combined with essential oils. Detoxifies, firms, and nourishes. Includes a scalp massage during setting time.",
    expect: ["Alpine clay mask", "Essential oil infusion", "Scalp massage"],
    image: un("1540555700478-4be289fbecef"),
    category: "Body",
  },
  {
    slug: "back-facial",
    num: "09",
    name: "Back Facial",
    price: 120,
    duration: "45 min",
    shortDesc: "Deep cleanse, exfoliation, mask, hydration for your back.",
    fullDesc:
      "Often neglected, never by us. Deep cleanse, exfoliation, mask, and hydration for your back — because you deserve to glow from every angle.",
    expect: ["Back exfoliation", "Clarifying mask", "Deep hydration"],
    image: un("1596462502278-27bfdc403348"),
    category: "Body",
  },
  {
    slug: "bridal-luxe",
    num: "10",
    name: "Bridal Luxe Package",
    price: 450,
    duration: "3 hrs",
    shortDesc: "Complete bridal prep — facial, lashes, brows, makeup trial.",
    fullDesc:
      "The ultimate bridal prep. Includes Signature Facial, Brow Architecture, Lash Lift & Tint, and a makeup trial. Designed to have you glowing on your big day.",
    expect: ["Signature Facial", "Brow + Lash treatment", "Makeup trial"],
    image: un("1519415943484-9fa1873496d4"),
    category: "Packages",
  },
  {
    slug: "glow-getter-duo",
    num: "11",
    name: "Glow Getter Duo",
    price: 280,
    duration: "2 hrs",
    shortDesc: "Any facial + any body treatment at a special rate.",
    fullDesc:
      "Combine any facial with a body treatment of your choice at a special rate. The perfect afternoon of self-care — save CHF 60.",
    expect: ["Any signature facial", "Any body treatment", "Save CHF 60"],
    image: un("1631730359585-38a4935cbec4"),
    category: "Packages",
  },
  {
    slug: "inner-circle",
    num: "12",
    name: "The Inner Circle",
    price: 149,
    duration: "Monthly",
    shortDesc: "Monthly signature treatment, 15% off add-ons, priority booking.",
    fullDesc:
      "One signature treatment per month, 15% off all add-ons, priority booking, and exclusive member events. Join the glow.",
    expect: ["Monthly signature treatment", "15% off add-ons", "Priority booking"],
    image: un("1516975080664-ed2fc6a32937"),
    category: "Packages",
  },
];

export const team = [
  {
    slug: "elena",
    name: "Elena Moser",
    title: "Lead Aesthetician & Founder",
    shortBio: "12+ years in cosmetic dermatology. Trained in Paris and Zurich.",
    fullBio:
      "Elena founded Aura in 2019 after a decade in high-end dermatology clinics across Paris and Zurich. She trained under some of Europe's most respected skin specialists and believes skincare is deeply personal — no two treatments in her chair are the same.",
    specialties: ["Advanced Facials", "Anti-aging", "Consultation"],
    image: un("1508214751196-bcfd4ca60f91", 1000),
  },
  {
    slug: "mia",
    name: "Mia Chen",
    title: "Skin Therapist",
    shortBio: "Hydration and anti-aging specialist. Calming, precise.",
    fullBio:
      "Mia joined Aura in 2021 and quickly became a client favourite. With a background in holistic wellness and certified training in Korean skincare philosophy, she combines technical expertise with a uniquely gentle touch.",
    specialties: ["Hydration", "Korean Skincare", "Holistic Wellness"],
    image: un("1494790108377-be9c29b29330", 1000),
  },
  {
    slug: "sara",
    name: "Sara Dubois",
    title: "Brow & Lash Artist",
    shortBio: "Award-winning brow architect. Precise, subtle, exacting.",
    fullBio:
      "Sara is Aura's brow and lash specialist, with certifications from London and Milan. She won the 2024 Swiss Brow Artist of the Year and is renowned for her precision mapping. Her philosophy: brows should enhance the face, never define it.",
    specialties: ["Brow Architecture", "Lash Extensions", "Lash Lifts"],
    image: un("1534528741775-53994a69daeb", 1000),
  },
];

export const testimonials = [
  {
    quote:
      "Aura transformed my skin in ways I didn't think possible. Every visit feels like a ritual, not a routine.",
    name: "Sophia M.",
    treatment: "Signature Facial",
  },
  {
    quote:
      "The attention to detail is unmatched. From the moment you walk in, you feel held and understood.",
    name: "Leila K.",
    treatment: "Hydra-Glow Treatment",
  },
  {
    quote:
      "I've been to spas across Europe — Aura is the only place I keep coming back to. It's home.",
    name: "Claudia R.",
    treatment: "Body Sculpt Massage",
  },
];

export const galleryImages = [
  { src: un("1570172619644-dfd03ed5d881"), alt: "Signature facial treatment", category: "Treatments" },
  { src: un("1616394584738-fc6e612e71b9"), alt: "Hydration mask application", category: "Treatments" },
  { src: un("1583241800698-e8ab01830a07"), alt: "Brow architecture palette", category: "Behind the Scenes" },
  { src: un("1552693673-1bf958298935"), alt: "Facial treatment close-up", category: "Treatments" },
  { src: un("1544161515-4ab6ce6db874"), alt: "Body sculpt with warm oils", category: "Treatments" },
  { src: un("1519415943484-9fa1873496d4"), alt: "Bridal beauty prep", category: "Behind the Scenes" },
  { src: un("1617897903246-719242758050"), alt: "Serum and eucalyptus", category: "Products" },
  { src: un("1631730359585-38a4935cbec4"), alt: "Amber serum bottles", category: "Products" },
  { src: un("1598440947619-2c35fc9aa908"), alt: "Curated skincare shelf", category: "Products" },
  { src: un("1540555700478-4be289fbecef"), alt: "Botanical oil with tulips", category: "Products" },
  { src: un("1596462502278-27bfdc403348"), alt: "Professional brushes", category: "Studio" },
  { src: un("1516975080664-ed2fc6a32937"), alt: "Makeup brush collection", category: "Studio" },
  { src: un("1512290923902-8a9f81dc236c"), alt: "Treatment close-up", category: "Treatments" },
  { src: un("1508214751196-bcfd4ca60f91"), alt: "Founder portrait", category: "Behind the Scenes" },
  { src: un("1494790108377-be9c29b29330"), alt: "Team member at work", category: "Behind the Scenes" },
  { src: un("1534528741775-53994a69daeb"), alt: "Brow specialist", category: "Behind the Scenes" },
];

export const faqs = [
  { q: "How do I book an appointment?", a: "Book directly through our website, call us, or send a WhatsApp message. We recommend booking at least 48 hours in advance." },
  { q: "What should I do before my facial?", a: "Come with clean skin if possible. Avoid retinol products 24 hours before. We'll take care of the rest." },
  { q: "Do you offer consultations?", a: "Yes — a complimentary 15-minute skin consultation to help determine the best treatment for your needs." },
  { q: "What products do you use?", a: "Swiss-sourced, cruelty-free professional skincare lines including Alpenrose Cosmetics and Derma Suisse." },
  { q: "Can I buy gift vouchers?", a: "Absolutely. Available in any amount and for any treatment. Contact us to purchase." },
  { q: "What is your cancellation policy?", a: "We kindly ask for 24 hours notice. Late cancellations may incur a 50% charge." },
];
