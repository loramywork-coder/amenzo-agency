"use client";

import Image from "next/image";
import Link from "next/link";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Plus, Minus, X } from "lucide-react";
import { MaisonNav, MaisonFooter, MaisonLangProvider, useMaisonLang, tri, C, fHead, fBody, fMono } from "../_shared";
import { useMaisonStore, cartKey } from "../_store";

function Inner() {
  const { lang } = useMaisonLang();
  const items = useMaisonStore((s) => s.items);
  const remove = useMaisonStore((s) => s.remove);
  const updateQty = useMaisonStore((s) => s.updateQty);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 200 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <MaisonNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.muted, fontFamily: fMono }}>
            — {tri("Your Bag", "Votre sac", "Ihr Warenkorb", lang)} / {items.length}
          </p>
          <h1 className="mb-14" style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 120px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
            {tri("The Bag.", "Le sac.", "Der Warenkorb.", lang)}
          </h1>

          {items.length === 0 ? (
            <div className="py-24 text-center">
              <p className="mb-6 text-2xl italic" style={{ fontFamily: fHead, color: C.dark }}>
                {tri("It is quiet in here.", "Rien pour l'instant.", "Noch leer.", lang)}
              </p>
              <Link
                href="/demos/maison/shop"
                className="inline-flex items-center px-8 py-4 text-[11px] tracking-wider uppercase no-underline"
                style={{ background: C.dark, color: C.bg, fontFamily: fBody }}
              >
                {tri("Discover the collection", "Découvrir la collection", "Zur Kollektion", lang)} →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ul className="md:col-span-2 divide-y" style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, borderColor: C.border }}>
                {items.map((i) => {
                  const k = cartKey(i);
                  return (
                    <li key={k} className="grid grid-cols-12 gap-4 py-6 items-start">
                      <div className="col-span-3 md:col-span-2 relative aspect-[3/4]" style={{ background: C.border }}>
                        <Image src={`/images/maison/${i.image}`} alt={i.name} fill className="object-cover" />
                      </div>
                      <div className="col-span-9 md:col-span-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <p style={{ fontFamily: fHead, fontSize: 22, color: C.dark }}>{i.name}</p>
                          <p className="text-[11px] tracking-wider uppercase mt-1" style={{ color: C.muted, fontFamily: fMono }}>
                            {i.size} · <span className="inline-block w-2.5 h-2.5 rounded-full align-middle" style={{ background: i.color }} />
                          </p>
                          <p className="text-[12px] mt-2" style={{ color: C.muted, fontFamily: fMono }}>€ {i.price}</p>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="inline-flex items-center" style={{ border: `1px solid ${C.border}`, fontFamily: fMono }}>
                            <button onClick={() => updateQty(k, i.qty - 1)} className="p-2" aria-label="Decrease"><Minus size={12} /></button>
                            <span className="px-3 text-[12px]">{i.qty}</span>
                            <button onClick={() => updateQty(k, i.qty + 1)} className="p-2" aria-label="Increase"><Plus size={12} /></button>
                          </div>
                          <span style={{ fontFamily: fMono, color: C.dark, fontSize: 14, minWidth: 70, textAlign: "right" }}>€ {(i.price * i.qty).toLocaleString()}</span>
                          <button onClick={() => remove(k)} aria-label="Remove" className="p-1 opacity-60 hover:opacity-100">
                            <X size={14} style={{ color: C.dark }} />
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="md:col-span-1">
                <div className="p-6" style={{ background: "#EEEAE3" }}>
                  <p className="text-[11px] tracking-[0.25em] uppercase mb-6" style={{ fontFamily: fMono, color: C.muted }}>
                    — {tri("Summary", "Récapitulatif", "Übersicht", lang)}
                  </p>
                  <div className="space-y-3 text-[13px]" style={{ fontFamily: fMono }}>
                    <div className="flex justify-between">
                      <span style={{ color: C.muted }}>{tri("Subtotal", "Sous-total", "Zwischensumme", lang)}</span>
                      <span>€ {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: C.muted }}>{tri("Shipping", "Livraison", "Versand", lang)}</span>
                      <span>{shipping === 0 ? tri("Free", "Offerte", "Gratis", lang) : `€ ${shipping}`}</span>
                    </div>
                    <div className="flex justify-between pt-3" style={{ borderTop: `1px solid ${C.border}` }}>
                      <span>{tri("Total", "Total", "Gesamt", lang)}</span>
                      <span style={{ fontSize: 16 }}>€ {total.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-[10px] tracking-wider uppercase mb-2" style={{ color: C.muted, fontFamily: fMono }}>
                      {tri("Promo code", "Code promo", "Gutschein", lang)}
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="NOIR10"
                        className="flex-1 bg-transparent outline-none px-3 py-2 text-[12px]"
                        style={{ border: `1px solid ${C.border}`, color: C.dark, fontFamily: fMono }}
                      />
                      <button className="px-3 py-2 text-[10px] tracking-wider uppercase" style={{ background: C.dark, color: C.bg, fontFamily: fMono, border: "none" }}>
                        {tri("Apply", "Appliquer", "Anwenden", lang)}
                      </button>
                    </div>
                  </div>
                  <Link
                    href="/demos/maison/checkout"
                    className="mt-6 block w-full text-center py-4 text-[11px] tracking-wider uppercase no-underline"
                    style={{ background: C.dark, color: C.bg, fontFamily: fBody }}
                  >
                    {tri("Checkout", "Paiement", "Zur Kasse", lang)} →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <MaisonFooter />
    </div>
  );
}

export default function MaisonCartPage() {
  return <MaisonLangProvider><Inner /></MaisonLangProvider>;
}
