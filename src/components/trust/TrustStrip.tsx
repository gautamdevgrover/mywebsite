"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch, HardDrive, DollarSign, Clock, Award, ShieldCheck } from "lucide-react";
import { AnimatedCounter, StorageReductionVisual } from "@/components/ui/AnimatedCounter";

export const TrustStrip: React.FC = () => {
  return (
    <section id="metrics" className="relative py-14 md:py-20 border-y border-white/10 bg-[#090C15]/80 backdrop-blur-md">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-indigo-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between flex-wrap gap-4 mb-8"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Verifiable Technical Benchmarks</span>
          </div>
          <span className="text-xs font-mono text-slate-500">
            Real production engineering outcomes
          </span>
        </motion.div>

        {/* 5 High-Impact Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {/* 1. 700+ Repos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="group relative rounded-xl border border-white/10 bg-[#0C111C] p-5 hover:bg-[#0E1524] hover:border-cyan-500/30 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <GitBranch className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 font-bold">01</span>
              </div>
              <div className="text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-cyan-400 transition-colors">
                <AnimatedCounter target={700} suffix="+" />
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-200">
                Repositories Migrated
              </div>
              <div className="mt-1.5 text-xs text-slate-400 leading-snug">
                GitLab to GitHub with full commits, branches & tags
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-slate-500 flex items-center justify-between">
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
            className="group relative rounded-xl border border-white/10 bg-[#0C111C] p-5 hover:bg-[#0E1524] hover:border-cyan-500/30 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <HardDrive className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 font-bold">02</span>
              </div>
              <StorageReductionVisual />
              <div className="mt-1 text-sm font-semibold text-slate-200">
                S3 Storage Optimized
              </div>
              <div className="mt-1 text-xs text-slate-400 leading-snug">
                Python/Boto3 stale versioning elimination
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-slate-500 flex items-center justify-between">
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
            className="group relative rounded-xl border border-white/10 bg-[#0C111C] p-5 hover:bg-[#0E1524] hover:border-cyan-500/30 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <DollarSign className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 font-bold">03</span>
              </div>
              <div className="text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-emerald-400 transition-colors">
                <AnimatedCounter target={200} prefix="~$" suffix="/mo" />
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-200">
                AWS Cost Reduction
              </div>
              <div className="mt-1.5 text-xs text-slate-400 leading-snug">
                58 EBS snapshots & unused VPC endpoints removed
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-slate-500 flex items-center justify-between">
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
            className="group relative rounded-xl border border-white/10 bg-[#0C111C] p-5 hover:bg-[#0E1524] hover:border-cyan-500/30 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 font-bold">04</span>
              </div>
              <div className="text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-sky-400 transition-colors">
                <AnimatedCounter target={5} suffix="+ Yrs" duration={1.0} />
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-200">
                Infrastructure Depth
              </div>
              <div className="mt-1.5 text-xs text-slate-400 leading-snug">
                Linux administration, CI/CD pipelines & AWS Cloud
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-slate-500 flex items-center justify-between">
              <span>SYSTEMS</span>
              <span className="text-emerald-400">● PRACTICAL</span>
            </div>
          </motion.div>

          {/* 5. CKA Certified */}
          <motion.a
            href="#certification"
            title="View CKA Certification Details & Verification"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.33, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="group relative rounded-xl border border-amber-500/30 bg-[#0C111C] p-5 hover:bg-[#0E1524] hover:border-amber-500/50 transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 font-bold">05</span>
              </div>
              <div className="text-3xl font-extrabold text-amber-300 font-mono tracking-tight">
                CKA
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-200">
                Kubernetes Admin
              </div>
              <div className="mt-1.5 text-xs text-slate-400 leading-snug">
                Certified by The Linux Foundation (Apr 2026)
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-amber-400/80 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                LINUX FDN
              </span>
              <span className="text-emerald-400">● VERIFY ↓</span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
