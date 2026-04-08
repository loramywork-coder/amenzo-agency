import Image from "next/image";
import { generatePageMeta } from "@/lib/seo";
import { T } from "@/lib/i18n/T";
import { BreadcrumbSchema } from "@/components/structured-data";

import { CONTACT_EMAIL } from "@/lib/constants";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
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
  Wind,
} from "lucide-react";

export const metadata = generatePageMeta({
  title: "About Amenzo — Web Design Studio",
  description: "Meet the team behind Amenzo Studio. A two-person web design studio building custom Next.js websites for businesses worldwide — no templates, no WordPress.",
  path: "/about",
});

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

const TECH_STACK = [
  { name: "Next.js", icon: Globe, color: "#000000", hoverBg: "hover:bg-white/5", hoverBorder: "hover:border-white/30", hoverText: "group-hover:text-white", desc: "React framework for production. Server rendering, routing, and performance out of the box." },
  { name: "React", icon: Code2, color: "#61DAFB", hoverBg: "hover:bg-[#61DAFB]/5", hoverBorder: "hover:border-[#61DAFB]/40", hoverText: "group-hover:text-[#61DAFB]", desc: "Component-based UI library. Reusable, testable, and powers the world's best interfaces." },
  { name: "TypeScript", icon: Code2, color: "#3178C6", hoverBg: "hover:bg-[#3178C6]/5", hoverBorder: "hover:border-[#3178C6]/40", hoverText: "group-hover:text-[#3178C6]", desc: "Type-safe JavaScript. Catches bugs before they ship and makes refactoring fearless." },
  { name: "Tailwind CSS", icon: Wind, color: "#06B6D4", hoverBg: "hover:bg-[#06B6D4]/5", hoverBorder: "hover:border-[#06B6D4]/40", hoverText: "group-hover:text-[#06B6D4]", desc: "Utility-first CSS. Rapid styling with zero bloat — every class is purposeful." },
  { name: "Vercel", icon: Server, color: "#FFFFFF", hoverBg: "hover:bg-white/5", hoverBorder: "hover:border-white/30", hoverText: "group-hover:text-white", desc: "Edge deployment platform. Global CDN, instant deploys, and automatic HTTPS." },
  { name: "Supabase", icon: Server, color: "#3FCF8E", hoverBg: "hover:bg-[#3FCF8E]/5", hoverBorder: "hover:border-[#3FCF8E]/40", hoverText: "group-hover:text-[#3FCF8E]", desc: "Open-source backend. Auth, database, storage, and real-time — all in one." },
  { name: "Stripe", icon: CreditCard, color: "#635BFF", hoverBg: "hover:bg-[#635BFF]/5", hoverBorder: "hover:border-[#635BFF]/40", hoverText: "group-hover:text-[#635BFF]", desc: "Payment infrastructure. Secure checkout, subscriptions, and invoicing for any business." },
  { name: "Framer Motion", icon: Wind, color: "#FF0055", hoverBg: "hover:bg-[#FF0055]/5", hoverBorder: "hover:border-[#FF0055]/40", hoverText: "group-hover:text-[#FF0055]", desc: "Animation library. Smooth scroll reveals, transitions, and micro-interactions." },
] as const;

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "About", url: "/about" }]} />
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        
        <div className="container-wide relative z-10 pt-40 pb-24">
          <AnimateIn animation="fadeIn" delay={0.1}>
            <p className="caption mb-6 text-violet">About AMENZO</p>
          </AnimateIn>
          <TextReveal>
            <p className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-tight">
              The Studio
            </p>
          </TextReveal>
          <TextReveal delay={0.15}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mt-2">
              <span className="gradient-text">Behind the Craft</span>
            </h1>
          </TextReveal>
          <AnimateIn animation="fadeUp" delay={0.5}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
              We build premium digital experiences for businesses that refuse to
              blend in. Powered by AI automation, driven by craft, measured by
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
              caption={<T k="about.story.eyebrow" />}
              title={<T k="about.story.title" />}
              className="mb-0"
            />
          </AnimateIn>
          <div className="space-y-6">
            <AnimateIn animation="fadeUp" delay={0.1}>
              <p className="text-lg text-white leading-relaxed">
                AMENZO was founded on a simple observation: the traditional web studio model
                is broken. Clients pay for hours, not outcomes. Projects drag on
                for months. Budgets balloon. And the end result is often a
                template with a fresh coat of paint.
              </p>
            </AnimateIn>
            <AnimateIn animation="fadeUp" delay={0.2}>
              <p className="text-lg text-white leading-relaxed">
                We took a different path. By integrating AI-powered automation into
                our workflow, we deliver studio-quality work at startup speed. Every line of code is
                custom. Every design is original. Every pixel serves a purpose.
              </p>
            </AnimateIn>
            <AnimateIn animation="fadeUp" delay={0.3}>
              <p className="text-lg text-white leading-relaxed">
                We charge for results, not hours. Our clients get premium
                websites that load in under two seconds, score 95+ on Lighthouse,
                and are built on a modern stack that scales with their business.
                No bloated WordPress installs, no maintenance nightmares, no
                technical debt.
              </p>
            </AnimateIn>
            <AnimateIn animation="fadeUp" delay={0.4}>
              <p className="text-lg text-white leading-relaxed">
                The future of web development is not about bigger teams. It is
                about sharper tools, deeper expertise, and relentless focus on
                what matters: your business growth.
              </p>
            </AnimateIn>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="">
        <AnimateIn animation="fadeUp">
          <SectionHeader
            caption={<T k="about.values.eyebrow" />}
            title={<T k="about.values.title" />}
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
                <p className="text-white/85 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Founders */}
      <Section>
        <AnimateIn>
          <SectionHeader
            caption={<T k="about.team.eyebrow" />}
            title={<T k="about.team.title" />}
            align="center"
          />
        </AnimateIn>
        <AnimateIn delay={0.05}>
          <p className="text-center text-lg text-text-secondary max-w-2xl mx-auto mb-12">
            <T k="about.team.subtitle" />
          </p>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          <AnimateIn delay={0.1}>
            <div className="rounded-xl border border-border bg-surface-elevated p-6 text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden border border-white/10 mx-auto mb-4 relative">
                <Image src="/images/team/amy.png" alt="Amy de Boers" fill sizes="112px" className="object-cover" style={{objectPosition:"center 12%", transform:"scale(1.22)"}} />
              </div>
              <h3 className="font-display text-lg font-semibold text-text-primary">Amy de Boers</h3>
              <p className="text-sm text-violet mt-0.5">Operations &amp; Strategy</p>
              <p className="text-xs text-text-muted mt-2 leading-relaxed">Client success, business operations, and project delivery</p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="rounded-xl border border-border bg-surface-elevated p-6 text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden border border-white/10 mx-auto mb-4 relative">
                <Image src="/images/team/lorenzo.png" alt="Lorenzo Senn" fill sizes="112px" className="object-cover" style={{objectPosition:"center 20%"}} />
              </div>
              <h3 className="font-display text-lg font-semibold text-text-primary">Lorenzo Senn</h3>
              <p className="text-sm text-violet mt-0.5">Design &amp; Engineering</p>
              <p className="text-xs text-text-muted mt-2 leading-relaxed">Design, development, and technical architecture</p>
            </div>
          </AnimateIn>
        </div>

        {/* Company Details */}
        <AnimateIn delay={0.3}>
          <div className="mt-14 max-w-xl mx-auto">
            <div className="rounded-xl border border-border bg-surface-elevated/50 p-6 sm:p-8">
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-5">Registered Information</h3>
              <dl className="space-y-0 text-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-white/[0.06]">
                  <dt className="text-text-muted">Trade Name</dt>
                  <dd className="text-text-primary font-medium">Amenzo Studio</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-white/[0.06]">
                  <dt className="text-text-muted">Legal Entity</dt>
                  <dd className="text-text-primary font-medium">ProgressPro</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-white/[0.06]">
                  <dt className="text-text-muted">Represented by</dt>
                  <dd className="text-text-secondary">Amy de Boers</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-white/[0.06]">
                  <dt className="text-text-muted">KVK</dt>
                  <dd className="text-text-secondary">84642920</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-white/[0.06]">
                  <dt className="text-text-muted">Location</dt>
                  <dd className="text-text-secondary sm:text-right">Nederhorst den Berg, Netherlands</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3">
                  <dt className="text-text-muted">Clients</dt>
                  <dd className="text-text-secondary sm:text-right">SMBs across Europe and beyond</dd>
                </div>
              </dl>
            </div>
          </div>
        </AnimateIn>
      </Section>

      {/* Tech Stack */}
      <Section className="">
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
              <div className={`group relative flex flex-col items-center gap-3 px-6 py-5 rounded-xl border border-border bg-surface-elevated transition-all duration-500 ${tech.hoverBg} ${tech.hoverBorder} hover:-translate-y-1 hover:shadow-lg min-w-[120px] cursor-pointer`}>
                <tech.icon className={`w-8 h-8 text-text-muted transition-colors duration-500 ${tech.hoverText}`} />
                <span className="text-sm font-medium text-text-secondary transition-colors duration-500 group-hover:text-text-primary">
                  {tech.name}
                </span>
                {/* Tooltip on hover */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 w-[220px]">
                  <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 shadow-xl">
                    <p className="text-[11px] text-white/70 leading-relaxed text-center">
                      {tech.desc}
                    </p>
                  </div>
                  <div className="w-2 h-2 bg-[#1a1a1a] border-l border-t border-[#2a2a2a] rotate-45 absolute -top-1 left-1/2 -translate-x-1/2" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* CTA */}
      <Section className="">
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
