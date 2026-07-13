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
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="border-t border-slate-200 px-6 pt-6 pb-2 md:px-8">
          <div className="mb-6 flex items-start gap-3 rounded-xl bg-slate-50 p-4">
            <Lock size={16} className="mt-0.5 shrink-0 text-slate-400" />
            <p className="text-[13px] leading-relaxed text-slate-500">
              This is a private repository — a University of Zambia capstone project. The write-up below
              covers the architecture and my role; source is available on request.
            </p>
          </div>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-mono text-[11px] tracking-[0.2em] text-slate-400 uppercase">Problem</h4>
              <p className="text-[14px] leading-relaxed text-slate-600">{project.problem}</p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-[11px] tracking-[0.2em] text-slate-400 uppercase">My role</h4>
              <p className="text-[14px] leading-relaxed text-slate-600">{project.role}</p>
            </div>
          </div>

          <h4 className="mb-3 font-mono text-[11px] tracking-[0.2em] text-slate-400 uppercase">Architecture</h4>
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-stretch">
            {project.diagram.map((node, i) => (
              <div key={node.label} className="flex flex-1 items-center gap-3">
                <div className="flex-1 rounded-xl border border-slate-200 bg-white p-4">
                  <p className="mb-1 text-sm font-semibold text-slate-900">{node.label}</p>
                  <p className="text-[12px] leading-snug text-slate-500">{node.detail}</p>
                </div>
                {i < project.diagram.length - 1 && (
                  <ArrowRight size={16} className="hidden shrink-0 text-slate-300 md:block" />
                )}
              </div>
            ))}
          </div>

          <h4 className="mb-3 font-mono text-[11px] tracking-[0.2em] text-slate-400 uppercase">Key decisions</h4>
          <ul className="mb-2 space-y-3">
            {project.decisions.map((decision) => (
              <li key={decision} className="flex gap-3 text-[14px] leading-relaxed text-slate-600">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: project.accent }} />
                {decision}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
