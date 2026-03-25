"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Upload,
  Globe,
  ShoppingBag,
  PenTool,
  Layers,
  TrendingUp,
  RefreshCw,
  Server,
  Compass,
  HelpCircle,
  Calendar,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const TOTAL_STEPS = 7;

const serviceOptions = [
  { id: "new-website", label: "New Website", icon: Globe },
  { id: "redesign", label: "Website Redesign", icon: RefreshCw },
  { id: "ecommerce", label: "E-Commerce / Online Store", icon: ShoppingBag },
  { id: "landing-page", label: "Landing Page / Microsite", icon: Layers },
  { id: "branding", label: "Branding / Logo Design", icon: PenTool },
  { id: "ui-ux", label: "UI/UX Design", icon: Layers },
  { id: "seo", label: "SEO & Performance", icon: TrendingUp },
  { id: "maintenance", label: "Ongoing Maintenance", icon: Server },
  { id: "not-sure", label: "Not Sure — I Need Advice", icon: HelpCircle },
];

const industryOptions = [
  "Hotels & Resorts",
  "Restaurants & Bars",
  "Real Estate",
  "E-Commerce / Retail",
  "Healthcare & Wellness",
  "NGO / Non-Profit",
  "Finance & Professional",
  "Fitness & Lifestyle",
  "Education & Training",
  "Technology / SaaS",
  "Construction & Trades",
  "Government & Public",
  "Other",
];

export default function StartProjectPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    pageCount: "",
    multilingual: "",
    needsCms: "",
    hasBranding: "",
    hasContent: "",
    inspirationUrl1: "",
    inspirationUrl2: "",
    inspirationUrl3: "",
    inspirationNotes: "",
    timeline: "",
    budget: "",
    deadline: "",
    additionalNotes: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email;
      case 2:
        return selectedServices.length > 0;
      default:
        return true;
    }
  };

  const handleSubmit = () => {
    toast.success("Project brief submitted! We'll be in touch within 24 hours.");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg mx-auto px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 size={40} className="text-success" />
          </motion.div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Your Project Brief Has Been Received!
          </h1>
          <p className="text-text-secondary mb-10">
            Thank you for choosing AMENZO. Here&apos;s what happens next:
          </p>

          <div className="space-y-4 text-left mb-10">
            {[
              "We review your brief (within 24 hours)",
              "We schedule a free 30-minute consultation call",
              "We send you a detailed proposal and quote",
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-lg bg-surface border border-border"
              >
                <span className="w-6 h-6 rounded-full bg-violet/20 text-violet text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-text-primary text-sm">{step}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/work" variant="outline">
              Browse Our Work
            </Button>
            <Button href="/" variant="ghost">
              Back to Home
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col pt-20">
      {/* Progress bar */}
      <div className="fixed top-20 left-0 right-0 z-30 h-1 bg-border">
        <motion.div
          className="h-full bg-gradient-to-r from-violet to-cyan"
          initial={{ width: "0%" }}
          animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Step indicator */}
      <div className="container-wide py-6">
        <p className="text-text-muted text-sm">
          Step {step} of {TOTAL_STEPS}
        </p>
      </div>

      {/* Form content */}
      <div className="flex-1 flex items-start justify-center pb-32">
        <div className="w-full max-w-2xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step 1: About You */}
              {step === 1 && (
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-2">
                    Tell us about you
                  </h2>
                  <p className="text-text-secondary mb-10">
                    So we know who we&apos;re talking to
                  </p>
                  <div className="space-y-6">
                    <FormField
                      label="Your Name *"
                      value={formData.name}
                      onChange={(v) => updateField("name", v)}
                      placeholder="John Doe"
                    />
                    <FormField
                      label="Company / Business Name"
                      value={formData.company}
                      onChange={(v) => updateField("company", v)}
                      placeholder="Acme Ltd"
                    />
                    <FormField
                      label="Email *"
                      type="email"
                      value={formData.email}
                      onChange={(v) => updateField("email", v)}
                      placeholder="john@example.com"
                    />
                    <FormField
                      label="Phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(v) => updateField("phone", v)}
                      placeholder="+356 9999 0000"
                    />
                    <FormField
                      label="Current Website (if any)"
                      value={formData.website}
                      onChange={(v) => updateField("website", v)}
                      placeholder="https://example.com"
                    />
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Industry
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) =>
                          updateField("industry", e.target.value)
                        }
                        className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary focus:border-violet focus:outline-none transition-colors"
                      >
                        <option value="">Select your industry</option>
                        {industryOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: What Do You Need? */}
              {step === 2 && (
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-2">
                    What do you need?
                  </h2>
                  <p className="text-text-secondary mb-10">
                    Select all that apply
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map((opt) => {
                      const Icon = opt.icon;
                      const selected = selectedServices.includes(opt.id);
                      return (
                        <button
                          key={opt.id}
                          onClick={() => toggleService(opt.id)}
                          className={cn(
                            "flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200",
                            selected
                              ? "border-violet bg-violet/10 text-text-primary"
                              : "border-border bg-surface text-text-secondary hover:border-violet/30"
                          )}
                        >
                          <Icon
                            size={20}
                            className={
                              selected ? "text-violet" : "text-text-muted"
                            }
                          />
                          <span className="text-sm font-medium">
                            {opt.label}
                          </span>
                          {selected && (
                            <Check
                              size={16}
                              className="ml-auto text-violet"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Tell Us More */}
              {step === 3 && (
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-2">
                    Tell us more
                  </h2>
                  <p className="text-text-secondary mb-10">
                    Help us understand the scope
                  </p>
                  <div className="space-y-6">
                    <RadioGroup
                      label="How many pages do you need?"
                      options={["1-5", "5-15", "15+", "Not sure"]}
                      value={formData.pageCount}
                      onChange={(v) => updateField("pageCount", v)}
                    />
                    <RadioGroup
                      label="Do you need multilingual support?"
                      options={["No", "2 languages", "3+ languages"]}
                      value={formData.multilingual}
                      onChange={(v) => updateField("multilingual", v)}
                    />
                    <RadioGroup
                      label="Do you need a CMS (content management)?"
                      options={["Yes", "No", "What's a CMS?"]}
                      value={formData.needsCms}
                      onChange={(v) => updateField("needsCms", v)}
                    />
                    <RadioGroup
                      label="Do you have existing branding?"
                      options={["Yes", "No", "Need new branding"]}
                      value={formData.hasBranding}
                      onChange={(v) => updateField("hasBranding", v)}
                    />
                    <RadioGroup
                      label="Do you have content ready?"
                      options={[
                        "Yes, all ready",
                        "Some of it",
                        "No, I need help",
                      ]}
                      value={formData.hasContent}
                      onChange={(v) => updateField("hasContent", v)}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Inspiration */}
              {step === 4 && (
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-2">
                    Inspiration
                  </h2>
                  <p className="text-text-secondary mb-10">
                    Share websites you admire
                  </p>
                  <div className="space-y-6">
                    <FormField
                      label="Website 1"
                      value={formData.inspirationUrl1}
                      onChange={(v) => updateField("inspirationUrl1", v)}
                      placeholder="https://example.com"
                    />
                    <FormField
                      label="Website 2"
                      value={formData.inspirationUrl2}
                      onChange={(v) => updateField("inspirationUrl2", v)}
                      placeholder="https://example.com"
                    />
                    <FormField
                      label="Website 3"
                      value={formData.inspirationUrl3}
                      onChange={(v) => updateField("inspirationUrl3", v)}
                      placeholder="https://example.com"
                    />
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        What do you like about them?
                      </label>
                      <textarea
                        value={formData.inspirationNotes}
                        onChange={(e) =>
                          updateField("inspirationNotes", e.target.value)
                        }
                        rows={4}
                        className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:border-violet focus:outline-none transition-colors resize-none"
                        placeholder="I like the clean design of site 1, the animations on site 2..."
                      />
                    </div>
                    <p className="text-sm text-text-muted">
                      Or{" "}
                      <Link
                        href="/work"
                        className="text-violet hover:underline"
                      >
                        browse our portfolio
                      </Link>{" "}
                      for inspiration.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 5: Timeline & Budget */}
              {step === 5 && (
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-2">
                    Timeline & Budget
                  </h2>
                  <p className="text-text-secondary mb-10">
                    Help us plan the project
                  </p>
                  <div className="space-y-6">
                    <RadioGroup
                      label="When do you need this?"
                      options={[
                        "ASAP",
                        "Within 1 month",
                        "Within 3 months",
                        "No rush — planning ahead",
                      ]}
                      value={formData.timeline}
                      onChange={(v) => updateField("timeline", v)}
                    />
                    <RadioGroup
                      label="Budget range"
                      options={[
                        "Under EUR 2,000",
                        "EUR 2,000 - 5,000",
                        "EUR 5,000 - 10,000",
                        "EUR 10,000 - 20,000",
                        "EUR 20,000+",
                        "Not sure yet",
                      ]}
                      value={formData.budget}
                      onChange={(v) => updateField("budget", v)}
                    />
                    <FormField
                      label="Any specific deadline? (optional)"
                      type="date"
                      value={formData.deadline}
                      onChange={(v) => updateField("deadline", v)}
                    />
                  </div>
                </div>
              )}

              {/* Step 6: Anything Else */}
              {step === 6 && (
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-2">
                    Anything else?
                  </h2>
                  <p className="text-text-secondary mb-10">
                    Tell us anything about your project, goals, or
                    concerns
                  </p>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) =>
                      updateField("additionalNotes", e.target.value)
                    }
                    rows={8}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:border-violet focus:outline-none transition-colors resize-none"
                    placeholder="We're launching a new product line in Q3 and need the site live by..."
                  />
                </div>
              )}

              {/* Step 7: Review */}
              {step === 7 && (
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-2">
                    Review your brief
                  </h2>
                  <p className="text-text-secondary mb-10">
                    Make sure everything looks good
                  </p>
                  <div className="space-y-4">
                    <ReviewItem
                      label="Name"
                      value={formData.name}
                      step={1}
                      onEdit={setStep}
                    />
                    <ReviewItem
                      label="Company"
                      value={formData.company || "—"}
                      step={1}
                      onEdit={setStep}
                    />
                    <ReviewItem
                      label="Email"
                      value={formData.email}
                      step={1}
                      onEdit={setStep}
                    />
                    <ReviewItem
                      label="Phone"
                      value={formData.phone || "—"}
                      step={1}
                      onEdit={setStep}
                    />
                    <ReviewItem
                      label="Services"
                      value={
                        selectedServices
                          .map(
                            (id) =>
                              serviceOptions.find((s) => s.id === id)
                                ?.label
                          )
                          .join(", ") || "—"
                      }
                      step={2}
                      onEdit={setStep}
                    />
                    <ReviewItem
                      label="Pages"
                      value={formData.pageCount || "—"}
                      step={3}
                      onEdit={setStep}
                    />
                    <ReviewItem
                      label="Budget"
                      value={formData.budget || "—"}
                      step={5}
                      onEdit={setStep}
                    />
                    <ReviewItem
                      label="Timeline"
                      value={formData.timeline || "—"}
                      step={5}
                      onEdit={setStep}
                    />
                  </div>

                  <div className="mt-8 p-4 rounded-lg bg-surface border border-border">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-1 accent-violet"
                        defaultChecked
                      />
                      <span className="text-sm text-text-secondary">
                        I agree to the{" "}
                        <Link
                          href="/privacy"
                          className="text-violet hover:underline"
                        >
                          Privacy Policy
                        </Link>
                        . AMENZO will use this information to contact me
                        about my project.
                      </span>
                    </label>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-bg/80 backdrop-blur-xl border-t border-border py-4 z-30">
        <div className="container-wide flex items-center justify-between">
          <button
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            className={cn(
              "flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors",
              step === 1 && "invisible"
            )}
          >
            <ArrowLeft size={16} />
            Back
          </button>

          {step < TOTAL_STEPS ? (
            <Button
              onClick={() => setStep((s) => Math.min(TOTAL_STEPS, s + 1))}
              disabled={!canProceed()}
              magnetic
            >
              Continue
              <ArrowRight size={16} />
            </Button>
          ) : (
            <Button onClick={handleSubmit} magnetic>
              <Sparkles size={16} />
              Submit Project Brief
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function FormField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-text-primary mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:border-violet focus:outline-none transition-colors"
      />
    </div>
  );
}

function RadioGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-text-primary mb-3">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200",
              value === opt
                ? "border-violet bg-violet/10 text-text-primary"
                : "border-border bg-surface text-text-secondary hover:border-violet/30"
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function ReviewItem({
  label,
  value,
  step,
  onEdit,
}: {
  label: string;
  value: string;
  step: number;
  onEdit: (step: number) => void;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border">
      <div>
        <span className="text-xs text-text-muted">{label}</span>
        <p className="text-sm text-text-primary">{value}</p>
      </div>
      <button
        onClick={() => onEdit(step)}
        className="text-xs text-violet hover:underline"
      >
        Edit
      </button>
    </div>
  );
}
