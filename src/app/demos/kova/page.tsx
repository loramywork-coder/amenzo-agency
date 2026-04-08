"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Menu, X, Mail, MapPin, Phone } from "lucide-react";

/* ─── tokens ─── */
const C = {
  bg: "#F5F0EB",       // warm oat
  dark: "#1E1915",     // espresso
  accent: "#C4622D",   // burnt orange
  beige: "#E8D5C4",    // latte beige
  muted: "#6B5D52",
  border: "rgba(30,25,21,0.12)",
};
const fHead = "var(--font-serif-display), 'DM Serif Display', Georgia, serif";
const fBody = "var(--font-body), 'Inter', system-ui, sans-serif";

/* ─── data ─── */
const menuHighlights = [
  { name: "Espresso", desc: "Single shot, bold and clean", price: "CHF 4.50", img: "/images/kova/menu-espresso.jpg" },
  { name: "Cappuccino", desc: "Espresso, steamed milk, velvet foam", price: "CHF 5.80", img: "/images/kova/menu-cappuccino.jpg" },
  { name: "Pour Over", desc: "Slow-brewed single origin, 300ml", price: "CHF 6.50", img: "/images/kova/menu-pourover.jpg" },
  { name: "Cold Brew", desc: "18-hour steep, smooth and bright", price: "CHF 6.00", img: "/images/kova/menu-coldbrew.jpg" },
];

/* ─── reveal wrapper ─── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── nav ─── */
export function KovaNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav
        className="fixed top-10 left-0 right-0 z-50 px-6 md:px-12 py-5"
        style={{ background: "rgba(245,240,235,0.92)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${C.border}` }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/demos/kova"
            className="text-2xl font-bold tracking-[0.25em] no-underline"
            style={{ color: C.dark, fontFamily: fHead }}
          >
            KOVA
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link href="/demos/kova/menu" className="text-sm tracking-wide no-underline hover:opacity-70 transition-opacity" style={{ color: C.dark, fontFamily: fBody }}>
              Menu
            </Link>
            <Link href="/demos/kova/contact" className="text-sm tracking-wide no-underline hover:opacity-70 transition-opacity" style={{ color: C.dark, fontFamily: fBody }}>
              Contact
            </Link>
            <Link
              href="/demos/kova/menu#beans"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium no-underline transition-colors"
              style={{ background: C.accent, color: "#fff", fontFamily: fBody, borderRadius: 999 }}
            >
              Order Beans
            </Link>
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} style={{ color: C.dark }} /> : <Menu size={22} style={{ color: C.dark }} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8" style={{ background: C.bg }}>
          <Link href="/demos/kova/menu" onClick={() => setOpen(false)} className="text-3xl no-underline" style={{ color: C.dark, fontFamily: fHead }}>Menu</Link>
          <Link href="/demos/kova/contact" onClick={() => setOpen(false)} className="text-3xl no-underline" style={{ color: C.dark, fontFamily: fHead }}>Contact</Link>
          <Link href="/demos/kova/menu#beans" onClick={() => setOpen(false)} className="inline-flex items-center px-6 py-3 text-sm font-medium no-underline" style={{ background: C.accent, color: "#fff", borderRadius: 999, fontFamily: fBody }}>
            Order Beans
          </Link>
        </div>
      )}
    </>
  );
}

/* ─── footer ─── */
export function KovaFooter() {
  return (
    <footer className="px-6 md:px-12 py-16" style={{ background: C.dark, color: C.beige, fontFamily: fBody }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="text-2xl font-bold tracking-[0.25em] mb-4" style={{ fontFamily: fHead }}>KOVA</p>
          <p className="text-sm opacity-70 max-w-xs leading-relaxed">
            Single-origin coffee, slow-brewed with intention. Roasted and served in Zürich since 2019.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="https://instagram.com" aria-label="Instagram" className="text-xs opacity-70 hover:opacity-100 transition-opacity tracking-wide uppercase">
              Instagram
            </a>
          </div>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase opacity-50 mb-4">Visit</p>
          <p className="text-sm opacity-80 leading-relaxed">
            Niederdorfstrasse 42<br />
            8001 Zürich<br />
            Mon – Fri · 7:00 – 19:00<br />
            Sat – Sun · 8:00 – 18:00
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase opacity-50 mb-4">Contact</p>
          <p className="text-sm opacity-80 leading-relaxed">
            hallo@kovacoffee.ch<br />
            +41 44 123 45 67
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] opacity-50">
        <span>&copy; {new Date().getFullYear()} Kova Coffee. All rights reserved.</span>
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

/* ─── page ─── */
export default function KovaHomePage() {
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <KovaNav />

      {/* HERO */}
      <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
        <Image
          src="/images/kova/hero.jpg"
          alt="Kova Coffee interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(30,25,21,0.25) 0%, rgba(30,25,21,0.55) 100%)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[11px] md:text-[12px] tracking-[0.4em] uppercase mb-6"
            style={{ color: C.beige }}
          >
            Artisan Roastery · Zürich
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="max-w-3xl text-white"
            style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1.02, letterSpacing: "-0.01em" }}
          >
            Slow coffee, <em style={{ color: C.accent, fontStyle: "italic" }}>deeply</em> considered.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 max-w-md text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            Single-origin beans, roasted in-house. Brewed by hand, served with care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/demos/kova/menu"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium no-underline transition-opacity hover:opacity-90"
              style={{ background: C.accent, color: "#fff", borderRadius: 999, fontFamily: fBody }}
            >
              View the Menu
            </Link>
            <Link
              href="/demos/kova/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium no-underline transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.35)", color: "#fff", borderRadius: 999, fontFamily: fBody }}
            >
              Find Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: 4 }}>
              <Image src="/images/kova/about-barista.jpg" alt="Barista at Kova" fill className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase mb-5" style={{ color: C.accent }}>Our Story</p>
              <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.01em", color: C.dark }}>
                A café built on patience.
              </h2>
              <div className="mt-8 space-y-5 text-[15px] leading-[1.8]" style={{ color: C.muted }}>
                <p>
                  Kova started in 2019 with one small roaster, two people, and a belief that good coffee should never be rushed.
                </p>
                <p>
                  We source beans directly from farms in Ethiopia, Colombia and Rwanda. Every batch is roasted to order in our Niederdorf workshop, never more than ten days before it reaches your cup.
                </p>
                <p>
                  No pumpkin spice. No syrups with 40 ingredients. Just beans, water, time — and a team that cares about all three.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="px-6 md:px-12 py-24" style={{ background: C.beige }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: C.accent }}>The Menu</p>
              <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, color: C.dark }}>
                A few things we make well.
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuHighlights.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <div className="group">
                  <div className="relative aspect-square overflow-hidden mb-5" style={{ borderRadius: 4 }}>
                    <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 style={{ fontFamily: fHead, fontSize: 22, color: C.dark }}>{item.name}</h3>
                    <span className="text-sm font-medium whitespace-nowrap" style={{ color: C.accent }}>{item.price}</span>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed" style={{ color: C.muted }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-14 text-center">
              <Link
                href="/demos/kova/menu"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium no-underline transition-opacity hover:opacity-90"
                style={{ background: C.dark, color: C.beige, borderRadius: 999, fontFamily: fBody }}
              >
                See the full menu →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOCATION STRIP */}
      <section className="relative px-6 md:px-12 py-24 md:py-32 overflow-hidden" style={{ background: C.dark, color: C.beige }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase mb-5" style={{ color: C.accent }}>Find Us</p>
              <h2 className="text-white" style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05 }}>
                Niederdorfstrasse 42,<br />8001 Zürich.
              </h2>
              <div className="mt-8 space-y-4 text-[15px] leading-[1.8] opacity-80">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 shrink-0" style={{ color: C.accent }} />
                  <span>Niederdorfstrasse 42, 8001 Zürich</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-1 shrink-0" style={{ color: C.accent }} />
                  <span>+41 44 123 45 67</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0" style={{ color: C.accent }} />
                  <span>hallo@kovacoffee.ch</span>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 text-sm">
                <p className="font-medium mb-2 text-white">Opening Hours</p>
                <p className="opacity-70">Mon – Fri &nbsp;&nbsp; 7:00 – 19:00</p>
                <p className="opacity-70">Sat – Sun &nbsp;&nbsp; 8:00 – 18:00</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: 4 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.2342034285814!2d8.543!3d47.373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDIyJzIyLjgiTiA4wrAzMic1OS4wIkU!5e0!3m2!1sen!2sch!4v1600000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) contrast(1.1) invert(0.88)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kova Coffee location"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <KovaFooter />
    </div>
  );
}
