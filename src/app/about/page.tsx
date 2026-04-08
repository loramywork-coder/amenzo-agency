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
  { icon: Sparkles, titleKey: "about.values.v1.title" as const, descKey: "about.values.v1.desc" as const },
  { icon: Zap, titleKey: "about.values.v2.title" as const, descKey: "about.values.v2.desc" as const },
  { icon: Target, titleKey: "about.values.v3.title" as const, descKey: "about.values.v3.desc" as const },
  { icon: Handshake, titleKey: "about.values.v4.title" as const, descKey: "about.values.v4.desc" as const },
] as const;

const TECH_STACK = [
  { name: "Next.js", icon: Globe, hoverBg: "hover:bg-white/5", hoverBorder: "hover:border-white/30", hoverText: "group-hover:text-white", descKey: "about.stack.next" as const },
  { name: "React", icon: Code2, hoverBg: "hover:bg-[#61DAFB]/5", hoverBorder: "hover:border-[#61DAFB]/40", hoverText: "group-hover:text-[#61DAFB]", descKey: "about.stack.react" as const },
  { name: "TypeScript", icon: Code2, hoverBg: "hover:bg-[#3178C6]/5", hoverBorder: "hover:border-[#3178C6]/40", hoverText: "group-hover:text-[#3178C6]", descKey: "about.stack.ts" as const },
  { name: "Tailwind CSS", icon: Wind, hoverBg: "hover:bg-[#06B6D4]/5", hoverBorder: "hover:border-[#06B6D4]/40", hoverText: "group-hover:text-[#06B6D4]", descKey: "about.stack.tw" as const },
  { name: "Vercel", icon: Server, hoverBg: "hover:bg-white/5", hoverBorder: "hover:border-white/30", hoverText: "group-hover:text-white", descKey: "about.stack.vercel" as const },
  { name: "Supabase", icon: Server, hoverBg: "hover:bg-[#3FCF8E]/5", hoverBorder: "hover:border-[#3FCF8E]/40", hoverText: "group-hover:text-[#3FCF8E]", descKey: "about.stack.supabase" as const },
  { name: "Stripe", icon: CreditCard, hoverBg: "hover:bg-[#635BFF]/5", hoverBorder: "hover:border-[#635BFF]/40", hoverText: "group-hover:text-[#635BFF]", descKey: "about.stack.stripe" as const },
  { name: "Framer Motion", icon: Wind, hoverBg: "hover:bg-[#FF0055]/5", hoverBorder: "hover:border-[#FF0055]/40", hoverText: "group-hover:text-[#FF0055]", descKey: "about.stack.framer" as const },
] as const;

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "About", url: "/about" }]} />
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        
        <div className="container-wide relative z-10 pt-40 pb-24">
          <AnimateIn animation="fadeIn" delay={0.1}>
            <p className="caption mb-6 text-violet"><T k="about.hero.eyebrow" /></p>
          </AnimateIn>
          <TextReveal>
            <p className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-tight">
              <T k="about.hero.line1" />
            </p>
          </TextReveal>
          <TextReveal delay={0.15}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mt-2">
              <span className="gradient-text"><T k="about.hero.line2" /></span>
            </h1>
          </TextReveal>
          <AnimateIn animation="fadeUp" delay={0.5}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
              <T k="about.hero.subtitle" />
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
              <p className="text-lg text-white leading-relaxed"><T k="about.story.p1" /></p>
            </AnimateIn>
            <AnimateIn animation="fadeUp" delay={0.2}>
              <p className="text-lg text-white leading-relaxed"><T k="about.story.p2" /></p>
            </AnimateIn>
            <AnimateIn animation="fadeUp" delay={0.3}>
              <p className="text-lg text-white leading-relaxed"><T k="about.story.p3" /></p>
            </AnimateIn>
            <AnimateIn animation="fadeUp" delay={0.4}>
              <p className="text-lg text-white leading-relaxed"><T k="about.story.p4" /></p>
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
            <StaggerItem key={value.titleKey}>
              <div className="group relative rounded-2xl border border-border bg-surface-elevated p-8 md:p-10 transition-all duration-500 hover:border-violet/30 hover:shadow-lg hover:shadow-violet/5">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-violet/10 text-violet transition-colors duration-300 group-hover:bg-violet/20">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-text-primary mb-3">
                  <T k={value.titleKey} />
                </h3>
                <p className="text-white/85 leading-relaxed">
                  <T k={value.descKey} />
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
              <p className="text-sm text-violet mt-0.5"><T k="about.team.amy.role" /></p>
              <p className="text-xs text-text-muted mt-2 leading-relaxed"><T k="about.team.amy.desc" /></p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="rounded-xl border border-border bg-surface-elevated p-6 text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden border border-white/10 mx-auto mb-4 relative">
                <Image src="/images/team/lorenzo.png" alt="Lorenzo Senn" fill sizes="112px" className="object-cover" style={{objectPosition:"center 20%"}} />
              </div>
              <h3 className="font-display text-lg font-semibold text-text-primary">Lorenzo Senn</h3>
              <p className="text-sm text-violet mt-0.5"><T k="about.team.lorenzo.role" /></p>
              <p className="text-xs text-text-muted mt-2 leading-relaxed"><T k="about.team.lorenzo.desc" /></p>
            </div>
          </AnimateIn>
        </div>

        {/* Company Details */}
        <AnimateIn delay={0.3}>
          <div className="mt-14 max-w-xl mx-auto">
            <div className="rounded-xl border border-border bg-surface-elevated/50 p-6 sm:p-8">
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-5"><T k="about.registered" /></h3>
              <dl className="space-y-0 text-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-white/[0.06]">
                  <dt className="text-text-muted"><T k="about.reg.tradeName" /></dt>
                  <dd className="text-text-primary font-medium">Amenzo Studio</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-white/[0.06]">
                  <dt className="text-text-muted"><T k="about.reg.legalEntity" /></dt>
                  <dd className="text-text-primary font-medium">ProgressPro</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-white/[0.06]">
                  <dt className="text-text-muted"><T k="about.reg.representedBy" /></dt>
                  <dd className="text-text-secondary">Amy de Boers</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-white/[0.06]">
                  <dt className="text-text-muted">KVK</dt>
                  <dd className="text-text-secondary">84642920</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-white/[0.06]">
                  <dt className="text-text-muted"><T k="about.reg.location" /></dt>
                  <dd className="text-text-secondary sm:text-right"><T k="about.reg.locationValue" /></dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3">
                  <dt className="text-text-muted"><T k="about.reg.clients" /></dt>
                  <dd className="text-text-secondary sm:text-right"><T k="about.reg.clientsValue" /></dd>
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
            caption={<T k="about.stack.eyebrow" />}
            title={<T k="about.stack.title" />}
            subtitle={<T k="about.stack.subtitle" />}
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
                      <T k={tech.descKey} />
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
            <p className="caption mb-4 text-violet"><T k="about.cta.eyebrow" /></p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              <T k="about.cta.title" />
            </h2>
            <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed">
              <T k="about.cta.subtitle" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/start-project" size="lg" magnetic>
                <T k="cta.startProject" /> <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary" size="lg">
                <T k="about.cta.email" />
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>
    </>
  );
}
