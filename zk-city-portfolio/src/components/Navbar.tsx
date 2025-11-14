import React from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const Navbar: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="font-semibold tracking-tight">
          <span className="text-accent">Mahesh</span>
          <span className="text-white/60">.dev</span>
        </div>
        <div className="hidden gap-6 text-sm text-white/70 md:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleScroll(s.id)}
              className="transition hover:text-white"
            >
              {s.label}
            </button>
          ))}
        </div>
        <a
          href="/Sai_Mahesh_resume.pdf"
          target="_blank"
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-accentSoft"
        >
          Download Resume
        </a>
      </nav>
    </header>
  );
};
