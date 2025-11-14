import React from "react";
import { Section } from "./Section";

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Senior Blockchain & XR Developer — Retail India",
    company: "Cognizant",
    location: "India",
    period: "Feb 2022 – Jan 2024",
    bullets: [
      "Architected a Polygon-based supply chain tracking system, reducing product expiry by 30%.",
      "Integrated blockchain with ERP flows, increasing traceability and auditability across the retail network.",
      "Built MR dashboards for real-time asset monitoring, cutting issue resolution time and support overhead.",
    ],
  },
  {
    role: "Blockchain & AR/VR Developer",
    company: "Cognizant",
    location: "India",
    period: "Feb 2020 – Jan 2022",
    bullets: [
      "Developed Ethereum-based prototypes for healthcare and logistics use cases.",
      "Created AR/VR experiences using Unity and HoloLens2, improving training outcomes and engagement.",
      "Helped turn PoCs into scalable internal products with stakeholders.",
    ],
  },
  {
    role: "Program Analyst Trainee",
    company: "Cognizant",
    location: "India",
    period: "Aug 2019 – Jan 2020",
    bullets: [
      "Learned core software engineering practices: version control, testing, and deployment workflows.",
      "Contributed to internal tools and automation scripts improving developer productivity.",
      "Collaborated with senior engineers on enterprise-grade system design.",
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <Section id="experience" label="Experience">
      <div className="relative border-l border-white/10 pl-4">
        {experience.map((item) => (
          <article key={item.role} className="relative mb-8 last:mb-0">
            <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border border-accent bg-bg" />
            <div className="rounded-2xl bg-surface p-4 shadow-sm ring-1 ring-white/5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold text-white">
                  {item.role}
                </h3>
                <span className="text-[11px] text-white/50">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-xs text-white/60">
                {item.company} · {item.location}
              </p>
              <ul className="mt-2 space-y-1 text-xs text-white/70">
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
