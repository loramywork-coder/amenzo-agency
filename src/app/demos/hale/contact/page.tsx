"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, HaleNav, HaleFooter, HaleLangProvider, useHaleLang, tri } from "../_shared";

function Inner() {
  const { lang } = useHaleLang();
  const [sent, setSent] = useState(false);
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HaleNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.grey, fontFamily: fMono }}>
            — {tri("Contact", "Kontakt", "Contact", lang)}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="max-w-4xl" style={{ fontFamily: fHead, fontSize: "clamp(48px, 7vw, 120px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
            {tri("Tell us about", "Erzählen Sie uns", "Parlez-nous de", lang)}<br />
            <em style={{ fontStyle: "italic" }}>{tri("the project.", "Ihr Projekt.", "votre projet.", lang)}</em>
          </motion.h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Form */}
          <Reveal className="md:col-span-7">
            <div>
              <Rule className="opacity-25 mb-10" />
              {sent ? (
                <div className="py-16 text-center">
                  <p className="text-2xl mb-3" style={{ fontFamily: fHead, color: C.dark }}>
                    {tri("Thank you.", "Danke.", "Merci.", lang)}
                  </p>
                  <p className="text-[13px] tracking-wider uppercase" style={{ color: C.grey, fontFamily: fMono }}>
                    {tri("— We will respond within two working days", "— Wir antworten innerhalb von zwei Arbeitstagen", "— Nous répondrons sous deux jours ouvrables", lang)}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Field label={tri("Name", "Name", "Nom", lang)} required />
                    <Field label={tri("Email", "E-Mail", "E-mail", lang)} type="email" required />
                  </div>
                  <Field label={tri("Phone", "Telefon", "Téléphone", lang)} type="tel" />
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: C.grey, fontFamily: fMono }}>
                      — {tri("Project type", "Projekttyp", "Type de projet", lang)}
                    </label>
                    <select
                      className="w-full bg-transparent outline-none pb-3 text-[15px]"
                      style={{ borderBottom: `1px solid ${C.dark}`, fontFamily: fBody, color: C.dark }}
                      defaultValue=""
                    >
                      <option value="" disabled>{tri("Choose one", "Auswählen", "Choisir", lang)}</option>
                      <option>{tri("Residential", "Wohnbau", "Résidentiel", lang)}</option>
                      <option>{tri("Commercial", "Gewerbebau", "Commercial", lang)}</option>
                      <option>{tri("Interior", "Innenarchitektur", "Intérieur", lang)}</option>
                      <option>{tri("Landscape", "Landschaftsbau", "Paysage", lang)}</option>
                      <option>{tri("Other / Consulting", "Anderes / Beratung", "Autre / conseil", lang)}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: C.grey, fontFamily: fMono }}>
                      — {tri("Budget range", "Budgetrahmen", "Budget", lang)}
                    </label>
                    <select
                      className="w-full bg-transparent outline-none pb-3 text-[15px]"
                      style={{ borderBottom: `1px solid ${C.dark}`, fontFamily: fBody, color: C.dark }}
                      defaultValue=""
                    >
                      <option value="" disabled>{tri("Choose one", "Auswählen", "Choisir", lang)}</option>
                      <option>CHF 500k – 1M</option>
                      <option>CHF 1M – 3M</option>
                      <option>CHF 3M – 10M</option>
                      <option>CHF 10M +</option>
                      <option>{tri("Not yet defined", "Noch nicht definiert", "Pas encore défini", lang)}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: C.grey, fontFamily: fMono }}>
                      — {tri("Tell us about the project", "Erzählen Sie uns vom Projekt", "Parlez-nous du projet", lang)}
                    </label>
                    <textarea
                      rows={5}
                      className="w-full bg-transparent outline-none resize-none pb-3 text-[15px]"
                      style={{ borderBottom: `1px solid ${C.dark}`, fontFamily: fBody, color: C.dark }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-wider uppercase transition-colors"
                    style={{ background: C.dark, color: C.bg, border: "none", fontFamily: fMono }}
                  >
                    {tri("Send message", "Nachricht senden", "Envoyer", lang)} →
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Details */}
          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <div className="space-y-10">
              <Rule className="opacity-25" />
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: C.grey, fontFamily: fMono }}>
                  — {tri("Studio", "Studio", "Studio", lang)}
                </p>
                <p className="text-[16px] leading-[1.7]">Seefeldstrasse 110<br />8008 Zürich<br />Switzerland</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: C.grey, fontFamily: fMono }}>
                  — {tri("Direct", "Direkt", "Direct", lang)}
                </p>
                <p className="text-[16px] leading-[1.7]">
                  studio@haleandpartners.ch<br />+41 44 380 12 34
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: C.grey, fontFamily: fMono }}>
                  — {tri("Hours", "Öffnungszeiten", "Horaires", lang)}
                </p>
                <p className="text-[16px] leading-[1.7]">
                  {tri("Mon – Fri · 09:00 – 18:30", "Mo – Fr · 09:00 – 18:30", "Lun – Ven · 09:00 – 18:30", lang)}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="w-full" style={{ height: 440 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.3!2d8.556!3d47.354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDIxJzE0LjQiTiA4wrAzMyczOC4yIkU!5e0!3m2!1sen!2sch!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(1) contrast(1.15)" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hale & Partners location"
        />
      </section>

      <HaleFooter />
    </div>
  );
}

function Field({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: C.grey, fontFamily: fMono }}>
        — {label}{required && " *"}
      </label>
      <input
        type={type}
        required={required}
        className="w-full bg-transparent outline-none pb-3 text-[15px]"
        style={{ borderBottom: `1px solid ${C.dark}`, fontFamily: fBody, color: C.dark }}
      />
    </div>
  );
}

export default function HaleContactPage() {
  return <HaleLangProvider><Inner /></HaleLangProvider>;
}
