"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Clock } from "lucide-react";
import { siteConfig, isConfiguredEmail } from "@/config/siteContent";

export const HomeCta: React.FC = () => {
  return (
    <section className="py-20 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Currently Accepting Infrastructure Projects</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Have an Infrastructure Bottleneck or Migration Coming Up?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          From designing reliable AWS topologies to streamlining CI/CD delivery and eliminating recurring cloud waste, I work directly as an independent technical partner.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/about#contact"
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 transition-all active:scale-[0.98]"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
          >
            <span>Read Founder Story & Services</span>
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          {isConfiguredEmail(siteConfig.contact.email) ? (
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Direct Email: {siteConfig.contact.email}</span>
            </a>
          ) : (
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Inquiries via Project Form</span>
            </span>
          )}
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Guaranteed Response Within 24 Hours</span>
          </span>
        </div>
      </div>
    </section>
  );
};
