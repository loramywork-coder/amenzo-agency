"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Heart, ChevronDown, ShoppingBag } from "lucide-react";
import { MaisonNav, MaisonFooter, MaisonLangProvider, useMaisonLang, tri, Reveal, C, fHead, fBody, fMono } from "../../_shared";
import { products, categories } from "../../_data";
import { useMaisonStore } from "../../_store";

function CategoryView({ slug }: { slug: "women" | "men" | "accessories" }) {
  const { lang } = useMaisonLang();
  const cat = categories.find((c) => c.slug === slug)!;
  const items = products.filter((p) => p.category === slug);
  const wishlist = useMaisonStore((s) => s.wishlist);
  const toggleWishlist = useMaisonStore((s) => s.toggleWishlist);

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <MaisonNav />

      {/* Hero */}
      <section className="relative w-full h-[55vh] min-h-[420px] overflow-hidden">
        <Image src={`/images/maison/cat-${slug}.jpg`} alt={cat.label} fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(13,13,13,0.2) 0%, rgba(13,13,13,0.5) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-14">
            <div className="max-w-[1600px] mx-auto">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[10px] tracking-[0.3em] uppercase mb-4 text-white/80" style={{ fontFamily: fMono }}>
                — Shop / {tri(cat.label, slug === "women" ? "Femme" : slug === "men" ? "Homme" : "Accessoires", slug === "women" ? "Damen" : slug === "men" ? "Herren" : "Accessoires", lang)}
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="text-white" style={{ fontFamily: fHead, fontSize: "clamp(56px, 10vw, 160px)", lineHeight: 0.9, fontWeight: 400, letterSpacing: "-0.02em", color: "#F8F6F3" }}>
                <em style={{ fontStyle: "italic" }}>
                  {tri(cat.label, slug === "women" ? "Femme" : slug === "men" ? "Homme" : "Accessoires", slug === "women" ? "Damen" : slug === "men" ? "Herren" : "Accessoires", lang)}
                </em>
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 pb-32">
        <div className="max-w-[1600px] mx-auto">
          <p className="text-[11px] tracking-wider uppercase mb-10" style={{ color: C.muted, fontFamily: fMono }}>
            — {items.length} {tri("items", "articles", "Artikel", lang)}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {items.map((p, i) => {
              const isWished = wishlist.includes(p.slug);
              return (
                <Reveal key={p.slug} delay={(i % 6) * 0.05}>
                  <div className="group">
                    <Link href={`/demos/maison/shop/${p.slug}`} className="block no-underline">
                      <div className="relative aspect-[3/4] overflow-hidden mb-4" style={{ background: C.border }}>
                        <Image src={`/images/maison/${p.images[0]}`} alt={p.name} fill className="object-cover transition-opacity duration-500 group-hover:opacity-0" />
                        <Image src={`/images/maison/${p.images[1]}`} alt="" fill className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                      </div>
                    </Link>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link href={`/demos/maison/shop/${p.slug}`} className="no-underline" style={{ color: C.dark }}>
                          <h2 style={{ fontFamily: fHead, fontSize: 18, fontWeight: 400, color: C.dark }}>{p.name}</h2>
                        </Link>
                        <p className="text-[11px] tracking-wider uppercase mt-1" style={{ color: C.muted, fontFamily: fMono }}>€ {p.price}</p>
                      </div>
                      <button onClick={() => toggleWishlist(p.slug)} aria-label="Wishlist" className="p-1" style={{ color: isWished ? C.gold : C.muted }}>
                        <Heart size={16} fill={isWished ? C.gold : "none"} />
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <MaisonFooter />
    </div>
  );
}

function ProductView({ slug }: { slug: string }) {
  const { lang } = useMaisonLang();
  const p = products.find((x) => x.slug === slug);
  if (!p) return notFound();
  const add = useMaisonStore((s) => s.add);
  const wishlist = useMaisonStore((s) => s.wishlist);
  const toggleWishlist = useMaisonStore((s) => s.toggleWishlist);
  const isWished = wishlist.includes(p.slug);

  const [size, setSize] = useState(p.sizes[0]);
  const [color, setColor] = useState(p.colors[0]);
  const [activeImg, setActiveImg] = useState(0);
  const [openAcc, setOpenAcc] = useState<"desc" | "mat" | "ship" | null>("desc");

  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <MaisonNav />

      <section className="pt-32 md:pt-36 px-6 md:px-10 pb-20">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-[10px] tracking-wider uppercase mb-8" style={{ color: C.muted, fontFamily: fMono }}>
            <Link href="/demos/maison/shop" className="no-underline" style={{ color: C.muted }}>Shop</Link>
            {" / "}
            <Link href={`/demos/maison/shop/${p.category}`} className="no-underline" style={{ color: C.muted }}>{p.category}</Link>
            {" / "}
            <span style={{ color: C.dark }}>{p.name}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Gallery */}
            <div>
              <div className="relative aspect-[3/4] mb-4" style={{ background: C.border }}>
                <Image src={`/images/maison/${p.images[activeImg]}`} alt={p.name} fill priority className="object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {p.images.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setActiveImg(i)}
                    className="relative aspect-square"
                    style={{ border: activeImg === i ? `1px solid ${C.dark}` : `1px solid ${C.border}` }}
                  >
                    <Image src={`/images/maison/${img}`} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="md:pt-8 md:sticky md:top-32 md:self-start">
              <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: C.muted, fontFamily: fMono }}>
                — {p.category}
              </p>
              <h1 className="mb-4" style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1, fontWeight: 400, letterSpacing: "-0.015em", color: C.dark }}>
                {p.name}
              </h1>
              <p className="mb-8 text-[20px]" style={{ fontFamily: fMono, color: C.dark }}>€ {p.price}</p>

              {/* Color */}
              <div className="mb-6">
                <p className="text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: C.muted, fontFamily: fMono }}>
                  {tri("Colour", "Couleur", "Farbe", lang)} — <span style={{ color: C.dark }}>{color}</span>
                </p>
                <div className="flex gap-2">
                  {p.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className="w-9 h-9"
                      style={{
                        background: c,
                        border: color === c ? `2px solid ${C.dark}` : `1px solid ${C.border}`,
                      }}
                      aria-label={`Colour ${c}`}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-8">
                <div className="flex items-baseline justify-between mb-3">
                  <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: C.muted, fontFamily: fMono }}>
                    {tri("Size", "Taille", "Grösse", lang)}
                  </p>
                  <Link href="/demos/maison/size-guide" className="text-[10px] tracking-wider uppercase no-underline underline-offset-4 underline" style={{ color: C.dark, fontFamily: fMono }}>
                    {tri("Size guide", "Guide des tailles", "Grössentabelle", lang)}
                  </Link>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {p.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className="py-3 text-[12px] tracking-wider uppercase transition-all"
                      style={{
                        border: size === s ? `1px solid ${C.dark}` : `1px solid ${C.border}`,
                        background: size === s ? C.dark : "transparent",
                        color: size === s ? C.bg : C.dark,
                        fontFamily: fMono,
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to bag */}
              <div className="flex gap-3 mb-8">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => add({ slug: p.slug, name: p.name, price: p.price, size, color, image: p.images[0] })}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-4 text-[11px] tracking-wider uppercase transition-colors"
                  style={{ background: C.dark, color: C.bg, fontFamily: fBody, border: "none" }}
                >
                  <ShoppingBag size={14} />
                  {tri("Add to Bag", "Ajouter au sac", "In den Warenkorb", lang)}
                </motion.button>
                <button
                  onClick={() => toggleWishlist(p.slug)}
                  aria-label="Wishlist"
                  className="w-14 flex items-center justify-center"
                  style={{ border: `1px solid ${C.border}`, color: isWished ? C.gold : C.dark }}
                >
                  <Heart size={16} fill={isWished ? C.gold : "none"} />
                </button>
              </div>

              {/* Accordion */}
              {[
                { id: "desc", en: "Description", fr: "Description", de: "Beschreibung", body: p.description },
                { id: "mat", en: "Materials & Origin", fr: "Matériaux & origine", de: "Material & Herkunft", body: p.materials },
                { id: "ship", en: "Shipping & Returns", fr: "Livraison & retours", de: "Versand & Rückgabe", body: "Free shipping within Europe on orders over €200. 30-day returns on unworn items with original packaging." },
              ].map((a) => (
                <div key={a.id} style={{ borderTop: `1px solid ${C.border}` }}>
                  <button
                    onClick={() => setOpenAcc(openAcc === a.id ? null : (a.id as "desc" | "mat" | "ship"))}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-[11px] tracking-[0.2em] uppercase" style={{ fontFamily: fMono, color: C.dark }}>
                      {tri(a.en, a.fr, a.de, lang)}
                    </span>
                    <ChevronDown size={14} style={{ color: C.dark, transform: openAcc === a.id ? "rotate(180deg)" : "none", transition: "transform 0.3s" }} />
                  </button>
                  {openAcc === a.id && (
                    <p className="pb-5 text-[14px] leading-[1.8]" style={{ color: C.muted }}>
                      {a.body}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="px-6 md:px-10 py-20 pb-32">
          <div className="max-w-[1600px] mx-auto">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{ color: C.muted, fontFamily: fMono }}>
              — {tri("You may also like", "Vous aimerez aussi", "Das gefällt Ihnen vielleicht auch", lang)}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              {related.map((r) => (
                <Link key={r.slug} href={`/demos/maison/shop/${r.slug}`} className="group block no-underline">
                  <div className="relative aspect-[3/4] overflow-hidden mb-4" style={{ background: C.border }}>
                    <Image src={`/images/maison/${r.images[0]}`} alt={r.name} fill className="object-cover transition-opacity duration-500 group-hover:opacity-0" />
                    <Image src={`/images/maison/${r.images[1]}`} alt="" fill className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h3 style={{ fontFamily: fHead, fontSize: 18, fontWeight: 400, color: C.dark }}>{r.name}</h3>
                    <span className="text-[12px]" style={{ fontFamily: fMono, color: C.muted }}>€ {r.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <MaisonFooter />
    </div>
  );
}

export default function MaisonShopSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  return (
    <MaisonLangProvider>
      {slug === "women" || slug === "men" || slug === "accessories" ? (
        <CategoryView slug={slug as "women" | "men" | "accessories"} />
      ) : (
        <ProductView slug={slug} />
      )}
    </MaisonLangProvider>
  );
}
