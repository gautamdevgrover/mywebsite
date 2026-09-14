"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Cloud,
  GitBranch,
  Server,
  DollarSign,
  ArrowRightLeft,
  Activity,
  Database,
  Terminal,
  ArrowUpRight,
  Check,
} from "lucide-react";
import Link from "next/link";
import { getTechLogo } from "@/components/icons/TechLogos";

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Cloud":
        return <Cloud className="w-5 h-5 text-cyan-400" />;
      case "GitBranch":
        return <GitBranch className="w-5 h-5 text-indigo-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-sky-400" />;
      case "DollarSign":
        return <DollarSign className="w-5 h-5 text-emerald-400" />;
      case "ArrowRightLeft":
        return <ArrowRightLeft className="w-5 h-5 text-amber-400" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-rose-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-purple-400" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      default:
        return <Cloud className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 01 SERVICES & CAPABILITIES"
          title="What I Can Build, Fix & Automate"
          subtitle="Practical DevOps and cloud engineering for applications that need to ship reliably. No unnecessary layers, just production systems that work."
        />

        {/* Services Grid (8 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service) => {
            const isHovered = activeService === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                className={`relative rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between ${
                  isHovered
                    ? "bg-[#111726] border-cyan-500/40 shadow-xl shadow-cyan-500/5 -translate-y-1.5"
                    : "bg-[#0C1017]/80 border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-500">
                      SERVICE {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white tracking-tight mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Practical Deliverables List */}
                  <div className="mb-6 space-y-2 border-t border-white/5 pt-4">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                      Key Deliverables
                    </span>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Technology Pills */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.technologies.slice(0, 5).map((tech) => {
                        const logo = getTechLogo(tech, "w-3 h-3 shrink-0");
                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-white/[0.03] text-slate-300 border border-white/5 hover:border-cyan-500/30 transition-colors"
                          >
                            {logo && <span>{logo}</span>}
                            <span>{tech}</span>
                          </span>
                        );
                      })}
                      {service.technologies.length > 5 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
                          +{service.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors font-medium group"
                    >
                      <span>Inquire about this</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
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
