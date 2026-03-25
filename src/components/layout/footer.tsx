import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import {
  SITE_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_ADDRESS,
  NAV_LINKS,
  SERVICES,
} from "@/lib/constants";
import { Globe, ExternalLink, Palette, ArrowUpRight } from "lucide-react";

const serviceLinks = SERVICES.slice(0, 6).map((s) => ({
  label: s.title,
  href: `/services#${s.slug}`,
}));

const industryLinks = [
  { label: "Hotels & Resorts", href: "/work?category=Hospitality" },
  { label: "Restaurants & Bars", href: "/work?category=F%26B" },
  { label: "Real Estate", href: "/work?category=Real+Estate" },
  { label: "E-Commerce", href: "/work?category=E-Commerce" },
  { label: "Technology", href: "/work?category=Technology" },
  { label: "Non-Profits", href: "/work?category=Non-Profit" },
];

const socialLinks = [
  { icon: Globe, href: "#", label: "Instagram" },
  { icon: ExternalLink, href: "#", label: "LinkedIn" },
  { icon: Palette, href: "#", label: "Dribbble" },
];

export function Footer() {
  return (
    <footer className="bg-bg border-t border-border">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-text-secondary max-w-xs">
              Premium web design, development & digital agency based in
              Malta. We build websites that make businesses impossible to
              ignore.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-text-primary mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/start-project"
                  className="text-sm text-violet hover:text-cyan transition-colors inline-flex items-center gap-1"
                >
                  Start a Project <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-text-primary mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-text-primary mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-text-primary transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="hover:text-text-primary transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>{CONTACT_ADDRESS}</li>
              <li className="text-text-muted">Mon-Fri: 9:00-18:00 CET</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-text-muted">
            <Link
              href="/privacy"
              className="hover:text-text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-text-secondary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-text-secondary transition-colors"
            >
              Cookies
            </Link>
          </div>
          <p className="text-xs text-text-muted hidden md:block">
            Made with obsessive attention to detail by {SITE_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
