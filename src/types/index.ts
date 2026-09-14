export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  deliverables: string[];
  iconName: string;
}

export interface MetricItem {
  value: string;
  numericValue?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  highlight?: boolean;
}

export interface PipelineStep {
  id: string;
  name: string;
  category: "source" | "ci" | "registry" | "compute" | "traffic" | "observability";
  description: string;
  tech: string[];
  details: string[];
}

export interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  headline: string;
  summary: string;
  impactMetric: {
    primary: string;
    label: string;
    sub?: string;
  };
  technicalHighlights: string[];
  architectureDiagramType: "repo-migration" | "s3-reduction" | "cicd-pipeline" | "api-monitoring";
  tools: string[];
}

export interface TimelineNode {
  period: string;
  role: string;
  company: string;
  focus: string[];
  narrative: string;
  tag: string;
}

export interface TechCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    context: string;
    level?: "primary" | "secondary";
  }[];
}

export interface ArchitectureTier {
  name: string;
  subnetType: "public" | "private";
  components: {
    name: string;
    details: string;
    badge?: string;
  }[];
}
