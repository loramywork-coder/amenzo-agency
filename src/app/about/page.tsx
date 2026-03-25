import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  Counter,
} from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import {
  Sparkles,
  Zap,
  Target,
  Handshake,
  ArrowRight,
  Code2,
  Palette,
  Globe,
  Server,
  CreditCard,
  Layout,
  PenTool,
  Wind,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — The Agency Behind the Craft",
  description:
    "AMENZO is a premium web agency in Malta. We use AI-powered tools to deliver agency-quality work at startup speed. Results, not hours.",
  openGraph: {
    title: `About ${SITE_NAME} — The Agency Behind the Craft`,
    description:
      "We use AI-powered tools to deliver agency-quality work at startup speed. Charges for results, not hours.",
  },
};

const VALUES = [
  {
    icon: Sparkles,
    title: "Craft Over Templates",
    description:
      "Every project is built from scratch. No WordPress themes, no page builders, no recycled layouts. Your brand deserves original work, and that is exactly what we deliver.",
  },
  {
    icon: Zap,
    title: "Speed Without Shortcuts",
    description:
      "We leverage AI-powered development tools to move fast without cutting corners. What takes traditional agencies 12 weeks, we ship in 3 with higher quality code.",
  },
  {
    icon: Target,
    title: "Results Not Vanity",
    description:
      "A beautiful website that does not convert is just expensive art. Every design decision we make is tied to a business outcome: more leads, more sales, more growth.",
  },
  {
    icon: Handshake,
    title: "Partners Not Vendors",
    description:
      "We do not disappear after launch. Your success is our success. We stay invested in your growth and treat every project as if our own reputation depends on it, because it does.",
  },
] as const;

const STATS = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 95, suffix: "+", label: "Avg Lighthouse Score" },
  { value: 3, suffix: " weeks", label: "Avg Delivery Time" },
] as const;

const TECH_STACK = [
  { name: "Next.js", icon: Globe },
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Vercel", icon: Server },
  { name: "Supabase", icon: Server },
  { name: "Stripe", icon: CreditCard },
  { name: "Figma", icon: PenTool },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-bg overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.08),transparent_60%)]" />
        <div className="container-wide relative z-10 pt-40 pb-24">
          <AnimateIn animation="fadeIn" delay={0.1}>
            <p className="caption mb-6 text-violet">About AMENZO</p>
          </AnimateIn>
          <TextReveal>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[0.95]">
              The Agency
            </h1>
          </TextReveal>
          <TextReveal delay={0.15}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mt-2">
              <span className="gradient-text">Behind the Craft</span>
            </h1>
          </TextReveal>
          <AnimateIn animation="fadeUp" delay={0.5}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed">
              We build premium digital experiences for businesses that refuse to
              blend in. Powered by modern AI tools, driven by craft, measured by
              results.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <AnimateIn animation="fadeUp">
            <SectionHeader
              caption="Our Story"
              title="Built Different. On Purpose."
              className="mb-0"
            />
          </AnimateIn>
          <div className="space-y-6">
            <AnimateIn animation="fadeUp" delay={0.1}>
              <p className="text-lg text-text-secondary leading-relaxed">
                AMENZO was founded on a simple observation: the web agency model
                is broken. Clients pay for hours, not outcomes. Projects drag on
                for months. Budgets balloon. And the end result is often a
                template with a fresh coat of paint.
              </p>
            </AnimateIn>
            <AnimateIn animation="fadeUp" delay={0.2}>
              <p className="text-lg text-text-secondary leading-relaxed">
                We took a different path. By integrating AI-powered development
                tools like Claude Code and Cowork into our workflow, we deliver
                agency-quality work at startup speed. Every line of code is
                custom. Every design is original. Every pixel serves a purpose.
              </p>
            </AnimateIn>
            <AnimateIn animation="fadeUp" delay={0.3}>
              <p className="text-lg text-text-secondary leading-relaxed">
                We charge for results, not hours. Our clients get premium
                websites that load in under two seconds, score 95+ on Lighthouse,
                and are built on a modern stack that scales with their business.
                No bloated WordPress installs, no maintenance nightmares, no
                technical debt.
              </p>
            </AnimateIn>
            <AnimateIn animation="fadeUp" delay={0.4}>
              <p className="text-lg text-text-primary font-medium">
                The future of web development is not about bigger teams. It is
                about sharper tools, deeper expertise, and relentless focus on
                what matters: your business growth.
              </p>
            </AnimateIn>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-surface">
        <AnimateIn animation="fadeUp">
          <SectionHeader
            caption="Our Values"
            title="What We Stand For"
            subtitle="Four principles that guide every decision, every design, and every line of code."
            align="center"
          />
        </AnimateIn>
        <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
          {VALUES.map((value) => (
            <StaggerItem key={value.title}>
              <div className="group relative rounded-2xl border border-border bg-surface-elevated p-8 md:p-10 transition-all duration-500 hover:border-violet/30 hover:shadow-lg hover:shadow-violet/5">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-violet/10 text-violet transition-colors duration-300 group-hover:bg-violet/20">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Team */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimateIn animation="fadeUp">
            <div>
              <p className="caption mb-4 text-violet">The Team</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
                Lean Team,{" "}
                <span className="gradient-text">Outsized Results</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                We are a lean team that punches above its weight. While big
                agencies throw bodies at problems, we throw expertise and
                cutting-edge tools. The result? Faster delivery, lower costs, and
                better outcomes.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Every project is led by a senior developer and designer who has
                been building for the web for over a decade. No juniors learning
                on your dime. No account managers playing telephone. You talk
                directly to the people building your product.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Our AI-augmented workflow means a team of one can produce the
                output of ten, with the consistency and quality that only comes
                from a single creative vision.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn animation="fadeUp" delay={0.2}>
            <div className="rounded-2xl border border-border bg-surface-elevated p-8 md:p-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet to-cyan mb-6 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-text-primary mb-1">
                Founder & Lead
              </h3>
              <p className="text-violet font-medium mb-4">
                Design, Development & Strategy
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                Full-stack developer and designer with 10+ years building digital
                products for startups, agencies, and enterprise clients across
                Europe. Obsessed with performance, typography, and building things
                that actually work.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Figma", "AI/ML"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-violet/10 text-violet border border-violet/20"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-surface">
        <AnimateIn animation="fadeUp">
          <SectionHeader
            caption="Our Stack"
            title="Modern Tools, Modern Results"
            subtitle="We use the best tools in the industry. No legacy baggage, no technical debt."
            align="center"
          />
        </AnimateIn>
        <StaggerContainer
          className="flex flex-wrap justify-center gap-6 md:gap-8"
          staggerDelay={0.08}
        >
          {TECH_STACK.map((tech) => (
            <StaggerItem key={tech.name}>
              <div className="group flex flex-col items-center gap-3 px-6 py-5 rounded-xl border border-border bg-surface-elevated transition-all duration-300 hover:border-violet/30 hover:shadow-md hover:shadow-violet/5 min-w-[120px]">
                <tech.icon className="w-8 h-8 text-text-muted transition-colors duration-300 group-hover:text-violet" />
                <span className="text-sm font-medium text-text-secondary transition-colors duration-300 group-hover:text-text-primary">
                  {tech.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Numbers */}
      <Section>
        <AnimateIn animation="fadeUp">
          <SectionHeader
            caption="By the Numbers"
            title="Track Record That Speaks"
            align="center"
          />
        </AnimateIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <AnimateIn key={stat.label} animation="fadeUp" delay={i * 0.1}>
              <div className="text-center">
                <div className="font-display text-5xl md:text-6xl font-bold text-text-primary mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-text-secondary text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-surface">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateIn animation="fadeUp">
            <p className="caption mb-4 text-violet">Ready to Start?</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed">
              Whether you need a new website, a rebrand, or a complete digital
              overhaul, we are ready to make it happen. No fluff, no filler, just
              results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/start-project" size="lg" magnetic>
                Start a Project <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary" size="lg">
                Send Us an Email
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>
    </>
  );
}
