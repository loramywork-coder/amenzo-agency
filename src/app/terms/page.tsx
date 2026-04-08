import { generatePageMeta } from "@/lib/seo";
import { LocaleSwitch } from "@/lib/i18n/LocaleSwitch";

export const metadata = generatePageMeta({
  title: "Terms of Service",
  description: "AMENZO terms of service. Conditions for using our web design and development services.",
  path: "/terms",
  noindex: true,
});

const EnContent = (
  <div className="space-y-8 text-text-secondary leading-relaxed">
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">1. Services</h2>
      <p>AMENZO provides web design, web development, branding, digital strategy, and related digital services. The specific scope, deliverables, and timeline for each project are defined in individual project proposals and agreements.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">2. Project Agreements</h2>
      <p>All projects are governed by a signed project agreement or accepted proposal that outlines scope, deliverables, timeline, and payment terms. Work begins only upon receipt of the signed agreement and any required deposit.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">3. Payment Terms</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>A deposit of 50% is required to commence work unless otherwise agreed</li>
        <li>The remaining balance is due upon project completion, before final handover</li>
        <li>Monthly retainer and maintenance services are billed at the start of each month</li>
        <li>Invoices are payable within 14 days of issue</li>
        <li>Late payments may incur interest at 8% per annum above the ECB base rate</li>
      </ul>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">4. Intellectual Property</h2>
      <p>Upon full payment, all custom design work, code, and content created specifically for the client is transferred to the client. AMENZO retains the right to use the project in our portfolio and marketing materials unless otherwise agreed in writing.</p>
      <p className="mt-3">Third-party licenses (fonts, stock images, plugins) remain subject to their respective licence terms and may require separate ongoing licences maintained by the client.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">5. Client Responsibilities</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Providing content (text, images, logos) in a timely manner</li>
        <li>Providing feedback within agreed timeframes</li>
        <li>Ensuring all provided content is legally owned or properly licensed</li>
        <li>Maintaining their own hosting and domain accounts post-handover (unless included in a maintenance package)</li>
      </ul>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">6. Revisions</h2>
      <p>The number of revision rounds included in each project is specified in the project agreement. Additional revisions beyond the agreed scope are billed at EUR 80 per hour.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">7. Cancellation</h2>
      <p>Either party may terminate a project with 14 days written notice. In the event of cancellation, the client is responsible for payment of all work completed up to the date of termination. Deposits are non-refundable once work has commenced.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">8. Liability</h2>
      <p>AMENZO shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability for any claim shall not exceed the total fees paid by the client for the specific project in question.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">9. Warranty</h2>
      <p>We provide a 30-day warranty period after project launch during which we will fix any bugs or issues at no additional cost. This warranty covers defects in the delivered work, not changes to scope or new feature requests.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">10. Governing Law</h2>
      <p>These terms are governed by and construed in accordance with the laws of the Netherlands. Any disputes shall be resolved through the courts of the Netherlands.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">11. Contact</h2>
      <p>For questions about these terms, please contact us at info@amenzo.co.</p>
    </section>
  </div>
);

const DeContent = (
  <div className="space-y-8 text-text-secondary leading-relaxed">
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">1. Leistungen</h2>
      <p>AMENZO bietet Webdesign, Webentwicklung, Branding, digitale Strategie und verwandte digitale Dienstleistungen. Der genaue Umfang, die Liefergegenstände und der Zeitrahmen jedes Projekts werden in individuellen Projektangeboten und Verträgen festgelegt.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">2. Projektverträge</h2>
      <p>Alle Projekte unterliegen einem unterzeichneten Projektvertrag oder einem angenommenen Angebot, das Umfang, Liefergegenstände, Zeitrahmen und Zahlungsbedingungen festlegt. Die Arbeit beginnt erst nach Erhalt des unterzeichneten Vertrags und einer eventuell erforderlichen Anzahlung.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">3. Zahlungsbedingungen</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Eine Anzahlung von 50 % ist vor Arbeitsbeginn erforderlich, sofern nicht anders vereinbart</li>
        <li>Der Restbetrag ist mit Projektabschluss, vor der finalen Übergabe, fällig</li>
        <li>Monatliche Retainer- und Wartungsleistungen werden zu Monatsbeginn abgerechnet</li>
        <li>Rechnungen sind innerhalb von 14 Tagen nach Ausstellung zahlbar</li>
        <li>Bei Zahlungsverzug können Zinsen in Höhe von 8 % p. a. über dem EZB-Basiszinssatz berechnet werden</li>
      </ul>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">4. Geistiges Eigentum</h2>
      <p>Mit vollständiger Bezahlung gehen alle individuell für den Kunden erstellten Designs, Codes und Inhalte auf den Kunden über. AMENZO behält sich das Recht vor, das Projekt in seinem Portfolio und in Marketingmaterialien zu verwenden, sofern nicht schriftlich anders vereinbart.</p>
      <p className="mt-3">Lizenzen Dritter (Schriften, Stockbilder, Plugins) unterliegen weiterhin ihren jeweiligen Lizenzbedingungen und können separate, vom Kunden zu unterhaltende Lizenzen erfordern.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">5. Pflichten des Kunden</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Rechtzeitige Bereitstellung von Inhalten (Texte, Bilder, Logos)</li>
        <li>Rückmeldung innerhalb der vereinbarten Fristen</li>
        <li>Sicherstellung, dass alle gelieferten Inhalte rechtmäßig im Eigentum oder lizenziert sind</li>
        <li>Pflege eigener Hosting- und Domain-Konten nach der Übergabe (sofern nicht in einem Wartungspaket enthalten)</li>
      </ul>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">6. Revisionen</h2>
      <p>Die Anzahl der im Projekt enthaltenen Revisionsrunden ist im Projektvertrag festgelegt. Zusätzliche Revisionen über den vereinbarten Umfang hinaus werden mit 80 EUR pro Stunde berechnet.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">7. Kündigung</h2>
      <p>Jede Partei kann ein Projekt mit einer Frist von 14 Tagen schriftlich kündigen. Im Falle einer Kündigung ist der Kunde verpflichtet, alle bis zum Kündigungsdatum erbrachten Leistungen zu vergüten. Anzahlungen sind nach Arbeitsbeginn nicht erstattbar.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">8. Haftung</h2>
      <p>AMENZO haftet nicht für indirekte, zufällige oder Folgeschäden, die aus der Nutzung unserer Leistungen entstehen. Unsere Gesamthaftung für jegliche Ansprüche ist auf die Höhe der vom Kunden für das betreffende Projekt gezahlten Gesamtkosten begrenzt.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">9. Gewährleistung</h2>
      <p>Wir bieten nach dem Projekt-Launch eine 30-tägige Gewährleistungszeit, in der wir Bugs oder Probleme kostenlos beheben. Diese Gewährleistung deckt Mängel der gelieferten Arbeit ab, jedoch keine Änderungen am Umfang oder neue Feature-Anfragen.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">10. Geltendes Recht</h2>
      <p>Diese Bedingungen unterliegen dem Recht der Niederlande und werden danach ausgelegt. Sämtliche Streitigkeiten werden vor den Gerichten der Niederlande verhandelt.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">11. Kontakt</h2>
      <p>Bei Fragen zu diesen Bedingungen kontaktieren Sie uns unter info@amenzo.co.</p>
    </section>
  </div>
);

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg pt-32 pb-20">
      <div className="container-wide max-w-3xl">
        <LocaleSwitch
          en={
            <>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">Terms of Service</h1>
              <p className="text-text-muted text-sm mb-12">Last updated: March 2026</p>
              {EnContent}
            </>
          }
          de={
            <>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">Allgemeine Geschäftsbedingungen</h1>
              <p className="text-text-muted text-sm mb-12">Zuletzt aktualisiert: März 2026</p>
              {DeContent}
            </>
          }
        />
      </div>
    </div>
  );
}
