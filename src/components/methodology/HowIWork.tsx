"use client";

import React from "react";
import { siteConfig } from "@/config/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export const HowIWork: React.FC = () => {
  const { methodology } = siteConfig;

  return (
    <section id="process" className="relative py-24 md:py-32 border-t border-white/10">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 08 METHODOLOGY & EXECUTION"
          title="How I Approach Infrastructure"
          subtitle="A disciplined 4-stage engineering process designed to eliminate guesswork, prevent unexpected production downtime, and ship clean solutions."
        />

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-white/10 bg-[#0C1019] p-6 shadow-xl flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div>
                {/* Step Number & Connector */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-black text-slate-600 group-hover:text-cyan-400 transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 uppercase">
                    PHASE {step.step}
                  </span>
                </div>

                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                  {step.subtitle}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-sans">
                  {step.description}
                </p>
              </div>

              {/* Tangible Deliverable Footer */}
              <div className="pt-4 border-t border-white/5 space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                  Deliverable:
                </span>
                <div className="flex items-start gap-1.5 text-xs text-slate-300 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
