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
export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <div
          style={{
            width: 40,
            height: 2,
            background: C.gold,
            marginBottom: 32,
          }}
        />
        <p style={{ ...bodyText, fontStyle: "italic", color: "rgba(245,230,211,0.35)" }}>
          Last updated: January 2026
        </p>

        <p style={bodyText}>
          Porto Valletta (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
          is committed to protecting and respecting your privacy. This policy
          explains how we collect, use, and safeguard personal data when you
          visit our website or make a reservation.
        </p>

        {/* 1 */}
        <SectionHeading>1. Data We Collect</SectionHeading>
        <p style={bodyText}>
          We may collect the following personal data when you make a reservation
          or contact us:
        </p>
        <ul style={{ ...bodyText, paddingLeft: 20 }}>
          <li>Name, email address, and telephone number</li>
          <li>Reservation details (date, time, party size, occasion)</li>
          <li>Dietary requirements or special requests you choose to provide</li>
          <li>Technical data such as IP address, browser type, and device information collected via cookies</li>
        </ul>

        {/* 2 */}
        <SectionHeading>2. Legal Basis for Processing</SectionHeading>
        <p style={bodyText}>
          Under the General Data Protection Regulation (GDPR), we process your
          personal data on the following legal bases:
        </p>
        <ul style={{ ...bodyText, paddingLeft: 20 }}>
          <li>
            <strong style={{ color: "rgba(245,230,211,0.7)" }}>Contract:</strong>{" "}
            Processing necessary to fulfil your reservation request.
          </li>
          <li>
            <strong style={{ color: "rgba(245,230,211,0.7)" }}>Legitimate interest:</strong>{" "}
            Improving our services, ensuring security, and communicating
            relevant information about your visit.
          </li>
          <li>
            <strong style={{ color: "rgba(245,230,211,0.7)" }}>Consent:</strong>{" "}
            Where you have opted in to marketing communications.
          </li>
        </ul>

        {/* 3 */}
        <SectionHeading>3. Data Retention</SectionHeading>
        <p style={bodyText}>
          We retain reservation data for up to 24 months after your last visit
          to provide continuity of service and honour your preferences. Marketing
          consent records are kept for as long as you remain subscribed. You may
          request deletion at any time.
        </p>

        {/* 4 */}
        <SectionHeading>4. Your Rights</SectionHeading>
        <p style={bodyText}>
          Under the GDPR, you have the right to:
        </p>
        <ul style={{ ...bodyText, paddingLeft: 20 }}>
          <li>Access the personal data we hold about you</li>
          <li>Rectify inaccurate or incomplete data</li>
          <li>Request erasure of your data (&ldquo;right to be forgotten&rdquo;)</li>
          <li>Restrict or object to processing</li>
          <li>Data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p style={bodyText}>
          To exercise any of these rights, please contact us at the address below.
        </p>

        {/* 5 */}
        <SectionHeading>5. Contact</SectionHeading>
        <p style={bodyText}>
          If you have questions about this privacy policy or wish to exercise
          your data rights, please contact:
        </p>
        <p style={bodyText}>
          Porto Valletta
          <br />
          42 Strait Street, Valletta VLT 1432, Malta
          <br />
          Email:{" "}
          <a
            href="mailto:privacy@portovalletta.com"
            style={{ color: C.gold, textDecoration: "none" }}
          >
            privacy@portovalletta.com
          </a>
          <br />
          Phone: +356 2123 4567
        </p>

        {/* 6 */}
        <SectionHeading>6. Supervisory Authority</SectionHeading>
        <p style={bodyText}>
          If you believe that we have not adequately addressed your data
          protection concerns, you have the right to lodge a complaint with the
          Information and Data Protection Commissioner (IDPC) in Malta:
        </p>
        <p style={bodyText}>
          Office of the Information and Data Protection Commissioner
          <br />
          Floor 2, Airways House, High Street, Sliema SLM 1549, Malta
          <br />
          Website:{" "}
          <a
            href="https://idpc.org.mt"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: C.gold, textDecoration: "none" }}
          >
            idpc.org.mt
          </a>
        </p>
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
