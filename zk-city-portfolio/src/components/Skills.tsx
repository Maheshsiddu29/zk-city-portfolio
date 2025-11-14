import React from "react";
import { Section } from "./Section";

type SkillCategory = {
  label: string;
  items: string[];
};

const skillCategories: SkillCategory[] = [
  {
    label: "Programming Languages",
    items: ["Solidity", "TypeScript / JavaScript", "Python", "Rust", "C#", "SQL"]
  },
  {
    label: "Blockchain Technology & Security",
    items: [
      "Smart Contract Design & Audits",
      "Gas Optimization",
      "ERC-20 / ERC-721",
      "Zero-Knowledge Proofs",
      "Circom, Groth16",
      "Web3.js, Hardhat, Truffle",
      "Sharding Techniques"
    ]
  },
  {
    label: "XR & Frontend Development",
    items: [
      "Unity3D",
      "MRTK",
      "HoloLens2",
      "Azure Spatial Anchors",
      "React",
      "Next.js"
    ]
  },
  {
    label: "Cloud / DevOps & Testing",
    items: [
      "Azure",
      "Docker",
      "CI/CD Pipelines",
      "REST APIs",
      "Unit & Integration Testing",
      "Mocha, Hardhat Test Suites"
    ]
  },
  {
    label: "Soft Skills",
    items: [
      "Technical Communication",
      "Problem Solving",
      "Analytical Thinking",
      "Cross-functional Collaboration",
      "Mentoring & Knowledge Sharing"
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <Section id="skills" label="Skills">
      <p className="max-w-2xl text-sm text-white/70">
        Tools and disciplines I use to build secure, polished systems from
        prototype to production.
      </p>
      <div className="mt-4 grid gap-5 md:grid-cols-3">
        {skillCategories.map((cat) => (
          <div
            key={cat.label}
            className="rounded-3xl bg-gradient-to-br from-accent2/40 via-accentPurple/40 to-accent/40 p-[1px]"
          >
            <div className="h-full rounded-[26px] bg-surface/95 p-4 backdrop-blur-xl">
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
          </div>
        ))}
      </div>
    </Section>
  );
};
