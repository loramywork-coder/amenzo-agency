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
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet/10 text-violet border border-violet/20 mb-6">
              {project.categoryTag}
            </span>
          </AnimateIn>

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

          {/* Tech Stack */}
          <AnimateIn animation="fadeUp" delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-surface border border-border text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* Full-width Hero Image */}
        <AnimateIn animation="fadeUp" delay={0.3}>
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
          </div>
        </AnimateIn>
      </section>

      {/* Key Metrics */}
      <Section>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {project.results.map((result, i) => (
            <StaggerItem key={i}>
              <div className="text-center p-6 rounded-2xl bg-surface border border-border">
                <p className="font-display text-2xl md:text-3xl font-bold text-text-primary">
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
              <p className="caption mb-4 text-violet">THE BRIEF</p>
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
              <p className="caption mb-4 text-coral">THE CHALLENGE</p>
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
              <p className="caption mb-4 text-cyan">THE APPROACH</p>
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
              <p className="caption mb-4 text-success">THE SOLUTION</p>
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
                    className="p-5 rounded-xl bg-surface border border-border"
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

      {/* Image Gallery */}
      {project.images.length > 1 && (
        <Section>
          <AnimateIn animation="fadeUp">
            <p className="caption mb-4 text-violet">GALLERY</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-12">
              Project Showcase
            </h2>
          </AnimateIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((img, i) => (
              <StaggerItem key={i}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
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
        </Section>
      )}

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
              <Button href="/contact" variant="primary" size="lg" magnetic>
                Start a Project
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                View More Work
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>
    </>
  );
}
