import { 
  Home, 
  User, 
  Code2, 
  FolderGit2, 
  Mail 
} from "lucide-react";

import type { ElementType } from "react";

type NavItem = {
  name: string;
  icon: ElementType;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "About", icon: User, href: "#about" },
  { name: "Skills", icon: Code2, href: "#skills" },
  { name: "Projects", icon: FolderGit2, href: "#projects" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

const Sidebar = () => {
  return (
    <aside
      className="
        fixed left-0 top-0 h-screen w-64 px-6 py-8 flex flex-col justify-between  bg-(--bg)
         text-(--text) border-r border-(--border)
      "
    >
      <div>
        <h1 className="text-2xl font-bold tracking-wide"> Charles </h1>
        <p className="text-sm text-zinc-500"> Frontend Engineer </p>
      </div>

      <nav className="mt-12 flex flex-col gap-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              className=" group flex items-center gap-4 px-4 py-3 rounded-xl 
              hover:bg-(--hover-bg) hover:shadow-sm hover:translate-x-1 transition-all duration-300 " >
              <Icon
                size={20}
                className=" group-hover:scale-110 transition-transform
                " />
              <span className="group-hover:text-(--accent)">
                {item.name}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="text-sm text-zinc-500">
        © 2026
      </div>
    </aside>
  );
};

export default Sidebar;