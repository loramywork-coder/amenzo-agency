"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Globe, Star, Flame } from "lucide-react";

const menuCategories = [
  {
    name: "Starters",
    items: [
      { name: "Burrata e Pomodorini", description: "Creamy burrata with heirloom cherry tomatoes, basil oil, and aged balsamic reduction", price: "18" },
      { name: "Tuna Tartare", description: "Yellowfin tuna with avocado mousse, crispy shallots, and yuzu-soy dressing", price: "22" },
      { name: "Lobster Bisque", description: "Velvety lobster soup with cognac cream, chive oil, and grilled sourdough", price: "16" },
    ],
  },
  {
    name: "Mains",
    items: [
      { name: "Wagyu Ribeye 300g", description: "A5 wagyu with truffle mash, charred broccolini, and red wine jus", price: "58" },
      { name: "Pan-Seared Sea Bass", description: "Mediterranean sea bass with saffron risotto, fennel confit, and citrus beurre blanc", price: "42" },
      { name: "Duck Breast", description: "Honey-glazed duck with sweet potato puree, wild mushrooms, and cherry gastrique", price: "38" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Dark Chocolate Fondant", description: "Valrhona chocolate with salted caramel core, vanilla bean ice cream", price: "14" },
      { name: "Tiramisu Deconstructed", description: "Espresso-soaked savoiardi, mascarpone cloud, cocoa dust, and amaretto", price: "13" },
      { name: "Citrus Panna Cotta", description: "Sicilian lemon panna cotta with blood orange compote and pistachio crumble", price: "12" },
    ],
  },
];

export default function RestaurantDemo() {
  return (
    <div className="min-h-screen bg-[#0F0A07] text-[#F2E8D9]">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-center py-2 text-sm">
        This is an <strong>AMENZO</strong> demo.{" "}
        <a href="/start-project" className="underline font-semibold">
          Want something like this? Get a Quote &rarr;
        </a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-40 bg-[#0F0A07]/90 backdrop-blur-md border-b border-[#8B6D47]/15">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/demos/restaurant" className="text-2xl tracking-widest" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-[#D4A574]">Porto</span> Valletta
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wider uppercase">
            {["About", "Menu", "Reservations", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[#F2E8D9]/60 hover:text-[#D4A574] transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a
            href="#reservations"
            className="hidden md:inline-block bg-[#D4A574] text-[#0F0A07] px-6 py-2 text-sm tracking-wider uppercase font-semibold hover:bg-[#C49564] transition-colors"
          >
            Reserve a Table
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen pt-10">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
          alt="Porto Valletta dining room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A07] via-[#0F0A07]/50 to-[#0F0A07]/40" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Flame className="mx-auto text-[#D4A574] mb-4" size={28} />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Porto Valletta
            </h1>
            <p className="text-lg text-[#F2E8D9]/60 max-w-md mx-auto mb-2">
              Modern Mediterranean fine dining
            </p>
            <div className="flex items-center justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#D4A574] text-[#D4A574]" />
              ))}
              <span className="text-xs text-[#F2E8D9]/40 ml-2">Michelin Recommended</span>
            </div>
            <a
              href="#menu"
              className="border border-[#D4A574]/40 text-[#D4A574] px-8 py-3 tracking-wider uppercase text-sm hover:bg-[#D4A574]/10 transition-colors"
            >
              Discover the Menu
            </a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#D4A574] tracking-[0.3em] uppercase text-sm mb-4">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Where Tradition Meets Innovation
          </h2>
          <p className="text-[#F2E8D9]/50 leading-relaxed text-lg max-w-2xl mx-auto">
            Nestled in a restored 17th-century palazzo in Valletta&apos;s historic heart, Porto Valletta
            celebrates the rich culinary heritage of the Mediterranean. Executive Chef Isabella Camilleri
            draws on Sicilian, North African, and Maltese traditions, reimagined with contemporary technique
            and the island&apos;s finest seasonal produce.
          </p>
        </motion.div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-[#130E09] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#D4A574] tracking-[0.3em] uppercase text-sm mb-3">The Menu</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
              A Taste of the Mediterranean
            </h2>
          </motion.div>

          {menuCategories.map((category, ci) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <h3 className="text-[#D4A574] tracking-[0.2em] uppercase text-sm mb-8 border-b border-[#D4A574]/20 pb-3">
                {category.name}
              </h3>
              <div className="space-y-8">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-8">
                    <div className="flex-1">
                      <h4 className="text-lg mb-1" style={{ fontFamily: "var(--font-display)" }}>{item.name}</h4>
                      <p className="text-sm text-[#F2E8D9]/40 leading-relaxed">{item.description}</p>
                    </div>
                    <span className="text-[#D4A574] font-semibold text-lg whitespace-nowrap">&euro;{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Atmosphere Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
            "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
            "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80",
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative h-64 md:h-80 overflow-hidden"
            >
              <Image src={src} alt="Restaurant atmosphere" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reservation CTA */}
      <section id="reservations" className="bg-[#130E09] py-24 text-center">
        <div className="max-w-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#D4A574] tracking-[0.3em] uppercase text-sm mb-3">Reservations</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Join Us Tonight
            </h2>
            <p className="text-[#F2E8D9]/50 mb-8 leading-relaxed">
              Secure your table and let us craft an evening to remember. For parties of 8 or more,
              please contact us directly.
            </p>
            <button className="bg-[#D4A574] text-[#0F0A07] px-10 py-4 text-sm tracking-wider uppercase font-semibold hover:bg-[#C49564] transition-colors">
              Reserve a Table
            </button>
            <p className="text-xs text-[#F2E8D9]/30 mt-4">Walk-ins welcome subject to availability</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-[#D4A574]/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl tracking-widest mb-4" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-[#D4A574]">Porto</span> Valletta
              </h3>
              <p className="text-sm text-[#F2E8D9]/40">Modern Mediterranean fine dining in the heart of Valletta.</p>
            </div>
            <div>
              <h4 className="text-[#D4A574] tracking-wider uppercase text-sm mb-4">Hours &amp; Location</h4>
              <div className="space-y-2 text-sm text-[#F2E8D9]/40">
                <p className="flex items-center gap-2 justify-center md:justify-start"><Clock size={14} /> Tue&ndash;Sun: 7:00 PM &ndash; 11:30 PM</p>
                <p className="flex items-center gap-2 justify-center md:justify-start"><MapPin size={14} /> 42 Old Bakery Street, Valletta</p>
                <p className="flex items-center gap-2 justify-center md:justify-start"><Phone size={14} /> +356 2122 8800</p>
              </div>
            </div>
            <div>
              <h4 className="text-[#D4A574] tracking-wider uppercase text-sm mb-4">Connect</h4>
              <div className="flex gap-4 text-sm text-[#F2E8D9]/40 justify-center md:justify-start">
                <span className="flex items-center gap-1 hover:text-[#D4A574] cursor-pointer transition-colors"><Globe size={14} /> @portovalletta</span>
              </div>
            </div>
          </div>
          <div className="border-t border-[#D4A574]/10 mt-12 pt-8 text-center text-xs text-[#F2E8D9]/25">
            &copy; 2026 Porto Valletta. All rights reserved. <span className="mx-2">|</span> This is a demo website built by AMENZO.
          </div>
        </div>
      </footer>
    </div>
  );
}
