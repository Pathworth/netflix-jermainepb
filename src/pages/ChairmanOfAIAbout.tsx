import React from "react";
import { Link } from "react-router-dom";

/**
 * Placeholder "More Info" page for the Chairman of AI lane.
 *
 * Phase 3 replaces this with a real Netflix-style modal that opens over the
 * lane. For now it lives at /chairman-of-ai/about and gives a clean read of
 * the pillar copy in the locked Understand -> Believe -> Act structure.
 */
export default function ChairmanOfAIAbout() {
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
        JP ORIGINAL · CHAIRMAN OF AI
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
        Chairman of AI
      </h1>

      <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.92, marginBottom: 32 }}>
        Practical AI for the people and organizations usually left out of the
        conversation. Calm in chaos. Clarity in complexity. Built so you can
        actually use it.
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
        AI is moving faster than most teams can absorb. The conversation lives
        at the top of the stack, with the people closest to the work mostly
        left out. The Chairman of AI seat exists to close that gap. The role:
        hold the standard, translate the noise, and make AI actually usable on
        the ground.
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
        AI should enhance people, not replace them. Tech follows purpose, not
        the other way around. The win is not a flashy demo. The win is a small
        business owner who can close their books faster, a nonprofit director
        who can draft a grant tonight instead of next week, a teacher who can
        write feedback that still sounds like them.
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
          <Link to="/chairman-of-ai/manifesto" style={{ color: "#48b0ff" }}>
            Watch the manifesto
          </Link>
        </li>
        <li>
          <Link
            to="/contact?intent=working-session"
            style={{ color: "#48b0ff" }}
          >
            Book a working session
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
          to="/chairman-of-ai"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          &larr; Back to Chairman of AI
        </Link>
      </p>
    </section>
  );
}
