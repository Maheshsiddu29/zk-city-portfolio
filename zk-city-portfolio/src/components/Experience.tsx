import { Briefcase, Sparkles } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Blockchain & XR Developer — Retail India",
      company: "Cognizant",
      location: "India",
      period: "Feb 2022 – Jan 2024",
      highlights: [
        "Architected Polygon-based supply chain tracking system (30% expiry reduction)",
        "Built Unity3D platform for 2,000+ monthly users (25% faster resolution)",
        "Engineered MR dashboards for 150+ assets ($85K annual savings)",
      ],
    },
    {
      role: "Blockchain & AR/VR Developer",
      company: "Cognizant",
      location: "India",
      period: "Dec 2021 – Feb 2022",
      highlights: [
        "Pioneered Ethereum/Polygon tracking system (99.8% reliability)",
        "Developed automotive AR app (35% engagement increase)",
        "Created navigation system with Dynamics 365 (40% faster wayfinding)",
      ],
    },
    {
      role: "Program Analyst Trainee",
      company: "Cognizant",
      location: "India",
      period: "Dec 2020 – Dec 2021",
      highlights: [
        "Ranked top 10% among 120 trainees in full-stack development",
        "Built blockchain verification prototype (3 days → 10 minutes)",
        "Developed internal tools adopted by 75+ colleagues",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Grid background behind everything */}
      <div className="absolute inset-0 grid-pattern opacity-80" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="glass px-6 py-2 rounded-full">
              <span className="text-sm text-plasma-purple font-semibold uppercase tracking-wider">
                Production at scale
              </span>
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            Turning complex requirements into production-grade systems.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute top-0 bottom-0 left-8 sm:left-1/4 w-[2px] bg-gradient-to-b from-electric-cyan via-plasma-purple to-neon-magenta opacity-80 rounded-full" />

          <div className="space-y-14">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className="relative flex gap-6 sm:gap-10 items-stretch animate-fade-in-up"
                style={{ animationDelay: `${index * 0.12 + 0.1}s` }}
              >
                {/* Timeline node */}
                <div className="relative flex-shrink-0">
                  <div className="absolute left-8 sm:left-1/4 -translate-x-1/2 -top-2 sm:top-0">
                    <div className="relative">
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-electric-cyan/40 blur-xl opacity-70" />
                      {/* Icon pill */}
                      <div className="relative neo-card w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-slate-950/90 border border-white/10 shadow-[0_0_25px_rgba(56,189,248,0.65)]">
                        <Briefcase className="w-6 h-6 text-electric-cyan" />
                      </div>
                      {/* Small sparkle */}
                      <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-plasma-purple animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Experience card (always on the right like the Lovable mock) */}
                <div className="flex-1 ml-4 sm:ml-0 sm:pl-12">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-slate-950/80 backdrop-blur-2xl shadow-[0_18px_60px_rgba(15,23,42,0.9)] hover:shadow-[0_22px_80px_rgba(56,189,248,0.65)] transition-shadow duration-300">
                    {/* Thin neon top border */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-electric-cyan via-plasma-purple to-neon-magenta opacity-90" />

                    <div className="p-6 sm:p-8">
                      {/* Role + period row */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-4">
                        <h3 className="text-2xl sm:text-2xl font-semibold leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium text-plasma-purple shrink-0">
                          {exp.period}
                        </p>
                      </div>

                      {/* Company + location chips */}
                      <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
                        <span className="glass px-4 py-1 rounded-full text-electric-cyan font-semibold">
                          {exp.company}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{exp.location}</span>
                      </div>

                      {/* Highlights */}
<ul className="space-y-3">
  {exp.highlights.map((item) => (
    <li
      key={item}
      className="flex gap-3 text-sm text-white/85 leading-relaxed"
    >
      {/* neon gradient bullet */}
      <span
        className="
          mt-1.5 inline-flex h-3 w-3 flex-shrink-0 rounded-full
          bg-gradient-to-tr from-neonBlue to-neonOrange
          shadow-[0_0_14px_rgba(59,130,246,0.9)]
          ring-2 ring-white/8
        "
      />
      <span>{item}</span>
    </li>
  ))}
</ul>


                      {/* Decorative corner bracket */}
                      <div className="pointer-events-none absolute bottom-5 right-5 w-7 h-7 border-r-[1.5px] border-b-[1.5px] border-electric-cyan/40 rounded-br-xl" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
