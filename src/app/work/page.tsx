"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, categories } from "@/data/projects";
import { Section, SectionHeader } from "@/components/ui/section";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categoryMap: Record<string, string> = {
  All: "All",
  Hospitality: "Hospitality",
  "Gastro": "Gastro",
  "Real Estate": "Real Estate",
  "E-Commerce": "E-Commerce",
  Technology: "Technology",
  "Non-Profit": "Non-Profit",
  Fitness: "Fitness",
  Marketplace: "Marketplace",
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
            <p className="caption mb-4 text-violet">DESIGN PREVIEWS</p>
          </AnimateIn>
          <AnimateIn animation="fadeUp" delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-tight">
              Our Work
            </h1>
          </AnimateIn>
          <AnimateIn animation="fadeUp" delay={0.2}>
            <p className="mt-6 text-xl text-text-secondary max-w-2xl">
              Concept showcases built to demonstrate what we do. Client projects
              remain confidential for privacy. These previews show exactly what
              your site could look like.
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
                  <Link
                    href={`/work/${project.slug}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-surface border border-border transition-all duration-500 hover:border-violet/40 hover:shadow-2xl hover:shadow-violet/5">
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={800}
                          height={500}
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Category Tag */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/50 backdrop-blur-sm text-white border border-white/10">
                            {project.categoryTag}
                          </span>
                        </div>

                        {/* Arrow */}
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-display text-xl font-semibold text-text-primary group-hover:text-violet transition-colors duration-300">
                          {project.client}
                        </h3>
                        <p className="mt-2 text-text-secondary text-sm">
                          {project.resultHighlight}
                        </p>
                      </div>
                    </div>
                  </Link>
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
