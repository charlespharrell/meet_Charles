import ProjectCard from "../Components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-(--border) py-20 px-0 lg:px-0"
    >
      <div className="mx-auto max-w-7xl">

        <span className="text-(--accent) uppercase tracking-[0.2em] font-semibold">
          Featured Work
        </span>

        <h2 className="mt-4 text-5xl font-bold">
          Selected Projects
        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
          A collection of projects showcasing my approach to building
          modern, responsive, and user-focused web applications.
        </p>

        <div  className="
    mt-20

    grid

    grid-cols-1
    xl:grid-cols-2

    gap-x-14
    gap-y-20
  ">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
            //   reverse={index % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;