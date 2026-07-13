import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink, Github, Lock } from "lucide-react";
import type { Project } from "../data/projects";
import { CaseStudyPanel } from "./CaseStudyPanel";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasCaseStudy = Boolean(project.caseStudy);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div
        className="h-[3px] w-full rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
      />

      <div className="p-6 md:p-8">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 font-mono text-[11px] tracking-[0.2em] text-slate-400 uppercase">{project.period}</p>
            <h3 className="font-display text-xl font-bold text-slate-900 md:text-2xl">{project.title}</h3>
          </div>
          {project.private ? (
            <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-mono text-[10px] tracking-wide text-slate-500 uppercase">
              <Lock size={11} /> Private
            </span>
          ) : project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 text-slate-400 transition-colors hover:text-indigo-500"
              aria-label={`${project.title} on GitHub`}
            >
              <Github size={20} />
            </a>
          ) : null}
        </div>

        <p className="mb-3 text-[13px] font-medium" style={{ color: project.accent }}>
          {project.tagline}
        </p>
        <p className="mb-6 text-[14px] leading-relaxed text-slate-600">{project.description}</p>

        <div className="mb-2 flex flex-wrap gap-1.5">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-1 font-mono text-[10px] tracking-wide text-slate-500 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {hasCaseStudy && (
          <button
            onClick={() => setExpanded((e) => !e)}
            className="mt-6 flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wide text-indigo-500 hover:text-indigo-600"
          >
            {expanded ? "Hide case study" : "Read case study"}
            <ChevronDown size={14} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}

        {!hasCaseStudy && project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wide text-indigo-500 hover:text-indigo-600"
          >
            View repository
            <ExternalLink size={13} />
          </a>
        )}
      </div>

      {expanded && project.caseStudy && (
        <CaseStudyPanel project={{ ...project.caseStudy, accent: project.accent }} />
      )}
    </motion.div>
  );
}
