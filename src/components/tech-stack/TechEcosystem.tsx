"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  AwsLogo,
  Ec2Logo,
  S3Logo,
  EcsLogo,
  EcrLogo,
  RdsLogo,
  KubernetesLogo,
  DockerLogo,
  DockerComposeLogo,
  HelmLogo,
  JenkinsLogo,
  GithubActionsLogo,
  GitlabLogo,
  GitlabRunnerLogo,
  PrometheusLogo,
  GrafanaLogo,
  AlertmanagerLogo,
  BlackboxExporterLogo,
  TerraformLogo,
  AnsibleLogo,
  PythonLogo,
  BashLogo,
  GitLogo,
  NginxLogo,
} from "@/components/icons/TechLogos";

interface TechItem {
  name: string;
  description: string;
  logo: React.ReactNode;
  brandHex: string;
  borderHover: string;
  glowHover: string;
}

interface TechCategoryGroup {
  category: string;
  eyebrow: string;
  summary: string;
  items: TechItem[];
}

const categorizedTech: TechCategoryGroup[] = [
  {
    category: "CLOUD",
    eyebrow: "AWS PRODUCTION INFRASTRUCTURE",
    summary: "Cloud infrastructure, compute, networking, isolated storage, and database persistence.",
    items: [
      {
        name: "AWS",
        description: "Cloud infrastructure, compute, storage and networking",
        logo: <AwsLogo className="w-6 h-6 text-white" />,
        brandHex: "#FF9900",
        borderHover: "hover:border-[#FF9900]/50",
        glowHover: "hover:shadow-[#FF9900]/10",
      },
      {
        name: "Amazon EC2",
        description: "Scalable compute instances & Auto Scaling Groups",
        logo: <Ec2Logo className="w-6 h-6" />,
        brandHex: "#FF9900",
        borderHover: "hover:border-[#FF9900]/50",
        glowHover: "hover:shadow-[#FF9900]/10",
      },
      {
        name: "Amazon S3",
        description: "Object storage, versioning lifecycle & Boto3 cleanup",
        logo: <S3Logo className="w-6 h-6" />,
        brandHex: "#E7157B",
        borderHover: "hover:border-[#E7157B]/50",
        glowHover: "hover:shadow-[#E7157B]/10",
      },
      {
        name: "Amazon ECS",
        description: "Containerized application deployment & task execution",
        logo: <EcsLogo className="w-6 h-6" />,
        brandHex: "#FF9900",
        borderHover: "hover:border-[#FF9900]/50",
        glowHover: "hover:shadow-[#FF9900]/10",
      },
      {
        name: "Amazon ECR",
        description: "Private container image registry with vulnerability scans",
        logo: <EcrLogo className="w-6 h-6" />,
        brandHex: "#FF9900",
        borderHover: "hover:border-[#FF9900]/50",
        glowHover: "hover:shadow-[#FF9900]/10",
      },
      {
        name: "Amazon RDS",
        description: "Isolated relational database instances & backup policies",
        logo: <RdsLogo className="w-6 h-6" />,
        brandHex: "#527FFF",
        borderHover: "hover:border-[#527FFF]/50",
        glowHover: "hover:shadow-[#527FFF]/10",
      },
    ],
  },
  {
    category: "CONTAINERS & ORCHESTRATION",
    eyebrow: "CONTAINER RUNTIMES & CLOUD NATIVE",
    summary: "Production containerization, multi-stage images, and Kubernetes cluster administration.",
    items: [
      {
        name: "Kubernetes",
        description: "Container orchestration & cloud-native workloads (CKA)",
        logo: <KubernetesLogo className="w-6 h-6" />,
        brandHex: "#326CE5",
        borderHover: "hover:border-[#326CE5]/50",
        glowHover: "hover:shadow-[#326CE5]/10",
      },
      {
        name: "Docker",
        description: "Containerization and application deployment",
        logo: <DockerLogo className="w-6 h-6" />,
        brandHex: "#2496ED",
        borderHover: "hover:border-[#2496ED]/50",
        glowHover: "hover:shadow-[#2496ED]/10",
      },
      {
        name: "Docker Compose",
        description: "Multi-container local environments and testing stacks",
        logo: <DockerComposeLogo className="w-6 h-6" />,
        brandHex: "#38BDF8",
        borderHover: "hover:border-[#38BDF8]/50",
        glowHover: "hover:shadow-[#38BDF8]/10",
      },
      {
        name: "Helm",
        description: "Kubernetes package management & chart deployments",
        logo: <HelmLogo className="w-6 h-6" />,
        brandHex: "#0F1689",
        borderHover: "hover:border-[#38BDF8]/50",
        glowHover: "hover:shadow-[#38BDF8]/10",
      },
    ],
  },
  {
    category: "CI/CD & AUTOMATION",
    eyebrow: "CONTINUOUS DELIVERY PIPELINES",
    summary: "Automated test validation, image publishing, and deployment execution with zero human toil.",
    items: [
      {
        name: "Jenkins",
        description: "CI/CD pipeline automation & declarative build scripts",
        logo: <JenkinsLogo className="w-6 h-6" />,
        brandHex: "#D24939",
        borderHover: "hover:border-[#D24939]/50",
        glowHover: "hover:shadow-[#D24939]/10",
      },
      {
        name: "GitHub Actions",
        description: "Automated build, test & multi-environment workflows",
        logo: <GithubActionsLogo className="w-6 h-6" />,
        brandHex: "#2088FF",
        borderHover: "hover:border-[#2088FF]/50",
        glowHover: "hover:shadow-[#2088FF]/10",
      },
      {
        name: "GitLab CI/CD",
        description: "Automated deployment pipelines & pipeline optimization",
        logo: <GitlabLogo className="w-6 h-6" />,
        brandHex: "#FC6D26",
        borderHover: "hover:border-[#FC6D26]/50",
        glowHover: "hover:shadow-[#FC6D26]/10",
      },
      {
        name: "GitLab Runner",
        description: "Self-hosted build runner provisioning & executor tuning",
        logo: <GitlabRunnerLogo className="w-6 h-6" />,
        brandHex: "#FC6D26",
        borderHover: "hover:border-[#FC6D26]/50",
        glowHover: "hover:shadow-[#FC6D26]/10",
      },
    ],
  },
  {
    category: "OBSERVABILITY",
    eyebrow: "SYNTHETIC PROBES & TELEMETRY",
    summary: "Continuous availability checking, custom latency dashboards, and instant outage escalation.",
    items: [
      {
        name: "Prometheus",
        description: "Metrics collection and infrastructure/API monitoring",
        logo: <PrometheusLogo className="w-6 h-6" />,
        brandHex: "#E6522C",
        borderHover: "hover:border-[#E6522C]/50",
        glowHover: "hover:shadow-[#E6522C]/10",
      },
      {
        name: "Grafana",
        description: "Monitoring dashboards and operational observability",
        logo: <GrafanaLogo className="w-6 h-6" />,
        brandHex: "#F46800",
        borderHover: "hover:border-[#F46800]/50",
        glowHover: "hover:shadow-[#F46800]/10",
      },
      {
        name: "Alertmanager",
        description: "Alert routing, grouping and 1-minute failure email dispatch",
        logo: <AlertmanagerLogo className="w-6 h-6" />,
        brandHex: "#FFA000",
        borderHover: "hover:border-[#FFA000]/50",
        glowHover: "hover:shadow-[#FFA000]/10",
      },
      {
        name: "Blackbox Exporter",
        description: "Synthetic HTTP/HTTPS endpoint probing & health checks",
        logo: <BlackboxExporterLogo className="w-6 h-6" />,
        brandHex: "#38BDF8",
        borderHover: "hover:border-[#38BDF8]/50",
        glowHover: "hover:shadow-[#38BDF8]/10",
      },
    ],
  },
  {
    category: "INFRASTRUCTURE",
    eyebrow: "IAC, SYSTEMS & RUNTIMES",
    summary: "Code-defined infrastructure, configuration management, and production-grade Linux servers.",
    items: [
      {
        name: "Terraform",
        description: "Declarative Infrastructure as Code (IaC) provisioning",
        logo: <TerraformLogo className="w-6 h-6" />,
        brandHex: "#844FBA",
        borderHover: "hover:border-[#844FBA]/50",
        glowHover: "hover:shadow-[#844FBA]/10",
      },
      {
        name: "Ansible",
        description: "Server configuration management and playbook automation",
        logo: <AnsibleLogo className="w-6 h-6" />,
        brandHex: "#EE0000",
        borderHover: "hover:border-[#EE0000]/50",
        glowHover: "hover:shadow-[#EE0000]/10",
      },
      {
        name: "Python",
        description: "Cloud automation scripts, Boto3 SDK, and REST API migration",
        logo: <PythonLogo className="w-6 h-6" />,
        brandHex: "#3776AB",
        borderHover: "hover:border-[#3776AB]/50",
        glowHover: "hover:shadow-[#3776AB]/10",
      },
      {
        name: "Bash",
        description: "Linux shell scripting, server bootstrapping and cron jobs",
        logo: <BashLogo className="w-6 h-6" />,
        brandHex: "#4EAA25",
        borderHover: "hover:border-[#4EAA25]/50",
        glowHover: "hover:shadow-[#4EAA25]/10",
      },
      {
        name: "Git",
        description: "Version control, branch protection, and 700+ repo migration",
        logo: <GitLogo className="w-6 h-6" />,
        brandHex: "#F03C2E",
        borderHover: "hover:border-[#F03C2E]/50",
        glowHover: "hover:shadow-[#F03C2E]/10",
      },
      {
        name: "Nginx",
        description: "Reverse proxy, SSL/TLS termination, and HTTP rate limiting",
        logo: <NginxLogo className="w-6 h-6" />,
        brandHex: "#009639",
        borderHover: "hover:border-[#009639]/50",
        glowHover: "hover:shadow-[#009639]/10",
      },
    ],
  },
];

export const TechEcosystem: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const filterTabs = ["ALL", "CLOUD", "CONTAINERS & ORCHESTRATION", "CI/CD & AUTOMATION", "OBSERVABILITY", "INFRASTRUCTURE"];

  const displayedGroups =
    activeFilter === "ALL"
      ? categorizedTech
      : categorizedTech.filter((g) => g.category === activeFilter);

  return (
    <section id="expertise" className="relative py-24 md:py-32 bg-[#080B12] border-t border-white/10">
      {/* Background Ambience */}
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div>
          <SectionHeading
            badge="// 06 TECHNICAL STACK & PREREQUISITES"
            title="Technology Stack"
            subtitle="Categorized infrastructure primitives, runtimes, automation toolsets, and observability frameworks. Each tool is chosen for stability and verified in production."
          />

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2">
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 whitespace-nowrap ${
                    isSelected
                      ? "bg-cyan-500/20 border border-cyan-400 text-white shadow-md shadow-cyan-500/10"
                      : "bg-white/[0.02] border border-white/5 text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Categorized Groups */}
          <div className="space-y-12">
            {displayedGroups.map((group) => (
              <div key={group.category} className="space-y-4">
                {/* Category Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-wider font-mono">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {group.items.length} TECHNOLOGIES
                  </span>
                </div>

                {/* Technology Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                  {group.items.map((tech) => (
                    <div
                      key={tech.name}
                      className={`group relative rounded-2xl border border-white/10 bg-[#0C1019] p-5 transition-all duration-200 shadow-lg ${tech.borderHover} ${tech.glowHover} hover:-translate-y-0.5 flex items-start gap-4`}
                    >
                      {/* Logo Container with Subtle Hover Scale */}
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 shrink-0 transition-transform duration-200 group-hover:scale-110">
                        {tech.logo}
                      </div>

                      {/* Card Content */}
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors truncate">
                            {tech.name}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-500 uppercase shrink-0">
                            PROD
                          </span>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-2">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
