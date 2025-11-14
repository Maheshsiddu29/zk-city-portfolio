import React from "react";

export const IntroOverlay: React.FC = () => {
  return (
    <div className="intro-overlay">
      <div className="relative flex flex-col items-center gap-6">
        <div className="intro-ring" />
        <div className="intro-ring intro-ring--orange" />
        <div className="intro-core" />

        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="rounded-full bg-black/50 px-4 py-1 text-[11px] uppercase tracking-[0.3em] text-slate-300">
            Mahesh.dev
          </span>
          <h1 className="intro-title">
            Booting&nbsp;ZK&nbsp;City
          </h1>
          <p className="intro-subtitle">
            Deploying secure contracts
            <span className="intro-cursor">▍</span>
          </p>
        </div>
      </div>
    </div>
  );
};
