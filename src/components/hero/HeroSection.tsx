"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Shield, ArrowDown, Award } from "lucide-react";
import { HeroPhotoFrame } from "./HeroPhotoFrame";

export const HeroSection: React.FC = () => {

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning, Headline, Tech Orbit & CTAs */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            {/* Status & Credential Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                Gautam Dev &middot; DevOps &amp; Cloud Practice
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-xs font-mono text-cyan-400 font-semibold hidden sm:inline">
                CKA Certified
              </span>
            </motion.div>

            {/* Main Headline: Two-line Statement with Clear Hierarchy */}
            <div className="space-y-2">
              <h1 className="tracking-tight">
                {/* Line 1: Slightly smaller / lighter */}
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-medium text-slate-300/90 leading-snug"
                >
                  I Don&apos;t Just Deploy Software.
                </motion.span>

                {/* Line 2: Dominant headline with visual anchor */}
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-3xl sm:text-5xl md:text-6xl lg:text-[3.85rem] font-black text-white leading-[1.08] mt-2 sm:mt-3"
                >
                  I Build the{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                    Infrastructure
                  </span>{" "}
                  Behind It.
                </motion.span>
              </h1>
            </div>

            {/* Subtitle: Short and visually secondary */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-slate-300/90 max-w-2xl leading-relaxed font-normal"
            >
              DevOps &amp; Cloud Engineering for modern applications, reliable deployments and optimized infrastructure.
            </motion.p>

            {/* Subtle Technical Keywords Line */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-mono text-slate-400 pt-1"
            >
              <span className="text-slate-300">Cloud Infrastructure</span>
              <span className="text-cyan-500/60 font-bold select-none" aria-hidden="true">·</span>
              <span className="text-slate-300">CI/CD</span>
              <span className="text-cyan-500/60 font-bold select-none" aria-hidden="true">·</span>
              <span className="text-slate-300">Migrations</span>
              <span className="text-cyan-500/60 font-bold select-none" aria-hidden="true">·</span>
              <span className="text-slate-300">Cost Optimization</span>
              <span className="text-cyan-500/60 font-bold select-none" aria-hidden="true">·</span>
              <span className="text-slate-300">Monitoring</span>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary CTA: Visually stronger */}
              <Link
                href="/about#contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium tracking-wide text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all active:scale-[0.98]"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Explore Services</span>
              </Link>
            </motion.div>

            {/* Micro Credential Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-2 flex items-center gap-6 text-xs text-slate-500 font-mono"
            >
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-indigo-400" />
                Linux Foundation CKA
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                Production Systems First
              </span>
            </motion.div>
          </div>

          {/* Right Column: Gautam's Editorial Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroPhotoFrame />
          </div>
        </div>
      </div>

      {/* Down arrow anchor */}
      <div className="flex justify-center mt-12 md:mt-16">
        <a
          href="#tech-strip"
          aria-label="Scroll to technology stack"
          className="p-2 rounded-full border border-white/10 text-slate-500 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors animate-bounce"
        >
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
