import React from "react";
import { Section } from "./Section";

const categories = [
  {
    label: "Chains & Protocol Infra",
    pills: [
      "Ethereum",
      "Polygon",
      "Solidity",
      "EVM tooling",
      "Hardhat",
      "Foundry (exploring)",
    ],
  },
  {
    label: "Zero-Knowledge & Crypto Primitives",
    pills: [
      "ZK-SNARKs",
      "Circom",
      "snarkjs",
      "Groth16",
      "Poseidon hashes",
      "Basic cryptography",
    ],
  },
  {
    label: "Frontend, XR & Interaction",
    pills: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Unity3D",
      "HoloLens 2 / MRTK",
    ],
  },
  {
    label: "Tooling, Testing & Ops",
    pills: [
      "Git & GitHub",
      "Hardhat tests",
      "Integration testing",
      "REST APIs",
      "Docker",
      "Azure / CI-CD",
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      label="Technical stack"
      eyebrow="What I reach for"
    >
      <p className="max-w-2xl text-sm text-white/70">
        Tools and stacks I lean on to ship ZK experiments, on-chain systems,
        and XR interfaces that can survive outside a demo environment.
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

export default Skills;
