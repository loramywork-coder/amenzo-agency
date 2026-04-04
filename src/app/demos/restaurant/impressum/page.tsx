"use client";

import { DemoBanner } from "@/components/demos/demo-banner";

/* ─── palette ─── */
const C = {
  bg: "#0A0A08",
  surface: "#121210",
  gold: "#C9935A",
  cream: "#F5E6D3",
  muted: "#8A7E70",
  border: "#2A2620",
} as const;

/* ─── font stacks ─── */
const fontDisplay =
  "var(--font-heading), 'Playfair Display', Georgia, serif";
const fontBody = "var(--font-body), 'DM Sans', system-ui, sans-serif";

/* ─── nav links ─── */
const NAV_LINKS = [
  { label: "Home", href: "/demos/restaurant" },
  { label: "Menu", href: "/demos/restaurant" },
  { label: "Contact", href: "/demos/restaurant/contact" },
];

/* ─── section heading helper ─── */
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2
    style={{
      fontFamily: fontDisplay,
      fontWeight: 500,
      fontSize: 20,
      color: C.cream,
      margin: "48px 0 16px",
    }}
  >
    {children}
  </h2>
);

const bodyText: React.CSSProperties = {
  fontFamily: fontBody,
  fontSize: 14,
  lineHeight: 1.85,
  color: "rgba(245,230,211,0.5)",
  margin: "0 0 16px",
};

/* ━━━ PAGE ━━━ */
export default function ImpressumPage() {
  return (
    <div
      style={{
        background: C.bg,
        color: C.cream,
        fontFamily: fontBody,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <DemoBanner />

      {/* ════════════ NAV HEADER ════════════ */}
      <header
        style={{
          position: "fixed",
          top: 40,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(10,10,8,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid rgba(201,147,90,0.08)`,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="/demos/restaurant"
            style={{
              fontFamily: fontDisplay,
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: 20,
              color: C.cream,
              textDecoration: "none",
            }}
          >
            Porto Valletta
          </a>
          <nav style={{ display: "flex", gap: 28 }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: fontBody,
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: C.muted,
                  textDecoration: "none",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = C.cream;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = C.muted;
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ════════════ CONTENT ════════════ */}
      <main
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "128px 24px 128px",
        }}
      >
        <h1
          style={{
            fontFamily: fontDisplay,
            fontWeight: 500,
            fontSize: 32,
            color: C.cream,
            margin: "0 0 12px",
          }}
        >
          Impressum &mdash; Legal Notice
        </h1>
        <div
          style={{
            width: 40,
            height: 2,
            background: C.gold,
            marginBottom: 32,
          }}
        />

        {/* Company information */}
        <SectionHeading>Company Information</SectionHeading>
        <p style={bodyText}>
          <strong style={{ color: "rgba(245,230,211,0.7)" }}>Porto Valletta</strong>
          <br />
          42 Strait Street
          <br />
          Valletta VLT 1432
          <br />
          Malta
        </p>

        <SectionHeading>Contact</SectionHeading>
        <p style={bodyText}>
          Phone:{" "}
          <a
            href="tel:+35621234567"
            style={{ color: C.gold, textDecoration: "none" }}
          >
            +356 2123 4567
          </a>
          <br />
          Email:{" "}
          <a
            href="mailto:info@portovalletta.com"
            style={{ color: C.gold, textDecoration: "none" }}
          >
            info@portovalletta.com
          </a>
        </p>

        <SectionHeading>Registration</SectionHeading>
        <p style={bodyText}>
          Registered with the Malta Business Registry
          <br />
          Registration Number: C 98765
          <br />
          VAT Number: MT 2345 6789
        </p>

        <SectionHeading>Represented By</SectionHeading>
        <p style={bodyText}>
          Managing Director: Marco Borg
        </p>

        <SectionHeading>Liability for Content</SectionHeading>
        <p style={bodyText}>
          The contents of this website have been created with the utmost care.
          However, we cannot guarantee the accuracy, completeness, or timeliness
          of the content. As a service provider, we are responsible for our own
          content on these pages under the general laws. We are not obligated to
          monitor transmitted or stored third-party information, or to
          investigate circumstances indicating illegal activity.
        </p>

        <SectionHeading>Liability for Links</SectionHeading>
        <p style={bodyText}>
          Our website may contain links to external third-party websites over
          whose content we have no influence. We cannot accept any liability for
          the content of linked sites. The respective provider or operator of
          the linked pages is always responsible for the content of those pages.
        </p>

        {/* Disclaimer */}
        <div
          style={{
            marginTop: 64,
            padding: "24px 28px",
            background: C.surface,
            border: `1px solid ${C.border}`,
          }}
        >
          <p
            style={{
              fontFamily: fontBody,
              fontSize: 13,
              lineHeight: 1.7,
              color: "rgba(245,230,211,0.35)",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            This is a fictional website created by Amenzo to demonstrate web
            design capabilities. Porto Valletta is not a real restaurant. No
            reservations will be processed and no personal data is collected or
            stored.
          </p>
        </div>
      </main>

      {/* ════════════ FOOTER ════════════ */}
      <footer
        style={{
          background: C.bg,
          borderTop: "1px solid rgba(201,147,90,0.1)",
          padding: "60px 24px 40px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            marginBottom: 48,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: 24,
                color: C.cream,
                margin: "0 0 12px",
              }}
            >
              Porto Valletta
            </h3>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 14,
                lineHeight: 1.7,
                color: C.muted,
                margin: 0,
              }}
            >
              42 Strait Street
              <br />
              Valletta VLT 1432
              <br />
              Malta
            </p>
          </div>

          <div>
            <h4
              style={{
                fontFamily: fontBody,
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.gold,
                margin: "0 0 16px",
              }}
            >
              Navigate
            </h4>
            {["The Menu", "Wine List", "Private Dining", "Gift Cards", "Careers"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    display: "block",
                    fontFamily: fontBody,
                    fontSize: 14,
                    color: C.muted,
                    textDecoration: "none",
                    padding: "4px 0",
                    transition: "color 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = C.cream;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = C.muted;
                  }}
                >
                  {link}
                </a>
              )
            )}
          </div>

          <div>
            <h4
              style={{
                fontFamily: fontBody,
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.gold,
                margin: "0 0 16px",
              }}
            >
              Hours
            </h4>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 14,
                lineHeight: 1.8,
                color: C.muted,
                margin: 0,
              }}
            >
              Tue &ndash; Sat: 12:00 &ndash; 23:00
              <br />
              Sunday Brunch: 11:00 &ndash; 15:00
              <br />
              Monday: Closed
            </p>
          </div>

          <div>
            <h4
              style={{
                fontFamily: fontBody,
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.gold,
                margin: "0 0 16px",
              }}
            >
              Contact
            </h4>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 14,
                lineHeight: 1.8,
                color: C.muted,
                margin: 0,
              }}
            >
              +356 2123 4567
              <br />
              reservations@portovalletta.com
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(201,147,90,0.08)",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: fontBody,
              fontSize: 13,
              color: "rgba(138,126,112,0.6)",
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} Porto Valletta. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <a
              href="/demos/restaurant/privacy"
              style={{
                fontFamily: fontBody,
                fontSize: 13,
                color: "rgba(138,126,112,0.4)",
                textDecoration: "none",
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = C.cream;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "rgba(138,126,112,0.4)";
              }}
            >
              Privacy
            </a>
            <a
              href="/demos/restaurant/impressum"
              style={{
                fontFamily: fontBody,
                fontSize: 13,
                color: "rgba(138,126,112,0.4)",
                textDecoration: "none",
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = C.cream;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "rgba(138,126,112,0.4)";
              }}
            >
              Impressum
            </a>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 13,
                color: "rgba(138,126,112,0.4)",
                margin: 0,
              }}
            >
              Site by{" "}
              <a
                href="https://amenzo.co"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: C.gold, textDecoration: "none" }}
              >
                Amenzo
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
