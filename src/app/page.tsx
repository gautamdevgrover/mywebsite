import { Navbar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { TechStrip } from "@/components/home/TechStrip";
import { QuickCapabilities } from "@/components/home/QuickCapabilities";
import { ProductionPipeline } from "@/components/pipeline/ProductionPipeline";
import { TrustStrip } from "@/components/trust/TrustStrip";
import { CkaCertificationCard } from "@/components/about/CkaCertificationCard";
import { HomeCta } from "@/components/home/HomeCta";
import { FloatingTechStatus } from "@/components/ui/FloatingTechStatus";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#08090C] text-[#E2E8F0] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. Minimal Sticky Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex-grow">
        {/* 2. Hero Section with Real Photo Frame & Operational Beacon */}
        <HeroSection />

        {/* 3. Authentic Technology Logo Marquee */}
        <TechStrip />

        {/* 4. Quick Capabilities (4 Compact Service Cards with Staggered Reveal) */}
        <QuickCapabilities />

        {/* 5. Centerpiece: Interactive "From Code to Production" DevOps Pipeline */}
        <ProductionPipeline />

        {/* 6. Verifiable Technical Outcomes & Animated Counters */}
        <TrustStrip />

        {/* 7. Official CKA Kubernetes Certification Spotlight */}
        <section id="certification" className="py-10 sm:py-16 md:py-24 border-t border-white/10 bg-[#080B14] relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-8">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>OFFICIAL INDUSTRY CERTIFICATION</span>
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                Certified Kubernetes Administrator (CKA)
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-mono">
                Verified hands-on cluster architecture, deployment, and troubleshooting credential issued by Cloud Native Computing Foundation (CNCF) &amp; The Linux Foundation.
              </p>
            </div>

            <CkaCertificationCard />
          </div>
        </section>

        {/* 8. High-Impact Closing CTA Banner */}
        <HomeCta />
      </main>

      {/* Floating System Status Beacon Widget */}
      <FloatingTechStatus />

      {/* Footer */}
      <Footer />
    </div>
  );
}
