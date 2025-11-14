import React from "react";

const sections = [
  { id: "hero", label: "Overview" },
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
    <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-black/70 via-black/40 to-transparent backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button
          onClick={() => handleScroll("hero")}
          className="flex items-center gap-2 rounded-pill bg-black/60 px-3 py-1 text-sm font-semibold text-white shadow-soft backdrop-blur-xl"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-neonBlue to-neonPurple text-xs font-bold">
            SM
          </span>
          <span className="hidden text-white/80 sm:inline">
            Mahesh<span className="text-neonOrange">.dev</span>
          </span>
        </button>

        <div className="hidden items-center gap-5 text-xs font-medium text-white/70 md:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleScroll(s.id)}
              className="rounded-pill px-3 py-1 transition hover:bg-white/5 hover:text-white"
            >
              {s.label}
            </button>
          ))}
        </div>

        <a
          href="/Sai_Mahesh_resume.pdf"
          target="_blank"
          className="rounded-pill bg-neonOrange px-4 py-2 text-xs font-semibold text-black shadow-neon-orange transition hover:bg-orange-300"
        >
          Download Resume
        </a>
      </nav>
    </header>
  );
};
