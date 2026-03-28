import type { Metadata } from "next";
import Image from "next/image";
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
  { name: "Next.js", icon: Globe, color: "#000000", hoverBg: "hover:bg-white/5", hoverBorder: "hover:border-white/30", hoverText: "group-hover:text-white", desc: "React framework for production. Server rendering, routing, and performance out of the box." },
  { name: "React", icon: Code2, color: "#61DAFB", hoverBg: "hover:bg-[#61DAFB]/5", hoverBorder: "hover:border-[#61DAFB]/40", hoverText: "group-hover:text-[#61DAFB]", desc: "Component-based UI library. Reusable, testable, and powers the world's best interfaces." },
  { name: "TypeScript", icon: Code2, color: "#3178C6", hoverBg: "hover:bg-[#3178C6]/5", hoverBorder: "hover:border-[#3178C6]/40", hoverText: "group-hover:text-[#3178C6]", desc: "Type-safe JavaScript. Catches bugs before they ship and makes refactoring fearless." },
  { name: "Tailwind CSS", icon: Wind, color: "#06B6D4", hoverBg: "hover:bg-[#06B6D4]/5", hoverBorder: "hover:border-[#06B6D4]/40", hoverText: "group-hover:text-[#06B6D4]", desc: "Utility-first CSS. Rapid styling with zero bloat — every class is purposeful." },
  { name: "Vercel", icon: Server, color: "#FFFFFF", hoverBg: "hover:bg-white/5", hoverBorder: "hover:border-white/30", hoverText: "group-hover:text-white", desc: "Edge deployment platform. Global CDN, instant deploys, and automatic HTTPS." },
  { name: "Supabase", icon: Server, color: "#3FCF8E", hoverBg: "hover:bg-[#3FCF8E]/5", hoverBorder: "hover:border-[#3FCF8E]/40", hoverText: "group-hover:text-[#3FCF8E]", desc: "Open-source backend. Auth, database, storage, and real-time — all in one." },
  { name: "Stripe", icon: CreditCard, color: "#635BFF", hoverBg: "hover:bg-[#635BFF]/5", hoverBorder: "hover:border-[#635BFF]/40", hoverText: "group-hover:text-[#635BFF]", desc: "Payment infrastructure. Secure checkout, subscriptions, and invoicing for any business." },
  { name: "Figma", icon: PenTool, color: "#F24E1E", hoverBg: "hover:bg-[#F24E1E]/5", hoverBorder: "hover:border-[#F24E1E]/40", hoverText: "group-hover:text-[#F24E1E]", desc: "Collaborative design tool. Wireframes to high-fidelity, with seamless developer handoff." },
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
          <AnimateIn animation="fadeUp" delay={0.7}>
            <div className="relative aspect-[21/9] rounded-xl overflow-hidden mt-12">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"
                alt="Modern creative workspace"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
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
                Two people.{" "}
                <span className="gradient-text">One obsession.</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                We don&apos;t do job titles or org charts. We are a couple who
                quit comfortable careers to build something we actually believe
                in — a studio that treats every client&apos;s brand with the same
                care we put into our own.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Between us, we cover design, development, strategy, and
                everything in between. Every project gets both of us. Every
                decision is deliberate. Nothing ships unless we both love it.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                We keep the team small on purpose. Small means accountable.
                Small means you always reach the people actually building your
                product. Small means we care about every pixel.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn animation="fadeUp" delay={0.2}>
            <div className="rounded-2xl border border-border bg-surface-elevated p-8 md:p-10 relative overflow-hidden">
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.07),transparent_60%)]" />
              <div className="relative z-10">
                {/* Two silhouette avatars */}
                <div className="flex gap-3 mb-8">
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-16 rounded-full border border-border bg-gradient-to-br from-violet/20 to-cyan/10 flex items-center justify-center"
                      style={{ marginLeft: i === 1 ? "-12px" : 0 }}
                    >
                      <svg viewBox="0 0 32 32" className="w-8 h-8 text-white/20" fill="currentColor">
                        <circle cx="16" cy="11" r="5" />
                        <path d="M4 28c0-6.627 5.373-12 12-12s12 5.373 12 12" />
                      </svg>
                    </div>
                  ))}
                </div>
                <h3 className="font-display text-2xl font-semibold text-text-primary mb-1">
                  Anonymous by choice.
                </h3>
                <p className="text-violet font-medium mb-4">
                  Somewhere in Europe.
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  We let the work speak. Our clients know who we are — and that
                  is enough. What matters is what we build together, not who
                  gets the credit.
                </p>
                <div className="h-px bg-border mb-6" />
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-text-muted">
                    Currently available for new projects
                  </span>
                </div>
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
