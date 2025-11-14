import React from "react";

interface SectionProps {
  id: string;
  label: string;
  eyebrow?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  label,
  eyebrow,
  children,
}) => {
  return (
    <section id={id} className="px-4">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-card border border-white/10 bg-surface/90 shadow-soft backdrop-blur-2xl">
          {/* gradient overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute inset-px rounded-[28px] bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.30),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(251,146,60,0.28),transparent_55%)]" />
          </div>

          <div className="relative px-7 py-8 sm:px-10 sm:py-10">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-1 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
              {label}
            </h2>
            <div className="mt-6">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
