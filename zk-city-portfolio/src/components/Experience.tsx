import React from "react";
import { Section } from "./Section";

const jobs = [
  {
    role: "Senior Blockchain & XR Developer — Retail India",
    company: "Cognizant",
    location: "India",
    period: "Feb 2022 – Jan 2024",
    bullets: [
      "Architected Polygon-based supply-chain tracking (30% expiry reduction).",
      "Integrated blockchain with ERP flows for full traceability.",
      "Built MR dashboards monitoring 150+ assets with $85K annual savings.",
    ],
  },
  {
    role: "Blockchain & AR/VR Developer",
    company: "Cognizant",
    location: "India",
    period: "Feb 2020 – Jan 2022",
    bullets: [
      "Developed Ethereum-based prototypes for healthcare and logistics.",
      "Created AR/VR experiences with HoloLens2 improving training outcomes.",
    ],
  },
  {
    role: "Program Analyst Trainee",
    company: "Cognizant",
    location: "India",
    period: "Aug 2019 – Jan 2020",
    bullets: [
      "Learned core engineering practices: version control, testing, deployment.",
      "Contributed to internal automation improving developer productivity.",
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      label="Professional experience"
      eyebrow="Production at scale"
    >
      <div className="relative border-l border-white/15 pl-4 sm:pl-6">
        <div className="pointer-events-none absolute -left-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-neonBlue via-neonPurple to-neonOrange" />
        {jobs.map((job, idx) => (
          <article key={job.role} className="relative mb-8 last:mb-0">
            <span
              className={`absolute -left-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-white/30 bg-black ${
                idx === 0 ? "shadow-neon-blue" : "shadow-neon-orange"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-neonBlue" />
            </span>
            <div className="rounded-card border border-white/10 bg-black/65 p-5 backdrop-blur-xl">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold text-white">
                  {job.role}
                </h3>
                <span className="text-[11px] text-white/60">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-xs text-white/60">
                {job.company} · {job.location}
              </p>
              <ul className="mt-2 space-y-1 text-[11px] text-white/75">
                {job.bullets.map((b) => (
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
