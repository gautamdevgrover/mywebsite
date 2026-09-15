"use client";

import React, { useState } from "react";
import { ShieldCheck, ChevronUp, ChevronDown, Info } from "lucide-react";

export const FloatingTechStatus: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      aria-label="Infrastructure Status Widget"
      className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-3 sm:bottom-4 sm:right-4 z-40 max-w-xs transition-all duration-300"
    >
      {/* Mobile-only Collapsed Mini-Pill (<sm) */}
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          aria-label="View Infrastructure Status"
          className="sm:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#0B0F17]/95 border border-emerald-500/30 shadow-xl shadow-black/60 backdrop-blur-md text-[10px] font-mono text-slate-300 hover:text-white transition-all cursor-pointer active:scale-95"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-emerald-400 font-bold tracking-tight">ONLINE</span>
          <ChevronUp className="w-3 h-3 text-slate-400 shrink-0" />
        </button>
      )}

      {/* Desktop Card (or Mobile when Expanded) */}
      <div
        className={`${
          expanded ? "block" : "hidden sm:block"
        } rounded-xl border border-white/10 bg-[#0B0F17]/95 backdrop-blur-md shadow-2xl p-3 text-xs font-mono text-slate-300 w-72 sm:w-auto max-w-[calc(100vw-1.5rem)]`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-white tracking-wider text-[11px] whitespace-nowrap">
                GAUTAM DEV
              </span>
              <span className="text-[10px] text-slate-400 whitespace-nowrap">
                Infrastructure Status
              </span>
            </div>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? "Collapse status widget" : "Expand status widget"}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/5 transition-colors cursor-pointer"
          >
            {expanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Collapsible Details */}
        {expanded && (
          <div className="mt-3 pt-3 border-t border-white/5 space-y-2">
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="flex items-center justify-between bg-white/[0.02] p-1.5 rounded border border-white/5">
                <span className="text-slate-400">AWS</span>
                <span className="text-emerald-400 font-bold">● ONLINE</span>
              </div>
              <div className="flex items-center justify-between bg-white/[0.02] p-1.5 rounded border border-white/5">
                <span className="text-slate-400">CI/CD</span>
                <span className="text-emerald-400 font-bold">● READY</span>
              </div>
              <div className="flex items-center justify-between bg-white/[0.02] p-1.5 rounded border border-white/5">
                <span className="text-slate-400">Docker</span>
                <span className="text-emerald-400 font-bold">● PASS</span>
              </div>
              <div className="flex items-center justify-between bg-white/[0.02] p-1.5 rounded border border-white/5">
                <span className="text-slate-400">Monitoring</span>
                <span className="text-emerald-400 font-bold">● ACTIVE</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-emerald-400 font-semibold pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                ALL SYSTEMS OPERATIONAL
              </span>
            </div>

            <div className="text-[9px] text-slate-500 italic pt-1 border-t border-white/5 flex items-center gap-1">
              <Info className="w-3 h-3 text-slate-500 shrink-0" />
              <span>Branding status element (not public 24/7 SaaS SLA)</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
