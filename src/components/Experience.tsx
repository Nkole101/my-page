import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/experience";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import { SectionHeader } from "./ui/SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 lg:px-8 lg:py-36" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Experience"
          title="Professional timeline"
          description="Hands-on production work shipping ERP customisations and supporting enterprise deployments."
        />
        <h2 id="experience-heading" className="sr-only">
          Work experience
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="relative space-y-0"
        >
          <div className="absolute bottom-0 left-[11px] top-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent md:left-[15px]" />

          {EXPERIENCE.map((entry, i) => (
            <motion.div key={entry.role} variants={fadeUp} transition={{ delay: i * 0.1 }} className="relative pb-12 pl-10 md:pl-12">
              <div className="absolute left-0 top-2 flex h-[22px] w-[22px] items-center justify-center rounded-full border border-accent/40 bg-bg md:h-[30px] md:w-[30px]">
                <div className="h-2 w-2 rounded-full bg-accent" />
              </div>

              <div className="glass rounded-3xl p-8 transition-all hover:border-white/10">
                <div className="mb-1 flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <h3 className="font-display text-xl font-semibold text-text">{entry.role}</h3>
                  <span className="shrink-0 text-sm font-medium text-accent">{entry.period}</span>
                </div>
                <p className="mb-6 text-sm text-text-secondary">
                  {entry.org} · {entry.location}
                </p>
                <ul className="mb-6 space-y-3">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {entry.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-xl border border-border-subtle bg-surface/60 px-3 py-1 text-xs font-medium text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
