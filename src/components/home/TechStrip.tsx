"use client";

import React, { useState } from "react";
import {
  AwsLogo,
  KubernetesLogo,
  DockerLogo,
  JenkinsLogo,
  GithubActionsLogo,
  GitlabLogo,
  PrometheusLogo,
  GrafanaLogo,
  NginxLogo,
  LinuxLogo,
} from "@/components/icons/TechLogos";

export const TechStrip: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    {
      id: "aws",
      name: "AWS",
      role: "Cloud Infrastructure & VPC",
      logo: <AwsLogo className="w-5 h-5 text-white" />,
      tag: "VPC / EC2 / ECS / RDS / S3",
      accent: "hover:border-[#FF9900]/40 group-hover:text-[#FF9900]",
    },
    {
      id: "k8s",
      name: "Kubernetes",
      role: "Container Orchestration",
      logo: <KubernetesLogo className="w-5 h-5" />,
      tag: "CKA Certified Primitives",
      accent: "hover:border-[#326CE5]/40 group-hover:text-[#326CE5]",
    },
    {
      id: "docker",
      name: "Docker",
      role: "Containerization",
      logo: <DockerLogo className="w-5 h-5" />,
      tag: "Multi-stage Builds & Compose",
      accent: "hover:border-[#2496ED]/40 group-hover:text-[#2496ED]",
    },
    {
      id: "jenkins",
      name: "Jenkins",
      role: "CI/CD Pipeline Engine",
      logo: <JenkinsLogo className="w-5 h-5" />,
      tag: "Automated Deployments",
      accent: "hover:border-[#D24939]/40 group-hover:text-[#D24939]",
    },
    {
      id: "github",
      name: "GitHub",
      role: "VCS & Actions Delivery",
      logo: <GithubActionsLogo className="w-5 h-5" />,
      tag: "Workflows & Branch Protection",
      accent: "hover:border-[#2088FF]/40 group-hover:text-[#2088FF]",
    },
    {
      id: "gitlab",
      name: "GitLab",
      role: "CI/CD & Self-hosted Runners",
      logo: <GitlabLogo className="w-5 h-5" />,
      tag: "700+ Repos Migrated",
      accent: "hover:border-[#FC6D26]/40 group-hover:text-[#FC6D26]",
    },
    {
      id: "prometheus",
      name: "Prometheus",
      role: "Metrics & Time-series Scraper",
      logo: <PrometheusLogo className="w-5 h-5" />,
      tag: "Blackbox & Alertmanager",
      accent: "hover:border-[#E6522C]/40 group-hover:text-[#E6522C]",
    },
    {
      id: "grafana",
      name: "Grafana",
      role: "SLA & Metrics Dashboards",
      logo: <GrafanaLogo className="w-5 h-5" />,
      tag: "System Observability",
      accent: "hover:border-[#F46800]/40 group-hover:text-[#F46800]",
    },
    {
      id: "nginx",
      name: "Nginx",
      role: "Reverse Proxy & TLS/SSL",
      logo: <NginxLogo className="w-5 h-5" />,
      tag: "Load Balancing & Security",
      accent: "hover:border-[#009639]/40 group-hover:text-[#009639]",
    },
    {
      id: "linux",
      name: "Linux",
      role: "Enterprise OS Hardening",
      logo: <LinuxLogo className="w-5 h-5" />,
      tag: "Ubuntu / Debian / RHEL",
      accent: "hover:border-[#FCC624]/40 group-hover:text-[#FCC624]",
    },
  ];

  // Double the list for continuous infinite marquee
  const marqueeItems = [...technologies, ...technologies];

  return (
    <section
      id="tech-strip"
      className="py-4 sm:py-8 border-y border-white/5 bg-[#090C14]/70 backdrop-blur-sm relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2.5 sm:mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400">
              Production Stack &middot; Continuous Delivery
            </span>
          </div>
          <span className="hidden sm:inline text-[11px] font-mono text-slate-500">
            Hover to pause & inspect
          </span>
        </div>
      </div>

      {/* Marquee Track Container with subtle fade masks on left and right */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="animate-marquee py-1.5 sm:py-2 flex items-center gap-2.5 sm:gap-4">
          {marqueeItems.map((tech, index) => {
            const isHovered = hoveredTech === `${tech.id}-${index}`;
            return (
              <div
                key={`${tech.id}-${index}`}
                onMouseEnter={() => setHoveredTech(`${tech.id}-${index}`)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`group relative flex items-center gap-2.5 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-200 hover:bg-white/[0.06] hover:border-white/20 cursor-default ${tech.accent}`}
              >
                <div className="flex-shrink-0 scale-90 sm:scale-100 transition-transform duration-200 group-hover:scale-110">
                  {tech.logo}
                </div>

                <div className="flex flex-col text-left whitespace-nowrap">
                  <span className="text-[11px] sm:text-xs font-semibold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-400">
                    {tech.role}
                  </span>
                </div>

                {/* Micro Tooltip on Hover */}
                {isHovered && (
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#0F1420] border border-cyan-500/30 text-[10px] font-mono text-cyan-300 shadow-xl whitespace-nowrap z-30 pointer-events-none animate-in fade-in duration-150">
                    {tech.tag}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
