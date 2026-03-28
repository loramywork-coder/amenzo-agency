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
    <footer className="bg-[#060610]/80 border-t border-[#1A1A1A] relative">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo color="white" showGradientAccent={false} />
            <p className="mt-5 text-[13px] text-[#555] max-w-xs leading-relaxed">
              Premium web design, development & digital agency based in
              We build websites that make businesses impossible to
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

      {/* Trust badges */}
      <div className="border-t border-[#1A1A1A]">
        <div className="container-wide py-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {/* SSL Secured */}
          <div className="flex items-center gap-2 text-[#444] hover:text-[#666] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/></svg>
            <span className="text-[10px] uppercase tracking-[0.15em] font-medium">SSL Secured</span>
          </div>
          {/* GDPR Compliant */}
          <div className="flex items-center gap-2 text-[#444] hover:text-[#666] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
            <span className="text-[10px] uppercase tracking-[0.15em] font-medium">GDPR Compliant</span>
          </div>
          {/* Vercel */}
          <div className="flex items-center gap-2 text-[#444] hover:text-[#666] transition-colors">
            <svg width="18" height="18" viewBox="0 0 76 65" fill="currentColor"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/></svg>
            <span className="text-[10px] uppercase tracking-[0.15em] font-medium">Powered by Vercel</span>
          </div>
          {/* Next.js */}
          <div className="flex items-center gap-2 text-[#444] hover:text-[#666] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/></svg>
            <span className="text-[10px] uppercase tracking-[0.15em] font-medium">Built with Next.js</span>
          </div>
          {/* 99.9% Uptime */}
          <div className="flex items-center gap-2 text-[#444] hover:text-[#666] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span className="text-[10px] uppercase tracking-[0.15em] font-medium">99.9% Uptime</span>
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
            <Link
              href="/impressum"
              className="hover:text-[#777] transition-colors duration-300"
            >
              Impressum
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
