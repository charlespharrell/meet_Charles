import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {  LuGithub } from "react-icons/lu";

type ProjectProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
};

function ProjectCard({
  title,
  category,
  description,
  image,
  tech,
  live,
  github,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group flex flex-col md:flex-row gap-4 md:items-start items-center
            hover:text-(--accent)"
    >
      {/* IMAGE */}

      <div
        className="relative shrink-0"
      >
        {/* Glow - cheaper box-shadow instead of blur-[80px] */}

        <div
          className="absolute inset-0 rounded-3xl bg-(--accent) opacity-10 scale-90 shadow-[0_0_40px_rgba(167,139,250,0.25)]"
          aria-hidden="true"
        />
        <img
          src={image}
          alt={title}
          width={340}
          height={300}
          loading="lazy"
          decoding="async"
          style={{ aspectRatio: '340 / 300' }}
          className="relative md:h-30 md:w-34 object-cover border border-(--border)
                                transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* TEXT */}

      <div
        className="flex-1"
      >
        <p className=" uppercase tracking-[0.2em] text-xs font-semibold text-(--accent)">
          {category}
        </p>

        <h3 className="mt-2 text-2xl font-bold">{title}</h3>

        <p className=" mt-4 leading-5 text-zinc-400">{description}</p>

        {/* Tech */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-(--border) bg-(--hover-bg)
                        px-3 py-1.5 text-xs"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}

        <div className="mt-6 flex gap-6 ">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-2 text-(--accent) font-semibold transition-all
                         hover:gap-3">
            Live Demo
            <ArrowUpRight size={18} />
          </a>

          <a href={github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold transition-all hover:gap-3">
                GitHub
                <LuGithub/>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
