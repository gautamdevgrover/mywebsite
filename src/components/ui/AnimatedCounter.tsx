"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className = "",
}) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let animationFrame: number;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animationFrame = requestAnimationFrame(() => setCurrent(target));
      return () => {
        if (animationFrame) cancelAnimationFrame(animationFrame);
      };
    }

    let startTime: number | null = null;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutExpo(progress);

      setCurrent(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCurrent(target);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
};

export const StorageReductionVisual: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`space-y-2 ${className}`}>
      <div className="flex items-baseline gap-2 font-mono font-black text-2xl sm:text-3xl text-white">
        <span className="text-slate-400 line-through decoration-rose-500/70 text-xl sm:text-2xl">
          1.7 TB
        </span>
        <span className="text-cyan-400 text-sm font-sans font-bold">→</span>
        <span className="text-cyan-300">400 MB</span>
      </div>

      {/* Visual transformation progress bar */}
      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden flex">
        <div
          className="h-full bg-cyan-400 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isInView ? "24%" : "100%",
          }}
        />
      </div>
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>Initial: 1,700 GB</span>
        <span className="text-emerald-400 font-bold">-76% Footprint</span>
      </div>
    </div>
  );
};
