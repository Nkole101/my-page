import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassCard({ children, className = "", hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      transition={{ delay }}
      whileHover={hover ? { y: -4 } : undefined}
      className={`glass rounded-2xl transition-shadow duration-300 ${hover ? "hover:border-white/10 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
