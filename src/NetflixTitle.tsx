import React, { useEffect, useState } from "react";
import "./NetflixTitle.css";
import netflixSound from "./netflix-sound.mp3";
import { useNavigate } from "react-router-dom";
import titleCard from "./images/JP_TitleCard_Primary_Blue.png";

const NetflixTitle: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch((error) =>
      console.error("Audio play error:", error)
    );
    setIsClicked(true); // start animation
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate("/browse");
      }, 4000); // same delay you liked
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
