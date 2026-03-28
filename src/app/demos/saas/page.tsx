"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Zap, Lock, BarChart3, Globe, Cpu, Check, ArrowRight, ChevronRight, Star } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Threat Detection",
    description: "AI-powered threat detection identifies and neutralizes zero-day attacks in real time, protecting your infrastructure 24/7.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Military-grade AES-256 encryption for data at rest and in transit. Your sensitive information stays secure.",
  },
  {
    icon: BarChart3,
    title: "Security Analytics",
    description: "Comprehensive dashboards with real-time metrics, threat intelligence feeds, and compliance reporting.",
  },
  {
    icon: Globe,
    title: "Global CDN Shield",
    description: "Distributed DDoS mitigation across 200+ edge nodes. Absorb attacks of any scale without downtime.",
  },
  {
    icon: Cpu,
    title: "API Security",
    description: "Automated API discovery, schema validation, and bot protection. Secure every endpoint effortlessly.",
  },
  {
    icon: Zap,
    title: "Incident Response",
    description: "Automated playbooks and one-click remediation. Reduce mean time to resolution from hours to seconds.",
  },
];

const plans = [
  {
    name: "Starter",
    price: 49,
    period: "month",
    description: "For small teams getting started with cybersecurity",
    features: ["Up to 5 users", "Basic threat detection", "Email alerts", "Community support", "1 domain"],
    highlight: false,
  },
  {
    name: "Business",
    price: 149,
    period: "month",
    description: "For growing companies with advanced needs",
    features: ["Up to 50 users", "Advanced AI detection", "Real-time dashboard", "Priority support", "10 domains", "API access"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: null,
    period: null,
    description: "For large organizations requiring full control",
    features: ["Unlimited users", "Custom threat models", "Dedicated SOC team", "24/7 phone support", "Unlimited domains", "On-premise option"],
    highlight: false,
  },
];

const logos = ["TechCorp", "FinSecure", "DataVault", "CloudNine", "NetGuard"];

export default function SaasDemo() {
  return (
    <div className="min-h-screen bg-[#09090F] text-[#E8E8F0]">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-center py-2 text-sm">
        This is an <strong>AMENZO</strong> design preview.{" "}
        <a href="/work" className="underline font-medium opacity-80 hover:opacity-100">View All Previews</a>{" · "}<a href="/start-project?industry=Technology+%2F+SaaS&service=new-website&ref=CyberShield" className="underline font-semibold">Get a Quote &rarr;</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-40 bg-[#09090F]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/demos/saas" className="text-xl font-bold flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
            <Shield size={24} className="text-[#7C3AED]" />
            CyberShield
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            {["Features", "Pricing", "Docs", "Blog"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[#E8E8F0]/50 hover:text-[#7C3AED] transition-colors font-medium">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-[#E8E8F0]/60 hover:text-white transition-colors font-medium">
              Sign In
            </a>
            <a
              href="#pricing"
              className="bg-[#7C3AED] text-white px-5 py-2 text-sm font-semibold rounded-lg hover:bg-[#6D28D9] transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=3840&q=90"
            alt="CyberShield security visualization"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090F] via-[#09090F]/90 to-[#09090F]" />
        </div>
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06B6D4]/15 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A78BFA] px-4 py-1 rounded-full text-sm font-medium mb-6">
              Trusted by 10,000+ companies worldwide
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Defend Your Digital<br />
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>
            <p className="text-lg text-[#E8E8F0]/50 max-w-2xl mx-auto mb-8">
              CyberShield delivers enterprise-grade cybersecurity powered by artificial intelligence.
              Detect threats, protect data, and respond to incidents in real time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="bg-[#7C3AED] text-white px-8 py-4 text-sm font-semibold rounded-lg hover:bg-[#6D28D9] transition-colors flex items-center justify-center gap-2"
              >
                Start Free Trial <ArrowRight size={16} />
              </a>
              <a
                href="#features"
                className="border border-white/10 text-white px-8 py-4 text-sm font-semibold rounded-lg hover:bg-white/5 transition-colors"
              >
                See How It Works
              </a>
            </div>
          </motion.div>

          {/* Trust Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 border-t border-white/5 pt-8"
          >
            <p className="text-xs text-[#E8E8F0]/30 uppercase tracking-wider mb-6">Trusted by industry leaders</p>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {logos.map((logo) => (
                <span key={logo} className="text-[#E8E8F0]/20 font-bold text-lg tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
                  {logo}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#7C3AED] font-semibold uppercase tracking-widest text-sm">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3" style={{ fontFamily: "var(--font-display)" }}>
            Complete Security Suite
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#12121A] border border-white/5 rounded-xl p-6 hover:border-[#7C3AED]/30 transition-colors group"
            >
              <div className="w-10 h-10 bg-[#7C3AED]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#7C3AED]/20 transition-colors">
                <feature.icon size={20} className="text-[#7C3AED]" />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>{feature.title}</h3>
              <p className="text-sm text-[#E8E8F0]/40 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-[#12121A] py-16 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-[#F59E0B] text-[#F59E0B]" />
            ))}
          </div>
          <p className="text-xl text-[#E8E8F0]/70 italic mb-4 max-w-2xl mx-auto">
            &ldquo;CyberShield reduced our incident response time by 94%. It&apos;s the best investment we&apos;ve made in our security stack.&rdquo;
          </p>
          <p className="text-sm text-[#7C3AED] font-semibold">Sarah Chen, CISO at FinSecure</p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#7C3AED] font-semibold uppercase tracking-widest text-sm">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3" style={{ fontFamily: "var(--font-display)" }}>
            Plans for Every Scale
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
                  ? "bg-gradient-to-b from-[#7C3AED]/20 to-[#12121A] border-2 border-[#7C3AED]/50 scale-105"
                  : "bg-[#12121A] border border-white/5"
              }`}
            >
              {plan.highlight && (
                <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] mb-2 block">Most Popular</span>
              )}
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>{plan.name}</h3>
              <p className="text-sm text-[#E8E8F0]/40 mb-4">{plan.description}</p>
              <div className="mb-6">
                {plan.price ? (
                  <>
                    <span className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>${plan.price}</span>
                    <span className="text-[#E8E8F0]/40 text-sm">/{plan.period}</span>
                  </>
                ) : (
                  <span className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>Custom</span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-[#7C3AED] shrink-0" />
                    <span className="text-[#E8E8F0]/60">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  plan.highlight
                    ? "bg-[#7C3AED] text-white hover:bg-[#6D28D9]"
                    : "border border-white/10 text-white hover:bg-white/5"
                }`}
              >
                {plan.price ? "Start Free Trial" : "Contact Sales"} <ChevronRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#7C3AED]/10 to-[#06B6D4]/10 border border-white/5 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Ready to Secure Your Business?
            </h2>
            <p className="text-[#E8E8F0]/50 mb-8 max-w-lg mx-auto">
              Start your 14-day free trial. No credit card required. Full access to all Business features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#7C3AED] text-white px-8 py-4 text-sm font-semibold rounded-lg hover:bg-[#6D28D9] transition-colors flex items-center justify-center gap-2">
                Start Free Trial <ArrowRight size={16} />
              </button>
              <button className="border border-white/10 text-white px-8 py-4 text-sm font-semibold rounded-lg hover:bg-white/5 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Office */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-[#7C3AED] font-semibold uppercase tracking-widest text-sm">Office</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3" style={{ fontFamily: "var(--font-display)" }}>
              Visit Us
            </h2>
          </motion.div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.4!2d14.4681!3d35.8842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDUzJzAzLjEiTiAxNMKwMjgnMDUuMiJF!5e0!3m2!1sen!2smt!4v1"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '12px', filter: 'grayscale(0.3) contrast(1.1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CyberShield Malta Office"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                <Shield size={18} className="text-[#7C3AED]" />
                CyberShield
              </h3>
              <p className="text-sm text-[#E8E8F0]/30">Enterprise-grade cybersecurity powered by AI.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Product</h4>
              <div className="space-y-2 text-sm text-[#E8E8F0]/40">
                <p className="hover:text-[#7C3AED] cursor-pointer transition-colors">Features</p>
                <p className="hover:text-[#7C3AED] cursor-pointer transition-colors">Pricing</p>
                <p className="hover:text-[#7C3AED] cursor-pointer transition-colors">Integrations</p>
                <p className="hover:text-[#7C3AED] cursor-pointer transition-colors">Changelog</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Resources</h4>
              <div className="space-y-2 text-sm text-[#E8E8F0]/40">
                <p className="hover:text-[#7C3AED] cursor-pointer transition-colors">Documentation</p>
                <p className="hover:text-[#7C3AED] cursor-pointer transition-colors">API Reference</p>
                <p className="hover:text-[#7C3AED] cursor-pointer transition-colors">Blog</p>
                <p className="hover:text-[#7C3AED] cursor-pointer transition-colors">Status</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Company</h4>
              <div className="space-y-2 text-sm text-[#E8E8F0]/40">
                <p className="hover:text-[#7C3AED] cursor-pointer transition-colors">About</p>
                <p className="hover:text-[#7C3AED] cursor-pointer transition-colors">Careers</p>
                <p className="hover:text-[#7C3AED] cursor-pointer transition-colors">Privacy</p>
                <p className="hover:text-[#7C3AED] cursor-pointer transition-colors">Security</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-8 text-center text-xs text-[#E8E8F0]/20">
            &copy; 2026 CyberShield Inc. All rights reserved. <span className="mx-2">|</span> This is a demo website built by AMENZO.
          </div>
        </div>
      </footer>
    </div>
  );
}
