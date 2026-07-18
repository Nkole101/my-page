import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ label, title, description, align = "left" }: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className={centered ? "mx-auto mb-16 max-w-2xl text-center" : "mb-16 max-w-2xl"}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{label}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-text md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed text-text-secondary ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
