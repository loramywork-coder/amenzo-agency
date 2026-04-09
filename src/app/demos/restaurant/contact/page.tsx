"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, RestaurantNav, RestaurantFooter, RestaurantLangProvider, useRestaurantLang, tri } from "../_shared";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: C.muted, fontFamily: fMono }}>{label}</span>
      {children}
    </label>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: 46,
  background: "transparent",
  border: `1px solid ${C.border}`,
  color: C.cream,
  fontFamily: fBody,
  fontSize: 14,
  padding: "0 14px",
  outline: "none",
};

function Inner() {
  const { lang } = useRestaurantLang();
  const [sent, setSent] = useState(false);

  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fBody }}>
      <DemoBanner />
      <RestaurantNav />

      <section className="relative w-full h-[45vh] min-h-[380px] overflow-hidden">
        <Image src="/images/restaurant/table-candle.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,9,8,0.4) 0%, rgba(11,9,8,0.85) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-12">
            <div className="max-w-[1500px] mx-auto">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: C.copper, fontFamily: fMono }}>
                — {tri("Seven nights a week", "Sette sere su sette", "Sept soirs sur sept", lang)}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                style={{ fontFamily: fHead, fontSize: "clamp(52px, 9vw, 140px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.015em", color: C.cream, paddingBottom: "0.15em" }}
              >
                {tri("Reserve", "Prenota", "Réserver", lang)}
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1500px] mx-auto grid md:grid-cols-12 gap-12 md:gap-20">
          <Reveal className="md:col-span-5">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: C.copper, fontFamily: fMono }}>
              — {tri("Find us", "Dove siamo", "Nous trouver", lang)}
            </p>
            <h2 className="mb-8" style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1, fontWeight: 400, fontStyle: "italic", color: C.cream, paddingBottom: "0.1em" }}>
              {tri("The door with no sign.", "La porta senza insegna.", "La porte sans enseigne.", lang)}
            </h2>
            <Rule className="mb-10" />

            <div className="space-y-8 text-[14px] leading-[1.7]">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: C.muted, fontFamily: fMono }}>
                  {tri("Address", "Indirizzo", "Adresse", lang)}
                </p>
                <p style={{ color: C.cream }}>12, Triq San Pawl<br />Valletta VLT 1212<br />Malta</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: C.muted, fontFamily: fMono }}>
                  {tri("Hours", "Orari", "Horaires", lang)}
                </p>
                <p style={{ color: C.cream }}>
                  {tri("Dinner · 19:00 — 23:00", "Cena · 19:00 — 23:00", "Dîner · 19h00 — 23h00", lang)}<br />
                  {tri("Seven nights a week", "Sette sere su sette", "Sept soirs sur sept", lang)}
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: C.muted, fontFamily: fMono }}>
                  {tri("Direct", "Diretto", "Direct", lang)}
                </p>
                <p style={{ color: C.cream }}>+356 2122 0000<br />giulia@portovalletta.mt</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-7">
            <div className="p-8 md:p-12" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
              {sent ? (
                <div className="py-16 text-center">
                  <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: C.copper, fontFamily: fMono }}>
                    — {tri("Grazie", "Grazie", "Merci", lang)}
                  </p>
                  <p className="italic text-[22px] leading-[1.5]" style={{ fontFamily: fHead, color: C.cream }}>
                    {tri(
                      "Giulia will write back within the day.",
                      "Giulia vi risponderà entro la giornata.",
                      "Giulia vous répondra dans la journée.",
                      lang
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <p className="text-[10px] tracking-[0.4em] uppercase mb-8" style={{ color: C.copper, fontFamily: fMono }}>
                    — {tri("Request a table", "Prenota un tavolo", "Réserver une table", lang)}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <Field label={tri("Name", "Nome", "Nom", lang)}>
                      <input type="text" required style={inputStyle} />
                    </Field>
                    <Field label={tri("Email", "Email", "Email", lang)}>
                      <input type="email" required style={inputStyle} />
                    </Field>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <Field label={tri("Date", "Data", "Date", lang)}>
                      <input type="date" required style={inputStyle} />
                    </Field>
                    <Field label={tri("Time", "Ora", "Heure", lang)}>
                      <input type="time" required defaultValue="20:00" style={inputStyle} />
                    </Field>
                    <Field label={tri("Guests", "Ospiti", "Convives", lang)}>
                      <div className="relative">
                        <select required defaultValue="2" style={{ ...inputStyle, appearance: "none", padding: "0 40px 0 14px", cursor: "pointer" }}>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n} value={n} style={{ background: C.surface }}>{n}</option>)}
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="10" height="6" viewBox="0 0 10 6" fill="none">
                          <path d="M1 1L5 5L9 1" stroke={C.copper} strokeWidth="1.2" />
                        </svg>
                      </div>
                    </Field>
                  </div>

                  <Field label={tri("Occasion or allergies", "Occasione o allergie", "Occasion ou allergies", lang)}>
                    <textarea rows={4} style={{ ...inputStyle, height: "auto", padding: "12px 14px", resize: "vertical" }} />
                  </Field>

                  <button type="submit" className="mt-8 w-full py-4 text-[11px] tracking-[0.3em] uppercase transition-opacity hover:opacity-90" style={{ background: C.copper, color: C.bg, fontFamily: fMono }}>
                    {tri("Send request", "Invia richiesta", "Envoyer la demande", lang)}
                  </button>
                  <p className="mt-4 text-[11px] text-center" style={{ color: C.muted, fontFamily: fMono }}>
                    {tri("We confirm by email within the day.", "Confermiamo via email entro la giornata.", "Nous confirmons par email dans la journée.", lang)}
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <RestaurantFooter />
    </div>
  );
}

export default function RestaurantContactPage() {
  return <RestaurantLangProvider><Inner /></RestaurantLangProvider>;
}
