import { motion } from "framer-motion";

interface HoverNameProps {
  lines: string[];
  className?: string;
  id?: string;
}

function HoverLine({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((char, index) =>
        char === " " ? (
          <span key={`space-${index}`} className="inline-block w-[0.3em]" aria-hidden="true">
            {" "}
          </span>
        ) : (
          <motion.span
            key={`${char}-${index}`}
            className="inline-block cursor-default text-text"
            whileHover={{ y: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 420, damping: 18 }}
          >
            {char}
          </motion.span>
        ),
      )}
    </>
  );
}

export function HoverName({ lines, className = "", id }: HoverNameProps) {
  return (
    <span id={id} className={className}>
      {lines.map((line) => (
        <span key={line} className="block">
          <HoverLine text={line} />
        </span>
      ))}
    </span>
  );
}
