import { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { AboutSection } from "@/components/about/AboutSection";
import { SixServices } from "@/components/about/SixServices";
import { EngineeringProofs } from "@/components/about/EngineeringProofs";
import { ContactSection } from "@/components/contact/ContactSection";
import { FloatingTechStatus } from "@/components/ui/FloatingTechStatus";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "About & Services | Gautam Dev - DevOps & Cloud Engineering",
  description:
    "Explore Gautam Dev's background, 6 core engineering services, measurable engineering outcomes, and start an independent infrastructure engagement.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#08090C] text-[#E2E8F0] selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden w-full max-w-full">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex-grow pt-16 overflow-x-hidden w-full max-w-full">
        {/* 1. Founder Story & Values: "Built by an Engineer, Not a Sales Team" */}
        <AboutSection />

        {/* 2. Six Core Services & Deliverables */}
        <SixServices />

        {/* 3. Engineering at Scale (4 Verifiable Production Proofs) */}
        <EngineeringProofs />

        {/* 4. Professional Contact & Inquiry Form (Live Database API) */}
        <ContactSection />
      </main>

      {/* Floating System Status Beacon Widget */}
      <FloatingTechStatus />

      {/* Footer */}
      <Footer />
    </div>
  );
}
