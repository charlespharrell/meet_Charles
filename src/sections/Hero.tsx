import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Software Engineer", "Frontend Developer", "UI Engineer"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-10 ">

      {/* 🔥 HUGE BACKGROUND TEXT (NOT OVERLAYED) */}

      <h4 className="
        flex items-center justify-center
        flex-col
        inset-0
        text-center
        font-black
        select-none
        text-[7rem] 
        gap-7
        pointer-events-none
      "
      >
        <span>FRONTEND</span>
          <span>ENGINEER</span>
      </h4>

      {/* MAIN CONTENT */}
      <div className="relative flex justify-between items-center w-full">


        {/* RIGHT SIDE - PERSONAL INFO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          
            
            <p className="text-zinc-500 mt-4 max-w-sm ">
             Hi! I'm Chares, and I build clean, interactive 
             and scalable web interfaces using React and TypeScript.
            </p>
          

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;