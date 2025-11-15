import React from "react";

const stats = [
  {
    label: "reduction in product expiry with blockchain traceability",
    value: "30%",
    accent: "text-orange-400",
  },
  {
    label: "reduced breach risk with ZKP-based healthcare auth",
    value: "40%",
    accent: "text-sky-400",
  },
  {
    label: "annual savings from MR asset dashboards",
    value: "$85K",
    accent: "text-pink-400",
  },
];

export const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="hero-animate relative mx-auto mt-6 max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950/95 via-slate-900/95 to-slate-950/95 shadow-[0_28px_80px_rgba(15,23,42,0.9)] backdrop-blur-2xl">
        {/* subtle top glow */}
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-40 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.5),_transparent_60%)] opacity-70" />

        <div className="relative z-10 px-6 pb-10 pt-10 sm:px-10 sm:pt-12">
          {/* top label */}
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.4em] text-slate-300/80">
            Smart Contract Engineer · XR Architect
          </p>

          {/* heading */}
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">
            I build{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              secure blockchain systems
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              immersive tools
            </span>{" "}
            that ship.
          </h1>

          {/* description + focus tags */}
          <div className="mt-6 max-w-3xl space-y-4">
            <p className="text-base text-slate-200/90 sm:text-lg leading-relaxed">
              <span className="font-semibold text-white">I&apos;m Sai Mahesh</span>, a
              blockchain and XR engineer focused on{" "}
              <span className="font-medium text-sky-300">
                Ethereum / Polygon
              </span>
              ,{" "}
              <span className="font-medium text-orange-300">
                zero-knowledge proofs
              </span>
              , and{" "}
              <span className="font-medium text-slate-100">
                healthcare platforms
              </span>{" "}
              that reduce risk and save real money in production.
            </p>

            <div className="flex flex-wrap gap-2 text-xs sm:text-[13px]">
              <span className="rounded-full bg-white/5 px-3 py-1 text-sky-300 border border-sky-500/30">
                Ethereum / Polygon · DeFi & Infra
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-orange-300 border border-orange-400/30">
                ZK proofs · Groth16 · Circom
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-teal-300 border border-teal-400/30">
                Healthcare data flows · HIPAA-conscious
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-7 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-transform duration-150 hover:scale-[1.02]"
            >
              View projects
            </a>
            <a
              href="/Sai_Mahesh_resume.pdf"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/30 px-7 py-3 text-sm font-medium text-white/80 backdrop-blur-xl transition hover:border-white/50 hover:text-white"
            >
              Download resume
            </a>
          </div>

          {/* metrics */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl bg-black/40 px-5 py-5 shadow-[0_14px_40px_rgba(15,23,42,0.9)] border border-white/5"
              >
                <p
                  className={`text-2xl sm:text-3xl font-semibold mb-1 ${stat.accent}`}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-slate-300/80 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* snapshot card */}
          <div className="mt-8 rounded-3xl bg-black/50 px-6 py-6 sm:px-8 sm:py-7 border border-white/10">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400">
              Snapshot
            </p>
            <dl className="grid gap-y-4 gap-x-8 text-sm sm:grid-cols-4">
              <div>
                <dt className="text-slate-400/80">Focus</dt>
                <dd className="mt-1 text-slate-100">
                  Blockchain Security · ZK · XR
                </dd>
              </div>
              <div>
                <dt className="text-slate-400/80">Stack</dt>
                <dd className="mt-1 text-slate-100">
                  Solidity · TypeScript · Rust · React · Unity
                </dd>
              </div>
              <div>
                <dt className="text-slate-400/80">Currently</dt>
                <dd className="mt-1 text-slate-100">
                  MS CS · UMass Amherst
                </dd>
              </div>
              <div>
                <dt className="text-slate-400/80">Location</dt>
                <dd className="mt-1 text-slate-100">
                  Amherst, MA · United States
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
