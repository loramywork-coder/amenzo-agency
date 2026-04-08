"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { MaisonNav, MaisonFooter, MaisonLangProvider, useMaisonLang, tri, C, fHead, fBody, fMono } from "../_shared";

function Inner() {
  const { lang } = useMaisonLang();
  const [sent, setSent] = useState(false);
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <MaisonNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-16">
        <div className="max-w-[1200px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.muted, fontFamily: fMono }}>
            — Contact
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="max-w-4xl" style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 120px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
            {tri("Say hello.", "Dites bonjour.", "Sagen Sie hallo.", lang)}
          </motion.h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
          <div className="md:col-span-2">
            {sent ? (
              <div className="p-12 text-center" style={{ background: "#EEEAE3" }}>
                <p className="text-2xl italic mb-2" style={{ fontFamily: fHead, color: C.dark }}>
                  {tri("Merci.", "Merci.", "Merci.", lang)}
                </p>
                <p className="text-[13px]" style={{ color: C.muted, fontFamily: fMono }}>
                  {tri("We reply within one business day.", "Nous répondons dans un jour ouvrable.", "Wir antworten innerhalb eines Werktages.", lang)}
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Field label={tri("Name", "Nom", "Name", lang)} required />
                  <Field label="Email" type="email" required />
                </div>
                <Field label={tri("Order number (if any)", "Numéro de commande (le cas échéant)", "Bestellnummer (falls vorhanden)", lang)} />
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: C.muted, fontFamily: fMono }}>
                    {tri("Subject", "Sujet", "Betreff", lang)}
                  </label>
                  <select className="w-full bg-transparent outline-none pb-3 text-[15px]" style={{ borderBottom: `1px solid ${C.dark}`, color: C.dark, fontFamily: fBody }} defaultValue="">
                    <option value="" disabled>{tri("Choose one", "Choisir", "Auswählen", lang)}</option>
                    <option>{tri("Order enquiry", "Demande de commande", "Bestellanfrage", lang)}</option>
                    <option>{tri("Returns & repairs", "Retours & réparations", "Rückgaben & Reparaturen", lang)}</option>
                    <option>{tri("Press & collaborations", "Presse & collaborations", "Presse & Kooperationen", lang)}</option>
                    <option>{tri("Wholesale", "Vente en gros", "Grosshandel", lang)}</option>
                    <option>{tri("Other", "Autre", "Sonstiges", lang)}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: C.muted, fontFamily: fMono }}>
                    {tri("Message", "Message", "Nachricht", lang)} *
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full bg-transparent outline-none resize-none pb-3 text-[15px]"
                    style={{ borderBottom: `1px solid ${C.dark}`, color: C.dark, fontFamily: fBody }}
                  />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-8 py-4 text-[11px] tracking-wider uppercase" style={{ background: C.dark, color: C.bg, border: "none", fontFamily: fBody }}>
                  {tri("Send", "Envoyer", "Senden", lang)} →
                </button>
              </form>
            )}
          </div>

          <div className="md:col-span-1 space-y-8 text-[14px]">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: C.muted, fontFamily: fMono }}>— Studio</p>
              <p className="flex items-start gap-3"><MapPin size={14} className="mt-1" style={{ color: C.gold }} /><span>Rue du Rhône 52<br />1204 Geneva, CH</span></p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: C.muted, fontFamily: fMono }}>— Direct</p>
              <p className="flex items-center gap-3"><Mail size={14} style={{ color: C.gold }} /><a href="mailto:hello@maisonnoir.ch" className="no-underline" style={{ color: C.dark }}>hello@maisonnoir.ch</a></p>
              <p className="flex items-center gap-3 mt-2"><Phone size={14} style={{ color: C.gold }} /><a href="tel:+41223106789" className="no-underline" style={{ color: C.dark }}>+41 22 310 67 89</a></p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: C.muted, fontFamily: fMono }}>— {tri("Hours", "Horaires", "Öffnungszeiten", lang)}</p>
              <p className="flex items-start gap-3"><Clock size={14} className="mt-1" style={{ color: C.gold }} /><span>Tue – Sat · 10:00 – 19:00<br />Sun – Mon · {tri("By appointment", "Sur rendez-vous", "Nach Vereinbarung", lang)}</span></p>
            </div>
          </div>
        </div>
      </section>

      <MaisonFooter />
    </div>
  );
}

function Field({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: C.muted, fontFamily: fMono }}>
        {label}{required && " *"}
      </label>
      <input type={type} required={required} className="w-full bg-transparent outline-none pb-3 text-[15px]" style={{ borderBottom: `1px solid ${C.dark}`, color: C.dark, fontFamily: fBody }} />
    </div>
  );
}

export default function MaisonContactPage() {
  return <MaisonLangProvider><Inner /></MaisonLangProvider>;
}
