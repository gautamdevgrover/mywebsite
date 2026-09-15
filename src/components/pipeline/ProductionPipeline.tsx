"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, CheckCircle2, ChevronRight, Server } from "lucide-react";
import {
  GitlabLogo,
  JenkinsLogo,
  GithubActionsLogo,
  DockerLogo,
  EcrLogo,
  Ec2Logo,
  EcsLogo,
  NginxLogo,
  PrometheusLogo,
  GrafanaLogo,
} from "@/components/icons/TechLogos";

interface PipelineNode {
  id: string;
  step: string;
  name: string;
  shortName: string;
  subtitle: string;
  stage: string;
  description: string;
  command: string;
  keySpecs: string[];
  logos: React.ReactNode[];
}

export const ProductionPipeline: React.FC = () => {
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number>(0);

  const nodes: PipelineNode[] = [
    {
      id: "dev",
      step: "01",
      name: "Developer",
      shortName: "Developer",
      subtitle: "Code & Feature Commits",
      stage: "Source Stage",
      description:
        "Code written locally, formatted via Git pre-commit hooks, and validated with unit tests before being pushed to trunk branches.",
      command: "git commit -m 'feat: optimize connection pool' && git push origin main",
      keySpecs: [
        "Conventional commit formatting with linting rules",
        "Feature branch isolation and GPG/SSH signed commits",
        "Pre-commit security hooks preventing secret leaks",
      ],
      logos: [<Terminal key="term" className="w-5 h-5 text-cyan-400" />],
    },
    {
      id: "vcs",
      step: "02",
      name: "GitHub / GitLab",
      shortName: "GitHub / GitLab",
      subtitle: "Version Control & Triggers",
      stage: "VCS Stage",
      description:
        "Centralized Git repository hosting with branch protections, mandatory PR peer review gates, and instant HMAC-signed webhook dispatches.",
      command: "webhook -> POST https://ci.gautamdevgrover.online/github-webhook/ (payload: push)",
      keySpecs: [
        "Protected branch rules preventing direct commits to main",
        "Required status checks and approvals before merging",
        "Automatic event dispatch to CI/CD build runners",
      ],
      logos: [
        <GithubActionsLogo key="gh" className="w-5 h-5" />,
        <GitlabLogo key="gl" className="w-5 h-5" />,
      ],
    },
    {
      id: "cicd",
      step: "03",
      name: "Jenkins / Actions",
      shortName: "CI/CD Pipeline",
      subtitle: "Automated Build & Test",
      stage: "CI/CD Stage",
      description:
        "Continuous integration engine that checks out code, runs automated test suites, performs static analysis, and initiates Docker container builds.",
      command: "jenkinsfile: stage('Test & Build') { sh 'npm test && npm run build' }",
      keySpecs: [
        "Automated parallel test execution with zero manual touches",
        "Self-hosted runners scaled on demand for faster builds",
        "Fast failure alerts routed to engineering channels",
      ],
      logos: [
        <JenkinsLogo key="jenk" className="w-5 h-5" />,
        <GithubActionsLogo key="gha" className="w-5 h-5" />,
      ],
    },
    {
      id: "docker",
      step: "04",
      name: "Docker",
      shortName: "Docker",
      subtitle: "Container Packaging",
      stage: "Packaging Stage",
      description:
        "Building lightweight, reproducible multi-stage Docker images encapsulating runtime dependencies while discarding build tools for minimal attack surface.",
      command: "docker build --target production -t app:${BUILD_TAG} .",
      keySpecs: [
        "Multi-stage Dockerfiles reducing image size by up to 70%",
        "Non-root security execution inside the production container",
        "Layer caching optimization for sub-minute rebuilds",
      ],
      logos: [<DockerLogo key="dock" className="w-5 h-5" />],
    },
    {
      id: "ecr",
      step: "05",
      name: "Amazon ECR",
      shortName: "Amazon ECR",
      subtitle: "Secure Image Registry",
      stage: "Artifact Stage",
      description:
        "Pushing immutable, version-tagged container artifacts into private Amazon Elastic Container Registry with automatic vulnerability scanning on push.",
      command: "docker push 123456789012.dkr.ecr.us-east-1.amazonaws.com/app:v2.4.1",
      keySpecs: [
        "Image vulnerability CVE scanning powered by AWS Inspector",
        "Immutable semantic image tags with commit SHA cross-reference",
        "Lifecycle policies retiring untagged images older than 14 days",
      ],
      logos: [<EcrLogo key="ecr" className="w-5 h-5" />],
    },
    {
      id: "compute",
      step: "06",
      name: "AWS EC2 / ECS",
      shortName: "AWS Compute",
      subtitle: "Production Deployment",
      stage: "Runtime Stage",
      description:
        "Pulling verified image from ECR and executing rolling release on AWS ECS Fargate tasks or EC2 Auto Scaling Groups behind an Application Load Balancer.",
      command: "aws ecs update-service --cluster prod-cluster --service web-app --force-new-deployment",
      keySpecs: [
        "Rolling deployment maintaining 100% minimum healthy percentage",
        "VPC private subnet isolation with Security Group firewall rules",
        "Auto Scaling policies dynamically matching CPU/memory spikes",
      ],
      logos: [
        <EcsLogo key="ecs" className="w-5 h-5" />,
        <Ec2Logo key="ec2" className="w-5 h-5" />,
      ],
    },
    {
      id: "nginx",
      step: "07",
      name: "Nginx / App",
      shortName: "Nginx / App",
      subtitle: "Reverse Proxy & TLS",
      stage: "Ingress Stage",
      description:
        "Receiving traffic through Application Load Balancer, terminating TLS certificates, managing gzip compression, and proxying HTTP requests to application workers.",
      command: "nginx -t && systemctl reload nginx",
      keySpecs: [
        "SSL/TLS termination with modern TLSv1.3 cipher suites",
        "Reverse proxy load balancing across local PM2/container sockets",
        "Gzip & brotli compression minimizing client response latency",
      ],
      logos: [
        <NginxLogo key="nginx" className="w-5 h-5" />,
        <Server key="srv" className="w-5 h-5 text-sky-400" />,
      ],
    },
    {
      id: "observability",
      step: "08",
      name: "Prometheus / Grafana",
      shortName: "Observability",
      subtitle: "Monitoring & Uptime",
      stage: "Observability Stage",
      description:
        "Continuous synthetic HTTP probing and system metrics scraping to verify SLA, latency, error rates, and dispatch alerts to Alertmanager before outages occur.",
      command: "scrape_interval: 15s | blackbox_exporter probe_success == 1",
      keySpecs: [
        "Synthetic Blackbox HTTP/TCP probing for endpoint health",
        "Grafana dashboards tracking request throughput and CPU/memory",
        "Automated 1-minute threshold alert dispatches via email/Slack",
      ],
      logos: [
        <PrometheusLogo key="prom" className="w-5 h-5" />,
        <GrafanaLogo key="graf" className="w-5 h-5" />,
      ],
    },
  ];

  const currentNode = nodes[selectedNodeIndex];

  return (
    <section id="pipeline" className="py-20 md:py-28 relative overflow-hidden bg-[#07090E]">
      {/* Background Ambience */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
              Deployment Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              From Code to Production
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-slate-400 max-w-md">
            Click or hover any stage to inspect the exact tooling, commands, and security specs of each pipeline transition.
          </p>
        </motion.div>

        {/* 1. DESKTOP VIEW: Horizontal Interactive Pipeline Flow */}
        <div className="hidden lg:block relative mb-10">
          {/* Animated Connecting SVG Line */}
          <div className="absolute top-12 left-8 right-8 h-1 -z-0 pointer-events-none">
            <svg className="w-full h-4 overflow-visible" preserveAspectRatio="none">
              {/* Base track line */}
              <line
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="2"
              />
              {/* Animated drawing progress line */}
              <motion.line
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="url(#pipelineGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <defs>
                <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00D2FF" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 8 Desktop Stage Nodes */}
          <div className="grid grid-cols-8 gap-2 relative z-10">
            {nodes.map((node, index) => {
              const isSelected = selectedNodeIndex === index;
              return (
                <motion.button
                  key={node.id}
                  onClick={() => setSelectedNodeIndex(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group relative flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#111728] border-2 border-cyan-400 shadow-xl shadow-cyan-500/10 scale-105"
                      : "bg-[#0C1019] border border-white/10 hover:border-white/20 hover:bg-[#0E1422]"
                  }`}
                >
                  {/* Step Number Badge */}
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full mb-2 ${
                      isSelected
                        ? "bg-cyan-400 text-black"
                        : "bg-white/5 text-slate-400 group-hover:text-white"
                    }`}
                  >
                    {node.step}
                  </span>

                  {/* Icon Frame */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-transform ${
                      isSelected
                        ? "bg-cyan-500/20 text-cyan-300 scale-110"
                        : "bg-white/5 text-slate-300 group-hover:scale-105"
                    }`}
                  >
                    {node.logos[0]}
                  </div>

                  {/* Node Name */}
                  <div
                    className={`text-xs font-bold leading-tight line-clamp-1 ${
                      isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                    }`}
                  >
                    {node.shortName}
                  </div>

                  <div className="text-[10px] font-mono text-slate-500 mt-1 line-clamp-1">
                    {node.subtitle}
                  </div>

                  {/* Active Indicator Beacon */}
                  {isSelected && (
                    <motion.div
                      layoutId="activePipelineIndicator"
                      className="absolute -bottom-2 w-2 h-2 rounded-full bg-cyan-400"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* 2. MOBILE VIEW: Interactive Horizontal Stage Selector Rail */}
        <div className="lg:hidden mb-4">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2 px-1">
            <span>TAP STAGE TO INSPECT</span>
            <span className="text-cyan-400 font-semibold">{currentNode.step}/08 · {currentNode.shortName}</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory -mx-4 px-4">
            {nodes.map((node, index) => {
              const isSelected = selectedNodeIndex === index;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeIndex(index)}
                  className={`flex-shrink-0 snap-center flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                    isSelected
                      ? "bg-cyan-500/20 border-cyan-400 text-white shadow-md shadow-cyan-500/10 font-bold"
                      : "bg-[#0C1019] border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                      isSelected
                        ? "bg-cyan-400 text-black"
                        : "bg-white/10 text-slate-400"
                    }`}
                  >
                    {node.step}
                  </span>
                  <span className="whitespace-nowrap">{node.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. INTERACTIVE DETAIL INSPECTION PANEL */}
        {currentNode && (
          <motion.div
            key={currentNode.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-cyan-500/30 bg-[#0B0F19] p-4 sm:p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient top light */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
              {/* Left Column: Stage Info & Specs */}
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between sm:justify-start gap-3">
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-400 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-cyan-500/10 border border-cyan-500/30">
                    STAGE {currentNode.step} &middot; {currentNode.stage}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {currentNode.logos.map((logo, lIdx) => (
                      <div
                        key={lIdx}
                        className="p-1 sm:p-1.5 rounded-md bg-white/5 border border-white/10"
                      >
                        {logo}
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {currentNode.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {currentNode.description}
                </p>

                {/* Key Architectural Specs */}
                <div className="space-y-1.5 sm:space-y-2 pt-2 border-t border-white/5">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1 sm:mb-2">
                    Production Specifications
                  </span>
                  {currentNode.keySpecs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 sm:gap-2.5 text-[11px] sm:text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Real Terminal Command Sample */}
              <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
                <div className="rounded-xl border border-white/10 bg-[#05070B] overflow-hidden shadow-xl">
                  <div className="flex items-center justify-between px-3.5 py-2 bg-white/5 border-b border-white/5 text-[10px] sm:text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>execution_pipeline.sh</span>
                    </div>
                    <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      VERIFIED
                    </span>
                  </div>

                  <div className="p-3 sm:p-4 font-mono text-xs text-slate-200 overflow-x-auto">
                    <div className="text-slate-500 mb-1 text-[10px] sm:text-[11px]">
                      # Executed automated command
                    </div>
                    <div className="text-cyan-300 font-semibold leading-relaxed text-[11px] sm:text-xs break-all sm:break-normal">
                      $ {currentNode.command}
                    </div>
                    <div className="mt-2.5 text-emerald-400 text-[10px] sm:text-[11px] flex items-center gap-1">
                      <span>✓ Exit code: 0 [SUCCESS]</span>
                    </div>
                  </div>
                </div>

                {/* Next Step Nav Button */}
                <div className="flex justify-between items-center pt-1">
                  <div className="text-[10px] font-mono text-slate-500">
                    {selectedNodeIndex + 1} of {nodes.length} stages
                  </div>
                  <button
                    onClick={() =>
                      setSelectedNodeIndex((prev) => (prev + 1) % nodes.length)
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>Next: {nodes[(selectedNodeIndex + 1) % nodes.length].shortName}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
