"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const CareerTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(siteConfig.careerTimeline.length - 1);

  return (
    <section id="journey" className="relative py-24 md:py-32">
      {/* Background Grid */}
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 06 PROGRESSION TIMELINE"
          title="Career Journey & Skills Evolution"
          subtitle="A five-year progression from physical Linux server administration to production cloud architecture and independent DevOps services."
        />

        {/* Visual Progression Summary Pill Track */}
        <div className="mb-12 p-4 rounded-2xl bg-white/[0.02] border border-white/10 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[700px] text-xs font-mono text-slate-400">
            <span className="text-cyan-400 font-bold">Linux & Infra (2021)</span>
            <span className="text-slate-600">→</span>
            <span className="text-indigo-400 font-bold">Systems Admin (2023)</span>
            <span className="text-slate-600">→</span>
            <span className="text-sky-400 font-bold">DevOps Transition (2025)</span>
            <span className="text-slate-600">→</span>
            <span className="text-amber-400 font-bold">CKA Certified (2026)</span>
            <span className="text-slate-600">→</span>
            <span className="text-purple-400 font-bold">Production DevOps (2026)</span>
            <span className="text-slate-600">→</span>
            <span className="text-emerald-400 font-bold">Independent Practice (NOW)</span>
          </div>
        </div>

        {/* Interactive Vertical Timeline Layout */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-32 space-y-12 pb-4">
          {siteConfig.careerTimeline.map((item, index) => {
            const isSelected = activeStep === index;
            const isNow = item.period === "NOW";
            return (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className="relative pl-6 md:pl-10 group cursor-pointer"
              >
                {/* Timeline Dot Indicator */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isNow
                      ? "bg-emerald-400 border-emerald-300 shadow-lg shadow-emerald-500/50 scale-125"
                      : isSelected
                      ? "bg-cyan-400 border-cyan-300 shadow-md shadow-cyan-500/50 scale-110"
                      : "bg-[#08090C] border-white/30 group-hover:border-cyan-400"
                  }`}
                />

                {/* Left Desktop Period Tag */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isNow ? "text-emerald-400" : "text-slate-400"
                    }`}
                  >
                    {item.period}
                  </span>
                </div>

                {/* Main Node Card */}
                <div
                  className={`rounded-2xl border transition-all duration-300 p-6 ${
                    isSelected
                      ? "bg-[#0E1422] border-cyan-500/40 shadow-xl shadow-cyan-500/5"
                      : "bg-[#0B0F17]/80 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="md:hidden inline-block font-mono text-xs text-cyan-400 font-bold mb-1">
                        {item.period}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {item.role}
                      </h3>
                      <div className="text-sm font-medium text-slate-400">
                        {item.company}
                      </div>
                    </div>

                    <span
                      className={`inline-self-start sm:self-auto px-2.5 py-1 rounded text-xs font-mono font-semibold uppercase ${
                        isNow
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                          : "bg-white/5 text-slate-300 border border-white/10"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.narrative}
                  </p>

                  {/* Focus Area Badges */}
                  <div className="space-y-1.5 pt-3 border-t border-white/5">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      Core Operations & Tooling:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.focus.map((f, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/5"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
