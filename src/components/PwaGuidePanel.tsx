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
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="border-t border-slate-200 px-6 pt-6 pb-2 md:px-8">
          <div className="mb-6 flex items-center gap-2 text-slate-500">
            <Smartphone size={15} />
            <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase">Install as an app</h4>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {guide.map((entry) => (
              <div key={entry.platform} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="mb-3 text-sm font-semibold text-slate-900">{entry.platform}</p>
                <ol className="space-y-2">
                  {entry.steps.map((step, i) => (
                    <li key={i} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-600">
                      <span
                        className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full font-mono text-[9px] font-bold text-white"
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
