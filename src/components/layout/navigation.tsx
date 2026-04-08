"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { HEADER_LINKS, SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/locale-context";
import type { TranslationKey } from "@/lib/i18n/dictionary";

const LINK_LABEL_KEYS: Record<string, TranslationKey> = {
  Work: "nav.work",
  Capabilities: "nav.capabilities",
  Services: "nav.services",
  Pricing: "nav.pricing",
  About: "nav.about",
  Insights: "nav.insights",
  Contact: "nav.contact",
};

const SERVICE_DROPDOWN = SERVICES.map((s) => ({
  label: s.title,
  href: `/services#${s.slug}`,
  price: s.price,
}));

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();
  const pathname = usePathname();
  const isDemo = pathname.startsWith("/demos") || pathname.startsWith("/showcases");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (isDemo) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDemo]);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isDemo) return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen, isDemo]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (isDemo) return null;

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          "bg-transparent"
        )}
      >
        <nav className="container-wide flex items-center justify-between h-20">
          <Link
            href="/"
            className="relative z-50"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Logo color="white" />
          </Link>

          <div className="flex items-center gap-2 relative z-50">
            {/* Language toggle */}
            <div
              className="flex items-center text-[11px] font-medium tracking-wider border border-white/15 rounded-full overflow-hidden"
              role="group"
              aria-label="Language"
            >
              <button
                onClick={() => setLocale("en")}
                className={cn(
                  "px-2.5 py-1 transition-colors",
                  locale === "en" ? "bg-white text-black" : "text-text-secondary hover:text-text-primary"
                )}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
              <button
                onClick={() => setLocale("de")}
                className={cn(
                  "px-2.5 py-1 transition-colors",
                  locale === "de" ? "bg-white text-black" : "text-text-secondary hover:text-text-primary"
                )}
                aria-pressed={locale === "de"}
              >
                DE
              </button>
            </div>

            {/* Menu toggle — visible on all screens */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-primary"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#040410]/95 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {HEADER_LINKS.map((link, i) => {
                if (link.label === "Services") {
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                      className="flex flex-col items-center"
                    >
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={cn(
                          "text-[28px] font-display font-bold tracking-[-0.02em] transition-colors",
                          pathname.startsWith("/services")
                            ? "text-text-primary"
                            : "text-text-secondary"
                        )}
                      >
                        {t("nav.services")}
                        <ChevronDown
                          size={14}
                          className={cn(
                            "inline ml-1 transition-transform duration-200",
                            mobileServicesOpen && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden mt-3 flex flex-col items-center gap-2"
                          >
                            {SERVICE_DROPDOWN.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="text-sm text-text-muted hover:text-violet transition-colors"
                              >
                                {service.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-[28px] font-display font-bold tracking-[-0.02em] transition-colors hover:text-text-primary",
                        pathname === link.href
                          ? "text-text-primary"
                          : "text-text-secondary"
                      )}
                    >
                      {LINK_LABEL_KEYS[link.label] ? t(LINK_LABEL_KEYS[link.label]) : link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="/start-project"
                  className="px-9 py-4 bg-white text-[#0A0A0A] text-[13px] uppercase tracking-[0.15em] font-medium rounded-full"
                >
                  {t("cta.startProject")}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
