import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

const CERTIFICATIONS = [
  "CCNA – Introduction to Networks",
  "IT Essentials – PC Hardware and Software",
  "NDG Linux Essentials",
  "NDG Linux Unhatched",
];

export function Education() {
  return (
    <div className="mx-auto w-full max-w-4xl" aria-labelledby="education-heading">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-accent">Education</p>
        <h2
          id="education-heading"
          className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-text"
        >
          Foundations & certifications
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="space-y-4"
      >
        <motion.div variants={fadeUp} className="glass flex gap-4 rounded-2xl p-6 md:p-7">
          <GraduationCap className="mt-1 shrink-0 text-accent" size={22} />
          <div>
            <h3 className="font-display text-lg font-semibold text-text">
              B.Sc. Computer Science &amp; Software Engineering
            </h3>
            <p className="mt-1 text-xs text-text-secondary">University of Zambia (UNZA) · Expected Nov 2026</p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Final-year capstone:{" "}
              <strong className="font-medium text-text">CCIS — Catholic Community Information System</strong>.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="glass rounded-2xl p-6 md:p-7">
          <div className="mb-4 flex items-center gap-2">
            <Award className="text-accent" size={18} />
            <h3 className="font-display text-base font-semibold text-text">Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {CERTIFICATIONS.map((cert) => (
              <span key={cert} className="text-xs text-text-secondary">
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
