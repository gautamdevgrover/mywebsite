"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Shield, ArrowDown, CheckCircle, Award } from "lucide-react";
import { HeroPhotoFrame } from "./HeroPhotoFrame";
import {
  KubernetesLogo,
  AwsLogo,
  DockerLogo,
  JenkinsLogo,
  GithubActionsLogo,
  GitlabLogo,
} from "@/components/icons/TechLogos";

export const HeroSection: React.FC = () => {
  const coreTech = [
    { name: "Kubernetes", logo: <KubernetesLogo className="w-4 h-4" />, color: "hover:border-[#326CE5]/40 hover:shadow-[#326CE5]/10" },
    { name: "AWS", logo: <AwsLogo className="w-5 h-4 text-white" />, color: "hover:border-[#FF9900]/40 hover:shadow-[#FF9900]/10" },
    { name: "Docker", logo: <DockerLogo className="w-4 h-4" />, color: "hover:border-[#2496ED]/40 hover:shadow-[#2496ED]/10" },
    { name: "Jenkins", logo: <JenkinsLogo className="w-4 h-4" />, color: "hover:border-[#D24939]/40 hover:shadow-[#D24939]/10" },
    { name: "GitHub Actions", logo: <GithubActionsLogo className="w-4 h-4" />, color: "hover:border-[#2088FF]/40 hover:shadow-[#2088FF]/10" },
    { name: "GitLab", logo: <GitlabLogo className="w-4 h-4" />, color: "hover:border-[#FC6D26]/40 hover:shadow-[#FC6D26]/10" },
  ];

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
                Independent DevOps & Cloud Practice
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-xs font-mono text-cyan-400 font-semibold hidden sm:inline">
                CKA Certified
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08]">
                I Build, Automate &{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  Scale Production
                </span>{" "}
                Infrastructure.
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              I help startups and engineering teams deploy applications, automate delivery pipelines, optimize AWS cloud costs, and solve production problems with absolute reliability.
            </motion.p>

            {/* DevOps Core Stack Banner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2 pt-1"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                <span>Core Technology Stack</span>
                <span className="text-slate-400">Cloud · CI/CD · Containers · Observability</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                {coreTech.map((item) => (
                  <div
                    key={item.name}
                    className={`flex items-center gap-2 px-2.5 py-2 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.06] transition-all duration-200 shadow-sm ${item.color} group cursor-default`}
                  >
                    <div className="transition-transform duration-200 group-hover:scale-110">
                      {item.logo}
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-300 group-hover:text-white truncate">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Proof Badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-2 text-xs font-mono text-slate-400 pt-1"
            >
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> 700+ Repos Migrated
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> 1.7 TB → 400 MB S3
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> ~$200/mo AWS Saved
              </span>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/about#contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all active:scale-[0.98]"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium tracking-wide text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all active:scale-[0.98]"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>ABOUT & SERVICES</span>
              </Link>
            </motion.div>

            {/* Micro Credential Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
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
