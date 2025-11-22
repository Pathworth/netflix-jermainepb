import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import NetflixTitle from "./NetflixTitle";
import AIstrategist from "./pages/AIstrategist";
import CommunityBuilder from "./pages/CommunityBuilder";
import SpeakingWorkshops from "./pages/SpeakingWorkshops";
import MeetJermaine from "./pages/MeetJermaine";

// --- Import hero images (from src/images) ---
import neoHero from "./images/neo-matrix-jermaine-right.png";
import pantherHero from "./images/black-panther-jermaine.png";
import ironHero from "./images/iron-man-jermaine-right.png";
import batmanHero from "./images/batman-jermaine.png";

// Classic blue-tile profiles (letters only)
const classicProfiles = [
  {
    label: "AI Strategist",
    href: "/ai-strategist",
    initial: "A",
  },
  {
    label: "Community Builder",
    href: "/community-builder",
    initial: "C",
  },
  {
    label: "Speaking & Workshops",
    href: "/speaking-workshops",
    initial: "S",
  },
  {
    label: "Meet Jermaine",
    href: "/meet-jermaine",
    initial: "M",
  },
];

// Hero-art profiles (superhero images)
const heroProfiles = [
  {
    label: "AI Strategist",
    href: "/ai-strategist",
    img: neoHero,
  },
  {
    label: "Community Builder",
    href: "/community-builder",
    img: pantherHero,
  },
  {
    label: "Speaking & Workshops",
    href: "/speaking-workshops",
    img: ironHero,
  },
  {
    label: "Meet Jermaine",
    href: "/meet-jermaine",
    img: batmanHero,
  },
];

function Home() {
  // true = show hero art, false = show classic blue tiles
  const [showHeroProfiles, setShowHeroProfiles] = useState(true);

  const profiles = showHeroProfiles ? heroProfiles : classicProfiles;

  return (
    <section className="home-screen">
      <h1 className="home-title">Where should we start?</h1>

      <ul className="profile-grid">
        {profiles.map((profile) => (
          <li key={profile.label} className="profile-card">
            <Link to={profile.href} className="profile-link">
              <div
                className={
                  "profile-image-wrapper " +
                  (showHeroProfiles
                    ? "profile-image-wrapper-hero"
                    : "profile-image-wrapper-classic")
                }
              >
                {showHeroProfiles ? (
                  <img
                    src={"img" in profile ? profile.img : undefined}
                    alt={profile.label}
                    className="profile-image"
                  />
                ) : (
                  <span className="profile-initial">
                    {"initial" in profile ? profile.initial : ""}
                  </span>
                )}
              </div>

              <div className="profile-label">{profile.label}</div>
            </Link>
          </li>
        ))}
      </ul>

      <p className="profile-hint">
        Click any pillar to explore Jermaine’s expertise.
      </p>

      <button
        type="button"
        className="manage-profiles-btn"
        onClick={() => setShowHeroProfiles((prev) => !prev)}
      >
        Manage Profiles
      </button>
      <p className="manage-profiles-sub">
        {showHeroProfiles
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
        {/* Splash title page */}
        <Route path="/" element={<NetflixTitle />} />

        {/* “Where should we start?” browse page */}
        <Route path="/browse" element={<Home />} />

        {/* Sub-pages */}
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
