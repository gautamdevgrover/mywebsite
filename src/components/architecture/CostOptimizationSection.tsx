"use client";

import React from "react";
import { siteConfig } from "@/config/siteContent";
import { Trash2, TrendingDown, ArrowRight } from "lucide-react";
import Link from "next/link";

export const CostOptimizationSection: React.FC = () => {
  const { costOptimization } = siteConfig;

  return (
    <section id="cost-optimization" className="relative py-20 md:py-28 bg-[#0A0D15] border-t border-white/10">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border border-emerald-500/20 bg-emerald-500/5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{costOptimization.label}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {costOptimization.heading}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {costOptimization.subheading} Many cloud environments accumulate zombie endpoints, abandoned snapshots, and uncurated storage tiers that silently inflate recurring monthly invoices.
            </p>

            {/* Savings Callout Box */}
            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                  Verified Monthly Savings
                </div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-white">
                  {costOptimization.monthlySaved}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {costOptimization.annualizedSaved} annualized recurring reduction
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <TrendingDown className="w-8 h-8" />
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition-all"
              >
                <span>REQUEST AN AWS COST AUDIT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Animated Cleanup Cards */}
          <div className="lg:col-span-6 space-y-4">
            {costOptimization.items.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0E131F] p-5 sm:p-6 shadow-xl hover:border-emerald-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <Trash2 className="w-4 h-4 text-rose-400" />
                    {item.title}
                  </span>
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {item.status}
                  </span>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {item.detail}
                </p>

                <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-3 border-t border-white/5">
                  <span className="text-emerald-400 font-medium">✓ {item.impact}</span>
                  <span>ZERO IMPACT ON UPTIME</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
