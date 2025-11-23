import React, { useEffect, useState } from "react";
import "./NetflixTitle.css";
import netflixSound from "./netflix-sound.mp3";
import { useNavigate } from "react-router-dom";
import titleCard from "./images/JP_TitleCard_Primary_Blue.png";

const NetflixTitle: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    // If we've already started the animation, ignore extra taps
    if (isClicked) return;

    // Play Netflix-style sound
    const audio = new Audio(netflixSound);
    audio.play().catch((error) => {
      console.error("Audio play error:", error);
    });

    // Trigger zoom-out animation
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        // After animation, go to the “Where should we start?” page
        navigate("/browse");
      }, 4000); // 4 seconds

      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <img
        src={titleCard}
        alt="Jermaine Peguese title card"
        className={`netflix-logo ${isClicked ? "animate" : ""}`}
      />
    </div>
  );
};

export default NetflixTitle;

