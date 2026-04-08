"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { CheckCircle2, Lock } from "lucide-react";
import { MaisonNav, MaisonFooter, MaisonLangProvider, useMaisonLang, tri, C, fHead, fBody, fMono } from "../_shared";
import { useMaisonStore, cartKey } from "../_store";

function Inner() {
  const { lang } = useMaisonLang();
  const items = useMaisonStore((s) => s.items);
  const clear = useMaisonStore((s) => s.clear);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 200 ? 0 : 15;
  const total = subtotal + shipping;
  const [placed, setPlaced] = useState(false);
  const [orderNo] = useState(() => "MN-" + Math.floor(Math.random() * 900000 + 100000));

  if (placed) {
    return (
      <div style={{ background: C.bg, color: C.dark, fontFamily: fBody, minHeight: "100vh" }}>
        <DemoBanner />
        <MaisonNav />
        <section className="pt-40 md:pt-48 px-6 md:px-10 pb-32">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="mb-8 flex justify-center">
              <CheckCircle2 size={64} style={{ color: C.gold }} strokeWidth={1.2} />
            </motion.div>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.muted, fontFamily: fMono }}>
              — {tri("Order confirmed", "Commande confirmée", "Bestellung bestätigt", lang)}
            </p>
            <h1 className="mb-6" style={{ fontFamily: fHead, fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 0.95, fontWeight: 400, color: C.dark }}>
              {tri("Merci.", "Merci.", "Merci.", lang)}
            </h1>
            <p className="text-[15px] mb-3" style={{ color: C.muted }}>
              {tri("Your order has been received. We'll send a confirmation to your email shortly.", "Votre commande a été reçue. Un e-mail de confirmation vous sera envoyé.", "Ihre Bestellung wurde empfangen. Eine Bestätigung folgt per E-Mail.", lang)}
            </p>
            <p className="text-[12px] tracking-wider uppercase mb-10" style={{ color: C.muted, fontFamily: fMono }}>
              {tri("Order number", "Numéro de commande", "Bestellnummer", lang)} · {orderNo}
            </p>
            <Link href="/demos/maison/shop" className="inline-flex items-center px-8 py-4 text-[11px] tracking-wider uppercase no-underline" style={{ background: C.dark, color: C.bg, fontFamily: fBody }}>
              {tri("Continue shopping", "Continuer mes achats", "Weiter shoppen", lang)} →
            </Link>
          </div>
        </section>
        <MaisonFooter />
      </div>
    );
  }

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <MaisonNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-32">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.muted, fontFamily: fMono }}>
            — {tri("Checkout", "Paiement", "Zur Kasse", lang)}
          </p>
          <h1 className="mb-10" style={{ fontFamily: fHead, fontSize: "clamp(44px, 7vw, 100px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
            {tri("Checkout.", "Paiement.", "Kasse.", lang)}
          </h1>

          <div className="mb-8 p-4 text-[12px]" style={{ background: "#FFF9E6", border: "1px solid #E8D28A", color: "#7A5800", fontFamily: fMono }}>
            — {tri("Demo checkout. No real payment will be processed.", "Paiement démo. Aucun paiement réel ne sera effectué.", "Demo-Checkout. Es wird keine echte Zahlung durchgeführt.", lang)}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              clear();
              setPlaced(true);
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="md:col-span-2 space-y-10">
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase mb-5" style={{ color: C.muted, fontFamily: fMono }}>— {tri("Contact", "Contact", "Kontakt", lang)}</p>
                <Field label="Email" type="email" required />
              </div>
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase mb-5" style={{ color: C.muted, fontFamily: fMono }}>— {tri("Shipping", "Livraison", "Versand", lang)}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label={tri("First name", "Prénom", "Vorname", lang)} required />
                  <Field label={tri("Last name", "Nom", "Nachname", lang)} required />
                </div>
                <div className="mt-5">
                  <Field label={tri("Address", "Adresse", "Adresse", lang)} required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                  <Field label={tri("City", "Ville", "Stadt", lang)} required />
                  <Field label={tri("Postal code", "Code postal", "PLZ", lang)} required />
                  <Field label={tri("Country", "Pays", "Land", lang)} required defaultValue="Switzerland" />
                </div>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase mb-5" style={{ color: C.muted, fontFamily: fMono }}>
                  — {tri("Payment", "Paiement", "Zahlung", lang)}
                </p>
                <div className="p-5 mb-3" style={{ border: `1px solid ${C.border}`, background: "#FAFAF8" }}>
                  <div className="flex items-center gap-2 mb-4 text-[11px]" style={{ color: C.muted, fontFamily: fMono }}>
                    <Lock size={12} /> {tri("Encrypted & secure", "Chiffré et sécurisé", "Verschlüsselt & sicher", lang)}
                  </div>
                  <Field label={tri("Card number", "Numéro de carte", "Kartennummer", lang)} placeholder="4242 4242 4242 4242" required />
                  <div className="grid grid-cols-2 gap-5 mt-4">
                    <Field label={tri("Expiry", "Expiration", "Ablauf", lang)} placeholder="MM / YY" required />
                    <Field label="CVC" placeholder="123" required />
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="md:col-span-1">
              <div className="p-6" style={{ background: "#EEEAE3" }}>
                <p className="text-[11px] tracking-[0.25em] uppercase mb-5" style={{ fontFamily: fMono, color: C.muted }}>
                  — {tri("Order", "Commande", "Bestellung", lang)} / {items.length}
                </p>
                <ul className="space-y-4 mb-6">
                  {items.map((i) => (
                    <li key={cartKey(i)} className="flex gap-3 text-[12px]">
                      <div className="relative w-14 h-20 shrink-0" style={{ background: C.border }}>
                        <Image src={`/images/maison/${i.image}`} alt={i.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p style={{ fontFamily: fHead, fontSize: 14, color: C.dark }}>{i.name}</p>
                        <p className="text-[10px] tracking-wider uppercase mt-0.5" style={{ color: C.muted, fontFamily: fMono }}>{i.size} · {i.qty}</p>
                      </div>
                      <span style={{ fontFamily: fMono }}>€ {(i.price * i.qty).toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-2 text-[12px] py-4" style={{ fontFamily: fMono, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
                  <div className="flex justify-between"><span style={{ color: C.muted }}>{tri("Subtotal", "Sous-total", "Zwischensumme", lang)}</span><span>€ {subtotal.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span style={{ color: C.muted }}>{tri("Shipping", "Livraison", "Versand", lang)}</span><span>{shipping === 0 ? tri("Free", "Offerte", "Gratis", lang) : `€ ${shipping}`}</span></div>
                </div>
                <div className="flex justify-between pt-4 text-[14px]" style={{ fontFamily: fMono }}>
                  <span>{tri("Total", "Total", "Gesamt", lang)}</span>
                  <span style={{ fontSize: 18 }}>€ {total.toLocaleString()}</span>
                </div>
                <button
                  type="submit"
                  disabled={items.length === 0}
                  className="mt-6 w-full py-4 text-[11px] tracking-wider uppercase transition-opacity disabled:opacity-40"
                  style={{ background: C.dark, color: C.bg, fontFamily: fBody, border: "none" }}
                >
                  {tri("Place Order", "Valider la commande", "Bestellung aufgeben", lang)} →
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <MaisonFooter />
    </div>
  );
}

function Field({ label, type = "text", required, placeholder, defaultValue }: { label: string; type?: string; required?: boolean; placeholder?: string; defaultValue?: string }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: C.muted, fontFamily: fMono }}>
        {label}{required && " *"}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full bg-transparent outline-none px-0 py-3 text-[14px]"
        style={{ borderBottom: `1px solid ${C.dark}`, color: C.dark, fontFamily: fBody }}
      />
    </div>
  );
}

export default function MaisonCheckoutPage() {
  return <MaisonLangProvider><Inner /></MaisonLangProvider>;
}
