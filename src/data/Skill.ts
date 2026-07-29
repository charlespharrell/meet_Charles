import { VscVscode } from "react-icons/vsc";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiPostman,
} from "react-icons/si";

import type { IconType } from "react-icons";

export type Skill = {
  title: string;
  description: string;
  icon: IconType;
};

export const frontendSkills: Skill[] = [
  {
    title: "React",
    description: "Building modern user interfaces.",
    icon: FaReact,
  },
  {
    title: "TypeScript",
    description: "Type-safe JavaScript development.",
    icon: SiTypescript,
  },
  {
    title: "JavaScript",
    description: "Modern ES6+ programming.",
    icon: SiJavascript,
  },
  {
    title: "Next.js",
    description: "Production-ready React framework.",
    icon: SiNextdotjs,
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework.",
    icon: SiTailwindcss,
  },
  {
    title: "HTML5",
    description: "Semantic web structure.",
    icon: FaHtml5,
  },
  {
    title: "CSS3",
    description: "Responsive and modern styling.",
    icon: FaCss3Alt,
  },
  {
    title: "Framer Motion",
    description: "Beautiful UI animations.",
    icon: SiFramer,
  },
];

export const toolSkills: Skill[] = [
  {
    title: "Git",
    description: "Version control.",
    icon: FaGitAlt,
  },
  {
    title: "GitHub",
    description: "Code collaboration.",
    icon: FaGithub,
  },
  {
    title: "VS Code",
    description: "Primary code editor.",
    icon: VscVscode
  },
  {
    title: "Vite",
    description: "Fast frontend tooling.",
    icon: SiVite,
  },
  {
    title: "Figma",
    description: "UI design collaboration.",
    icon: FaFigma,
  },
  {
    title: "Postman",
    description: "API testing.",
    icon: SiPostman,
  },
];