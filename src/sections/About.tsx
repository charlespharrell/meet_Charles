import { motion } from "framer-motion";
import myImage from '../assets/myimage.jpg'
import { Download, ArrowRight } from "lucide-react";

function About() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 md:gap-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
           <div className="relative h-[520px] w-[390px]">
           <div className="absolute inset-0 rounded-3xl overflow-hidden bg-(--card) border
                 border-(--border) shadow-xl">

                <motion.img
                    src={myImage}
                    alt="Charles"
                    className="h-full w-full object-cover"
                    whileHover={{scale: 1.03,}}
                    transition={{duration: 0.4,}}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{y: [0, -10, 0],}}
                    transition={{opacity: { duration: 0.6 }, scale: { duration: 0.6 },y: {
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    },}}
                    className="absolute bottom-6 left-6 rounded-2xl border border-(--border) 
                    bg-(--card) px-7 py-5 shadow-2xl"
                    >
                    <h3 className="text-4xl font-bold text-(--accent)"> 3+</h3>
                    <p className="mt-1 text-sm text-zinc-500"> Years Exp </p>
                </motion.div>
            </div>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var-(--accent)]">
             About Me
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight">Hey there! I'm
                <span className="text-(--accent)"> Charles</span>,
                I turn ideas into interfaces that people actually enjoy using.
            </h2>

            <p className=" mt-2 leading-8 text-zinc-500">
                Frontend Engineering is more than just a skill to me. It's a passion I have, 
                building web applications and products that solves real world problem using
                modern frontend technologies. 
            </p>

           <p className=" mt-1 leading-8 text-zinc-500">
                I enjoy turning ideas into polished digital experiences while
                writing maintainable, scalable and user-focused code.
           </p>

          <div className="mt-10 flex flex-wrap gap-5">

            {/* Download CV */}
            <motion.a
                href="/Charles_Udenwoke_Resume.pdf"
                download whileHover={{y: -4,scale: 1.03,}}
                whileTap={{scale: 0.96,}}
                transition={{duration: 0.25,}}
                className="group flex items-center gap-3 rounded-xl bg-(--accent) px-3 py-4 lg:px-7 
                font-medium text-white shadow-lg "
            >
                <Download size={18}
                className="transition-transform duration-300 group-hover:translate-y-1"
                />
                <span>Download CV</span>
            </motion.a>

            {/* Contact */}
            <motion.a
                href="#contact" whileHover={{y: -4,}}
                whileTap={{scale: 0.96,}}
                transition={{duration: 0.25,}}
                className="group flex items-center gap-3 rounded-xl border border-(--accent)
                px-3 lg:px-7  py-4 font-medium text-(--accent) transition-colors duration-300 hover:bg-(--accent) hover:text-white
                "
            >
                <span>Contact Me</span>
                <ArrowRight size={18} className="transition-transform duration-30 group-hover:translate-x-1"/>
            </motion.a>

            </div>
        </motion.div>
        
    </div>
  )
}

export default About
