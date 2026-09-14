"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig, isConfiguredUrl, isConfiguredEmail, isConfiguredPhone } from "@/config/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, CheckCircle2, Copy, Check, Send, Loader2, AlertCircle, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    serviceNeed: "Cloud Infrastructure & AWS Architecture",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const serviceOptions = [
    "Cloud Infrastructure & AWS Architecture",
    "Application Deployment & CI/CD Pipelines",
    "Database, Repo & Cloud Migrations",
    "Cloud Cost Reduction & Optimization",
    "Monitoring, Alerting & Reliability",
    "Linux Systems & Infrastructure Support",
    "General Architecture Consultation",
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "$5,000+",
    "Retainer / Monthly",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.serviceNeed,
          message: formData.budget
            ? `[Estimated Budget: ${formData.budget}]\n\n${formData.message}`
            : formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmissionId(data.id || null);
      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isEmailConfigured = isConfiguredEmail(siteConfig.contact.email);

  const copyEmailToClipboard = () => {
    if (isEmailConfigured) {
      navigator.clipboard.writeText(siteConfig.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 border-t border-white/10">
      {/* Subtle background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            badge="// START A PROJECT"
            title="Have an Infrastructure Problem?"
            subtitle="Let's build something reliable. Tell me what you're trying to deploy, migrate, automate, or optimize. I review all inquiries and respond within 24 hours."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Communication Channels */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0C1019] p-6 sm:p-8 shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Direct Line
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Independent Engagement
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans font-normal">
                  Available for standalone fixed-scope infrastructure projects, architecture design reviews, deployment automations, or dedicated monthly retainer support for startups.
                </p>
              </div>

              {/* Email Card with Copy Trigger */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                      Direct Email
                    </span>
                    {isEmailConfigured ? (
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-sm font-mono font-bold text-white hover:text-cyan-400 transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-slate-400">
                        Inquiries via Project Form Below
                      </span>
                    )}
                  </div>
                </div>

                {isEmailConfigured && (
                  <button
                    onClick={copyEmailToClipboard}
                    aria-label="Copy Email address"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>

              {/* Direct Channels List (Only configured socials & phone) */}
              {(isConfiguredUrl(siteConfig.social.linkedin) ||
                isConfiguredUrl(siteConfig.social.github) ||
                isConfiguredUrl(siteConfig.social.instagram) ||
                isConfiguredPhone(siteConfig.contact.phone)) && (
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                    Alternative Channels
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {isConfiguredUrl(siteConfig.social.linkedin) && (
                      <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/20 transition-all flex items-center gap-2.5 text-xs text-slate-300 hover:text-white"
                      >
                        <LinkedinIcon className="w-4 h-4 text-sky-400" />
                        <span>LinkedIn Profile</span>
                      </a>
                    )}

                    {isConfiguredUrl(siteConfig.social.github) && (
                      <a
                        href={siteConfig.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/20 transition-all flex items-center gap-2.5 text-xs text-slate-300 hover:text-white"
                      >
                        <GithubIcon className="w-4 h-4 text-slate-200" />
                        <span>GitHub Repos</span>
                      </a>
                    )}

                    {isConfiguredUrl(siteConfig.social.instagram) && (
                      <a
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/20 transition-all flex items-center gap-2.5 text-xs text-slate-300 hover:text-white"
                      >
                        <InstagramIcon className="w-4 h-4 text-pink-400" />
                        <span>Instagram Profile</span>
                      </a>
                    )}

                    {isConfiguredPhone(siteConfig.contact.phone) && (
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                        className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/20 transition-all flex items-center gap-2.5 text-xs text-slate-300 hover:text-white sm:col-span-2"
                      >
                        <Phone className="w-4 h-4 text-emerald-400" />
                        <span>Direct: {siteConfig.contact.phone}</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* SLA badge */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>GUARANTEED RESPONSE</span>
                <span className="text-emerald-400 font-bold">Within 24 Hours</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Business Project Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0C111C] p-6 sm:p-8 lg:p-10 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">
                    Thanks! Your message has been received.
                  </h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for detailing your requirements. Your inquiry has been logged into the engineering portal and I will review and reply directly to <span className="text-cyan-400 font-mono">{formData.email}</span> within 24 hours.
                  </p>
                  {submissionId && (
                    <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 font-mono text-xs text-slate-400">
                      Ref ID: {submissionId.slice(0, 8)}
                    </div>
                  )}
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          company: "",
                          email: "",
                          serviceNeed: "Cloud Infrastructure & AWS Architecture",
                          budget: "",
                          message: "",
                        });
                      }}
                      className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      Project Specification
                    </h4>
                    <span className="text-[11px] font-mono text-slate-500">
                      * Required Fields
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-mono flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-xs font-mono text-slate-300 uppercase tracking-wider block"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Miller"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-sm font-sans transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-xs font-mono text-slate-300 uppercase tracking-wider block"
                      >
                        Company / Organization
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="e.g. Acme Cloud Inc."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-sm font-sans transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-mono text-slate-300 uppercase tracking-wider block"
                      >
                        Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@acme.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-sm font-sans transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="text-xs font-mono text-slate-300 uppercase tracking-wider block"
                      >
                        Primary Service *
                      </label>
                      <select
                        id="service"
                        value={formData.serviceNeed}
                        onChange={(e) =>
                          setFormData({ ...formData, serviceNeed: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#090D15] border border-white/10 text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-sm font-sans transition-colors"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#090D15] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                      Target Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: range })}
                          className={`px-3 py-2 rounded-lg text-xs font-mono transition-all border cursor-pointer ${
                            formData.budget === range
                              ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300 font-semibold"
                              : "bg-white/[0.02] border-white/5 text-slate-400 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Infrastructure Requirements Details */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-mono text-slate-300 uppercase tracking-wider block"
                    >
                      Requirements / Project Scope *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your infrastructure goals, existing architecture, pain points, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-sm font-sans transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/20 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>RECORDING INQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <span>SUBMIT INQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
