"use client";

import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, HaleNav, HaleFooter, HaleLangProvider, useHaleLang, tri } from "../_shared";

function Inner() {
  const { lang } = useHaleLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HaleNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.grey, fontFamily: fMono }}>
            — {tri("Legal Notice", "Impressum", "Mentions légales", lang)}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} style={{ fontFamily: fHead, fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em" }}>
            {tri("Legal.", "Impressum.", "Mentions.", lang)}
          </motion.h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[760px] mx-auto">
          <Rule className="opacity-25 mb-12" />
          <Reveal>
            <div className="space-y-12 text-[15px] leading-[1.85]">
              <section>
                <h2 className="text-[11px] tracking-[0.25em] uppercase mb-5" style={{ color: C.grey, fontFamily: fMono }}>
                  — {tri("Impressum", "Impressum", "Impressum", lang)}
                </h2>
                <p className="mb-3"><strong>Hale & Partners AG</strong></p>
                <p style={{ color: C.grey }}>
                  Seefeldstrasse 110<br />8008 Zürich, Switzerland<br />
                  {tri("Managing Director", "Geschäftsführer", "Directeur général", lang)}: Thomas Hale<br />
                  {tri("Commercial Register", "Handelsregister", "Registre du commerce", lang)}: CHE-123.456.789<br />
                  {tri("VAT", "MwSt", "TVA", lang)}: CHE-123.456.789 MWST
                </p>
              </section>
              <section>
                <h2 className="text-[11px] tracking-[0.25em] uppercase mb-5" style={{ color: C.grey, fontFamily: fMono }}>
                  — {tri("Data Protection", "Datenschutz", "Protection des données", lang)}
                </h2>
                <p style={{ color: C.grey }}>
                  {tri(
                    "This website does not use tracking cookies. We collect anonymous usage statistics through privacy-friendly analytics. We do not share, sell, or rent personal data under any circumstances. If you contact us, we use your details only to respond to your enquiry.",
                    "Diese Website verwendet keine Tracking-Cookies. Wir erheben anonymisierte Nutzungsdaten über datenschutzfreundliche Analytik. Wir geben persönliche Daten niemals weiter, verkaufen oder vermieten sie. Wenn Sie uns kontaktieren, verwenden wir Ihre Angaben ausschliesslich zur Beantwortung Ihrer Anfrage.",
                    "Ce site n'utilise pas de cookies de suivi. Nous collectons des statistiques d'usage anonymes via une analyse respectueuse de la vie privée. Nous ne partageons, ne vendons ni ne louons jamais les données personnelles. Si vous nous contactez, nous utilisons vos coordonnées uniquement pour répondre.",
                    lang
                  )}
                </p>
              </section>
              <section>
                <h2 className="text-[11px] tracking-[0.25em] uppercase mb-5" style={{ color: C.grey, fontFamily: fMono }}>
                  — {tri("Copyright", "Urheberrecht", "Droit d'auteur", lang)}
                </h2>
                <p style={{ color: C.grey }}>
                  {tri(
                    "All content — text, photography, drawings, and design — is © Hale & Partners AG unless otherwise credited. Project photography may be licensed for press use on request.",
                    "Sämtliche Inhalte — Text, Fotografie, Zeichnungen und Gestaltung — sind © Hale & Partners AG, soweit nicht anders angegeben. Projektfotografien können für Pressezwecke auf Anfrage lizenziert werden.",
                    "Tous les contenus — texte, photographie, dessins et design — sont © Hale & Partners AG, sauf mention contraire. Les photographies de projet peuvent être licenciées pour un usage presse sur demande.",
                    lang
                  )}
                </p>
              </section>
              <section>
                <h2 className="text-[11px] tracking-[0.25em] uppercase mb-5" style={{ color: C.grey, fontFamily: fMono }}>
                  — {tri("Disclaimer", "Haftungsausschluss", "Avertissement", lang)}
                </h2>
                <p style={{ color: C.grey }}>
                  {tri(
                    "Information on this site is provided in good faith but without warranty of any kind. We make no representations as to accuracy or completeness of information. The studio is not liable for any loss arising from use of this website.",
                    "Die Informationen auf dieser Website werden nach bestem Wissen bereitgestellt, jedoch ohne jegliche Gewähr. Für Richtigkeit oder Vollständigkeit wird keine Verantwortung übernommen. Das Büro haftet nicht für Schäden aus der Nutzung dieser Website.",
                    "Les informations sur ce site sont fournies de bonne foi mais sans garantie. Nous ne faisons aucune déclaration quant à l'exactitude ou l'exhaustivité des informations. Le studio décline toute responsabilité en cas de préjudice lié à l'usage de ce site.",
                    lang
                  )}
                </p>
              </section>
            </div>
          </Reveal>
        </div>
      </section>

      <HaleFooter />
    </div>
  );
}

export default function HaleLegalPage() {
  return <HaleLangProvider><Inner /></HaleLangProvider>;
}
