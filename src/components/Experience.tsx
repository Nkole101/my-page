import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/experience";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

export function Experience() {
  return (
    <div className="mx-auto w-full max-w-4xl" aria-labelledby="experience-heading">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-accent">Experience</p>
        <h2
          id="experience-heading"
          className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-text"
        >
          Professional timeline
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="relative"
      >
        <div className="absolute bottom-0 left-[11px] top-2 w-px bg-border-subtle md:left-[15px]" />

        {EXPERIENCE.map((entry, i) => (
          <motion.div key={entry.role} variants={fadeUp} transition={{ delay: i * 0.1 }} className="relative pb-8 pl-10 md:pl-12">
            <div className="absolute left-0 top-2 flex h-[22px] w-[22px] items-center justify-center rounded-full border border-accent/40 bg-bg md:h-[26px] md:w-[26px]">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            </div>

            <div className="glass rounded-2xl p-6 md:p-7">
              <div className="mb-1 flex flex-col justify-between gap-1 md:flex-row md:items-start">
                <h3 className="font-display text-lg font-semibold text-text">{entry.role}</h3>
                <span className="shrink-0 text-xs font-medium text-accent">{entry.period}</span>
              </div>
              <p className="mb-4 text-xs text-text-secondary">
                {entry.org} · {entry.location}
              </p>
              <ul className="mb-4 space-y-2">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-xs leading-relaxed text-text-secondary md:text-sm">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {entry.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wide text-text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
