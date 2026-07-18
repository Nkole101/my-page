import { AnimatePresence, motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import type { PwaPlatformGuide } from "../data/projects";

export function PwaGuidePanel({ guide, accent }: { guide: PwaPlatformGuide[]; accent: string }) {
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
          <div className="mb-6 flex items-center gap-2 text-text-secondary">
            <Smartphone size={15} />
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">Install as an app</h4>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {guide.map((entry) => (
              <div key={entry.platform} className="glass rounded-2xl p-4">
                <p className="mb-3 text-sm font-semibold text-text">{entry.platform}</p>
                <ol className="space-y-2">
                  {entry.steps.map((step, i) => (
                    <li key={i} className="flex gap-2.5 text-xs leading-relaxed text-text-secondary">
                      <span
                        className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-bg"
                        style={{ background: accent }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
