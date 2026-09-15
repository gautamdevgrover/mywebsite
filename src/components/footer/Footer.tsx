"use client";

import React from "react";
import Link from "next/link";
import { siteConfig, isConfiguredUrl, isConfiguredEmail } from "@/config/siteContent";
import { Mail, ArrowUp, Lock, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hasConfiguredLinks =
    isConfiguredUrl(siteConfig.social.github) ||
    isConfiguredUrl(siteConfig.social.linkedin) ||
    isConfiguredUrl(siteConfig.social.instagram) ||
    isConfiguredEmail(siteConfig.contact.email);

  return (
    <footer className="relative bg-[#06080D] border-t border-white/10 text-slate-400 text-xs font-mono py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono text-sm font-bold text-white">
                GD
              </div>
              <span className="text-base sm:text-lg font-bold tracking-wider text-white">
                {siteConfig.business.brandName}
              </span>
            </div>

            <div className="text-slate-300 font-medium text-xs sm:text-sm">
              {siteConfig.business.tagline}
            </div>

            <p className="text-slate-400 font-sans text-xs leading-relaxed max-w-md">
              {siteConfig.business.positioning}. Engineering high-reliability AWS architectures, automated delivery pipelines, zero-loss migrations, and cloud cost efficiency.
            </p>

            {hasConfiguredLinks && (
              <div className="flex items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                {isConfiguredUrl(siteConfig.social.github) && (
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {isConfiguredUrl(siteConfig.social.linkedin) && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {isConfiguredUrl(siteConfig.social.instagram) && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                )}
                {isConfiguredEmail(siteConfig.contact.email) && (
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    aria-label="Send Email"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Links Row: 2-column on mobile, side-by-side on desktop */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 md:col-span-6">
            {/* Navigation Links */}
            <div className="space-y-2.5 sm:space-y-3">
              <span className="text-[11px] sm:text-xs font-semibold text-white uppercase tracking-wider block">
                Pages &amp; Sections
              </span>
              <ul className="space-y-1.5 sm:space-y-2 text-xs">
                <li>
                  <Link href="/" className="hover:text-cyan-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-cyan-400 transition-colors">
                    About Gautam
                  </Link>
                </li>
                <li>
                  <Link href="/about#services" className="hover:text-cyan-400 transition-colors">
                    6 Core Services
                  </Link>
                </li>
                <li>
                  <Link href="/about#proof" className="hover:text-cyan-400 transition-colors">
                    Engineering Proofs
                  </Link>
                </li>
                <li>
                  <Link href="/about#contact" className="hover:text-cyan-400 transition-colors">
                    Start a Project
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Specifications */}
            <div className="space-y-2.5 sm:space-y-3">
              <span className="text-[11px] sm:text-xs font-semibold text-white uppercase tracking-wider block">
                Technical Standards
              </span>
              <ul className="space-y-1.5 sm:space-y-2 text-[11px] text-slate-400">
                <li>AWS VPC / EC2 / ECS / RDS</li>
                <li>CI/CD: Jenkins &amp; Actions</li>
                <li>Docker Containerization</li>
                <li>Prometheus &amp; Grafana</li>
                <li>Python &amp; Boto3 Cloud</li>
                <li className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>CKA Certified</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start">
            <span>© 2026 Gautam Dev. All rights reserved.</span>
            <span>•</span>
            <Link
              href="/admin/login"
              className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-400 transition-colors"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Portal</span>
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
