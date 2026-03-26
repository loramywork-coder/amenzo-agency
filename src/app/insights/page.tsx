import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Insights — Blog & Articles",
  description:
    "Honest insights on web design, development, SEO, and digital strategy. Written by the team at AMENZO.",
  openGraph: {
    title: "Insights — Blog & Articles | Amenzo",
    description:
      "Honest insights on web design, development, SEO, and digital strategy. Written by the team at AMENZO.",
  },
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-bg relative overflow-hidden">
        {/* SVG decorative element */}
        <svg className="absolute top-20 right-0 w-[600px] h-[400px] opacity-[0.04]" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="300" cy="200" r="180" stroke="url(#blogGrad)" strokeWidth="0.5" />
          <circle cx="300" cy="200" r="140" stroke="url(#blogGrad)" strokeWidth="0.5" />
          <circle cx="300" cy="200" r="100" stroke="url(#blogGrad)" strokeWidth="0.5" />
          <line x1="120" y1="200" x2="480" y2="200" stroke="url(#blogGrad)" strokeWidth="0.5" />
          <line x1="300" y1="20" x2="300" y2="380" stroke="url(#blogGrad)" strokeWidth="0.5" />
          <defs>
            <linearGradient id="blogGrad" x1="0" y1="0" x2="600" y2="400">
              <stop stopColor="#7C3AED" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>

        <div className="container-wide relative z-10">
          <AnimateIn animation="fadeUp">
            <p className="caption mb-4 text-violet">BLOG</p>
          </AnimateIn>
          <AnimateIn animation="fadeUp" delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-tight">
              Insights &{" "}
              <span className="gradient-text">Ideas</span>
            </h1>
          </AnimateIn>
          <AnimateIn animation="fadeUp" delay={0.2}>
            <p className="mt-6 text-lg text-text-secondary max-w-xl">
              Honest thinking on web design, development, and digital strategy.
              No fluff. Just what works.
            </p>
          </AnimateIn>
          {/* SVG accent underline */}
          <AnimateIn animation="fadeUp" delay={0.3}>
            <svg className="mt-8 w-24 h-1" viewBox="0 0 96 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="96" height="4" rx="2" fill="url(#accentLine)" />
              <defs>
                <linearGradient id="accentLine" x1="0" y1="2" x2="96" y2="2">
                  <stop stopColor="#7C3AED" />
                  <stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
          </AnimateIn>
        </div>
      </section>

      {/* Blog Grid */}
      <Section>
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
        >
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/insights/${post.slug}`} className="group block h-full">
                <article className="h-full flex flex-col rounded-2xl bg-surface border border-border overflow-hidden transition-all duration-500 hover:border-violet/40 hover:shadow-2xl hover:shadow-violet/5">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={500}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet/90 text-white">
                        {post.category}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span className="w-1 h-1 rounded-full bg-text-muted" />
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-display text-lg font-semibold text-text-primary leading-snug group-hover:text-violet transition-colors duration-300">
                      {post.title}
                    </h2>

                    <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="text-sm font-medium text-violet group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                        Read Article
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <AnimateIn animation="fadeUp">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-text-primary">
              Want insights tailored to your business?
            </h2>
            <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
              Book a free consultation and we&apos;ll audit your current digital
              presence with actionable recommendations.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg" magnetic>
                Get a Free Audit
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>
    </>
  );
}
