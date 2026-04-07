import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Quote,
} from "lucide-react";
import { projects } from "@/data/projects";
import { SITE_NAME } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { getTagColor, getCategoryColor } from "@/lib/tag-colors";
import { getProjectLogo } from "@/components/ui/project-logos";
import { CaseStudyHero } from "@/components/ui/case-study-hero";
import { PoweredByChip } from "@/components/ui/powered-by";

const TECH_URLS: Record<string, string> = {
  "next.js": "https://nextjs.org",
  "react": "https://react.dev",
  "typescript": "https://typescriptlang.org",
  "tailwind css": "https://tailwindcss.com",
  "vercel": "https://vercel.com",
  "supabase": "https://supabase.com",
  "stripe": "https://stripe.com",
  "stripe connect": "https://stripe.com/connect",
  "figma": "https://figma.com",
  "framer motion": "https://motion.dev",
  "mapbox": "https://mapbox.com",
  "three.js": "https://threejs.org",
  "d3.js": "https://d3js.org",
  "sanity cms": "https://sanity.io",
  "shopify": "https://shopify.com",
  "woocommerce": "https://woocommerce.com",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study | ${SITE_NAME}`,
      description: project.description,
      images: [{ url: project.image, width: 1200, height: 630 }],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-0 bg-bg overflow-hidden">
        {/* Subtle colored glow at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.06] blur-[120px]" style={{ background: project.color }} />
        <div className="container-wide relative z-10 pb-12">
          <AnimateIn animation="fadeUp">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-violet transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Link>
          </AnimateIn>

          <AnimateIn animation="fadeUp" delay={0.1}>
            {(() => {
              const cc = getCategoryColor(project.categoryTag, 0);
              return (
                <span
                  className="inline-block px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-[0.12em] mb-6"
                  style={{ background: cc.bg, color: cc.text, border: `1px solid ${cc.border}` }}
                >
                  {project.categoryTag}
                </span>
              );
            })()}
          </AnimateIn>

          {(() => {
            const Logo = getProjectLogo(project.slug);
            return Logo ? (
              <AnimateIn animation="fadeUp" delay={0.12}>
                <div className="mb-6">
                  <Logo className="w-[200px] h-auto" />
                </div>
              </AnimateIn>
            ) : null;
          })()}

          <AnimateIn animation="fadeUp" delay={0.15}>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-tight">
              {project.title}
            </h1>
          </AnimateIn>

          <AnimateIn animation="fadeUp" delay={0.2}>
            <p className="mt-6 text-xl text-text-secondary max-w-3xl">
              {project.description}
            </p>
          </AnimateIn>

          {/* Tech tags - simple */}
          <AnimateIn animation="fadeUp" delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => {
                const c = getTagColor(tech, idx);
                return (
                  <span key={tech} className="px-3 py-1.5 rounded-md text-xs font-medium" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
                    {tech}
                  </span>
                );
              })}
            </div>
          </AnimateIn>
        </div>

        {/* Hero Preview — browser chrome with live preview, same as carousel */}
        <AnimateIn animation="fadeUp" delay={0.3}>
          <div className="w-full mx-auto" style={{ maxWidth: "1400px" }}>
            {project.demoSlug ? (
              <CaseStudyHero
                demoSlug={project.demoSlug}
                categoryTag={project.categoryTag}
                color={project.color}
              />
            ) : (
              <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
              </div>
            )}
          </div>
        </AnimateIn>
      </section>

      {/* Key Metrics */}
      <Section>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {project.results.map((result, i) => (
            <StaggerItem key={i}>
              <div
                className="text-center p-6 rounded-2xl bg-surface border border-border border-t-2 hover:-translate-y-1 hover:shadow-lg transition-all duration-500"
                style={{ borderTopColor: project.color }}
              >
                <p className="font-display text-2xl md:text-3xl font-bold" style={{ color: project.color }}>
                  {result.split(" ")[0]}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  {result.split(" ").slice(1).join(" ")}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* The Brief */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-24">
          <AnimateIn animation="fadeUp">
            <div>
              <p className="caption mb-4" style={{ color: project.color }}>THE BRIEF</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">
                What they needed
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {project.description}
              </p>
            </div>
          </AnimateIn>

          {/* The Challenge */}
          <AnimateIn animation="fadeUp">
            <div>
              <p className="caption mb-4" style={{ color: project.color, opacity: 0.8 }}>THE CHALLENGE</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">
                What stood in the way
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </AnimateIn>

          {/* The Approach */}
          <AnimateIn animation="fadeUp">
            <div>
              <p className="caption mb-4" style={{ color: project.color, opacity: 0.7 }}>THE APPROACH</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">
                How we tackled it
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {project.approach}
              </p>
            </div>
          </AnimateIn>

          {/* The Solution */}
          <AnimateIn animation="fadeUp">
            <div>
              <p className="caption mb-4" style={{ color: project.color, opacity: 0.9 }}>THE SOLUTION</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">
                What we built
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>
          </AnimateIn>

          {/* The Results */}
          <AnimateIn animation="fadeUp">
            <div>
              <p className="caption mb-4 text-violet">THE RESULTS</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">
                The impact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.results.map((result, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-surface border border-border border-l-2"
                    style={{ borderLeftColor: project.color }}
                  >
                    <p className="font-display text-lg font-semibold text-text-primary">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Testimonial */}
      {project.testimonial && (
        <Section>
          <AnimateIn animation="fadeUp">
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="w-12 h-12 text-violet/30 mx-auto mb-6" />
              <blockquote className="font-display text-2xl md:text-3xl font-medium text-text-primary leading-relaxed">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="font-semibold text-text-primary">
                  {project.testimonial.name}
                </p>
                <p className="text-text-secondary text-sm">
                  {project.testimonial.title}, {project.client}
                </p>
              </div>
            </div>
          </AnimateIn>
        </Section>
      )}

      {/* Project Preview + Gallery */}
      <Section>
        <AnimateIn animation="fadeUp">
          <p className="caption mb-4" style={{ color: project.color }}>PREVIEW</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-12">
            Project Showcase
          </h2>
        </AnimateIn>

        {/* Mini homepage preview from carousel */}
        {project.demoSlug && (
          <AnimateIn animation="fadeUp" delay={0.1}>
            <Link href={`/demos/${project.demoSlug}`} className="block group mb-8">
              <CaseStudyHero
                demoSlug={project.demoSlug}
                categoryTag="Live Preview"
                color={project.color}
              />
            </Link>
          </AnimateIn>
        )}

        {/* Additional images */}
        {project.images.length > 0 && (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((img, i) => (
              <StaggerItem key={i}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border">
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </Section>

      {/* Demo Button */}
      {project.demoSlug && (
        <Section>
          <div className="text-center">
            <AnimateIn animation="fadeUp">
              <Button
                href={`/demos/${project.demoSlug}`}
                variant="primary"
                size="lg"
                magnetic
              >
                <ExternalLink className="w-5 h-5" />
                Try Live Demo
              </Button>
            </AnimateIn>
          </div>
        </Section>
      )}

      {/* Prev / Next Navigation */}
      <section className="py-20 bg-bg border-t border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="group p-8 rounded-2xl bg-surface border border-border hover:border-violet/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-text-secondary group-hover:text-violet transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm uppercase tracking-wider">
                    Previous Project
                  </span>
                </div>
                <p className="mt-3 font-display text-xl font-semibold text-text-primary">
                  {prevProject.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextProject && (
              <Link
                href={`/work/${nextProject.slug}`}
                className="group p-8 rounded-2xl bg-surface border border-border hover:border-violet/40 transition-all duration-300 text-right"
              >
                <div className="flex items-center justify-end gap-3 text-text-secondary group-hover:text-violet transition-colors">
                  <span className="text-sm uppercase tracking-wider">
                    Next Project
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
                <p className="mt-3 font-display text-xl font-semibold text-text-primary">
                  {nextProject.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Case Study Disclaimer */}
      <div className="max-w-[600px] mx-auto mt-16 border-l-2 border-white/10 pl-4 text-center">
        <p className="text-[12px] italic text-white/25">
          This case study presents a representative example of Amenzo&apos;s design capabilities. Names, brands, and metrics are illustrative. Contact us for real client references.
        </p>
      </div>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <AnimateIn animation="fadeUp">
            <p className="caption mb-4 text-violet">LIKE WHAT YOU SEE?</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-text-primary">
              Let&apos;s build something like this for you
            </h2>
            <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
              Every project starts with a conversation. Tell us what you need,
              and we&apos;ll show you what&apos;s possible.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button href="/start-project" variant="primary" size="lg" magnetic>
                Start a Project
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                View More Work
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Floating project navigator */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-xl border-t border-[#1A1A1A]">
        <div className="container-wide py-3 flex items-center justify-between gap-3">
          {/* Prev */}
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] font-medium text-white/50 hover:text-white hover:bg-white/5 transition-all duration-300 min-w-0"
            >
              <ArrowLeft size={14} className="shrink-0" />
              <span className="truncate hidden sm:inline">{prevProject.title}</span>
              <span className="sm:hidden">Prev</span>
            </Link>
          ) : <div />}

          {/* Center: current project + demo button */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.1em] text-white/30 font-medium hidden md:inline">
              {project.categoryTag}
            </span>
            <span className="text-[12px] font-semibold text-white/80 hidden sm:inline">
              {project.title}
            </span>
            {project.demoSlug && (
              <Link
                href={`/demos/${project.demoSlug}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}88)` }}
              >
                <ExternalLink size={11} />
                View Demo
              </Link>
            )}
          </div>

          {/* Next */}
          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-semibold text-white transition-all duration-300 hover:scale-105 min-w-0"
              style={{ background: nextProject.color, boxShadow: `0 0 20px ${nextProject.color}30` }}
            >
              <span className="truncate hidden sm:inline">{nextProject.title}</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight size={14} className="shrink-0" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </>
  );
}
