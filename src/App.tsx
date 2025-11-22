import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import NetflixTitle from "./NetflixTitle";
import ProfilePage from "./profilePage/profilePage";

/**
 * IMAGE IMPORTS
 * (filenames must match exactly what’s in src/images)
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

// NOTE: profileName values must match the union type in profilePage.tsx:
// type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';
const tiles = [
  {
    label: "AI Strategist",
    profileName: "developer",
    path: "/profile/developer",
    heroImg: neoHero,
    magImg: strategistCover,
  },
  {
    label: "Community Builder",
    profileName: "stalker",
    path: "/profile/stalker",
    heroImg: pantherHero,
    magImg: builderCover,
  },
  {
    label: "Speaking & Workshops",
    profileName: "recruiter",
    path: "/profile/recruiter",
    heroImg: ironHero,
    magImg: teacherCover,
  },
  {
    label: "Meet Jermaine",
    profileName: "adventure", // matches 'adventure' in profilePage.tsx
    path: "/profile/adventure",
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
        {/* Splash title card */}
        <Route path="/" element={<NetflixTitle />} />

        {/* “Where should we start?” page */}
        <Route path="/browse" element={<Home />} />

        {/* Original Netflix-style profile layout */}
        <Route path="/profile/:profileName" element={<ProfilePage />} />
      </Routes>
    </main>
  );
}

