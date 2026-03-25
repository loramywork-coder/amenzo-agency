"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Phone, Mail, MapPin, Clock, Shield, CheckCircle, Wrench, Droplets, ThermometerSun, ChevronRight } from "lucide-react";

const services = [
  { name: "Emergency Repairs", description: "24/7 emergency callout for burst pipes, leaks, and blocked drains", price: "From \u20AC85", icon: Wrench },
  { name: "Bathroom Installation", description: "Full bathroom design and installation, from budget to luxury", price: "From \u20AC2,500", icon: Droplets },
  { name: "Boiler Service & Repair", description: "Annual servicing, repairs, and new boiler installations", price: "From \u20AC120", icon: ThermometerSun },
  { name: "Pipe Replacement", description: "Copper and PVC pipe replacement for older Maltese properties", price: "From \u20AC350", icon: Wrench },
  { name: "Water Heater Install", description: "Solar and electric water heater supply and installation", price: "From \u20AC450", icon: ThermometerSun },
  { name: "Drain Unblocking", description: "High-pressure jetting and CCTV drain inspection", price: "From \u20AC95", icon: Droplets },
];

const reviews = [
  {
    name: "Maria Vella",
    rating: 5,
    date: "2 weeks ago",
    text: "Daniel came out within the hour when our kitchen pipe burst on a Saturday evening. Professional, clean, and very reasonably priced. He even followed up the next day to make sure everything was fine. Highly recommend!",
  },
  {
    name: "Joe Borg",
    rating: 5,
    date: "1 month ago",
    text: "Had Daniel install a full new bathroom in our Valletta townhouse. The workmanship is outstanding, he was on time every day, and the final result exceeded our expectations. Fair pricing and honest communication throughout.",
  },
  {
    name: "Sandra Camilleri",
    rating: 5,
    date: "3 months ago",
    text: "Booked Daniel for our annual boiler service. He was punctual, thorough, and took the time to explain everything he was checking. Also spotted a potential issue and fixed it on the spot. Will be using him for all future plumbing needs.",
  },
];

export default function TradesDemo() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#1A2332]">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-center py-2 text-sm">
        This is an <strong>AMENZO</strong> design preview.{" "}
        <a href="/start-project" className="underline font-semibold">
          Want something like this? Get a Quote &rarr;
        </a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E5EF] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/demos/trades" className="text-xl font-bold flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
            <Droplets size={24} className="text-[#2563EB]" />
            Daniel&apos;s Plumbing
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["About", "Services", "Reviews", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[#1A2332]/60 hover:text-[#2563EB] transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-[#2563EB] text-white px-6 py-2.5 text-sm font-semibold rounded-lg hover:bg-[#1D4ED8] transition-colors flex items-center gap-2"
          >
            <Phone size={14} /> Get a Quote
          </a>
        </div>
      </nav>

      {/* Hero / Profile */}
      <section id="about" className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-sm border border-[#E2E5EF] p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shrink-0 border-4 border-[#2563EB]/10">
                <Image
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=3840&q=90"
                  alt="Daniel - Master Plumber"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    Daniel Grech
                  </h1>
                  <span className="bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle size={12} /> Verified Pro
                  </span>
                </div>
                <p className="text-[#1A2332]/50 font-medium mb-3">Master Plumber &bull; Licensed &amp; Insured &bull; Malta &amp; Gozo</p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="text-sm text-[#1A2332]/50">5.0 (127 reviews)</span>
                </div>
                <p className="text-[#1A2332]/60 leading-relaxed mb-6 max-w-xl">
                  With over 18 years of experience in residential and commercial plumbing across Malta and Gozo,
                  I take pride in delivering reliable, honest work at fair prices. From emergency repairs to full
                  bathroom installations, no job is too big or too small. Fully licensed, insured, and committed
                  to leaving every home better than I found it.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-1.5 text-sm text-[#1A2332]/50 bg-[#F5F7FA] px-3 py-1.5 rounded-lg">
                    <Shield size={14} className="text-[#2563EB]" /> Fully Insured
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-[#1A2332]/50 bg-[#F5F7FA] px-3 py-1.5 rounded-lg">
                    <Clock size={14} className="text-[#2563EB]" /> Same-Day Service
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-[#1A2332]/50 bg-[#F5F7FA] px-3 py-1.5 rounded-lg">
                    <CheckCircle size={14} className="text-[#2563EB]" /> Free Estimates
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-5xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>Services &amp; Pricing</h2>
          <p className="text-sm text-[#1A2332]/40 mt-1">Transparent pricing with no hidden fees</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-xl border border-[#E2E5EF] p-6 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2563EB]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#2563EB]/20 transition-colors">
                  <service.icon size={20} className="text-[#2563EB]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>{service.name}</h3>
                    <span className="text-[#2563EB] font-semibold text-sm whitespace-nowrap">{service.price}</span>
                  </div>
                  <p className="text-sm text-[#1A2332]/50">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-white py-24 border-y border-[#E2E5EF]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>Customer Reviews</h2>
              <p className="text-sm text-[#1A2332]/40 mt-1">What clients say about Daniel&apos;s work</p>
            </div>
            <div className="text-right">
              <div className="flex gap-0.5 justify-end">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="text-sm text-[#1A2332]/40 mt-1">5.0 average from 127 reviews</p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#F5F7FA] rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2563EB]/10 rounded-full flex items-center justify-center text-[#2563EB] font-bold text-sm">
                      {review.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-xs text-[#1A2332]/40">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[#1A2332]/60 leading-relaxed">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Quote CTA */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Need a Plumber?
            </h2>
            <p className="text-[#1A2332]/50 mb-8 leading-relaxed">
              Get in touch for a free, no-obligation quote. I respond to all enquiries within 2 hours
              during business hours. Emergency callouts available 24/7.
            </p>
            <div className="space-y-4">
              <a href="tel:+35679123456" className="flex items-center gap-3 text-[#1A2332]/70 hover:text-[#2563EB] transition-colors">
                <div className="w-10 h-10 bg-[#2563EB]/10 rounded-lg flex items-center justify-center">
                  <Phone size={18} className="text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-sm text-[#1A2332]/40">Call or WhatsApp</p>
                  <p className="font-semibold">+356 7912 3456</p>
                </div>
              </a>
              <a href="mailto:daniel@danielsplumbing.mt" className="flex items-center gap-3 text-[#1A2332]/70 hover:text-[#2563EB] transition-colors">
                <div className="w-10 h-10 bg-[#2563EB]/10 rounded-lg flex items-center justify-center">
                  <Mail size={18} className="text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-sm text-[#1A2332]/40">Email</p>
                  <p className="font-semibold">daniel@danielsplumbing.mt</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-[#1A2332]/70">
                <div className="w-10 h-10 bg-[#2563EB]/10 rounded-lg flex items-center justify-center">
                  <MapPin size={18} className="text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-sm text-[#1A2332]/40">Service Area</p>
                  <p className="font-semibold">All of Malta &amp; Gozo</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#1A2332]/70">
                <div className="w-10 h-10 bg-[#2563EB]/10 rounded-lg flex items-center justify-center">
                  <Clock size={18} className="text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-sm text-[#1A2332]/40">Working Hours</p>
                  <p className="font-semibold">Mon&ndash;Sat 7:00 AM &ndash; 7:00 PM (Emergency 24/7)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-[#E2E5EF] p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>Request a Quote</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-[#1A2332]/60 block mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-[#F5F7FA] border border-[#E2E5EF] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#1A2332]/60 block mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+356 ..."
                  className="w-full bg-[#F5F7FA] border border-[#E2E5EF] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#1A2332]/60 block mb-1">Service Needed</label>
                <select className="w-full bg-[#F5F7FA] border border-[#E2E5EF] rounded-lg px-4 py-3 text-sm text-[#1A2332]/60 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20">
                  <option>Select a service</option>
                  {services.map((s) => (
                    <option key={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-[#1A2332]/60 block mb-1">Description</label>
                <textarea
                  rows={3}
                  placeholder="Describe the issue or what you need..."
                  className="w-full bg-[#F5F7FA] border border-[#E2E5EF] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 resize-none"
                />
              </div>
              <button className="w-full bg-[#2563EB] text-white py-3 text-sm font-semibold rounded-lg hover:bg-[#1D4ED8] transition-colors flex items-center justify-center gap-2">
                Send Quote Request <ChevronRight size={14} />
              </button>
              <p className="text-xs text-[#1A2332]/30 text-center">Free estimate. No obligation. Usually responds within 2 hours.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2332] text-white py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Droplets size={20} className="text-[#60A5FA]" />
              <span className="font-bold" style={{ fontFamily: "var(--font-display)" }}>Daniel&apos;s Plumbing</span>
            </div>
            <p className="text-sm text-white/40">Licensed Master Plumber &bull; Malta &amp; Gozo &bull; Est. 2008</p>
            <a href="tel:+35679123456" className="text-sm text-[#60A5FA] font-semibold hover:underline">
              +356 7912 3456
            </a>
          </div>
          <div className="border-t border-white/10 mt-6 pt-6 text-center text-xs text-white/20">
            &copy; 2026 Daniel&apos;s Plumbing. All rights reserved. <span className="mx-2">|</span> This is a demo website built by AMENZO.
          </div>
        </div>
      </footer>
    </div>
  );
}
