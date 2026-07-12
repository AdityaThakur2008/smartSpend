import { Target, Eye, Heart, Brain, ShieldCheck, Zap, LineChart } from "lucide-react";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress, 
  SiPostgresql, 
  SiPrisma, 
  SiGooglegemini 
} from "react-icons/si";

export const coreValues = [
  {
    id: 1,
    title: "Our Mission",
    description: "To empower individuals to take control of their finances through intelligent insights and simple tools.",
    icon: Target,
    iconColor: "text-ai",
    bgColor: "bg-ai/10",
  },
  {
    id: 2,
    title: "Our Vision",
    description: "A world where everyone makes smarter financial decisions and builds a better future.",
    icon: Eye,
    iconColor: "text-success",
    bgColor: "bg-success/10",
  },
  {
    id: 3,
    title: "Our Promise",
    description: "We're committed to security, privacy, and delivering real value through technology.",
    icon: Heart,
    iconColor: "text-warning",
    bgColor: "bg-warning/10",
  },
];

export const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Express.js", icon: SiExpress, color: "text-foreground" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "Prisma", icon: SiPrisma, color: "text-foreground" },
  { name: "Gemini AI", icon: SiGooglegemini, color: "text-[#8E75B2]" },
];

export const whyWeBuilt = [
  {
    id: 1,
    title: "AI-Powered Insights",
    description: "Get smart recommendations based on your spending patterns.",
    icon: Brain,
    iconColor: "text-ai",
    bgColor: "bg-ai/10",
  },
  {
    id: 2,
    title: "Secure & Private",
    description: "Your data is encrypted and never shared with third parties.",
    icon: ShieldCheck,
    iconColor: "text-success",
    bgColor: "bg-success/10",
  },
  {
    id: 3,
    title: "Simple & Intuitive",
    description: "A clean interface that makes finance easy for everyone.",
    icon: Zap,
    iconColor: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    id: 4,
    title: "Actionable Reports",
    description: "Beautiful reports that help you understand and improve.",
    icon: LineChart,
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
  },
];