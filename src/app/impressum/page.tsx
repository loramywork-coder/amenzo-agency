import { generatePageMeta } from "@/lib/seo";

export const metadata = generatePageMeta({
  title: "Impressum — Legal Notice",
  description: "AMENZO legal notice (Impressum). Company information, contact details, and legal disclaimers as required by EU regulations.",
  path: "/impressum",
  noindex: true,
});

export default function ImpressumPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      {/* Solid bg to cover the global swirly gradient */}
      <div className="fixed inset-0 bg-bg pointer-events-none" style={{ zIndex: -1 }} aria-hidden="true" />
      <div className="container-wide max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Impressum
        </h1>
        <p className="text-text-muted text-sm mb-12">Legal Notice</p>

        <div className="prose-dark space-y-8 text-text-secondary leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              Company Information
            </h2>
            <p>
              <strong className="text-text-primary">Trade Name:</strong> Amenzo Studio
            </p>
            <p className="mt-2">
              <strong className="text-text-primary">Legal Entity:</strong> ProgressPro
            </p>
            <p className="mt-2">
              <strong className="text-text-primary">Represented by:</strong> Amy de Boers
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              Registration
            </h2>
            <p>
              <strong className="text-text-primary">KVK:</strong> 84642920
            </p>
            <p className="mt-2">
              <strong className="text-text-primary">BTW:</strong> NL003992552B76
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              Contact
            </h2>
            <p>
              <strong className="text-text-primary">Email:</strong>{" "}
              <a
                href="mailto:info@amenzo.co"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                info@amenzo.co
              </a>
            </p>
            <p className="mt-2">
              <strong className="text-text-primary">Web:</strong>{" "}
              <a
                href="https://amenzo.co"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                https://amenzo.co
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              Registered Address
            </h2>
            <p>
              Dammerweg 81, 1394 GR Nederhorst den Berg, The Netherlands
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              Dispute Resolution
            </h2>
            <p>
              EU Online Dispute Resolution:{" "}
              <a
                href="https://ec.europa.eu/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                https://ec.europa.eu/odr
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              Disclaimer
            </h2>
            <p>
              The information provided on this website has been carefully
              checked and is regularly updated. However, no guarantee can be
              given that all information is complete, correct, and up-to-date
              at all times. Amenzo reserves the right to make changes or
              additions to the information provided.
            </p>
            <p className="mt-3">
              Amenzo is not responsible for the content of external websites
              that are linked from this website. The operators of linked
              websites are solely responsible for their content.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              Copyright
            </h2>
            <p>
              All content on this website, including texts, images, graphics,
              and the design of the website, is protected by copyright. Any
              reproduction, processing, distribution, or any form of
              commercialisation of such material beyond the scope of copyright
              law requires the prior written consent of Amenzo.
            </p>
            <p className="mt-3">
              &copy; 2026 Amenzo Studio. All rights reserved.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
