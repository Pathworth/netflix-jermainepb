import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import NetflixTitle from "./NetflixTitle";
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
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<NetflixTitle />} />
        <Route path="/browse" element={<Home />} />
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
