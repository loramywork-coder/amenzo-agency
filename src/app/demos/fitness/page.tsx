"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Clock, Users, Zap, ChevronRight, MapPin, Phone, Globe, Check } from "lucide-react";

const classes = [
  { name: "HIIT Blast", time: "06:00 AM", duration: "45 min", trainer: "Marco", intensity: "High", color: "#EF4444" },
  { name: "Vinyasa Yoga", time: "07:30 AM", duration: "60 min", trainer: "Sara", intensity: "Low", color: "#10B981" },
  { name: "CrossFit WOD", time: "09:00 AM", duration: "50 min", trainer: "Jake", intensity: "Extreme", color: "#F97316" },
  { name: "Boxing Cardio", time: "12:00 PM", duration: "45 min", trainer: "Chris", intensity: "High", color: "#EF4444" },
  { name: "Spin Session", time: "05:30 PM", duration: "40 min", trainer: "Nina", intensity: "Medium", color: "#F59E0B" },
  { name: "Pilates Core", time: "07:00 PM", duration: "55 min", trainer: "Leah", intensity: "Medium", color: "#F59E0B" },
];

const plans = [
  {
    name: "Starter",
    price: 39,
    period: "month",
    features: ["Gym floor access", "2 classes per week", "Locker room", "Free parking"],
    highlight: false,
  },
  {
    name: "Pro",
    price: 69,
    period: "month",
    features: ["Unlimited gym access", "Unlimited classes", "Personal training (1x/mo)", "Sauna & pool", "Nutrition plan"],
    highlight: true,
  },
  {
    name: "Elite",
    price: 109,
    period: "month",
    features: ["Everything in Pro", "Personal training (4x/mo)", "Recovery suite", "Guest passes (2/mo)", "Priority booking"],
    highlight: false,
  },
];

export default function FitnessDemo() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-center py-2 text-sm">
        This is an <strong>AMENZO</strong> demo.{" "}
        <a href="/start-project" className="underline font-semibold">
          Want something like this? Get a Quote &rarr;
        </a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/demos/fitness" className="text-2xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            FIT<span className="text-[#EF4444]">ZONE</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
            {["Classes", "Pricing", "Trainers", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-[#EF4444] transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a
            href="#pricing"
            className="bg-[#EF4444] text-white px-6 py-2 text-sm font-bold uppercase tracking-wider rounded hover:bg-[#DC2626] transition-colors"
          >
            Join Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen pt-10">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
          alt="FitZone Malta gym"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
        <div className="relative z-10 flex flex-col justify-center h-full px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Flame className="text-[#EF4444]" size={20} />
              <span className="text-[#EF4444] font-bold uppercase tracking-widest text-sm">Malta&apos;s #1 Fitness Hub</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>
              PUSH YOUR<br />
              <span className="text-[#EF4444]">LIMITS</span>
            </h1>
            <p className="text-lg text-white/60 mb-8 max-w-md">
              State-of-the-art equipment, world-class trainers, and a community that pushes you to be your best.
            </p>
            <div className="flex gap-4">
              <a
                href="#pricing"
                className="bg-[#EF4444] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider rounded hover:bg-[#DC2626] transition-colors flex items-center gap-2"
              >
                Start Free Trial <ChevronRight size={16} />
              </a>
              <a
                href="#classes"
                className="border border-white/20 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider rounded hover:bg-white/5 transition-colors"
              >
                View Classes
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#EF4444] py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "2,500+", label: "Active Members" },
            { value: "50+", label: "Weekly Classes" },
            { value: "15", label: "Expert Trainers" },
            { value: "24/7", label: "Open Hours" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-black" style={{ fontFamily: "var(--font-display)" }}>{stat.value}</p>
              <p className="text-sm text-white/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Classes */}
      <section id="classes" className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#EF4444] font-bold uppercase tracking-widest text-sm">Schedule</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-2" style={{ fontFamily: "var(--font-display)" }}>
            TODAY&apos;S CLASSES
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#141414] border border-white/5 rounded-xl p-6 hover:border-[#EF4444]/30 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
                  style={{ backgroundColor: `${cls.color}20`, color: cls.color }}
                >
                  {cls.intensity}
                </span>
                <span className="text-white/40 text-sm">{cls.time}</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{cls.name}</h3>
              <div className="flex items-center gap-4 text-sm text-white/40 mb-4">
                <span className="flex items-center gap-1"><Clock size={14} /> {cls.duration}</span>
                <span className="flex items-center gap-1"><Users size={14} /> {cls.trainer}</span>
              </div>
              <button className="w-full border border-white/10 text-white py-2.5 text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#EF4444] hover:border-[#EF4444] transition-all">
                Book Spot
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-[#0F0F0F] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#EF4444] font-bold uppercase tracking-widest text-sm">Membership</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-2" style={{ fontFamily: "var(--font-display)" }}>
              CHOOSE YOUR PLAN
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-8 ${
                  plan.highlight
                    ? "bg-[#EF4444] text-white border-2 border-[#EF4444] scale-105"
                    : "bg-[#141414] border border-white/10"
                }`}
              >
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black" style={{ fontFamily: "var(--font-display)" }}>&euro;{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? "text-white/70" : "text-white/40"}`}>/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check size={16} className={plan.highlight ? "text-white" : "text-[#EF4444]"} />
                      <span className={plan.highlight ? "text-white/90" : "text-white/60"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 text-sm font-bold uppercase tracking-wider rounded transition-colors ${
                    plan.highlight
                      ? "bg-white text-[#EF4444] hover:bg-white/90"
                      : "bg-[#EF4444] text-white hover:bg-[#DC2626]"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="mx-auto text-[#EF4444] mb-4" size={32} />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
              YOUR FIRST WEEK IS <span className="text-[#EF4444]">FREE</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              No commitment. No pressure. Just results. Walk in and experience FitZone Malta for yourself.
            </p>
            <button className="bg-[#EF4444] text-white px-10 py-4 text-sm font-bold uppercase tracking-wider rounded hover:bg-[#DC2626] transition-colors">
              Claim Free Trial
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0F0F0F] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-black tracking-tight mb-3" style={{ fontFamily: "var(--font-display)" }}>
                FIT<span className="text-[#EF4444]">ZONE</span>
              </h3>
              <p className="text-sm text-white/30">Malta&apos;s premier fitness and wellness destination.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-3">Quick Links</h4>
              <div className="space-y-2 text-sm text-white/40">
                <p className="hover:text-[#EF4444] cursor-pointer transition-colors">Class Schedule</p>
                <p className="hover:text-[#EF4444] cursor-pointer transition-colors">Membership</p>
                <p className="hover:text-[#EF4444] cursor-pointer transition-colors">Personal Training</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-white/40">
                <p className="flex items-center gap-2"><MapPin size={14} /> Tigne Point, Sliema</p>
                <p className="flex items-center gap-2"><Phone size={14} /> +356 2134 5678</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-3">Follow Us</h4>
              <p className="flex items-center gap-2 text-sm text-white/40 hover:text-[#EF4444] cursor-pointer transition-colors">
                <Globe size={14} /> @fitzonemalta
              </p>
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-8 text-center text-xs text-white/20">
            &copy; 2026 FitZone Malta. All rights reserved. <span className="mx-2">|</span> This is a demo website built by AMENZO.
          </div>
        </div>
      </footer>
    </div>
  );
}
