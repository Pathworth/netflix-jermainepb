import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import NetflixTitle from "./NetflixTitle";

// Legacy Netflix profile pages
import Developer from "./profilePage/Developer";
import Stalker from "./profilePage/Stalker";
import Recruiter from "./profilePage/Recruiter";
import Adventurous from "./profilePage/Adventurous";

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

/**
 * Tile config:
 * - path: where the tile links to
 * - heroImg: superhero art
 * - magImg: classic magazine cover
 */
const tiles = [
  {
    label: "AI Strategist",
    path: "/developer",
    heroImg: neoHero,
    magImg: strategistCover,
  },
  {
    label: "Community Builder",
    path: "/stalker",
    heroImg: pantherHero,
    magImg: builderCover,
  },
  {
    label: "Speaking & Workshops",
    path: "/recruiter",
    heroImg: ironHero,
    magImg: teacherCover,
  },
  {
    label: "Meet Jermaine",
    path: "/adventurous",
    heroImg: batmanHero,
    magImg: adventurousCover,
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
            <Link to={tile.path} className="profile-link">
              <div className="profile-image-wrapper">
                <img
                  src={showHeroArt ? tile.heroImg : tile.magImg}
                  alt={tile.label}
                  className="profile-image"
                />
              </div>
              <div className="profile-label">{tile.label}</div>
            </Link>
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
          Tap to{" "}
          {showHeroArt
            ? "switch to the classic mag covers."
            : "show the hero profile art."}
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="main">
      <Routes>
        {/* Splash → sends to /browse */}
        <Route path="/" element={<NetflixTitle />} />

        {/* “Where should we start?” screen */}
        <Route path="/browse" element={<Home />} />

        {/* Legacy Netflix profile pages */}
        <Route path="/developer" element={<Developer />} />
        <Route path="/stalker" element={<Stalker />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/adventurous" element={<Adventurous />} />
      </Routes>
    </main>
  );
}
