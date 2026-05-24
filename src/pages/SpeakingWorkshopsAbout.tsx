import React from "react";
import { Link } from "react-router-dom";

/**
 * Placeholder "More Info" page for the Speaking & Workshops lane.
 *
 * Holds the locked Understand -> Believe -> Act structure. Phase 3
 * turns this into a real modal that opens over the lane.
 */
export default function SpeakingWorkshopsAbout() {
  return (
    <section
      style={{
        padding: "120px 8% 80px",
        color: "#fff",
        maxWidth: 820,
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          color: "#48b0ff",
          letterSpacing: "0.22em",
          fontSize: 13,
          borderLeft: "3px solid #48b0ff",
          paddingLeft: 10,
          textTransform: "uppercase",
        }}
      >
        JP ORIGINAL · SPEAKING & WORKSHOPS
      </p>

      <h1
        style={{
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          color: "#48b0ff",
          fontSize: "clamp(3rem, 6vw, 5rem)",
          margin: "16px 0 8px",
          letterSpacing: "0.04em",
        }}
      >
        Speaking & Workshops
      </h1>

      <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.92, marginBottom: 32 }}>
        Keynotes that move rooms. Workshops that install skills. Trainings
        that respect your team's intelligence. Built so people walk out
        knowing more about themselves than when they walked in.
      </p>

      <h2
        style={{
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          color: "#fff",
          fontSize: "1.8rem",
          letterSpacing: "0.06em",
          marginTop: 32,
        }}
      >
        Understand
      </h2>
      <p style={{ lineHeight: 1.6, opacity: 0.88 }}>
        Most rooms get talked AT. The ones that move get walked THROUGH.
        Every speaker gig, every workshop, every cohort is built so the
        room learns out loud together. Not lectured. Not performed.
      </p>

      <h2
        style={{
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          color: "#fff",
          fontSize: "1.8rem",
          letterSpacing: "0.06em",
          marginTop: 32,
        }}
      >
        Believe
      </h2>
      <p style={{ lineHeight: 1.6, opacity: 0.88 }}>
        The room is smarter than the speaker thinks. The job is to put the
        right ideas in front of the right people and get out of the way.
        Nobody learns at someone else's pace. Everyone learns when the work
        meets them where they are.
      </p>

      <h2
        style={{
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          color: "#fff",
          fontSize: "1.8rem",
          letterSpacing: "0.06em",
          marginTop: 32,
        }}
      >
        Act
      </h2>
      <ul style={{ lineHeight: 1.9, opacity: 0.88, paddingLeft: 20 }}>
        <li>
          <Link to="/contact?intent=speaking" style={{ color: "#48b0ff" }}>
            Submit a speaking inquiry
          </Link>
        </li>
        <li>
          <Link to="/speaking-workshops" style={{ color: "#48b0ff" }}>
            See workshops, talks, and trainings
          </Link>
        </li>
        <li>
          <Link to="/one-pager" style={{ color: "#48b0ff" }}>
            Download the one-pager
          </Link>
        </li>
      </ul>

      <p style={{ marginTop: 48 }}>
        <Link
          to="/speaking-workshops"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          &larr; Back to Speaking & Workshops
        </Link>
      </p>
    </section>
  );
}
