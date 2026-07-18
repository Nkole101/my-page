import { GlassCard } from "./GlassCard";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <GlassCard delay={delay} className="p-6 md:p-8">
      <div className="font-display text-3xl font-semibold tracking-tight text-accent md:text-4xl">{value}</div>
      <p className="mt-2 text-sm leading-snug text-text-secondary">{label}</p>
    </GlassCard>
  );
}
