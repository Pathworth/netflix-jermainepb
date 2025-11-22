import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import NetflixTitle from "./NetflixTitle";
import AIstrategist from "./pages/AIstrategist";
import CommunityBuilder from "./pages/CommunityBuilder";
import SpeakingWorkshops from "./pages/SpeakingWorkshops";
import MeetJermaine from "./pages/MeetJermaine";

// IMPORTS POINT TO: src/pages/images/*.png
import neoMatrixHero from "./pages/images/neo-matrix-jermaine-right.png";
import blackPantherHero from "./pages/images/black-panther-jermaine.png";
import ironManHero from "./pages/images/iron-man-jermaine-right.png";
import batmanHero from "./pages/images/batman-jermaine.png";

type Tile = {
  label: string;
  href: string;
  letter: string;
  heroImg: string;
};

const baseTiles: Tile[] = [
  {
    label: "AI Strategist",
    href: "/ai-strategist",
    letter: "A",
    heroImg: neoMatrixHero,
  },
  {
    label: "Community Builder",
    href: "/community-builder",
    letter: "C",
    heroImg: blackPantherHero,
  },
  {
    label: "Speaking & Workshops",
    href: "/speaking-workshops",
    letter: "S",
    heroImg: ironManHero,
  },
  {
    label: "Meet Jermaine",
    href: "/meet-jermaine",
    letter: "M",
    heroImg: batmanHero,
  },
];

function Home() {
  const [showHeroArt, setShowHeroArt] = useState(true);

  return (
    <section className="home-screen">
      <h1 className="home-title">Where should we start?</h1>

      <ul className="profile-grid">
        {baseTiles.map((tile) => (
          <li key={tile.label} className="profile-card">
            <a href={tile.href} className="profile-link">
              <div className="profile-image-wrapper">
                {showHeroArt ? (
                  <img
                    src={tile.heroImg}
                    alt={tile.label}
                    className="profile-image"
                  />
                ) : (
                  <span className="profile-avatar-letter">{tile.letter}</span>
                )}
              </div>
              <div className="profile-label">{tile.label}</div>
            </a>
          </li>
        ))}
      </ul>

      {/* Footer block pushed down for breathing room */}
      <div className="home-footer">
        <p className="profile-hint">
          Click any pillar to explore Jermaine’s expertise.
        </p>

        <button
          type="button"
          className="manage-profiles-btn"
          onClick={() => setShowHeroArt((prev) => !prev)}
        >
          MANAGE PROFILES
        </button>

        <p className="manage-profiles-help">
          {showHeroArt
            ? "Tap to switch to the classic blue tiles."
            : "Tap to show the hero profile art."}
        </p>
      </div>
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

