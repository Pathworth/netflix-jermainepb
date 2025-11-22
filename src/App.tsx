import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import NetflixTitle from "./NetflixTitle";
import AIstrategist from "./pages/AIstrategist";
import CommunityBuilder from "./pages/CommunityBuilder";
import SpeakingWorkshops from "./pages/SpeakingWorkshops";
import MeetJermaine from "./pages/MeetJermaine";

/**
 * IMAGE IMPORTS
 * Make sure the filenames here match exactly what you put in src/images
 */

// Hero / superhero art
import neoHero from "./images/neo-matrix-jermaine-right.png";
import pantherHero from "./images/black-panther-jermaine.png";
import ironHero from "./images/iron-man-jermaine-right.png";
import batmanHero from "./images/batman-jermaine.png";

// Magazine cover “classic” tiles
import adventurousCover from "./images/Adventurous-Mag-cover-trans.png";
import teacherCover from "./images/Teacher-Mag-cover-trans.png";
import builderCover from "./images/Builder-Mag-cover-trans.png";
import strategistCover from "./images/Strategist-Mag-cover-trans.png";

const tiles = [
  {
    label: "AI Strategist",
    href: "/ai-strategist",
    heroImg: neoHero,
    classicImg: strategistCover, // strategist cover
  },
  {
    label: "Community Builder",
    href: "/community-builder",
    heroImg: pantherHero,
    classicImg: builderCover, // builder cover
  },
  {
    label: "Speaking & Workshops",
    href: "/speaking-workshops",
    heroImg: ironHero,
    classicImg: teacherCover, // teacher cover
  },
  {
    label: "Meet Jermaine",
    href: "/meet-jermaine",
    heroImg: batmanHero,
    classicImg: adventurousCover, // adventurous cover
  },
];

function Home() {
  const [showHeroArt, setShowHeroArt] = useState(true);

  return (
    <section className="home-screen">
      <h1 className="home-title">Where should we start?</h1>

      <ul className="profile-grid">
        {tiles.map((tile) => (
          <li key={tile.label} className="profile-card">
            <a href={tile.href} className="profile-link">
              <div
                className={`profile-image-wrapper ${
                  showHeroArt ? "mode-hero" : "mode-classic"
                }`}
              >
                {showHeroArt ? (
                  <img
                    src={tile.heroImg}
                    alt={tile.label}
                    className="profile-image"
                  />
                ) : (
                  <img
                    src={tile.classicImg}
                    alt={tile.label}
                    className="profile-image classic-cover"
                  />
                )}
              </div>
              <div className="profile-label">{tile.label}</div>
            </a>
          </li>
        ))}
      </ul>

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
          Tap to {showHeroArt ? "switch to the classic mag covers." : "show the hero profile art."}
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
