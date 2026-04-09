"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { C, fHead, fBody, fMono, Reveal, Rule, HotelNav, HotelFooter, HotelLangProvider, useHotelLang, tri, rooms } from "../_shared";

function Inner() {
  const { lang } = useHotelLang();
  const [sent, setSent] = useState(false);

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HotelNav />

      <section className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image src="/images/hotel/contact-reception.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(14,26,43,0.35) 0%, rgba(14,26,43,0.65) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-16">
            <div className="max-w-[1500px] mx-auto">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.25 }} className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: "#D4B878", fontFamily: fMono }}>
                — {tri("Reservations & enquiries", "Reservierungen & Anfragen", "Réservations & demandes", lang)}
              </motion.p>
              <motion.h1
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 1, delay: 0.35, ease: [0.77, 0, 0.175, 1] }}
                className="max-w-4xl"
                style={{ fontFamily: fHead, fontSize: "clamp(52px, 9vw, 140px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.015em", color: "#F7F1E8" , paddingBottom: "0.15em" }}
              >
                {tri("Reserve", "Reservieren", "Réserver", lang)}
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Form */}
          <Reveal className="md:col-span-7">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: C.gold, fontFamily: fMono }}>
              — {tri("Direct reservations", "Direktreservierung", "Réservations directes", lang)}
            </p>
            <h2 className="mb-8" style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.02, fontWeight: 400, letterSpacing: "-0.01em", color: C.dark }}>
              {tri("Write to us,", "Schreiben Sie uns,", "Écrivez-nous,", lang)}{" "}
              <em style={{ fontStyle: "italic" }}>{tri("we reply within the hour.", "wir antworten innerhalb einer Stunde.", "nous répondons dans l'heure.", lang)}</em>
            </h2>

            {sent ? (
              <div className="p-10 text-center" style={{ background: "#EFE6D6" }}>
                <p className="text-2xl italic mb-3" style={{ fontFamily: fHead, color: C.dark }}>
                  {tri("Grazie.", "Grazie.", "Grazie.", lang)}
                </p>
                <p className="text-[13px]" style={{ color: C.muted, fontFamily: fMono }}>
                  {tri("We will confirm within one hour during opening hours.", "Wir bestätigen innerhalb einer Stunde während der Öffnungszeiten.", "Nous confirmons dans l'heure pendant les heures d'ouverture.", lang)}
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label={tri("Name", "Name", "Nom", lang)} required />
                  <Field label={tri("Email", "E-Mail", "E-mail", lang)} type="email" required />
                </div>
                <Field label={tri("Phone", "Telefon", "Téléphone", lang)} type="tel" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <Field label={tri("Arrival", "Anreise", "Arrivée", lang)} type="date" required />
                  <Field label={tri("Departure", "Abreise", "Départ", lang)} type="date" required />
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: C.muted, fontFamily: fMono }}>
                      {tri("Guests", "Gäste", "Personnes", lang)} *
                    </label>
                    <div className="relative">
                      <select
                        defaultValue="2"
                        className="w-full bg-white outline-none appearance-none cursor-pointer"
                        style={{
                          border: `1px solid ${C.border}`,
                          color: C.dark,
                          fontFamily: fBody,
                          height: 48,
                          padding: "0 40px 0 14px",
                          fontSize: 15,
                        }}
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? tri("guest", "Gast", "personne", lang) : tri("guests", "Gäste", "personnes", lang)}
                          </option>
                        ))}
                      </select>
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" style={{ color: C.gold }}>
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: C.muted, fontFamily: fMono }}>
                    {tri("Room preference", "Zimmerwunsch", "Préférence de chambre", lang)}
                  </label>
                  <div className="relative">
                    <select
                      defaultValue=""
                      className="w-full bg-white outline-none appearance-none cursor-pointer"
                      style={{
                        border: `1px solid ${C.border}`,
                        color: C.dark,
                        fontFamily: fBody,
                        height: 48,
                        padding: "0 40px 0 14px",
                        fontSize: 15,
                      }}
                    >
                      <option value="" disabled>{tri("Any room", "Egal", "Indifférent", lang)}</option>
                      {rooms.map((r) => (
                        <option key={r.slug} value={r.slug}>
                          {tri(r.nameEn, r.nameDe, r.nameFr, lang)} — € {r.price}
                        </option>
                      ))}
                    </select>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" style={{ color: C.gold }}>
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: C.muted, fontFamily: fMono }}>
                    {tri("Anything we should know?", "Gibt es etwas, das wir wissen sollten?", "Quelque chose à savoir ?", lang)}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white outline-none resize-none"
                    style={{ border: `1px solid ${C.border}`, color: C.dark, fontFamily: fBody, padding: "12px 14px", fontSize: 15 }}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-[0.2em] uppercase transition-opacity hover:opacity-90"
                  style={{ background: C.dark, color: C.bg, fontFamily: fBody, border: "none", fontWeight: 600 }}
                >
                  {tri("Send enquiry", "Anfrage senden", "Envoyer la demande", lang)} →
                </button>
              </form>
            )}
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <div className="p-8" style={{ background: "#EFE6D6" }}>
              <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.gold, fontFamily: fMono }}>
                — {tri("Find us", "Finden Sie uns", "Nous trouver", lang)}
              </p>
              <h3 className="mb-8" style={{ fontFamily: fHead, fontSize: 28, lineHeight: 1.1, color: C.dark }}>
                Triq San Pawl 42<br />Valletta
              </h3>
              <div className="space-y-5 text-[13px]">
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="mt-1 shrink-0" style={{ color: C.gold }} />
                  <span style={{ color: C.dark }}>Triq San Pawl 42<br />Valletta VLT 1214<br />Malta</span>
                </div>
                <a href="tel:+35621223344" className="flex items-start gap-3 no-underline hover:opacity-70 transition-opacity">
                  <Phone size={14} className="mt-1 shrink-0" style={{ color: C.gold }} />
                  <span style={{ color: C.dark }}>+356 2122 3344</span>
                </a>
                <a href="mailto:stay@grandharbour.mt" className="flex items-start gap-3 no-underline hover:opacity-70 transition-opacity">
                  <Mail size={14} className="mt-1 shrink-0" style={{ color: C.gold }} />
                  <span style={{ color: C.dark }}>stay@grandharbour.mt</span>
                </a>
                <div className="pt-5 flex items-start gap-3" style={{ borderTop: `1px solid ${C.border}` }}>
                  <Clock size={14} className="mt-1 shrink-0" style={{ color: C.gold }} />
                  <div style={{ color: C.dark }}>
                    <p className="font-semibold mb-1">{tri("Reception", "Rezeption", "Réception", lang)}</p>
                    <p className="opacity-70">24 / 7</p>
                    <p className="font-semibold mt-3 mb-1">{tri("Reservations", "Reservierungen", "Réservations", lang)}</p>
                    <p className="opacity-70">{tri("Mon – Sun · 08:00 – 22:00", "Mo – So · 08:00 – 22:00", "Lun – Dim · 08h00 – 22h00", lang)}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="w-full" style={{ height: 440 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.6!2d14.513!3d35.897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDUzJzQ5LjAiTiAxNMKwMzAnNDcuMCJF!5e0!3m2!1sen!2smt!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.3) sepia(0.1)" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Grand Harbour Hotel"
        />
      </section>

      <HotelFooter />
    </div>
  );
}

function Field({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: C.muted, fontFamily: fMono }}>
        {label}{required && " *"}
      </label>
      <input
        type={type}
        required={required}
        className="w-full bg-white outline-none"
        style={{
          border: `1px solid ${C.border}`,
          color: C.dark,
          fontFamily: fBody,
          height: 48,
          padding: "0 14px",
          fontSize: 15,
        }}
      />
    </div>
  );
}

export default function HotelContactPage() {
  return <HotelLangProvider><Inner /></HotelLangProvider>;
}
