import {
  ServiceItem,
  MetricItem,
  PipelineStep,
  CaseStudy,
  TimelineNode,
  TechCategory,
  ArchitectureTier,
} from "@/types";

export function isConfiguredUrl(url?: string | null): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  if (
    trimmed === "" ||
    trimmed.startsWith("YOUR_") ||
    trimmed.includes("YOUR_") ||
    trimmed === "https://" ||
    trimmed === "http://"
  ) {
    return false;
  }
  return true;
}

export function isConfiguredEmail(email?: string | null): boolean {
  if (!email) return false;
  const trimmed = email.trim();
  if (
    trimmed === "" ||
    trimmed.startsWith("YOUR_") ||
    trimmed.includes("YOUR_") ||
    !trimmed.includes("@")
  ) {
    return false;
  }
  return true;
}

export function isConfiguredPhone(phone?: string | null): boolean {
  if (!phone) return false;
  const trimmed = phone.trim();
  if (
    trimmed === "" ||
    trimmed.startsWith("YOUR_") ||
    trimmed.includes("YOUR_")
  ) {
    return false;
  }
  return true;
}

export const siteConfig = {
  // 1. Personal Identity & Designation
  personal: {
    name: "Gautam Dev",
    title: "DevOps & Cloud Engineer",
    role: "Junior DevOps Engineer",
    company: "MetaDesign Solutions",
    experiencePeriod: "June 2026 – Present",
    location: "India / Remote Worldwide",
  },

  // 2. Business & Positioning
  business: {
    name: "GAUTAM DEV",
    brandName: "GAUTAM DEV",
    tagline: "Cloud. DevOps. Infrastructure.",
    positioning: "Independent DevOps & Cloud Engineering Services",
    description:
      "Independent DevOps and Cloud Engineering services for AWS infrastructure, CI/CD automation, Docker deployments, cloud cost optimization, migration, and monitoring.",
    heroHeading: "I Build, Automate & Scale Production Infrastructure.",
    heroSubheading:
      "I help startups and engineering teams deploy applications, automate delivery pipelines, optimize AWS cloud costs, and solve production problems with absolute reliability.",
    availability: "Available for Select Client Engagements",
    websiteUrl: "https://gautamdevgrover.online",
  },

  // 3. Contact Email & Phone
  contact: {
    email: "gautamdevgrover@gmail.com",
    phone: "+91 9996444687",
  },

  // 4. Social Media Profiles (Only icons with configured, non-placeholder URLs are displayed)
  social: {
    github: "https://github.com/gautamdevgrover",
    linkedin: "https://www.linkedin.com/in/gautam-dev-094b1a26a/",
    instagram: "", // Removed per user request
  },

  // 5. CKA Certification & Official Linux Foundation Verification
  cka: {
    title: "Certified Kubernetes Administrator",
    abbreviation: "CKA",
    issuer: "Cloud Native Computing Foundation (CNCF) / The Linux Foundation",
    certificateId: "LF-a90fuswfmd",
    lastName: "Dev", // Last name as registered in Linux Foundation verification system
    achievementDate: "April 18, 2026",
    expirationDate: "April 18, 2029",
    certificateImage: "/images/cka-certificate.jpg",
    certificatePlaceholder: "/images/cka-placeholder.svg",
    linuxFoundationVerificationUrl: "https://training.linuxfoundation.org/certification/verify/",
    credlyBadgeUrl: "", // Optional: paste your public Credly CKA badge URL here when available
  },

  // 6. Photo Paths & Fallbacks
  photos: {
    hero: "/images/gautam-hero.jpg",
    heroPlaceholder: "/images/gautam-hero-placeholder.svg",
    about: "/images/gautam-about.jpg",
    aboutPlaceholder: "/images/gautam-about-placeholder.svg",
  },

  // 7. Backward compatibility accessor for existing component imports
  get brand() {
    return {
      name: this.business.brandName,
      title: this.personal.title,
      tagline: this.business.tagline,
      positioning: this.business.positioning,
      heroHeading: this.business.heroHeading,
      heroSubheading: this.business.heroSubheading,
      availability: this.business.availability,
      email: this.contact.email,
      location: this.personal.location,
      social: this.social,
      photos: this.photos,
    };
  },

  trustMetrics: [
    {
      value: "700+",
      label: "Repositories Migrated",
      sublabel: "GitLab to GitHub with full history & tags",
      highlight: true,
    },
    {
      value: "1.7 TB → 400 MB",
      label: "S3 Storage Optimized",
      sublabel: "Versioned cleanup via Python / Boto3",
      highlight: true,
    },
    {
      value: "~$200/mo",
      label: "AWS Cost Reduction",
      sublabel: "Eliminated unused VPC endpoints & 58 EBS snapshots",
      highlight: true,
    },
    {
      value: "5+ Years",
      label: "IT / Infrastructure Experience",
      sublabel: "Linux, Systems Admin, DevOps & Cloud",
      highlight: false,
    },
    {
      value: "CKA",
      label: "Kubernetes Administrator",
      sublabel: "Certified by The Linux Foundation (Apr 2026)",
      highlight: true,
    },
  ] as MetricItem[],

  services: [
    {
      id: "cloud-infra",
      number: "01",
      title: "Cloud Infrastructure",
      description:
        "Architecting and provisioning production AWS environments built for high availability, security isolation, and predictable performance.",
      technologies: ["AWS", "VPC", "EC2", "ALB", "ASG", "RDS", "ECS", "ECR", "IAM", "S3"],
      deliverables: [
        "VPC network topology with public/private subnet segmentation",
        "Application Load Balancer & Auto Scaling Group setup",
        "Managed RDS databases with automated backup policies",
        "IAM least-privilege security roles and access policies",
      ],
      iconName: "Cloud",
    },
    {
      id: "cicd-automation",
      number: "02",
      title: "CI/CD & Deployment Automation",
      description:
        "Building resilient, self-healing deployment pipelines that test, build container images, and ship to staging and production automatically.",
      technologies: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "GitLab Runner", "Docker"],
      deliverables: [
        "Automated GitHub / GitLab push triggers and webhooks",
        "Multi-stage Docker container build and optimization",
        "Self-hosted GitLab runner provisioning & maintenance",
        "Pre-deployment health checks and rollback safety nets",
      ],
      iconName: "GitBranch",
    },
    {
      id: "app-deployment",
      number: "03",
      title: "Application Deployment",
      description:
        "Production runtime deployments for Node.js and containerized workloads with zero-downtime reloads and process supervisors.",
      technologies: ["Node.js", "Docker", "PM2", "Nginx", "EC2", "ECS", "ECR"],
      deliverables: [
        "Containerized production deployments on AWS ECS / EC2",
        "Nginx reverse proxy configuration with TLS/SSL",
        "PM2 cluster mode process management and auto-restart",
        "Zero-downtime rolling deployment strategies",
      ],
      iconName: "Server",
    },
    {
      id: "cost-optimization",
      number: "04",
      title: "Cloud Cost Optimization",
      description:
        "Systematic auditing of AWS infrastructure to eliminate waste, terminate zombie resources, right-size compute, and cut recurring bills.",
      technologies: ["AWS Cost Explorer", "Python", "Boto3", "VPC Endpoints", "EBS", "S3 Lifecycle"],
      deliverables: [
        "Unused VPC endpoint auditing and teardown",
        "Dormant and orphaned EBS snapshot purging",
        "S3 object versioning cleanup and intelligent tiering",
        "Immediate and sustainable monthly AWS bill reductions",
      ],
      iconName: "DollarSign",
    },
    {
      id: "migration-automation",
      number: "05",
      title: "Migration & Automation",
      description:
        "Engineering custom Python and shell scripts to automate mass repository transfers, data migrations, and repetitive operational tasks.",
      technologies: ["Python", "Boto3", "GitHub API", "GitLab API", "Shell", "Bash", "Git"],
      deliverables: [
        "Large-scale Git repository migrations with commit & tag preservation",
        "Automated repo permissions and branch protection synchronization",
        "Scheduled maintenance scripts via Boto3 and cron",
        "Idempotent operational automation to replace manual clicks",
      ],
      iconName: "ArrowRightLeft",
    },
    {
      id: "monitoring-reliability",
      number: "06",
      title: "Monitoring & Reliability",
      description:
        "Complete observability suites for production APIs and servers so you discover issues in seconds before customers notice.",
      technologies: ["Prometheus", "Grafana", "Blackbox Exporter", "Alertmanager", "Docker Compose"],
      deliverables: [
        "Synthetic Blackbox probing for HTTP API uptime and status codes",
        "Grafana dashboards for system metrics, latency, and request rates",
        "Alertmanager routing with automated 1-minute threshold alerts",
        "Self-contained Docker Compose observability stack deployment",
      ],
      iconName: "Activity",
    },
    {
      id: "db-backup-ops",
      number: "07",
      title: "Database & Backup Operations",
      description:
        "Rock-solid automated backup schedules, cross-region replication, and point-in-time recovery for relational and document databases.",
      technologies: ["AWS RDS", "PostgreSQL", "MySQL", "MongoDB Atlas", "AWS Backup"],
      deliverables: [
        "RDS automated snapshots and manual maintenance snapshots",
        "MongoDB Atlas backup verification and cluster management",
        "Disaster recovery drill plans and restore validation",
        "Encrypted database storage with automated maintenance windows",
      ],
      iconName: "Database",
    },
    {
      id: "linux-support",
      number: "08",
      title: "Linux & Infrastructure Support",
      description:
        "Deep operating system-level administration, security hardening, kernel performance tuning, and fast troubleshooting for production servers.",
      technologies: ["Ubuntu", "Debian", "CentOS/RHEL", "SSH", "OpenVPN", "Firewalls", "UFW", "IPtables"],
      deliverables: [
        "Root cause analysis for production outages and system crashes",
        "Secure Bastion host and VPN access gateway configuration",
        "Disk I/O, CPU spikes, and memory leak investigations",
        "Package auditing, security patch workflows, and hardening",
      ],
      iconName: "Terminal",
    },
  ] as ServiceItem[],

  pipelineSteps: [
    {
      id: "dev",
      name: "Developer Push",
      category: "source",
      description: "Code commits and feature branches pushed to version control.",
      tech: ["Git", "GitLab", "GitHub"],
      details: [
        "Commit hygiene and semantic commit validation",
        "Branch protection rules and mandatory PR reviews",
        "Feature branches merge into development branch",
      ],
    },
    {
      id: "webhook",
      name: "Event Trigger",
      category: "ci",
      description: "Instantaneous webhooks notify automation orchestrators.",
      tech: ["Webhooks", "GitLab Runner", "GitHub Actions"],
      details: [
        "Payload HMAC signature verification for security",
        "Trigger event filtering by branch and file paths",
        "Spawns isolated build agent runners",
      ],
    },
    {
      id: "ci-build",
      name: "CI Pipeline",
      category: "ci",
      description: "Jenkins / GitHub Actions executes automated build & lint jobs.",
      tech: ["Jenkins", "GitHub Actions", "Shell"],
      details: [
        "Source checkout and dependency validation",
        "Unit test execution and build artifact generation",
        "Docker image build with multi-stage caching",
      ],
    },
    {
      id: "registry",
      name: "Image Registry",
      category: "registry",
      description: "Container images are tagged, scanned, and stored securely.",
      tech: ["AWS ECR", "Docker", "IAM"],
      details: [
        "SHA-based immutable tag assignment",
        "IAM authenticated push via AWS CLI / Boto3",
        "Vulnerability scanning on image upload",
      ],
    },
    {
      id: "compute",
      name: "Deployment",
      category: "compute",
      description: "Target servers pull the fresh image and restart containers.",
      tech: ["AWS EC2", "AWS ECS", "PM2", "Docker"],
      details: [
        "Pull updated image from private ECR repository",
        "Graceful container stop or rolling task replacement",
        "Run container with production environment variables",
      ],
    },
    {
      id: "ingress",
      name: "Routing & TLS",
      category: "traffic",
      description: "Traffic routed through load balancers and reverse proxies.",
      tech: ["AWS ALB", "Nginx", "SSL/TLS"],
      details: [
        "HTTPS termination with automated certificate renewal",
        "Health check routing to only healthy instances",
        "Reverse proxy header forwarding to Node.js backend",
      ],
    },
    {
      id: "observability",
      name: "Monitoring & Alerts",
      category: "observability",
      description: "Continuous availability checking and instant outage alerts.",
      tech: ["Prometheus", "Grafana", "Blackbox", "Alertmanager"],
      details: [
        "Localhost health endpoint check post-deployment",
        "Synthetic Blackbox probe every 15 seconds",
        "Email / webhook notification triggered on 1-min failure",
      ],
    },
  ] as PipelineStep[],

  caseStudies: [
    {
      id: "repo-migration",
      tag: "Automation & Migration",
      title: "700+ GitLab Repositories → GitHub",
      headline: "700+ repositories. One automated migration.",
      summary:
        "Architected and executed an automated batch migration transferring over 700 production repositories from GitLab to GitHub using Python scripts and REST APIs without human intervention or data loss.",
      impactMetric: {
        primary: "700+",
        label: "Repositories Migrated",
        sub: "100% History Preserved",
      },
      technicalHighlights: [
        "Automated GitHub repository provisioning via GitHub REST API with exact organizational visibility settings",
        "Executed mirror clones preserving the complete Git commit tree, commit hashes, and authorship",
        "Preserved 100% of branches, release tags, and lightweight Git references",
        "Automated team permission mapping and collaborator access synchronization",
        "Built robust retry logic and exponential backoff to respect GitLab/GitHub API rate limits",
      ],
      architectureDiagramType: "repo-migration",
      tools: ["Python", "GitLab API", "GitHub API", "Git CLI", "Shell Scripting"],
    },
    {
      id: "s3-optimization",
      tag: "Cloud Storage Optimization",
      title: "S3 Bucket Versioning Optimization",
      headline: "1.7 TB → 400 MB. 76% Storage Reclaimed.",
      summary:
        "Identified runaway cloud storage costs driven by hidden versioned S3 objects. Built an automated Python/Boto3 script to safely purge historical object versions older than six months, slashing bucket size from 1.7 TB down to 400 MB.",
      impactMetric: {
        primary: "1.7 TB → 400 MB",
        label: "Storage Footprint",
        sub: "Eliminated Ghost Versions",
      },
      technicalHighlights: [
        "Discovered that S3 versioning was accumulating deleted and overwritten files invisibly over years",
        "Engineered a Python script utilizing Boto3 to paginate through millions of version markers",
        "Implemented a strict age-filtering rule targeting non-current object versions older than 180 days",
        "Safely preserved all active production files and current object versions",
        "Reduced cloud storage footprint by ~76% and permanently lowered ongoing S3 storage costs",
      ],
      architectureDiagramType: "s3-reduction",
      tools: ["AWS S3", "Python", "Boto3", "AWS CLI", "CloudWatch"],
    },
    {
      id: "cicd-pipeline",
      tag: "CI/CD & Delivery Pipelines",
      title: "End-to-End Containerized Delivery Pipeline",
      headline: "Code push to production container in minutes.",
      summary:
        "Designed and implemented production CI/CD workflows spanning GitHub/GitLab webhooks, Jenkins automation, Amazon ECR image publishing, target server deployment, and automated localhost health validation.",
      impactMetric: {
        primary: "Zero-Click",
        label: "Deployment Flow",
        sub: "Automated Rollback Safeguards",
      },
      technicalHighlights: [
        "GitHub Webhook triggers Jenkins build server automatically upon developer push",
        "Docker multi-stage builds create lightweight, production-hardened container images",
        "Images authenticated and pushed to private AWS Elastic Container Registry (ECR)",
        "Deployment server pulls updated image, performs graceful container restart, and mounts volumes",
        "Automated localhost health check validates HTTP 200 response before marking deployment success",
        "Integrated instant email dispatch to notify the engineering team of pipeline results",
      ],
      architectureDiagramType: "cicd-pipeline",
      tools: ["Jenkins", "GitHub Actions", "Docker", "AWS ECR", "AWS EC2/ECS", "Nginx"],
    },
    {
      id: "api-monitoring",
      tag: "Production Observability",
      title: "Synthetic API Health & Outage Alerting",
      headline: "Detecting downtime in 60 seconds before clients report it.",
      summary:
        "Deployed a self-contained monitoring and alerting cluster using Docker Compose, Prometheus, Grafana, Blackbox Exporter, and Alertmanager to continuously poll mission-critical endpoints and trigger instant notifications upon failure.",
      impactMetric: {
        primary: "60s Alert",
        label: "Incident Detection",
        sub: "Automated Email Alerts",
      },
      technicalHighlights: [
        "Packaged Prometheus, Grafana, Blackbox Exporter, and Alertmanager into a maintainable Docker Compose stack",
        "Configured Blackbox Exporter for synthetic HTTP/HTTPS probing of API endpoints and status codes",
        "Set strict alert threshold: if an endpoint fails checks for ~1 minute, an alert is triggered immediately",
        "Configured Alertmanager to route high-priority incident emails directly to engineers on-call",
        "Constructed intuitive Grafana dashboards displaying response latency, status distribution, and uptime percentages",
      ],
      architectureDiagramType: "api-monitoring",
      tools: ["Prometheus", "Grafana", "Blackbox Exporter", "Alertmanager", "Docker Compose"],
    },
  ] as CaseStudy[],

  costOptimization: {
    heading: "Your Cloud Bill Shouldn't Be a Mystery.",
    subheading: "I find and eliminate infrastructure that consumes money without delivering value.",
    monthlySaved: "~$200/mo",
    annualizedSaved: "~$2,400/yr",
    label: "Selected Infrastructure Optimization",
    items: [
      {
        title: "Unused VPC Endpoints",
        detail: "Identified and decommissioned idle VPC endpoints incurring hourly provision charges with zero active traffic.",
        status: "REMOVED",
        impact: "Direct hourly cost elimination",
      },
      {
        title: "58 Orphaned EBS Snapshots",
        detail: "Audited block storage backups; purged 58 redundant historical snapshots whose parent volumes had been deleted.",
        status: "CLEANED",
        impact: "Storage gigabyte reduction",
      },
      {
        title: "Versioned S3 Storage",
        detail: "Scrubbed historical object versions from 1.7 TB down to 400 MB, stopping recurring monthly storage accumulation.",
        status: "OPTIMIZED",
        impact: "76% S3 bill reduction",
      },
    ],
  },

  awsArchitecture: {
    heading: "I Think in Systems, Not Just Services.",
    subheading:
      "A real single-AZ 3-tier AWS infrastructure configured for practical isolation, automated scaling, and reliable application delivery.",
    note: "Configured as a Single-AZ 3-tier architecture with public-facing load balancing and bastion access, private frontend/backend compute tiers, and a private RDS database.",
    singleAzNotice: "Single-Availability Zone deployment — designed for clear tier separation and cost-conscious production stability without claiming multi-region complexity.",
    tiers: [
      {
        name: "Tier 1: Public Subnet (Ingress & Admin)",
        subnetType: "public",
        components: [
          {
            name: "Application Load Balancer (ALB)",
            details: "Publicly accessible endpoint terminating HTTPS and balancing HTTP traffic into private compute.",
            badge: "Public Ingress",
          },
          {
            name: "Bastion Host (Jump Box)",
            details: "Hardened Linux instance with key-pair authentication for secure administrator SSH into private instances.",
            badge: "Admin Access",
          },
        ],
      },
      {
        name: "Tier 2: Private Subnet (Frontend Compute)",
        subnetType: "private",
        components: [
          {
            name: "Frontend EC2 Auto Scaling Group",
            details: "Node.js client serving instances. Min: 2 | Desired: 2 | Max: 3 instances with health-check replacement.",
            badge: "ASG: 2-3 Instances",
          },
        ],
      },
      {
        name: "Tier 3: Private Subnet (Backend Compute)",
        subnetType: "private",
        components: [
          {
            name: "Backend EC2 Auto Scaling Group",
            details: "API services processing business logic and database queries. Min: 2 | Desired: 2 | Max: 3 instances.",
            badge: "ASG: 2-3 Instances",
          },
        ],
      },
      {
        name: "Tier 4: Private Subnet (Data Persistence)",
        subnetType: "private",
        components: [
          {
            name: "Amazon RDS Database",
            details: "Managed database instance isolated in private subnet, accessible strictly by backend compute security group.",
            badge: "Isolated Data",
          },
        ],
      },
    ] as ArchitectureTier[],
  },

  about: {
    heading: "Hi, I'm Gautam.",
    story: [
      "I'm a DevOps & Cloud Engineer focused on building reliable production infrastructure, automating deployments, and solving the infrastructure problems that slow engineering teams down.",
      "My career started in infrastructure and Linux system administration before I moved deeper into cloud infrastructure, CI/CD, containerization, monitoring and DevOps engineering.",
      "Today, I work with AWS, Docker, Jenkins, GitHub Actions, GitLab CI/CD, Linux, monitoring and infrastructure automation.",
      "I'm now building an independent technical services practice around the same work I do in production — helping teams deploy, automate, migrate, monitor and optimize their infrastructure.",
    ],
    principles: [
      {
        title: "Production First",
        desc: "Theory is cheap. What matters is code successfully running in production with zero downtime.",
      },
      {
        title: "Automate Repetition",
        desc: "If a manual operational task is done more than twice, it gets codified into a script or pipeline.",
      },
      {
        title: "Pragmatic Architecture",
        desc: "I don't overcomplicate setups. Clean, maintainable, and cost-conscious infrastructure always wins.",
      },
    ],
  },

  careerTimeline: [
    {
      period: "Sep 2021 – Feb 2023",
      role: "Infrastructure Engineer",
      company: "Oodles Technologies",
      tag: "Infrastructure & Systems",
      focus: [
        "Linux OS administration",
        "Developer environment provisioning (PHP, Apache, Node.js, React, Angular, phpMyAdmin, Elasticsearch, JMeter, Docker)",
        "Server troubleshooting & user support",
        "VPN configuration & support",
        "Server metric monitoring with Prometheus & Grafana (CPU, RAM, swap, disk space, network traffic)",
      ],
      narrative:
        "Built deep operating system foundations managing physical and virtual Linux servers, troubleshooting developer issues, configuring VPNs, and monitoring hardware resource constraints.",
    },
    {
      period: "Jun 2023 – Jan 2026",
      role: "System Administrator",
      company: "Unthinkable Solutions",
      tag: "Systems Administration",
      focus: [
        "Linux system administration",
        "Infrastructure management & user support",
        "Ansible automation",
        "Production server troubleshooting",
      ],
      narrative:
        "Managed enterprise Linux infrastructure, streamlined repetitive administration using Ansible playbooks, and led resolution of complex server outages.",
    },
    {
      period: "Jun 2025 – Jan 2026",
      role: "DevOps Transition (Shadow DevOps)",
      company: "Unthinkable Solutions",
      tag: "DevOps Expansion",
      focus: [
        "Jenkins CI/CD pipeline authoring & optimization",
        "AWS cloud infrastructure",
        "Docker containerization & application deployment support",
        "S3 and RDS database backup automation",
        "AWS 3-tier architecture provisioning",
      ],
      narrative:
        "Stepped into dedicated DevOps responsibilities: constructed Jenkins pipelines from scratch, orchestrated Docker deployments, managed AWS backups, and designed the single-AZ 3-tier VPC architecture.",
    },
    {
      period: "Apr 2026",
      role: "Certified Kubernetes Administrator (CKA)",
      company: "The Linux Foundation",
      tag: "Certification",
      focus: [
        "Kubernetes cluster architecture, installation & configuration",
        "Workloads & scheduling",
        "Services & networking",
        "Storage & volume configuration",
        "Cluster troubleshooting & maintenance",
      ],
      narrative:
        "Dedicated focused study to clear the rigorous hands-on CKA exam. Note: While CKA certified, current daily production environments at MetaDesign are primarily centered on AWS EC2, ECS, and Docker.",
    },
    {
      period: "Jun 2026 – Present",
      role: "Junior DevOps Engineer",
      company: "MetaDesign Solutions",
      tag: "Production DevOps",
      focus: [
        "Node.js production deployments with PM2 and Nginx",
        "AWS EC2, ECS, ECR, S3, IAM, VPC, ALB, ASG, RDS",
        "CI/CD via Jenkins, GitHub Actions & GitLab CI/CD",
        "GitLab self-hosted runner management",
        "Prometheus, Grafana, Blackbox Exporter & Alertmanager monitoring",
        "Python / Boto3 automation & AWS cost optimization",
        "700+ repo automated migration & 1.7 TB S3 optimization",
      ],
      narrative:
        "Executing core production DevOps operations: shipping Node.js workloads, driving cloud automation, eliminating unnecessary AWS bills, and building synthetic API monitoring systems.",
    },
    {
      period: "NOW",
      role: "Independent Technical Services Practice",
      company: "Gautam Dev",
      tag: "Founder & Consultant",
      focus: [
        "Independent cloud & DevOps services",
        "Pipeline automation for engineering teams",
        "AWS architecture & cost optimization audits",
        "Migration and reliability engineering",
      ],
      narrative:
        "Providing direct, high-impact DevOps and cloud engineering services to startups and growing technology teams.",
    },
  ] as TimelineNode[],

  techEcosystem: [
    {
      category: "Cloud (AWS)",
      description: "Production AWS building blocks configured for durability, network isolation, and performance.",
      skills: [
        { name: "AWS EC2", context: "Compute instances, user-data automation, security groups", level: "primary" },
        { name: "AWS VPC", context: "Subnets, route tables, IGW, NAT, Bastion jump hosts", level: "primary" },
        { name: "AWS ALB / ASG", context: "Application Load Balancers & Auto Scaling Groups (2-3 instances)", level: "primary" },
        { name: "AWS ECS / ECR", context: "Container service task definitions & private image registries", level: "primary" },
        { name: "AWS RDS", context: "Managed relational databases, snapshots & maintenance windows", level: "primary" },
        { name: "AWS S3", context: "Object storage, versioning management, lifecycle & Boto3 scripts", level: "primary" },
        { name: "AWS IAM", context: "Least-privilege policies, instance profiles & service roles", level: "primary" },
        { name: "AWS Cost Explorer", context: "Cost anomaly detection, VPC endpoint & EBS snapshot audits", level: "primary" },
      ],
    },
    {
      category: "CI/CD & Delivery",
      description: "Automated pipelines driving code from commit to production with health gates.",
      skills: [
        { name: "Jenkins", context: "Declarative pipelines, webhook triggers, Docker build & ECR push", level: "primary" },
        { name: "GitHub Actions", context: "Multi-environment workflows (dev -> PR -> stage -> prod)", level: "primary" },
        { name: "GitLab CI/CD", context: "Pipeline YAML, artifact caching, automated test & deploy jobs", level: "primary" },
        { name: "GitLab Runners", context: "Self-hosted runner provisioning on Linux, executor tuning", level: "primary" },
      ],
    },
    {
      category: "Containers & Runtime",
      description: "Lightweight, reproducible application runtimes and process orchestration.",
      skills: [
        { name: "Docker", context: "Multi-stage Dockerfiles, caching, image optimization", level: "primary" },
        { name: "Docker Compose", context: "Multi-service local stacks & observability deployments", level: "primary" },
        { name: "Node.js", context: "Production runtime configuration, npm packaging, env vars", level: "primary" },
        { name: "Nginx", context: "Reverse proxy, SSL/TLS termination, rate limiting, gzip", level: "primary" },
        { name: "PM2", context: "Process manager, cluster mode, logs & auto-restart on boot", level: "primary" },
      ],
    },
    {
      category: "Monitoring & Observability",
      description: "Real-time synthetic probing, latency metrics, and automated alert routing.",
      skills: [
        { name: "Prometheus", context: "Time-series data collection, scrape targets & alerting rules", level: "primary" },
        { name: "Grafana", context: "Executive dashboards, hardware metrics & API uptime graphs", level: "primary" },
        { name: "Blackbox Exporter", context: "Synthetic HTTP/HTTPS endpoint probes & status verification", level: "primary" },
        { name: "Alertmanager", context: "Email dispatch routing for outages exceeding 1 minute", level: "primary" },
      ],
    },
    {
      category: "Automation & Scripting",
      description: "Code that replaces human toil and eliminates manual human error.",
      skills: [
        { name: "Python", context: "Infrastructure automation, API integration & data cleaning", level: "primary" },
        { name: "Boto3", context: "AWS SDK for S3 version cleaning, EC2 & snapshot automation", level: "primary" },
        { name: "Bash / Shell", context: "Linux sysadmin automation, server bootstrapping & cron jobs", level: "primary" },
        { name: "Ansible", context: "Server configuration management, playbook automation", level: "primary" },
        { name: "GitLab / GitHub APIs", context: "Automated 700+ repository migration & permission syncing", level: "primary" },
      ],
    },
    {
      category: "Cloud Native",
      description: "Certified standards for container orchestration and declarative delivery.",
      skills: [
        { name: "Kubernetes (CKA)", context: "Certified Administrator (Linux Foundation, Apr 2026)", level: "primary" },
        { name: "Helm", context: "Package management for Kubernetes application manifests", level: "secondary" },
        { name: "ArgoCD", context: "Declarative GitOps continuous delivery workflows", level: "secondary" },
      ],
    },
    {
      category: "Systems & Networking",
      description: "Deep Linux OS understanding honed over 5+ years of real operations.",
      skills: [
        { name: "Linux Administration", context: "Process management, memory analysis, systemd & logs", level: "primary" },
        { name: "SSH & Bastion", context: "Key-pair hardening, proxy forwarding & bastion gateways", level: "primary" },
        { name: "VPN (OpenVPN)", context: "Secure remote access for internal infrastructure & developers", level: "primary" },
        { name: "DNS & Firewalls", context: "Route 53, UFW, IPtables, port filtering & VPC security groups", level: "primary" },
      ],
    },
  ] as TechCategory[],

  methodology: [
    {
      step: "01",
      title: "UNDERSTAND",
      subtitle: "Audit & Requirements",
      description:
        "Deep-dive into the existing codebase, deployment patterns, hosting bills, and team bottlenecks to identify immediate failure points.",
      deliverable: "Target architecture plan & risk assessment",
    },
    {
      step: "02",
      title: "PLAN",
      subtitle: "Pragmatic Architecture",
      description:
        "Design a straightforward, cost-effective infrastructure blueprint and delivery pipeline tailored to your exact business scale.",
      deliverable: "Step-by-step migration / deployment roadmap",
    },
    {
      step: "03",
      title: "IMPLEMENT",
      subtitle: "Deploy & Automate",
      description:
        "Provision AWS resources, code CI/CD pipelines, configure Docker containers, and implement health checks with zero downtime.",
      deliverable: "Production-ready, codified infrastructure",
    },
    {
      step: "04",
      title: "IMPROVE",
      subtitle: "Monitor & Optimize",
      description:
        "Wire up synthetic monitoring, tune alerting thresholds, audit initial resource usage, and establish ongoing cost hygiene.",
      deliverable: "Observability dashboards & cost baselines",
    },
  ],

  whyWorkWithMe: [
    {
      title: "Production First",
      tagline: "Real systems, not theoretical slide decks",
      description:
        "I work daily with live AWS EC2/ECS workloads, Node.js applications, and Nginx proxies. I know what fails in production and how to build resilience from day one.",
    },
    {
      title: "Automation Minded",
      tagline: "Replace repetitive manual toil with code",
      description:
        "From migrating 700+ repositories via Python scripts to purging S3 ghost versions with Boto3, I turn manual engineering hours into automated seconds.",
    },
    {
      title: "Cloud Practicality",
      tagline: "Infrastructure that is reliable without burning money",
      description:
        "I don't propose multi-region Kubernetes clusters for a service that needs a clean 3-tier AWS ASG. I build what your business actually needs.",
    },
    {
      title: "Systematic Troubleshooting",
      tagline: "Root-cause diagnostics under pressure",
      description:
        "5+ years of Linux administration means I don't guess when a server hangs or a container exits with code 137. I inspect memory, sockets, logs, and kernel metrics.",
    },
    {
      title: "Strong Systems Foundation",
      tagline: "Understanding the OS beneath the container",
      description:
        "Before container abstractions came along, I was administering bare Linux, configuring systemd services, managing networks, and debugging swap space.",
    },
    {
      title: "Measurable Outcomes",
      tagline: "Proven numbers from actual work",
      description:
        "700+ repositories migrated, 1.7 TB shrunk to 400 MB, and ~$200/mo in recurring AWS bills eliminated. Measurable engineering results speak for themselves.",
    },
  ],
};
