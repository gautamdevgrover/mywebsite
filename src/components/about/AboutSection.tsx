"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CkaCertificationCard } from "./CkaCertificationCard";

export const AboutSection: React.FC = () => {
  const { about } = siteConfig;
  const [aboutImg, setAboutImg] = useState("/images/gautam-about.jpg");

  return (
    <section id="about" className="relative py-20 md:py-32 bg-[#080B12] border-t border-white/10">
      {/* Background Ambience */}
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Photo Frame & CKA Credential Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative rounded-2xl border border-white/15 bg-[#0D121D] p-2 shadow-2xl overflow-hidden group">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#0A0D15]">
                <Image
                  src={aboutImg}
                  alt="Gautam Dev - Cloud & DevOps Engineer"
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                  onError={() => {
                    if (aboutImg !== "/images/gautam-about-placeholder.svg") {
                      setAboutImg("/images/gautam-about-placeholder.svg");
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C13] via-transparent to-transparent opacity-80 pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#080B12]/85 backdrop-blur-md border border-white/10 text-xs font-mono">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="font-bold text-white">Gautam Dev</span>
                    <span className="text-cyan-400">FOUNDER & ENGINEER</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official CKA Certification Card with Linux Foundation Verification */}
            <CkaCertificationCard />
          </motion.div>

          {/* Right Column: Founder Narrative & Core Convictions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <SectionHeading
              badge="// FOUNDER STORY"
              title={about.heading}
              subtitle="DevOps & Cloud Engineer building reliable production systems and automated delivery pipelines."
            />

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-base md:text-lg text-slate-300 leading-relaxed font-normal">
              {about.story.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Working Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {about.principles.map((prin, pIdx) => (
                <motion.div
                  key={pIdx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: pIdx * 0.08 }}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5"
                >
                  <div className="text-sm font-bold text-white font-mono">
                    {prin.title}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {prin.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/20 transition-all"
              >
                <span>LET&apos;S DISCUSS YOUR INFRASTRUCTURE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
