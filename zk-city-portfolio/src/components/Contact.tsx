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
        {/* Left: main copy + actions */}
        <div className="space-y-4 text-sm text-white/75">
          <p>
            If you&apos;re building something at the edge of{" "}
            <span className="text-neonBlue">blockchain, ZK, or healthcare</span>
            — I&apos;d love to hear about it. I&apos;m especially interested in
            roles and collaborations where smart contracts, zero-knowledge, and
            real-world systems actually meet.
          </p>

          <p>
            I enjoy working close to the protocol and the product: designing
            primitives, tightening security assumptions, and then helping ship
            interfaces that real humans don&apos;t hate using.
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
              {" "}
              <span className="text-[11px] text-white/50">
                (will point this to my actual URL)
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="mailto:saimaheshsure29@gmail.com"
              className="rounded-pill bg-gradient-to-r from-neonBlue to-neonOrange px-6 py-2.5 text-sm font-semibold text-white shadow-neon-blue transition hover:shadow-neon-orange"
            >
              Start a conversation
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

        {/* Right: “how to work with me” card */}
        <div className="rounded-card border border-white/10 bg-black/60 p-5 text-xs text-white/75 backdrop-blur-xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/55">
            What to include
          </p>
          <p className="mt-3">
            A short note about the product, the team, and the kind of problem
            you&apos;re trying to solve goes a long way. I&apos;m most excited by:
          </p>
          <ul className="mt-3 space-y-1">
            <li>• ZK-based authentication, access control, and privacy rails</li>
            <li>• Healthcare / fintech systems on Ethereum, L2s, or Polygon</li>
            <li>• XR dashboards and control surfaces for complex operations</li>
          </ul>
          <p className="mt-4 text-[11px] text-white/55">
            I&apos;m not looking for generic mass outreach. If you care about strong
            engineering, clear threat models, and long-term impact, we&apos;ll get
            along well.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
