// src/NetflixTitle.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

// Make sure this filename matches exactly what is in src/images
import jpTitleCard from "./images/JP_TitleCard_Primary_Blue.png";

const NetflixTitle: React.FC = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/browse");
  };

  return (
    <section className="splash" onClick={handleEnter}>
      <div className="splash-inner">
        {/* Title image */}
        <img
          src={jpTitleCard}
          alt="Jermaine Peguese title card"
          className="splash-image"
        />

        {/* Optional subtitle under the image */}
        <p className="splash-subtitle">
          Tap to enter Jermaine&apos;s world.
        </p>
      </div>

      <p className="splash-hint">
        Click or tap anywhere to continue
      </p>
    </section>
  );
};

export default NetflixTitle;
