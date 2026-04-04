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

const serviceLinks = SERVICES.map((s) => ({
  label: s.title,
  href: `/services#${s.slug}`,
}));

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.04] relative">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo color="white" showGradientAccent={false} />
            <p className="mt-5 text-[13px] text-white/50 max-w-xs leading-relaxed">
              Web design &amp; development studio. Hand-coded websites that make businesses impossible to ignore.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-white/40 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/start-project"
                  className="text-[14px] text-white/60 hover:text-white transition-colors duration-300"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-white/40 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] text-white/30 uppercase mb-5 font-medium">
              Contact
            </h4>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-white/50 hover:text-white transition-colors duration-300 block">
              {CONTACT_EMAIL}
            </a>
            <div className="flex items-center gap-4 mt-5">
              <span className="text-xs text-white/20 cursor-default">LinkedIn</span>
              <span className="text-xs text-white/20 cursor-default">Instagram</span>
              <span className="text-xs text-white/20 cursor-default">Facebook</span>
            </div>
            <p className="text-xs text-white/15 mt-5 italic">
              Currently booking for{" "}
              <span className="text-white/30">
                {new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleString("en-US", { month: "long", year: "numeric" })}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="border-t border-white/[0.04]">
        <div className="container-wide py-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-2 text-white/35">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/></svg>
            <span className="text-[10px] uppercase tracking-[0.15em] font-medium">SSL Secured</span>
          </div>
          <div className="flex items-center gap-2 text-white/35">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
            <span className="text-[10px] uppercase tracking-[0.15em] font-medium">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-white/35">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span className="text-[10px] uppercase tracking-[0.15em] font-medium">99.9% Uptime</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] mt-0">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Amenzo Studio
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-white/70 transition-colors">Cookies</Link>
            <Link href="/impressum" className="hover:text-white/70 transition-colors">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
