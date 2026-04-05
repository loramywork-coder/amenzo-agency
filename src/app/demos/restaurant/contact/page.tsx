"use client";

import { useState } from "react";
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

/* ─── font stacks (CSS variables from layout + fallbacks) ─── */
const fontDisplay =
  "var(--font-heading), 'Playfair Display', Georgia, serif";
const fontBody = "var(--font-body), 'DM Sans', system-ui, sans-serif";

/* ─── nav links ─── */
const NAV_LINKS = [
  { label: "Home", href: "/demos/restaurant" },
  { label: "Menu", href: "/demos/restaurant" },
  { label: "Contact", href: "/demos/restaurant/contact" },
];

/* ─── time slots ─── */
const TIME_SLOTS = [
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
];

/* ─── initial form state ─── */
interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  requests: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "19:00",
  guests: "2",
  occasion: "None",
  requests: "",
};

/* ━━━ PAGE ━━━ */
export default function ContactPage() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const required: (keyof FormData)[] = [
      "name",
      "email",
      "phone",
      "date",
      "time",
      "guests",
    ];
    const newErrors: Partial<Record<keyof FormData, boolean>> = {};
    let hasError = false;
    for (const field of required) {
      if (!form[field].trim()) {
        newErrors[field] = true;
        hasError = true;
      }
    }
    if (hasError) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm(INITIAL_FORM);
  };

  /* ─── shared input styles ─── */
  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    background: C.surface,
    border: `1px solid ${C.border}`,
    color: C.cream,
    fontFamily: fontBody,
    fontSize: 14,
    borderRadius: 0,
    outline: "none",
    transition: "border-color 0.25s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: fontBody,
    fontSize: 10,
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: "rgba(201,147,90,0.6)",
    marginBottom: 6,
  };

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
          background: "transparent",
          borderBottom: "none",
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

      {/* ════════════ HERO ════════════ */}
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 80,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: fontBody,
            fontSize: 12,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: C.gold,
            marginBottom: 16,
          }}
        >
          RESERVATIONS
        </p>
        <h1
          style={{
            fontFamily: fontDisplay,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: 40,
            lineHeight: 1.2,
            color: C.cream,
            margin: 0,
          }}
        >
          Join Us for an Evening
        </h1>
        <div
          style={{
            width: 50,
            height: 2,
            background: C.gold,
            margin: "28px auto 0",
          }}
        />
      </section>

      {/* ════════════ SPLIT LAYOUT ════════════ */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 120px" }}>
        <style>{`
          .rest-contact-grid{display:grid;grid-template-columns:1fr;gap:60px;}
          @media(min-width:768px){.rest-contact-grid{grid-template-columns:55fr 45fr;gap:80px;}}
        `}</style>
        <div className="rest-contact-grid">
          {/* ─── LEFT: RESERVATION FORM ─── */}
          <form onSubmit={handleSubmit} style={{ position: "relative" }}>
            {/* Success toast */}
            {submitted && (
              <div
                style={{
                  position: "fixed",
                  top: 120,
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 60,
                  background: C.gold,
                  color: C.bg,
                  fontFamily: fontBody,
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "14px 28px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                Thank you! We&apos;ll confirm within 2 hours.
              </div>
            )}

            <style>{`
              .rest-form-row{display:grid;grid-template-columns:1fr;gap:20px;margin-bottom:20px;}
              @media(min-width:480px){.rest-form-2col{grid-template-columns:1fr 1fr;}}
              .rest-input::placeholder{color:rgba(245,230,211,0.2);}
              .rest-input:focus{border-color:rgba(201,147,90,0.5) !important;}
            `}</style>

            {/* Name + Email */}
            <div className="rest-form-row rest-form-2col">
              <div>
                <label style={labelStyle}>Name *</label>
                <input
                  className="rest-input"
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  style={{
                    ...inputBase,
                    borderColor: errors.name
                      ? "rgba(201,80,80,0.6)"
                      : C.border,
                  }}
                />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input
                  className="rest-input"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  style={{
                    ...inputBase,
                    borderColor: errors.email
                      ? "rgba(201,80,80,0.6)"
                      : C.border,
                  }}
                />
              </div>
            </div>

            {/* Phone + Date */}
            <div className="rest-form-row rest-form-2col">
              <div>
                <label style={labelStyle}>Phone *</label>
                <input
                  className="rest-input"
                  type="tel"
                  placeholder="+356 ..."
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  style={{
                    ...inputBase,
                    borderColor: errors.phone
                      ? "rgba(201,80,80,0.6)"
                      : C.border,
                  }}
                />
              </div>
              <div>
                <label style={labelStyle}>Date *</label>
                <input
                  className="rest-input"
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  style={{
                    ...inputBase,
                    colorScheme: "dark",
                    borderColor: errors.date
                      ? "rgba(201,80,80,0.6)"
                      : C.border,
                  }}
                />
              </div>
            </div>

            {/* Time + Guests */}
            <div className="rest-form-row rest-form-2col">
              <div>
                <label style={labelStyle}>Time *</label>
                <select
                  className="rest-input"
                  value={form.time}
                  onChange={(e) => update("time", e.target.value)}
                  style={{
                    ...inputBase,
                    appearance: "none" as const,
                    cursor: "pointer",
                    borderColor: errors.time
                      ? "rgba(201,80,80,0.6)"
                      : C.border,
                  }}
                >
                  {TIME_SLOTS.map((t) => (
                    <option key={t} value={t} style={{ background: C.surface }}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Guests *</label>
                <select
                  className="rest-input"
                  value={form.guests}
                  onChange={(e) => update("guests", e.target.value)}
                  style={{
                    ...inputBase,
                    appearance: "none" as const,
                    cursor: "pointer",
                    borderColor: errors.guests
                      ? "rgba(201,80,80,0.6)"
                      : C.border,
                  }}
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={String(n)} style={{ background: C.surface }}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Occasion */}
            <div className="rest-form-row">
              <div>
                <label style={labelStyle}>Occasion</label>
                <select
                  className="rest-input"
                  value={form.occasion}
                  onChange={(e) => update("occasion", e.target.value)}
                  style={{
                    ...inputBase,
                    appearance: "none" as const,
                    cursor: "pointer",
                  }}
                >
                  {["None", "Birthday", "Anniversary", "Business", "Other"].map(
                    (o) => (
                      <option key={o} value={o} style={{ background: C.surface }}>
                        {o}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div className="rest-form-row">
              <div>
                <label style={labelStyle}>Special Requests</label>
                <textarea
                  className="rest-input"
                  rows={4}
                  placeholder="Dietary requirements, seating preference, etc."
                  value={form.requests}
                  onChange={(e) => update("requests", e.target.value)}
                  style={{
                    ...inputBase,
                    resize: "vertical" as const,
                  }}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "16px",
                background: C.gold,
                color: C.bg,
                fontFamily: fontBody,
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
                transition: "opacity 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              Request Reservation
            </button>
          </form>

          {/* ─── RIGHT: CONTACT INFO ─── */}
          <div>
            <h2
              style={{
                fontFamily: fontDisplay,
                fontWeight: 400,
                fontSize: 20,
                color: C.cream,
                margin: "0 0 28px",
              }}
            >
              Get in Touch
            </h2>

            {/* Phone */}
            <div style={{ marginBottom: 20 }}>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(201,147,90,0.6)",
                  margin: "0 0 4px",
                }}
              >
                Phone
              </p>
              <a
                href="tel:+35621234567"
                style={{
                  fontFamily: fontBody,
                  fontSize: 16,
                  color: C.gold,
                  textDecoration: "none",
                  transition: "opacity 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.8";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
              >
                +356 2123 4567
              </a>
            </div>

            {/* Email */}
            <div style={{ marginBottom: 20 }}>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(201,147,90,0.6)",
                  margin: "0 0 4px",
                }}
              >
                Email
              </p>
              <a
                href="mailto:reservations@portovalletta.com"
                style={{
                  fontFamily: fontBody,
                  fontSize: 16,
                  color: C.gold,
                  textDecoration: "none",
                  transition: "opacity 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.8";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
              >
                reservations@portovalletta.com
              </a>
            </div>

            {/* Address */}
            <div style={{ marginBottom: 20 }}>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(201,147,90,0.6)",
                  margin: "0 0 4px",
                }}
              >
                Address
              </p>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: 16,
                  color: C.cream,
                  lineHeight: 1.7,
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

            {/* Hours */}
            <div style={{ marginBottom: 28 }}>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(201,147,90,0.6)",
                  margin: "0 0 4px",
                }}
              >
                Opening Hours
              </p>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: C.muted,
                  margin: 0,
                }}
              >
                Tuesday &ndash; Saturday: 18:30 &ndash; 23:00
                <br />
                Sunday Brunch: 11:00 &ndash; 15:00
                <br />
                Monday: Closed
              </p>
            </div>

            <p
              style={{
                fontFamily: fontBody,
                fontStyle: "italic",
                fontSize: 12,
                color: "rgba(245,230,211,0.3)",
                margin: "0 0 32px",
              }}
            >
              For same-day reservations, please call directly.
            </p>

            {/* ─── Map placeholder ─── */}
            <div
              style={{
                width: "100%",
                aspectRatio: "16/10",
                background: C.surface,
                border: `1px solid ${C.border}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
              }}
            >
              {/* Pin icon */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke={C.gold}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span
                style={{
                  fontFamily: fontBody,
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: C.muted,
                }}
              >
                42 Strait Street, Valletta
              </span>
            </div>
          </div>
        </div>
      </section>

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
          {/* brand */}
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

          {/* nav */}
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

          {/* hours */}
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

          {/* contact */}
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

        {/* bottom bar */}
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
