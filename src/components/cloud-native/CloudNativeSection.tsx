"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, Info } from "lucide-react";
import {
  KubernetesLogo,
  DockerLogo,
  HelmLogo,
  LinuxLogo,
  JenkinsLogo,
  GithubActionsLogo,
} from "@/components/icons/TechLogos";

export const CloudNativeSection: React.FC = () => {
  const supportingTech = [
    {
      name: "Kubernetes",
      role: "Orchestration & Workloads",
      logo: <KubernetesLogo className="w-6 h-6" />,
      color: "border-[#326CE5]/40 hover:bg-[#326CE5]/5",
      detail: "Pods, Deployments, Services, Ingress, RBAC, ConfigMaps & Secrets",
    },
    {
      name: "Docker",
      role: "Container Runtimes",
      logo: <DockerLogo className="w-6 h-6" />,
      color: "border-[#2496ED]/40 hover:bg-[#2496ED]/5",
      detail: "Multi-stage Dockerfiles, image minimization & security hardening",
    },
    {
      name: "Helm",
      role: "Package Management",
      logo: <HelmLogo className="w-6 h-6" />,
      color: "border-[#38BDF8]/40 hover:bg-[#38BDF8]/5",
      detail: "Chart templates, release lifecycles, and environment values overrides",
    },
    {
      name: "Linux",
      role: "OS Fundamentals & Kernels",
      logo: <LinuxLogo className="w-6 h-6" />,
      color: "border-[#FCC624]/40 hover:bg-[#FCC624]/5",
      detail: "cgroups, namespaces, systemd services, IPtables, and network sockets",
    },
    {
      name: "CI/CD Pipelines",
      role: "Automated Workflows",
      logo: (
        <div className="flex items-center gap-1.5">
          <JenkinsLogo className="w-5 h-5" />
          <GithubActionsLogo className="w-5 h-5" />
        </div>
      ),
      color: "border-[#2088FF]/40 hover:bg-[#2088FF]/5",
      detail: "Automated container builds, registry publishing, and delivery triggers",
    },
  ];

  return (
    <section id="cloud-native" className="relative py-24 md:py-32 bg-[#0A0D15] border-t border-white/10">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#326CE5]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <SectionHeading
          badge="// 05 CLOUD NATIVE FOUNDATIONS"
          title="Cloud Native & Kubernetes"
          subtitle="Rigorous container orchestration competencies certified by The Linux Foundation. Designed for scalable, fault-tolerant cloud-native architectures."
        />

        {/* Primary CKA Feature Banner */}
        <div className="rounded-3xl border border-[#326CE5]/30 bg-gradient-to-br from-[#0D1526] via-[#0B0F19] to-[#070A10] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle spinning wheel watermark in background */}
          <div className="absolute -top-16 -right-16 opacity-5 pointer-events-none">
            <KubernetesLogo className="w-80 h-80" monochrome />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: CKA Information */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#326CE5]/10 border border-[#326CE5]/30 text-sky-400">
                <Award className="w-3.5 h-3.5 text-[#326CE5]" />
                <span>The Linux Foundation & CNCF</span>
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <div className="p-3 rounded-2xl bg-[#326CE5]/15 border border-[#326CE5]/30 shadow-lg shadow-[#326CE5]/10">
                  <KubernetesLogo className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Certified Kubernetes Administrator (CKA)
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mt-1">
                    <span className="text-emerald-400 font-semibold">● ACTIVE CREDENTIAL</span>
                    <span>•</span>
                    <span>Achieved: April 2026</span>
                    <span>•</span>
                    <span>Performance-Based Timed Exam</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                Validates hands-on operational competence across Kubernetes cluster architecture, core workloads & scheduling, networking primitives, persistent storage volumes, security policies, and deep cluster troubleshooting under production-like scenarios.
              </p>

              {/* Crucial production transparency callout */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3 text-xs text-slate-400">
                <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-white font-mono font-bold">
                    PRODUCTION TRANSPARENCY NOTICE
                  </span>
                  <p className="leading-relaxed font-sans">
                    While CKA certified in Kubernetes administration, Gautam&apos;s daily production workloads at MetaDesign Solutions are primarily anchored around <strong>AWS EC2, AWS ECS, Docker, and Nginx</strong>. Kubernetes knowledge provides strong architectural mastery for modern containerized ecosystems without making unverified claims about current production environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Official Emblem Visual */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-black/40 border border-[#326CE5]/20 text-center space-y-4">
              <div className="w-24 h-24 rounded-3xl bg-[#326CE5]/10 border border-[#326CE5]/30 flex items-center justify-center text-[#326CE5] shadow-2xl shadow-[#326CE5]/20">
                <KubernetesLogo className="w-14 h-14" />
              </div>
              <div>
                <div className="text-2xl font-black font-mono text-white tracking-wider">
                  CKA
                </div>
                <div className="text-xs font-mono text-sky-400 uppercase tracking-widest mt-0.5">
                  THE LINUX FOUNDATION
                </div>
              </div>
              <div className="text-[11px] font-mono text-slate-400 border-t border-white/5 pt-3 w-full">
                CERTIFIED KUBERNETES ADMINISTRATOR
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Technologies Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase tracking-wider">
            <span>Supporting Cloud-Native Tooling</span>
            <span className="text-slate-500">Integrated Container Primitives</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {supportingTech.map((item) => (
              <div
                key={item.name}
                className={`rounded-2xl border bg-[#0C1019] p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 ${item.color} flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5 group-hover:scale-110 transition-transform">
                      {item.logo}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      CORE
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight group-hover:text-white">
                    {item.name}
                  </h4>
                  <div className="text-xs font-mono text-cyan-400 mb-2">
                    {item.role}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                  <span>VERIFIED</span>
                  <span className="text-emerald-400 font-semibold">● READY</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
