import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import NetflixTitle from "./NetflixTitle";
import AIstrategist from "./pages/AIstrategist";
import CommunityBuilder from "./pages/CommunityBuilder";
import SpeakingWorkshops from "./pages/SpeakingWorkshops";
import MeetJermaine from "./pages/MeetJermaine";

type Tile = {
  label: string;
  href: string;
  img: string;
};

const heroTiles: Tile[] = [
  {
    label: "AI Strategist",
    href: "/ai-strategist",
    img: "/images/neo-matrix-jermaine-right.png",
  },
  {
    label: "Community Builder",
    href: "/community-builder",
    img: "/images/black-panther-jermaine.png",
  },
  {
    label: "Speaking & Workshops",
    href: "/speaking-workshops",
    img: "/images/iron-man-jermaine-right.png",
  },
  {
    label: "Meet Jermaine",
    href: "/meet-jermaine",
    img: "/images/batman-jermaine.png",
  },
];

function Home() {
  const [showHeroArt, setShowHeroArt] = useState(true);

  const toggleMode = () => setShowHeroArt((prev) => !prev);

  return (
    <section className="home-screen">
      <h1 className="home-title">Where should we start?</h1>

      <ul
        className={`profile-grid ${
          showHeroArt ? "profile-grid--hero" : "profile-grid--classic"
        }`}
      >
        {heroTiles.map((tile) => (
          <li key={tile.label} className="profile-card">
            <a href={tile.href} className="profile-link">
              <div
                className={`profile-image-wrapper ${
                  showHeroArt
                    ? "profile-image-wrapper--hero"
                    : "profile-image-wrapper--classic"
                }`}
              >
                {showHeroArt ? (
                  <img
                    src={tile.img}
                    alt={tile.label}
                    className="profile-image"
                  />
                ) : (
                  <span className="profile-initial">
                    {tile.label.charAt(0)}
                  </span>
                )}
              </div>

              <div className="profile-label">{tile.label}</div>
            </a>
          </li>
        ))}
      </ul>

      <p className="profile-hint">
        Click any pillar to explore Jermaine’s expertise.
      </p>

      <button
        type="button"
        onClick={toggleMode}
        className={`manage-button ${
          showHeroArt ? "manage-button--active" : ""
        }`}
      >
        MANAGE PROFILES
      </button>

      <p className="manage-caption">
        {showHeroArt
          ? "Tap to switch to the classic blue tiles."
          : "Tap to show the hero profile art."}
      </p>
    </section>
  );
}

export default function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<NetflixTitle />} />
        <Route path="/browse" element={<Home />} />
        <Route path="/ai-strategist" element={<AIstrategist />} />
        <Route path="/community-builder" element={<CommunityBuilder />} />
        <Route path="/speaking-workshops" element={<SpeakingWorkshops />} />
        <Route path="/meet-jermaine" element={<MeetJermaine />} />
      </Routes>
    </main>
  );
}
