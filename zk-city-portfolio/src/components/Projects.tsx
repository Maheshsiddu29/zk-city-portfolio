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
      "Confirmation time improved from 45s to 12s"
    ],
    tech: ["Polygon", "Solidity", "Hardhat", "React", "TypeScript"]
  },
  {
    title: "Healthcare Security with ZKP",
    period: "Feb 2025 – May 2025",
    tagline:
      "ZKP-based authentication and sharded storage for patient data protection.",
    metrics: [
      "40% reduction in identified breach risks",
      "All independent penetration tests passed",
      "15% faster response under peak load with 2K+ simulated users"
    ],
    tech: ["ZKP", "Circom", "Groth16", "Polygon", "Sharding"]
  },
  {
    title: "Ethereum Healthcare System",
    period: "Feb 2019 – Jun 2019",
    tagline:
      "Early blockchain prototype for end-to-end healthcare record integrity.",
    metrics: [
      "70% faster record retrieval versus baseline",
      "99.9% data integrity verification",
      "$25K annual verification cost reduction per provider"
    ],
    tech: ["Ethereum", "Solidity", "Web3.js"]
  }
];

export const Projects: React.FC = () => {
  return (
    <Section id="projects" label="Selected Projects">
      <p className="max-w-2xl text-sm text-white/70">
        A snapshot of systems I&apos;ve designed and shipped around healthcare,
        privacy, and immersive monitoring.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-[28px] bg-card-gradient p-[1px] shadow-glow-soft"
          >
            <article className="flex h-full flex-col rounded-[26px] bg-surface/90 p-5 backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-white">
                  {project.title}
                </h3>
                <span className="text-[11px] text-white/50">
                  {project.period}
                </span>
              </div>
              <p className="mt-2 text-xs text-white/70">{project.tagline}</p>

              <ul className="mt-3 space-y-1 text-[11px] text-white/70">
                {project.metrics.map((m) => (
                  <li key={m} className="flex gap-2">
                    <span className="mt-[5px] h-[4px] w-[4px] rounded-full bg-accent2" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </div>
        ))}
      </div>
    </Section>
  );
};
