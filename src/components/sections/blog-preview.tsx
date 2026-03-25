"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { StaggerContainer, StaggerItem, AnimateIn } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { blogPosts } from "@/data/blog";
import { format } from "date-fns";

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <Section>
      <SectionHeader
        caption="INSIGHTS"
        title="From Our Journal"
        subtitle="Thoughts on web design, development, and digital strategy"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <StaggerItem key={post.slug}>
            <Link
              href={`/insights/${post.slug}`}
              className="group block rounded-xl bg-surface border border-border hover:border-violet/30 overflow-hidden transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-0.5 text-xs font-medium text-violet bg-violet/10 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-text-muted flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-text-primary group-hover:text-violet transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-text-secondary line-clamp-2">
                  {post.excerpt}
                </p>
                <p className="text-xs text-text-muted mt-4">
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <AnimateIn className="mt-12 text-center">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-violet transition-colors"
        >
          Read All Articles
          <ArrowRight size={16} />
        </Link>
      </AnimateIn>
    </Section>
  );
}
