"use client";

import Image from "next/image";
import Link from "next/link";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Heart, X } from "lucide-react";
import { MaisonNav, MaisonFooter, MaisonLangProvider, useMaisonLang, tri, C, fHead, fBody, fMono } from "../_shared";
import { products } from "../_data";
import { useMaisonStore } from "../_store";

function Inner() {
  const { lang } = useMaisonLang();
  const wishlist = useMaisonStore((s) => s.wishlist);
  const toggleWishlist = useMaisonStore((s) => s.toggleWishlist);
  const items = products.filter((p) => wishlist.includes(p.slug));

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <MaisonNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-32">
        <div className="max-w-[1600px] mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.muted, fontFamily: fMono }}>
            — {tri("Wishlist", "Favoris", "Merkliste", lang)} / {items.length}
          </p>
          <h1 className="mb-14" style={{ fontFamily: fHead, fontSize: "clamp(48px, 9vw, 140px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
            {tri("Saved for later.", "Favoris.", "Merkliste.", lang)}
          </h1>

          {items.length === 0 ? (
            <div className="py-24 text-center">
              <Heart size={56} style={{ color: C.muted }} strokeWidth={1} className="mx-auto mb-8" />
              <p className="mb-6 text-2xl italic" style={{ fontFamily: fHead, color: C.dark }}>
                {tri("Nothing saved yet.", "Rien enregistré.", "Noch nichts gespeichert.", lang)}
              </p>
              <Link href="/demos/maison/shop" className="inline-flex items-center px-8 py-4 text-[11px] tracking-wider uppercase no-underline" style={{ background: C.dark, color: C.bg, fontFamily: fBody }}>
                {tri("Discover", "Découvrir", "Entdecken", lang)} →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
              {items.map((p) => (
                <div key={p.slug} className="group relative">
                  <Link href={`/demos/maison/shop/${p.slug}`} className="block no-underline">
                    <div className="relative aspect-[3/4] overflow-hidden mb-4" style={{ background: C.border }}>
                      <Image src={`/images/maison/${p.images[0]}`} alt={p.name} fill className="object-cover transition-opacity duration-500 group-hover:opacity-0" />
                      <Image src={`/images/maison/${p.images[1]}`} alt="" fill className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                    </div>
                  </Link>
                  <button
                    onClick={() => toggleWishlist(p.slug)}
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center transition-opacity"
                    style={{ background: C.bg, color: C.dark, border: `1px solid ${C.border}` }}
                    aria-label="Remove"
                  >
                    <X size={14} />
                  </button>
                  <div className="flex items-baseline justify-between">
                    <Link href={`/demos/maison/shop/${p.slug}`} className="no-underline" style={{ color: C.dark }}>
                      <h2 style={{ fontFamily: fHead, fontSize: 18, fontWeight: 400, color: C.dark }}>{p.name}</h2>
                    </Link>
                    <span className="text-[12px]" style={{ fontFamily: fMono, color: C.muted }}>€ {p.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <MaisonFooter />
    </div>
  );
}

export default function MaisonWishlistPage() {
  return <MaisonLangProvider><Inner /></MaisonLangProvider>;
}
