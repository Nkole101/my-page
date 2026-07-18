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
  primary: "text-accent font-medium hover:text-accent-light",
  secondary: "text-text-secondary font-medium hover:text-text",
  ghost: "text-text-muted font-medium hover:text-text-secondary",
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
      whileHover={{ x: 2 }}
      className={`inline-flex items-center gap-1.5 bg-transparent px-0 py-1 text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {icon && <span className="opacity-80">{icon}</span>}
      {children}
    </motion.a>
  );
}
