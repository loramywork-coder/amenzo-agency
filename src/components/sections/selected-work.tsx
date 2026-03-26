"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { projects } from "@/data/projects";
import { getCategoryColor } from "@/lib/tag-colors";

export function SelectedWork() {
  const featured = projects.slice(0, 4);

  return (
    <Section id="work">
      <SectionHeader
        caption="WHAT WE BUILD"
        title="Selected Work"
        subtitle="A showcase of our design capabilities across industries."
      />

      <div className="space-y-8">
        {featured.map((project, index) => (
          <AnimateIn key={project.slug} animation="fadeUp" delay={index * 0.1}>
            <Link
              href={`/work/${project.slug}`}
              className="group relative block w-full min-h-[400px] md:min-h-[500px] rounded-xl overflow-hidden"
            >
              {/* Background image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:brightness-110 group-hover:scale-[1.02]"
                sizes="100vw"
              />

              {/* Dark overlay with bottom gradient */}
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content — bottom left */}
              <div className="absolute inset-0 flex items-end p-8 md:p-12 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="max-w-[640px]">
                  {/* Category pill */}
                  {(() => {
                    const cc = getCategoryColor(project.categoryTag, index);
                    return (
                      <span
                        className="inline-block px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-semibold rounded-md mb-4"
                        style={{ background: cc.bg, color: cc.text, border: `1px solid ${cc.border}` }}
                      >
                        {project.categoryTag}
                      </span>
                    );
                  })()}

                  {/* Title */}
                  <h3 className="font-display text-[28px] md:text-[32px] font-bold text-white tracking-[-0.02em] leading-[1.08] mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[16px] text-[#CCC] leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Result highlight */}
                  <p className="text-[20px] font-bold gradient-text mb-5">
                    {project.resultHighlight}
                  </p>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-cyan transition-colors">
                    View Preview
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </Link>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn className="mt-16 text-center">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-lg font-medium text-[#888888] hover:text-violet transition-colors"
        >
          View All Previews
          <ArrowRight size={18} />
        </Link>
      </AnimateIn>
    </Section>
  );
}
