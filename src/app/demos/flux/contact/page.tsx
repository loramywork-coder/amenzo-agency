"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FluxNav, FluxFooter, Reveal, C, fHead, fBody } from "../_shared";

export default function FluxContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: fBody }}>
      <DemoBanner />
      <FluxNav />

      {/* HERO */}
      <section className="relative w-full h-[50vh] min-h-[360px] overflow-hidden">
        <Image src="/images/flux/contact-hero.jpg" alt="Flux reception" fill priority className="object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(12,12,12,0.92) 0%, rgba(12,12,12,0.55) 60%, rgba(12,12,12,0.2) 100%)" }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl w-full mx-auto px-6 md:px-12 pt-20">
            <motion.p
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase mb-6"
              style={{ color: C.lime }}
            >
              <span className="w-8 h-[2px]" style={{ background: C.lime }} /> Get In Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-black tracking-[-0.02em] max-w-3xl"
              style={{ fontFamily: fHead, fontSize: "clamp(52px, 8vw, 112px)", lineHeight: 0.92, color: C.text }}
            >
              BOOK A<br /><span style={{ color: C.lime }}>CONSULT.</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {/* Form */}
          <Reveal>
            <div className="md:col-span-2">
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: C.lime }}>
                Tell us about you
              </p>
              <h2
                className="font-black tracking-tight mb-10"
                style={{ fontFamily: fHead, fontSize: "clamp(28px, 3.6vw, 42px)", lineHeight: 1, color: C.text }}
              >
                30 MINUTES. NO PITCH.
              </h2>
              {sent ? (
                <div
                  className="p-8 text-center"
                  style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8 }}
                >
                  <p className="text-lg font-bold" style={{ color: C.lime, fontFamily: fHead }}>
                    Got it. Marc will reply within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <Field label="Phone" name="phone" type="tel" />
                  <div>
                    <label
                      className="block text-[11px] tracking-[0.15em] uppercase mb-2 font-bold"
                      style={{ color: C.muted }}
                    >
                      Primary Goal
                    </label>
                    <select
                      className="w-full px-4 py-3.5 outline-none transition-colors"
                      style={{
                        background: C.surface,
                        border: `1px solid ${C.border}`,
                        borderRadius: 8,
                        color: C.text,
                        fontFamily: fBody,
                      }}
                      defaultValue=""
                    >
                      <option value="" disabled style={{ background: C.surface }}>
                        Choose one
                      </option>
                      <option value="strength" style={{ background: C.surface }}>Build strength & muscle</option>
                      <option value="fatloss" style={{ background: C.surface }}>Lose body fat</option>
                      <option value="performance" style={{ background: C.surface }}>Sport-specific performance</option>
                      <option value="rehab" style={{ background: C.surface }}>Return from injury</option>
                      <option value="general" style={{ background: C.surface }}>General fitness & health</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-[11px] tracking-[0.15em] uppercase mb-2 font-bold"
                      style={{ color: C.muted }}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Anything we should know? Current training, injuries, timeline..."
                      className="w-full px-4 py-3.5 outline-none resize-none transition-colors"
                      style={{
                        background: C.surface,
                        border: `1px solid ${C.border}`,
                        borderRadius: 8,
                        color: C.text,
                        fontFamily: fBody,
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 text-sm font-bold tracking-wider uppercase transition-all"
                    style={{ background: C.lime, color: C.bg, borderRadius: 8, fontFamily: fBody, border: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 32px 0 rgba(200,255,0,0.55)")}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(200,255,0,0)")}
                  >
                    Send & Book →
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={0.15}>
            <div
              className="p-8 h-full"
              style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8 }}
            >
              <p className="text-[11px] tracking-[0.3em] uppercase mb-6" style={{ color: C.lime }}>
                The Studio
              </p>
              <h3
                className="font-black tracking-tight mb-8"
                style={{ fontFamily: fHead, fontSize: 26, lineHeight: 1.1, color: C.text }}
              >
                BAHNHOFSTRASSE 15,<br />ZUG.
              </h3>
              <div className="space-y-5 text-[13px]">
                <Detail icon={<MapPin size={15} style={{ color: C.lime }} />} line1="Bahnhofstrasse 15" line2="6300 Zug, Switzerland" />
                <Detail icon={<Phone size={15} style={{ color: C.lime }} />} line1="+41 41 555 22 33" href="tel:+41415552233" />
                <Detail icon={<Mail size={15} style={{ color: C.lime }} />} line1="train@fluxperformance.ch" href="mailto:train@fluxperformance.ch" />
                <div className="pt-5" style={{ borderTop: `1px solid ${C.border}` }}>
                  <div className="flex items-start gap-3">
                    <Clock size={15} className="mt-1 shrink-0" style={{ color: C.lime }} />
                    <div style={{ color: C.text }}>
                      <p className="font-bold mb-1">Monday – Friday</p>
                      <p className="opacity-70 mb-3">6:00 – 21:00</p>
                      <p className="font-bold mb-1">Saturday</p>
                      <p className="opacity-70">8:00 – 14:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="w-full" style={{ height: 440 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.7!2d8.515!3d47.166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA5JzU3LjYiTiA4wrAzMCc1NC4wIkU!5e0!3m2!1sen!2sch!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) brightness(0.85) contrast(0.95)" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Flux Performance location"
        />
      </section>

      <FluxFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        className="block text-[11px] tracking-[0.15em] uppercase mb-2 font-bold"
        style={{ color: C.muted }}
      >
        {label}
        {required && " *"}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3.5 outline-none transition-colors"
        style={{
          background: C.surface,
          border: `1px solid ${C.border}`,
          borderRadius: 8,
          color: C.text,
          fontFamily: fBody,
        }}
      />
    </div>
  );
}

function Detail({
  icon,
  line1,
  line2,
  href,
}: {
  icon: React.ReactNode;
  line1: string;
  line2?: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="mt-1 shrink-0">{icon}</span>
      <span style={{ color: C.text }}>
        {line1}
        {line2 && (
          <>
            <br />
            <span style={{ color: C.muted }}>{line2}</span>
          </>
        )}
      </span>
    </div>
  );
  return href ? (
    <a href={href} className="no-underline hover:opacity-70 transition-opacity block">
      {content}
    </a>
  ) : (
    content
  );
}
