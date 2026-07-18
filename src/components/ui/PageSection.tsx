import type { ReactNode } from "react";

export type PageTheme = "hero" | "lime" | "blue" | "light" | "forest";

interface PageSectionProps {
  id: string;
  theme: PageTheme;
  children: ReactNode;
  className?: string;
  center?: boolean;
  scrollable?: boolean;
}

export function PageSection({
  id,
  theme,
  children,
  className = "",
  center = true,
  scrollable = false,
}: PageSectionProps) {
  return (
    <section
      id={id}
      data-theme={theme}
      data-page
      className={`page-section snap-start snap-always min-h-dvh w-full ${className}`}
    >
      <div
        className={`page-section-inner relative ${center ? "flex min-h-dvh flex-col justify-center" : "min-h-dvh"} ${
          scrollable ? "overflow-y-auto" : "overflow-hidden"
        } px-6 py-24 lg:px-8 lg:py-28`}
      >
        {children}
      </div>
    </section>
  );
}
