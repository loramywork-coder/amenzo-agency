"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowRight, MapPin, Phone, Mail, Clock, Check, Plus } from "lucide-react";
import {
  C, fHead, fBody, fMono, Reveal, Rule, Eyebrow,
  BeautyNav, BeautyFooter, IMG, services, faqs,
} from "../_shared";

const infoItems = [
  { icon: MapPin, label: "Address", value: "Bahnhofstrasse 42, 8001 Zürich" },
  { icon: Phone, label: "Phone", value: "+41 44 520 88 90", href: "tel:+41445208890" },
  { icon: Mail, label: "Email", value: "hello@aurabeauty.ch", href: "mailto:hello@aurabeauty.ch" },
  { icon: Clock, label: "Hours", value: "Mon–Fri 9:00–20:00 · Sat 9:00–18:00 · Sun Closed" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: C.warmWhite,
    border: `1px solid ${C.border}`,
    borderRadius: 10,
    padding: "14px 16px",
    fontSize: 14,
    color: C.textPrimary,
    fontFamily: fBody,
    outline: "none",
    transition: "all 0.3s ease",
  };

  return (
    <div style={{ background: C.bg, color: C.textPrimary, fontFamily: fBody }}>
      <DemoBanner />
      <BeautyNav />

      {/* HERO */}
      <section className="relative w-full h-[50vh] min-h-[420px] overflow-hidden">
        <Image src={IMG.contactHero} alt="" fill priority className="object-cover" sizes="100vw" quality={90} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(28,25,23,0.35), rgba(28,25,23,0.7))" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[11px] tracking-[0.45em] uppercase mb-6" style={{ color: C.goldLight, fontFamily: fMono }}>
              — Contact
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }}
              style={{ fontFamily: fHead, fontSize: "clamp(44px, 7vw, 100px)", lineHeight: 0.95, fontWeight: 500, color: C.onDark }}>
              Get in <em style={{ fontStyle: "italic", color: C.goldLight }}>touch</em>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* SPLIT LAYOUT */}
      <section className="py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* FORM */}
          <Reveal>
            <Eyebrow>Send a Message</Eyebrow>
            <h2 className="mt-6" style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, fontWeight: 500, color: C.dark }}>
              Let&apos;s start the <em style={{ fontStyle: "italic", color: C.gold }}>conversation</em>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: C.textSecondary }}>
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="mt-10 relative">
              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.form
                    key="form"
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={onSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-[10px] tracking-[0.15em] uppercase mb-2 font-medium" style={{ color: C.textSecondary, fontFamily: fMono }}>Full Name</label>
                      <input required type="text" style={inputStyle} placeholder="Your name" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] tracking-[0.15em] uppercase mb-2 font-medium" style={{ color: C.textSecondary, fontFamily: fMono }}>Email</label>
                        <input required type="email" style={inputStyle} placeholder="you@email.com" />
                      </div>
                      <div>
                        <label className="block text-[10px] tracking-[0.15em] uppercase mb-2 font-medium" style={{ color: C.textSecondary, fontFamily: fMono }}>Phone</label>
                        <input type="tel" style={inputStyle} placeholder="+41 ..." />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.15em] uppercase mb-2 font-medium" style={{ color: C.textSecondary, fontFamily: fMono }}>Treatment Interest</label>
                      <select style={inputStyle} defaultValue="">
                        <option value="" disabled>Select a treatment</option>
                        {services.map((s) => (
                          <option key={s.slug}>{s.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.15em] uppercase mb-2 font-medium" style={{ color: C.textSecondary, fontFamily: fMono }}>Preferred Date</label>
                      <input type="date" style={inputStyle} />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.15em] uppercase mb-2 font-medium" style={{ color: C.textSecondary, fontFamily: fMono }}>Message</label>
                      <textarea rows={4} style={{ ...inputStyle, resize: "none" }} placeholder="Tell us about your skin goals..." />
                    </div>
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-3 px-9 py-4 text-[11px] tracking-[0.15em] uppercase rounded-full transition-transform hover:scale-[1.02]"
                        style={{ background: C.gold, color: C.warmWhite, fontFamily: fBody, fontWeight: 600 }}
                      >
                        Send Message <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-10 text-center rounded-md"
                    style={{ background: C.warmWhite, border: `1px solid rgba(184,149,106,0.3)` }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, type: "spring" }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full"
                      style={{ background: C.gold, color: C.warmWhite }}
                    >
                      <Check size={28} strokeWidth={2.5} />
                    </motion.div>
                    <h3 className="mt-6" style={{ fontFamily: fHead, fontSize: 32, fontWeight: 500, color: C.dark }}>Thank you!</h3>
                    <p className="mt-3 text-[15px]" style={{ color: C.textSecondary }}>
                      We&apos;ll be in touch within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* INFO + MAP */}
          <Reveal delay={0.15}>
            <Eyebrow>Visit Us</Eyebrow>
            <h2 className="mt-6" style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, fontWeight: 500, color: C.dark }}>
              Find the <em style={{ fontStyle: "italic", color: C.gold }}>studio</em>
            </h2>

            <ul className="mt-10 space-y-7">
              {infoItems.map((item) => (
                <li key={item.label} className="flex items-start gap-5">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full shrink-0" style={{ background: "rgba(184,149,106,0.12)", color: C.gold }}>
                    <item.icon size={18} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase font-medium" style={{ color: C.textTertiary, fontFamily: fMono }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="mt-1.5 block text-[15px] no-underline transition-colors hover:opacity-70" style={{ color: C.textPrimary }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1.5 text-[15px]" style={{ color: C.textPrimary }}>{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 relative h-[320px] rounded-md overflow-hidden" style={{ border: `1px solid ${C.border}`, boxShadow: "0 12px 40px rgba(26,26,26,0.1)" }}>
              <iframe
                title="Aura Studio Location"
                src="https://www.google.com/maps?q=Bahnhofstrasse+42,+8001+Zürich&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.35) contrast(0.95)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-36 px-6 md:px-10" style={{ background: C.highlight }}>
        <div className="max-w-[900px] mx-auto">
          <Reveal className="text-center">
            <Eyebrow>Questions</Eyebrow>
            <Rule className="my-6" />
            <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1.05, fontWeight: 500, color: C.dark }}>
              Frequently <em style={{ fontStyle: "italic", color: C.gold }}>asked</em>
            </h2>
          </Reveal>
          <div className="mt-16" style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} style={{ borderBottom: i < faqs.length - 1 ? `1px solid ${C.border}` : "none" }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left transition-colors"
                    style={{ fontFamily: fBody }}
                    aria-expanded={isOpen}
                  >
                    <span className="text-[16px] font-semibold pr-8" style={{ color: C.textPrimary }}>{f.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0" style={{ color: C.gold }}>
                      <Plus size={22} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-[14px] leading-[1.8] pr-12" style={{ color: C.textSecondary }}>
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-28 px-6 text-center">
        <Reveal className="max-w-2xl mx-auto">
          <h2 style={{ fontFamily: fHead, fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.05, fontWeight: 500, color: C.dark }}>
            Prefer to <em style={{ fontStyle: "italic", color: C.gold }}>talk?</em>
          </h2>
          <p className="mt-6 text-[15px]" style={{ color: C.textSecondary }}>
            Call or WhatsApp us anytime.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="tel:+41445208890"
              className="inline-flex items-center gap-3 px-9 py-4 text-[11px] tracking-[0.15em] uppercase no-underline rounded-full"
              style={{ background: C.gold, color: C.warmWhite, fontFamily: fBody, fontWeight: 600 }}
            >
              Call Now
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-9 py-4 text-[11px] tracking-[0.15em] uppercase no-underline rounded-full transition-colors"
              style={{ background: "transparent", border: `1.5px solid ${C.gold}`, color: C.gold, fontFamily: fBody, fontWeight: 600 }}
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      <BeautyFooter />
    </div>
  );
}
