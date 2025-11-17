import React from "react";
import { Section } from "./Section";

type Project = {
  title: string;
  period: string;
  tagline: string;
  description: string;
  role: string;
  focus: string;
  tech: string[];
  bullets: string[];
};

const projects: Project[] = [
  {
    title: "MediVault",
    period: "Mar 2024 – May 2024",
    tagline: "Healthcare data on cryptographic rails, not in random PDFs.",
    description:
      "A privacy-first healthcare dApp on Polygon where patients keep control of their records, and providers get cryptographic guarantees instead of email attachments.",
    role: "On-chain architect & full-stack dev",
    focus: "Access control · encrypted records · provider interoperability",
    tech: ["Polygon", "Solidity", "Hardhat", "React", "TypeScript"],
    bullets: [
      "Designed the on-chain model for patient, provider, and verifier roles so access rules stay transparent and enforceable.",
      "Built flows for uploading, encrypting, and selectively sharing medical data without exposing raw records on-chain.",
      "Focused on keeping the UX boring in the best way: clear states, simple actions, and no ‘crypto tourism’ for doctors.",
    ],
  },
  {
    title: "Healthcare Security with ZKP",
    period: "Feb 2025 – May 2025",
    tagline: "Zero-knowledge gates for who sees what in medical systems.",
    description:
      "An exploration into using ZK proofs for patient auth and record access — proving you’re allowed to see something without revealing every detail about who you are.",
    role: "ZK engineer & protocol designer",
    focus: "ZK auth · sharded storage · consent-driven access",
    tech: ["ZK-SNARKs", "Circom", "Groth16", "Polygon"],
    bullets: [
      "Modeled access policies as circuits instead of if-else ladders, turning messy rules into crisp constraints.",
      "Experimented with sharded storage patterns so sensitive data can live across domains without losing guarantees.",
      "Prototyped a flow where patients generate proofs locally, and backends simply verify — no extra identity hoarding.",
    ],
  },
  {
    title: "ZK Cookie",
    period: "Ongoing",
    tagline: "Targeted experiences without turning users into tracking IDs.",
    description:
      "A prototype that replaces traditional tracking cookies with zero-knowledge proofs, letting apps tailor experiences based on traits rather than raw behavioral logs.",
    role: "Research & prototype builder",
    focus: "Private personalization · predicate proofs · adtech without surveillance",
    tech: ["Circom", "snarkjs", "Node.js", "TypeScript"],
    bullets: [
      "Designed predicates like ‘tech-savvy’, ‘18+’, or ‘returning user’ as circuit logic instead of centralized flags.",
      "Built a flow where browsers mint proofs client-side and servers verify them without ever seeing the underlying attributes.",
      "Explored how existing analytics and ad systems could plug into ZK proofs without needing a total rewrite.",
    ],
  },
];

export const Projects: React.FC = () => {
  return (
    <Section
      id="projects"
      label="Featured projects"
      eyebrow="Production & research builds"
    >
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <article
            key={project.title}
            className={`relative overflow-hidden rounded-card border border-white/12 bg-black/70 p-6 shadow-soft backdrop-blur-xl ${
              idx === 0 ? "shadow-neon-blue" : "shadow-neon-orange"
            }`}
          >
            {/* neon border / card gradient */}
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <div className="absolute inset-px rounded-[22px] bg-card-gradient" />
            </div>

            <div className="relative space-y-4">
              {/* header */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.24em] text-white/50">
                    {project.tagline}
                  </p>
                </div>
                <span className="text-xs text-white/60">{project.period}</span>
              </div>

              {/* main content layout */}
              <div className="grid gap-6 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)]">
                {/* left: story */}
                <div className="space-y-3">
                  <p className="text-sm text-white/80">
                    {project.description}
                  </p>

                  <ul className="mt-3 space-y-2">
                    {project.bullets.map((line) => (
                      <li
                        key={line}
                        className="flex gap-3 text-sm leading-relaxed text-white/85"
                      >
                        <span className="mt-1 text-base text-neonOrange drop-shadow-[0_0_12px_rgba(248,165,76,0.9)]">
                          ▸
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* right: role / focus / tech */}
                <div className="space-y-3">
                  <div className="rounded-2xl bg-black/55 px-4 py-3 text-xs text-white/80">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                      Role
                    </p>
                    <p className="mt-1 text-sm text-white">{project.role}</p>
                  </div>

                  <div className="rounded-2xl bg-black/55 px-4 py-3 text-xs text-white/80">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                      Focus
                    </p>
                    <p className="mt-1 text-sm text-white">
                      {project.focus}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-black/55 px-4 py-3 text-xs text-white/80">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                      Stack
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-pill bg-black/40 px-3 py-1 text-white/85"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
