import React from "react";
import { Section } from "./Section";

type Project = {
  title: string;
  period: string;
  tagline: string;
  metrics: { label: string; value: string }[];
  tech: string[];
};

const projects: Project[] = [
  {
    title: "MediVault — Healthcare Data Exchange Platform",
    period: "Mar 2024 – May 2024",
    tagline:
      "Polygon-based dApp for secure medical record processing across providers.",
    metrics: [
      { label: "Enhanced security", value: "30%" },
      { label: "Gas cost reduction", value: "40%" },
      { label: "Daily tx handled", value: "500K+" },
      { label: "Confirmation time", value: "12s" },
    ],
    tech: ["Polygon", "Solidity", "Hardhat", "React", "TypeScript"],
  },
  
  {
    title: "Healthcare Security with ZKP",
    period: "Feb 2025 – May 2025",
    tagline:
      "ZKP authentication and sharded storage for patient data protection.",
    metrics: [
      { label: "Breach risk ↓", value: "40%" },
      { label: "Faster response", value: "15%" },
      { label: "Concurrent users", value: "2K+" },
      { label: "Uptime", value: "99.98%" },
    ],
    tech: ["ZK-SNARKs", "Circom", "Groth16", "Polygon"],
  }
  
];

export const Projects: React.FC = () => {
  return (
    <Section
      id="projects"
      label="Featured projects"
      eyebrow="Production systems"
    >
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <article
            key={project.title}
            className={`relative overflow-hidden rounded-card border border-white/12 bg-black/70 p-6 shadow-soft backdrop-blur-xl ${
              idx === 0 ? "shadow-neon-blue" : "shadow-neon-orange"
            }`}
          >
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <div className="absolute inset-px rounded-[22px] bg-card-gradient" />
            </div>
            <div className="relative space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <span className="text-xs text-white/60">
                  {project.period}
                </span>
              </div>
              <p className="text-sm text-white/80">{project.tagline}</p>

              <div className="grid gap-3 sm:grid-cols-4">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl bg-black/55 px-3 py-3 text-center text-xs"
                  >
                    <p className="text-lg font-semibold text-neonBlue">
                      {m.value}
                    </p>
                    <p className="mt-1 text-[11px] text-white/70">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 text-[11px]">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-pill bg-black/40 px-3 py-1 text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};
