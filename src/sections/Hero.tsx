import { motion } from "framer-motion";
import myImage from "../assets/myimage.jfif";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative px-10 lg:px-5 py-20 md:py-10 border-b border-(--border)"
    >
      <div className="max-w-5xl">

        {/* Meet Charles */}

     <motion.div
  initial={{ x: -60, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="md:mb-8 mb-18"
>
  <p
    className="
      text-lg
      md:text-xl
      font-medium
      
      
      text-(--muted)
    "
  >
  Meet
  </p>

  <motion.h2
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.15, duration: 0.6 }}
    className="
      mt-1
      text-3xl
      sm:text-6xl
      font-black
      leading-none
      text-(--accent)
    "
  >
    Charles
  </motion.h2>
</motion.div>

        {/* A FRONTEND */}

        <motion.h1
  initial={{ y: 80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    delay: 0.4,
    duration: 0.8,
    ease: "easeOut",
  }}
  className="
    text-5xl
    sm:text-6xl
    md:text-7xl
    font-black  
    text-center
  "
>
  A{" "} 

  {/* Mobile Version */}
  <span className="inline-flex md:hidden items-center">
     FR

    <motion.span
  animate={{
    rotate: [-10, 10, -10],
    y: [0, -2, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    relative
    mx-1
    inline-flex
    h-10
    w-10
    overflow-hidden
    rounded-full
    border-2
    border-(--accent)
    shadow-lg
  "
>
      <img
        src={myImage}
        alt="Charles"
        className="h-full w-full object-cover"
      />
    </motion.span>

    NTEND
  </span>

  {/* Desktop Version */}
  <span className="hidden md:inline">
    FRONTEND
  </span>
</motion.h1>

        {/* ENGINEER */}

        <motion.h1
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            type: "spring",
            stiffness: 120,
          }}
          className="
            text-7xl
            md:text-9xl
            font-black
            leading-none
            flex
            justify-center
            text-(--accent)
            
          "
        >
          ENGINEER
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 0.7,
          }}
          className="
            mt-10
            max-w-xl
            text-lg
            leading-8
           text-center
           block
           m-auto
            text-zinc-400
          
          "
        >
          With 3 years experience building scalable, interactive web applications using
          React, TypeScript and modern frontend technologies.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 0.7,
          }}
          className="mt-20 md:mt-10 justify-center flex gap-5"
        >
          <a
            href="#projects"
            className="
              rounded-xl
              bg-(--accent)
              px-7
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="
              rounded-xl
              border
              border-(--border)
              px-7
              py-4
              font-semibold
              transition-all
              duration-300
              hover:bg-(--hover-bg)
            "
          >
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;