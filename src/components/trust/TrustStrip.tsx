"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch, HardDrive, DollarSign, Clock, Award, ShieldCheck } from "lucide-react";
import { AnimatedCounter, StorageReductionVisual } from "@/components/ui/AnimatedCounter";

export const TrustStrip: React.FC = () => {
  return (
    <section id="metrics" className="relative py-8 sm:py-14 md:py-20 border-y border-white/10 bg-[#090C15]/80 backdrop-blur-md">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-indigo-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-8"
        >
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Verifiable Benchmarks</span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-slate-500">
            Real production outcomes
          </span>
        </motion.div>

        {/* High-Impact Metric Cards: 2x2 on Mobile + Full-Width CKA Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4 md:gap-5">
          {/* 1. 700+ Repos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="group relative rounded-xl border border-white/10 bg-[#0C111C] p-3.5 sm:p-5 hover:bg-[#0E1524] hover:border-cyan-500/30 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <div className="p-1.5 sm:p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <GitBranch className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 font-bold">01</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-cyan-400 transition-colors">
                <AnimatedCounter target={700} suffix="+" />
              </div>
              <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-semibold text-slate-200 line-clamp-1">
                Repos Migrated
              </div>
              <div className="mt-1 text-[10px] sm:text-xs text-slate-400 leading-tight line-clamp-2">
                GitLab to GitHub with history &amp; tags
              </div>
            </div>
            <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-white/5 text-[9px] sm:text-[10px] font-mono text-slate-500 flex items-center justify-between">
              <span>AUTOMATED</span>
              <span className="text-emerald-400">● VERIFIED</span>
            </div>
          </motion.div>

          {/* 2. 1.7 TB -> 400 MB S3 Storage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="group relative rounded-xl border border-white/10 bg-[#0C111C] p-3.5 sm:p-5 hover:bg-[#0E1524] hover:border-cyan-500/30 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <div className="p-1.5 sm:p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <HardDrive className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 font-bold">02</span>
              </div>
              <StorageReductionVisual />
              <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-semibold text-slate-200 line-clamp-1">
                S3 Storage Optimized
              </div>
              <div className="mt-1 text-[10px] sm:text-xs text-slate-400 leading-tight line-clamp-2">
                Stale versioning elimination
              </div>
            </div>
            <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-white/5 text-[9px] sm:text-[10px] font-mono text-slate-500 flex items-center justify-between">
              <span>CLEANUP</span>
              <span className="text-emerald-400">● VERIFIED</span>
            </div>
          </motion.div>

          {/* 3. ~$200/mo AWS Cost Reduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.19, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="group relative rounded-xl border border-white/10 bg-[#0C111C] p-3.5 sm:p-5 hover:bg-[#0E1524] hover:border-cyan-500/30 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 font-bold">03</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-emerald-400 transition-colors">
                <AnimatedCounter target={200} prefix="~$" suffix="/mo" />
              </div>
              <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-semibold text-slate-200 line-clamp-1">
                AWS Cost Saved
              </div>
              <div className="mt-1 text-[10px] sm:text-xs text-slate-400 leading-tight line-clamp-2">
                58 Snapshots &amp; VPC endpoints pruned
              </div>
            </div>
            <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-white/5 text-[9px] sm:text-[10px] font-mono text-slate-500 flex items-center justify-between">
              <span>RECURRING</span>
              <span className="text-emerald-400">● VERIFIED</span>
            </div>
          </motion.div>

          {/* 4. 5+ Years IT / Infra Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="group relative rounded-xl border border-white/10 bg-[#0C111C] p-3.5 sm:p-5 hover:bg-[#0E1524] hover:border-cyan-500/30 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <div className="p-1.5 sm:p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 font-bold">04</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-sky-400 transition-colors">
                <AnimatedCounter target={5} suffix="+ Yrs" duration={1.0} />
              </div>
              <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-semibold text-slate-200 line-clamp-1">
                Infra Depth
              </div>
              <div className="mt-1 text-[10px] sm:text-xs text-slate-400 leading-tight line-clamp-2">
                Linux, CI/CD pipelines &amp; AWS
              </div>
            </div>
            <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-white/5 text-[9px] sm:text-[10px] font-mono text-slate-500 flex items-center justify-between">
              <span>SYSTEMS</span>
              <span className="text-emerald-400">● PRACTICAL</span>
            </div>
          </motion.div>

          {/* 5. CKA Certified - Full-width horizontal on mobile, 5th card on desktop */}
          <motion.a
            href="#certification"
            title="View CKA Certification Details & Verification"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.33, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="col-span-2 lg:col-span-1 group relative rounded-xl border border-amber-500/30 bg-[#0C111C] p-3.5 sm:p-5 hover:bg-[#0E1524] hover:border-amber-500/50 transition-all duration-200 flex flex-row lg:flex-col justify-between items-center lg:items-stretch cursor-pointer"
          >
            <div className="flex items-center lg:block gap-3">
              <div className="flex items-center justify-between mb-0 lg:mb-4">
                <div className="p-1.5 sm:p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="hidden lg:inline text-[10px] font-mono text-slate-500 font-bold">05</span>
              </div>
              <div>
                <div className="text-lg sm:text-3xl font-extrabold text-amber-300 font-mono tracking-tight flex items-center gap-2">
                  <span>CKA</span>
                  <span className="text-xs font-sans font-semibold text-slate-200 lg:hidden">Kubernetes Admin</span>
                </div>
                <div className="hidden lg:block mt-1 text-sm font-semibold text-slate-200">
                  Kubernetes Admin
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 leading-tight">
                  Linux Foundation (Apr 2026)
                </div>
              </div>
            </div>
            <div className="mt-0 lg:mt-4 pt-0 lg:pt-3 border-t-0 lg:border-t border-white/5 text-[10px] font-mono text-amber-400/80 flex items-center gap-2 lg:justify-between shrink-0">
              <span className="hidden sm:inline-flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                LINUX FDN
              </span>
              <span className="text-emerald-400 text-xs sm:text-[10px] font-bold">VERIFY ↓</span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
