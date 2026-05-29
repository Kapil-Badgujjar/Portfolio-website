import type { ComponentType, CSSProperties } from "react";
import type { IconType } from "react-icons";
import { Server, Zap } from "lucide-react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiSqlalchemy,
  SiExpress,
  SiNodedotjs,
  SiPrisma,
  SiDocker,
  SiNginx,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiSupabase,
  SiFirebase,
  SiGithub,
  SiLeetcode,
  SiTailwindcss,
  SiGraphql,
  SiVercel,
  SiInstagram,
  SiGooglecloud,
  SiClaude,
  SiGooglegemini,
  SiOpenai,
  SiLangchain,
} from "react-icons/si";
import { FaAws, FaLinkedin } from "react-icons/fa6";

export const personal = {
  name: "Kapil Badgujjar",
  shortName: "Kapil",
  title: "Software Engineer",
  taglines: [
    "Software Engineer",
    "Full Stack Developer",
    "Cloud & DevOps Enthusiast",
  ],
  summary:
    "Results-driven Software Engineer with expertise in cloud-native architecture, backend automation, and full-stack development. I architect zero-touch DevOps pipelines, optimize AWS infrastructure costs, and rapidly launch revenue-generating MVPs from scratch.",
  location: "Jhajjar, Haryana, India",
  email: "kapilbadgujjar99@gmail.com",
  phone: "+91 7988220911",
  photo: "/images/main.jpeg",
  photoSecondary: "/images/secondary.jpeg",
  resumeUrl:
    process.env.NEXT_PUBLIC_RESUME_URL && process.env.NEXT_PUBLIC_RESUME_URL.length > 0
      ? process.env.NEXT_PUBLIC_RESUME_URL
      : "/resume.pdf",
};

export type SocialLink = {
  name: string;
  href: string;
  icon: IconType;
  username: string;
};

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Kapil-Badgujjar",
    icon: SiGithub,
    username: "Kapil-Badgujjar",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kapil-badgujjar/",
    icon: FaLinkedin,
    username: "kapil-badgujjar",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Kapil_Badgujjar/",
    icon: SiLeetcode,
    username: "Kapil_Badgujjar",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/its_kapil_badgujjar/",
    icon: SiInstagram,
    username: "its_kapil_badgujjar",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
  tech: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Rancholabs",
    companyUrl: "https://rancholabs.com",
    location: "IIT Delhi, New Delhi, India",
    start: "May 2024",
    end: "Present",
    tech: [
      "Node.js",
      "TypeScript",
      "AWS",
      "Docker",
      "PostgreSQL",
      "Next.js",
      "ECS Fargate",
      "Lambda",
    ],
    highlights: [
      "Architected a zero-touch Node.js provisioning pipeline using AWS SDK to dynamically deploy Dockerized environments on EC2, reducing new LMS setup time from over 24 hours to under 30 minutes.",
      "Engineered an automated resource scheduler with AWS EventBridge and Lambda to hibernate EC2 services during off-peak hours, slashing cloud infrastructure costs by 15–20%.",
      "Integrated an event-driven payment workflow using AWS Lambda, SQS, SES, and S3 — automating receipt generation and eliminating 90% of manual processing.",
      "Designed an automated lead capture and event-driven email workflow, increasing lead conversion by 20–25% and reducing missed follow-ups by 60%.",
      "Architected a role-based Inventory Management System with granular access control for courses and centers, reducing operational dependency by 30%.",
      "Implemented a complete CI/CD pipeline using GitHub Actions and AWS ECS Fargate, enabling zero-downtime deployments.",
      "Built a video optimization pipeline that converts content to HLS format, cutting load times by up to 60%.",
      "Deployed AWS WAF to mitigate DDoS attacks and secured endpoints via an API gateway, ensuring 99.9% uptime.",
      "Led end-to-end development of Kirakits (E-commerce MVP), launching in 30 days and processing 500+ orders in the first month.",
      "Managed a multi-tenant LMS hosting 30+ schools on AWS; optimized APIs and redesigned the frontend, driving a 25% increase in MAU.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "CodeQuotient",
    location: "Remote",
    start: "Jan 2023",
    end: "May 2023",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    highlights: [
      "Worked within a team of interns to develop the company's lead application end-to-end.",
      "Fixed numerous backend bugs in the legacy codebase, improving stability.",
      "Collaborated on shared modules and reviewed PRs from peers.",
    ],
  },
];

type SkillIcon = ComponentType<{ className?: string; style?: CSSProperties }>;

export type SkillGroup = {
  label: string;
  wide?: boolean;
  items: { name: string; icon: SkillIcon; color?: string; learning?: boolean }[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "C++", icon: SiCplusplus, color: "#00599c" },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Prisma", icon: SiPrisma, color: "#9ca3af" },
      { name: "SQLAlchemy", icon: SiSqlalchemy, color: "#d71f00" },
      { name: "GraphQL", icon: SiGraphql, color: "#e10098" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: FaAws, color: "#ff9900" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285f4" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "Uvicorn", icon: Server, color: "#2dd4bf" },
      { name: "uv", icon: Zap, color: "#a78bfa" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "GitHub Actions", icon: SiGithub, color: "#ffffff" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "Redis", icon: SiRedis, color: "#dc382d" },
      { name: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
    ],
  },
  {
    label: "AI & LLM",
    wide: true,
    items: [
      { name: "Claude", icon: SiClaude, color: "#d97757" },
      { name: "Gemini", icon: SiGooglegemini, color: "#8e75b2" },
      { name: "Codex", icon: SiOpenai, color: "#ffffff" },
      { name: "LangChain", icon: SiLangchain, color: "#54b98b", learning: true },
      { name: "LangGraph", icon: SiLangchain, color: "#f4a340", learning: true },
    ],
  },
];

export const concepts = [
  "Event-Driven Architecture",
  "Multi-tenant Systems",
  "REST APIs",
  "GraphQL",
  "DSA",
  "System Design",
  "CI/CD",
  "Microservices",
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Kirakits",
    tagline: "E-commerce MVP launched in 30 days",
    description:
      "End-to-end e-commerce platform built and shipped in 30 days. Handles product catalog, cart, payments, and order fulfillment.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS S3", "Stripe"],
    highlights: [
      "Launched the platform in just 30 days",
      "Processed 500+ orders within the first month",
      "Event-driven receipt generation via AWS Lambda + SES",
    ],
    liveUrl: "https://kirakits.com",
    featured: true,
  },
  {
    title: "Multi-tenant LMS Platform",
    tagline: "30+ schools, zero-touch provisioning",
    description:
      "Architected a Node.js + AWS SDK provisioning pipeline that spins up isolated Dockerized LMS environments for each school in under 30 minutes — down from 24+ hours.",
    tech: ["Node.js", "AWS EC2", "Docker", "ECS Fargate", "EventBridge"],
    highlights: [
      "Hosts 30+ schools on a multi-tenant architecture",
      "Setup time reduced from 24h → under 30 minutes",
      "20% AWS cost reduction via EventBridge hibernation",
      "25% increase in monthly active users after redesign",
    ],
    featured: true,
  },
  {
    title: "Event-Driven Payment Workflow",
    tagline: "Lambda + SQS + SES + S3",
    description:
      "Designed a fully event-driven payment and receipting workflow that fans out from a single payment event into receipt PDF generation, email dispatch, and inventory updates.",
    tech: ["AWS Lambda", "SQS", "SES", "S3", "Node.js"],
    highlights: [
      "Eliminated 90% of manual processing effort",
      "Sub-second receipt generation",
      "Decoupled from the main API — independently scalable",
    ],
  },
  {
    title: "Video Optimization Pipeline",
    tagline: "HLS transcoding for faster playback",
    description:
      "Built a high-performance video pipeline that converts uploaded content to HLS format, reducing load times by up to 60% across courses.",
    tech: ["Node.js", "FFmpeg", "AWS S3", "CloudFront"],
    highlights: [
      "60% reduction in initial load time",
      "Adaptive bitrate streaming via HLS",
      "Backed by S3 + CloudFront for global delivery",
    ],
  },
];

export const education = [
  {
    school: "Maharshi Dayanand University",
    degree: "Master of Computer Applications (MCA)",
    location: "Rohtak, Haryana",
    start: "Sept 2021",
    end: "Jul 2023",
  },
  {
    school: "Maharshi Dayanand University",
    degree: "Bachelor of Computer Applications (BCA)",
    location: "Rohtak, Haryana",
    start: "Aug 2018",
    end: "Jul 2021",
  },
];

export const achievements = [
  {
    title: "Star Developer Award",
    organization: "Rancholabs — Rewards and Recognition",
    date: "Oct 2025",
    description:
      "Recognized for outstanding contributions across DevOps automation, MVP delivery, and platform reliability.",
  },
  {
    title: "Judge — CyberCrew Hackathon",
    organization: "Jaipuria School, Melange",
    date: "2025",
    description:
      "Invited as a technical judge for school-level coding & innovation event.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
