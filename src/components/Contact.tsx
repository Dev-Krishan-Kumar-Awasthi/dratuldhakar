"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Bookmark, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    setErrorMessage("");
    setFormStatus("submitting");

    // Construct WhatsApp prefilled message
    const messageText = `Hello Dr. Atul Sir,

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject || "N/A"}

*Message:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/919179176554?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp URL in a new tab
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <SectionHeader
          eyebrow="Contact"
          title="Get in Touch"
          description="For research collaboration, academic inquiries, or professional correspondence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Info & Google Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Contact Details</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:dratuldhakar@gmail.com"
                  className="glass-card p-4 rounded-2xl flex items-center space-x-4 border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/30"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 dark:text-indigo-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Email</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">dratuldhakar@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:+919179176554"
                  className="glass-card p-4 rounded-2xl flex items-center space-x-4 border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/30"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 dark:text-indigo-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Phone</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">+91 91791 76554</span>
                  </div>
                </a>

                <div className="glass-card p-4 rounded-2xl flex items-start space-x-4 border border-slate-200/50 dark:border-slate-800/50">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Address</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-relaxed block mt-0.5">
                      Flat No. 301, JMD Lake View, New Ranibagh, Khandwa Road, Indore (M.P.), India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed - UIT-RGPV Shivpuri */}
            <div className="glass-panel p-2.5 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 h-[220px] overflow-hidden relative">
              <iframe
                title="Google Maps Location - UIT-RGPV Shivpuri"
                src="https://maps.google.com/maps?q=University+Institute+of+Technology+RGPV+Shivpuri+Madhya+Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl dark:grayscale dark:invert-[0.9] dark:opacity-85"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-200/50 dark:border-slate-800/50 h-full flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {formStatus !== "success" ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Send a Message</h3>
                      <p className="text-sm text-slate-400 dark:text-slate-500">
                        For research collaboration, academic queries, or professional opportunities.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3 text-xs bg-red-500/10 border border-red-500/25 rounded-xl text-red-500 font-semibold">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          disabled={formStatus === "submitting"}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm glass-panel"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          disabled={formStatus === "submitting"}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm glass-panel"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={formStatus === "submitting"}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm glass-panel"
                        placeholder="What is this about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        disabled={formStatus === "submitting"}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm glass-panel resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-md shadow-primary-500/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 disabled:-translate-y-0"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16 h-full space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 flex items-center justify-center animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Message Sent!</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                        Thank you for your message. I will reply as soon as possible.
                      </p>
                    </div>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-semibold text-xs transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/80 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
