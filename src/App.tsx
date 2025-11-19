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
    <section className="home-section flex flex-col items-center justify-center h-screen bg-black text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-12">
        Where should we start?
      </h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tiles.map((t) => (
          <li
            key={t.label}
            className="card bg-gray-800 rounded-lg p-6 transform transition duration-500 hover:scale-105"
          >
            <Link to={t.href} className="flex flex-col items-center">
              <div className="avatar w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3">
                {t.label[0]}
              </div>
              <div className="label text-white text-lg font-semibold">
                {t.label}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <p className="hint mt-6 text-gray-400 text-sm md:text-base">
        Click any pillar to explore Jermaine’s expertise.
      </p>
    </section>
  );
}

export default function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(false);
  const [animateSplash, setAnimateSplash] = useState(false);

  useEffect(() => {
    // Only show splash if on home page
    if (location.pathname === "/") {
      setShowSplash(true);

      // Trigger scale animation
      const scaleTimer = setTimeout(() => setAnimateSplash(true), 2500);
      // Hide splash after 3.5s
      const endTimer = setTimeout(() => setShowSplash(false), 3500);

      return () => {
        clearTimeout(scaleTimer);
        clearTimeout(endTimer);
      };
    }
  }, [location.pathname]);

  return (
    <main className="main">
      <AnimatePresence mode="wait">
        {showSplash && location.pathname === "/" ? (
          <motion.div
            key="splash"
            className={`splash ${animateSplash ? "scaled" : ""}`}
            initial={{ opacity: 1, scale: 1 }}
            animate={
              animateSplash
                ? { scale: 2, opacity: 0, transition: { duration: 1 } }
                : { scale: 1, opacity: 1 }
            }
            exit={{ opacity: 0 }}
          >
            <h1>Jermaine Peguese</h1>
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

