"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowLeft, ArrowRight, Bed, Maximize2, Eye } from "lucide-react";
import { C, fHead, fBody, fMono, Reveal, Rule, HotelNav, HotelFooter, HotelLangProvider, useHotelLang, tri, rooms } from "../../_shared";

function Inner({ slug }: { slug: string }) {
  const { lang } = useHotelLang();
  const idx = rooms.findIndex((r) => r.slug === slug);
  if (idx < 0) return notFound();
  const r = rooms[idx];
  const prev = rooms[(idx - 1 + rooms.length) % rooms.length];
  const next = rooms[(idx + 1) % rooms.length];
  const [active, setActive] = useState(0);

  const amenities = [
    { en: "King-size bed with Frette linens", de: "Kingsize-Bett mit Frette-Bettwäsche", fr: "Lit king size avec linge Frette" },
    { en: "Marble bathroom with rainshower", de: "Marmorbad mit Regendusche", fr: "Salle de bain en marbre avec douche à effet pluie" },
    { en: "Nespresso, minibar, tea service", de: "Nespresso, Minibar, Teeservice", fr: "Nespresso, minibar, service à thé" },
    { en: "High-speed Wi-Fi", de: "Highspeed-WLAN", fr: "Wi-Fi haut débit" },
    { en: "Daily turndown, fresh flowers", de: "Täglicher Abendservice, frische Blumen", fr: "Service de couverture, fleurs fraîches" },
    { en: "24h room service", de: "24h Zimmerservice", fr: "Service en chambre 24h" },
  ];

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HotelNav />

      {/* Hero gallery */}
      <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
        <Image src={`/images/hotel/${r.images[active]}`} alt={r.nameEn} fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(14,26,43,0.2) 0%, rgba(14,26,43,0.65) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-16 md:pb-20">
            <div className="max-w-[1500px] mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-[10px] tracking-[0.4em] uppercase mb-5"
                style={{ color: "#D4B878", fontFamily: fMono }}
              >
                — {r.num} · {r.view}
              </motion.p>
              <motion.h1
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 1, delay: 0.35, ease: [0.77, 0, 0.175, 1] }}
                className="max-w-4xl"
                style={{
                  fontFamily: fHead,
                  fontSize: "clamp(48px, 8vw, 130px)",
                  lineHeight: 0.92,
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                  color: "#F7F1E8",
                paddingBottom: "0.15em",
                }}
              >
                {tri(r.nameEn, r.nameDe, r.nameFr, lang)}
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* Thumbs */}
      <section className="px-6 md:px-10 pt-6">
        <div className="max-w-[1500px] mx-auto flex gap-3">
          {r.images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              className="relative w-24 h-16 md:w-32 md:h-20 overflow-hidden transition-all"
              style={{ border: active === i ? `2px solid ${C.gold}` : `1px solid ${C.border}` }}
            >
              <Image src={`/images/hotel/${img}`} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <Reveal className="md:col-span-6">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: C.gold, fontFamily: fMono }}>
              — {tri("About the room", "Über das Zimmer", "À propos de la chambre", lang)}
            </p>
            <p className="text-[18px] md:text-[20px] leading-[1.85]" style={{ color: C.dark, fontFamily: fHead }}>
              {tri(r.longEn, r.longDe, r.longFr, lang)}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-5 md:col-start-8">
            <div className="p-10" style={{ background: "#EFE6D6" }}>
              <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.gold, fontFamily: fMono }}>
                — {tri("The details", "Die Details", "Les détails", lang)}
              </p>
              <div className="space-y-5 text-[13px] mb-8" style={{ fontFamily: fMono }}>
                <div className="flex items-start gap-3" style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 14 }}>
                  <Maximize2 size={14} className="mt-1 shrink-0" style={{ color: C.gold }} />
                  <div>
                    <p className="opacity-60 text-[10px] tracking-wider uppercase">{tri("Size", "Grösse", "Surface", lang)}</p>
                    <p className="text-[15px] mt-1" style={{ color: C.dark, fontFamily: fHead }}>{r.sizeM2} m²</p>
                  </div>
                </div>
                <div className="flex items-start gap-3" style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 14 }}>
                  <Bed size={14} className="mt-1 shrink-0" style={{ color: C.gold }} />
                  <div>
                    <p className="opacity-60 text-[10px] tracking-wider uppercase">{tri("Bed", "Bett", "Lit", lang)}</p>
                    <p className="text-[15px] mt-1" style={{ color: C.dark, fontFamily: fHead }}>{r.beds}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye size={14} className="mt-1 shrink-0" style={{ color: C.gold }} />
                  <div>
                    <p className="opacity-60 text-[10px] tracking-wider uppercase">{tri("View", "Aussicht", "Vue", lang)}</p>
                    <p className="text-[15px] mt-1" style={{ color: C.dark, fontFamily: fHead }}>{r.view}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-baseline justify-between pt-6" style={{ borderTop: `1px solid ${C.border}` }}>
                <div>
                  <p className="text-[10px] tracking-wider uppercase" style={{ color: C.muted, fontFamily: fMono }}>
                    {tri("From", "Ab", "Dès", lang)}
                  </p>
                  <p style={{ fontFamily: fHead, fontSize: 40, color: C.gold, lineHeight: 1 }}>€ {r.price}</p>
                  <p className="text-[10px]" style={{ color: C.muted, fontFamily: fMono }}>/ {tri("night · incl. breakfast", "Nacht · inkl. Frühstück", "nuit · petit-déjeuner inclus", lang)}</p>
                </div>
                <Link
                  href="/demos/hotel/contact"
                  className="inline-flex items-center px-6 py-3.5 text-[11px] tracking-wider uppercase no-underline"
                  style={{ background: C.dark, color: C.bg, fontFamily: fBody, fontWeight: 600 }}
                >
                  {tri("Reserve", "Reservieren", "Réserver", lang)}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Amenities */}
      <section className="px-6 md:px-10 py-20" style={{ background: "#EFE6D6" }}>
        <div className="max-w-[1500px] mx-auto">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5 text-center" style={{ color: C.gold, fontFamily: fMono }}>
              — {tri("In every room", "In jedem Zimmer", "Dans chaque chambre", lang)}
            </p>
            <h2 className="mb-14 text-center" style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1, fontWeight: 400, color: C.dark }}>
              {tri("Amenities.", "Ausstattung.", "Équipements.", lang)}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-5 max-w-3xl mx-auto">
            {amenities.map((a) => (
              <div key={a.en} className="flex items-center gap-3 text-[14px]" style={{ color: C.dark }}>
                <span className="w-1.5 h-1.5 rotate-45 shrink-0" style={{ background: C.gold }} />
                <span>{tri(a.en, a.de, a.fr, lang)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nav prev / next */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-[1500px] mx-auto">
          <Rule className="mb-12" />
          <div className="grid grid-cols-3 items-center gap-8">
            <Link href={`/demos/hotel/rooms/${prev.slug}`} className="no-underline transition-opacity hover:opacity-60" style={{ color: C.dark }}>
              <div className="flex items-center gap-3">
                <ArrowLeft size={16} style={{ color: C.gold }} />
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: C.muted, fontFamily: fMono }}>
                    {tri("Previous", "Vorheriges", "Précédent", lang)}
                  </p>
                  <p style={{ fontFamily: fHead, fontSize: 20, lineHeight: 1.1 }}>{tri(prev.nameEn, prev.nameDe, prev.nameFr, lang)}</p>
                </div>
              </div>
            </Link>
            <div className="text-center">
              <Link href="/demos/hotel/rooms" className="text-[11px] tracking-wider uppercase no-underline" style={{ color: C.gold, fontFamily: fMono }}>
                {tri("All rooms", "Alle Zimmer", "Toutes", lang)}
              </Link>
            </div>
            <Link href={`/demos/hotel/rooms/${next.slug}`} className="no-underline transition-opacity hover:opacity-60 text-right" style={{ color: C.dark }}>
              <div className="flex items-center justify-end gap-3">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: C.muted, fontFamily: fMono }}>
                    {tri("Next", "Nächstes", "Suivant", lang)}
                  </p>
                  <p style={{ fontFamily: fHead, fontSize: 20, lineHeight: 1.1 }}>{tri(next.nameEn, next.nameDe, next.nameFr, lang)}</p>
                </div>
                <ArrowRight size={16} style={{ color: C.gold }} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <HotelFooter />
    </div>
  );
}

export default function HotelRoomDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  return <HotelLangProvider><Inner slug={slug} /></HotelLangProvider>;
}
