import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { staggerContainer } from "../lib/motion";

export function Projects() {
  return (
    <div className="mx-auto w-full max-w-6xl" aria-labelledby="projects-heading">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-accent">Featured work</p>
        <h2
          id="projects-heading"
          className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-text"
        >
          Selected projects
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-text-secondary">
          Production systems and shipped products — enterprise ERP work and full-stack applications.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="grid gap-6 lg:grid-cols-2"
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </motion.div>
    </div>
  );
}
