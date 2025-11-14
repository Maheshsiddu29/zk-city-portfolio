import React from "react";
import { Section } from "./Section";

const items = [
  {
    title: "Blockchain Security & Smart Contracts",
    description:
      "Designing and optimizing Ethereum/Polygon contracts with strong guarantees and gas efficiency.",
    bullets: [
      "ERC-20/721, Hardhat, Truffle",
      "Audit-minded development & testing",
      "Production deployments with monitoring",
    ],
  },
  {
    title: "Zero-Knowledge Proofs & Sharding",
    description:
      "ZKP-based authentication and sharded storage for healthcare-grade privacy.",
    bullets: [
      "Groth16, Circom circuits",
      "ZKP login & cookie flows",
      "Sharded data store prototypes",
    ],
  },
  {
    title: "Healthcare dApps & Data Exchange",
    description:
      "End-to-end medical data flows with traceability, consent, and secure sharing.",
    bullets: [
      "MediVault healthcare platform",
      "Polygon-based record processing",
      "Compliance-focused design",
    ],
  },
  {
    title: "XR & Mixed Reality Dashboards",
    description:
      "Immersive dashboards that surface live data on HoloLens and MR devices.",
    bullets: ["Unity3D, MRTK, HoloLens2", "Real-time asset tracking"],
  },
];

export const Expertise: React.FC = () => {
  return (
    <Section
      id="expertise"
      label="Production systems with measurable impact."
      eyebrow="Expertise"
    >
      <p className="max-w-2xl text-sm text-white/70">
        A blend of blockchain security, ZK research, and XR development focused
        on systems that can be audited, monitored, and actually deployed.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {items.map((item, idx) => (
          <article
            key={item.title}
            className={`relative overflow-hidden rounded-card border border-white/10 bg-black/55 p-5 backdrop-blur-xl transition hover:border-neonBlue/60 ${
              idx % 2 === 0 ? "shadow-neon-blue/40" : "shadow-neon-orange/40"
            }`}
          >
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute inset-px rounded-[22px] bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(251,146,60,0.20),transparent_55%)]" />
            </div>
            <div className="relative">
              <h3 className="text-sm font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-white/70">{item.description}</p>
              <ul className="mt-3 space-y-1 text-[11px] text-white/65">
                {item.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};
