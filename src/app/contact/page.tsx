"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
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
  CONTACT_ADDRESS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

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
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
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
            <p className="caption mb-4 text-white/70">CONTACT</p>
          </AnimateIn>
          <AnimateIn animation="fadeUp" delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-tight">
              Let&apos;s Talk
            </h1>
          </AnimateIn>
          <AnimateIn animation="fadeUp" delay={0.2}>
            <p className="mt-6 text-xl text-text-secondary max-w-2xl">
              Whether you have a project in mind or just want to explore what&apos;s
              possible, we&apos;d love to hear from you.
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
                      What can we help with?
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
                        Start a Project
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
                        General Enquiry
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
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name")}
                        placeholder="John Doe"
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
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="john@company.com"
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
                        Phone
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
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        {...register("company")}
                        placeholder="Your company name"
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
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register("message")}
                      placeholder="Tell us about your project, timeline, and budget..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-coral">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-text-muted text-center">
                    Need a detailed brief?{" "}
                    <a
                      href="/start-project"
                      className="text-white/70 hover:underline"
                    >
                      Use our project wizard
                    </a>{" "}
                    instead.
                  </p>
                </form>
              </AnimateIn>
            </div>

            {/* Right: Contact Details */}
            <div className="lg:col-span-2 space-y-8">
              <AnimateIn animation="fadeUp" delay={0.4}>
                <div className="space-y-6">
                  <h3 className="font-display text-xl font-semibold text-text-primary">
                    Get in Touch
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
                      <p className="text-sm text-text-secondary">Email</p>
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
                      <p className="text-sm text-text-secondary">Phone</p>
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
                      <p className="text-sm text-text-secondary">WhatsApp</p>
                      <p className="text-text-primary group-hover:text-success transition-colors">
                        Chat with us
                      </p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">Address</p>
                      <p className="text-text-primary">{CONTACT_ADDRESS}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-warning" />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">Hours</p>
                      <p className="text-text-primary">
                        Mon &ndash; Fri: 9:00 &ndash; 18:00
                      </p>
                      <p className="text-text-muted text-sm">
                        Weekend by appointment
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* Project Brief Link */}
              <AnimateIn animation="fadeUp" delay={0.6}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                  <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                    Have a detailed brief?
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Use our project wizard to walk us through your requirements
                    step by step.
                  </p>
                  <a
                    href="/start-project"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:gap-3 transition-all"
                  >
                    Start Project Wizard
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
