"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  Clock,
  MessageCircle,
  ArrowRight,
  Send,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_WHATSAPP,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/locale-context";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  enquiryType: z.enum(["project", "general"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { t } = useLocale();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      enquiryType: "project",
    },
  });

  const enquiryType = watch("enquiryType");

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      toast.success(t("contact.toast"));
      reset();
    } catch {
      toast.error("Something went wrong. Please try again or email us directly at info@amenzo.co.");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-bg overflow-hidden">
        
        <div className="container-wide relative z-10">
          <AnimateIn animation="fadeUp">
            <p className="caption mb-4 text-white/70">{t("contact.eyebrow")}</p>
          </AnimateIn>
          <AnimateIn animation="fadeUp" delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-tight">
              {t("contact.title")}
            </h1>
          </AnimateIn>
          <AnimateIn animation="fadeUp" delay={0.2}>
            <p className="mt-6 text-xl text-text-secondary max-w-2xl">
              {t("contact.subtitle")}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Split Layout */}
      <section className="pb-40 bg-bg">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left: Contact Form */}
            <div className="lg:col-span-3">
              <AnimateIn animation="fadeUp" delay={0.3}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 p-8 md:p-10 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/8"
                >
                  {/* Enquiry Type Toggle */}
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-3">
                      {t("contact.help")}
                    </label>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setValue("enquiryType", "project")}
                        className={cn(
                          "flex-1 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer",
                          enquiryType === "project"
                            ? "bg-white/15 text-white border-white/30"
                            : "bg-white/5 text-white/60 border border-white/10 hover:border-white/30"
                        )}
                      >
                        {t("contact.startProject")}
                      </button>
                      <button
                        type="button"
                        onClick={() => setValue("enquiryType", "general")}
                        className={cn(
                          "flex-1 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer",
                          enquiryType === "general"
                            ? "bg-white/15 text-white border-white/30"
                            : "bg-white/5 text-white/60 border border-white/10 hover:border-white/30"
                        )}
                      >
                        {t("contact.general")}
                      </button>
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        {t("contact.field.name")} *
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name")}
                        placeholder={t("contact.placeholder.name")}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-coral">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        {t("contact.field.email")} *
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder={t("contact.placeholder.email")}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-coral">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        {t("contact.field.phone")}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="+31 62 831 8123"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        {t("contact.field.company")}
                      </label>
                      <input
                        id="company"
                        type="text"
                        {...register("company")}
                        placeholder={t("contact.placeholder.company")}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      {t("contact.field.message")} *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register("message")}
                      placeholder={t("contact.placeholder.message")}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-coral">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 accent-white"
                    />
                    <span className="text-sm text-white/60">
                      {t("contact.consent")}{" "}
                      <a href="/privacy" className="text-white/70 hover:underline">
                        {t("contact.privacyLink")}
                      </a>
                      {t("contact.consentSuffix")}
                    </span>
                  </label>

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      t("contact.sending")
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t("contact.send")}
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-text-muted text-center">
                    {t("contact.needBrief")}{" "}
                    <a
                      href="/start-project"
                      className="text-white/70 hover:underline"
                    >
                      {t("contact.useWizard")}
                    </a>
                    {t("contact.useWizardSuffix")}
                  </p>
                </form>
              </AnimateIn>
            </div>

            {/* Right: Contact Details */}
            <div className="lg:col-span-2 space-y-8">
              <AnimateIn animation="fadeUp" delay={0.4}>
                <div className="space-y-6">
                  <h3 className="font-display text-xl font-semibold text-text-primary">
                    {t("contact.getInTouch")}
                  </h3>

                  {/* Email */}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white/70" />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">{t("contact.label.email")}</p>
                      <p className="text-text-primary group-hover:text-white/70 transition-colors">
                        {CONTACT_EMAIL}
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">{t("contact.label.phone")}</p>
                      <p className="text-text-primary group-hover:text-cyan transition-colors">
                        {CONTACT_PHONE}
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${CONTACT_WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">{t("contact.label.whatsapp")}</p>
                      <p className="text-text-primary group-hover:text-success transition-colors">
                        {t("contact.chatWithUs")}
                      </p>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-warning" />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">{t("contact.label.hours")}</p>
                      <p className="text-text-primary">
                        {t("contact.weekdays")}
                      </p>
                      <p className="text-text-muted text-sm">
                        {t("contact.weekend")}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* Project Brief Link */}
              <AnimateIn animation="fadeUp" delay={0.6}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                  <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                    {t("contact.brief.title")}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    {t("contact.brief.desc")}
                  </p>
                  <a
                    href="/start-project"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:gap-3 transition-all"
                  >
                    {t("contact.brief.cta")}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
