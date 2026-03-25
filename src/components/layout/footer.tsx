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
import { Globe, ExternalLink, Palette } from "lucide-react";

const serviceLinks = SERVICES.slice(0, 6).map((s) => ({
  label: s.title,
  href: `/services#${s.slug}`,
}));

const industryLinks = [
  { label: "Hotels & Resorts", href: "/work" },
  { label: "Restaurants & Bars", href: "/work" },
  { label: "Real Estate", href: "/work" },
  { label: "E-Commerce", href: "/work" },
  { label: "Technology", href: "/work" },
  { label: "Non-Profits", href: "/work" },
];

const socialLinks = [
  { icon: Globe, href: "#", label: "Instagram" },
  { icon: ExternalLink, href: "#", label: "LinkedIn" },
  { icon: Palette, href: "#", label: "Dribbble" },
];

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1A1A1A]">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo color="white" showGradientAccent={false} />
            <p className="mt-5 text-[13px] text-[#555] max-w-xs leading-relaxed">
              Premium web design, development & digital agency based in
              Malta. We build websites that make businesses impossible to
              ignore.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#555] hover:text-text-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-[#555] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#777] hover:text-text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/start-project"
                  className="text-[14px] text-[#777] hover:text-text-primary transition-colors duration-300"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-[#555] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#777] hover:text-text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-[#555] mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-[14px] text-[#777]">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-text-primary transition-colors duration-300"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="hover:text-text-primary transition-colors duration-300"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>{CONTACT_ADDRESS}</li>
              <li className="text-[#555]">Mon-Fri: 9:00-18:00 CET</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1A1A1A]">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#444]">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-[12px] text-[#444]">
            <Link
              href="/privacy"
              className="hover:text-[#777] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#777] transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="hover:text-[#777] transition-colors duration-300"
            >
              Cookies
            </Link>
          </div>
          <p className="text-[11px] text-[#333] italic hidden md:block">
            Made with obsessive attention to detail by {SITE_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
