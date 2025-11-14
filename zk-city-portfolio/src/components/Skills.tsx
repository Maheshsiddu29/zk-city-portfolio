import React from "react";
import { Section } from "./Section";

const categories = [
  {
    label: "Programming Languages",
    pills: ["Solidity", "TypeScript / JavaScript", "Python", "Rust", "C#", "SQL"],
  },
  {
    label: "Blockchain & Security",
    pills: [
      "Smart Contracts",
      "ZK-SNARKs",
      "Circom",
      "Groth16",
      "Gas Optimization",
      "Hardhat",
      "Truffle",
    ],
  },
  {
    label: "XR & Frontend",
    pills: [
      "Unity3D",
      "MRTK",
      "HoloLens2",
      "React",
      "Next.js",
      "Azure Spatial Anchors",
    ],
  },
  {
    label: "Cloud / DevOps / Testing",
    pills: [
      "Azure",
      "Docker",
      "CI/CD",
      "REST APIs",
      "Integration Testing",
      "Hardhat tests",
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      label="Technical skills"
      eyebrow="Tech arsenal"
    >
      <p className="max-w-2xl text-sm text-white/70">
        A toolkit centered around secure blockchain systems, immersive XR
        experiences, and production-ready engineering workflows.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {categories.map((cat, idx) => (
          <div
            key={cat.label}
            className={`relative overflow-hidden rounded-card border border-white/12 bg-black/65 p-5 backdrop-blur-xl ${
              idx % 2 === 0 ? "shadow-neon-blue" : "shadow-neon-orange"
            }`}
          >
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute inset-px rounded-[22px] bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.3),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(251,146,60,0.28),transparent_55%)]" />
            </div>
            <div className="relative">
              <h3 className="text-sm font-semibold text-white">
                {cat.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                {cat.pills.map((p) => (
                  <span
                    key={p}
                    className="rounded-pill bg-black/60 px-3 py-1 text-white/85"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
