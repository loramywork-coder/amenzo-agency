"use client";

import { useState, useEffect, Suspense, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Globe,
  ShoppingBag,
  PenTool,
  Layers,
  TrendingUp,
  RefreshCw,
  Server,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  User,
  FileText,
  CreditCard,
  MessageSquare,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { toast } from "sonner";
import {
  serviceOptions,
  budgetOptions,
  addOns,
  SERVICE_BASE_PRICES,
  PAGE_COUNT_MULTIPLIERS,
} from "@/data/pricing";

const TOTAL_STEPS = 8;

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

const STEP_NAMES = [
  { name: "About You", icon: User },
  { name: "Services", icon: Layers },
  { name: "Details", icon: FileText },
  { name: "Inspiration", icon: Sparkles },
  { name: "Budget", icon: CreditCard },
  { name: "Package", icon: Package },
  { name: "Notes", icon: MessageSquare },
  { name: "Review", icon: CheckCircle2 },
];

export default function StartProjectPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-bg flex items-center justify-center pt-20">
          <div className="text-text-muted">Loading...</div>
        </div>
      }
    >
      <StartProjectWizard />
    </Suspense>
  );
}

function StartProjectWizard() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
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

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  // Auto-fill from URL params (Build page or demo pages)
  useEffect(() => {
    const industry = searchParams.get("industry");
    const service = searchParams.get("service");
    const services = searchParams.get("services");
    const pages = searchParams.get("pages");
    const addonsParam = searchParams.get("addons");
    const ref = searchParams.get("ref");

    if (industry) updateField("industry", industry);
    // Single service (from demo pages)
    if (service) setSelectedServices([service]);
    // Multiple services (from Build page)
    if (services) setSelectedServices(services.split(","));
    // Page count from Build page
    if (pages) updateField("pageCount", pages);
    // Add-ons from Build page
    if (addonsParam) setSelectedAddOns(addonsParam.split(","));
    if (ref)
      updateField(
        "inspirationNotes",
        `Inspired by the ${ref} demo — I'd like something similar for my business.`
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Estimate calculation
  const estimate = useMemo(() => {
    let baseMin = 0;
    let baseMax = 0;

    // From selected services
    selectedServices.forEach((svc) => {
      const price = SERVICE_BASE_PRICES[svc] || 2000;
      baseMin += price * 0.8;
      baseMax += price * 1.3;
    });

    // Page count multiplier
    const pageMultiplier = PAGE_COUNT_MULTIPLIERS[formData.pageCount] || 1;
    baseMin *= pageMultiplier;
    baseMax *= pageMultiplier;

    // Add-on one-time costs
    let addOnOneTime = 0;
    let addOnRecurring = 0;
    selectedAddOns.forEach((id) => {
      const addon = addOns.find((a) => a.id === id);
      if (addon) {
        if (addon.recurring) {
          addOnRecurring += addon.price;
        } else {
          addOnOneTime += addon.price;
        }
      }
    });

    baseMin += addOnOneTime;
    baseMax += addOnOneTime;

    // If budget is selected, use that as a floor
    const budgetOpt = budgetOptions.find((b) => b.label === formData.budget);
    if (budgetOpt && budgetOpt.min > 0) {
      baseMin = Math.max(baseMin, budgetOpt.min);
      baseMax = Math.max(baseMax, budgetOpt.max);
    }

    return {
      min: Math.round(baseMin / 100) * 100,
      max: Math.round(baseMax / 100) * 100,
      recurring: addOnRecurring,
      hasEstimate: selectedServices.length > 0,
    };
  }, [selectedServices, selectedAddOns, formData.pageCount, formData.budget]);

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

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    try {
      const res = await fetch("/api/start-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
          addons: selectedAddOns,
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      toast.success("Project brief submitted! We'll be in touch within 24 hours.");
      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again or email us at info@amenzo.co.");
    }
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

      {/* Step indicator with icons */}
      <div className="container-wide py-6">
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-2">
          {STEP_NAMES.map((s, i) => {
            const StepIcon = s.icon;
            const stepNum = i + 1;
            const isCompleted = step > stepNum;
            const isCurrent = step === stepNum;
            return (
              <button
                key={i}
                onClick={() => {
                  if (isCompleted) setStep(stepNum);
                }}
                className={cn(
                  "flex items-center gap-1.5 px-2 py-1.5 rounded-full text-xs font-medium transition-all duration-200 shrink-0",
                  isCurrent &&
                    "bg-violet/15 text-violet border border-violet/30",
                  isCompleted &&
                    "text-text-secondary hover:text-violet cursor-pointer",
                  !isCurrent &&
                    !isCompleted &&
                    "text-text-muted cursor-default"
                )}
              >
                <span
                  className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-200",
                    isCurrent && "bg-violet text-white",
                    isCompleted && "bg-violet/20 text-violet",
                    !isCurrent && !isCompleted && "bg-border text-text-muted"
                  )}
                >
                  {isCompleted ? (
                    <Check size={12} />
                  ) : (
                    <StepIcon size={12} />
                  )}
                </span>
                <span className="hidden sm:inline">{s.name}</span>
              </button>
            );
          })}
        </div>
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
                  <StepTitle
                    title="Tell us about you"
                    subtitle="So we know who we're talking to"
                  />
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
                      placeholder="+31 62 831 8123"
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
                  <StepTitle
                    title="What do you need?"
                    subtitle="Select all that apply"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map((opt) => {
                      const Icon = opt.icon;
                      const selected = selectedServices.includes(opt.id);
                      return (
                        <button
                          key={opt.id}
                          onClick={() => toggleService(opt.id)}
                          className={cn(
                            "flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 relative overflow-hidden",
                            selected
                              ? "border-violet text-text-primary"
                              : "border-border bg-surface text-text-secondary hover:border-violet/30"
                          )}
                        >
                          {selected && (
                            <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-violet/5 to-cyan/10" />
                          )}
                          <Icon
                            size={20}
                            className={cn(
                              "relative z-10",
                              selected ? "text-violet" : "text-text-muted"
                            )}
                          />
                          <span className="text-sm font-medium relative z-10">
                            {opt.label}
                          </span>
                          {selected && (
                            <Check
                              size={16}
                              className="ml-auto text-violet relative z-10"
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
                  <StepTitle
                    title="Tell us more"
                    subtitle="Help us understand the scope"
                  />
                  <div className="space-y-6">
                    <RadioGroup
                      label="How many pages do you need?"
                      options={["1-5", "5-10", "10-20", "20+", "Not sure"]}
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
                  <StepTitle
                    title="Inspiration"
                    subtitle="Share websites you admire"
                  />
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
                  <StepTitle
                    title="Timeline & Budget"
                    subtitle="Help us plan the project"
                  />
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
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-3">
                        Budget range
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetOptions.map((opt) => (
                          <button
                            key={opt.label}
                            onClick={() => updateField("budget", opt.label)}
                            className={cn(
                              "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 flex items-center gap-2",
                              formData.budget === opt.label
                                ? "border-violet bg-violet/10 text-text-primary"
                                : "border-border bg-surface text-text-secondary hover:border-violet/30"
                            )}
                          >
                            <span>{opt.emoji}</span>
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <FormField
                      label="Any specific deadline? (optional)"
                      type="date"
                      value={formData.deadline}
                      onChange={(v) => updateField("deadline", v)}
                    />
                  </div>
                </div>
              )}

              {/* Step 6: Build Your Package */}
              {step === 6 && (
                <div>
                  <StepTitle
                    title="Build Your Package"
                    subtitle="Toggle add-ons to customize your project"
                  />
                  <div className="space-y-3 mb-6">
                    {addOns.map((addon) => {
                      const isSelected = selectedAddOns.includes(addon.id);
                      return (
                        <button
                          key={addon.id}
                          onClick={() => toggleAddOn(addon.id)}
                          className={cn(
                            "w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 relative overflow-hidden",
                            isSelected
                              ? "border-l-4 border-l-violet border-t-violet/30 border-r-violet/30 border-b-violet/30"
                              : "border-border bg-surface hover:border-violet/30"
                          )}
                        >
                          {isSelected && (
                            <div className="absolute inset-0 bg-violet/[0.04]" />
                          )}
                          <div className="flex-1 relative z-10">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-text-primary">
                                {addon.name}
                              </span>
                              {addon.recurring && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-cyan/10 text-cyan font-medium">
                                  Monthly
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-text-muted mt-0.5">
                              {addon.description}
                            </p>
                          </div>
                          <div className="text-right relative z-10 shrink-0">
                            <span className="text-sm font-bold text-text-primary">
                              &euro;{addon.price}
                            </span>
                            {addon.recurring && (
                              <span className="text-xs text-text-muted">
                                /mo
                              </span>
                            )}
                          </div>
                          <div
                            className={cn(
                              "w-10 h-6 rounded-full relative transition-colors duration-200 shrink-0",
                              isSelected ? "bg-violet" : "bg-border"
                            )}
                          >
                            <motion.div
                              className="w-4 h-4 rounded-full bg-white absolute top-1 shadow-sm"
                              animate={{ left: isSelected ? 21 : 3 }}
                              transition={{ duration: 0.15 }}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Package summary */}
                  {selectedAddOns.length > 0 && (
                    <div className="rounded-xl border border-violet/20 bg-violet/[0.03] p-4 space-y-2">
                      <p className="text-xs font-medium text-text-muted uppercase tracking-wider">
                        Selected add-ons
                      </p>
                      {(() => {
                        const oneTime = selectedAddOns
                          .map((id) => addOns.find((a) => a.id === id)!)
                          .filter((a) => !a.recurring);
                        const recurring = selectedAddOns
                          .map((id) => addOns.find((a) => a.id === id)!)
                          .filter((a) => a.recurring);
                        const oneTimeTotal = oneTime.reduce(
                          (sum, a) => sum + a.price,
                          0
                        );
                        const recurringTotal = recurring.reduce(
                          (sum, a) => sum + a.price,
                          0
                        );
                        return (
                          <>
                            {oneTime.length > 0 && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-text-secondary">
                                  One-time ({oneTime.length} items)
                                </span>
                                <span className="font-semibold text-text-primary">
                                  &euro;
                                  {oneTimeTotal.toLocaleString()}
                                </span>
                              </div>
                            )}
                            {recurring.length > 0 && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-text-secondary">
                                  Recurring ({recurring.length} items)
                                </span>
                                <span className="font-semibold text-text-primary">
                                  &euro;
                                  {recurringTotal.toLocaleString()}
                                  /mo
                                </span>
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  )}
                </div>
              )}

              {/* Step 7: Anything Else */}
              {step === 7 && (
                <div>
                  <StepTitle
                    title="Anything else?"
                    subtitle="Tell us anything about your project, goals, or concerns"
                  />
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

              {/* Step 8: Review */}
              {step === 8 && (
                <div>
                  <StepTitle
                    title="Review your brief"
                    subtitle="Make sure everything looks good"
                  />
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
                              serviceOptions.find((s) => s.id === id)?.label
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
                    {selectedAddOns.length > 0 && (
                      <ReviewItem
                        label="Add-ons"
                        value={selectedAddOns
                          .map(
                            (id) => addOns.find((a) => a.id === id)?.name
                          )
                          .join(", ")}
                        step={6}
                        onEdit={setStep}
                      />
                    )}
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
                        . AMENZO will use this information to contact me about
                        my project.
                      </span>
                    </label>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation with estimate preview */}
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

          {/* Floating estimate */}
          {estimate.hasEstimate && (
            <div className="hidden md:flex items-center gap-2 text-xs text-text-muted">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet to-cyan" />
              Estimated: &euro;{estimate.min.toLocaleString()} &ndash; &euro;
              {estimate.max.toLocaleString()}
              {estimate.recurring > 0 && (
                <span>
                  {" "}
                  + &euro;{estimate.recurring.toLocaleString()}/mo
                </span>
              )}
            </div>
          )}

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

function StepTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-2">
        {title}
      </h2>
      <div className="w-[60px] h-[3px] rounded-full bg-gradient-to-r from-violet to-cyan mb-3" />
      <p className="text-text-secondary">{subtitle}</p>
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
