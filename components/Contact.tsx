// This client component creates the contact terminal, form validation, and toast notifications.
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Lucide icons imported for contact details and form interactions.
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, X } from "lucide-react";
// Hook to access localized strings for contact section.
import { useLanguage } from "@/context/LanguageContext";

// This component presents the contact information alongside the interactive message form.
export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Toast state tracking current delivery feedback status.
  const [toastStatus, setToastStatus] = useState<"success" | "error" | null>(null);
  // Active language translations from context.
  const { t } = useLanguage();

  // This handler updates input state when the user types in form fields.
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form submission handler sending input data to the contact endpoint.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      // Calling server endpoint to dispatch email through resend.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      // Resetting form inputs upon successful message dispatch.
      setFormData({ name: "", email: "", message: "" });
      setToastStatus("success");

      // Auto dismiss timer for success notification.
      setTimeout(() => {
        setToastStatus(null);
      }, 5000);
    } catch {
      // Preserving user input and showing error notification upon failure.
      setToastStatus("error");

      // Auto dismiss timer for error notification.
      setTimeout(() => {
        setToastStatus(null);
      }, 5000);
    } finally {
      // Ending submission loading state.
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 bg-[#14161A] pt-24 md:pt-32 pb-12 px-6 md:px-12">
      {/* Floating feedback toast showing delivery outcome. */}
      <AnimatePresence>
        {toastStatus && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20, x: 20 }}
            className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-[#1E2025] border border-white/20 rounded-xl px-4 py-3 shadow-2xl text-white backdrop-blur-md"
          >
            {/* Status icon badge reflecting submission result. */}
            <div
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ${
                toastStatus === "success"
                  ? "bg-emerald-500/20 border-emerald-500/40"
                  : "bg-rose-500/20 border-rose-500/40"
              }`}
            >
              {toastStatus === "success" ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-400" />
              )}
            </div>
            {/* Descriptive message text based on delivery status. */}
            <div>
              <p className="text-sm font-semibold text-white">
                {toastStatus === "success"
                  ? t.contact.successTitle
                  : t.contact.errorTitle}
              </p>
              <p className="text-xs text-white/60">
                {toastStatus === "success"
                  ? t.contact.successSubtitle
                  : t.contact.errorSubtitle}
              </p>
            </div>
            {/* Close button dismissing the toast notification. */}
            <button
              onClick={() => setToastStatus(null)}
              className="ml-2 text-white/50 hover:text-white"
              aria-label="Dismiss toast notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto">
        {/* Centered header block with white underline */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase"
          >
            {t.contact.sectionTitle}
          </motion.h2>
          <div className="w-14 h-1 bg-white mx-auto mt-3 rounded-full" />
        </div>

        {/* Two column layout with contact information on left and form card on right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left column with direct channels and social links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {t.contact.heading}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t.contact.subheading}
              </p>
            </div>

            {/* Direct contact items */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1F2229] border border-white/10 flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-wider block font-medium">{t.contact.emailLabel}</span>
                  {/* Email contact link highlighted with reddish-pink hover accent. */}
                  <a
                    href="mailto:agouriane.amr@gmail.com"
                    className="text-sm md:text-base font-semibold text-white hover:text-[#FA2A55] transition-colors"
                  >
                    agouriane.amr@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1F2229] border border-white/10 flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-wider block font-medium">{t.contact.phoneLabel}</span>
                  {/* Phone contact link highlighted with reddish-pink hover accent. */}
                  <a
                    href="tel:+212652609996"
                    className="text-sm md:text-base font-semibold text-white hover:text-[#FA2A55] transition-colors"
                  >
                    +212 652 609 996
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1F2229] border border-white/10 flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-wider block font-medium">{t.contact.locationLabel}</span>
                  <span className="text-sm md:text-base font-semibold text-white">{t.contact.locationValue}</span>
                </div>
              </div>
            </div>

            {/* Social media links with authentic brand styling and elevation. */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs text-white/50 uppercase tracking-wider block mb-3 font-medium">{t.contact.followMe}</span>
              <div className="flex items-center gap-3">
                {/* Official filled linkedin brand button with blue accent glow. */}
                <a
                  href="https://www.linkedin.com/in/amr-agouriane-521120283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-11 h-11 rounded-full bg-[#1F2229] border border-white/10 flex items-center justify-center hover:border-[#0A66C2]/60 hover:shadow-[0_0_16px_rgba(10,102,194,0.45)] hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  {/* Authentic linkedin vector badge with crisp glyph. */}
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                    <rect width="24" height="24" rx="4" fill="#0A66C2" />
                    <path d="M7.86 6.32a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26zM6.46 10.94h2.8v7.37h-2.8zm4.4 0h2.68v1.01h.04c.37-.71 1.29-1.46 2.66-1.46 2.84 0 3.37 1.87 3.37 4.31v5.51h-2.79v-4.88c0-1.16-.02-2.66-1.62-2.66-1.62 0-1.87 1.27-1.87 2.58v4.96h-2.79z" fill="#FFFFFF" />
                  </svg>
                </a>

                {/* Official filled github brand button with purple and white glow. */}
                <a
                  href="https://github.com/Chiakyyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="w-11 h-11 rounded-full bg-[#1F2229] border border-white/10 flex items-center justify-center hover:border-white/50 hover:shadow-[0_0_16px_rgba(139,92,246,0.35),0_0_8px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  {/* Authentic filled octocat silhouette vector graphic. */}
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FFFFFF">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                {/* Official filled whatsapp brand button with green accent glow. */}
                <a
                  href="https://wa.me/212652609996"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp or Telegram messenger"
                  className="w-11 h-11 rounded-full bg-[#1F2229] border border-white/10 flex items-center justify-center hover:border-[#25D366]/60 hover:shadow-[0_0_16px_rgba(37,211,102,0.45)] hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  {/* Authentic whatsapp brand icon with green bubble and white handset. */}
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                    <path fill="#25D366" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z" />
                    <path fill="#FFFFFF" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.06 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right column with interactive contact form card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <div className="bg-[#1E2025] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                    {t.contact.nameField}
                  </label>
                  {/* Name input field with reddish-pink focus ring and soft glow. */}
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full bg-white text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FA2A55] focus:shadow-[0_0_12px_rgba(250,42,85,0.35)] transition-all placeholder:text-gray-500 font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                    {t.contact.emailField}
                  </label>
                  {/* Email input field with reddish-pink focus ring and soft glow. */}
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full bg-white text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FA2A55] focus:shadow-[0_0_12px_rgba(250,42,85,0.35)] transition-all placeholder:text-gray-500 font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                    {t.contact.messageField}
                  </label>
                  {/* Message textarea field with reddish-pink focus ring and soft glow. */}
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full bg-white text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FA2A55] focus:shadow-[0_0_12px_rgba(250,42,85,0.35)] transition-all placeholder:text-gray-500 font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 px-6 rounded-full bg-white text-[#0A0A0C] font-bold text-sm flex items-center justify-center gap-2 hover:bg-neutral-100 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-80 transition-all duration-200 shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>{t.contact.sendingButton}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.contact.submitButton}</span>
                      <Send className="w-4 h-4 text-[#0A0A0C]" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer section with subtle top border */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-xs md:text-sm">
            {t.contact.copyright}
          </p>
        </div>
      </div>
    </section>
  );
}
