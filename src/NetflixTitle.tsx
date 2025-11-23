// src/NetflixTitle.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const NetflixTitle: React.FC = () => {
  const navigate = useNavigate();
  const [hasPlayedSound, setHasPlayedSound] = useState(false);

  const handleTap = () => {
    // First tap: play the sound only
    if (!hasPlayedSound) {
      const audio = new Audio(process.env.PUBLIC_URL + "/netflix-sound.mp3");
      audio.play().catch(() => {
        // ignore autoplay errors (mobile mute, etc.)
      });
      setHasPlayedSound(true);
      return;
    }

    // Second tap: go to the browse screen
    navigate("/browse");
  };

  return (
    <section className="splash" onClick={handleTap}>
      <div className="splash-inner">
        {/* Curved-style title like your earlier version */}
        <h1 className="splash-title">JERMAINE PEGUESE</h1>

        {/* Circle mark under the name */}
        <div className="splash-mark">
          <span className="splash-mark-initials">JP</span>
        </div>
      </div>

      {/* Bottom hint text, away from the circle */}
      <p className="splash-hint">
        Tap once for the sound, then tap again to enter.
      </p>
    </section>
  );
};

export default NetflixTitle;
