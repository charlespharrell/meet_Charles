import { motion } from "framer-motion";
import type { Skill } from "../data/Skill";

type SkillCardProps = {
  skill: Skill;
};

function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      className="
        group
        rounded-3xl

        border
        border-(--border)

       
        dark:bg-white/5

        backdrop-blur-xl

        p-3

        transition-all
        duration-300

        hover:border-(--accent)
        hover:shadow-2xl
      "
    >
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center

          rounded-2xl

          bg-(--hover-bg)

          transition-all
          duration-300

          group-hover:bg-(--accent)
        "
      >
        <Icon
          className="
            text-3xl

            transition-all
            duration-300

            group-hover:rotate-12
            group-hover:scale-110
            group-hover:text-white
          "
        />
      </div>

      <h3
        className="
          mt-6
          text-xl
          font-semibold

          transition-colors
          duration-300

          group-hover:text-(--accent)
        "
      >
        {skill.title}
      </h3>

      <p
        className="
          mt-3

          text-sm

          

          text-zinc-500
        "
      >
        {skill.description}
      </p>
    </motion.div>
  );
}

export default SkillCard;