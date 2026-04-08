"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { KovaNav, KovaFooter } from "../page";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const C = {
  bg: "#F5F0EB",
  dark: "#1E1915",
  accent: "#C4622D",
  beige: "#E8D5C4",
  muted: "#6B5D52",
  border: "rgba(30,25,21,0.12)",
};
const fHead = "var(--font-serif-display), 'DM Serif Display', Georgia, serif";
const fBody = "var(--font-body), 'Inter', system-ui, sans-serif";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function KovaContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <KovaNav />

      {/* Hero */}
      <section className="relative w-full h-[50vh] min-h-[360px] overflow-hidden">
        <Image src="/images/kova/contact-hero.jpg" alt="Kova café" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(30,25,21,0.3) 0%, rgba(30,25,21,0.55) 100%)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[11px] md:text-[12px] tracking-[0.4em] uppercase mb-5"
            style={{ color: C.beige }}
          >
            Come say hello
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white"
            style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1, letterSpacing: "-0.01em" }}
          >
            Find Us
          </motion.h1>
        </div>
      </section>

      {/* Form + details */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Form */}
          <Reveal>
            <div className="md:col-span-2">
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: C.accent }}>Write to us</p>
              <h2 className="mb-10" style={{ fontFamily: fHead, fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.01em", color: C.dark }}>
                Questions? Wholesale? We'd love to hear.
              </h2>
              {sent ? (
                <div className="p-8 text-center" style={{ background: C.beige, borderRadius: 4 }}>
                  <p className="text-lg" style={{ fontFamily: fHead }}>Thank you — we'll get back to you within a day.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: C.muted }}>Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-0 py-3 bg-transparent outline-none transition-colors"
                      style={{ borderBottom: `1px solid ${C.border}`, color: C.dark }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: C.muted }}>Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-0 py-3 bg-transparent outline-none transition-colors"
                      style={{ borderBottom: `1px solid ${C.border}`, color: C.dark }}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: C.muted }}>Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-0 py-3 bg-transparent outline-none resize-none transition-colors"
                      style={{ borderBottom: `1px solid ${C.border}`, color: C.dark }}
                      placeholder="What's on your mind?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium transition-opacity hover:opacity-90"
                    style={{ background: C.dark, color: C.beige, borderRadius: 999, fontFamily: fBody }}
                  >
                    Send message →
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Details */}
          <Reveal delay={0.15}>
            <div className="lg:col-span-2">
              <div className="p-8 md:p-10 h-full" style={{ background: C.beige, borderRadius: 4 }}>
                <p className="text-[11px] tracking-[0.3em] uppercase mb-6" style={{ color: C.accent }}>Visit</p>
                <h3 className="mb-8" style={{ fontFamily: fHead, fontSize: 28, lineHeight: 1.1, color: C.dark }}>
                  Niederdorfstrasse 42
                </h3>
                <div className="space-y-5 text-[14px]">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-1 shrink-0" style={{ color: C.accent }} />
                    <span style={{ color: C.dark }}>Niederdorfstrasse 42<br />8001 Zürich, Switzerland</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="mt-1 shrink-0" style={{ color: C.accent }} />
                    <a href="tel:+41441234567" className="no-underline hover:opacity-70 transition-opacity" style={{ color: C.dark }}>
                      +41 44 123 45 67
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="mt-1 shrink-0" style={{ color: C.accent }} />
                    <a href="mailto:hallo@kovacoffee.ch" className="no-underline hover:opacity-70 transition-opacity" style={{ color: C.dark }}>
                      hallo@kovacoffee.ch
                    </a>
                  </div>
                  <div className="flex items-start gap-3 pt-4 border-t" style={{ borderColor: C.border }}>
                    <Clock size={16} className="mt-1 shrink-0" style={{ color: C.accent }} />
                    <div style={{ color: C.dark }}>
                      <p className="font-medium mb-1">Mon – Fri</p>
                      <p className="opacity-70 mb-3">7:00 – 19:00</p>
                      <p className="font-medium mb-1">Sat – Sun</p>
                      <p className="opacity-70">8:00 – 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="w-full" style={{ height: 480 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.2342034285814!2d8.543!3d47.373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDIyJzIyLjgiTiA4wrAzMic1OS4wIkU!5e0!3m2!1sen!2sch!4v1600000000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.5) contrast(1.05)" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kova Coffee location"
        />
      </section>

      <KovaFooter />
    </div>
  );
}
