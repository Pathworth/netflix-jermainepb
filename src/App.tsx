import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

import AIstrategist from "./pages/AIstrategist";
import CommunityBuilder from "./pages/CommunityBuilder";
import SpeakingWorkshops from "./pages/SpeakingWorkshops";
import MeetJermaine from "./pages/MeetJermaine";

const tiles = [
  { label: "AI Strategist", href: "/ai-strategist" },
  { label: "Community Builder", href: "/community-builder" },
  { label: "Speaking & Workshops", href: "/speaking-workshops" },
  { label: "Meet Jermaine", href: "/meet-jermaine" },
];

function Home() {
  return (
    <section className="home-section">
      <h1 className="home-title">Where should we start?</h1>

      <ul className="tiles-grid">
        {tiles.map((t) => (
          <li key={t.label} className="card">
            <Link to={t.href} className="card-link">
              <div className="avatar">{t.label[0]}</div>
              <div className="label">{t.label}</div>
            </Link>
          </li>
        ))}
      </ul>

      <p className="hint">Click any pillar to explore Jermaine’s expertise.</p>
    </section>
  );
}

export default function App() {
  const location = useLocation();

  // Show splash only on the root route
  const [showSplash, setShowSplash] = useState(location.pathname === "/");
  const [hasPlayedSound, setHasPlayedSound] = useState(false);

  useEffect(() => {
    // If user lands directly on a sub-page, skip splash
    if (location.pathname !== "/") {
      setShowSplash(false);
    }
  }, [location.pathname]);

  const handleSplashClick = () => {
    // Play sound once
    if (!hasPlayedSound) {
      const audio = new Audio(
        `${process.env.PUBLIC_URL || ""}/splash-sound.mp3`
      );
      setHasPlayedSound(true);
      audio.play().catch(() => {
        // Ignore autoplay errors
      });
    }

    // Fade out splash after a short delay
    setTimeout(() => {
      setShowSplash(false);
    }, 900);
  };

  return (
    <main className="main">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            className="splash"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.05,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
            onClick={handleSplashClick}
          >
            <div className="splash-inner">
              <h1 className="splash-title">Jermaine Peguese</h1>
              <p className="splash-subtitle">Personal Brand • Ops &amp; AI</p>
            </div>
            <p className="splash-hint">
              Click to continue &nbsp;•&nbsp; Best with sound on
            </p>
          </motion.div>
        ) : (
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/ai-strategist" element={<AIstrategist />} />
            <Route path="/community-builder" element={<CommunityBuilder />} />
            <Route
              path="/speaking-workshops"
              element={<SpeakingWorkshops />}
            />
            <Route path="/meet-jermaine" element={<MeetJermaine />} />
          </Routes>
        )}
      </AnimatePresence>
    </main>
  );
}
