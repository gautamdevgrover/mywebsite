"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch, HardDrive, DollarSign, Award, CheckCircle2 } from "lucide-react";
import { AnimatedCounter, StorageReductionVisual } from "@/components/ui/AnimatedCounter";

export const EngineeringProofs: React.FC = () => {
  return (
    <section id="proof" className="py-12 sm:py-20 md:py-28 border-t border-white/5 bg-[#080B12]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-white/5"
        >
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Measurable Engineering
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Engineering at Scale
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm text-slate-400 max-w-md">
            Verifiable results from production systems. Real metrics, practical automation, and certified competence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Proof 1: 700+ Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="group rounded-2xl border border-white/10 bg-[#0C111C] p-4 sm:p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-cyan-400">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border text-cyan-400 border-cyan-500/30 bg-cyan-500/10">
                    Scale Automation
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  VERIFIED
                </span>
              </div>

              <div className="mb-4">
                <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  <AnimatedCounter target={700} suffix="+" />
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Repositories Migrated
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                Automated GitLab to GitHub Migration
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Engineered custom Python automation utilizing GitHub and GitLab REST APIs to systematically mirror 700+ codebases with zero data loss.
              </p>

              <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                {[
                  "Preserved 100% of commit histories, branches, and version tags",
                  "Automated GitHub target repository creation & team permissions",
                  "Handled edge cases: rate limiting, large blobs, and timeout retries",
                  "Zero developer disruption during cross-platform cutover",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
              {["Python", "GitLab API", "GitHub API", "Git CLI"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-white/5 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Proof 2: 1.7 TB -> 400 MB S3 Storage */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="group rounded-2xl border border-white/10 bg-[#0C111C] p-4 sm:p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-indigo-400">
                    <HardDrive className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border text-indigo-400 border-indigo-500/30 bg-indigo-500/10">
                    Storage Engineering
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  VERIFIED
                </span>
              </div>

              <div className="mb-4">
                <StorageReductionVisual />
                <div className="text-xs font-mono text-slate-400 mt-1">
                  Storage Reduction
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                S3 Object Store Versioning Optimization
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Developed Python/Boto3 cleanup scripts targeting stale non-current object versions accumulating hidden storage costs across AWS S3 buckets.
              </p>

              <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                {[
                  "Safely identified versions older than 6 months without affecting live assets",
                  "Wrote dry-run simulation mode before executing permanent deletions",
                  "Reduced redundant S3 storage footprints from 1.7 TB down to ~400 MB",
                  "Configured permanent S3 Lifecycle expiration rules for future uploads",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
              {["AWS S3", "Python / Boto3", "S3 Lifecycle", "CloudWatch"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-white/5 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Proof 3: ~$200/mo AWS Cost Reduction */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="group rounded-2xl border border-white/10 bg-[#0C111C] p-4 sm:p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-emerald-400">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
                    Financial Efficiency
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  VERIFIED
                </span>
              </div>

              <div className="mb-4">
                <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  <AnimatedCounter target={200} prefix="~$" suffix="/mo" />
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Ongoing Cost Reduction
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                AWS Infrastructure Waste Elimination
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Conducted deep audits across production AWS accounts to identify and decommission unattached storage, abandoned snapshots, and idle network endpoints.
              </p>

              <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                {[
                  "Terminated unutilized VPC Interface Endpoints generating continuous hourly charges",
                  "Audited and cleaned up 58 orphaned EBS snapshots from retired compute instances",
                  "Delivered immediate ~$200/month recurring cost reduction without downtime",
                  "Established tagging governance to prevent future resource leaks",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
              {["AWS Cost Explorer", "VPC Endpoints", "EBS Snapshots", "EC2"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-white/5 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Proof 4: CKA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="group rounded-2xl border border-amber-500/30 bg-[#0C111C] p-4 sm:p-8 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border text-amber-400 border-amber-500/30 bg-amber-500/10">
                    Verified Credential
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  VERIFIED
                </span>
              </div>

              <div className="mb-4">
                <div className="text-3xl sm:text-4xl font-black font-mono text-amber-300 tracking-tight">
                  CKA
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Linux Foundation Credential
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                Certified Kubernetes Administrator
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Demonstrated mastery of core Kubernetes primitives, cluster architecture, workload scheduling, persistent storage, networking, and cluster troubleshooting.
              </p>

              <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                {[
                  "Certified by The Linux Foundation & CNCF (Earned April 2026)",
                  "Deep command over pod networking, services, ingress, and RBAC",
                  "Cluster troubleshooting, etcd backups, and node maintenance",
                  "Honest production scope: Daily production currently on AWS EC2/ECS/Docker",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
              {["Kubernetes", "Docker", "Linux Kernel", "CNCF"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-white/5 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
