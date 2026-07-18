import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./ui/SectionHeader";
import { staggerContainer } from "../lib/motion";

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 lg:px-8 lg:py-36" aria-labelledby="projects-heading">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Featured work"
          title="Selected projects"
          description="Production systems and shipped products — from enterprise ERP customisations to full-stack applications deployed for real users."
        />
        <h2 id="projects-heading" className="sr-only">
          Featured projects
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid gap-8 lg:grid-cols-2"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
