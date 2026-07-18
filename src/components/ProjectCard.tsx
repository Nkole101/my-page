import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink, Github, Lock, Smartphone } from "lucide-react";
import type { Project } from "../data/projects";
import { fadeUp } from "../lib/motion";
import { CaseStudyPanel } from "./CaseStudyPanel";
import { PwaGuidePanel } from "./PwaGuidePanel";
import { AnimatedButton } from "./ui/AnimatedButton";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState<"case-study" | "pwa" | null>(null);
  const hasCaseStudy = Boolean(project.caseStudy);
  const hasPwaGuide = Boolean(project.pwaGuide?.length);

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={fadeUp}
      transition={{ delay: index * 0.1 }}
      className="group glass overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]"
    >
      <div
        className="relative aspect-[16/10] overflow-hidden border-b border-border-subtle"
        style={{ background: project.previewGradient }}
      >
        <div className="absolute inset-0 flex items-end p-6 md:p-8">
          <div className="glass rounded-2xl px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">{project.previewLabel}</p>
            <p className="mt-1 font-display text-lg font-semibold text-text">{project.title.split("—")[0].trim()}</p>
          </div>
        </div>
        {project.private && (
          <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-xl bg-bg/60 px-3 py-1.5 text-xs font-medium text-text-secondary backdrop-blur-sm">
            <Lock size={12} /> Private
          </span>
        )}
      </div>

      <div className="p-6 md:p-8">
        <div className="mb-2 flex items-center justify-between gap-4">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">{project.period}</p>
        </div>

        <h3 className="font-display text-xl font-semibold leading-snug text-text md:text-2xl">{project.title}</h3>
        <p className="mt-2 text-sm font-medium text-text-secondary">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-text-secondary">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-xl border border-border-subtle bg-surface/80 px-3 py-1 text-xs font-medium text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl && (
            <AnimatedButton
              href={project.liveUrl}
              external
              variant="primary"
              icon={<ExternalLink size={15} />}
              className="!px-5 !py-2.5 !text-xs"
            >
              Live demo
            </AnimatedButton>
          )}
          {project.repoUrl && (
            <AnimatedButton
              href={project.repoUrl}
              external
              variant="secondary"
              icon={<Github size={15} />}
              className="!px-5 !py-2.5 !text-xs"
            >
              GitHub
            </AnimatedButton>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          {hasCaseStudy && (
            <button
              type="button"
              onClick={() => setExpanded((e) => (e === "case-study" ? null : "case-study"))}
              className="flex items-center gap-1.5 text-xs font-medium text-accent transition-colors hover:text-accent-light"
            >
              {expanded === "case-study" ? "Hide case study" : "Read case study"}
              <ChevronDown size={14} className={`transition-transform ${expanded === "case-study" ? "rotate-180" : ""}`} />
            </button>
          )}
          {hasPwaGuide && (
            <button
              type="button"
              onClick={() => setExpanded((e) => (e === "pwa" ? null : "pwa"))}
              className="flex items-center gap-1.5 text-xs font-medium text-text-secondary transition-colors hover:text-text"
            >
              <Smartphone size={13} />
              {expanded === "pwa" ? "Hide install guide" : "Install guide"}
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
    </motion.article>
  );
}
