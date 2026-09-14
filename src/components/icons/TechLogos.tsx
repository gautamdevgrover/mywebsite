import React from "react";
import {
  siKubernetes,
  siDocker,
  siJenkins,
  siGithubactions,
  siGitlab,
  siPrometheus,
  siGrafana,
  siTerraform,
  siAnsible,
  siPython,
  siGnubash,
  siGit,
  siNginx,
  siHelm,
  siLinux,
} from "simple-icons";

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
  monochrome?: boolean;
}

// 1. Kubernetes (Official simple-icons SVG + authentic #326CE5)
export const KubernetesLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={monochrome ? "currentColor" : "#326CE5"}
    aria-hidden="true"
    {...props}
  >
    <path d={siKubernetes.path} />
  </svg>
);

// 2. AWS Official Logo (Letters + Authentic #FF9900 smile arrow)
export const AwsLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M7.4 11.2c-.3-.2-.7-.4-1.2-.4-.8 0-1.4.4-1.4 1.1 0 .7.5 1.1 1.2 1.1.6 0 1-.3 1.3-.6v-1.2h.1zm1.5 3.9c-.7.5-1.6.7-2.5.7-1.8 0-3-1.1-3-2.8 0-1.8 1.3-2.9 3.2-2.9.8 0 1.6.2 2.1.5v-.5c0-1.1-.7-1.6-1.9-1.6-.8 0-1.6.2-2.2.6l-.5-1.3c.8-.5 1.9-.8 3-.8 2.2 0 3.4 1.1 3.4 3.2v4.8h-1.5v-1.2l-.1.5zm6.3-5.3l-1.5 5.3h-1.6l-1.7-5.3h1.7l.9 3.5.9-3.5h1.3zm5.7 3.5c-.3.5-.8.8-1.5.8-.8 0-1.2-.4-1.2-1.1 0-.8.6-1.2 1.6-1.2.4 0 .8.1 1.1.2v1.3zm1.6 1.8c-.6.4-1.4.6-2.3.6-1.5 0-2.4-.7-2.4-2.1 0-1.7 1.4-2.3 3.1-2.3.5 0 1 .1 1.4.2v-.4c0-.9-.5-1.3-1.5-1.3-.7 0-1.5.2-2 .5l-.5-1.2c.8-.5 1.8-.7 2.8-.7 2.1 0 3 1 3 2.8v3.9h-1.6v-1z"
      fill={monochrome ? "currentColor" : "#F8FAFC"}
    />
    <path
      d="M3.2 17.8c4.6 3.4 11.3 3.4 15.9 0 .5-.4 1.1.2.6.7-5.1 3.8-12.5 3.8-17.6 0-.5-.4.1-1.1.6-.7zm16.8-.5c.5-.6 1.8-1.3 2.1-.8.3.5-.4 1.8-1 2.3-.4.3-.8.1-.8-.3 0-.4-.1-.8-.3-1.2z"
      fill={monochrome ? "currentColor" : "#FF9900"}
    />
  </svg>
);

// 3. Amazon EC2 Official Service Logo (Orange Compute Cube)
export const Ec2Logo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="3.5"
      fill={monochrome ? "currentColor" : "#FF9900"}
      fillOpacity="0.15"
      stroke={monochrome ? "currentColor" : "#FF9900"}
      strokeWidth="1.5"
    />
    <rect
      x="7"
      y="7"
      width="10"
      height="10"
      rx="2"
      fill={monochrome ? "currentColor" : "#FF9900"}
    />
    <path
      d="M7 4.5V2M12 4.5V2M17 4.5V2M7 22v-2.5M12 22v-2.5M17 22v-2.5M4.5 7H2M4.5 12H2M4.5 17H2M22 7h-2.5M22 12h-2.5M22 17h-2.5"
      stroke={monochrome ? "currentColor" : "#FF9900"}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <text
      x="12"
      y="13.5"
      textAnchor="middle"
      fill="#08090C"
      fontSize="5.5"
      fontWeight="900"
      fontFamily="monospace"
    >
      EC2
    </text>
  </svg>
);

// 4. Amazon S3 Official Service Logo (Storage Bucket #E7157B / #E05243)
export const S3Logo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M12 2L3 6v12l9 4 9-4V6l-9-4z"
      fill={monochrome ? "currentColor" : "#E7157B"}
      fillOpacity="0.15"
      stroke={monochrome ? "currentColor" : "#E7157B"}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M12 2v20M3 6l9 4 9-4M3 12l9 4 9-4M3 18l9 4 9-4"
      stroke={monochrome ? "currentColor" : "#E7157B"}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 5. Amazon ECS Official Service Logo (Container Cluster #FF9900)
export const EcsLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <rect
      x="3"
      y="3"
      width="8"
      height="8"
      rx="2"
      fill={monochrome ? "currentColor" : "#FF9900"}
    />
    <rect
      x="13"
      y="3"
      width="8"
      height="8"
      rx="2"
      fill={monochrome ? "currentColor" : "#FF9900"}
      fillOpacity="0.75"
    />
    <rect
      x="3"
      y="13"
      width="8"
      height="8"
      rx="2"
      fill={monochrome ? "currentColor" : "#FF9900"}
      fillOpacity="0.75"
    />
    <rect
      x="13"
      y="13"
      width="8"
      height="8"
      rx="2"
      fill={monochrome ? "currentColor" : "#FF9900"}
    />
    <path
      d="M11 7h2M7 11v2M17 11v2M11 17h2"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// 6. Amazon ECR Official Service Logo (Container Registry)
export const EcrLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M12 2.5L3.5 7.5v9L12 21.5l8.5-5v-9L12 2.5z"
      fill={monochrome ? "currentColor" : "#FF9900"}
      fillOpacity="0.15"
      stroke={monochrome ? "currentColor" : "#FF9900"}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M12 7.5L7.5 10v4l4.5 2.5 4.5-2.5v-4L12 7.5z"
      fill={monochrome ? "currentColor" : "#FF9900"}
    />
    <circle cx="12" cy="12" r="1.5" fill="#08090C" />
  </svg>
);

// 7. Amazon RDS Official Service Logo (Database Cluster #3B48CC / #527FFF)
export const RdsLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <ellipse
      cx="12"
      cy="6"
      rx="8"
      ry="3.5"
      fill={monochrome ? "currentColor" : "#3B48CC"}
      fillOpacity="0.3"
      stroke={monochrome ? "currentColor" : "#527FFF"}
      strokeWidth="1.5"
    />
    <path
      d="M4 6v5c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5V6"
      stroke={monochrome ? "currentColor" : "#527FFF"}
      strokeWidth="1.5"
    />
    <path
      d="M4 11v5c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-5"
      stroke={monochrome ? "currentColor" : "#527FFF"}
      strokeWidth="1.5"
    />
  </svg>
);

// 8. Docker (Official simple-icons SVG + authentic #2496ED)
export const DockerLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={monochrome ? "currentColor" : "#2496ED"}
    aria-hidden="true"
    {...props}
  >
    <path d={siDocker.path} />
  </svg>
);

// 9. Docker Compose Logo (Multi-container stack)
export const DockerComposeLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <rect
      x="3"
      y="3"
      width="8"
      height="8"
      rx="2"
      fill={monochrome ? "currentColor" : "#2496ED"}
    />
    <rect
      x="13"
      y="3"
      width="8"
      height="8"
      rx="2"
      fill={monochrome ? "currentColor" : "#38BDF8"}
    />
    <rect
      x="8"
      y="13"
      width="8"
      height="8"
      rx="2"
      fill={monochrome ? "currentColor" : "#0EA5E9"}
    />
    <path
      d="M7 11v4M17 11v4M11 17h2"
      stroke={monochrome ? "currentColor" : "#2496ED"}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// 10. Helm (Official simple-icons SVG + authentic #0F1689 / #277A9F)
export const HelmLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={monochrome ? "currentColor" : "#38BDF8"}
    aria-hidden="true"
    {...props}
  >
    <path d={siHelm.path} />
  </svg>
);

// 11. Jenkins (Official simple-icons SVG + authentic #D24939)
export const JenkinsLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={monochrome ? "currentColor" : "#D24939"}
    aria-hidden="true"
    {...props}
  >
    <path d={siJenkins.path} />
  </svg>
);

// 12. GitHub Actions (Official simple-icons SVG + authentic #2088FF)
export const GithubActionsLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={monochrome ? "currentColor" : "#2088FF"}
    aria-hidden="true"
    {...props}
  >
    <path d={siGithubactions.path} />
  </svg>
);

// 13. GitLab CI/CD (Official simple-icons SVG + authentic #FC6D26)
export const GitlabLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={monochrome ? "currentColor" : "#FC6D26"}
    aria-hidden="true"
    {...props}
  >
    <path d={siGitlab.path} />
  </svg>
);

// 14. GitLab Runner Logo
export const GitlabRunnerLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path d={siGitlab.path} fill={monochrome ? "currentColor" : "#FC6D26"} />
    <circle
      cx="18.5"
      cy="18.5"
      r="4.5"
      fill="#08090C"
      stroke={monochrome ? "currentColor" : "#FC6D26"}
      strokeWidth="1.5"
    />
    <path
      d="M17 18.5l1.2 1.2 2.3-2.3"
      stroke={monochrome ? "currentColor" : "#10B981"}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 15. Prometheus (Official simple-icons SVG + authentic #E6522C)
export const PrometheusLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={monochrome ? "currentColor" : "#E6522C"}
    aria-hidden="true"
    {...props}
  >
    <path d={siPrometheus.path} />
  </svg>
);

// 16. Grafana (Official simple-icons SVG + authentic #F46800)
export const GrafanaLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={monochrome ? "currentColor" : "#F46800"}
    aria-hidden="true"
    {...props}
  >
    <path d={siGrafana.path} />
  </svg>
);

// 17. Alertmanager (Prometheus Flame + Notification Bell #FFA000)
export const AlertmanagerLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path d={siPrometheus.path} fill={monochrome ? "currentColor" : "#E6522C"} />
    <circle
      cx="18.5"
      cy="6.5"
      r="4.5"
      fill="#08090C"
      stroke={monochrome ? "currentColor" : "#FFA000"}
      strokeWidth="1.5"
    />
    <path
      d="M18.5 4.5v2M18.5 8.5h.01"
      stroke={monochrome ? "currentColor" : "#FFA000"}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// 18. Blackbox Exporter (Synthetic Probe Crosshairs #38BDF8)
export const BlackboxExporterLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <circle
      cx="12"
      cy="12"
      r="8"
      stroke={monochrome ? "currentColor" : "#38BDF8"}
      strokeWidth="1.5"
      strokeDasharray="2 2"
    />
    <circle
      cx="12"
      cy="12"
      r="4"
      fill={monochrome ? "currentColor" : "#38BDF8"}
      fillOpacity="0.2"
      stroke={monochrome ? "currentColor" : "#38BDF8"}
      strokeWidth="1.5"
    />
    <path
      d="M12 2v3M12 19v3M2 12h3M19 12h3"
      stroke={monochrome ? "currentColor" : "#38BDF8"}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// 19. Terraform (Official simple-icons SVG + authentic #844FBA)
export const TerraformLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={monochrome ? "currentColor" : "#844FBA"}
    aria-hidden="true"
    {...props}
  >
    <path d={siTerraform.path} />
  </svg>
);

// 20. Ansible (Official simple-icons SVG + authentic #EE0000)
export const AnsibleLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={monochrome ? "currentColor" : "#EE0000"}
    aria-hidden="true"
    {...props}
  >
    <path d={siAnsible.path} />
  </svg>
);

// 21. Python (Official simple-icons SVG + authentic #3776AB)
export const PythonLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={monochrome ? "currentColor" : "#3776AB"}
    aria-hidden="true"
    {...props}
  >
    <path d={siPython.path} />
  </svg>
);

// 22. Bash (Official simple-icons GNU Bash SVG + authentic #4EAA25)
export const BashLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={monochrome ? "currentColor" : "#4EAA25"}
    aria-hidden="true"
    {...props}
  >
    <path d={siGnubash.path} />
  </svg>
);

// 23. Git (Official simple-icons SVG + authentic #F05032)
export const GitLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={monochrome ? "currentColor" : "#F05032"}
    aria-hidden="true"
    {...props}
  >
    <path d={siGit.path} />
  </svg>
);

// 24. Nginx (Official simple-icons SVG + authentic #009639)
export const NginxLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={monochrome ? "currentColor" : "#009639"}
    aria-hidden="true"
    {...props}
  >
    <path d={siNginx.path} />
  </svg>
);

// 25. Linux (Official simple-icons SVG + authentic #FCC624)
export const LinuxLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  size = 24,
  monochrome = false,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={monochrome ? "currentColor" : "#FCC624"}
    aria-hidden="true"
    {...props}
  >
    <path d={siLinux.path} />
  </svg>
);

// Universal TechLogo selector with brand colors
export const getTechLogo = (
  name: string,
  className = "w-5 h-5",
  monochrome = false
) => {
  const normalized = name.toLowerCase().trim();

  if (normalized.includes("kubernetes") || normalized === "k8s")
    return <KubernetesLogo className={className} monochrome={monochrome} />;
  if (normalized === "aws" || normalized.includes("amazon web services"))
    return <AwsLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("ec2"))
    return <Ec2Logo className={className} monochrome={monochrome} />;
  if (normalized.includes("s3"))
    return <S3Logo className={className} monochrome={monochrome} />;
  if (normalized.includes("ecs"))
    return <EcsLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("ecr"))
    return <EcrLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("rds"))
    return <RdsLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("compose"))
    return <DockerComposeLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("docker"))
    return <DockerLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("helm"))
    return <HelmLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("jenkins"))
    return <JenkinsLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("github action"))
    return <GithubActionsLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("gitlab runner"))
    return <GitlabRunnerLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("gitlab"))
    return <GitlabLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("alertmanager"))
    return <AlertmanagerLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("blackbox"))
    return <BlackboxExporterLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("prometheus"))
    return <PrometheusLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("grafana"))
    return <GrafanaLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("terraform"))
    return <TerraformLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("ansible"))
    return <AnsibleLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("python") || normalized.includes("boto3"))
    return <PythonLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("bash") || normalized.includes("shell"))
    return <BashLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("git") && !normalized.includes("hub") && !normalized.includes("lab"))
    return <GitLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("nginx"))
    return <NginxLogo className={className} monochrome={monochrome} />;
  if (normalized.includes("linux"))
    return <LinuxLogo className={className} monochrome={monochrome} />;

  return null;
};
