"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { HEADER_LINKS, SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {HEADER_LINKS.map((link) => {
              // Services link gets a dropdown
              if (link.label === "Services") {
                return (
                  <div
                    key={link.href}
                    ref={dropdownRef}
                    className="relative flex items-center"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-[13px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 link-underline inline-flex items-center gap-1",
                        pathname === link.href || pathname.startsWith("/services")
                          ? "text-white"
                          : "text-white/40 hover:text-white"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={12}
                        className={cn(
                          "transition-transform duration-200",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </Link>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] rounded-xl border border-border bg-surface/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden"
                        >
                          <div className="p-2">
                            {SERVICE_DROPDOWN.map((service, i) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="flex items-center justify-between px-4 py-3 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-white/[0.04] transition-all duration-150 group"
                              >
                                <span className="font-medium group-hover:text-white transition-colors">
                                  {service.label}
                                </span>
                                <span className="text-xs text-text-muted group-hover:text-violet transition-colors">
                                  from &euro;{service.price}
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-border p-2">
                            <Link
                              href="/services"
                              className="flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-violet hover:bg-violet/10 transition-colors"
                            >
                              View All Services
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[13px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 link-underline",
                    pathname === link.href
                      ? "text-white"
                      : "text-white/40 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/start-project"
              className="px-6 py-2 bg-white text-[#0A0A0A] text-[12px] uppercase tracking-[0.12em] font-medium rounded-full hover:bg-white/90 transition-all duration-200"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-2 text-text-primary"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
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
            className="fixed inset-0 z-40 bg-[#040410]/95 backdrop-blur-xl flex flex-col justify-center items-center lg:hidden"
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
                        Services
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
                      {link.label}
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
                  Start a Project
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
