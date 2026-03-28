"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, MapPin, Phone, Mail, Calendar, ChevronRight, Wifi, Car, Utensils, Waves } from "lucide-react";

const rooms = [
  {
    name: "Deluxe Room",
    price: 189,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=3840&q=90",
    description: "Elegant 35m\u00B2 room with king bed, marble bathroom, and harbour views. Complimentary minibar and premium linens.",
    features: ["King Bed", "Harbour View", "Marble Bath"],
  },
  {
    name: "Executive Suite",
    price: 349,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=3840&q=90",
    description: "Spacious 55m\u00B2 suite featuring separate living area, rain shower, soaking tub, and panoramic sea views.",
    features: ["Living Area", "Sea View", "Soaking Tub"],
  },
  {
    name: "Presidential Suite",
    price: 699,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=3840&q=90",
    description: "Our finest 120m\u00B2 suite with private terrace, dining room, butler service, and breathtaking Mediterranean panorama.",
    features: ["Private Terrace", "Butler Service", "Dining Room"],
  },
];

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Valet Parking" },
  { icon: Utensils, label: "Fine Dining" },
  { icon: Waves, label: "Infinity Pool" },
];

export default function HotelDemo() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F0E8]">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-center py-2 text-sm">
        This is an <strong>AMENZO</strong> design preview.{" "}
        <a href="/work" className="underline font-medium opacity-80 hover:opacity-100">View All Previews</a>{" · "}<a href="/start-project?industry=Hotels+%26+Resorts&service=new-website&ref=Grand+Harbour+Hotel" className="underline font-semibold">Get a Quote &rarr;</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-40 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#C9A96E]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/demos/hotel" className="text-2xl tracking-widest uppercase" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-[#C9A96E]">Grand</span> Harbour
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wider uppercase">
            {["Home", "Rooms", "Dining", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[#F5F0E8]/70 hover:text-[#C9A96E] transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a
            href="#booking"
            className="hidden md:inline-block bg-[#C9A96E] text-[#0D0D0D] px-6 py-2 text-sm tracking-wider uppercase font-semibold hover:bg-[#B8955E] transition-colors"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative h-screen pt-10">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=3840&q=90"
          alt="Grand Harbour Hotel exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/60 via-[#0D0D0D]/30 to-[#0D0D0D]" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-sm mb-4">
              Malta&apos;s Finest Waterfront Retreat
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Grand Harbour Hotel
            </h1>
            <p className="text-lg text-[#F5F0E8]/70 max-w-xl mx-auto mb-8">
              Timeless elegance meets Mediterranean warmth on the historic Valletta waterfront.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#rooms"
                className="bg-[#C9A96E] text-[#0D0D0D] px-8 py-3 tracking-wider uppercase text-sm font-semibold hover:bg-[#B8955E] transition-colors"
              >
                Explore Rooms
              </a>
              <a
                href="#dining"
                className="border border-[#C9A96E]/50 text-[#C9A96E] px-8 py-3 tracking-wider uppercase text-sm hover:bg-[#C9A96E]/10 transition-colors"
              >
                Fine Dining
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Amenities Bar */}
      <section className="border-y border-[#C9A96E]/20 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-3 text-[#C9A96E]">
              <Icon size={20} />
              <span className="text-sm tracking-wider uppercase text-[#F5F0E8]/70">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-sm mb-3">Accommodations</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            Our Rooms &amp; Suites
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-[#141414] border border-[#C9A96E]/10 overflow-hidden hover:border-[#C9A96E]/30 transition-colors"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
                    {room.name}
                  </h3>
                  <span className="text-[#C9A96E] font-semibold">&euro;{room.price}<span className="text-xs text-[#F5F0E8]/50">/night</span></span>
                </div>
                <p className="text-sm text-[#F5F0E8]/60 mb-4 leading-relaxed">{room.description}</p>
                <div className="flex gap-3 mb-5">
                  {room.features.map((f) => (
                    <span key={f} className="text-xs tracking-wider uppercase text-[#C9A96E]/80 border border-[#C9A96E]/20 px-2 py-1">
                      {f}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-[#C9A96E] text-[#0D0D0D] py-3 text-sm tracking-wider uppercase font-semibold hover:bg-[#B8955E] transition-colors flex items-center justify-center gap-2">
                  Reserve <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dining */}
      <section id="dining" className="bg-[#141414] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-sm mb-3">Culinary Excellence</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6" style={{ fontFamily: "var(--font-display)" }}>
                The Harbour Table
              </h2>
              <p className="text-[#F5F0E8]/60 leading-relaxed mb-6">
                Our award-winning restaurant blends traditional Mediterranean flavours with modern technique.
                Chef Marco Fenech sources the finest local ingredients to create an unforgettable dining experience
                overlooking the Grand Harbour.
              </p>
              <div className="space-y-3 mb-8">
                <p className="text-sm text-[#F5F0E8]/70"><span className="text-[#C9A96E]">Breakfast</span> &mdash; 7:00 AM &ndash; 10:30 AM</p>
                <p className="text-sm text-[#F5F0E8]/70"><span className="text-[#C9A96E]">Lunch</span> &mdash; 12:00 PM &ndash; 3:00 PM</p>
                <p className="text-sm text-[#F5F0E8]/70"><span className="text-[#C9A96E]">Dinner</span> &mdash; 7:00 PM &ndash; 11:00 PM</p>
              </div>
              <button className="border border-[#C9A96E]/50 text-[#C9A96E] px-8 py-3 tracking-wider uppercase text-sm hover:bg-[#C9A96E]/10 transition-colors">
                View Menu
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=3840&q=90"
                alt="The Harbour Table dining room"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book Your Stay */}
      <section id="booking" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-sm mb-3">Your Stay Awaits</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Book Your Stay
              </h2>
              <p className="text-[#F5F0E8]/60 leading-relaxed max-w-xl mx-auto">
                Whether for a romantic getaway, a family holiday, or a business retreat, Grand Harbour Hotel
                promises an experience that lingers in memory long after departure.
              </p>
            </div>

            <div className="bg-[#141414] border border-[#C9A96E]/20 p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-2">Check-in Date</label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C9A96E]" />
                    <input
                      type="date"
                      className="w-full bg-[#0D0D0D] border border-[#C9A96E]/20 pl-10 pr-4 py-3 text-[#F5F0E8] text-sm focus:outline-none focus:border-[#C9A96E]/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-2">Check-out Date</label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C9A96E]" />
                    <input
                      type="date"
                      className="w-full bg-[#0D0D0D] border border-[#C9A96E]/20 pl-10 pr-4 py-3 text-[#F5F0E8] text-sm focus:outline-none focus:border-[#C9A96E]/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-2">Number of Guests</label>
                  <select defaultValue="2" className="w-full bg-[#0D0D0D] border border-[#C9A96E]/20 px-4 py-3 text-[#F5F0E8] text-sm focus:outline-none focus:border-[#C9A96E]/50 transition-colors appearance-none cursor-pointer">
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-2">Room Type</label>
                  <select className="w-full bg-[#0D0D0D] border border-[#C9A96E]/20 px-4 py-3 text-[#F5F0E8] text-sm focus:outline-none focus:border-[#C9A96E]/50 transition-colors appearance-none cursor-pointer">
                    <option>Deluxe Room</option>
                    <option>Junior Suite</option>
                    <option>Presidential Suite</option>
                  </select>
                </div>
              </div>
              <button
                onClick={() => alert("This is a demo \u2014 in a real implementation, this would check live availability.")}
                className="w-full bg-[#C9A96E] text-[#0D0D0D] py-4 text-sm tracking-[0.2em] uppercase font-semibold hover:bg-[#B8955E] transition-colors flex items-center justify-center gap-2"
              >
                <Calendar size={16} /> Check Availability
              </button>
              <p className="text-center text-xs text-[#F5F0E8]/30 mt-4">Best rate guaranteed when you book directly with us</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Find Us */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-sm mb-3">Location</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
              Find Us
            </h2>
          </motion.div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.8!2d14.5148!3d35.8978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDUzJzUyLjEiTiAxNMKwMzAnNTMuMyJF!5e0!3m2!1sen!2smt!4v1"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '12px', filter: 'grayscale(0.3) contrast(1.1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Grand Harbour Hotel Location"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#141414] border-t border-[#C9A96E]/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-[#C9A96E]">Grand</span> Harbour
              </h3>
              <p className="text-sm text-[#F5F0E8]/50 leading-relaxed">
                Timeless luxury on the Valletta waterfront since 1923.
              </p>
            </div>
            <div>
              <h4 className="text-[#C9A96E] tracking-wider uppercase text-sm mb-4">Location</h4>
              <p className="text-sm text-[#F5F0E8]/50 flex items-start gap-2">
                <MapPin size={14} className="mt-1 shrink-0" />
                Pinto Wharf, Valletta Waterfront, VLT 1913, Malta
              </p>
            </div>
            <div>
              <h4 className="text-[#C9A96E] tracking-wider uppercase text-sm mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-[#F5F0E8]/50">
                <p className="flex items-center gap-2"><Phone size={14} /> +356 2124 0000</p>
                <p className="flex items-center gap-2"><Mail size={14} /> reservations@grandharbour.mt</p>
              </div>
            </div>
            <div>
              <h4 className="text-[#C9A96E] tracking-wider uppercase text-sm mb-4">Follow Us</h4>
              <div className="flex gap-4 text-sm text-[#F5F0E8]/50">
                <span className="hover:text-[#C9A96E] cursor-pointer transition-colors">Instagram</span>
                <span className="hover:text-[#C9A96E] cursor-pointer transition-colors">Facebook</span>
              </div>
            </div>
          </div>
          <div className="border-t border-[#C9A96E]/10 mt-12 pt-8 text-center text-xs text-[#F5F0E8]/30">
            &copy; 2026 Grand Harbour Hotel. All rights reserved. <span className="mx-2">|</span> This is a demo website built by AMENZO.
          </div>
        </div>
      </section>

      {/* Star Ratings */}
      <div className="hidden">
        <Star />
      </div>
    </div>
  );
}
