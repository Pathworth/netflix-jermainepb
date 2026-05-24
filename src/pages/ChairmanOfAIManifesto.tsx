import React from "react";
import { Link } from "react-router-dom";

/**
 * Placeholder Manifesto page for the Chairman of AI lane.
 *
 * Holds the slot for the actual manifesto video. When the video drops, this
 * page becomes the player frame. For now it presents a "coming soon" plate
 * and routes viewers toward the existing CTAs.
 */
export default function ChairmanOfAIManifesto() {
  return (
    <section
      style={{
        padding: "120px 8% 80px",
        color: "#fff",
        maxWidth: 920,
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
          margin: "16px 0 16px",
          letterSpacing: "0.04em",
        }}
      >
        The Manifesto
      </h1>

      <div
        style={{
          aspectRatio: "16 / 9",
          background: "linear-gradient(135deg, #0a1929, #000)",
          border: "1px solid rgba(72, 176, 255, 0.3)",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 12,
          margin: "16px 0 24px",
        }}
      >
        <p
          style={{
            fontSize: 13,
            letterSpacing: "0.22em",
            opacity: 0.7,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Coming soon
        </p>
        <p
          style={{
            fontSize: 18,
            opacity: 0.92,
            textAlign: "center",
            maxWidth: 520,
            padding: "0 16px",
            margin: 0,
          }}
        >
          The Chairman of AI manifesto, recorded direct. Drops with the next
          site build.
        </p>
      </div>

      <p style={{ lineHeight: 1.6, opacity: 0.88, marginBottom: 24 }}>
        In the meantime, book a working session or read the breakdown.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link
          to="/contact?intent=working-session"
          style={{
            background: "#fff",
            color: "#000",
            padding: "12px 24px",
            borderRadius: 6,
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Book a Working Session
        </Link>
        <Link
          to="/chairman-of-ai/about"
          style={{
            background: "rgba(109, 109, 110, 0.6)",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: 6,
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          More Info
        </Link>
      </div>

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
