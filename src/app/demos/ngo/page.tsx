"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Globe, Users, HandHeart, ArrowRight, Mail, Phone, MapPin, Shield, BookOpen, Stethoscope } from "lucide-react";

const impactStats = [
  { value: "1.2M+", label: "Lives Improved", icon: Heart },
  { value: "34", label: "Countries", icon: Globe },
  { value: "120+", label: "Active Programs", icon: Users },
  { value: "€42M", label: "Funds Deployed", icon: HandHeart },
];

const programs = [
  {
    title: "Rural Health Clinics",
    description: "Establishing sustainable healthcare infrastructure in underserved communities across Sub-Saharan Africa and South Asia.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=3840&q=90",
  },
  {
    title: "Clean Water Initiative",
    description: "Building wells and water purification systems to deliver safe drinking water to over 200,000 people annually.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=3840&q=90",
  },
  {
    title: "Health Education",
    description: "Training community health workers and delivering preventive health education programs in 18 languages.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=3840&q=90",
  },
];

export default function NgoDemo() {
  return (
    <div className="min-h-screen bg-[#FAFDF7] text-[#1A2E1A]">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-center py-2 text-sm">
        This is an <strong>AMENZO</strong> design preview.{" "}
        <a href="/start-project" className="underline font-semibold">
          Want something like this? Get a Quote &rarr;
        </a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#D4E5D0] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/demos/ngo" className="text-xl font-bold flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
            <Heart size={24} className="text-[#16A34A] fill-[#16A34A]" />
            <span>Swiss <span className="text-[#16A34A]">Health</span> Alliance</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["Mission", "Programs", "Impact", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[#1A2E1A]/60 hover:text-[#16A34A] transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a
            href="#donate"
            className="bg-[#16A34A] text-white px-6 py-2.5 text-sm font-semibold rounded-full hover:bg-[#15803D] transition-colors flex items-center gap-2"
          >
            <Heart size={14} /> Donate Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[90vh] pt-10 flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=3840&q=90"
          alt="Swiss Health Alliance outreach"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F0A]/80 via-[#0A1F0A]/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block bg-[#16A34A]/20 border border-[#16A34A]/40 text-[#4ADE80] px-4 py-1 rounded-full text-sm font-medium mb-6">
              Transforming Healthcare Worldwide
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Every Person Deserves Access to Healthcare
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-lg">
              Since 2003, the Swiss Health Alliance has been delivering life-saving healthcare
              to the world&apos;s most vulnerable communities. Together, we can build a healthier future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#donate"
                className="bg-[#16A34A] text-white px-8 py-4 text-sm font-semibold rounded-full hover:bg-[#15803D] transition-colors flex items-center justify-center gap-2"
              >
                <Heart size={16} /> Make a Donation
              </a>
              <a
                href="#programs"
                className="border border-white/30 text-white px-8 py-4 text-sm font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                Our Programs <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section id="impact" className="bg-white py-16 border-b border-[#D4E5D0]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="mx-auto text-[#16A34A] mb-3" size={28} />
              <p className="text-3xl font-bold text-[#16A34A]" style={{ fontFamily: "var(--font-display)" }}>{stat.value}</p>
              <p className="text-sm text-[#1A2E1A]/50 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#16A34A] font-semibold uppercase tracking-widest text-sm">Our Mission</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Building Sustainable Health Systems for Every Community
          </h2>
          <p className="text-[#1A2E1A]/60 leading-relaxed text-lg max-w-2xl mx-auto">
            We believe healthcare is a fundamental human right. The Swiss Health Alliance partners with local
            governments, NGOs, and communities to create lasting health infrastructure that serves generations.
            We don&apos;t just provide aid &mdash; we build capacity for self-sufficiency.
          </p>
        </motion.div>
      </section>

      {/* Programs */}
      <section id="programs" className="bg-[#F0F7EC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#16A34A] font-semibold uppercase tracking-widest text-sm">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3" style={{ fontFamily: "var(--font-display)" }}>
              Our Programs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#D4E5D0] group hover:shadow-md transition-shadow"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 bg-[#16A34A]/10 rounded-full flex items-center justify-center mb-4">
                    <program.icon size={20} className="text-[#16A34A]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{program.title}</h3>
                  <p className="text-sm text-[#1A2E1A]/50 leading-relaxed mb-4">{program.description}</p>
                  <a href="#" className="text-sm text-[#16A34A] font-semibold flex items-center gap-1 hover:underline">
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section id="donate" className="bg-[#16A34A] py-24 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="mx-auto mb-4" size={36} />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Your Gift Saves Lives
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto text-lg">
              Every contribution, no matter the size, helps us deliver essential healthcare
              to those who need it most.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {["€25", "€50", "€100", "€250", "€500"].map((amount) => (
                <button
                  key={amount}
                  className="bg-white/10 border border-white/30 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-white hover:text-[#16A34A] transition-colors"
                >
                  {amount}
                </button>
              ))}
              <button className="bg-white/10 border border-white/30 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-white hover:text-[#16A34A] transition-colors">
                Custom
              </button>
            </div>
            <button className="bg-white text-[#16A34A] px-10 py-4 text-sm font-bold uppercase tracking-wider rounded-full hover:bg-white/90 transition-colors">
              Donate Now
            </button>
            <p className="text-xs text-white/50 mt-4">
              Swiss Health Alliance is a registered 501(c)(3) nonprofit. All donations are tax-deductible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl md:text-2xl text-[#1A2E1A]/70 leading-relaxed italic mb-6">
            &ldquo;The clinic built by Swiss Health Alliance is the first our village has ever had. My children
            no longer have to travel three hours for basic medical care.&rdquo;
          </p>
          <p className="text-[#16A34A] font-semibold">Amina Osei</p>
          <p className="text-sm text-[#1A2E1A]/40">Community Leader, Ashanti Region, Ghana</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1A2E1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                <Heart size={18} className="text-[#4ADE80] fill-[#4ADE80]" />
                Swiss Health Alliance
              </h3>
              <p className="text-sm text-white/40">Delivering healthcare where it matters most since 2003.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">About</h4>
              <div className="space-y-2 text-sm text-white/40">
                <p className="hover:text-[#4ADE80] cursor-pointer transition-colors">Our Mission</p>
                <p className="hover:text-[#4ADE80] cursor-pointer transition-colors">Annual Reports</p>
                <p className="hover:text-[#4ADE80] cursor-pointer transition-colors">Leadership</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Get Involved</h4>
              <div className="space-y-2 text-sm text-white/40">
                <p className="hover:text-[#4ADE80] cursor-pointer transition-colors">Donate</p>
                <p className="hover:text-[#4ADE80] cursor-pointer transition-colors">Volunteer</p>
                <p className="hover:text-[#4ADE80] cursor-pointer transition-colors">Corporate Partners</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-white/40">
                <p className="flex items-center gap-2"><Mail size={14} /> info@swisshealthalliance.org</p>
                <p className="flex items-center gap-2"><Phone size={14} /> +41 22 800 0000</p>
                <p className="flex items-center gap-2"><MapPin size={14} /> Geneva, Switzerland</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-xs text-white/25">
            &copy; 2026 Swiss Health Alliance. All rights reserved. <span className="mx-2">|</span> This is a demo website built by AMENZO.
          </div>
        </div>
      </footer>
    </div>
  );
}
