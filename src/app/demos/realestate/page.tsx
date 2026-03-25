"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, MapPin, Bed, Bath, Maximize, Heart, Phone, Mail, ChevronDown } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Seafront Penthouse in Sliema",
    price: "€1,250,000",
    location: "Sliema, Malta",
    beds: 3,
    baths: 2,
    area: "185m\u00B2",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    tag: "Featured",
  },
  {
    id: 2,
    title: "Converted Farmhouse in Gozo",
    price: "€890,000",
    location: "Xaghra, Gozo",
    beds: 4,
    baths: 3,
    area: "280m\u00B2",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    tag: "New",
  },
  {
    id: 3,
    title: "Modern Apartment in St Julian's",
    price: "€485,000",
    location: "St Julian's, Malta",
    beds: 2,
    baths: 1,
    area: "95m\u00B2",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    tag: null,
  },
  {
    id: 4,
    title: "Townhouse in Valletta",
    price: "€1,650,000",
    location: "Valletta, Malta",
    beds: 5,
    baths: 3,
    area: "320m\u00B2",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    tag: "Premium",
  },
];

const stats = [
  { value: "500+", label: "Properties Listed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12", label: "Years Experience" },
  { value: "€2.1B", label: "Properties Sold" },
];

export default function RealEstateDemo() {
  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#1A1D2B]">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-center py-2 text-sm">
        This is an <strong>AMENZO</strong> demo.{" "}
        <a href="/start-project" className="underline font-semibold">
          Want something like this? Get a Quote &rarr;
        </a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E5EF] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/demos/realestate" className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-[#2563EB]">Malta</span>Living
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            {["Buy", "Rent", "New Developments", "About"].map((item) => (
              <a key={item} href="#listings" className="text-[#1A1D2B]/60 hover:text-[#2563EB] transition-colors font-medium">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:inline-block text-sm text-[#2563EB] font-semibold hover:underline">
              List Your Property
            </a>
            <a
              href="#contact"
              className="bg-[#2563EB] text-white px-5 py-2 text-sm font-semibold rounded-lg hover:bg-[#1D4ED8] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Find Your Dream Home<br />
              <span className="text-[#2563EB]">in Malta</span>
            </h1>
            <p className="text-lg text-[#1A1D2B]/50 max-w-xl mx-auto">
              Browse premium properties across the Maltese Islands. From waterfront penthouses to historic townhouses.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-[#E2E5EF] p-4 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1D2B]/30" />
                <input
                  type="text"
                  placeholder="Search by location, property type..."
                  className="w-full pl-10 pr-4 py-3 bg-[#F8F9FC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                />
              </div>
              <div className="flex gap-3">
                <select className="bg-[#F8F9FC] px-4 py-3 rounded-lg text-sm text-[#1A1D2B]/60 focus:outline-none appearance-none cursor-pointer">
                  <option>Buy</option>
                  <option>Rent</option>
                </select>
                <select className="bg-[#F8F9FC] px-4 py-3 rounded-lg text-sm text-[#1A1D2B]/60 focus:outline-none appearance-none cursor-pointer">
                  <option>Any Price</option>
                  <option>&euro;200k &ndash; &euro;500k</option>
                  <option>&euro;500k &ndash; &euro;1M</option>
                  <option>&euro;1M+</option>
                </select>
                <button className="bg-[#2563EB] text-white px-8 py-3 text-sm font-semibold rounded-lg hover:bg-[#1D4ED8] transition-colors whitespace-nowrap flex items-center gap-2">
                  <Search size={16} /> Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-[#2563EB]" style={{ fontFamily: "var(--font-display)" }}>{stat.value}</p>
              <p className="text-sm text-[#1A1D2B]/40 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Listings */}
      <section id="listings" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>Featured Properties</h2>
            <p className="text-sm text-[#1A1D2B]/40 mt-1">Handpicked listings from across the islands</p>
          </div>
          <button className="text-sm text-[#2563EB] font-semibold flex items-center gap-1 hover:underline">
            Sort by <ChevronDown size={14} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E2E5EF] hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {property.tag && (
                  <span className="absolute top-4 left-4 bg-[#2563EB] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {property.tag}
                  </span>
                )}
                <button className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm">
                  <Heart size={16} className="text-[#1A1D2B]/50" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                    {property.title}
                  </h3>
                  <span className="text-xl font-bold text-[#2563EB] whitespace-nowrap ml-4">{property.price}</span>
                </div>
                <p className="flex items-center gap-1 text-sm text-[#1A1D2B]/50 mb-4">
                  <MapPin size={14} /> {property.location}
                </p>
                <div className="flex items-center gap-6 pt-4 border-t border-[#E2E5EF]">
                  <span className="flex items-center gap-1.5 text-sm text-[#1A1D2B]/60">
                    <Bed size={16} className="text-[#2563EB]" /> {property.beds} Beds
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-[#1A1D2B]/60">
                    <Bath size={16} className="text-[#2563EB]" /> {property.baths} Baths
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-[#1A1D2B]/60">
                    <Maximize size={16} className="text-[#2563EB]" /> {property.area}
                  </span>
                  <button className="ml-auto text-sm text-[#2563EB] font-semibold hover:underline">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-[#2563EB] text-[#2563EB] px-8 py-3 text-sm font-semibold rounded-lg hover:bg-[#2563EB] hover:text-white transition-colors">
            View All Properties
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2563EB] py-16 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Our experienced agents are ready to help you navigate the Maltese property market. Get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2563EB] px-8 py-3 text-sm font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Schedule a Viewing
            </button>
            <button className="border border-white/30 text-white px-8 py-3 text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Call +356 2133 0000
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-[#E2E5EF] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-[#2563EB]">Malta</span>Living
              </h3>
              <p className="text-sm text-[#1A1D2B]/40">Your trusted partner in Maltese real estate since 2014.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Properties</h4>
              <div className="space-y-2 text-sm text-[#1A1D2B]/50">
                <p className="hover:text-[#2563EB] cursor-pointer transition-colors">For Sale</p>
                <p className="hover:text-[#2563EB] cursor-pointer transition-colors">For Rent</p>
                <p className="hover:text-[#2563EB] cursor-pointer transition-colors">New Developments</p>
                <p className="hover:text-[#2563EB] cursor-pointer transition-colors">Commercial</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Company</h4>
              <div className="space-y-2 text-sm text-[#1A1D2B]/50">
                <p className="hover:text-[#2563EB] cursor-pointer transition-colors">About Us</p>
                <p className="hover:text-[#2563EB] cursor-pointer transition-colors">Our Team</p>
                <p className="hover:text-[#2563EB] cursor-pointer transition-colors">Careers</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-[#1A1D2B]/50">
                <p className="flex items-center gap-2"><Phone size={14} /> +356 2133 0000</p>
                <p className="flex items-center gap-2"><Mail size={14} /> info@maltaliving.com</p>
                <p className="flex items-center gap-2"><MapPin size={14} /> Tower Road, Sliema</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#E2E5EF] mt-8 pt-8 text-center text-xs text-[#1A1D2B]/30">
            &copy; 2026 MaltaLiving. All rights reserved. <span className="mx-2">|</span> This is a demo website built by AMENZO.
          </div>
        </div>
      </footer>
    </div>
  );
}
