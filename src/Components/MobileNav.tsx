import { motion } from "framer-motion";
import { useState } from "react";
import { navItems } from "../data/navItems";

function MobileNav() {
  const [active, setActive] = useState("Home");

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      className="fixed bottom-4 left-4 right-4 z-50 md:hidden rounded-2xl border
                 border-(--border) bg-(--card)/90 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.45)]
                 px-3 py-3">
          <div className="flex items-center justify-between">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.name;

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className="relative flex flex-col items-center"
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Floating Label */}

                  <motion.span
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? -8 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className="absolute -top-9 rounded-lg border border-(--border) bg-(--card)
                                 px-3 py-1 text-x whitespace-nowrap pointer-events-none">
                     {item.name}
                  </motion.span>

                  {/* Icon */}

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full
                               transition-all duration-300
                      ${
                        isActive
                          ? "bg-(--accent) text-white"
                          : "hover:bg-(--hover-bg)"
                      }
                    `}
                  >
                    <Icon size={20} />
                  </div>
                </motion.a>
              );
            })}
          </div>
    </motion.nav>
  );
}

export default MobileNav;