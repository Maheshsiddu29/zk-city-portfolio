import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Expertise } from "./components/Expertise";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg/80 text-white">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
            <footer className="mt-10 border-t border-white/5 bg-footer-gradient/90 px-4 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              Join the movement
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Build the next wave of secure,{" "}
              <span className="bg-gradient-to-r from-accent2 via-accentPurple to-accent bg-clip-text text-transparent">
                privacy-first
              </span>{" "}
              apps.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/70">
              I&apos;m looking for teams who care about strong engineering,
              cryptography, and delightful user experiences. If that&apos;s you,
              let&apos;s talk about what we can build together.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:saimaheshsure29@gmail.com"
              className="rounded-full bg-gradient-to-r from-accent2 via-accentPurple to-accent px-8 py-3 text-sm font-medium text-white shadow-glow transition hover:shadow-glow-soft"
            >
              See in action — contact me
            </a>
            <a
              href="/Sai_Mahesh_resume.pdf"
              target="_blank"
              className="rounded-full border border-white/20 bg-surface/80 px-8 py-3 text-sm font-medium text-white/80 backdrop-blur-md transition hover:border-white/50 hover:text-white"
            >
              Download resume
            </a>
          </div>

          <div className="mt-4 text-[11px] text-white/50">
            © {new Date().getFullYear()} Sai Mahesh Sure · Built with React,
            TypeScript & Tailwind. Made with passion and way too much coffee.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
