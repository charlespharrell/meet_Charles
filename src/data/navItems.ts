import { Home, User, Briefcase, Code2, FolderGit2, Mail} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
   id: string;
  name: string;
  icon: LucideIcon;
  href: string;
};

export const navItems: NavItem[] = [
  { id: "home", name: "Home", icon: Home, href: "#home" },
  { id: "about", name: "About", icon: User, href: "#about" },
  { id: "experience", name: "Experience", icon: Briefcase, href: "#experience" },
  { id: "skills", name: "Skills", icon: Code2, href: "#skills" },
  { id: "projects", name: "Projects", icon: FolderGit2, href: "#projects" },
  { id: "contact", name: "Contact", icon: Mail, href: "#contact" },
];