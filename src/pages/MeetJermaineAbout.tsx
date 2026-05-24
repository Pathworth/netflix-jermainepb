import React from "react";
import { Link } from "react-router-dom";

/**
 * Placeholder "More Info" page for the Meet Jermaine lane.
 *
 * Holds the locked Understand -> Believe -> Act structure. Phase 3
 * turns this into a real modal that opens over the lane.
 */
export default function MeetJermaineAbout() {
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
        JP ORIGINAL · MEET JERMAINE
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
        Meet Jermaine
      </h1>

      <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.92, marginBottom: 32 }}>
        Detroit-based. Founder of Pathworth. Chairman of AI. Father's son.
        Community organizer. The man behind every line of work on this
        site. Calm in chaos. Clarity in complexity. Follow-through that
        holds.
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
        The work is not the man. The man is not the work. But the work
        comes through the man, so knowing the man matters. Detroit raised
        me. Construction taught me details. Recovery taught me discipline.
        Family taught me follow-through. Pathworth is what came out of all
        of that.
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
        Alignment over approval. People over ego. Clarity before action.
        Execution over talk. Legacy over noise. If I say I got you, it gets
        done. If something is not aligned, I walk. The Standing Code holds
        even when nobody is watching, because nobody watching is the test.
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
          <Link to="/bio" style={{ color: "#48b0ff" }}>
            Read the Blueprint Bio
          </Link>
        </li>
        <li>
          <Link to="/work-experience" style={{ color: "#48b0ff" }}>
            Walk the Experience Seasons
          </Link>
        </li>
        <li>
          <Link to="/core-values" style={{ color: "#48b0ff" }}>
            Step through Core Values
          </Link>
        </li>
        <li>
          <Link to="/skills" style={{ color: "#48b0ff" }}>
            See Superpowers · the 15 pillars
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: "#48b0ff" }}>
            Contact directly
          </Link>
        </li>
      </ul>

      <p style={{ marginTop: 48 }}>
        <Link
          to="/meet-jermaine"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          &larr; Back to Meet Jermaine
        </Link>
      </p>
    </section>
  );
}
