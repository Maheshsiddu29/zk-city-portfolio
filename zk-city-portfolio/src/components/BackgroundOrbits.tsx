import React from "react";

export const BackgroundOrbits: React.FC = () => {
  return (
    <div className="bg-orbits">
      {/* top-right cluster */}
      <div className="bg-orbits-inner">
        <div className="intro-ring" />
        <div className="intro-ring intro-ring--orange" />
        <div className="intro-core" />
      </div>

      {/* bottom-left faint cluster */}
      <div className="bg-orbits-bottom">
        <div className="intro-ring" />
        <div className="intro-ring intro-ring--orange" />
        <div className="intro-core" />
      </div>
    </div>
  );
};
