// src/components/Hero.tsx
import React from "react";
import LaserFlow from "./LaserFlow";

const Hero: React.FC = () => {
  return (
    <section
      id="overview"
      className="relative min-h-[90vh] bg-[#05030f] overflow-hidden"
    >
      {/* LASER BACKGROUND */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-[120vh]">
        <LaserFlow
          className="w-full h-full"
          color="#ffb15c"
          horizontalBeamOffset={0.0}
          verticalBeamOffset={-0.12}
          wispDensity={1.1}
          verticalSizing={2.6}
          horizontalSizing={0.75}
          fogIntensity={0.6}
          flowStrength={0.35}
          flowSpeed={0.35}
          fogScale={0.3}
        />
        {/* fade into page background */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-b from-transparent via-bg/70 to-bg" />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-24">
        {/* Pill */}
        <div className="mb-8">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60 backdrop-blur-xl">
            Smart Contract Engineer · XR Architect · ZK
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end">
          {/* Left copy */}
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              I design{" "}
              <span className="text-neonBlue">trustless rails</span> and{" "}
              <span className="text-neonOrange">immersive tools</span> for
              systems that can’t afford to be wrong.
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              I&apos;m Sai Mahesh, a blockchain &amp; XR engineer focused on
              Ethereum/Polygon smart contracts, zero-knowledge authentication,
              and mixed-reality dashboards — the kind of production rails where
              a bug costs real money, not just testnet ETH.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-pill bg-gradient-to-r from-neonBlue to-neonOrange px-7 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(0,160,255,0.55)] transition hover:shadow-[0_0_55px_rgba(255,140,80,0.8)]"
              >
                See production systems
              </a>
              <a
                href="#contact"
                className="rounded-pill border border-white/25 bg-black/40 px-7 py-3 text-sm font-medium text-white/80 backdrop-blur-xl transition hover:border-white/60 hover:text-white"
              >
                Collaborate on a build
              </a>
            </div>
          </div>

          {/* Right stats */}
          <div className="mt-8 flex flex-1 flex-col gap-4 lg:mt-0">
            <div className="rounded-3xl border border-white/5 bg-black/70 px-6 py-5 backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
                Daily volume
              </p>
              <p className="mt-3 text-2xl font-semibold text-neonBlue">500K+</p>
              <p className="mt-1 text-xs text-white/60">
                daily tx secured across Polygon-based systems
              </p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-black/70 px-6 py-5 backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
                ZK auth impact
              </p>
              <p className="mt-3 text-2xl font-semibold text-neonOrange">40%</p>
              <p className="mt-1 text-xs text-white/60">
                reduction in breach risk via ZK-powered auth flows
              </p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-black/70 px-6 py-5 backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
                MR dashboards
              </p>
              <p className="mt-3 text-2xl font-semibold text-neonBlue">$85K</p>
              <p className="mt-1 text-xs text-white/60">
                annual savings from MR asset monitoring dashboards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
