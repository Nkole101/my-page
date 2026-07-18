import type { ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface AnimatedButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  download?: boolean;
  className?: string;
  icon?: ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-bg font-semibold hover:bg-accent-hover",
  secondary:
    "glass text-text border-border-subtle hover:border-accent/30 hover:bg-white/[0.03]",
  ghost: "text-text-secondary hover:text-text hover:bg-white/[0.04]",
};

export function AnimatedButton({
  href,
  children,
  variant = "primary",
  external,
  download,
  className = "",
  icon,
}: AnimatedButtonProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download || undefined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-none px-6 py-3.5 text-sm transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {icon}
      {children}
    </motion.a>
  );
}
