import {navItems} from '../data/navItems'
import myImage from '../assets/myimage.jfif'
import { motion, type Variants } from "framer-motion";

const sidebarVariants: Variants = {
  hidden: {
    x: -80,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Sidebar = () => {
  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="hidden sm:flex fixed left-0 top-0 h-screen w-50 w-64 flex-col 
                  justify-between px-6 py-4  text-(--text) border-r border-(--border)
                  backdrop-blur-xl bg-(--bg)/85"
                  // transition-all duration-500 bg-(--bg)
          
      >
      <motion.div
        variants={itemVariants}
        className="flex justify-center"
      >
        <div className="relative">

          <motion.img
            whileHover={{ scale: 1.05, rotate: 2,}}
            transition={{type: "spring", stiffness: 250, damping: 15,}}
            src={myImage} alt="Charles Udenwoke"
            className="h-38 w-38 rounded-full object-cover border-4 lg:border-10 border-(--border)
                     transition-all duration-500 hover:scale-105 hover:rotate-2 shadow-[0_12px_35px_rgba(0,0,0,0.45)]"
          />
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants} className= "text-center mt-3"
        >
        <h1 className="text-2xl  font-bold tracking-wide"> Charles </h1>
        <p className="text-sm text-zinc-500"> Frontend Engineer </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-2 h-1 w-full rounded-full bg-(--accent)"
      />

      <nav className="mt-2 flex flex-col gap-0" >
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.a
              variants={itemVariants}
              key={item.name}
              href={item.href}
              className=" group flex items-center justify-start gap-4 px-4 py-3 rounded-xl 
              hover:bg-(--hover-bg) hover:translate-x-1 transition-all duration-300 " >
              
              <Icon
                size={20}
                className=" group-hover:scale-110 transition-transform
                " />
              <span className=" group-hover:text-(--accent)">{item.name}</span>
            </motion.a>
          );
        })}
      </nav>

      {/* Footer */}
     <motion.div
        variants={itemVariants}
        className="text-sm text-zinc-500"
        >
        © 2026
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;