"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n/locale-context";
import type { TranslationKey } from "@/lib/i18n/dictionary";

const projects = [
  { num: "01", name: "Grand Harbour Hotel", category: "Hospitality", catKey: "cat.hospitality" as const, href: "/demos/hotel" },
  { num: "02", name: "Porto Valletta", category: "Gastro", catKey: "cat.gastro" as const, href: "/demos/restaurant" },
  { num: "03", name: "Mediterranean Living", category: "Real Estate", catKey: "cat.realestate" as const, href: "/demos/realestate" },
  { num: "04", name: "Dr. Vella Dental", category: "Healthcare", catKey: "cat.healthcare" as const, href: "/demos/dental" },
  { num: "05", name: "FitZone", category: "Fitness", catKey: "cat.fitness" as const, href: "/demos/fitness" },
  { num: "06", name: "Atelier Noir", category: "Art & Culture", catKey: "cat.artculture" as const, href: "/demos/gallery" },
  { num: "07", name: "Nova Space", category: "Space Tech", catKey: "cat.spacetech" as const, href: "/demos/startup" },
  { num: "08", name: "Meridian Capital", category: "Fintech", catKey: "cat.fintech" as const, href: "/demos/fintech" },
  { num: "09", name: "Studio Ēlan", category: "Interior", catKey: "cat.interior" as const, href: "/demos/interior" },
  { num: "10", name: "Aura Beauty Studio", category: "Wellness", catKey: "cat.wellness" as const, href: "/demos/beauty" },
];

const categoryFilters: Array<{ id: string; labelKey: TranslationKey }> = [
  { id: "All", labelKey: "work.filter.all" },
  { id: "Hospitality", labelKey: "cat.hospitality" },
  { id: "Gastro", labelKey: "cat.gastro" },
  { id: "Real Estate", labelKey: "cat.realestate" },
  { id: "Healthcare", labelKey: "cat.healthcare" },
  { id: "Fitness", labelKey: "cat.fitness" },
  { id: "Art & Culture", labelKey: "cat.artculture" },
  { id: "Space Tech", labelKey: "cat.spacetech" },
  { id: "Fintech", labelKey: "cat.fintech" },
  { id: "Interior", labelKey: "cat.interior" },
  { id: "Wellness", labelKey: "cat.wellness" },
];

export default function WorkPage() {
  const [filter, setFilter] = useState("All");
  const { t } = useLocale();

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20">
        
        <div className="container-wide relative z-10">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            {t("work.title")}
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/50 max-w-xl">
            {t("work.subtitle")}
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-20 z-30 py-4 backdrop-blur-md bg-[#0A0A0A]/60">
        <div className="container-wide">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-1">
            {categoryFilters.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`text-sm uppercase tracking-widest whitespace-nowrap transition-all duration-200 ${
                  filter === cat.id
                    ? "text-white underline underline-offset-4"
                    : "text-white/30 hover:text-white/60"
                }`}
              >
                {t(cat.labelKey)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project list */}
      <section className="py-8 md:py-12">
        <div className="container-wide">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.map((project) => (
                <Link
                  key={project.num}
                  href={project.href}
                  className="group flex items-center py-5 md:py-6 border-b border-white/[0.06] hover:bg-white/[0.03] hover:border-l-2 hover:border-l-white/20 hover:pl-4 transition-all duration-300"
                >
                  <span className="text-sm font-mono tabular-nums text-white/20 w-8 shrink-0">
                    {project.num}
                  </span>
                  <span className="font-display text-xl md:text-2xl font-bold text-white flex-1 ml-4 md:ml-6">
                    {project.name}
                  </span>
                  <span className="text-sm uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors duration-300 hidden sm:block mr-6">
                    {t(project.catKey)}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 shrink-0"
                  />
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center text-white/30 py-20 text-sm">{t("work.none")}</p>
          )}
        </div>
      </section>

      {/* Honest disclaimer */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h3 className="text-lg font-bold text-white font-display">{t("work.disclaim.title")}</h3>
          <p className="text-sm text-white/40 mt-3 leading-relaxed">
            {t("work.disclaim.body")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
            {t("work.cta.title")}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start-project"
              className="inline-block px-8 py-3.5 bg-white text-[#0A0A0A] text-sm font-medium uppercase tracking-wide rounded-full hover:bg-white/90 hover:scale-[1.02] transition-all duration-200"
            >
              {t("cta.startProject")}
            </Link>
            <Link
              href="/pricing"
              className="inline-block px-8 py-3.5 border border-white/25 text-white/90 text-sm font-medium uppercase tracking-wide rounded-full hover:border-white hover:bg-white/5 transition-all duration-200"
            >
              {t("cta.viewPricing")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
