"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, ShieldCheck, Check, Copy, Award } from "lucide-react";
import { KubernetesLogo } from "@/components/icons/TechLogos";
import { siteConfig, isConfiguredUrl } from "@/config/siteContent";

export const CkaCertificationCard: React.FC = () => {
  const { cka } = siteConfig;
  const [certImg, setCertImg] = useState(cka.certificateImage);
  const [copiedId, setCopiedId] = useState(false);

  const copyCertId = () => {
    navigator.clipboard.writeText(cka.certificateId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const hasCredlyBadge = isConfiguredUrl(cka.credlyBadgeUrl);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0C111D] p-6 sm:p-7 shadow-xl space-y-6">
      {/* Header with CNCF / Linux Foundation Badging */}
      <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#326CE5]/10 border border-[#326CE5]/30 flex items-center justify-center text-[#326CE5] flex-shrink-0">
            <KubernetesLogo className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                OFFICIAL CREDENTIAL
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                ACTIVE
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-0.5">
              {cka.title}
            </h3>
            <span className="text-xs font-mono text-slate-400">
              {cka.abbreviation} &middot; {cka.issuer}
            </span>
          </div>
        </div>
      </div>

      {/* Certificate Preview Canvas with Fullscreen View */}
      <a
        href={certImg}
        target="_blank"
        rel="noopener noreferrer"
        title="Click to view full-resolution certificate"
        className="block relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#070A10] border border-white/10 hover:border-cyan-500/40 transition-all group cursor-zoom-in"
      >
        <Image
          src={certImg}
          alt="Certified Kubernetes Administrator (CKA) Certificate - Gautam Dev"
          fill
          unoptimized
          priority
          sizes="(max-width: 768px) 100vw, 550px"
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.01]"
          onError={() => {
            if (certImg === cka.certificateImage) {
              setCertImg("/images/cka-certificate.png");
            } else if (certImg !== cka.certificatePlaceholder) {
              setCertImg(cka.certificatePlaceholder);
            }
          }}
        />
        <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
          Click to expand ↗
        </div>
      </a>

      {/* Verification Parameters: Certificate ID & Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs">
        <div>
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
            Certificate ID
          </span>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="font-bold text-white tracking-wide truncate">
              {cka.certificateId}
            </span>
            <button
              onClick={copyCertId}
              title="Copy Certificate ID"
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              {copiedId ? (
                <Check className="w-3 h-3 text-emerald-400" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </button>
          </div>
        </div>

        <div>
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
            Verification Last Name
          </span>
          <span className="font-bold text-white mt-0.5 block">
            {cka.lastName}
          </span>
        </div>

        <div className="sm:col-span-2 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
          <span>Earned: {cka.achievementDate}</span>
          <span>Valid Through: {cka.expirationDate}</span>
        </div>
      </div>

      {/* Verification Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
        <a
          href={cka.linuxFoundationVerificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Verify CKA Certification</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        {hasCredlyBadge && (
          <a
            href={cka.credlyBadgeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
          >
            <span>View CKA Badge</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      <div className="text-[11px] font-mono text-slate-500 text-center">
        Official Linux Foundation Verification Portal &middot; Opens in a new tab
      </div>
    </div>
  );
};
