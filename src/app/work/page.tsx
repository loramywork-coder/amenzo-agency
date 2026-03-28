"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import { projects, categories } from "@/data/projects";
import { Section, SectionHeader } from "@/components/ui/section";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getProjectLogo } from "@/components/ui/project-logos";
import { PREVIEW_MAP } from "@/components/sections/project-reel";
import { getCategoryColor } from "@/lib/tag-colors";

const categoryMap: Record<string, string> = {
  All: "All",
  Hospitality: "Hospitality",
  Gastro: "Gastro",
  "Real Estate": "Real Estate",
  "E-Commerce": "E-Commerce",
  Technology: "Technology",
  "Non-Profit": "Non-Profit",
  Fitness: "Fitness",
  Wellness: "Wellness",
  Entertainment: "Entertainment",
  Retail: "Retail",
  Creative: "Creative",
  "Art & Culture": "Art & Culture",
};

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === categoryMap[activeFilter] || p.categoryTag === activeFilter.toUpperCase());

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-bg">
        <div className="container-wide">
          <AnimateIn animation="fadeUp">
            <p className="caption mb-4 text-violet">PORTFOLIO</p>
          </AnimateIn>
          <AnimateIn animation="fadeUp" delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-tight">
              Selected Work
            </h1>
          </AnimateIn>
          <AnimateIn animation="fadeUp" delay={0.2}>
            <p className="mt-6 text-xl text-text-secondary max-w-2xl">
              A showcase of our design capabilities across industries. Each preview demonstrates the quality and craftsmanship we bring to every project.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="pb-12 bg-bg sticky top-0 z-30">
        <div className="container-wide">
          <AnimateIn animation="fadeUp" delay={0.3}>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
                    activeFilter === cat
                      ? "bg-violet text-white"
                      : "bg-surface text-text-secondary border border-border hover:border-violet/50 hover:text-text-primary"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Project Grid */}
      <Section>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              staggerDelay={0.1}
            >
              {filteredProjects.map((project) => (
                <StaggerItem key={project.slug}>
                  <div className="group relative overflow-hidden rounded-2xl bg-surface border border-border transition-all duration-500 hover:border-violet/40 hover:shadow-2xl hover:shadow-violet/5">
                      {/* Preview — mini homepage or image fallback */}
                      <Link href={`/work/${project.slug}`} className="block">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          {project.demoSlug && PREVIEW_MAP[project.demoSlug] ? (
                            (() => {
                              const Preview = PREVIEW_MAP[project.demoSlug!];
                              return <Preview />;
                            })()
                          ) : (
                            <>
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={800}
                                height={500}
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </>
                          )}
                          {/* Tag removed from preview — shown in content area below */}
                          <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                            <ArrowUpRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </Link>

                      {/* Content */}
                      <div className="px-5 py-4">
                        {/* Tag + Preview button row */}
                        <div className="flex items-center justify-between mb-3">
                          {(() => {
                            const cc = getCategoryColor(project.categoryTag, 0);
                            return (
                              <span
                                className="px-2 py-0.5 rounded-sm text-[8px] font-bold uppercase tracking-[0.12em]"
                                style={{ background: cc.bg, color: cc.text, border: `1px solid ${cc.border}` }}
                              >
                                {project.categoryTag}
                              </span>
                            );
                          })()}
                          {project.demoSlug && (
                            <Link
                              href={`/demos/${project.demoSlug}`}
                              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-semibold uppercase tracking-[0.08em] bg-gradient-to-r from-violet to-cyan text-white hover:shadow-[0_0_15px_rgba(124,58,237,0.25)] transition-all duration-300"
                            >
                              <Eye size={11} />
                              Preview
                            </Link>
                          )}
                        </div>
                        {/* Title + metric */}
                        <Link href={`/work/${project.slug}`} className="block">
                          <h3 className="font-display text-lg font-semibold text-text-primary group-hover:text-violet transition-colors duration-300 leading-tight">
                            {project.client}
                          </h3>
                          <p className="mt-1.5 text-text-secondary text-xs">
                            {project.resultHighlight}
                          </p>
                        </Link>
                      </div>
                    </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted text-lg">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <AnimateIn animation="fadeUp">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-text-primary">
              Ready to be next?
            </h2>
            <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
              Every project in this portfolio started with a single conversation.
              Let&apos;s start yours.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" magnetic>
                Start a Project
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                View Services
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>
    </>
  );
}
