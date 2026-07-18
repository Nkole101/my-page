import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";

const CERTIFICATIONS = [
  "CCNA – Introduction to Networks",
  "IT Essentials – PC Hardware and Software",
  "NDG Linux Essentials",
  "NDG Linux Unhatched",
];

export function Education() {
  return (
    <section id="education" className="relative px-6 py-28 lg:px-8 lg:py-36" aria-labelledby="education-heading">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Education"
          title="Foundations & certifications"
          description="Academic background and industry credentials that underpin my engineering practice."
        />
        <h2 id="education-heading" className="sr-only">
          Education and certifications
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="space-y-6"
        >
          <GlassCard className="flex gap-5 p-8 md:p-10" delay={0}>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-text">
                B.Sc. Computer Science &amp; Software Engineering
              </h3>
              <p className="mt-2 text-sm text-text-secondary">University of Zambia (UNZA) · Expected Nov 2026</p>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                Concentrations in AI &amp; Modelling, Database Management Systems, and Software Development.
                Final-year capstone:{" "}
                <strong className="font-medium text-text">CCIS — Catholic Community Information System</strong>.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 md:p-10" delay={0.1}>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Award size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold text-text">Certifications</h3>
            </div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert}
                  className="rounded-xl border border-border-subtle bg-bg/40 px-4 py-2 text-sm text-text-secondary transition-colors hover:border-accent/25 hover:text-text"
                >
                  {cert}
                </span>
              ))}
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
