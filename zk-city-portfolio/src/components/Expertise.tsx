import React from "react";
import { Section } from "./Section";

const expertiseItems = [
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
      "Groth16, Circom-based circuits",
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
      "Immersive monitoring tools that surface live data on HoloLens and MR devices.",
    bullets: [
      "Unity3D, MRTK, HoloLens2",
      "Azure Spatial Anchors integration",
      "Realtime asset and issue tracking",
    ],
  },
  {
    title: "Full-stack & Cloud",
    description:
      "Reliable frontends and services wired to blockchain and cloud infra.",
    bullets: [
      "React, TypeScript, Node.js",
      "Azure, Docker, REST APIs",
      "CI/CD pipelines & test suites",
    ],
  },
  {
    title: "Team Leadership & Collaboration",
    description:
      "Turning ambiguous ideas into delivered systems with measurable impact.",
    bullets: [
      "Cross-functional coordination",
      "Mentoring engineers & trainees",
      "Data-driven impact tracking",
    ],
  },
];

export const Expertise: React.FC = () => {
  return (
    <Section id="expertise" label="Expertise">
      <p className="max-w-2xl text-sm text-white/70">
        A blend of blockchain security, ZKP research, and XR development,
        focused on production-grade systems with real-world metrics.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {expertiseItems.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/5 bg-surface p-5 shadow-sm transition hover:border-accent/60 hover:shadow-lg"
          >
            <h3 className="text-base font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-white/70">{item.description}</p>
            <ul className="mt-3 space-y-1 text-xs text-white/60">
              {item.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
};
