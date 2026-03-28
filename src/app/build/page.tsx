"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Minus,
  Plus,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  serviceOptions,
  addOns,
  SERVICE_BASE_PRICES,
  PAGE_COUNT_MULTIPLIERS,
  PAGE_COUNT_OPTIONS,
} from "@/data/pricing";

// ─── Website Builder SVG Preview ───────────────────────────────────

interface WebsiteFeatures {
  hasServices: boolean;
  pageCount: string;
  hasCms: boolean;
  hasEcommerce: boolean;
  hasSeo: boolean;
  hasBranding: boolean;
  hasAnimations: boolean;
  hasMultilingual: boolean;
  hasMaintenance: boolean;
  hasPriority: boolean;
  hasCopywriting: boolean;
  hasPhotography: boolean;
  languageCount: number;
}

function SvgElement({
  id,
  children,
  show,
  delay = 0,
}: {
  id: string;
  children: React.ReactNode;
  show: boolean;
  delay?: number;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.g
          key={id}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.3, delay }}
        >
          {children}
        </motion.g>
      )}
    </AnimatePresence>
  );
}

function WebsitePreview({ features }: { features: WebsiteFeatures }) {
  const pageSections = features.pageCount === "20+" ? 6 : features.pageCount === "10-20" ? 4 : features.pageCount === "5-10" ? 3 : features.pageCount === "1-5" ? 2 : 0;
  const hasAnything = features.hasServices || features.pageCount || features.hasCms || features.hasEcommerce;

  return (
    <svg
      viewBox="0 0 360 440"
      className="w-full h-auto"
      style={{ filter: "drop-shadow(0 8px 32px rgba(124,58,237,0.12))" }}
    >
      <defs>
        <linearGradient id="bld-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="bld-warm" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#F97068" />
        </linearGradient>
      </defs>

      {/* Browser frame — always visible */}
      <rect x={20} y={10} width={320} height={420} rx={10} fill="#111" stroke="#2A2A2A" strokeWidth={1} />
      {/* Title bar */}
      <rect x={20} y={10} width={320} height={28} rx={10} fill="#1A1A1A" />
      <rect x={20} y={28} width={320} height={10} fill="#1A1A1A" />
      {/* Traffic light dots */}
      <circle cx={38} cy={24} r={4} fill="#F97068" opacity={0.8} />
      <circle cx={52} cy={24} r={4} fill="#F59E0B" opacity={0.8} />
      <circle cx={66} cy={24} r={4} fill="#22C55E" opacity={0.8} />
      {/* URL bar */}
      <rect x={90} y={18} width={160} height={12} rx={6} fill="#0A0A0A" />
      <text x={170} y={27} textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize={7} fontFamily="var(--font-mono)">
        yoursite.com
      </text>

      {/* Empty state */}
      {!hasAnything && (
        <text x={180} y={240} textAnchor="middle" fill="rgba(255,255,255,0.1)" fontSize={12} fontFamily="var(--font-display)">
          Start adding features...
        </text>
      )}

      {/* ─── Nav bar ─── */}
      <SvgElement id="nav" show={features.hasServices} delay={0}>
        <rect x={30} y={44} width={300} height={22} rx={2} fill="#1A1A1A" />
        {/* Logo placeholder */}
        <SvgElement id="logo" show={features.hasBranding}>
          <rect x={38} y={49} width={32} height={12} rx={3} fill="url(#bld-grad)" opacity={0.8} />
        </SvgElement>
        {!features.hasBranding && (
          <rect x={38} y={49} width={32} height={12} rx={3} fill="#2A2A2A" />
        )}
        {/* Nav links */}
        <rect x={200} y={51} width={20} height={6} rx={2} fill="#333" />
        <rect x={226} y={51} width={24} height={6} rx={2} fill="#333" />
        <rect x={256} y={51} width={18} height={6} rx={2} fill="#333" />
        {/* Multilingual toggle */}
        <SvgElement id="lang-toggle" show={features.hasMultilingual}>
          <rect x={282} y={49} width={22} height={10} rx={5} fill="#7C3AED" opacity={0.6} />
          <text x={293} y={57} textAnchor="middle" fill="#fff" fontSize={6} fontWeight={600}>EN</text>
        </SvgElement>
        {/* CTA button */}
        <rect x={310} y={49} width={14} height={12} rx={3} fill="url(#bld-grad)" opacity={0.5} />
      </SvgElement>

      {/* ─── Hero section ─── */}
      <SvgElement id="hero" show={features.hasServices} delay={0.05}>
        <rect x={30} y={72} width={300} height={90} rx={2} fill="#161616" />
        {/* Hero heading lines */}
        <rect x={50} y={92} width={140} height={10} rx={3} fill="#2A2A2A" />
        <rect x={50} y={108} width={100} height={10} rx={3} fill="#2A2A2A" />
        {/* Hero subtext */}
        <rect x={50} y={126} width={120} height={5} rx={2} fill="#1E1E1E" />
        <rect x={50} y={135} width={90} height={5} rx={2} fill="#1E1E1E" />
        {/* Hero CTA */}
        <rect x={50} y={146} width={50} height={12} rx={6} fill="url(#bld-grad)" opacity={0.7} />
        {/* Hero image placeholder */}
        <rect x={230} y={82} width={80} height={70} rx={4} fill="#1E1E1E" />
        {/* Animations sparkles */}
        <SvgElement id="anim-sparkle" show={features.hasAnimations}>
          <circle cx={255} cy={90} r={2} fill="#06B6D4" opacity={0.6} />
          <circle cx={290} cy={100} r={1.5} fill="#7C3AED" opacity={0.5} />
          <circle cx={245} cy={140} r={1} fill="#F59E0B" opacity={0.5} />
          <line x1={270} y1={85} x2={278} y2={88} stroke="#06B6D4" strokeWidth={0.8} opacity={0.4} />
          <line x1={300} y1={130} x2={305} y2={125} stroke="#7C3AED" strokeWidth={0.8} opacity={0.4} />
        </SvgElement>
      </SvgElement>

      {/* ─── Content sections ─── */}
      {Array.from({ length: pageSections }).map((_, i) => (
        <SvgElement key={`section-${i}`} id={`section-${i}`} show={true} delay={0.1 + i * 0.05}>
          <rect
            x={30}
            y={168 + i * 48}
            width={features.hasCms ? 220 : 300}
            height={42}
            rx={2}
            fill="#141414"
            stroke="#1E1E1E"
            strokeWidth={0.5}
          />
          {/* Content lines */}
          <rect x={40} y={176 + i * 48} width={80} height={6} rx={2} fill="#2A2A2A" />
          <rect x={40} y={186 + i * 48} width={features.hasCms ? 160 : 200} height={4} rx={2} fill="#1A1A1A" />
          <rect x={40} y={194 + i * 48} width={features.hasCms ? 140 : 180} height={4} rx={2} fill="#1A1A1A" />
        </SvgElement>
      ))}

      {/* ─── E-Commerce product grid ─── */}
      <SvgElement id="products" show={features.hasEcommerce} delay={0.15}>
        {[0, 1, 2].map((col) => (
          <g key={`prod-${col}`}>
            <rect
              x={40 + col * 70}
              y={pageSections > 0 ? 168 + pageSections * 48 + 6 : 172}
              width={60}
              height={50}
              rx={3}
              fill="#161616"
              stroke="#1E1E1E"
              strokeWidth={0.5}
            />
            {/* Product image */}
            <rect
              x={44 + col * 70}
              y={(pageSections > 0 ? 168 + pageSections * 48 + 6 : 172) + 4}
              width={52}
              height={24}
              rx={2}
              fill="#1E1E1E"
            />
            {/* Price tag */}
            <rect
              x={44 + col * 70}
              y={(pageSections > 0 ? 168 + pageSections * 48 + 6 : 172) + 32}
              width={24}
              height={5}
              rx={2}
              fill="#06B6D4"
              opacity={0.4}
            />
            {/* Cart button */}
            <rect
              x={76 + col * 70}
              y={(pageSections > 0 ? 168 + pageSections * 48 + 6 : 172) + 32}
              width={16}
              height={5}
              rx={2}
              fill="url(#bld-grad)"
              opacity={0.3}
            />
          </g>
        ))}
      </SvgElement>

      {/* ─── CMS sidebar ─── */}
      <SvgElement id="cms" show={features.hasCms && pageSections > 0} delay={0.12}>
        <rect
          x={256}
          y={168}
          width={74}
          height={pageSections * 48}
          rx={2}
          fill="#161616"
          stroke="#7C3AED"
          strokeWidth={0.5}
          opacity={0.8}
        />
        <text x={293} y={182} textAnchor="middle" fill="#7C3AED" fontSize={6} fontWeight={600} opacity={0.6}>
          CMS
        </text>
        {/* Sidebar items */}
        {[0, 1, 2, 3].map((j) => (
          <g key={`cms-${j}`}>
            <rect x={264} y={190 + j * 18} width={56} height={10} rx={2} fill="#1A1A1A" />
            <rect x={268} y={193 + j * 18} width={30} height={4} rx={1} fill="#2A2A2A" />
          </g>
        ))}
      </SvgElement>

      {/* ─── SEO chart in corner ─── */}
      <SvgElement id="seo" show={features.hasSeo} delay={0.18}>
        <rect x={290} y={380} width={44} height={36} rx={4} fill="#141414" stroke="#06B6D4" strokeWidth={0.5} opacity={0.8} />
        {/* Mini bar chart */}
        <rect x={298} y={404} width={5} height={6} rx={1} fill="#06B6D4" opacity={0.4} />
        <rect x={306} y={400} width={5} height={10} rx={1} fill="#06B6D4" opacity={0.5} />
        <rect x={314} y={396} width={5} height={14} rx={1} fill="#06B6D4" opacity={0.6} />
        <rect x={322} y={392} width={5} height={18} rx={1} fill="#06B6D4" opacity={0.7} />
        <text x={312} y={388} textAnchor="middle" fill="#06B6D4" fontSize={5} opacity={0.5}>SEO</text>
      </SvgElement>

      {/* ─── Copywriting indicator ─── */}
      <SvgElement id="copy" show={features.hasCopywriting} delay={0.14}>
        <rect x={30} y={380} width={44} height={36} rx={4} fill="#141414" stroke="#F97068" strokeWidth={0.5} opacity={0.8} />
        <text x={52} y={396} textAnchor="middle" fill="#F97068" fontSize={6} opacity={0.6}>Aa</text>
        <rect x={38} y={402} width={28} height={3} rx={1} fill="#F97068" opacity={0.25} />
        <rect x={38} y={408} width={20} height={3} rx={1} fill="#F97068" opacity={0.2} />
      </SvgElement>

      {/* ─── Photography indicator ─── */}
      <SvgElement id="photo" show={features.hasPhotography} delay={0.16}>
        {/* Camera icon simplified */}
        <rect x={80} y={384} width={36} height={28} rx={4} fill="#141414" stroke="#F59E0B" strokeWidth={0.5} opacity={0.8} />
        <circle cx={98} cy={398} r={6} fill="none" stroke="#F59E0B" strokeWidth={0.8} opacity={0.5} />
        <circle cx={98} cy={398} r={2.5} fill="#F59E0B" opacity={0.3} />
      </SvgElement>

      {/* ─── Maintenance shield ─── */}
      <SvgElement id="maintenance" show={features.hasMaintenance} delay={0.2}>
        <g transform="translate(145, 390)">
          <path d="M8,0 L16,4 L16,10 C16,15 8,18 8,18 C8,18 0,15 0,10 L0,4 Z" fill="#22C55E" opacity={0.2} stroke="#22C55E" strokeWidth={0.5} />
          <text x={8} y={12} textAnchor="middle" fill="#22C55E" fontSize={5} opacity={0.7}>✓</text>
        </g>
      </SvgElement>

      {/* ─── Priority support headset ─── */}
      <SvgElement id="priority" show={features.hasPriority} delay={0.22}>
        <g transform="translate(175, 388)">
          <rect width={28} height={24} rx={4} fill="#141414" stroke="#7C3AED" strokeWidth={0.5} opacity={0.8} />
          <text x={14} y={14} textAnchor="middle" fill="#7C3AED" fontSize={7} opacity={0.6}>24/7</text>
        </g>
      </SvgElement>

      {/* ─── Language flags ─── */}
      <SvgElement id="langs" show={features.hasMultilingual} delay={0.19}>
        {Array.from({ length: Math.min(features.languageCount, 5) }).map((_, i) => (
          <rect
            key={`lang-${i}`}
            x={220 + i * 14}
            y={392}
            width={10}
            height={7}
            rx={1.5}
            fill={i === 0 ? "#7C3AED" : i === 1 ? "#06B6D4" : i === 2 ? "#F59E0B" : i === 3 ? "#F97068" : "#22C55E"}
            opacity={0.5}
          />
        ))}
        {features.languageCount > 5 && (
          <text x={220 + 5 * 14} y={399} fill="rgba(255,255,255,0.3)" fontSize={7}>+{features.languageCount - 5}</text>
        )}
      </SvgElement>
    </svg>
  );
}

// ─── Toggle Switch Component ───────────────────────────────────────

function ToggleSwitch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className={cn(
        "w-10 h-6 rounded-full relative transition-colors duration-200 shrink-0 cursor-pointer",
        checked ? "bg-violet" : "bg-border"
      )}
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-white absolute top-1 shadow-sm"
        animate={{ left: checked ? 21 : 3 }}
        transition={{ duration: 0.15 }}
      />
    </button>
  );
}

// ─── Main Build Page ───────────────────────────────────────────────

export default function BuildPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [pageCount, setPageCount] = useState<string>("");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [languageCount, setLanguageCount] = useState(2);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  // Price calculation
  const estimate = useMemo(() => {
    let oneTime = 0;
    let recurring = 0;

    // Service base prices
    selectedServices.forEach((svc) => {
      oneTime += SERVICE_BASE_PRICES[svc] || 2000;
    });

    // Page count multiplier
    const multiplier = PAGE_COUNT_MULTIPLIERS[pageCount] || 1;
    oneTime *= multiplier;

    // Add-on costs
    selectedAddOns.forEach((id) => {
      const addon = addOns.find((a) => a.id === id);
      if (addon) {
        if (addon.id === "multilingual") {
          oneTime += addon.price * languageCount;
        } else if (addon.recurring) {
          recurring += addon.price;
        } else {
          oneTime += addon.price;
        }
      }
    });

    return {
      oneTime: Math.round(oneTime / 100) * 100,
      recurring,
      hasSelections: selectedServices.length > 0 || selectedAddOns.length > 0,
    };
  }, [selectedServices, pageCount, selectedAddOns, languageCount]);

  // Build features object for website preview SVG
  const websiteFeatures: WebsiteFeatures = useMemo(() => ({
    hasServices: selectedServices.length > 0,
    pageCount,
    hasCms: selectedAddOns.includes("cms"),
    hasEcommerce: selectedAddOns.includes("ecommerce"),
    hasSeo: selectedAddOns.includes("seo"),
    hasBranding: selectedAddOns.includes("branding"),
    hasAnimations: selectedAddOns.includes("animations"),
    hasMultilingual: selectedAddOns.includes("multilingual"),
    hasMaintenance: selectedAddOns.includes("maintenance"),
    hasPriority: selectedAddOns.includes("priority"),
    hasCopywriting: selectedAddOns.includes("copywriting"),
    hasPhotography: selectedAddOns.includes("photography"),
    languageCount,
  }), [selectedServices, pageCount, selectedAddOns, languageCount]);

  // Build start-project URL with all selections
  const startProjectUrl = useMemo(() => {
    const params = new URLSearchParams();
    if (selectedServices.length > 0) params.set("services", selectedServices.join(","));
    if (pageCount) params.set("pages", pageCount);
    if (selectedAddOns.length > 0) params.set("addons", selectedAddOns.join(","));
    if (selectedAddOns.includes("multilingual") && languageCount > 2) params.set("langs", String(languageCount));
    return `/start-project${params.toString() ? `?${params}` : ""}`;
  }, [selectedServices, selectedAddOns, pageCount, languageCount]);

  return (
    <div className="min-h-screen bg-bg pt-32 pb-20">
      {/* Hero */}
      <div className="container-wide mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="caption mb-4 text-violet"
        >
          Project Builder
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[0.95] mb-4"
        >
          Build Your <span className="gradient-text">Project</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-text-secondary max-w-2xl"
        >
          Select services, toggle features, and watch your project come to life.
          Prices update in real-time as you customize.
        </motion.p>
      </div>

      {/* Two-column layout */}
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-start">
          {/* Left: Configurator */}
          <div className="space-y-12">
            {/* Services */}
            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-1">
                What do you need?
              </h2>
              <p className="text-sm text-text-muted mb-5">
                Select all that apply — prices adjust automatically
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((opt) => {
                  const Icon = opt.icon;
                  const selected = selectedServices.includes(opt.id);
                  const price = SERVICE_BASE_PRICES[opt.id];
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleService(opt.id)}
                      className={cn(
                        "flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 relative overflow-hidden group",
                        selected
                          ? "border-violet text-text-primary"
                          : "border-border bg-surface text-text-secondary hover:border-violet/30"
                      )}
                    >
                      {selected && (
                        <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-violet/5 to-cyan/10" />
                      )}
                      <Icon
                        size={20}
                        className={cn(
                          "relative z-10 shrink-0",
                          selected ? "text-violet" : "text-text-muted"
                        )}
                      />
                      <div className="flex-1 relative z-10">
                        <span className="text-sm font-medium block">{opt.label}</span>
                        {price && (
                          <span className="text-xs text-text-muted">
                            from &euro;{price.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {selected && (
                        <Check
                          size={16}
                          className="text-violet relative z-10 shrink-0"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Page Count */}
            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-1">
                How many pages?
              </h2>
              <p className="text-sm text-text-muted mb-5">
                More pages increase the project scope and price
              </p>
              <div className="flex flex-wrap gap-2">
                {PAGE_COUNT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setPageCount(pageCount === opt ? "" : opt)}
                    className={cn(
                      "px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200",
                      pageCount === opt
                        ? "border-violet bg-violet/10 text-text-primary"
                        : "border-border bg-surface text-text-secondary hover:border-violet/30"
                    )}
                  >
                    {opt} {opt !== "Not sure" && "pages"}
                    {opt !== "Not sure" && (
                      <span className="text-text-muted ml-1.5 text-xs">
                        &times;{PAGE_COUNT_MULTIPLIERS[opt]}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </section>

            {/* Feature Add-ons */}
            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-1">
                Customize your features
              </h2>
              <p className="text-sm text-text-muted mb-5">
                Toggle add-ons to build the perfect package
              </p>
              <div className="space-y-2">
                {addOns.map((addon) => {
                  const isSelected = selectedAddOns.includes(addon.id);
                  return (
                    <div key={addon.id}>
                      <div
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 relative overflow-hidden cursor-pointer",
                          isSelected
                            ? "border-l-4 border-l-violet border-t-violet/30 border-r-violet/30 border-b-violet/30"
                            : "border-border bg-surface hover:border-violet/30"
                        )}
                        onClick={() => toggleAddOn(addon.id)}
                      >
                        {isSelected && (
                          <div className="absolute inset-0 bg-violet/[0.04]" />
                        )}
                        <div className="flex-1 relative z-10">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-text-primary">
                              {addon.name}
                            </span>
                            {addon.recurring && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-cyan/10 text-cyan font-medium">
                                Monthly
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-text-muted mt-0.5">
                            {addon.description}
                          </p>
                        </div>
                        <div className="text-right relative z-10 shrink-0">
                          <span className="text-sm font-bold text-text-primary">
                            &euro;{addon.id === "multilingual" && isSelected ? (addon.price * languageCount).toLocaleString() : addon.price}
                          </span>
                          {addon.recurring && (
                            <span className="text-xs text-text-muted">/mo</span>
                          )}
                          {addon.id === "multilingual" && isSelected && (
                            <span className="text-xs text-text-muted block">
                              {languageCount} langs
                            </span>
                          )}
                        </div>
                        <ToggleSwitch
                          checked={isSelected}
                          onChange={() => toggleAddOn(addon.id)}
                        />
                      </div>

                      {/* Language count stepper */}
                      {addon.id === "multilingual" && isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex items-center gap-4 px-4 py-3 ml-4 border-l-2 border-violet/20">
                            <Languages size={16} className="text-violet shrink-0" />
                            <span className="text-sm text-text-secondary">
                              Number of languages
                            </span>
                            <div className="flex items-center gap-2 ml-auto">
                              <button
                                onClick={() => setLanguageCount((c) => Math.max(2, c - 1))}
                                className="w-8 h-8 rounded-full border border-border bg-surface flex items-center justify-center text-text-secondary hover:border-violet/30 transition-colors"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-8 text-center text-sm font-semibold text-text-primary tabular-nums">
                                {languageCount}
                              </span>
                              <button
                                onClick={() => setLanguageCount((c) => Math.min(10, c + 1))}
                                className="w-8 h-8 rounded-full border border-border bg-surface flex items-center justify-center text-text-secondary hover:border-violet/30 transition-colors"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <span className="text-xs text-text-muted whitespace-nowrap">
                              &euro;{(300 * languageCount).toLocaleString()} total
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Right: Sticky preview panel */}
          <div className="hidden lg:block lg:order-last">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Website SVG Preview */}
              <div className="rounded-2xl border border-border bg-surface p-6 glow-border">
                <h3 className="font-display text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
                  Your Project
                </h3>
                <WebsitePreview features={websiteFeatures} />
              </div>

              {/* Price Summary */}
              <motion.div
                layout
                className="rounded-2xl border border-violet/20 bg-gradient-to-br from-violet/[0.06] to-cyan/[0.03] p-6 space-y-4"
              >
                <h3 className="font-display text-sm font-semibold text-text-muted uppercase tracking-wider">
                  Estimated Investment
                </h3>

                {!estimate.hasSelections ? (
                  <p className="text-text-muted text-sm">
                    Select services and features to see pricing
                  </p>
                ) : (
                  <>
                    <div className="space-y-3">
                      {/* One-time */}
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm text-text-secondary">One-time</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs text-text-muted">&euro;</span>
                          <motion.span
                            key={estimate.oneTime}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-display text-3xl font-bold text-text-primary"
                          >
                            {estimate.oneTime.toLocaleString()}
                          </motion.span>
                        </div>
                      </div>

                      {/* Recurring */}
                      {estimate.recurring > 0 && (
                        <div className="flex items-baseline justify-between">
                          <span className="text-sm text-text-secondary">Monthly</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xs text-text-muted">&euro;</span>
                            <motion.span
                              key={estimate.recurring}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="font-display text-xl font-bold text-text-primary"
                            >
                              {estimate.recurring.toLocaleString()}
                            </motion.span>
                            <span className="text-sm text-text-muted">/mo</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="h-px bg-border" />

                    {/* Selected items summary */}
                    <div className="space-y-1.5">
                      {selectedServices.map((svc) => {
                        const opt = serviceOptions.find((s) => s.id === svc);
                        return (
                          <div key={svc} className="flex items-center justify-between text-xs">
                            <span className="text-text-secondary">{opt?.label}</span>
                            <span className="text-text-muted">&euro;{SERVICE_BASE_PRICES[svc]?.toLocaleString()}</span>
                          </div>
                        );
                      })}
                      {pageCount && (
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-text-secondary">{pageCount} pages</span>
                          <span className="text-text-muted">&times;{PAGE_COUNT_MULTIPLIERS[pageCount]}</span>
                        </div>
                      )}
                      {selectedAddOns.map((id) => {
                        const addon = addOns.find((a) => a.id === id);
                        if (!addon) return null;
                        return (
                          <div key={id} className="flex items-center justify-between text-xs">
                            <span className="text-text-secondary">{addon.name}</span>
                            <span className="text-text-muted">
                              &euro;{addon.id === "multilingual" ? (addon.price * languageCount).toLocaleString() : addon.price}
                              {addon.recurring ? "/mo" : ""}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}

                <Button
                  href={startProjectUrl}
                  className="w-full justify-center"
                  magnetic
                  disabled={!estimate.hasSelections}
                >
                  Start This Project <ArrowRight size={16} />
                </Button>

                <p className="text-[11px] text-text-muted text-center">
                  Prices are estimates in EUR, excl. VAT. Final quote after consultation.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile floating preview — fixed at bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-surface/95 backdrop-blur-xl border-t border-border">
        <div className="container-wide flex items-center gap-4 py-3">
          {/* Mini SVG preview — uses same WebsitePreview component */}
          <div className="w-16 h-12 shrink-0 rounded-lg border border-border bg-bg overflow-hidden">
            <WebsitePreview features={websiteFeatures} />
          </div>
          {/* Price */}
          <div className="flex-1 min-w-0">
            {estimate.hasSelections ? (
              <div>
                <span className="text-xs text-text-muted">Estimated</span>
                <p className="font-display text-lg font-bold text-text-primary">
                  &euro;{estimate.oneTime.toLocaleString()}
                  {estimate.recurring > 0 && (
                    <span className="text-sm text-text-muted font-normal"> + &euro;{estimate.recurring}/mo</span>
                  )}
                </p>
              </div>
            ) : (
              <p className="text-sm text-text-muted">Select features to see pricing</p>
            )}
          </div>
          {/* CTA */}
          <Button
            href={startProjectUrl}
            className="shrink-0"
            magnetic
            disabled={!estimate.hasSelections}
            size="sm"
          >
            Start <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
}
