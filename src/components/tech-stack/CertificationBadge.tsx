"use client";

import React from "react";
import { Award, CheckCircle, Shield, Info } from "lucide-react";

export const CertificationBadge: React.FC = () => {
  return (
    <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-[#121018] to-[#0A0D15] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Award className="w-3.5 h-3.5" />
            <span>Verifiable Industry Credential</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Certified Kubernetes Administrator (CKA)
          </h3>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              The Linux Foundation & CNCF
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Issued: April 2026</span>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400 font-semibold">Performance-Based Hands-on Exam</span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            Demonstrates verified competency in core Kubernetes primitives, cluster architecture installation, networking, storage volume lifecycle, and deep cluster troubleshooting under timed exam constraints.
          </p>

          {/* Honest production note */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5 text-xs text-slate-400">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>
              <strong className="text-white font-mono">Production Transparency:</strong> While CKA certified, Gautam&apos;s primary daily production environments at MetaDesign Solutions are anchored around AWS EC2, ECS, Docker, and Nginx.
            </span>
          </div>
        </div>

        {/* Certificate Emblem Visual */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/40 border border-amber-500/20 text-center space-y-3">
          <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-xl shadow-amber-500/10">
            <Shield className="w-10 h-10" />
          </div>
          <div>
            <div className="text-xl font-black font-mono text-white tracking-wider">
              CKA
            </div>
            <div className="text-[11px] font-mono text-amber-300 uppercase tracking-widest mt-0.5">
              LINUX FOUNDATION
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-500">
            APRIL 2026 // PASS
          </div>
        </div>
      </div>
    </div>
  );
};
