"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  GitBranch,
  ArrowRightLeft,
  DollarSign,
  Activity,
  Terminal,
  Check,
  ArrowRight,
} from "lucide-react";
import {
  AwsLogo,
  KubernetesLogo,
  DockerLogo,
  JenkinsLogo,
  GithubActionsLogo,
  GitlabLogo,
  PrometheusLogo,
  GrafanaLogo,
  PythonLogo,
  LinuxLogo,
  NginxLogo,
  Ec2Logo,
  RdsLogo,
  S3Logo,
} from "@/components/icons/TechLogos";
import Link from "next/link";

export const SixServices: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "Cloud Infrastructure & Architecture",
      tagline: "AWS VPC, Compute & Managed Services",
      description:
        "Designing and provisioning secure, production-grade AWS environments built with public/private subnet segmentation, high availability, and least-privilege IAM controls.",
      deliverables: [
        "VPC network design with NAT Gateways & security groups",
        "Application Load Balancer (ALB) & EC2 Auto Scaling",
        "Managed Amazon RDS with automated daily snapshots",
        "S3 bucket architecture with encryption & IAM policies",
      ],
      icon: Cloud,
      logos: [
        <AwsLogo key="aws" className="w-4 h-4 text-white" />,
        <Ec2Logo key="ec2" className="w-4 h-4" />,
        <RdsLogo key="rds" className="w-4 h-4" />,
        <S3Logo key="s3" className="w-4 h-4" />,
      ],
    },
    {
      number: "02",
      title: "App Deployment & CI/CD Pipelines",
      tagline: "Automated Push-to-Production Delivery",
      description:
        "Building self-healing deployment pipelines that test code, build optimized multi-stage Docker images, and deploy automatically to staging and production targets.",
      deliverables: [
        "Automated Jenkins & GitHub Actions release workflows",
        "Self-hosted GitLab Runner provisioning & autoscaling",
        "Containerized deployments on AWS ECS & EC2 instances",
        "Zero-downtime rolling releases & fast rollbacks",
      ],
      icon: GitBranch,
      logos: [
        <JenkinsLogo key="jenkins" className="w-4 h-4" />,
        <GithubActionsLogo key="actions" className="w-4 h-4" />,
        <GitlabLogo key="gitlab" className="w-4 h-4" />,
        <DockerLogo key="docker" className="w-4 h-4" />,
      ],
    },
    {
      number: "03",
      title: "Database, Repo & Cloud Migrations",
      tagline: "Zero-Data-Loss Migration Workflows",
      description:
        "Planning and executing high-integrity migrations between platforms. Proven capability automating the transition of 700+ repositories and multi-terabyte object stores.",
      deliverables: [
        "Automated GitLab to GitHub repo transfer (history, tags, branches)",
        "Database dump, restore & replication cutover workflows",
        "S3 object store reorganization & bucket replication",
        "Comprehensive pre-migration audit & rollback validation",
      ],
      icon: ArrowRightLeft,
      logos: [
        <PythonLogo key="python" className="w-4 h-4" />,
        <GitlabLogo key="gitlab" className="w-4 h-4" />,
        <GithubActionsLogo key="github" className="w-4 h-4" />,
      ],
    },
    {
      number: "04",
      title: "Cloud Cost Optimization & Waste Elimination",
      tagline: "Measurable, Sustainable AWS Bill Reduction",
      description:
        "Auditing cloud environments to eliminate orphaned storage, idle network resources, and unneeded compute overhead without impacting production stability.",
      deliverables: [
        "Orphaned EBS snapshot analysis & automated pruning",
        "Unused VPC Endpoint identification & decommissioning",
        "S3 Lifecycle policies (transition to Infrequent Access & Glacier)",
        "Right-sizing compute instances and database allocations",
      ],
      icon: DollarSign,
      logos: [
        <AwsLogo key="aws" className="w-4 h-4 text-white" />,
        <PythonLogo key="python" className="w-4 h-4" />,
      ],
    },
    {
      number: "05",
      title: "Monitoring, Alerting & Reliability",
      tagline: "Synthetic Health Probing & Metrics Observability",
      description:
        "Deploying full-stack observability suites to ensure immediate awareness of API failures, endpoint latency, and host system health before users are affected.",
      deliverables: [
        "Prometheus metric scrapers & Blackbox HTTP/TCP probes",
        "Grafana dashboards visualizing SLA, latency & node resources",
        "Alertmanager notification routing with 1-minute threshold alerts",
        "Docker Compose deployment of self-contained monitoring stacks",
      ],
      icon: Activity,
      logos: [
        <PrometheusLogo key="prom" className="w-4 h-4" />,
        <GrafanaLogo key="grafana" className="w-4 h-4" />,
        <DockerLogo key="docker" className="w-4 h-4" />,
      ],
    },
    {
      number: "06",
      title: "Linux Systems & Infrastructure Support",
      tagline: "OS Hardening, Performance Tuning & Root-Cause Fixes",
      description:
        "Operating system-level administration, SSH security hardening, Nginx reverse proxy tuning, SSL/TLS certificates, and emergency troubleshooting for production hosts.",
      deliverables: [
        "Rapid root-cause debugging for production outages & crashes",
        "Nginx reverse proxy, gzip compression, and TLS/SSL certs",
        "Linux OS hardening, firewall rules, and SSH key management",
        "Systemd service configuration, process supervisor & log rotation",
      ],
      icon: Terminal,
      logos: [
        <LinuxLogo key="linux" className="w-4 h-4" />,
        <NginxLogo key="nginx" className="w-4 h-4" />,
        <KubernetesLogo key="k8s" className="w-4 h-4" />,
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/5"
        >
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              6 Core Engineering Services
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-slate-400 max-w-md">
            Direct, hands-on infrastructure execution. No outsourced layers or junior pass-offs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, index) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -3 }}
                className="group relative rounded-2xl border border-white/10 bg-[#0C111C] p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-[#0E1524] transition-all duration-200"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500">
                      SERVICE {srv.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mb-3">
                    {srv.tagline}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {srv.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                      Key Deliverables
                    </span>
                    {srv.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Logos + CTA */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {srv.logos.map((logo) => (
                      <div
                        key={logo.key}
                        className="p-1 rounded bg-white/5 border border-white/5"
                      >
                        {logo}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
