import React from "react";
import { Section } from "./Section";

type SkillCategory = {
  label: string;
  items: string[];
};

const skillCategories: SkillCategory[] = [
  {
    label: "Programming Languages",
    items: ["Solidity", "TypeScript / JavaScript", "Python", "Rust", "C#", "SQL"],
  },
  {
    label: "Blockchain Technology & Security",
    items: [
      "Smart Contract Design & Audits",
      "Gas Optimization",
      "ERC-20 / ERC-721",
      "Zero-Knowledge Proofs (ZKPs)",
      "Circom, Groth16",
      "Web3.js, Hardhat, Truffle",
      "Sharding Techniques",
    ],
  },
  {
    label: "XR & Frontend Development",
    items: [
      "Unity3D",
      "MRTK",
      "HoloLens2",
      "Azure Spatial Anchors",
      "React",
      "Next.js",
    ],
  },
  {
    label: "Cloud / DevOps & Testing",
    items: [
      "Azure",
      "Docker",
      "CI/CD Pipelines",
      "REST APIs",
      "Unit & Integration Testing",
      "Mocha, Hardhat Test Suites",
    ],
  },
  {
    label: "Soft Skills",
    items: [
      "Technical Communication",
      "Problem Solving",
      "Analytical Thinking",
      "Cross-functional Collaboration",
      "Mentoring & Knowledge Sharing",
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <Section id="skills" label="Skills">
      <p className="max-w-2xl text-sm text-white/70">
        A toolkit shaped around secure blockchain systems, immersive XR
        experiences, and production-ready engineering workflows.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((cat) => (
          <div
            key={cat.label}
            className="rounded-2xl border border-white/5 bg-surface p-4 shadow-sm"
          >
            <h3 className="text-sm font-semibold text-white">
              {cat.label}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
