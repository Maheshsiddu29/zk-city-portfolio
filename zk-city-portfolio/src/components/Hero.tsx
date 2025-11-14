import React from "react";

export const Hero: React.FC = () => {
  const handleScrollProjects = () => {
    const el = document.getElementById("projects");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
    id="about"
    className="flex min-h-screen items-center bg-app-gradient px-4 pt-24"
  >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[3fr,2fr] md:items-center">
        {/* Left: text */}
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-accent2">
            Smart Contract Engineer · XR Architect
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            I build secure blockchain systems{" "}
            <span className="text-accent">and immersive tools</span> that ship.
          </h1>
          <p className="max-w-xl text-base text-white/70 sm:text-lg">
            I&apos;m Sai Mahesh, a blockchain and XR engineer specializing in
            Ethereum/Polygon, zero-knowledge proofs, and healthcare data
            platforms that reduce risk and save real money.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleScrollProjects}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-accentSoft"
            >
              View Projects
            </button>
            <a
              href="/Sai_Mahesh_resume.pdf"
              target="_blank"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Download Resume
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-4 grid gap-4 text-sm text-white/70 sm:grid-cols-3">
            <div>
              <p className="text-xl font-semibold text-white">30%</p>
              <p className="text-xs text-white/60">
                reduction in product expiry with blockchain traceability
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white">40%</p>
              <p className="text-xs text-white/60">
                reduced breach risk with ZKP-based healthcare auth
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white">$85K</p>
              <p className="text-xs text-white/60">
                annual savings from MR asset dashboards
              </p>
            </div>
          </div>
        </div>

        {/* Right: info panel */}
        <div className="rounded-3xl bg-surface p-5 shadow-lg ring-1 ring-white/5">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-white/50">
            Snapshot
          </p>
          <div className="space-y-3 text-sm text-white/80">
            <div className="flex justify-between gap-4">
              <span className="text-white/60">Focus</span>
              <span className="text-right text-white">
                Blockchain Security, ZK, XR
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-white/60">Stack</span>
              <span className="text-right text-white">
                Solidity · TypeScript · Rust · React · Unity
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-white/60">Currently</span>
              <span className="text-right text-white">
                MS CS · UMass Amherst
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-white/60">Location</span>
              <span className="text-right text-white">
                Amherst, MA · United States
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
