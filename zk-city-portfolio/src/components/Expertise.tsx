import React from "react";
import { Shield, Lock, Activity, Cpu } from "lucide-react";

type ExpertiseItem = {
  title: string;
  subtitle: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  points: string[];
};

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Blockchain Security & Smart Contracts",
    subtitle: "Polygon / Ethereum systems with measurable impact.",
    icon: Shield,
    points: [
      "Architected Polygon-based supply chain systems with 30% expiry reduction",
      "Optimized smart contracts handling 500K+ daily transactions",
      "Reduced gas costs by 40% through advanced optimization",
    ],
  },
  {
    title: "Zero-Knowledge Proofs & Sharding",
    subtitle: "Privacy-first authentication and scalable data flows.",
    icon: Lock,
    points: [
      "Implemented ZKP authentication reducing breach risks by 40%",
      "Built sharded storage for 15% faster response under peak loads",
      "Achieved 99.98% simulated uptime with 2K+ concurrent users",
    ],
  },
  {
    title: "Healthcare dApps & Data Exchange",
    subtitle: "End-to-end medical data flows with traceability.",
    icon: Activity,
    points: [
      "Developed Polygon-based dApp for secure medical records",
      "Accelerated confirmations from 45s to 12s",
      "Achieved 99.9% data integrity verification across providers",
    ],
  },
  {
    title: "XR & Mixed Reality Dashboards",
    subtitle: "Immersive monitoring for high-stakes environments.",
    icon: Cpu,
    points: [
      "Engineered MR dashboards tracking 150+ assets in real time",
      "Improved issue resolution time by 25% via 3D visualization",
      "Designed XR experiences for complex operational workflows",
    ],
  },
];

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      {/* subtle grid background */}
      <div className="absolute inset-0 grid-pattern opacity-80" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <div className="glass rounded-full px-6 py-2">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-plasma-purple">
                Expertise
              </span>
            </div>
          </div>

          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Specialized skills that{" "}
            <span className="text-gradient">drive outcomes</span>.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            A blend of blockchain security, ZK research, and XR development
            focused on production systems that can be audited, monitored, and
            actually deployed.
          </p>
        </div>

        {/* card grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {expertiseItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="h-full">
                <div className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950/90 via-slate-900/90 to-slate-950/95 backdrop-blur-2xl shadow-[0_18px_60px_rgba(15,23,42,0.9)] transition-shadow duration-300 hover:shadow-[0_22px_80px_rgba(56,189,248,0.7)]">
                  {/* neon edge */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-electric-cyan via-plasma-purple to-neon-magenta opacity-90" />

                  <div className="p-7 sm:p-8">
                    {/* icon pill */}
                    <div className="mb-6 inline-flex rounded-2xl bg-slate-950/90 p-3 shadow-[0_0_26px_rgba(56,189,248,0.6)]">
                      <Icon className="h-6 w-6 text-electric-cyan" />
                    </div>

                    {/* title + subtitle */}
                    <h3 className="mb-2 text-xl font-semibold sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mb-6 text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>

                    {/* bullets */}
                    <ul className="space-y-3">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-white/85"
                        >
                          {/* neon arrow bullet like reference screenshot */}
                          <span className="mt-1 text-base text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.9)]">
                            ▸
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* subtle rounded highlight at the bottom of card */}
                  <div className="pointer-events-none absolute inset-x-6 bottom-0 h-10 rounded-t-full bg-gradient-to-t from-electric-cyan/15 via-plasma-purple/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
