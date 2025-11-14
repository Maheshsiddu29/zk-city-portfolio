import React from "react";

interface SectionProps {
  id: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  label,
  className = "",
  children,
}) => {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 px-4 ${className}`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          {label}
        </h2>
        {children}
      </div>
    </section>
  );
};
