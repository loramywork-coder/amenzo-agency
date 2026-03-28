"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Mail, Star, Ticket, Monitor, Volume2, Crown, ChevronRight } from "lucide-react";

const nowShowing = [
  {
    title: "Midnight Horizon",
    genre: "Sci-Fi / Thriller",
    showtimes: ["14:30", "17:45", "20:30", "23:00"],
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=85",
  },
  {
    title: "The Last Harbour",
    genre: "Drama / Romance",
    showtimes: ["13:00", "16:15", "19:00", "21:45"],
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=85",
  },
  {
    title: "Echoes of Time",
    genre: "Action / Adventure",
    showtimes: ["15:00", "18:00", "21:00"],
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=85",
  },
  {
    title: "Velvet Curtain",
    genre: "Mystery / Noir",
    showtimes: ["14:00", "17:00", "20:00", "22:30"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=85",
  },
];

const comingSoon = [
  { title: "Stellar Drift", genre: "Sci-Fi", date: "April 4", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=85" },
  { title: "Island Whispers", genre: "Thriller", date: "April 11", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=85" },
  { title: "Golden Era", genre: "Drama", date: "April 18", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=85" },
];

const pricing = [
  { tier: "Standard", price: 12, features: ["Comfortable seating", "Dolby Digital sound", "Snack bar access"], color: "border-white/10" },
  { tier: "Premium", price: 18, features: ["Extra legroom", "Dolby Atmos sound", "Reserved seating", "Complimentary popcorn"], color: "border-[#F59E0B]", featured: true },
  { tier: "VIP", price: 25, features: ["Luxury recliners", "In-seat service", "Private lounge access", "Gourmet menu", "Priority booking"], color: "border-[#DC2626]" },
];

const screens = [
  { name: "IMAX", icon: Monitor, description: "The ultimate large-format experience. 26-metre screen with laser projection and 12-channel surround sound for unmatched immersion." },
  { name: "Dolby Atmos", icon: Volume2, description: "Sound that moves around you. 64 individually addressable speakers create a three-dimensional soundscape you can feel." },
  { name: "VIP Lounge", icon: Crown, description: "Cinema redefined. Luxury leather recliners, in-seat dining, a private bar, and exclusive screenings in an intimate 40-seat theatre." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function CinemaDemo() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-center py-2 text-sm">
        This is an <strong>AMENZO</strong> design preview.{" "}
        <a href="/work" className="underline font-medium opacity-80 hover:opacity-100">View All Previews</a>{" · "}<a href="/start-project?industry=Other&service=new-website&ref=Reel+House+Cinema" className="underline font-semibold">Get a Quote &rarr;</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-40 bg-[#0C0C0C]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/demos/cinema" className="text-2xl tracking-[0.2em] uppercase font-bold" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-[#DC2626]">Reel</span> House
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wider uppercase">
            {["Now Showing", "Coming Soon", "Prices", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-white/50 hover:text-[#F59E0B] transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a href="#now-showing" className="hidden md:inline-flex items-center gap-2 bg-[#DC2626] text-white px-6 py-2 text-sm tracking-wider uppercase font-semibold hover:bg-[#B91C1C] transition-colors rounded-sm">
            <Ticket size={14} /> Book Tickets
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen pt-10">
        <Image
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=85"
          alt="Reel House Cinema auditorium"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/70 via-[#0C0C0C]/40 to-[#0C0C0C]" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#F59E0B] tracking-[0.3em] uppercase text-sm mb-4 font-medium">Sliema&apos;s Premier Cinema</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide mb-6" style={{ fontFamily: "var(--font-display)" }}>
              The Big Screen Experience
            </h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto mb-8">
              Premium cinema in the heart of Sliema. IMAX, Dolby Atmos, and VIP screens.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#now-showing" className="bg-[#DC2626] text-white px-8 py-3 tracking-wider uppercase text-sm font-semibold hover:bg-[#B91C1C] transition-colors rounded-sm inline-flex items-center gap-2">
                <Ticket size={16} /> Now Showing
              </a>
              <a href="#prices" className="border border-white/20 text-white/80 px-8 py-3 tracking-wider uppercase text-sm font-medium hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors rounded-sm">
                View Prices
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Now Showing */}
      <section id="now-showing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[#DC2626] tracking-[0.25em] uppercase text-xs mb-3 font-semibold text-center">On Screen Now</p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: "var(--font-display)" }}>Now Showing</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {nowShowing.map((movie, i) => (
              <motion.div
                key={movie.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group"
              >
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-4 border border-white/5 group-hover:border-[#DC2626]/40 transition-all duration-300">
                  <Image src={movie.image} alt={movie.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {movie.showtimes.map((t) => (
                        <span key={t} className="text-[10px] bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded text-white/80">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-[2px]">
                    <span className="bg-[#DC2626] text-white px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm">Book Tickets</span>
                  </div>
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ fontFamily: "var(--font-display)" }}>{movie.title}</h3>
                <p className="text-white/40 text-xs">{movie.genre}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section id="coming-soon" className="py-24 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[#F59E0B] tracking-[0.25em] uppercase text-xs mb-3 font-semibold text-center">Upcoming Releases</p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: "var(--font-display)" }}>Coming Soon</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {comingSoon.map((movie, i) => (
              <motion.div
                key={movie.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-4 bg-white/5 rounded-lg p-4 border border-white/5 hover:border-[#F59E0B]/30 transition-all duration-300"
              >
                <div className="relative w-20 h-28 rounded overflow-hidden shrink-0">
                  <Image src={movie.image} alt={movie.title} fill className="object-cover" sizes="80px" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold text-sm mb-1">{movie.title}</h3>
                  <p className="text-white/40 text-xs mb-2">{movie.genre}</p>
                  <span className="text-[#F59E0B] text-xs font-medium">{movie.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="prices" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[#DC2626] tracking-[0.25em] uppercase text-xs mb-3 font-semibold text-center">Ticket Prices</p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ fontFamily: "var(--font-display)" }}>Choose Your Experience</h2>
            <p className="text-white/40 text-center mb-16 max-w-lg mx-auto">Every ticket includes access to our lobby bar and artisan snack counter.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <motion.div
                key={plan.tier}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`relative rounded-xl p-8 border-2 ${plan.color} ${plan.featured ? "bg-[#F59E0B]/5" : "bg-white/[0.02]"} hover:bg-white/[0.04] transition-all duration-300`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-[#0C0C0C] text-[10px] tracking-wider uppercase font-bold px-4 py-1 rounded-full">Most Popular</span>
                )}
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{plan.tier}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">&euro;{plan.price}</span>
                  <span className="text-white/40 text-sm ml-1">/ ticket</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <Star size={12} className="text-[#F59E0B] shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 text-sm uppercase tracking-wider font-semibold rounded-sm transition-colors ${plan.featured ? "bg-[#F59E0B] text-[#0C0C0C] hover:bg-[#D97706]" : "bg-white/10 text-white hover:bg-white/15"}`}>
                  Select
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Screens */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[#F59E0B] tracking-[0.25em] uppercase text-xs mb-3 font-semibold text-center">Technology</p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: "var(--font-display)" }}>Our Screens</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {screens.map((screen, i) => (
              <motion.div
                key={screen.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white/[0.03] border border-white/5 rounded-xl p-8 hover:border-[#DC2626]/30 transition-all duration-300 text-center"
              >
                <screen.icon size={40} className="text-[#DC2626] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{screen.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{screen.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[#DC2626] tracking-[0.25em] uppercase text-xs mb-3 font-semibold text-center">Find Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: "var(--font-display)" }}>Visit Reel House</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-[#DC2626] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-white/50 text-sm">Tower Road, Sliema SLM 1600, Malta</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-[#DC2626] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Box Office</h4>
                  <p className="text-white/50 text-sm">+356 2133 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-[#DC2626] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-white/50 text-sm">info@reelhousecinema.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={20} className="text-[#DC2626] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Box Office Hours</h4>
                  <p className="text-white/50 text-sm">Daily: 10:00 &ndash; Last Screening</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3232.5!2d14.5044!3d35.9125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smt!4v1700000000000!5m2!1sen!2smt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Reel House Cinema Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold tracking-[0.15em] uppercase mb-1" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-[#DC2626]">Reel</span> House
              </p>
              <p className="text-white/30 text-xs">Sliema&apos;s premier cinema experience</p>
            </div>
            <div className="flex gap-8 text-sm text-white/40">
              <a href="#now-showing" className="hover:text-white transition-colors">Now Showing</a>
              <a href="#coming-soon" className="hover:text-white transition-colors">Coming Soon</a>
              <a href="#prices" className="hover:text-white transition-colors">Prices</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-white/20 text-xs">
              This is a fictional demo website created by <a href="https://amenzo.com" className="underline hover:text-white/40">Amenzo</a> to showcase web design capabilities. Reel House Cinema is not a real business. All movie titles are fictional. Images from Unsplash.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
