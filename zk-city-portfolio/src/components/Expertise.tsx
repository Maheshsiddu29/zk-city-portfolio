import React from "react";
import {
  Shield,
  Lock,
  Activity,
  Cpu,
  Globe2,
  Zap,
} from "lucide-react";

type ExpertiseItem = {
  title: string;
  subtitle: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  points: string[];
};

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Zero-Knowledge Systems",
    subtitle: "Proving more, revealing less.",
    icon: Lock,
    points: [
      "Designing circuits and flows where servers learn exactly what they need — nothing extra.",
      "Turning traits like age, intent, or trust level into private predicates instead of database flags.",
      "Exploring ZK patterns for cookies, access control, and consent that feel invisible to users.",
    ],
  },
  {
    title: "Smart Contract Engineering",
    subtitle: "Code paths you can sleep on.",
    icon: Shield,
    points: [
      "Shaping on-chain architectures on Ethereum & Polygon with clear invariants and failure modes.",
      "Thinking in terms of state machines, upgrade paths, and how contracts age in the real world.",
      "Obsessed with readability, reviewability, and making “what can go wrong?” easy to answer.",
    ],
  },
  {
    title: "DeFi & Infra Thinking",
    subtitle: "Composability as a design constraint.",
    icon: Globe2,
    points: [
      "Reasoning about bridges, keepers, vaults, and oracles as Lego bricks instead of siloed services.",
      "Designing flows that play nicely with existing tooling instead of demanding yet another dashboard.",
      "Caring about liveness, slippage, and failure cascades just as much as fancy yields.",
    ],
  },
  {
    title: "Healthcare dApps & Data Rails",
    subtitle: "Sensitive data on cryptographic rails.",
    icon: Activity,
    points: [
      "Building flows where patients stay in control while providers still get trustworthy signals.",
      "Using Polygon as the coordination layer, not the place where raw medical data lives forever.",
      "Exploring how ZK and encryption can make compliance a property of the system, not a checklist.",
    ],
  },
  {
    title: "XR & Spatial Interfaces",
    subtitle: "Touching your infra in 3D.",
    icon: Cpu,
    points: [
      "Designing Unity/MR experiences where teams walk through assets, alerts, and incidents.",
      "Using depth, motion, and spatial grouping to make complex systems feel instantly scannable.",
      "Bridging the gap between raw telemetry and intuitive, almost game-like control surfaces.",
    ],
  },
  {
    title: "Product, Narrative & DX",
    subtitle: "Making heavy infra feel light.",
    icon: Zap,
    points: [
      "Framing protocol features as stories real users can understand and care about.",
      "Sweating the details of error states, loading, and the first 60 seconds of a new flow.",
      "Treating docs, diagrams, and dev experience as first-class parts of the product.",
    ],
  },
];

export const Expertise: React.FC = () => {
  return (
   <section
  id="expertise"
  className="relative -mt-12 pt-24 pb-24 overflow-hidden"
>

      {/* subtle grid background */}
      <div className="grid-pattern absolute inset-0 opacity-80" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <div className="glass rounded-full px-6 py-2">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Expertise
              </span>
            </div>
          </div>

          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            The systems I{" "}
            <span className="text-gradient">can’t stop thinking about.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            A mix of zero-knowledge, smart contracts, healthcare rails, and XR —
            all pointed at one goal: make serious infrastructure feel clear,
            safe, and strangely fun to use.
          </p>
        </div>

        {/* card grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {expertiseItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="h-full">
                <div className="group relative h-full">
                  {/* animated blue/orange gradient layer */}
                  <div className="expertise-card-gradient" />

                  {/* actual card */}
                  <div className="expertise-card-inner flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950/95 via-slate-900/95 to-slate-950/95 shadow-[0_18px_60px_rgba(15,23,42,0.9)] backdrop-blur-2xl transition-shadow duration-300 group-hover:shadow-[0_24px_90px_rgba(15,23,42,1)]">
                    <div className="p-7 sm:p-8">
                      {/* icon pill */}
                      <div className="mb-6 inline-flex rounded-2xl bg-slate-950/90 p-3 shadow-[0_0_26px_rgba(56,189,248,0.9)]">
                        <Icon className="h-6 w-6 text-cyan-300" />
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
                            {/* neon arrow bullet */}
                            <span className="mt-1 text-base text-neonOrange drop-shadow-[0_0_14px_rgba(248,165,76,0.9)]">
                              ▸
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* subtle bottom highlight */}
                    <div className="pointer-events-none absolute inset-x-6 bottom-0 h-10 rounded-t-full bg-gradient-to-t from-cyan-400/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
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
