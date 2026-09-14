"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CheckCircle2,
  Terminal,
} from "lucide-react";
import {
  GitlabLogo,
  GitLogo,
  PythonLogo,
  S3Logo,
  JenkinsLogo,
  DockerLogo,
  EcrLogo,
  PrometheusLogo,
  GrafanaLogo,
  AlertmanagerLogo,
  BlackboxExporterLogo,
  getTechLogo,
} from "@/components/icons/TechLogos";
import { GithubIcon } from "@/components/ui/SocialIcons";

export const CaseStudiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("repo-migration");

  return (
    <section id="work" className="relative py-24 md:py-32">
      {/* Ambient background light */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 03 SELECTED ENGINEERING WORK"
          title="Production Engineering Case Studies"
          subtitle="Real infrastructure tasks and measurable engineering achievements executed in production environments. No mock examples or hypothetical architectures."
        />

        {/* Tab Navigation for Case Studies */}
        <div className="flex flex-wrap gap-2 pb-8 mb-8 border-b border-white/10">
          {siteConfig.caseStudies.map((study) => {
            const isActive = activeTab === study.id;
            return (
              <button
                key={study.id}
                onClick={() => setActiveTab(study.id)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-cyan-500/15 border border-cyan-400 text-white shadow-lg shadow-cyan-500/10"
                    : "bg-white/[0.02] border border-white/5 text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{study.title}</span>
              </button>
            );
          })}
        </div>

        {/* Case Study Detail Container */}
        {siteConfig.caseStudies.map((study) => {
          if (study.id !== activeTab) return null;

          return (
            <div
              key={study.id}
              className="rounded-3xl border border-white/10 bg-[#0C111D] p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8 animate-in fade-in duration-300"
            >
              {/* Top Banner: Tag & Headline */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 font-medium">
                    <span>{study.tag}</span>
                    <span>•</span>
                    <span className="text-slate-400">PROD_VERIFIED</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    {study.headline}
                  </h3>
                </div>

                {/* Primary Visual Metric Callout */}
                <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col items-start lg:items-end justify-center min-w-[220px]">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono text-cyan-400 tracking-tight">
                    {study.impactMetric.primary}
                  </span>
                  <span className="text-sm font-semibold text-white mt-1">
                    {study.impactMetric.label}
                  </span>
                  {study.impactMetric.sub && (
                    <span className="text-xs font-mono text-slate-400 mt-0.5">
                      {study.impactMetric.sub}
                    </span>
                  )}
                </div>
              </div>

              {/* Case-Specific Bespoke Visual Diagram */}
              {study.id === "repo-migration" && (
                <div className="rounded-2xl bg-[#070A10] border border-white/10 p-6 md:p-8">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6 flex items-center justify-between">
                    <span>AUTOMATED GIT MIRROR MIGRATION TOPOLOGY</span>
                    <span className="text-cyan-400 font-semibold">100% GIT HISTORY PRESERVED</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    {/* Source */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center space-y-2">
                      <div className="w-10 h-10 mx-auto rounded-lg bg-[#FC6D26]/10 border border-[#FC6D26]/20 flex items-center justify-center text-[#FC6D26]">
                        <GitlabLogo className="w-6 h-6" />
                      </div>
                      <div className="text-sm font-bold text-white">GitLab Server</div>
                      <div className="text-[11px] font-mono text-slate-400">
                        700+ Repositories
                      </div>
                      <div className="text-[10px] text-slate-500">Commits, branches, tags</div>
                    </div>

                    {/* Automation Engine */}
                    <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-2 relative">
                      <div className="w-10 h-10 mx-auto rounded-lg bg-[#3776AB]/20 border border-[#3776AB]/40 flex items-center justify-center text-cyan-300">
                        <PythonLogo className="w-6 h-6" />
                      </div>
                      <div className="text-sm font-bold text-white">Python API Script</div>
                      <div className="text-[11px] font-mono text-cyan-300">
                        Batch Orchestration
                      </div>
                      <div className="text-[10px] text-slate-400">Rate-limit backoff & auth</div>
                    </div>

                    {/* Git Mirror Step */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center space-y-2">
                      <div className="w-10 h-10 mx-auto rounded-lg bg-[#F05032]/10 border border-[#F05032]/20 flex items-center justify-center text-[#F05032]">
                        <GitLogo className="w-6 h-6" />
                      </div>
                      <div className="text-sm font-bold text-white">Git Mirror Clone</div>
                      <div className="text-[11px] font-mono text-slate-400">
                        git push --mirror
                      </div>
                      <div className="text-[10px] text-slate-500">Zero object or ref loss</div>
                    </div>

                    {/* Destination */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center space-y-2">
                      <div className="w-10 h-10 mx-auto rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
                        <GithubIcon className="w-6 h-6" />
                      </div>
                      <div className="text-sm font-bold text-white">GitHub Enterprise</div>
                      <div className="text-[11px] font-mono text-slate-400">
                        Target Organization
                      </div>
                      <div className="text-[10px] text-emerald-400">● 700+ Repos Created</div>
                    </div>
                  </div>
                </div>
              )}

              {study.id === "s3-optimization" && (
                <div className="rounded-2xl bg-[#070A10] border border-white/10 p-6 md:p-8">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6 flex items-center justify-between">
                    <span>S3 BUCKET OBJECT-VERSION CLEANUP BREAKDOWN</span>
                    <span className="text-emerald-400 font-semibold">76% STORAGE RECLAIMED</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Visual Before / After Comparison */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1.5">
                          <span className="text-rose-400 font-semibold">BEFORE CLEANUP</span>
                          <span className="text-rose-400 font-bold">1.7 TB (100%)</span>
                        </div>
                        <div className="w-full h-8 bg-rose-950/40 border border-rose-800/40 rounded-lg overflow-hidden relative">
                          <div className="h-full bg-rose-500/60 w-full flex items-center px-3 text-xs font-mono text-white font-bold">
                            Ghost Object Versions & Deleted Files Accumulating Over Years
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1.5">
                          <span className="text-emerald-400 font-semibold">AFTER BOTO3 AUTOMATION</span>
                          <span className="text-emerald-400 font-bold">400 MB (0.02% of previous)</span>
                        </div>
                        <div className="w-full h-8 bg-emerald-950/40 border border-emerald-800/40 rounded-lg overflow-hidden relative">
                          <div className="h-full bg-emerald-500/80 w-[24%] flex items-center px-3 text-xs font-mono text-white font-bold">
                            Clean Active Data
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Automation Logic Summary */}
                    <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 font-mono text-xs space-y-2.5">
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold text-[11px] uppercase">
                        <S3Logo className="w-4 h-4" />
                        <span>Script Execution Specifications:</span>
                      </div>
                      <div className="text-slate-300 flex items-center gap-1.5">
                        <PythonLogo className="w-3.5 h-3.5 shrink-0" />
                        <span>AWS SDK: <strong className="text-white">Python 3 + Boto3 S3 Client</strong></span>
                      </div>
                      <div className="text-slate-300">
                        • Filter Policy: <span className="text-amber-300">Non-current versions older than 180 days</span>
                      </div>
                      <div className="text-slate-300">
                        • Safety Guard: <span className="text-emerald-400">Current version markers protected 100%</span>
                      </div>
                      <div className="text-slate-300">
                        • Outcome: <span className="text-cyan-300">Permanently eliminated runaway storage billing</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {study.id === "cicd-pipeline" && (
                <div className="rounded-2xl bg-[#070A10] border border-white/10 p-6 md:p-8">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6 flex items-center justify-between">
                    <span>JENKINS & GITHUB ACTIONS DELIVERY TOPOLOGY</span>
                    <span className="text-emerald-400 font-semibold">AUTOMATED HEALTH VALIDATION</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                      <div className="w-7 h-7 mx-auto rounded-lg bg-white/5 flex items-center justify-center text-white">
                        <GithubIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 block">01 TRIGGER</span>
                      <span className="text-xs font-bold text-white block">GitHub Push</span>
                      <span className="text-[10px] text-slate-400">Webhook Event</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                      <div className="w-7 h-7 mx-auto rounded-lg bg-[#D24939]/10 flex items-center justify-center">
                        <JenkinsLogo className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 block">02 BUILD</span>
                      <span className="text-xs font-bold text-white block">Jenkins CI</span>
                      <span className="text-[10px] text-slate-400">Docker Image Build</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                      <div className="w-7 h-7 mx-auto rounded-lg bg-[#FF9900]/10 flex items-center justify-center">
                        <EcrLogo className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 block">03 REGISTRY</span>
                      <span className="text-xs font-bold text-white block">Amazon ECR</span>
                      <span className="text-[10px] text-slate-400">Tagged & Pushed</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                      <div className="w-7 h-7 mx-auto rounded-lg bg-[#2496ED]/10 flex items-center justify-center">
                        <DockerLogo className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 block">04 DEPLOY</span>
                      <span className="text-xs font-bold text-white block">Target Host</span>
                      <span className="text-[10px] text-slate-400">Docker Pull & Run</span>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1.5">
                      <div className="w-7 h-7 mx-auto rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 block">05 VERIFY</span>
                      <span className="text-xs font-bold text-white block">Health Check</span>
                      <span className="text-[10px] text-emerald-300">Localhost HTTP 200</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                      <div className="w-7 h-7 mx-auto rounded-lg bg-white/5 flex items-center justify-center text-cyan-400">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 block">06 NOTIFY</span>
                      <span className="text-xs font-bold text-white block">Email Alert</span>
                      <span className="text-[10px] text-slate-400">Pipeline Status</span>
                    </div>
                  </div>
                </div>
              )}

              {study.id === "api-monitoring" && (
                <div className="rounded-2xl bg-[#070A10] border border-white/10 p-6 md:p-8">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6 flex items-center justify-between">
                    <span>PROMETHEUS + GRAFANA + BLACKBOX + ALERTMANAGER STACK</span>
                    <span className="text-rose-400 font-semibold">1-MINUTE OUTAGE DISPATCH</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-sm text-slate-200">
                        <BlackboxExporterLogo className="w-5 h-5" />
                        <span>Blackbox Exporter</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-snug">
                        Synthetic probes querying live APIs, response latency, and HTTP 200 codes.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-sm text-slate-200">
                        <PrometheusLogo className="w-5 h-5" />
                        <span>Prometheus</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-snug">
                        Time-series metrics engine scraping exporter targets every 15 seconds.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-sm text-slate-200">
                        <GrafanaLogo className="w-5 h-5" />
                        <span>Grafana</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-snug">
                        Visual dashboards plotting uptime percentages, latency spikes, and error rates.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-sm text-rose-300">
                        <AlertmanagerLogo className="w-5 h-5" />
                        <span>Alertmanager</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-snug">
                        Triggers priority email alert if an endpoint fails checks for approximately 1 minute.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom: Technical Implementation Highlights & Tools Used */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                <div className="lg:col-span-8 space-y-4">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Technical Implementation Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {study.technicalHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-4 rounded-2xl bg-white/[0.02] border border-white/10 p-5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Tooling & Tech Employed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.tools.map((tool) => {
                      const logo = getTechLogo(tool, "w-3.5 h-3.5 shrink-0");
                      return (
                        <span
                          key={tool}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono text-xs text-slate-200 hover:border-cyan-500/30 transition-colors"
                        >
                          {logo && <span>{logo}</span>}
                          <span>{tool}</span>
                        </span>
                      );
                    })}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                    Implemented directly in live production environment with full monitoring and documentation.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
