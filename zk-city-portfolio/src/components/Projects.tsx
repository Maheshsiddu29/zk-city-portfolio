import React from "react";
import { Section } from "./Section";

type Project = {
  title: string;
  period: string;
  tagline: string;
  metrics: string[];
  tech: string[];
};

const projects: Project[] = [
  {
    title: "MediVault — Healthcare Data Exchange Platform",
    period: "Mar 2024 – May 2024",
    tagline:
      "Polygon-based dApp for secure medical record processing across providers.",
    metrics: [
      "30% enhanced security & compliance verification by 3 independent auditors",
      "Optimized contracts handling 500K+ daily tx with 40% gas reduction",
      "Confirmation time improved from 45s to 12s",
    ],
    tech: ["Polygon", "Solidity", "Hardhat", "React", "TypeScript"],
  },
  {
    title: "Healthcare Security with ZKP",
    period: "Feb 2025 – May 2025",
    tagline:
      "ZKP-based authentication and sharded storage for patient data protection.",
    metrics: [
      "40% reduction in identified breach risks",
      "All independent penetration tests passed",
      "15% faster response under peak load with 2K+ simulated users",
    ],
    tech: ["ZKP", "Circom", "Groth16", "Polygon", "Sharding"],
  },
  {
    title: "Ethereum Healthcare System",
    period: "Feb 2019 – Jun 2019",
    tagline:
      "Early blockchain prototype for end-to-end healthcare record integrity.",
    metrics: [
      "70% faster record retrieval versus baseline",
      "99.9% data integrity verification",
      "$25K annual verification cost reduction per provider",
    ],
    tech: ["Ethereum", "Solidity", "Web3.js"],
  },
];

export const Projects: React.FC = () => {
  return (
    <Section id="projects" label="Selected Projects">
      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-white/5 bg-surface p-6 shadow-sm transition hover:border-accent/60 hover:shadow-lg"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <span className="text-xs text-white/50">{project.period}</span>
            </div>
            <p className="mt-2 text-sm text-white/70">{project.tagline}</p>
            <ul className="mt-3 space-y-1 text-xs text-white/60">
              {project.metrics.map((m) => (
                <li key={m}>• {m}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};
