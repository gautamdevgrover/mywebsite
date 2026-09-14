import type { Metadata, Viewport } from "next";
import { siteConfig, isConfiguredEmail } from "@/config/siteContent";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#08090C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Gautam Dev | DevOps & Cloud Engineering Services",
  description:
    "Independent DevOps and Cloud Engineering services for AWS infrastructure, CI/CD automation, Docker deployments, cloud cost optimization, migration, monitoring and production infrastructure.",
  keywords: [
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS Infrastructure",
    "CI/CD Automation",
    "Docker Deployments",
    "ECS",
    "Kubernetes CKA",
    "Cloud Cost Optimization",
    "Infrastructure Automation",
    "Gautam Dev",
  ],
  authors: [{ name: "Gautam Dev" }],
  creator: "Gautam Dev",
  metadataBase: new URL("https://gautamdevgrover.online"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gautamdevgrover.online",
    title: "Gautam Dev | Independent DevOps & Cloud Engineering Services",
    description:
      "I build, automate, deploy, and optimize production cloud infrastructure. Real production achievements: 700+ repositories migrated, 1.7 TB S3 optimized, AWS cost reduction.",
    siteName: "Gautam Dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gautam Dev | Independent DevOps & Cloud Engineering Services",
    description:
      "Production infrastructure, automated deployments, and cloud engineering — built to work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${siteConfig.personal.name} - ${siteConfig.business.positioning}`,
    "image": `${siteConfig.business.websiteUrl}${siteConfig.photos.hero}`,
    "url": siteConfig.business.websiteUrl,
    ...(isConfiguredEmail(siteConfig.contact.email) ? { "email": siteConfig.contact.email } : {}),
    "description": siteConfig.business.description,
    "founder": {
      "@type": "Person",
      "name": siteConfig.personal.name,
      "jobTitle": siteConfig.personal.title,
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Certified Kubernetes Administrator (CKA)",
          "recognizedBy": {
            "@type": "Organization",
            "name": "The Linux Foundation"
          }
        }
      ]
    },
    "serviceType": [
      "Cloud Infrastructure Setup",
      "CI/CD Pipeline Automation",
      "Application Deployment",
      "Cloud Cost Optimization",
      "Migration & Automation",
      "Monitoring & Reliability",
      "Linux Server Administration"
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth h-full antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#08090C] text-[#E2E8F0] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
