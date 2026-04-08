import { generatePageMeta } from "@/lib/seo";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/motion";
import { T } from "@/lib/i18n/T";
import { BlogGrid } from "./blog-grid";

export const metadata = generatePageMeta({
  title: "Web Design Blog — Tips & Guides for Businesses",
  description: "Web design tips, pricing guides, SEO advice, and digital insights for businesses. Learn how to make the most of your online presence.",
  path: "/insights",
});

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
            <p className="caption mb-4 text-violet"><T k="insights.eyebrowBlog" /></p>
          </AnimateIn>
          <AnimateIn animation="fadeUp" delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-tight">
              <T k="insights.title.line1" />{" "}
              <span className="gradient-text"><T k="insights.title.line2" /></span>
            </h1>
          </AnimateIn>
          <AnimateIn animation="fadeUp" delay={0.2}>
            <p className="mt-6 text-lg text-text-secondary max-w-xl">
              <T k="insights.subtitleLong" />
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
        <BlogGrid />
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <AnimateIn animation="fadeUp">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-text-primary">
              <T k="insights.cta.title" />
            </h2>
            <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
              <T k="insights.cta.subtitle" />
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg" magnetic>
                <T k="insights.cta.button" />
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>
    </>
  );
}
