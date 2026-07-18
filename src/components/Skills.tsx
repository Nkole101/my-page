import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../data/skills";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

export function Skills() {
  return (
    <div className="mx-auto w-full max-w-6xl" aria-labelledby="skills-heading">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-accent">Skills</p>
        <h2
          id="skills-heading"
          className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-text"
        >
          Technical expertise
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {SKILL_GROUPS.map((group, i) => (
          <motion.div
            key={group.category}
            variants={fadeUp}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl p-5"
          >
            <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {group.items.map((item) => (
                <span key={item} className="text-xs text-text-secondary">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
