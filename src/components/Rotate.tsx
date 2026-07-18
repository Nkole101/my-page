import * as motion from "motion/react-client";

export function Rotate() {
  return (
    <motion.div
      className="h-[100px] w-[100px] rounded-[5px] bg-accent"
      animate={{ rotate: 360 }}
      transition={{ duration: 1 }}
    />
  );
}
