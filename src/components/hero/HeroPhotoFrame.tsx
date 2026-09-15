"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { KubernetesLogo } from "@/components/icons/TechLogos";

interface HeroPhotoFrameProps {
  photoSrc?: string;
  fallbackSrc?: string;
  alt?: string;
}

export const HeroPhotoFrame: React.FC<HeroPhotoFrameProps> = ({
  photoSrc = "/images/gautam-hero.jpg",
  fallbackSrc = "/images/gautam-hero-placeholder.svg",
  alt = "Gautam Dev - DevOps & Cloud Engineer",
}) => {
  const [imgSrc, setImgSrc] = useState(photoSrc);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto"
    >
      {/* Calm ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Main Editorial Portrait Container */}
      <div className="relative rounded-2xl border border-white/15 bg-gradient-to-b from-[#131926] to-[#0A0D14] p-2 shadow-2xl overflow-hidden group">
        {/* Subtle Tech Header Bar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-[#080B12] rounded-t-xl border-b border-white/5 font-mono text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-semibold">GAUTAM_DEV // PROD</span>
          </div>
          <div className="flex items-center gap-1.5 text-cyan-400">
            <KubernetesLogo className="w-3.5 h-3.5" />
            <span>CKA_CERTIFIED</span>
          </div>
        </div>

        {/* Photo Canvas - 16/10 on mobile, 4/3 on tablet, 4/5 on desktop */}
        <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden rounded-lg bg-[#0E131F]">
          <Image
            src={imgSrc}
            alt={alt}
            fill
            unoptimized
            priority
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
            onError={() => {
              if (imgSrc !== fallbackSrc) {
                setImgSrc(fallbackSrc);
              }
            }}
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent opacity-85 pointer-events-none" />

          {/* Floating Subtle Status Pill */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-[#080B12]/85 backdrop-blur-md border border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white tracking-wide">
                  Gautam Dev
                </div>
                <div className="text-[10px] text-slate-400">
                  Cloud &middot; DevOps &middot; Infrastructure
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
};
