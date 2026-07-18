import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../data/skills";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import { SectionHeader } from "./ui/SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="relative bg-surface/30 px-6 py-28 lg:px-8 lg:py-36" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Skills"
          title="Technical expertise"
          description="Deep experience across the full stack — from frontend product work to database design and ERP customisation."
        />
        <h2 id="skills-heading" className="sr-only">
          Skills and technologies
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-white/10 md:p-8"
            >
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-border-subtle bg-bg/40 px-3 py-1.5 text-sm text-text-secondary transition-colors hover:border-accent/25 hover:text-text"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
