import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink, Github, Lock, Smartphone } from "lucide-react";
import type { Project } from "../data/projects";
import { CaseStudyPanel } from "./CaseStudyPanel";
import { PwaGuidePanel } from "./PwaGuidePanel";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState<"case-study" | "pwa" | null>(null);
  const hasCaseStudy = Boolean(project.caseStudy);
  const hasPwaGuide = Boolean(project.pwaGuide?.length);

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
          <div className="flex shrink-0 items-center gap-3">
            {project.private && (
              <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-mono text-[10px] tracking-wide text-slate-500 uppercase">
                <Lock size={11} /> Private
              </span>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition-colors hover:text-indigo-500"
                aria-label={`Open ${project.title} website`}
              >
                <ExternalLink size={19} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition-colors hover:text-indigo-500"
                aria-label={`${project.title} on GitHub`}
              >
                <Github size={20} />
              </a>
            )}
          </div>
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

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wide text-indigo-500 hover:text-indigo-600"
            >
              Visit website
              <ExternalLink size={13} />
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wide text-slate-500 hover:text-slate-700"
            >
              View repository
              <Github size={13} />
            </a>
          )}

          {hasCaseStudy && (
            <button
              onClick={() => setExpanded((e) => (e === "case-study" ? null : "case-study"))}
              className="flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wide text-indigo-500 hover:text-indigo-600"
            >
              {expanded === "case-study" ? "Hide case study" : "Read case study"}
              <ChevronDown size={14} className={`transition-transform ${expanded === "case-study" ? "rotate-180" : ""}`} />
            </button>
          )}

          {hasPwaGuide && (
            <button
              onClick={() => setExpanded((e) => (e === "pwa" ? null : "pwa"))}
              className="flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wide text-indigo-500 hover:text-indigo-600"
            >
              <Smartphone size={13} />
              {expanded === "pwa" ? "Hide install guide" : "Install as an app"}
              <ChevronDown size={14} className={`transition-transform ${expanded === "pwa" ? "rotate-180" : ""}`} />
            </button>
          )}
        </div>
      </div>

      {expanded === "case-study" && project.caseStudy && (
        <CaseStudyPanel project={{ ...project.caseStudy, accent: project.accent }} />
      )}
      {expanded === "pwa" && project.pwaGuide && (
        <PwaGuidePanel guide={project.pwaGuide} accent={project.accent} />
      )}
    </motion.div>
  );
}
