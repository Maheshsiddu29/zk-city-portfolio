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
          horizontalSizing={0.90}
          fogIntensity={0.6}
          flowStrength={0.35}
          flowSpeed={0.35}
          fogScale={0.3}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-b from-transparent via-bg/70 to-bg" />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-24">
        {/* Pill */}
        <div className="mb-8">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60 backdrop-blur-xl">
            Zero-Knowledge · Smart Contracts · XR Interfaces
          </div>
        </div>

        <div className="flex flex-col gap-02 lg:flex-row ">
          {/* Left: main story */}
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Hey, I&apos;m Mahesh - I design{" "}
              <span className="text-neonBlue">trustless rails</span> and{" "}
              <span className="text-neonOrange">playful interfaces</span> for
              systems that shouldn&apos;t break.
            </h1>

            {/* <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
              My happy place is where{" "}
              <span className="text-neonBlue/90">
                cryptography, blockchains, and mixed reality
              </span>{" "}
              collide. I build ZK-powered auth flows, healthcare dApps, and XR
              dashboards that make complex infra feel oddly fun — without
              sacrificing security.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-[15px]">
              Previously at Cognizant shipping production systems for retail &
              automotive. Now at UMass Amherst, experimenting with{" "}
              <span className="text-neonOrange/90">
                zero-knowledge, Polygon, and spatial UX
              </span>{" "}
              to answer a simple question: how do we make serious infrastructure
              feel delightful?
            </p> */}

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-pill bg-gradient-to-r from-neonBlue to-neonOrange px-7 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(0,160,255,0.55)] transition hover:shadow-[0_0_55px_rgba(255,140,80,0.8)]"
              >
                Explore the builds
              </a>
              <a
                href="#contact"
                className="rounded-pill border border-white/25 bg-black/40 px-7 py-3 text-sm font-medium text-white/80 backdrop-blur-xl transition hover:border-white/60 hover:text-white"
              >
                Say gm &amp; plot something
              </a>
            </div>
          </div>

          {/* Right: vibe cards instead of metrics */}
          <div className="mt-8 flex flex-1 flex-col gap-4 lg:mt-0">
            <div className="rounded-3xl border border-white/5 bg-black/70 px-6 py-5 backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
                What I love building
              </p>
              <p className="mt-3 text-sm text-white/80">
                Protocol pieces, ZK flows, and tools that quietly keep people
                safe while everyone else just sees a smooth UI.
              </p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-black/70 px-6 py-5 backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
                Current sandbox
              </p>
              <p className="mt-3 text-sm text-white/80">
                Medi-vault for privacy-preserving health data, ZK-cookies for
                adtech without stalking, and Polygon-based infra experiments.
              </p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-black/70 px-6 py-5 backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
                Looking for
              </p>
              <p className="mt-3 text-sm text-white/80">
                Teams who obsess over correctness, care about UX, and don&apos;t
                mind shipping things that feel a bit ahead of their time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
