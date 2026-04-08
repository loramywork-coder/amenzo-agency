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
import { getTagColor } from "@/lib/tag-colors";
import {
  Monitor,
  ShoppingBag,
  TrendingUp,
  RefreshCw,
  Server,
  ArrowRight,
  Check,
  Clock,
  CreditCard,
} from "lucide-react";

export const metadata = generatePageMeta({
  title: "Web Design Services — Custom Websites, E-Commerce, SEO",
  description: "Professional web design services. Custom websites from €1,000, e-commerce from €4,000, SEO from €300/month, hosting from €80/month. Built with Next.js. No templates.",
  path: "/services",
});

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  ShoppingBag,
  TrendingUp,
  RefreshCw,
  Server,
};

const SERVICE_DETAILS = [
  {
    slug: "web-design-development",
    titleKey: "svcd.web.title" as const,
    icon: "Monitor",
    descKey: "svcd.web.desc" as const,
    includedKeys: ["svcd.web.i1","svcd.web.i2","svcd.web.i3","svcd.web.i4","svcd.web.i5","svcd.web.i6","svcd.web.i7","svcd.web.i8"] as const,
    timelineKey: "svcd.web.timeline" as const,
    price: "1,000",
    tags: ["Next.js", "React", "Tailwind", "TypeScript", "Vercel"],
  },
  {
    slug: "website-redesign",
    titleKey: "svcd.redesign.title" as const,
    icon: "RefreshCw",
    descKey: "svcd.redesign.desc" as const,
    includedKeys: ["svcd.redesign.i1","svcd.redesign.i2","svcd.redesign.i3","svcd.redesign.i4","svcd.redesign.i5","svcd.redesign.i6","svcd.redesign.i7","svcd.redesign.i8","svcd.redesign.i9"] as const,
    timelineKey: "svcd.redesign.timeline" as const,
    price: "750",
    tags: ["Audit", "Redesign", "Migration", "Optimisation"],
  },
  {
    slug: "e-commerce",
    titleKey: "svcd.ecom.title" as const,
    icon: "ShoppingBag",
    descKey: "svcd.ecom.desc" as const,
    includedKeys: ["svcd.ecom.i1","svcd.ecom.i2","svcd.ecom.i3","svcd.ecom.i4","svcd.ecom.i5","svcd.ecom.i6","svcd.ecom.i7","svcd.ecom.i8","svcd.ecom.i9"] as const,
    timelineKey: "svcd.ecom.timeline" as const,
    price: "4,000",
    tags: ["Shopify", "WooCommerce", "Stripe", "Custom"],
  },
  {
    slug: "seo-performance",
    titleKey: "svcd.seo.title" as const,
    icon: "TrendingUp",
    descKey: "svcd.seo.desc" as const,
    includedKeys: ["svcd.seo.i1","svcd.seo.i2","svcd.seo.i3","svcd.seo.i4","svcd.seo.i5","svcd.seo.i6","svcd.seo.i7","svcd.seo.i8","svcd.seo.i9"] as const,
    timelineKey: "svcd.seo.timeline" as const,
    price: "300/mo",
    tags: ["Technical SEO", "Core Web Vitals", "Schema", "Analytics"],
  },
  {
    slug: "hosting-maintenance",
    titleKey: "svcd.host.title" as const,
    icon: "Server",
    descKey: "svcd.host.desc" as const,
    includedKeys: ["svcd.host.i1","svcd.host.i2","svcd.host.i3","svcd.host.i4","svcd.host.i5","svcd.host.i6","svcd.host.i7","svcd.host.i8"] as const,
    timelineKey: "svcd.host.timeline" as const,
    price: "80/mo",
    tags: ["Vercel", "Monitoring", "Backups", "Updates"],
  },
] as const;


export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Services", url: "/services" }]} />
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        
        <div className="container-wide relative z-10 pt-40 pb-24">
          <AnimateIn animation="fadeIn" delay={0.1}>
            <p className="caption mb-6 text-violet"><T k="services.intro.eyebrow" /></p>
          </AnimateIn>
          <TextReveal>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[0.95]">
              <T k="services.intro.title" />
            </h1>
          </TextReveal>
          <AnimateIn animation="fadeUp" delay={0.4}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed">
              <T k="services.intro.subtitle" />
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Services List */}
      {SERVICE_DETAILS.map((service, index) => {
        const IconComponent = ICON_MAP[service.icon] || Monitor;
        const isEven = index % 2 === 0;

        return (
          <Section
            key={service.slug}
            id={service.slug}
            className={isEven ? "" : ""}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left: Info */}
              <AnimateIn animation="fadeUp">
                <div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-violet/10 text-violet mb-6">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-4">
                    <T k={service.titleKey} />
                  </h2>
                  <p className="text-lg text-text-secondary leading-relaxed mb-8">
                    <T k={service.descKey} />
                  </p>

                  {/* Meta: Timeline & Price */}
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Clock className="w-5 h-5 text-cyan" />
                      <span className="text-sm font-medium">
                        <T k={service.timelineKey} />
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <CreditCard className="w-5 h-5 text-cyan" />
                      <span className="text-sm font-medium">
                        <T k="services.startingFrom" /> &euro;{service.price}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag, tagIdx) => {
                      const c = getTagColor(tag, tagIdx);
                      return (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-md"
                          style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  <Button href="/start-project" magnetic>
                    <T k="cta.getQuote" /> <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </AnimateIn>

              {/* Right: What's Included */}
              <AnimateIn animation="fadeUp" delay={0.2}>
                <div className="rounded-2xl border border-border bg-surface-elevated p-8 md:p-10">
                  <h3 className="font-display text-xl font-semibold text-text-primary mb-6">
                    <T k="services.included" />
                  </h3>
                  <ul className="space-y-4">
                    {service.includedKeys.map((ik) => (
                      <li key={ik} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-violet/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-violet" />
                        </div>
                        <span className="text-text-secondary leading-relaxed">
                          <T k={ik} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            </div>
          </Section>
        );
      })}

      {/* CTA */}
      <Section className="bg-bg">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateIn animation="fadeUp">
            <p className="caption mb-4 text-violet"><T k="services.cta.eyebrow" /></p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              <T k="services.cta.title" />
            </h2>
            <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed">
              <T k="services.cta.subtitle" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/start-project" size="lg" magnetic>
                <T k="cta.startProject" /> <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                href={`mailto:${CONTACT_EMAIL}`}
                variant="secondary"
                size="lg"
              >
                <T k="about.cta.email" />
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>
    </>
  );
}
