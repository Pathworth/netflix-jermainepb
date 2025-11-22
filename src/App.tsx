// src/App.tsx
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import NetflixTitle from "./NetflixTitle";

// If you still want these later, we can re-use them on other routes
import AIstrategist from "./pages/AIstrategist";
import CommunityBuilder from "./pages/CommunityBuilder";
import SpeakingWorkshops from "./pages/SpeakingWorkshops";
import MeetJermaine from "./pages/MeetJermaine";

// Legacy Netflix profile page (file: src/profilePage/profilePage.tsx)
import ProfilePage from "./profilePage/profilePage";

// Hero / superhero art
import neoHero from "./images/neo-matrix-jermaine-right.png";
import pantherHero from "./images/black-panther-jermaine.png";
import ironHero from "./images/iron-man-jermaine-right.png";
import batmanHero from "./images/batman-jermaine.png";

// Magazine cover tiles
import adventurousCover from "./images/Adventurous-Mag-cover-trans.png";
import teacherCover from "./images/Teacher-Mag-cover-trans.png";
import builderCover from "./images/Builder-Mag-cover-trans.png";
import strategistCover from "./images/Strategist-Mag-cover-trans.png";

// Tiles for the “Where should we start?” screen
// NOTE: paths now point to /profile/:profileName to feed profilePage.tsx
const tiles = [
  {
    label: "AI Strategist",
    path: "/profile/developer",
    heroImg: neoHero,
    magImg: strategistCover,
  },
  {
    label: "Community Builder",
    path: "/profile/stalker",
    heroImg: pantherHero,
    magImg: builderCover,
  },
  {
    label: "Speaking & Workshops",
    path: "/profile/recruiter",
    heroImg: ironHero,
    magImg: teacherCover,
  },
  {
    label: "Meet Jermaine",
    path: "/profile/adventure", // matches 'adventure' in ProfileType
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
        {/* Splash title card on root */}
        <Route path="/" element={<NetflixTitle />} />

        {/* “Where should we start?” page */}
        <Route path="/browse" element={<Home />} />

        {/* Legacy Netflix profile experience */}
        <Route path="/profile/:profileName" element={<ProfilePage />} />

        {/* Keep these around on their original routes if you want them later */}
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
