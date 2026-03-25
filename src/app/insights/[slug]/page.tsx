import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { SITE_NAME } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${SITE_NAME}`,
      description: post.excerpt,
      images: [{ url: post.image, width: 800, height: 500 }],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function parseContent(content: string) {
  const lines = content.split("\n");
  const elements: { type: string; content: string; key: number }[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      elements.push({ type: "spacer", content: "", key: key++ });
      continue;
    }
    if (trimmed.startsWith("## ")) {
      elements.push({
        type: "h2",
        content: trimmed.slice(3),
        key: key++,
      });
    } else if (trimmed.startsWith("- ")) {
      elements.push({
        type: "li",
        content: trimmed.slice(2),
        key: key++,
      });
    } else if (/^\d+\.\s/.test(trimmed)) {
      elements.push({
        type: "ol",
        content: trimmed.replace(/^\d+\.\s/, ""),
        key: key++,
      });
    } else {
      elements.push({
        type: "p",
        content: trimmed,
        key: key++,
      });
    }
  }

  return elements;
}

function renderInlineFormatting(text: string) {
  // Handle **bold** patterns
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-text-primary font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const parsedContent = parseContent(post.content);

  // Get related articles (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-0 bg-bg">
        <div className="container-wide max-w-4xl mx-auto">
          <AnimateIn animation="fadeUp">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-violet transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
          </AnimateIn>

          <AnimateIn animation="fadeUp" delay={0.1}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet/10 text-violet border border-violet/20 mb-6">
              {post.category}
            </span>
          </AnimateIn>

          <AnimateIn animation="fadeUp" delay={0.15}>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-text-primary leading-tight">
              {post.title}
            </h1>
          </AnimateIn>

          <AnimateIn animation="fadeUp" delay={0.2}>
            <div className="mt-6 flex items-center gap-4 text-sm text-text-secondary">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="w-1 h-1 rounded-full bg-text-muted" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </AnimateIn>
        </div>

        {/* Hero Image */}
        <AnimateIn animation="fadeUp" delay={0.3}>
          <div className="mt-12 container-wide max-w-5xl mx-auto">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Article Body */}
      <Section>
        <article className="max-w-3xl mx-auto">
          <div className="prose-custom space-y-1">
            {parsedContent.map((el) => {
              switch (el.type) {
                case "h2":
                  return (
                    <h2
                      key={el.key}
                      className="font-display text-2xl md:text-3xl font-bold text-text-primary mt-12 mb-4"
                    >
                      {el.content}
                    </h2>
                  );
                case "p":
                  return (
                    <p
                      key={el.key}
                      className="text-lg text-text-secondary leading-relaxed"
                    >
                      {renderInlineFormatting(el.content)}
                    </p>
                  );
                case "li":
                  return (
                    <div
                      key={el.key}
                      className="flex items-start gap-3 pl-4 text-lg text-text-secondary leading-relaxed"
                    >
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-violet shrink-0" />
                      <span>{renderInlineFormatting(el.content)}</span>
                    </div>
                  );
                case "ol":
                  return (
                    <div
                      key={el.key}
                      className="flex items-start gap-3 pl-4 text-lg text-text-secondary leading-relaxed"
                    >
                      <span className="mt-0.5 text-violet font-semibold shrink-0">
                        &bull;
                      </span>
                      <span>{renderInlineFormatting(el.content)}</span>
                    </div>
                  );
                case "spacer":
                  return <div key={el.key} className="h-4" />;
                default:
                  return null;
              }
            })}
          </div>
        </article>
      </Section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <Section>
          <AnimateIn animation="fadeUp">
            <p className="caption mb-4 text-violet">KEEP READING</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-12">
              Related Articles
            </h2>
          </AnimateIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            {relatedPosts.map((related) => (
              <StaggerItem key={related.slug}>
                <Link
                  href={`/insights/${related.slug}`}
                  className="group block"
                >
                  <article className="rounded-2xl bg-surface border border-border overflow-hidden transition-all duration-500 hover:border-violet/40">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        width={800}
                        height={500}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet/90 text-white">
                          {related.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
                        <time dateTime={related.date}>
                          {formatDate(related.date)}
                        </time>
                        <span className="w-1 h-1 rounded-full bg-text-muted" />
                        <span>{related.readTime}</span>
                      </div>
                      <h3 className="font-display text-base font-semibold text-text-primary leading-snug group-hover:text-violet transition-colors">
                        {related.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      )}

      {/* CTA */}
      <Section>
        <div className="text-center">
          <AnimateIn animation="fadeUp">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-text-primary">
              Ready to put these insights into action?
            </h2>
            <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
              Let&apos;s discuss how we can apply these strategies to your
              business.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" magnetic>
                Get in Touch
              </Button>
              <Button href="/insights" variant="secondary" size="lg">
                More Articles
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>
    </>
  );
}
