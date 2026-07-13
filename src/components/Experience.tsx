import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="bg-paper-dim px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 font-mono text-[11px] tracking-[0.4em] text-indigo-500 uppercase">02 — Experience</p>
          <h2 className="mb-14 font-display text-4xl font-black leading-[0.95] text-slate-900 md:text-5xl">
            On the job.
          </h2>
        </motion.div>

        <div className="space-y-8">
          {EXPERIENCE.map((entry, i) => (
            <motion.div
              key={entry.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-1 flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                <h3 className="font-display text-xl font-bold text-slate-900">{entry.role}</h3>
                <span className="font-mono text-xs tracking-wide text-indigo-500">{entry.period}</span>
              </div>
              <p className="mb-5 text-sm text-slate-500">
                {entry.org} · {entry.location}
              </p>
              <ul className="mb-6 space-y-2.5">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-[14px] leading-relaxed text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {entry.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 px-3 py-1 font-mono text-[10px] tracking-wide text-slate-500 uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
