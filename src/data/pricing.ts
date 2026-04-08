import {
  Globe,
  ShoppingBag,
  PenTool,
  Layers,
  TrendingUp,
  RefreshCw,
  Server,
  HelpCircle,
} from "lucide-react";

export const serviceOptions = [
  { id: "new-website", label: "New Website", labelDe: "Neue Website", icon: Globe },
  { id: "redesign", label: "Website Redesign", labelDe: "Website-Redesign", icon: RefreshCw },
  { id: "ecommerce", label: "E-Commerce / Online Store", labelDe: "E-Commerce / Online-Shop", icon: ShoppingBag },
  { id: "landing-page", label: "Landing Page / Microsite", labelDe: "Landing Page / Microsite", icon: Layers },
  { id: "branding", label: "Branding / Logo Design", labelDe: "Branding / Logo-Design", icon: PenTool },
  { id: "ui-ux", label: "UI/UX Design", labelDe: "UI/UX-Design", icon: Layers },
  { id: "seo", label: "SEO & Performance", labelDe: "SEO & Performance", icon: TrendingUp },
  { id: "maintenance", label: "Ongoing Maintenance", labelDe: "Laufende Wartung", icon: Server },
  { id: "not-sure", label: "Not Sure — I Need Advice", labelDe: "Nicht sicher — ich brauche Beratung", icon: HelpCircle },
] as const;

export const budgetOptions = [
  { label: "Under EUR 1,000", labelDe: "Unter 1.000 €", min: 0, max: 1000 },
  { label: "EUR 1,000 - 2,000", labelDe: "1.000 – 2.000 €", min: 1000, max: 2000 },
  { label: "EUR 2,000 - 4,000", labelDe: "2.000 – 4.000 €", min: 2000, max: 4000 },
  { label: "EUR 4,000 - 8,000", labelDe: "4.000 – 8.000 €", min: 4000, max: 8000 },
  { label: "Not sure yet", labelDe: "Noch nicht sicher", min: 0, max: 0 },
] as const;

export const addOns = [
  { id: "multilingual", name: "Additional Language", nameDe: "Zusätzliche Sprache", price: 250, description: "Reach customers in their language", descriptionDe: "Erreichen Sie Kunden in ihrer Sprache", recurring: false, category: "language" as const },
  { id: "branding", name: "Logo & Branding", nameDe: "Logo & Branding", price: 800, description: "Complete visual identity package", descriptionDe: "Vollständiges visuelles Identitätspaket", recurring: false, category: "branding" as const },
  { id: "copywriting", name: "Copywriting (per page)", nameDe: "Texterstellung (pro Seite)", price: 100, description: "Professional copy for one page", descriptionDe: "Professionelle Texte für eine Seite", recurring: false, category: "branding" as const },
  { id: "seo", name: "Monthly SEO", nameDe: "Monatliches SEO", price: 300, description: "Ongoing SEO, keyword tracking, reports", descriptionDe: "Laufende SEO, Keyword-Tracking, Berichte", recurring: true, category: "feature" as const },
  { id: "maintenance", name: "Hosting & Maintenance", nameDe: "Hosting & Wartung", price: 80, description: "Hosting, SSL, backups, monitoring, updates", descriptionDe: "Hosting, SSL, Backups, Monitoring, Updates", recurring: true, category: "foundation" as const },
  { id: "priority", name: "Priority Support", nameDe: "Priority-Support", price: 200, description: "Weekly content updates, 12hr response, quarterly review", descriptionDe: "Wöchentliche Content-Updates, 12-Stunden-Reaktion, vierteljährliche Reviews", recurring: true, category: "foundation" as const },
] as const;

export const SERVICE_BASE_PRICES: Record<string, number> = {
  "new-website": 1000,
  redesign: 750,
  ecommerce: 4000,
  "landing-page": 750,
  branding: 800,
  "ui-ux": 2000,
  seo: 300,
  maintenance: 80,
  "not-sure": 1000,
};

export const PAGE_COUNT_MULTIPLIERS: Record<string, number> = {
  "1-5": 1,
  "5-10": 1.5,
  "10-20": 2.2,
  "20+": 3,
  "Not sure": 1.3,
};

export const PAGE_COUNT_OPTIONS = ["1-5", "5-10", "10-20", "20+", "Not sure"] as const;

export const CATEGORY_COLORS: Record<string, { fill: string; stroke: string; label: string }> = {
  foundation: { fill: "#2A2A2A", stroke: "#3A3A3A", label: "Foundation" },
  structure: { fill: "#7C3AED", stroke: "#9455F5", label: "Structure" },
  feature: { fill: "#06B6D4", stroke: "#22D3EE", label: "Features" },
  branding: { fill: "#F97068", stroke: "#FB9A94", label: "Branding" },
  language: { fill: "#7C3AED", stroke: "#06B6D4", label: "Languages" },
  service: { fill: "#7C3AED", stroke: "#9455F5", label: "Services" },
};
