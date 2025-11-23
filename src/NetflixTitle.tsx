// src/NetflixTitle.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import splashImage from "./images/JP_TitleCard_Primary_Blue.png";

const NetflixTitle: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // go straight to browse page
    navigate("/browse");
  };

  return (
    <section className="splash" onClick={handleClick}>
      <div className="splash-inner">
        <img
          src={splashImage}
          alt="Jermaine Peguese title card"
          style={{ maxWidth: "80vw", height: "auto" }}
        />
        <p className="splash-subtitle">Tap to enter Jermaine’s world.</p>
      </div>

      <p className="splash-hint">Click anywhere to continue</p>
    </section>
  );
};

export default NetflixTitle;
