// src/App.tsx
import React, { useState } from "react";
import { Routes, Route, Link, Outlet, useLocation, Navigate } from "react-router-dom";
import "./App.css";

import NetflixTitle from "./NetflixTitle";
import Navbar from "./components/NavBar";

import AIstrategist from "./pages/AIstrategist";
import CommunityBuilder from "./pages/CommunityBuilder";
import SpeakingWorkshops from "./pages/SpeakingWorkshops";
import MeetJermaine from "./pages/MeetJermaine";

import Contact from "./pages/Contact";
import OnePager from "./pages/OnePager";
import Skills from "./pages/Skills";

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

const tiles = [
  {
    label: "AI Strategist",
    path: "/ai-strategist",
    heroImg: neoHero,
    magImg: strategistCover,
  },
  {
    label: "Community Builder",
    path: "/community-builder",
    heroImg: pantherHero,
    magImg: builderCover,
  },
  {
    label: "Speaking & Workshops",
    path: "/speaking-workshops",
    heroImg: ironHero,
    magImg: teacherCover,
  },
  {
    label: "Meet Jermaine",
    path: "/meet-jermaine",
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
        <p className="profile-hint">Click any pillar to explore Jermaine’s expertise.</p>

        <button
          type="button"
          className="manage-profiles-btn"
          onClick={() => setShowHeroArt((prev) => !prev)}
        >
          MANAGE PROFILES
        </button>

        <p className="manage-profiles-help">
          Tap to{" "}
          {showHeroArt ? "switch to the classic mag covers." : "show the hero profile art."}
        </p>
      </div>
    </section>
  );
}

/**
 * Layout wraps all normal pages with the Navbar.
 * We hide Navbar only on the splash title card at "/".
 */
function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Splash title card */}
        <Route path="/" element={<NetflixTitle />} />

        {/* “Where should we start?” page */}
        <Route path="/browse" element={<Home />} />

        {/* Pillars */}
        <Route path="/ai-strategist" element={<AIstrategist />} />
        <Route path="/community-builder" element={<CommunityBuilder />} />
        <Route path="/speaking-workshops" element={<SpeakingWorkshops />} />
        <Route path="/meet-jermaine" element={<MeetJermaine />} />

        {/* Extra pages */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/one-pager" element={<OnePager />} />
        <Route path="/contact" element={<Contact />} />

        {/* Optional alias routes to prevent old links from 404 */}
        <Route path="/contact-me" element={<Contact />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/browse" replace />} />
      </Route>
    </Routes>
  );
}
