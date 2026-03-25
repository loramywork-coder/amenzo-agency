"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export function ProjectReel() {
  const reelProjects = [...projects, ...projects]; // Double for seamless loop

  return (
    <section className="py-12 overflow-hidden bg-bg">
      <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted text-center mb-8">
        Selected Work
      </p>

      {/* Scrolling reel */}
      <div className="relative">
        <div className="flex gap-6 animate-reel hover:[animation-play-state:paused]">
          {reelProjects.map((project, i) => (
            <Link
              key={`${project.slug}-${i}`}
              href={`/work/${project.slug}`}
              className="group shrink-0 w-[420px] md:w-[500px]"
            >
              {/* Browser mockup frame */}
              <div className="rounded-xl overflow-hidden bg-surface border border-border group-hover:border-border-hover transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] group-hover:-translate-y-1">
                {/* Chrome bar */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#1A1A1A] border-b border-border">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-3 text-[10px] text-text-muted font-mono">
                    {project.client.toLowerCase().replace(/\s+/g, "")}.com
                  </span>
                </div>
                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="500px"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
              </div>
              {/* Label below */}
              <div className="mt-4 px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[13px] font-display font-semibold text-text-primary">
                  {project.title}
                </p>
                <p className="text-[11px] text-text-muted uppercase tracking-[0.1em]">
                  {project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
