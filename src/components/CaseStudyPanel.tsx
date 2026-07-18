import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
import type { Project } from "../data/projects";

export function CaseStudyPanel({ project }: { project: NonNullable<Project["caseStudy"]> & { accent: string } }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="border-t border-border-subtle px-6 pt-6 pb-2 md:px-8">
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-border-subtle bg-bg/40 p-4">
            <Lock size={16} className="mt-0.5 shrink-0 text-text-muted" />
            <p className="text-sm leading-relaxed text-text-secondary">
              Private repository — University of Zambia capstone. Architecture and role details below; source
              available on request.
            </p>
          </div>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">Problem</h4>
              <p className="text-sm leading-relaxed text-text-secondary">{project.problem}</p>
            </div>
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">My role</h4>
              <p className="text-sm leading-relaxed text-text-secondary">{project.role}</p>
            </div>
          </div>

          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">Architecture</h4>
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-stretch">
            {project.diagram.map((node, i) => (
              <div key={node.label} className="flex flex-1 items-center gap-3">
                <div className="glass flex-1 rounded-2xl p-4">
                  <p className="mb-1 text-sm font-semibold text-text">{node.label}</p>
                  <p className="text-xs leading-snug text-text-secondary">{node.detail}</p>
                </div>
                {i < project.diagram.length - 1 && (
                  <ArrowRight size={16} className="hidden shrink-0 text-text-muted md:block" />
                )}
              </div>
            ))}
          </div>

          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">Key decisions</h4>
          <ul className="mb-2 space-y-3">
            {project.decisions.map((decision) => (
              <li key={decision} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {decision}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
