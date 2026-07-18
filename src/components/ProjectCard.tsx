import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink, Github, Lock, Smartphone } from "lucide-react";
import type { Project } from "../data/projects";
import { fadeUp } from "../lib/motion";
import { CaseStudyPanel } from "./CaseStudyPanel";
import { PwaGuidePanel } from "./PwaGuidePanel";
import { AnimatedButton } from "./ui/AnimatedButton";
import { ProjectPreviewIcon } from "./ui/ProjectPreviewIcon";

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
      className="glass overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
    >
      <div
        className="relative aspect-[16/9] overflow-hidden border-b border-border-subtle"
        style={{ background: project.previewGradient }}
      >
        {project.previewIcon && (
          <ProjectPreviewIcon
            src={`${import.meta.env.BASE_URL}${project.previewIcon}`}
            alt=""
            variant={project.previewIconVariant ?? "app"}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/35 to-bg/10" />
        <div className="absolute inset-0 flex items-end p-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-text-secondary">{project.previewLabel}</p>
            <p className="mt-1 font-display text-base font-semibold text-text">
              {project.title.split("—")[0].trim()}
            </p>
          </div>
        </div>
        {project.private && (
          <span className="absolute right-3 top-3 flex items-center gap-1 text-[10px] uppercase tracking-wide text-text-secondary">
            <Lock size={11} /> Private
          </span>
        )}
      </div>

      <div className="p-5">
        <p className="text-[10px] uppercase tracking-wider text-accent">{project.period}</p>
        <h3 className="mt-1 font-display text-lg font-semibold text-text">{project.title}</h3>
        <p className="mt-1 text-xs text-text-secondary">{project.tagline}</p>
        <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-text-secondary">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
          {project.tech.slice(0, 5).map((tag) => (
            <span key={tag} className="text-[10px] text-text-muted">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-5">
          {project.liveUrl && (
            <AnimatedButton href={project.liveUrl} external variant="primary" icon={<ExternalLink size={12} />}>
              Live demo
            </AnimatedButton>
          )}
          {project.repoUrl && (
            <AnimatedButton href={project.repoUrl} external variant="secondary" icon={<Github size={12} />}>
              GitHub
            </AnimatedButton>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-4">
          {hasCaseStudy && (
            <button
              type="button"
              onClick={() => setExpanded((e) => (e === "case-study" ? null : "case-study"))}
              className="flex items-center gap-1 text-[10px] uppercase tracking-[0.14em] text-accent hover:text-accent-light"
            >
              {expanded === "case-study" ? "Hide case study" : "Case study"}
              <ChevronDown size={12} className={`transition-transform ${expanded === "case-study" ? "rotate-180" : ""}`} />
            </button>
          )}
          {hasPwaGuide && (
            <button
              type="button"
              onClick={() => setExpanded((e) => (e === "pwa" ? null : "pwa"))}
              className="flex items-center gap-1 text-[10px] uppercase tracking-[0.14em] text-text-secondary hover:text-text"
            >
              <Smartphone size={11} />
              Install guide
              <ChevronDown size={12} className={`transition-transform ${expanded === "pwa" ? "rotate-180" : ""}`} />
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
