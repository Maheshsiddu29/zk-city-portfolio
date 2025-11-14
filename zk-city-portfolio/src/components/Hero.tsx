import React from "react";
import { Section } from "./Section";

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section
      id="hero"
      label="I build secure blockchain systems and immersive tools that ship."
      eyebrow="Smart Contract Engineer · XR Architect"
    >
      <div className="grid gap-8 lg:grid-cols-[3fr,2fr] lg:items-center">
        <div className="space-y-6 text-sm text-white/75">
          <p>
            I&apos;m Sai Mahesh, a blockchain and XR engineer focused on
            Ethereum/Polygon, zero-knowledge proofs, and healthcare platforms
            that reduce risk and save real money.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={scrollToProjects}
              className="rounded-pill bg-gradient-to-r from-neonBlue to-neonPurple px-6 py-2.5 text-sm font-semibold text-white shadow-neon-blue transition hover:shadow-neon-orange"
            >
              View projects
            </button>
            <a
              href="/Sai_Mahesh_resume.pdf"
              target="_blank"
              className="rounded-pill border border-white/20 bg-black/40 px-6 py-2.5 text-sm font-medium text-white/80 backdrop-blur-xl transition hover:border-white/60 hover:text-white"
            >
              Download resume
            </a>
          </div>

          <div className="mt-4 grid gap-4 text-xs text-white/70 sm:grid-cols-3">
            <div className="rounded-card bg-black/40 p-4">
              <p className="text-2xl font-semibold text-neonOrange">30%</p>
              <p className="mt-1 text-[11px]">
                reduction in product expiry with blockchain traceability
              </p>
            </div>
            <div className="rounded-card bg-black/40 p-4">
              <p className="text-2xl font-semibold text-neonBlue">40%</p>
              <p className="mt-1 text-[11px]">
                reduced breach risk with ZKP-based healthcare auth
              </p>
            </div>
            <div className="rounded-card bg-black/40 p-4">
              <p className="text-2xl font-semibold text-neonPurple">$85K</p>
              <p className="mt-1 text-[11px]">
                annual savings from MR asset dashboards
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-card bg-black/50 p-5 shadow-soft backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
            Snapshot
          </p>
          <div className="space-y-3 text-xs">
            <Row label="Focus" value="Blockchain Security · ZK · XR" />
            <Row
              label="Stack"
              value="Solidity · TypeScript · Rust · React · Unity"
            />
            <Row label="Currently" value="MS CS · UMass Amherst" />
            <Row label="Location" value="Amherst, MA · United States" />
          </div>
        </div>
      </div>
    </Section>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between gap-4">
    <span className="text-white/50">{label}</span>
    <span className="text-right text-white/90">{value}</span>
  </div>
);
