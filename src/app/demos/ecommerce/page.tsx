"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Search, Heart, Star, Plus, Minus, X } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Extra Virgin Olive Oil",
    description: "Cold-pressed from Maltese Bidni olives, first harvest 2025. Rich, peppery finish.",
    price: 24.90,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=85",
    category: "Pantry",
  },
  {
    id: 2,
    name: "Wildflower Honey",
    description: "Raw, unfiltered honey from Gozo's wild thyme and borage fields. 340g glass jar.",
    price: 18.50,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=85",
    category: "Pantry",
  },
  {
    id: 3,
    name: "Hand-Thrown Ceramic Bowl",
    description: "Artisan stoneware bowl in Mediterranean blue glaze. Handmade in Ta\u2019Qali crafts village.",
    price: 42.00,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=85",
    category: "Homeware",
  },
  {
    id: 4,
    name: "Sea Salt Flakes",
    description: "Hand-harvested from the Marsaskala salt pans. Delicate, mineral-rich finishing salt. 200g.",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=800&q=85",
    category: "Pantry",
  },
  {
    id: 5,
    name: "Woven Linen Napkins (Set of 4)",
    description: "Stonewashed European linen in natural ecru. Pre-shrunk, softens with every wash.",
    price: 36.00,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=85",
    category: "Homeware",
  },
  {
    id: 6,
    name: "Sundried Tomato Spread",
    description: "Slow-roasted cherry tomatoes with capers, garlic, and Maltese herbs. 180g jar.",
    price: 9.90,
    image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=800&q=85",
    category: "Pantry",
  },
];

export default function EcommerceDemo() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [cartOpen, setCartOpen] = useState(false);

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find((p) => p.id === Number(id));
    return sum + (product?.price ?? 0) * qty;
  }, 0);

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (next[id] > 1) next[id]--;
      else delete next[id];
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2416]">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-center py-2 text-sm">
        This is an <strong>AMENZO</strong> design preview.{" "}
        <a href="/work" className="underline font-medium opacity-80 hover:opacity-100">View All Previews</a>{" · "}<a href="/start-project?industry=E-Commerce+%2F+Retail&service=ecommerce&ref=Olive+%26+Stone" className="underline font-semibold">Get a Quote &rarr;</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DED3]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/demos/ecommerce" className="text-2xl tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-[#8B7355]">Olive</span> &amp; Stone
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            {["Shop All", "Pantry", "Homeware", "About"].map((item) => (
              <a key={item} href="#shop" className="text-[#2C2416]/60 hover:text-[#8B7355] transition-colors">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Search size={20} className="text-[#2C2416]/60 cursor-pointer hover:text-[#8B7355] transition-colors" />
            <Heart size={20} className="text-[#2C2416]/60 cursor-pointer hover:text-[#8B7355] transition-colors" />
            <button onClick={() => setCartOpen(true)} className="relative">
              <ShoppingBag size={20} className="text-[#2C2416]/60 hover:text-[#8B7355] transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#8B7355] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={() => setCartOpen(false)} />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#FAF7F2] shadow-xl p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl" style={{ fontFamily: "var(--font-display)" }}>Your Basket</h3>
              <button onClick={() => setCartOpen(false)}><X size={20} /></button>
            </div>
            {Object.keys(cart).length === 0 ? (
              <p className="text-[#2C2416]/50 text-center py-12">Your basket is empty</p>
            ) : (
              <>
                <div className="space-y-4">
                  {Object.entries(cart).map(([id, qty]) => {
                    const product = products.find((p) => p.id === Number(id))!;
                    return (
                      <div key={id} className="flex items-center gap-4 border-b border-[#E5DED3] pb-4">
                        <div className="relative w-16 h-16 shrink-0">
                          <Image src={product.image} alt={product.name} fill className="object-cover rounded" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{product.name}</p>
                          <p className="text-sm text-[#8B7355]">&euro;{product.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => removeFromCart(Number(id))} className="w-7 h-7 border border-[#E5DED3] flex items-center justify-center rounded hover:bg-[#E5DED3] transition-colors">
                            <Minus size={12} />
                          </button>
                          <span className="text-sm w-6 text-center">{qty}</span>
                          <button onClick={() => addToCart(Number(id))} className="w-7 h-7 border border-[#E5DED3] flex items-center justify-center rounded hover:bg-[#E5DED3] transition-colors">
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 pt-4 border-t border-[#E5DED3]">
                  <div className="flex justify-between mb-4">
                    <span className="text-[#2C2416]/60">Subtotal</span>
                    <span className="font-semibold">&euro;{cartTotal.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-[#8B7355] text-white py-3 text-sm tracking-wider uppercase font-semibold hover:bg-[#7A6348] transition-colors rounded">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=1920&q=85"
          alt="Mediterranean artisan products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#2C1810]/70" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* SVG Logo */}
            <svg viewBox="0 0 200 24" className="h-5 w-auto mx-auto mb-6" fill="none">
              <text x="0" y="18" fontFamily="Georgia, serif" fontSize="16" fontStyle="italic" fill="#D4A574">Olive</text>
              <text x="50" y="18" fontFamily="Arial, sans-serif" fontSize="10" fill="#D4A574" opacity="0.6">&amp;</text>
              <text x="66" y="18" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600" fill="#F5F0E8" letterSpacing="3">STONE</text>
            </svg>
            <p className="text-[#D4A574] tracking-[0.3em] uppercase text-xs mb-4 font-medium">Artisan Goods from the Mediterranean</p>
            <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4 text-[#F5F0E8]" style={{ fontFamily: "var(--font-display)" }}>
              Curated with Care
            </h1>
            <p className="text-[#F5F0E8]/60 max-w-lg mx-auto text-sm leading-relaxed">
              Handpicked artisan products from Malta and the Mediterranean. Every item tells a story of tradition, craft, and sun-soaked terroir.
            </p>
            <div className="flex gap-3 justify-center mt-6">
              <a href="#shop" className="px-6 py-2.5 text-xs tracking-[0.15em] uppercase font-semibold bg-[#D4A574] text-[#2C1810] hover:bg-[#C49464] transition-colors">Shop Now</a>
              <a href="#about" className="px-6 py-2.5 text-xs tracking-[0.15em] uppercase font-medium border border-[#F5F0E8]/30 text-[#F5F0E8]/80 hover:border-[#F5F0E8]/50 transition-colors">Our Story</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="shop" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>Shop All</h2>
          <span className="text-sm text-[#2C2416]/40">{products.length} products</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4 bg-[#E5DED3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => addToCart(product.id)}
                  className="absolute bottom-4 left-4 right-4 bg-[#2C2416] text-[#FAF7F2] py-3 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded font-medium"
                >
                  Add to Basket
                </button>
                <button className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart size={14} className="text-[#2C2416]" />
                </button>
              </div>
              <span className="text-xs tracking-wider uppercase text-[#8B7355] mb-1 block">{product.category}</span>
              <h3 className="text-lg mb-1" style={{ fontFamily: "var(--font-display)" }}>{product.name}</h3>
              <p className="text-sm text-[#2C2416]/50 mb-2 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#8B7355] font-semibold">&euro;{product.price.toFixed(2)}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-[#D4A574] text-[#D4A574]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#8B7355] py-16 text-[#FAF7F2]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light tracking-wide mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Join the Table
          </h2>
          <p className="text-[#FAF7F2]/70 mb-6 text-sm">
            Subscribe for new arrivals, seasonal recipes, and 10% off your first order.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-sm placeholder:text-[#FAF7F2]/40 rounded focus:outline-none focus:border-white/40"
            />
            <button className="bg-[#2C2416] text-[#FAF7F2] px-6 py-3 text-sm tracking-wider uppercase font-semibold hover:bg-[#1E1A10] transition-colors rounded whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-[#8B7355] tracking-[0.3em] uppercase text-sm mb-2">Our Showroom</p>
            <h2 className="text-3xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
              Visit Us
            </h2>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.2!2d14.5044!3d35.9125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDU0JzQ1LjAiTiAxNMKwMzAnMTUuOCJF!5e0!3m2!1sen!2smt!4v1"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '12px', filter: 'grayscale(0.3) contrast(1.1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Olive & Stone Showroom Location"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5DED3] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg tracking-wide mb-3" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-[#8B7355]">Olive</span> &amp; Stone
              </h3>
              <p className="text-sm text-[#2C2416]/40">Artisan Mediterranean goods, curated in Malta.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Shop</h4>
              <div className="space-y-2 text-sm text-[#2C2416]/50">
                <p className="hover:text-[#8B7355] cursor-pointer transition-colors">Pantry</p>
                <p className="hover:text-[#8B7355] cursor-pointer transition-colors">Homeware</p>
                <p className="hover:text-[#8B7355] cursor-pointer transition-colors">Gift Sets</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Help</h4>
              <div className="space-y-2 text-sm text-[#2C2416]/50">
                <p className="hover:text-[#8B7355] cursor-pointer transition-colors">Shipping</p>
                <p className="hover:text-[#8B7355] cursor-pointer transition-colors">Returns</p>
                <p className="hover:text-[#8B7355] cursor-pointer transition-colors">Contact Us</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Follow</h4>
              <div className="space-y-2 text-sm text-[#2C2416]/50">
                <p className="hover:text-[#8B7355] cursor-pointer transition-colors">Instagram</p>
                <p className="hover:text-[#8B7355] cursor-pointer transition-colors">Pinterest</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#E5DED3] mt-8 pt-8 text-center text-xs text-[#2C2416]/30">
            &copy; 2026 Olive &amp; Stone. All rights reserved. <span className="mx-2">|</span> This is a demo website built by AMENZO.
          </div>
        </div>
      </footer>
    </div>
  );
}
