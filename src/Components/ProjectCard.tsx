import { motion } from "framer-motion";
import { ArrowUpRight,  } from "lucide-react";

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
  transition={{
    duration: 0.7,
    ease: "easeOut",
  }}
  className="
    group
    flex
    flex-col
    md:flex-row
    gap-4
    md:items-start
    items-center

    
   hover:text-(--accent)
  "
>
      {/* IMAGE */}

      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative shrink-0"
      >
        {/* Glow */}

        <div
          className="
            absolute
            inset-0

            rounded-3xl

            bg-(--accent)

            opacity-20

            blur-[80px]

            scale-90
          "
        />

        <motion.img
           transition={{
    type: "spring",
    stiffness: 220,
  }}
          src={image}
          alt={title}
          className="
            relative

  md:h-24
  md:w-34

  

  object-cover

  

  border
  border-(--border)

  transition-transform
  duration-500

  group-hover:scale-105
          "
        />
      </motion.div>

      {/* TEXT */}

      <motion.div
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.15,
        }}
        className="flex-1"
      >
        <p
          className="
            uppercase
            tracking-[0.2em]
            text-xs
            font-semibold
            text-(--accent)
            
          "
        >
          {category}
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {title}
        </h3>

        <p
          className="
            mt-4
            leading-5
            text-zinc-400
          "
        >
          {description}
        </p>

        {/* Tech */}

        <div
          className="
            mt-5

            flex

            flex-wrap

            gap-2
          "
        >
          {tech.map((item) => (
            <span
              key={item}
              className="
                rounded-full

                border

                border-(--border)

                bg-(--hover-bg)

                px-3
                py-1.5

                text-xs
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}

        <div
          className="
            mt-6

            flex

            gap-6
          "
        >
          <a
            href={live}
            target="_blank"
            className="
              flex
              items-center
              gap-2

              text-(--accent)

              font-semibold

              transition-all

              hover:gap-3
            "
          >
            Live Demo

            <ArrowUpRight size={18} />
          </a>

          <a
            href={github}
            target="_blank"
            className="
              flex
              items-center
              gap-2

              font-semibold

              transition-all

              hover:gap-3
            "
          >
            GitHub

            {/* <Github size={18} /> */}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;