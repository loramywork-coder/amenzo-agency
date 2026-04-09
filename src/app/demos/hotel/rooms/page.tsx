"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowRight } from "lucide-react";
import { C, fHead, fBody, fMono, Reveal, Rule, HotelNav, HotelFooter, HotelLangProvider, useHotelLang, tri, rooms } from "../_shared";

function Inner() {
  const { lang } = useHotelLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HotelNav />

      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[480px] overflow-hidden">
        <Image src="/images/hotel/room-deluxe-1.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(14,26,43,0.35) 0%, rgba(14,26,43,0.6) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-16">
            <div className="max-w-[1500px] mx-auto">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-[10px] tracking-[0.4em] uppercase mb-6"
                style={{ color: "#D4B878", fontFamily: fMono }}
              >
                — {tri("Thirty-eight rooms", "Achtunddreissig Zimmer", "Trente-huit chambres", lang)}
              </motion.p>
              <motion.h1
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 1, delay: 0.4, ease: [0.77, 0, 0.175, 1] }}
                className="max-w-4xl"
                style={{
                  fontFamily: fHead,
                  fontSize: "clamp(52px, 9vw, 150px)",
                  lineHeight: 0.92,
                  fontWeight: 400,
                  color: "#F7F1E8",
                  letterSpacing: "-0.015em",
                paddingBottom: "0.15em",
                }}
              >
                {tri("Rooms &", "Zimmer &", "Chambres &", lang)}<br />
                <em style={{ fontStyle: "italic", color: "#D4B878" }}>{tri("Suites", "Suiten", "Suites", lang)}</em>
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 md:px-10 py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[16px] md:text-[20px] leading-[1.75] italic" style={{ fontFamily: fHead, color: C.dark }}>
              {tri(
                "No two of our rooms are the same. They were built over three hundred years, across five renovations, by stonemasons who answered to different kings. We have resisted the urge to make them match.",
                "Keine zwei unserer Zimmer sind gleich. Sie entstanden über dreihundert Jahre, in fünf Renovierungen, von Steinmetzen, die verschiedenen Königen dienten. Wir haben darauf verzichtet, sie einheitlich zu machen.",
                "Aucune de nos chambres ne se ressemble. Elles furent construites sur trois cents ans, au fil de cinq rénovations, par des tailleurs de pierre au service de différents rois. Nous avons résisté à la tentation de les uniformiser.",
                lang
              )}
            </p>
            <Rule className="mt-10" />
          </Reveal>
        </div>
      </section>

      {/* Rooms — alternating large feature */}
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1500px] mx-auto space-y-24 md:space-y-36">
          {rooms.map((r, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={r.slug}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
                  <div className={`md:col-span-8 ${flipped ? "md:col-start-5" : ""}`}>
                    <Link href={`/demos/hotel/rooms/${r.slug}`} className="block group">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={`/images/hotel/${r.images[0]}`}
                          alt={r.nameEn}
                          fill
                          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className={`md:col-span-4 ${flipped ? "md:col-start-1 md:row-start-1" : ""}`}>
                    <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: C.gold, fontFamily: fMono }}>
                      — {r.num} · {r.view}
                    </p>
                    <h2
                      className="mb-5"
                      style={{
                        fontFamily: fHead,
                        fontSize: "clamp(36px, 4vw, 60px)",
                        lineHeight: 1.02,
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                        color: C.dark,
                      }}
                    >
                      {tri(r.nameEn, r.nameDe, r.nameFr, lang)}
                    </h2>
                    <p className="text-[15px] leading-[1.85] mb-6" style={{ color: C.muted }}>
                      {tri(r.longEn, r.longDe, r.longFr, lang)}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-7 text-[11px] tracking-wider uppercase" style={{ fontFamily: fMono, color: C.muted }}>
                      <div>
                        <p className="opacity-60 mb-1">{tri("Size", "Grösse", "Surface", lang)}</p>
                        <p style={{ color: C.dark }}>{r.sizeM2} m²</p>
                      </div>
                      <div>
                        <p className="opacity-60 mb-1">{tri("Bed", "Bett", "Lit", lang)}</p>
                        <p style={{ color: C.dark }}>{r.beds}</p>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-3 mb-6">
                      <p className="text-[10px] tracking-wider uppercase" style={{ color: C.muted, fontFamily: fMono }}>
                        {tri("From", "Ab", "Dès", lang)}
                      </p>
                      <p style={{ fontFamily: fHead, fontSize: 34, lineHeight: 1, color: C.gold, fontWeight: 400 }}>
                        € {r.price}
                      </p>
                      <p className="text-[11px]" style={{ color: C.muted, fontFamily: fMono }}>/ {tri("night", "Nacht", "nuit", lang)}</p>
                    </div>
                    <Link
                      href={`/demos/hotel/rooms/${r.slug}`}
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase no-underline"
                      style={{ color: C.dark, fontFamily: fMono, borderBottom: `1px solid ${C.gold}`, paddingBottom: 3 }}
                    >
                      {tri("Explore the room", "Zimmer ansehen", "Voir la chambre", lang)} →
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <HotelFooter />
    </div>
  );
}

export default function HotelRoomsPage() {
  return <HotelLangProvider><Inner /></HotelLangProvider>;
}
