import { generatePageMeta } from "@/lib/seo";
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
  description: "Professional web design services. Custom websites from €750, e-commerce from €4,000, SEO from €300/month, hosting from €80/month. Hand-coded with Next.js. No templates.",
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
    title: "Web Design & Development",
    icon: "Monitor",
    description:
      "Custom websites built from scratch. No templates. No WordPress themes. Hand-crafted code that performs. Every site we build is a bespoke creation designed around your brand, your audience, and your goals.",
    included: [
      "Discovery workshop and brand deep-dive",
      "Custom UI/UX design in Figma",
      "Responsive development in Next.js and React",
      "CMS integration (headless or traditional)",
      "Performance optimisation (95+ Lighthouse)",
      "SEO foundation and meta setup",
      "Analytics and conversion tracking",
      "Launch support and post-launch QA",
    ],
    timeline: "1-4 weeks",
    price: "750",
    tags: ["Next.js", "React", "Tailwind", "TypeScript", "Vercel"],
  },
  {
    title: "Website Redesign",
    icon: "RefreshCw",
    description:
      "Your current site not cutting it? We take what you have and transform it into something extraordinary. A redesign is not just a facelift. It is a strategic rethink of how your digital presence serves your business.",
    included: [
      "Current site audit and performance review",
      "Content audit and migration plan",
      "New information architecture",
      "Complete UI/UX redesign",
      "Full-stack development on modern platform",
      "SEO preservation and 301 redirect mapping",
      "Data migration and content transfer",
      "A/B testing setup for key pages",
      "Launch plan and rollback strategy",
    ],
    timeline: "2-4 weeks",
    price: "750",
    tags: ["Audit", "Redesign", "Migration", "Optimisation"],
  },
  {
    title: "E-Commerce",
    icon: "ShoppingBag",
    description:
      "Online stores that convert. From boutique shops to full-scale retail platforms, we build beautiful storefronts that are engineered to sell. Every product page, every checkout flow, every upsell is designed for maximum revenue.",
    included: [
      "Custom storefront design and development",
      "Product catalogue setup and management",
      "Shopping cart and checkout optimisation",
      "Payment gateway integration (Stripe, PayPal)",
      "Inventory management system",
      "Order notification and email flows",
      "Shipping and tax configuration",
      "Mobile-first responsive design",
      "Conversion rate optimisation",
    ],
    timeline: "4-6 weeks",
    price: "4,000",
    tags: ["Shopify", "WooCommerce", "Stripe", "Custom"],
  },
  {
    title: "SEO & Performance",
    icon: "TrendingUp",
    description:
      "Beautiful means nothing if nobody finds it. We build fast, accessible, and search-engine-optimised from day one. Our technical SEO ensures your site not only ranks, but dominates your niche in search results.",
    included: [
      "Technical SEO audit and roadmap",
      "Core Web Vitals optimisation",
      "Schema markup and structured data",
      "On-page SEO (titles, meta, headings)",
      "Site speed and performance tuning",
      "Google Search Console setup and monitoring",
      "Analytics dashboard and monthly reporting",
      "Keyword research and content strategy",
      "Local SEO optimisation (Google Business)",
    ],
    timeline: "Ongoing monthly",
    price: "300/mo",
    tags: ["Technical SEO", "Core Web Vitals", "Schema", "Analytics"],
  },
  {
    title: "Hosting & Maintenance",
    icon: "Server",
    description:
      "Launch is just the beginning. We keep your site fast, secure, updated, and backed up. Our maintenance packages give you peace of mind so you can focus on running your business, not worrying about your website.",
    included: [
      "Managed hosting on Vercel edge network",
      "99.9% uptime guarantee",
      "Daily automated backups",
      "Security monitoring and SSL management",
      "Monthly software and dependency updates",
      "Performance monitoring and alerts",
      "Priority bug fixes (24-hour response)",
      "Monthly health report and recommendations",
    ],
    timeline: "Ongoing monthly",
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
            <p className="caption mb-6 text-violet">What We Do</p>
          </AnimateIn>
          <TextReveal>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[0.95]">
              Our Services
            </h1>
          </TextReveal>
          <AnimateIn animation="fadeUp" delay={0.4}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed">
              End-to-end digital services from strategy to launch. Every service
              is priced transparently, delivered on time, and built to generate
              real business results.
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
            key={service.title}
            id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
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
                    {service.title}
                  </h2>
                  <p className="text-lg text-text-secondary leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Meta: Timeline & Price */}
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Clock className="w-5 h-5 text-cyan" />
                      <span className="text-sm font-medium">
                        {service.timeline}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <CreditCard className="w-5 h-5 text-cyan" />
                      <span className="text-sm font-medium">
                        From &euro;{service.price}
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
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </AnimateIn>

              {/* Right: What's Included */}
              <AnimateIn animation="fadeUp" delay={0.2}>
                <div className="rounded-2xl border border-border bg-surface-elevated p-8 md:p-10">
                  <h3 className="font-display text-xl font-semibold text-text-primary mb-6">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-4">
                    {service.included.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-violet/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-violet" />
                        </div>
                        <span className="text-text-secondary leading-relaxed">
                          {item}
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
            <p className="caption mb-4 text-violet">Not Sure What You Need?</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              Let&apos;s Figure It Out{" "}
              <span className="gradient-text">Together</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed">
              Book a free 30-minute strategy call. We will review your current
              digital presence, discuss your goals, and recommend the right
              services for your budget and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/start-project" size="lg" magnetic>
                Start a Project <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                href={`mailto:${CONTACT_EMAIL}`}
                variant="secondary"
                size="lg"
              >
                Email Us Directly
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>
    </>
  );
}
