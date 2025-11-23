// src/NetflixTitle.tsx
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import netflixSound from "./netflix-sound.mp3";

const NetflixTitle: React.FC = () => {
  const navigate = useNavigate();
  const [hasPrimed, setHasPrimed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    if (!hasPrimed) {
      // First tap: play the sound
      setHasPrimed(true);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current
          .play()
          .catch(() => {
            // ignore autoplay / gesture errors
          });
      }
    } else {
      // Second tap: go to browse
      navigate("/browse");
    }
  };

  return (
    <section className="splash" onClick={handleClick}>
      <div className="splash-inner">
        <h1 className="splash-title">JERMAINE PEGUESE</h1>
        <p className="splash-subtitle">AI · Community · Legacy</p>
      </div>

      <p className="splash-hint">
        {hasPrimed
          ? "Tap anywhere again to enter."
          : "Tap once for the sound, then tap again to enter."}
      </p>

      {/* Audio element controlled via ref */}
      <audio ref={audioRef} src={netflixSound} />
    </section>
  );
};

export default NetflixTitle;
