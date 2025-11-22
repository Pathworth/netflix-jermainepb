import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import NetflixTitle from "./NetflixTitle";

// Existing “pages” (you can keep or remove these if you want)
import AIstrategist from "./pages/AIstrategist";
import CommunityBuilder from "./pages/CommunityBuilder";
import SpeakingWorkshops from "./pages/SpeakingWorkshops";
import MeetJermaine from "./pages/MeetJermaine";

// Dynamic Netflix profile page
import ProfilePage from "./profilePage/profilePage";

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

// Browse-page tiles
const tiles = [
  {
    label: "AI Strategist",
    path: "/profile/developer",         // maps to developer profile
    heroImg: neoHero,
    magImg: strategistCover,
  },
  {
    label: "Community Builder",
    path: "/profile/stalker",           // maps to stalker profile
    heroImg: pantherHero,
    magImg: builderCover,
  },
  {
    label: "Speaking & Workshops",
    path: "/profile/recruiter",         // maps to recruiter profile
    heroImg: ironHero,
    magImg: teacherCover,
  },
  {
    label: "Meet Jermaine",
    path: "/profile/adventure",         // maps to adventure profile
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

        {/* Browse / “Who’s watching?” */}
        <Route path="/browse" element={<Home />} />

        {/* Optional original pages (still reachable if you want them) */}
        <Route path="/ai-strategist" element={<AIstrategist />} />
        <Route path="/community-builder" element={<CommunityBuilder />} />
        <Route path="/speaking-workshops" element={<SpeakingWorkshops />} />
        <Route path="/meet-jermaine" element={<MeetJermaine />} />

        {/* Dynamic Netflix-style profile page */}
        <Route path="/profile/:profileName" element={<ProfilePage />} />
      </Routes>
    </main>
  );
}
