import { Home, User, Briefcase, Code2, FolderGit2, Mail} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  name: string;
  icon: LucideIcon;
  href: string;
};

export const navItems: NavItem[] = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "About", icon: User, href: "#about" },
  { name: "Experience", icon: Briefcase, href: "#experience"},
//   { name: "Services", icon: Wrench, href: "#services"},
  { name: "Skills", icon: Code2, href: "#skills" },
  { name: "Projects", icon: FolderGit2, href: "#projects" },
  { name: "Contact", icon: Mail, href: "#contact" },
];