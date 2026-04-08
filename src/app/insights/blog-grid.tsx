"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { useLocale } from "@/lib/i18n/locale-context";

function formatDate(dateStr: string, locale: string): string {
  return new Date(dateStr).toLocaleDateString(locale === "de" ? "de-DE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogGrid() {
  const { locale, t } = useLocale();
  return (
    <StaggerContainer
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      staggerDelay={0.1}
    >
      {blogPosts.map((post) => {
        const title = locale === "de" && post.titleDe ? post.titleDe : post.title;
        const excerpt = locale === "de" && post.excerptDe ? post.excerptDe : post.excerpt;
        const category = locale === "de" && post.categoryDe ? post.categoryDe : post.category;
        const readTime = locale === "de" && post.readTimeDe ? post.readTimeDe : post.readTime;
        return (
          <StaggerItem key={post.slug}>
            <Link href={`/insights/${post.slug}`} className="group block h-full">
              <article className="h-full flex flex-col rounded-2xl bg-surface border border-border overflow-hidden transition-all duration-500 hover:border-violet/40 hover:shadow-2xl hover:shadow-violet/5">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={title}
                    width={800}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-black/70 backdrop-blur-sm border border-white/15 text-white shadow-lg">
                      {category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                    <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
                    <span className="w-1 h-1 rounded-full bg-text-muted" />
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {readTime}
                    </span>
                  </div>

                  <h2 className="font-display text-lg font-semibold text-text-primary leading-snug group-hover:text-violet transition-colors duration-300">
                    {title}
                  </h2>

                  <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
                    {excerpt}
                  </p>

                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-sm font-medium text-violet group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                      {t("insights.readArticle")}
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}
