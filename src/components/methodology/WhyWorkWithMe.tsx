"use client";

import React from "react";
import { siteConfig } from "@/config/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ShieldCheck,
  Zap,
  TrendingDown,
  Wrench,
  Server,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

export const WhyWorkWithMe: React.FC = () => {
  const { whyWorkWithMe } = siteConfig;

  const getStrengthIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Zap className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <TrendingDown className="w-5 h-5 text-emerald-400" />;
      case 3:
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 4:
        return <Server className="w-5 h-5 text-sky-400" />;
      case 5:
        return <BarChart3 className="w-5 h-5 text-purple-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#080B12] border-t border-white/10">
      {/* Background Ambience */}
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 09 VALUE PROPOSITION"
          title="Why Work With Gautam"
          subtitle="No marketing slogans, no theoretical consulting decks. Just engineering capability built on years of hands-on Linux administration and production cloud operations."
        />

        {/* 6 Real Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyWorkWithMe.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-[#0C1019] p-6 shadow-xl hover:border-cyan-500/30 transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    {getStrengthIcon(idx)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    ADVANTAGE 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-cyan-400 mt-1 mb-3">
                  {item.tagline}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified in production</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
