import { motion } from "framer-motion";

import SkillCard from "../Components/SkillCard";

import {
  frontendSkills,
  toolSkills,
} from "../data/Skill";

function Skills() {
  return (
    <section
      id="skills"
      className="px-0  lg:px-0"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Tech Stack
        </p>

        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
          Technologies I Work With
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-zinc-500">
          The technologies and tools I use to build responsive,
          scalable and user-focused web applications.
        </p>
      </motion.div>

      {/* FRONTEND */}

      <div className="mt-20">
        <h3 className="mb-8 text-2xl font-semibold">
          Frontend Development
        </h3>

        <div
          className="
            grid
            gap-6

            grid-cols-1

            sm:grid-cols-2

            lg:grid-cols-4
          "
        >
          {frontendSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* TOOLS */}

      <div className="mt-20">
        <h3 className="mb-8 text-2xl font-semibold">
          Tools
        </h3>

        <div
          className="
            grid
            gap-6

            grid-cols-1

            sm:grid-cols-2

            lg:grid-cols-3
          "
        >
          {toolSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;