"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import {
  C, fHead, fBody, Reveal, GoldDivider,
  CasaNav, CasaFooter, CasaLocaleProvider, useCasaLocale, bi,
} from "../_shared";

const faqs = [
  {
    qEn: "Do you take walk-ins?",
    qDe: "Nehmen Sie Walk-ins?",
    aEn: "Yes — we keep 6 bar counter seats for walk-ins every night. Tables in the dining room require a reservation.",
    aDe: "Ja — wir halten jeden Abend 6 Plätze am Bartresen für Walk-ins frei. Tische im Gastraum erfordern eine Reservierung.",
  },
  {
    qEn: "Is the menu fixed or à la carte?",
    qDe: "Ist die Karte fix oder à la carte?",
    aEn: "À la carte. Everything on the menu is available individually. We also offer a 5-course tasting menu (CHF 98) for the whole table.",
    aDe: "À la carte. Alles auf der Karte ist einzeln bestellbar. Wir bieten auch ein 5-Gang-Degustationsmenü (CHF 98) für den ganzen Tisch an.",
  },
  {
    qEn: "Can you accommodate dietary restrictions?",
    qDe: "Berücksichtigen Sie Allergien und Diäten?",
    aEn: "Absolutely. Please let us know when you book. We always have vegetarian, vegan and gluten-free options.",
    aDe: "Selbstverständlich. Bitte teilen Sie es uns bei der Reservierung mit. Wir haben immer vegetarische, vegane und glutenfreie Optionen.",
  },
  {
    qEn: "Is the restaurant accessible?",
    qDe: "Ist das Restaurant barrierefrei?",
    aEn: "The dining room is step-free from the Gerechtigkeitsgasse entrance. We have one accessible restroom.",
    aDe: "Der Gastraum ist vom Eingang Gerechtigkeitsgasse stufenlos erreichbar. Wir haben eine barrierefreie Toilette.",
  },
];

function CasaContactInner() {
  const { locale } = useCasaLocale();
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <CasaNav />

      <section className="pt-40 pb-12 px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.4em] uppercase mb-5"
          style={{ color: C.terra }}
        >
          {bi("Reservations & Contact", "Reservierungen & Kontakt", locale)}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6"
          style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1, color: C.dark }}
        >
          {bi("Book a", "Reservieren", locale)}{" "}
          <em style={{ color: C.terra, fontStyle: "italic" }}>{bi("table", "Sie", locale)}</em>
        </motion.h1>
        <GoldDivider />
      </section>

      <section className="px-6 md:px-10 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Form */}
          <Reveal>
            <div className="md:col-span-2">
              {sent ? (
                <div className="p-10 text-center" style={{ background: "#F7EFE2", borderRadius: 2 }}>
                  <p className="italic text-xl mb-3" style={{ fontFamily: fHead, color: C.dark, fontStyle: "italic" }}>
                    {bi("Grazie!", "Grazie!", locale)}
                  </p>
                  <p className="text-[14px]" style={{ color: C.muted }}>
                    {bi(
                      "We've received your request and will confirm within a few hours.",
                      "Wir haben Ihre Anfrage erhalten und bestätigen innerhalb weniger Stunden.",
                      locale
                    )}
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
                    <Field label={bi("Name", "Name", locale)} required />
                    <Field label={bi("Email", "E-Mail", locale)} type="email" required />
                  </div>
                  <Field label={bi("Phone", "Telefon", locale)} type="tel" />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Field label={bi("Date", "Datum", locale)} type="date" required />
                    <Field label={bi("Time", "Uhrzeit", locale)} type="time" defaultValue="19:00" required />
                    <div>
                      <label className="block text-[11px] tracking-[0.15em] uppercase mb-2 font-semibold" style={{ color: C.muted }}>
                        {bi("Guests", "Gäste", locale)}
                      </label>
                      <div className="relative">
                        <select
                          className="w-full bg-white outline-none appearance-none cursor-pointer"
                          style={{
                            border: `1px solid ${C.border}`,
                            borderRadius: 2,
                            color: C.dark,
                            fontFamily: fBody,
                            height: 46,
                            padding: "0 40px 0 14px",
                            fontSize: 15,
                          }}
                          defaultValue="2"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? bi("guest", "Gast", locale) : bi("guests", "Gäste", locale)}
                            </option>
                          ))}
                        </select>
                        <svg
                          aria-hidden
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                          style={{ color: C.terra }}
                        >
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase mb-2 font-semibold" style={{ color: C.muted }}>
                      {bi("Special requests", "Besondere Wünsche", locale)}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={bi("Allergies, dietary preferences, special occasion...", "Allergien, Ernährungsvorlieben, besonderer Anlass …", locale)}
                      className="w-full px-4 py-3 bg-white outline-none resize-none transition-colors"
                      style={{ border: `1px solid ${C.border}`, borderRadius: 2, color: C.dark, fontFamily: fBody }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 text-[12px] font-semibold tracking-wider uppercase transition-opacity hover:opacity-90"
                    style={{ background: C.terra, color: C.bg, borderRadius: 2, fontFamily: fBody, border: "none" }}
                  >
                    {bi("Request Reservation", "Reservation anfragen", locale)} →
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={0.1}>
            <div className="p-8" style={{ background: "#F7EFE2", borderRadius: 2 }}>
              <p className="text-[11px] tracking-[0.3em] uppercase mb-6" style={{ color: C.terra }}>
                {bi("Visit", "Besuchen", locale)}
              </p>
              <h3 className="italic mb-6" style={{ fontFamily: fHead, fontSize: 24, lineHeight: 1.15, fontStyle: "italic", color: C.dark }}>
                Gerechtigkeitsgasse 32<br />3011 Bern
              </h3>
              <div className="space-y-5 text-[13px]">
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="mt-1 shrink-0" style={{ color: C.terra }} />
                  <span style={{ color: C.dark }}>Altstadt, Bern</span>
                </div>
                <a href="tel:+41313112233" className="flex items-start gap-3 no-underline hover:opacity-70 transition-opacity">
                  <Phone size={14} className="mt-1 shrink-0" style={{ color: C.terra }} />
                  <span style={{ color: C.dark }}>+41 31 311 22 33</span>
                </a>
                <a href="mailto:hello@casaluma.ch" className="flex items-start gap-3 no-underline hover:opacity-70 transition-opacity">
                  <Mail size={14} className="mt-1 shrink-0" style={{ color: C.terra }} />
                  <span style={{ color: C.dark }}>hello@casaluma.ch</span>
                </a>
                <div className="pt-5 flex items-start gap-3" style={{ borderTop: `1px solid ${C.border}` }}>
                  <Clock size={14} className="mt-1 shrink-0" style={{ color: C.terra }} />
                  <div style={{ color: C.dark }}>
                    <p className="font-semibold">{bi("Tue – Sat", "Di – Sa", locale)}</p>
                    <p className="opacity-70 mb-2">17:30 – 23:00</p>
                    <p className="font-semibold">{bi("Sunday", "Sonntag", locale)}</p>
                    <p className="opacity-70">12:00 – 21:00</p>
                    <p className="mt-2 text-[11px] opacity-60">{bi("Closed Mondays", "Montags geschlossen", locale)}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="w-full" style={{ height: 400 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.25!2d7.45!3d46.948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDU2JzUyLjgiTiA3wrAyNyczMS43IkU!5e0!3m2!1sen!2sch!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Casa Luma location"
        />
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: C.terra }}>
                {bi("Good to know", "Gut zu wissen", locale)}
              </p>
              <h2 style={{ fontFamily: fHead, fontSize: "clamp(32px, 4.5vw, 48px)", color: C.dark }}>
                {bi("Common questions.", "Häufige Fragen.", locale)}
              </h2>
            </div>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.qEn} delay={i * 0.06}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left p-6 transition-colors"
                  style={{ background: "#F7EFE2", borderRadius: 2, border: `1px solid ${open === i ? C.gold : "transparent"}` }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="italic pr-4" style={{ fontFamily: fHead, fontSize: 19, fontStyle: "italic", color: C.dark }}>
                      {bi(f.qEn, f.qDe, locale)}
                    </span>
                    <ChevronDown
                      size={18}
                      className="shrink-0 transition-transform"
                      style={{ color: C.terra, transform: open === i ? "rotate(180deg)" : "none" }}
                    />
                  </div>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.p
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-[14px] leading-relaxed overflow-hidden"
                        style={{ color: C.muted }}
                      >
                        {bi(f.aEn, f.aDe, locale)}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CasaFooter />
    </div>
  );
}

function Field({
  label,
  type = "text",
  required,
  defaultValue,
}: {
  label: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.15em] uppercase mb-2 font-semibold" style={{ color: C.muted }}>
        {label}
        {required && " *"}
      </label>
      <input
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="w-full bg-white outline-none transition-colors"
        style={{
          border: `1px solid ${C.border}`,
          borderRadius: 2,
          color: C.dark,
          fontFamily: fBody,
          height: 46,
          padding: "0 14px",
          fontSize: 15,
        }}
      />
    </div>
  );
}

export default function CasaContactPage() {
  return (
    <CasaLocaleProvider>
      <CasaContactInner />
    </CasaLocaleProvider>
  );
}
