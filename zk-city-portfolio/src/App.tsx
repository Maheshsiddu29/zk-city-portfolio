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
    <div className="min-h-screen bg-bg text-white">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Sai Mahesh Sure. Built with React ·
        TypeScript · Tailwind.
      </footer>
    </div>
  );
};

export default App;
