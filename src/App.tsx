import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import NetflixTitle from "./NetflixTitle";
import AIstrategist from "./pages/AIstrategist";
import CommunityBuilder from "./pages/CommunityBuilder";
import SpeakingWorkshops from "./pages/SpeakingWorkshops";
import MeetJermaine from "./pages/MeetJermaine";

const heroTiles = [
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
  const [showClassicTiles, setShowClassicTiles] = useState(false);

  const toggleTiles = () => {
    setShowClassicTiles((prev) => !prev);
  };

  return (
    <section className="home-screen">
      <h1 className="home-title">Where should we start?</h1>

      <ul className="profile-grid">
        {heroTiles.map((tile) => (
          <li key={tile.label} className="profile-card">
            <Link to={tile.href} className="profile-link">
              <div className="profile-image-wrapper">
                {showClassicTiles ? (
                  <div className="classic-tile">
                    <span className="classic-letter">
                      {tile.label.charAt(0)}
                    </span>
                  </div>
                ) : (
                  <img
                    src={tile.img}
                    alt={tile.label}
                    className="profile-image"
                  />
                )}
              </div>
              <div className="profile-label">{tile.label}</div>
            </Link>
          </li>
        ))}
      </ul>

      <p className="profile-hint">
        Click any pillar to explore Jermaine’s expertise.
      </p>

      <button type="button" className="manage-button" onClick={toggleTiles}>
        MANAGE PROFILES
      </button>

      <p className="manage-sub">
        {showClassicTiles
          ? "Tap to show the hero profile art."
          : "Tap to switch to the classic blue tiles."}
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
        <Route
          path="/speaking-workshops"
          element={<SpeakingWorkshops />}
        />
        <Route path="/meet-jermaine" element={<MeetJermaine />} />
      </Routes>
    </main>
  );
}

