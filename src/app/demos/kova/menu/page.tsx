"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { KovaNav, KovaFooter } from "../page";

const C = {
  bg: "#F5F0EB",
  dark: "#1E1915",
  accent: "#C4622D",
  beige: "#E8D5C4",
  muted: "#6B5D52",
  border: "rgba(30,25,21,0.12)",
};
const fHead = "var(--font-serif-display), 'DM Serif Display', Georgia, serif";
const fBody = "var(--font-body), 'Inter', system-ui, sans-serif";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

type Item = { name: string; desc: string; price: string };

const espresso: Item[] = [
  { name: "Espresso", desc: "Single shot of our house blend", price: "CHF 4.50" },
  { name: "Doppio", desc: "Double shot, served in a ceramic tasso", price: "CHF 5.50" },
  { name: "Macchiato", desc: "Espresso marked with a spoon of foam", price: "CHF 5.00" },
  { name: "Cappuccino", desc: "Espresso, steamed milk, velvet microfoam", price: "CHF 5.80" },
  { name: "Flat White", desc: "Double shot, steamed milk, thin foam", price: "CHF 6.20" },
  { name: "Cortado", desc: "Equal parts espresso and steamed milk", price: "CHF 5.60" },
];

const slow: Item[] = [
  { name: "V60 Pour Over", desc: "300ml. Today's single origin, hand-brewed", price: "CHF 6.50" },
  { name: "Chemex", desc: "400ml. Bright, clean, full of clarity", price: "CHF 7.00" },
  { name: "AeroPress", desc: "250ml. Bolder body, shorter extraction", price: "CHF 6.00" },
];

const cold: Item[] = [
  { name: "Cold Brew", desc: "Steeped for 18 hours. Served over ice", price: "CHF 6.00" },
  { name: "Iced Latte", desc: "Double shot, cold milk, ice", price: "CHF 6.20" },
  { name: "Tonic & Espresso", desc: "Fever-Tree tonic, double shot", price: "CHF 6.80" },
];

const food: Item[] = [
  { name: "Banana Bread", desc: "House-baked daily, walnut topping", price: "CHF 5.50" },
  { name: "Avocado Toast", desc: "Sourdough, poached egg, chili oil", price: "CHF 14.00" },
  { name: "Granola Bowl", desc: "Greek yogurt, seasonal fruit, honey", price: "CHF 12.50" },
  { name: "Almond Croissant", desc: "Flaky, buttery, from Bäckerei Sutter", price: "CHF 4.80" },
];

const beans = [
  { name: "Yirgacheffe", origin: "Ethiopia", notes: "Jasmine · Peach · Bergamot", price: "CHF 18 / 250g" },
  { name: "Finca La Esperanza", origin: "Colombia", notes: "Dark chocolate · Caramel · Orange", price: "CHF 20 / 250g" },
  { name: "Rwanda Rukeri", origin: "Rwanda", notes: "Red berry · Brown sugar · Clean finish", price: "CHF 19 / 250g" },
];

function Section({ title, items }: { title: string; items: Item[] }) {
  return (
    <Reveal>
      <div className="mb-16">
        <h2
          className="pb-4 mb-8 border-b"
          style={{
            fontFamily: fHead,
            fontSize: "clamp(28px, 3vw, 40px)",
            letterSpacing: "-0.01em",
            color: C.dark,
            borderColor: C.border,
          }}
        >
          {title}
        </h2>
        <ul className="space-y-6">
          {items.map((item) => (
            <li key={item.name} className="flex items-start gap-6">
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-4">
                  <span className="font-medium" style={{ fontSize: 17, color: C.dark }}>{item.name}</span>
                  <span
                    aria-hidden
                    className="flex-1 border-b border-dotted"
                    style={{ borderColor: C.border, marginBottom: 6 }}
                  />
                  <span className="font-medium whitespace-nowrap" style={{ color: C.accent }}>{item.price}</span>
                </div>
                <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: C.muted }}>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function KovaMenuPage() {
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <KovaNav />

      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[420px] overflow-hidden">
        <Image src="/images/kova/menu-hero.jpg" alt="Kova menu" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(30,25,21,0.35) 0%, rgba(30,25,21,0.6) 100%)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[11px] md:text-[12px] tracking-[0.4em] uppercase mb-6"
            style={{ color: C.beige }}
          >
            Roasted · Brewed · Baked
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white"
            style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1, letterSpacing: "-0.01em" }}
          >
            The Menu
          </motion.h1>
        </div>
      </section>

      {/* Menu body */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <Section title="Espresso Bar" items={espresso} />
          <Section title="Slow Brew" items={slow} />
          <Section title="Cold" items={cold} />
          <Section title="Food" items={food} />
        </div>
      </section>

      {/* Beans */}
      <section id="beans" className="px-6 md:px-12 py-24" style={{ background: C.beige }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: C.accent }}>Take It Home</p>
              <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, color: C.dark }}>
                Beans, freshly roasted.
              </h2>
              <p className="mt-6 max-w-lg mx-auto text-[15px] leading-relaxed" style={{ color: C.muted }}>
                Every bag is roasted to order. Ships within Switzerland in 24 hours.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beans.map((bean, i) => (
              <Reveal key={bean.name} delay={i * 0.1}>
                <div className="flex flex-col h-full">
                  <div className="relative aspect-[3/4] overflow-hidden mb-6" style={{ borderRadius: 4 }}>
                    <Image src={i === 0 ? "/images/kova/beans-bag.jpg" : i === 1 ? "/images/kova/beans-hero.jpg" : "/images/kova/beans-roasting.jpg"} alt={bean.name} fill className="object-cover" />
                  </div>
                  <p className="text-[11px] tracking-[0.2em] uppercase mb-2" style={{ color: C.accent }}>{bean.origin}</p>
                  <h3 style={{ fontFamily: fHead, fontSize: 26, lineHeight: 1.1, color: C.dark }}>{bean.name}</h3>
                  <p className="mt-3 text-[13px] italic" style={{ color: C.muted }}>{bean.notes}</p>
                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="font-medium text-sm" style={{ color: C.dark }}>{bean.price}</span>
                    <button className="text-xs font-medium tracking-wide uppercase" style={{ color: C.accent }}>
                      Add to order →
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <KovaFooter />
    </div>
  );
}
