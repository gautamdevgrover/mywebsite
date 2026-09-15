"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cloud, GitBranch, ArrowRightLeft, DollarSign, ArrowRight } from "lucide-react";
import {
  AwsLogo,
  DockerLogo,
  JenkinsLogo,
  GithubActionsLogo,
  GitlabLogo,
  PythonLogo,
} from "@/components/icons/TechLogos";

export const QuickCapabilities: React.FC = () => {
  const capabilities = [
    {
      id: "cloud-infra",
      number: "01",
      title: "Cloud Infrastructure",
      headline: "Production AWS Architectures",
      description:
        "Architecting robust VPC networks, EC2 compute tiers, RDS databases, S3 storage, and secure IAM policies designed for isolation and high availability.",
      tags: ["AWS VPC", "EC2", "ALB", "RDS", "ECS / ECR", "S3 & IAM"],
      icon: Cloud,
      logos: [<AwsLogo key="aws" className="w-4 h-4 text-white" />],
    },
    {
      id: "cicd-automation",
      number: "02",
      title: "CI/CD & Deployment Automation",
      headline: "Automated Build to Production",
      description:
        "Building push-to-deploy pipelines using Jenkins, GitHub Actions, and GitLab CI/CD with Docker container builds, zero-downtime releases, and fast rollbacks.",
      tags: ["Jenkins", "GitHub Actions", "GitLab CI", "Docker", "Webhooks"],
      icon: GitBranch,
      logos: [
        <JenkinsLogo key="jenkins" className="w-4 h-4" />,
        <GithubActionsLogo key="actions" className="w-4 h-4" />,
        <GitlabLogo key="gitlab" className="w-4 h-4" />,
      ],
    },
    {
      id: "migration-automation",
      number: "03",
      title: "Migration & Automation",
      headline: "Zero-Data-Loss Transitions",
      description:
        "Automating bulk platform migrations and operational tasks using Python and REST APIs. Proven track record migrating 700+ repositories with full Git history.",
      tags: ["700+ Repos Migrated", "Python / Boto3", "Git API", "S3 Automation"],
      icon: ArrowRightLeft,
      logos: [<PythonLogo key="python" className="w-4 h-4" />],
    },
    {
      id: "cost-optimization",
      number: "04",
      title: "Cloud Cost Optimization",
      headline: "Measurable Cloud Waste Elimination",
      description:
        "Auditing cloud footprints to eliminate idle resources, unused VPC endpoints, orphaned EBS snapshots, and oversized compute instances without sacrificing performance.",
      tags: ["~$200/mo AWS Reduction", "58 Snapshots Cleaned", "VPC Endpoints", "S3 Tiering"],
      icon: DollarSign,
      logos: [
        <DockerLogo key="docker" className="w-4 h-4" />,
        <AwsLogo key="aws" className="w-4 h-4 text-white" />,
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-12 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-12 pb-4 md:pb-6 border-b border-white/5"
        >
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-1.5 md:mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Core Capabilities
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              What I Build, Automate &amp; Optimize
            </h2>
          </div>
          <div className="mt-3 md:mt-0">
            <Link
              href="/about#services"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>View All 6 Core Services</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </motion.div>

        {/* 4 Cards Grid - 2x2 on Mobile, 2 Cols on Desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -3 }}
                className="group relative p-3.5 sm:p-8 rounded-xl sm:rounded-2xl bg-[#0C1019] border border-white/10 hover:border-cyan-500/40 transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs text-slate-500 font-bold">
                      {cap.number}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-xl font-bold text-white mb-0.5 sm:mb-1 group-hover:text-cyan-300 transition-colors line-clamp-1 sm:line-clamp-none">
                    {cap.title}
                  </h3>
                  <div className="text-[10px] sm:text-xs font-mono text-cyan-400/90 sm:text-slate-400 mb-1.5 sm:mb-3 line-clamp-1">
                    {cap.headline}
                  </div>

                  <p className="text-[11px] sm:text-sm text-slate-300/90 leading-relaxed mb-3 sm:mb-6 font-normal line-clamp-2 sm:line-clamp-none">
                    {cap.description}
                  </p>
                </div>

                <div>
                  {/* Tags: Hidden on tiny mobile screens, visible on desktop */}
                  <div className="hidden sm:flex flex-wrap gap-1.5 mb-5">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-slate-300 bg-white/5 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/about#services"
                    className="inline-flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-mono font-semibold text-slate-400 group-hover:text-white transition-colors"
                  >
                    <span className="truncate">Deliverables</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-1 text-cyan-400 shrink-0" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
