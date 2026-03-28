"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ShoppingBag, Utensils, PartyPopper, ChevronRight, Star, Car, Wifi } from "lucide-react";

const stores = [
  { name: "Zara", category: "Fashion", floor: "Ground Floor", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=85" },
  { name: "H&M", category: "Fashion & Home", floor: "First Floor", image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=85" },
  { name: "Nike", category: "Sportswear", floor: "Ground Floor", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=85" },
  { name: "Massimo Dutti", category: "Premium Fashion", floor: "First Floor", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=85" },
  { name: "Sephora", category: "Beauty & Fragrance", floor: "Ground Floor", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=85" },
  { name: "Pandora", category: "Jewellery & Accessories", floor: "First Floor", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=85" },
];

const dining = [
  { name: "Waterbiscuit", cuisine: "Mediterranean", description: "Fresh seafood and seasonal dishes with harbour views", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=85" },
  { name: "Mango Tango", cuisine: "Asian Fusion", description: "Bold flavours from across Asia, from sushi to pad thai", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=85" },
  { name: "La Bottega", cuisine: "Italian", description: "Handmade pasta, wood-fired pizza, and Italian wines", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85" },
  { name: "The Coffee Club", cuisine: "Caf&eacute; & Bakery", description: "Specialty coffee, artisan pastries, and light bites", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=85" },
];

const events = [
  { title: "Spring Fashion Week", date: "April 5 - 12", description: "Exclusive previews, runway shows, and up to 40% off at participating stores." },
  { title: "Kids Fun Day", date: "Every Saturday", description: "Free face painting, balloon artists, and interactive workshops for children." },
  { title: "Late Night Shopping", date: "Every Thursday", description: "Stores open until 10pm with live music, special offers, and complimentary drinks." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function MallDemo() {
  return (
    <div className="min-h-screen bg-white text-[#1E293B]">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-center py-2 text-sm">
        This is an <strong>AMENZO</strong> design preview.{" "}
        <a href="/work" className="underline font-medium opacity-80 hover:opacity-100">View All Previews</a>{" · "}<a href="/start-project?industry=E-Commerce+%2F+Retail&service=new-website&ref=The+Point+Malta" className="underline font-semibold">Get a Quote &rarr;</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/demos/mall" className="text-2xl tracking-[0.15em] uppercase font-bold" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-[#F43F5E]">The</span> Point
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["Stores", "Dining", "Entertainment", "Visit"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[#1E293B]/50 hover:text-[#F43F5E] transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a href="#stores" className="hidden md:inline-flex items-center gap-2 bg-[#F43F5E] text-white px-6 py-2 text-sm font-semibold rounded-lg hover:bg-[#E11D48] transition-colors">
            <ShoppingBag size={14} /> Explore Stores
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen pt-10">
        <Image
          src="https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1920&q=85"
          alt="Harbour Square interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-white/80 tracking-[0.3em] uppercase text-sm mb-4 font-medium">Tign&eacute; Point, Sliema</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide mb-6 text-white" style={{ fontFamily: "var(--font-display)" }}>
              Shop. Dine. Experience.
            </h1>
            <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
              Malta&apos;s premier shopping destination with over 80 stores, world-class dining, and entertainment.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#stores" className="bg-[#F43F5E] text-white px-8 py-3 text-sm font-semibold rounded-lg hover:bg-[#E11D48] transition-colors inline-flex items-center gap-2">
                <ShoppingBag size={16} /> Explore Stores
              </a>
              <a href="#visit" className="bg-white/90 backdrop-blur-sm text-[#1E293B] px-8 py-3 text-sm font-medium rounded-lg hover:bg-white transition-colors">
                Plan Your Visit
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Stores */}
      <section id="stores" className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[#F43F5E] tracking-[0.25em] uppercase text-xs mb-3 font-semibold text-center">Over 80 Stores</p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ fontFamily: "var(--font-display)" }}>Featured Stores</h2>
            <p className="text-[#1E293B]/50 text-center mb-16 max-w-lg mx-auto">From global fashion brands to local boutiques, discover your favourites under one roof.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stores.map((store, i) => (
              <motion.div
                key={store.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-white rounded-xl overflow-hidden border border-[#E2E8F0] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={store.image} alt={store.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-[#1E293B] px-2.5 py-1 rounded-full">
                    {store.floor}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-display)" }}>{store.name}</h3>
                  <p className="text-[#1E293B]/40 text-sm">{store.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center gap-2 text-[#F43F5E] font-semibold text-sm hover:gap-3 transition-all">
              View All 80+ Stores <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Dining */}
      <section id="dining" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[#F43F5E] tracking-[0.25em] uppercase text-xs mb-3 font-semibold text-center">Food &amp; Drink</p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ fontFamily: "var(--font-display)" }}>Dining</h2>
            <p className="text-[#1E293B]/50 text-center mb-16 max-w-lg mx-auto">From casual bites to fine dining, savour flavours from around the world.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {dining.map((restaurant, i) => (
              <motion.div
                key={restaurant.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group flex gap-5 bg-[#F8FAFC] rounded-xl p-4 border border-[#E2E8F0] hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-28 h-28 rounded-lg overflow-hidden shrink-0">
                  <Image src={restaurant.image} alt={restaurant.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="112px" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[#F43F5E] text-[10px] tracking-wider uppercase font-semibold mb-1">{restaurant.cuisine}</span>
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-display)" }}>{restaurant.name}</h3>
                  <p className="text-[#1E293B]/50 text-sm">{restaurant.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's On */}
      <section id="entertainment" className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[#F43F5E] tracking-[0.25em] uppercase text-xs mb-3 font-semibold text-center">Events &amp; Promotions</p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: "var(--font-display)" }}>What&apos;s On</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-xl p-8 border border-[#E2E8F0] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <PartyPopper size={28} className="text-[#F43F5E] mb-4" />
                <span className="text-[#F43F5E] text-xs font-semibold tracking-wider uppercase">{event.date}</span>
                <h3 className="font-bold text-xl mt-2 mb-3" style={{ fontFamily: "var(--font-display)" }}>{event.title}</h3>
                <p className="text-[#1E293B]/50 text-sm leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours & Info */}
      <section id="visit" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[#F43F5E] tracking-[0.25em] uppercase text-xs mb-3 font-semibold text-center">Plan Ahead</p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: "var(--font-display)" }}>Visit Us</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0]">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
                  <Clock size={20} className="text-[#F43F5E]" /> Opening Hours
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-[#1E293B]/60">Monday &ndash; Friday</span><span className="font-semibold">10:00 &ndash; 21:00</span></div>
                  <div className="flex justify-between"><span className="text-[#1E293B]/60">Saturday</span><span className="font-semibold">09:00 &ndash; 22:00</span></div>
                  <div className="flex justify-between"><span className="text-[#1E293B]/60">Sunday</span><span className="font-semibold">10:00 &ndash; 20:00</span></div>
                  <div className="flex justify-between"><span className="text-[#1E293B]/60">Public Holidays</span><span className="font-semibold">10:00 &ndash; 18:00</span></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#F8FAFC] rounded-xl p-5 border border-[#E2E8F0] text-center">
                  <Car size={24} className="text-[#F43F5E] mx-auto mb-2" />
                  <p className="text-xs font-semibold">1,200 Parking Spots</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-xl p-5 border border-[#E2E8F0] text-center">
                  <Wifi size={24} className="text-[#F43F5E] mx-auto mb-2" />
                  <p className="text-xs font-semibold">Free Wi-Fi</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-xl p-5 border border-[#E2E8F0] text-center">
                  <ShoppingBag size={24} className="text-[#F43F5E] mx-auto mb-2" />
                  <p className="text-xs font-semibold">Personal Shopper</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-[#F43F5E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Address</h4>
                    <p className="text-[#1E293B]/50 text-sm">Tign&eacute; Point, Sliema TPO 0001, Malta</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-[#F43F5E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Phone</h4>
                    <p className="text-[#1E293B]/50 text-sm">+356 2060 1000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-[#F43F5E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Email</h4>
                    <p className="text-[#1E293B]/50 text-sm">info@harboursquare.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3232.5!2d14.5020!3d35.9150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smt!4v1700000000000!5m2!1sen!2smt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Harbour Square Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E293B] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold tracking-[0.15em] uppercase mb-1" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-[#F43F5E]">The</span> Point
              </p>
              <p className="text-white/40 text-xs">Malta&apos;s premier shopping destination</p>
            </div>
            <div className="flex gap-8 text-sm text-white/40">
              <a href="#stores" className="hover:text-white transition-colors">Stores</a>
              <a href="#dining" className="hover:text-white transition-colors">Dining</a>
              <a href="#entertainment" className="hover:text-white transition-colors">What&apos;s On</a>
              <a href="#visit" className="hover:text-white transition-colors">Visit</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/20 text-xs">
              This is a fictional demo website created by <a href="https://amenzo.com" className="underline hover:text-white/40">Amenzo</a> to showcase web design capabilities. Harbour Square is not a real business. All store names are used for illustrative purposes only. Images from Unsplash.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
