import React from "react";
import { Link } from "react-router-dom";

/**
 * Placeholder "More Info" page for the Community Builder lane.
 *
 * Holds the locked Understand -> Believe -> Act structure. Phase 3
 * turns this into a real modal that opens over the lane.
 */
export default function CommunityBuilderAbout() {
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
        JP ORIGINAL · COMMUNITY BUILDER
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
        Community Builder
      </h1>

      <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.92, marginBottom: 32 }}>
        Detroit-first, people-first. The work that doesn't get headlines but
        builds the city we actually want.
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
        Communities don't get rebuilt by accident. Same neighborhoods get left
        behind every wave. Detroit is my home. The people who shaped me built
        me into the man who could come back and do this work. The Community
        Builder lane is the through-line of every program I lead, every
        committee I sit on, every dinner I help plan.
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
        The mission is not a brand. The mission is the work. Protect the
        mission. Protect the people. Leave something others can carry
        forward. The chapter, the branch, the program, the dinner. Every
        room is a chance to do that or fail at it.
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
          <Link to="/contact?intent=community" style={{ color: "#48b0ff" }}>
            Partner with the work
          </Link>
        </li>
        <li>
          <Link to="/community-builder" style={{ color: "#48b0ff" }}>
            See the programs I lead
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
          to="/community-builder"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          &larr; Back to Community Builder
        </Link>
      </p>
    </section>
  );
}
