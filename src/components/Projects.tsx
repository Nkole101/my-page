import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="bg-paper-dim px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 font-mono text-[11px] tracking-[0.4em] text-indigo-500 uppercase">04 — Projects</p>
          <h2 className="mb-6 font-display text-4xl font-black leading-[0.95] text-slate-900 md:text-5xl">
            Featured <span className="text-gradient">work.</span>
          </h2>
          <p className="mb-14 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            I also design and deploy bespoke portfolio websites for freelance clients end-to-end — from
            questionnaire to GitHub Pages deployment — with 3 sites live to date.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
