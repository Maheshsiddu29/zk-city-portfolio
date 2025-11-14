import React from "react";
import { Section } from "./Section";

export const Contact: React.FC = () => {
  return (
    <Section id="contact" label="Let’s Collaborate">
      <div className="grid gap-6 md:grid-cols-[2fr,3fr]">
        {/* Left */}
        <div className="space-y-4">
          <p className="text-sm text-white/70">
            I&apos;m open to Smart Contract / Blockchain Engineer roles, as well
            as opportunities at the intersection of ZK, healthcare, and XR.
            If you&apos;re building something ambitious and need secure,
            production-ready systems, let&apos;s talk.
          </p>
          <div className="space-y-2 text-sm text-white/80">
            <p>
              <span className="text-white/50">Email: </span>
              <a
                href="mailto:saimaheshsure29@gmail.com"
                className="text-accent hover:underline"
              >
                saimaheshsure29@gmail.com
              </a>
            </p>
            <p>
              <span className="text-white/50">Location: </span>
              Amherst, MA · United States
            </p>
            <p>
              <span className="text-white/50">LinkedIn: </span>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                View Profile
              </a>
              {/* TODO: replace with your actual LinkedIn URL */}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="mailto:saimaheshsure29@gmail.com"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-accentSoft"
            >
              Email Me
            </a>
            <a
              href="/Sai_Mahesh_resume.pdf"
              target="_blank"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right card */}
        <div className="rounded-3xl bg-surface p-5 shadow-lg ring-1 ring-white/5">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
            Quick Note
          </p>
          <p className="mt-3 text-sm text-white/70">
            Tell me about the product, team, and the kind of impact you want to
            create. I&apos;m especially excited about:
          </p>
          <ul className="mt-3 space-y-1 text-sm text-white/80">
            <li>• ZK-based authentication and privacy systems</li>
            <li>• Healthcare and fintech platforms on Ethereum / L2s</li>
            <li>• XR dashboards for complex, high-stakes operations</li>
          </ul>
          <p className="mt-4 text-xs text-white/50">
            No cold recruiter spam, please — I&apos;m looking for teams that
            care about strong engineering and long-term impact.
          </p>
        </div>
      </div>
    </Section>
  );
};
