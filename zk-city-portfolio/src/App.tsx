import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Expertise } from "./components/Expertise";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { IntroOverlay } from "./components/IntroOverlay";
import { BackgroundOrbits } from "./components/BackgroundOrbits";

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-bg bg-page-gradient text-white relative overflow-hidden">
      {/* Animated neon orbits always behind content */}
      <BackgroundOrbits />

      {/* Boot screen overlay on top for the first ~2.6s */}
      {showIntro && <IntroOverlay />}

      {/* Foreground content */}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-20 space-y-16 pb-20">
          <Hero />
          <Expertise />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>

        <footer className="border-t border-white/10 bg-gradient-to-t from-black/60 via-bg/90 to-transparent px-4 py-10">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                Join the movement
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Build the next wave of secure{" "}
                <span className="bg-gradient-to-r from-neonBlue via-neonPurple to-neonOrange bg-clip-text text-transparent">
                  privacy-first
                </span>{" "}
                apps.
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/70">
                I&apos;m looking for teams who care about strong engineering,
                cryptography, and delightful user experiences. If that&apos;s
                you, let&apos;s talk about what we can build together.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:saimaheshsure29@gmail.com"
                className="rounded-pill bg-gradient-to-r from-neonBlue via-neonPurple to-neonOrange px-8 py-3 text-sm font-medium text-white shadow-neon-blue transition hover:shadow-neon-orange"
              >
                See in action — contact me
              </a>
              <a
                href="/Sai_Mahesh_resume.pdf"
                target="_blank"
                className="rounded-pill border border-white/20 bg-black/40 px-8 py-3 text-sm font-medium text-white/80 backdrop-blur-xl transition hover:border-white/50 hover:text-white"
              >
                Download resume
              </a>
            </div>

            <p className="text-[11px] text-white/50">
              © {new Date().getFullYear()} Sai Mahesh Sure · Built with React,
              TypeScript &amp; Tailwind.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
