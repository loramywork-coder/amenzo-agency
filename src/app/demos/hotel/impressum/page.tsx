"use client";

import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, HotelNav, HotelFooter, HotelLangProvider, useHotelLang, tri } from "../_shared";

function Inner() {
  const { lang } = useHotelLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HotelNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-16">
        <div className="max-w-[900px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: C.gold, fontFamily: fMono }}>
            — {tri("Legal notice", "Impressum", "Mentions légales", lang)}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} style={{ fontFamily: fHead, fontSize: "clamp(48px, 7vw, 120px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.015em", color: C.dark , paddingBottom: "0.15em" }}>
            {tri("Legal.", "Impressum.", "Mentions.", lang)}
          </motion.h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[760px] mx-auto">
          <Rule className="mb-12" />
          <Reveal>
            <div className="space-y-14 text-[15px] leading-[1.85]">
              <section>
                <h2 className="text-[11px] tracking-[0.25em] uppercase mb-5" style={{ color: C.gold, fontFamily: fMono }}>
                  — {tri("Operator", "Betreiber", "Exploitant", lang)}
                </h2>
                <p style={{ color: C.dark }}>
                  <strong>Grand Harbour Hotel SA</strong><br />
                  Triq San Pawl 42<br />
                  Valletta VLT 1214, Malta
                </p>
                <p className="mt-4" style={{ color: C.muted }}>
                  {tri("Managing Director", "Geschäftsführung", "Direction", lang)}: Amelia Caruana<br />
                  {tri("Commercial Register", "Handelsregister", "Registre du commerce", lang)}: C 12345<br />
                  VAT: MT 2345 6789
                </p>
              </section>

              <section>
                <h2 className="text-[11px] tracking-[0.25em] uppercase mb-5" style={{ color: C.gold, fontFamily: fMono }}>
                  — {tri("Contact", "Kontakt", "Contact", lang)}
                </h2>
                <p style={{ color: C.muted }}>
                  +356 2122 3344<br />stay@grandharbour.mt
                </p>
              </section>

              <section>
                <h2 className="text-[11px] tracking-[0.25em] uppercase mb-5" style={{ color: C.gold, fontFamily: fMono }}>
                  — {tri("Data protection", "Datenschutz", "Protection des données", lang)}
                </h2>
                <p style={{ color: C.muted }}>
                  {tri(
                    "This website uses only essential cookies. We do not use tracking or advertising cookies. Data submitted through our reservation form is used exclusively to handle your enquiry and is never shared with third parties except as required to process your stay.",
                    "Diese Website verwendet nur essenzielle Cookies. Wir setzen keine Tracking- oder Werbe-Cookies ein. Über unser Reservierungsformular übermittelte Daten dienen ausschliesslich der Bearbeitung Ihrer Anfrage und werden nicht an Dritte weitergegeben — ausser soweit erforderlich für die Abwicklung Ihres Aufenthalts.",
                    "Ce site n'utilise que des cookies essentiels. Nous n'utilisons pas de cookies de suivi ou publicitaires. Les données envoyées via notre formulaire de réservation servent uniquement à traiter votre demande et ne sont jamais partagées avec des tiers, sauf lorsque cela est nécessaire à votre séjour.",
                    lang
                  )}
                </p>
              </section>

              <section>
                <h2 className="text-[11px] tracking-[0.25em] uppercase mb-5" style={{ color: C.gold, fontFamily: fMono }}>
                  — {tri("Copyright", "Urheberrecht", "Droit d'auteur", lang)}
                </h2>
                <p style={{ color: C.muted }}>
                  © {new Date().getFullYear()} Grand Harbour Hotel SA. {tri(
                    "All content — photography, text, and design — is protected by copyright and may not be reproduced without written consent.",
                    "Alle Inhalte — Fotografien, Texte und Gestaltung — sind urheberrechtlich geschützt und dürfen ohne schriftliche Genehmigung nicht reproduziert werden.",
                    "Tous les contenus — photographies, textes et design — sont protégés par le droit d'auteur et ne peuvent être reproduits sans consentement écrit.",
                    lang
                  )}
                </p>
              </section>
            </div>
          </Reveal>
        </div>
      </section>

      <HotelFooter />
    </div>
  );
}

export default function HotelImpressumPage() {
  return <HotelLangProvider><Inner /></HotelLangProvider>;
}
