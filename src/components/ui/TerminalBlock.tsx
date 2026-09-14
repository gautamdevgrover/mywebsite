"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";

interface TerminalBlockProps {
  title?: string;
  lines: {
    type: "cmd" | "info" | "success" | "warning" | "status";
    text: string;
  }[];
  className?: string;
}

export const TerminalBlock: React.FC<TerminalBlockProps> = ({
  title = "deploy.sh — production",
  lines,
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const content = lines.map((l) => (l.type === "cmd" ? `$ ${l.text}` : l.text)).join("\n");
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`rounded-xl border border-white/10 bg-[#0A0D14] shadow-2xl overflow-hidden font-mono text-xs md:text-sm ${className}`}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0F1420] border-b border-white/5 select-none">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <div className="flex items-center gap-1.5 ml-2 text-slate-400 text-xs">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>{title}</span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          aria-label="Copy terminal output"
          className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 space-y-2 overflow-x-auto text-slate-300">
        {lines.map((line, index) => {
          if (line.type === "cmd") {
            return (
              <div key={index} className="flex items-start gap-2 text-cyan-300 font-semibold">
                <span className="text-cyan-500 select-none">$</span>
                <span>{line.text}</span>
              </div>
            );
          }
          if (line.type === "success") {
            return (
              <div key={index} className="flex items-center gap-2 text-emerald-400 pl-4">
                <span className="text-emerald-500 select-none">✓</span>
                <span>{line.text}</span>
              </div>
            );
          }
          if (line.type === "warning") {
            return (
              <div key={index} className="flex items-center gap-2 text-amber-300 pl-4">
                <span className="text-amber-500 select-none">!</span>
                <span>{line.text}</span>
              </div>
            );
          }
          if (line.type === "status") {
            return (
              <div
                key={index}
                className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs"
              >
                <span className="text-slate-400 font-mono">SYSTEM_STATUS</span>
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>{line.text}</span>
                </div>
              </div>
            );
          }
          return (
            <div key={index} className="text-slate-400 pl-4">
              {line.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};
