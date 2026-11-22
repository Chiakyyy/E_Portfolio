// This client component creates the contact terminal, form validation, and toast notifications.
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Github, MessageCircle, X } from "lucide-react";

// This component presents the contact information alongside the interactive message form.
export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // This handler updates input state when the user types in form fields.
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // This handler simulates asynchronous submission and triggers the toast notification.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative z-10 bg-[#14161A] pt-24 md:pt-32 pb-12 px-6 md:px-12">
      {/* This top right floating dark toast notification displays upon successful message delivery. */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20, x: 20 }}
            className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-[#1E2025] border border-white/20 rounded-xl px-4 py-3 shadow-2xl text-white backdrop-blur-md"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Message sent successfully</p>
              <p className="text-xs text-white/60">I will get back to you promptly.</p>
            </div>
            <button
              onClick={() => setShowToast(false)}
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
            GET IN TOUCH
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
                Let&apos;s Build Something Resilient
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Whether you need high-performance offline mobile apps in Flutter, React Native, or .NET MAUI, reach out directly.
              </p>
            </div>

            {/* Direct contact items */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1F2229] border border-white/10 flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-wider block font-medium">Email</span>
                  {/* Email contact link highlighted with reddish-pink hover accent. */}
                  <a
                    href="mailto:amr.agouriane@gmail.com"
                    className="text-sm md:text-base font-semibold text-white hover:text-[#FA2A55] transition-colors"
                  >
                    amr.agouriane@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1F2229] border border-white/10 flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-wider block font-medium">Phone</span>
                  {/* Phone contact link highlighted with reddish-pink hover accent. */}
                  <a
                    href="tel:+212600000000"
                    className="text-sm md:text-base font-semibold text-white hover:text-[#FA2A55] transition-colors"
                  >
                    +212 600 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1F2229] border border-white/10 flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-wider block font-medium">Location</span>
                  <span className="text-sm md:text-base font-semibold text-white">Morocco</span>
                </div>
              </div>
            </div>

            {/* Social media links with hover elevation */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs text-white/50 uppercase tracking-wider block mb-3 font-medium">Follow Me</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-10 h-10 rounded-full bg-[#1F2229] border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 hover:-translate-y-1 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="w-10 h-10 rounded-full bg-[#1F2229] border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 hover:-translate-y-1 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp or Telegram messenger"
                  className="w-10 h-10 rounded-full bg-[#1F2229] border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 hover:-translate-y-1 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
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
                    Name
                  </label>
                  {/* Name input field with reddish-pink focus ring and soft glow. */}
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full bg-white text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FA2A55] focus:shadow-[0_0_12px_rgba(250,42,85,0.35)] transition-all placeholder:text-gray-500 font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  {/* Email input field with reddish-pink focus ring and soft glow. */}
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full bg-white text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FA2A55] focus:shadow-[0_0_12px_rgba(250,42,85,0.35)] transition-all placeholder:text-gray-500 font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  {/* Message textarea field with reddish-pink focus ring and soft glow. */}
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="I'd Love To Hear About Your Project"
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
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
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
            &copy; 2026 Amr Agouriane. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
