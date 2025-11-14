import React from "react";
import { Section } from "./Section";

export const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      label="Let’s collaborate."
      eyebrow="Contact"
    >
      <div className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-start">
        <div className="space-y-4 text-sm text-white/75">
          <p>
            I&apos;m open to Smart Contract / Blockchain Engineer roles and
            projects at the intersection of ZK, healthcare, and XR. If you&apos;re
            building something ambitious and need secure, production-ready
            systems, let&apos;s talk.
          </p>

          <div className="space-y-1 text-sm">
            <p>
              <span className="text-white/55">Email: </span>
              <a
                href="mailto:saimaheshsure29@gmail.com"
                className="text-neonBlue hover:underline"
              >
                saimaheshsure29@gmail.com
              </a>
            </p>
            <p>
              <span className="text-white/55">Location: </span>
              Amherst, MA · United States
            </p>
            <p>
              <span className="text-white/55">LinkedIn: </span>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-neonBlue hover:underline"
              >
                View profile
              </a>
              {"  "}
              <span className="text-[11px] text-white/50">
                (update with your actual URL)
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="mailto:saimaheshsure29@gmail.com"
              className="rounded-pill bg-gradient-to-r from-neonBlue to-neonOrange px-6 py-2.5 text-sm font-semibold text-white shadow-neon-blue transition hover:shadow-neon-orange"
            >
              Email me
            </a>
            <a
              href="/Sai_Mahesh_resume.pdf"
              target="_blank"
              className="rounded-pill border border-white/20 bg-black/40 px-6 py-2.5 text-sm font-medium text-white/80 backdrop-blur-xl transition hover:border-white/60 hover:text-white"
            >
              Download resume
            </a>
          </div>
        </div>

        <div className="rounded-card border border-white/10 bg-black/60 p-5 text-xs text-white/75 backdrop-blur-xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/55">
            Quick note
          </p>
          <p className="mt-3">
            Tell me about the product, team, and the kind of impact you want to
            create. I&apos;m especially excited about:
          </p>
          <ul className="mt-3 space-y-1">
            <li>• ZK-based authentication and privacy systems</li>
            <li>• Healthcare and fintech platforms on Ethereum / L2s</li>
            <li>• XR dashboards for complex, high-stakes operations</li>
          </ul>
          <p className="mt-4 text-[11px] text-white/55">
            No cold recruiter spam — I&apos;m looking for teams that care about
            strong engineering and long-term impact.
          </p>
        </div>
      </div>
    </Section>
  );
};
