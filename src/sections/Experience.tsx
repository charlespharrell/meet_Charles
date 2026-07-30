import { experiences } from "../data/experience";
import ExperienceCard from "../Components/ExperienceCard";
import { motion } from "framer-motion";


function Experience() {
  return (
     <motion.div
    initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
    className="group relative ..."
  >
  
        <div className="mx-auto max-w-7xl"> 
            <span className=" text-sm uppercase tracking-[0.25em] text-(--accent) font-semibold " > Journey </span>
             <h2 className=" mt-4 text-4xl md:text-5xl font-bold " >My Experience & Growth </h2> 
              </div>
        <div
  className="
    mt-20

    grid

    grid-cols-1
    md:grid-cols-2

    gap-8
  "
>
   
  {experiences.map((experience) => (
    <ExperienceCard
      key={experience.role}
      {...experience}
    />
  ))}
</div>
    </motion.div>
  )
}

export default Experience


{/* <section
  id="experience"
  className="min-h-screen border-b border-(--border) px-8 py-20 lg:px-20"
>
  <div className="mx-auto max-w-7xl">

    <span
      className="
        text-sm
        uppercase
        tracking-[0.25em]
        text-(--accent)
        font-semibold
      "
    >
      Journey
    </span>

    <h2
      className="
        mt-4
        text-4xl
        md:text-5xl
        font-bold
      "
    >
      Experience & Growth
    </h2>

    <p
      className="
        mt-6
        max-w-2xl
        text-zinc-400
        leading-8
      "
    >
      From engineering student to frontend engineer, every opportunity
      has helped shape the way I build software today.
    </p>

  </div>
</section> */}
