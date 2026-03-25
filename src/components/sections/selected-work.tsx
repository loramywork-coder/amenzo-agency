"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { projects } from "@/data/projects";

export function SelectedWork() {
  const featured = projects.slice(0, 6);

  return (
    <Section id="work">
      <SectionHeader
        caption="SELECTED WORK"
        title="Projects That Speak for Themselves"
        subtitle="A selection of our recent work across industries"
      />

      <div className="space-y-28 md:space-y-36">
        {featured.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <AnimateIn
              key={project.slug}
              animation={isEven ? "slideLeft" : "slideRight"}
              delay={0.1}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-7 ${
                    !isEven ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-xl bg-surface aspect-[16/10] group-hover:shadow-2xl group-hover:shadow-violet/10 transition-shadow duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    {/* Browser frame overlay */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-surface/90 backdrop-blur-sm flex items-center px-3 gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-coral/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-warning/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-success/60" />
                      <span className="ml-3 text-[10px] text-text-muted font-mono">
                        {project.client.toLowerCase().replace(/\s+/g, "")}.com
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div
                  className={`lg:col-span-5 ${
                    !isEven ? "lg:order-1" : ""
                  }`}
                >
                  <span className="text-[11px] uppercase tracking-[0.15em] gradient-text">
                    {project.categoryTag}
                  </span>
                  <h3 className="font-display text-3xl md:text-[28px] font-bold text-text-primary tracking-[-0.02em] leading-[1.08] mt-3 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-[16px] text-text-secondary mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Result highlight */}
                  <div className="mb-6">
                    <span className="text-[20px] font-bold gradient-text">
                      {project.resultHighlight}
                    </span>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[10px] uppercase font-mono text-text-muted bg-surface rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-text-primary group-hover:text-violet transition-colors link-underline">
                    View Project
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </AnimateIn>
          );
        })}
      </div>

      <AnimateIn className="mt-20 text-center">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-lg font-medium text-text-secondary hover:text-violet transition-colors"
        >
          View All Projects
          <ArrowRight size={18} />
        </Link>
      </AnimateIn>
    </Section>
  );
}
