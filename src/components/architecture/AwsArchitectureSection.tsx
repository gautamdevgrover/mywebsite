"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Globe, Info, Lock, ArrowDown } from "lucide-react";

export const AwsArchitectureSection: React.FC = () => {
  const { awsArchitecture } = siteConfig;
  const [activeTier, setActiveTier] = useState<number>(0);

  return (
    <section id="architecture" className="relative py-24 md:py-32">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 04 SYSTEMS ARCHITECTURE"
          title={awsArchitecture.heading}
          subtitle={awsArchitecture.subheading}
        />

        {/* Single-AZ Scope Notice Pill */}
        <div className="mb-8 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 flex items-start gap-3 text-xs text-slate-300 font-mono">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-white font-bold tracking-wide">
              AUTHENTIC PRODUCTION SPECIFICATION: SINGLE-AVAILABILITY ZONE
            </span>
            <p className="text-slate-400 leading-relaxed font-sans text-xs">
              {awsArchitecture.singleAzNotice} Configured for tight security group isolation and controlled compute scaling without incurring unnecessary multi-region cloud overhead.
            </p>
          </div>
        </div>

        {/* Interactive 3-Tier Architecture Container */}
        <div className="rounded-3xl border border-white/10 bg-[#0C111C] p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/5 flex-wrap gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-white font-bold">AWS VPC:</span>
              <span>10.0.0.0/16 NETWORK TOPOLOGY</span>
            </div>
            <span className="text-cyan-400 font-medium">SINGLE-AZ // ISOLATED SUBNETS</span>
          </div>

          {/* 4 Architectural Layers / Tiers */}
          <div className="space-y-4">
            {awsArchitecture.tiers.map((tier, index) => {
              const isSelected = activeTier === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveTier(index)}
                  className={`rounded-2xl border transition-all duration-300 p-5 cursor-pointer ${
                    tier.subnetType === "public"
                      ? isSelected
                        ? "bg-sky-950/20 border-sky-400/50 shadow-lg shadow-sky-500/5"
                        : "bg-[#0E1524]/60 border-sky-500/20 hover:border-sky-500/40"
                      : isSelected
                      ? "bg-indigo-950/20 border-indigo-400/50 shadow-lg shadow-indigo-500/5"
                      : "bg-[#0F1422]/60 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      {tier.subnetType === "public" ? (
                        <Globe className="w-4 h-4 text-sky-400" />
                      ) : (
                        <Lock className="w-4 h-4 text-indigo-400" />
                      )}
                      <span className="font-bold text-sm sm:text-base text-white tracking-tight">
                        {tier.name}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2.5 py-0.5 rounded uppercase font-semibold ${
                        tier.subnetType === "public"
                          ? "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                          : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                      }`}
                    >
                      {tier.subnetType === "public" ? "Internet Facing" : "Private Isolated"}
                    </span>
                  </div>

                  {/* Components inside this Tier */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tier.components.map((comp, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-4 rounded-xl bg-black/20 border border-white/5 space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-200">
                            {comp.name}
                          </span>
                          {comp.badge && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10">
                              {comp.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                          {comp.details}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Visual connector to next tier */}
                  {index < awsArchitecture.tiers.length - 1 && (
                    <div className="flex justify-center pt-3 -mb-1 text-slate-600">
                      <ArrowDown className="w-4 h-4 text-slate-500 animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Architecture Explanation */}
          <div className="pt-4 border-t border-white/5 text-xs text-slate-400 font-mono flex items-center justify-between flex-wrap gap-2">
            <span>
              SECURITY GROUPS: INGRESS STRICTLY ALLOWED FROM PRECEDING TIER ONLY
            </span>
            <span className="text-emerald-400 font-semibold">
              ● PROD-VERIFIED TOPOLOGY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
