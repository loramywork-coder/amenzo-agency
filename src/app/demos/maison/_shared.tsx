"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, createContext, useContext, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Heart, Plus, Minus } from "lucide-react";
import { useMaisonStore, cartKey } from "./_store";

/* tokens */
export const C = {
  bg: "#F8F6F3",       // bone
  dark: "#0D0D0D",
  gold: "#BFA46F",
  muted: "#6B6B6B",
  border: "rgba(13,13,13,0.08)",
  borderStrong: "rgba(13,13,13,0.18)",
};
export const fHead = "var(--font-serif-display), 'Noto Serif Display', 'Playfair Display', Georgia, serif";
export const fBody = "var(--font-body), 'Karla', 'Inter', system-ui, sans-serif";
export const fMono = "var(--font-mono), 'Space Mono', 'JetBrains Mono', monospace";

/* trilingual */
export type Lang = "en" | "fr" | "de";
const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void } | null>(null);

export function MaisonLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("maison-lang") as Lang | null;
      if (saved === "en" || saved === "fr" || saved === "de") setLangState(saved);
    } catch {}
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("maison-lang", l); } catch {}
  };
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useMaisonLang() {
  const ctx = useContext(LangContext);
  return ctx ?? { lang: "en" as Lang, setLang: () => {} };
}

export function tri<T>(en: T, fr: T, de: T, lang: Lang): T {
  return lang === "fr" ? fr : lang === "de" ? de : en;
}

/* reveal */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Nav */
const NAV = [
  { href: "/demos/maison/shop", en: "Shop", fr: "Boutique", de: "Shop" },
  { href: "/demos/maison/lookbook", en: "Lookbook", fr: "Lookbook", de: "Lookbook" },
  { href: "/demos/maison/about", en: "About", fr: "À propos", de: "Über uns" },
  { href: "/demos/maison/journal", en: "Journal", fr: "Journal", de: "Journal" },
];

export function MaisonNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useMaisonLang();
  const items = useMaisonStore((s) => s.items);
  const wishlist = useMaisonStore((s) => s.wishlist);
  const openDrawer = useMaisonStore((s) => s.openDrawer);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav
        className="fixed top-10 left-0 right-0 z-50 px-5 md:px-10 transition-all"
        style={{
          background: scrolled ? "rgba(248,246,243,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
          paddingTop: 18,
          paddingBottom: 18,
        }}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
          <Link
            href="/demos/maison"
            className="no-underline tracking-[0.25em] uppercase text-[15px] md:text-[17px] whitespace-nowrap"
            style={{ fontFamily: fHead, color: C.dark, fontWeight: 500 }}
          >
            Maison <em style={{ fontStyle: "italic", color: C.gold }}>Noir</em>
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[12px] tracking-[0.15em] uppercase no-underline transition-opacity hover:opacity-60"
                style={{ color: C.dark, fontFamily: fBody }}
              >
                {tri(l.en, l.fr, l.de, lang)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center text-[10px] tracking-wider" style={{ color: C.muted, fontFamily: fMono }}>
              {(["en", "fr", "de"] as Lang[]).map((l, i) => (
                <span key={l} className="flex items-center">
                  {i > 0 && <span className="mx-1 opacity-40">/</span>}
                  <button
                    onClick={() => setLang(l)}
                    className="uppercase transition-colors px-1"
                    style={{ color: lang === l ? C.dark : C.muted, fontWeight: lang === l ? 700 : 400 }}
                  >
                    {l}
                  </button>
                </span>
              ))}
            </div>
            <Link href="/demos/maison/wishlist" aria-label="Wishlist" className="p-2 relative" style={{ color: C.dark }}>
              <Heart size={18} />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center text-[9px] font-bold" style={{ background: C.gold, color: C.dark, borderRadius: 999 }}>
                  {wishlist.length}
                </span>
              )}
            </Link>
            <button onClick={openDrawer} aria-label="Cart" className="p-2 relative" style={{ color: C.dark }}>
              <ShoppingBag size={18} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center text-[9px] font-bold" style={{ background: C.gold, color: C.dark, borderRadius: 999 }}>
                  {count}
                </span>
              )}
            </button>
            <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu" style={{ color: C.dark }}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 px-6" style={{ background: C.bg }}>
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-3xl no-underline"
              style={{ fontFamily: fHead, color: C.dark }}
            >
              {tri(l.en, l.fr, l.de, lang)}
            </Link>
          ))}
          <div className="flex items-center gap-3 text-xs mt-3" style={{ fontFamily: fMono, color: C.muted }}>
            {(["en", "fr", "de"] as Lang[]).map((l) => (
              <button key={l} onClick={() => setLang(l)} className="uppercase px-2" style={{ color: lang === l ? C.dark : C.muted, fontWeight: lang === l ? 700 : 400 }}>
                {l}
              </button>
            ))}
          </div>
        </div>
      )}

      <CartDrawer />
    </>
  );
}

/* Cart drawer */
export function CartDrawer() {
  const { lang } = useMaisonLang();
  const drawerOpen = useMaisonStore((s) => s.drawerOpen);
  const closeDrawer = useMaisonStore((s) => s.closeDrawer);
  const items = useMaisonStore((s) => s.items);
  const remove = useMaisonStore((s) => s.remove);
  const updateQty = useMaisonStore((s) => s.updateQty);

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <AnimatePresence>
      {drawerOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 z-[90]"
            style={{ background: "rgba(13,13,13,0.3)", backdropFilter: "blur(8px)" }}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[91] w-full max-w-md flex flex-col"
            style={{ background: C.bg, borderLeft: `1px solid ${C.border}` }}
          >
            <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: `1px solid ${C.border}` }}>
              <p className="text-[12px] tracking-[0.25em] uppercase" style={{ fontFamily: fMono, color: C.dark }}>
                {tri("Your Bag", "Votre sac", "Ihr Warenkorb", lang)} ({items.length})
              </p>
              <button onClick={closeDrawer} className="p-1" aria-label="Close" style={{ color: C.dark }}>
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-10 text-center">
                  <p className="mb-4 text-[22px]" style={{ fontFamily: fHead, color: C.dark }}>
                    {tri("Your bag is empty", "Votre sac est vide", "Ihr Warenkorb ist leer", lang)}
                  </p>
                  <Link
                    href="/demos/maison/shop"
                    onClick={closeDrawer}
                    className="mt-3 px-6 py-3 text-[11px] tracking-wider uppercase no-underline"
                    style={{ background: C.dark, color: C.bg, fontFamily: fBody }}
                  >
                    {tri("Shop", "Boutique", "Shop", lang)}
                  </Link>
                </div>
              ) : (
                <ul className="divide-y" style={{ borderColor: C.border }}>
                  {items.map((i) => {
                    const key = cartKey(i);
                    return (
                      <li key={key} className="flex gap-4 p-6">
                        <div className="relative w-20 h-28 shrink-0" style={{ background: C.border }}>
                          <Image src={`/images/maison/${i.image}`} alt={i.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p style={{ fontFamily: fHead, fontSize: 18, color: C.dark }}>{i.name}</p>
                          <p className="text-[11px] tracking-wider uppercase mt-1" style={{ color: C.muted, fontFamily: fMono }}>
                            {i.size} · <span className="inline-block w-2.5 h-2.5 rounded-full align-middle" style={{ background: i.color }} />
                          </p>
                          <div className="flex items-center justify-between mt-4">
                            <div className="inline-flex items-center gap-2 text-[11px]" style={{ border: `1px solid ${C.border}`, fontFamily: fMono }}>
                              <button onClick={() => updateQty(key, i.qty - 1)} className="p-1.5" aria-label="Decrease"><Minus size={11} /></button>
                              <span className="px-1">{i.qty}</span>
                              <button onClick={() => updateQty(key, i.qty + 1)} className="p-1.5" aria-label="Increase"><Plus size={11} /></button>
                            </div>
                            <span style={{ fontFamily: fMono, color: C.dark, fontSize: 13 }}>€ {(i.price * i.qty).toLocaleString()}</span>
                          </div>
                          <button onClick={() => remove(key)} className="mt-3 text-[10px] tracking-wider uppercase opacity-60 hover:opacity-100 transition-opacity" style={{ color: C.dark, fontFamily: fMono }}>
                            {tri("Remove", "Retirer", "Entfernen", lang)}
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="px-6 py-5" style={{ borderTop: `1px solid ${C.border}` }}>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[12px] tracking-wider uppercase" style={{ color: C.muted, fontFamily: fMono }}>
                    {tri("Subtotal", "Sous-total", "Zwischensumme", lang)}
                  </span>
                  <span style={{ fontFamily: fHead, fontSize: 24, color: C.dark }}>
                    € {subtotal.toLocaleString()}
                  </span>
                </div>
                <Link
                  href="/demos/maison/checkout"
                  onClick={closeDrawer}
                  className="block w-full text-center px-6 py-4 text-[11px] tracking-wider uppercase no-underline transition-opacity hover:opacity-90"
                  style={{ background: C.dark, color: C.bg, fontFamily: fBody }}
                >
                  {tri("Checkout", "Paiement", "Zur Kasse", lang)} →
                </Link>
                <Link
                  href="/demos/maison/cart"
                  onClick={closeDrawer}
                  className="block w-full text-center mt-3 py-2 text-[11px] tracking-wider uppercase no-underline underline"
                  style={{ color: C.dark, fontFamily: fMono }}
                >
                  {tri("View full cart", "Voir le panier", "Warenkorb ansehen", lang)}
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* Footer */
export function MaisonFooter() {
  const { lang } = useMaisonLang();
  return (
    <footer className="px-6 md:px-10 pt-20 pb-10" style={{ background: C.dark, color: "#E4DDD0", fontFamily: fBody, borderTop: `1px solid ${C.borderStrong}` }}>
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="mb-5 tracking-[0.25em] uppercase text-[15px]" style={{ fontFamily: fHead, fontWeight: 500, color: "#E4DDD0" }}>
            Maison <em style={{ fontStyle: "italic", color: C.gold }}>Noir</em>
          </p>
          <p className="text-[13px] leading-relaxed opacity-75 max-w-[14rem]">
            {tri(
              "Timeless pieces, made slowly. Designed in Geneva, produced in Europe.",
              "Pièces intemporelles, fabriquées lentement. Conçues à Genève, produites en Europe.",
              "Zeitlose Stücke, langsam gefertigt. Entworfen in Genf, produziert in Europa.",
              lang
            )}
          </p>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: C.gold, fontFamily: fMono }}>— Shop</p>
          <ul className="space-y-2 text-[13px] opacity-80">
            <li><Link href="/demos/maison/shop/women" className="hover:opacity-100 transition-opacity no-underline" style={{ color: "#E4DDD0" }}>{tri("Women", "Femme", "Damen", lang)}</Link></li>
            <li><Link href="/demos/maison/shop/men" className="hover:opacity-100 transition-opacity no-underline" style={{ color: "#E4DDD0" }}>{tri("Men", "Homme", "Herren", lang)}</Link></li>
            <li><Link href="/demos/maison/shop/accessories" className="hover:opacity-100 transition-opacity no-underline" style={{ color: "#E4DDD0" }}>{tri("Accessories", "Accessoires", "Accessoires", lang)}</Link></li>
            <li><Link href="/demos/maison/lookbook" className="hover:opacity-100 transition-opacity no-underline" style={{ color: "#E4DDD0" }}>Lookbook</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: C.gold, fontFamily: fMono }}>— Help</p>
          <ul className="space-y-2 text-[13px] opacity-80">
            <li><Link href="/demos/maison/contact" className="hover:opacity-100 transition-opacity no-underline" style={{ color: "#E4DDD0" }}>{tri("Contact", "Contact", "Kontakt", lang)}</Link></li>
            <li><Link href="/demos/maison/faq" className="hover:opacity-100 transition-opacity no-underline" style={{ color: "#E4DDD0" }}>FAQ</Link></li>
            <li><Link href="/demos/maison/size-guide" className="hover:opacity-100 transition-opacity no-underline" style={{ color: "#E4DDD0" }}>{tri("Size guide", "Guide des tailles", "Grössentabelle", lang)}</Link></li>
            <li><Link href="/demos/maison/shipping-returns" className="hover:opacity-100 transition-opacity no-underline" style={{ color: "#E4DDD0" }}>{tri("Shipping & returns", "Livraison & retours", "Versand & Rückgabe", lang)}</Link></li>
            <li><Link href="/demos/maison/sustainability" className="hover:opacity-100 transition-opacity no-underline" style={{ color: "#E4DDD0" }}>{tri("Sustainability", "Durabilité", "Nachhaltigkeit", lang)}</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: C.gold, fontFamily: fMono }}>— Newsletter</p>
          <p className="text-[13px] leading-relaxed opacity-75 mb-4">
            {tri("New collections and stories, once a month.", "Nouvelles collections et récits, une fois par mois.", "Neue Kollektionen und Geschichten, einmal im Monat.", lang)}
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex">
            <input
              type="email"
              placeholder={tri("Your email", "Votre e-mail", "Ihre E-Mail", lang)}
              className="flex-1 bg-transparent outline-none text-[13px] px-0 py-2"
              style={{ borderBottom: "1px solid rgba(228,221,208,0.35)", color: "#E4DDD0", fontFamily: fBody }}
            />
            <button type="submit" className="ml-3 text-[11px] tracking-wider uppercase" style={{ color: C.gold, fontFamily: fMono }}>
              →
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] tracking-wider uppercase opacity-50" style={{ borderTop: "1px solid rgba(228,221,208,0.1)", fontFamily: fMono }}>
        <span>© {new Date().getFullYear()} Maison Noir SA · Geneva, Switzerland</span>
        <span>
          — Website by{" "}
          <a href="https://amenzo.co" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-100 transition-opacity" style={{ color: "#E4DDD0" }}>
            Amenzo Studio
          </a>
        </span>
      </div>
    </footer>
  );
}
