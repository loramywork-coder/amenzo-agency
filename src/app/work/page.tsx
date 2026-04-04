"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { num: "01", name: "Grand Harbour Hotel", category: "Hospitality", href: "/demos/hotel" },
  { num: "02", name: "Porto Valletta", category: "Gastro", href: "/demos/restaurant" },
  { num: "03", name: "MaltaLiving", category: "Real Estate", href: "/demos/realestate" },
  { num: "04", name: "Dr. Vella Dental", category: "Healthcare", href: "/demos/dental" },
  { num: "05", name: "FitZone Malta", category: "Fitness", href: "/demos/fitness" },
  { num: "06", name: "Atelier Noir", category: "Art & Culture", href: "/demos/gallery" },
];

const categories = ["All", "Hospitality", "Gastro", "Real Estate", "Healthcare", "Fitness", "Art & Culture"];

export default function WorkPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20">
        
        <div className="container-wide relative z-10">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Selected Work
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/50 max-w-xl">
            Design showcases across 6 industries. Each project is a fully interactive website you can explore.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-20 z-30 py-4 backdrop-blur-md bg-[#0A0A0A]/60">
        <div className="container-wide">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm uppercase tracking-widest whitespace-nowrap transition-all duration-200 ${
                  filter === cat
                    ? "text-white underline underline-offset-4"
                    : "text-white/30 hover:text-white/60"
                }`}
              >
                {cat}
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
                    {project.category}
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
            <p className="text-center text-white/30 py-20 text-sm">No projects in this category yet.</p>
          )}
        </div>
      </section>

      {/* Honest disclaimer */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h3 className="text-lg font-bold text-white font-display">What You&apos;re Looking At</h3>
          <p className="text-sm text-white/40 mt-3 leading-relaxed">
            These are design showcases &mdash; fully interactive websites we built to demonstrate our capabilities across different industries. Each one is a complete, working site you can click through. Real client work is underway. Our first case study will be published here soon.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to be next?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start-project"
              className="inline-block px-8 py-3.5 bg-white text-[#0A0A0A] text-sm font-medium uppercase tracking-wide rounded-full hover:bg-white/90 hover:scale-[1.02] transition-all duration-200"
            >
              Start a Project
            </Link>
            <Link
              href="/pricing"
              className="inline-block px-8 py-3.5 border border-white/25 text-white/90 text-sm font-medium uppercase tracking-wide rounded-full hover:border-white hover:bg-white/5 transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
