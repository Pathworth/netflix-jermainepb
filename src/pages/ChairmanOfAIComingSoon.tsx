import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Generic placeholder destination for Chairman of AI cards.
 *
 * Phase 1.5 ships content row cards that point at offerings still being
 * packaged for public consumption. Each card routes here with a `?title=`
 * query so the placeholder can name what was clicked. When real
 * destinations come online, the route field in `chairmanOfAIRows.ts`
 * gets swapped out card-by-card.
 */
export default function ChairmanOfAIComingSoon() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const title = params.get("title") || "This piece";

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
          fontSize: "clamp(2.4rem, 5vw, 4rem)",
          margin: "16px 0 12px",
          letterSpacing: "0.04em",
          lineHeight: 1.05,
        }}
      >
        {title}
      </h1>

      <p
        style={{
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          color: "rgba(255,255,255,0.7)",
          letterSpacing: "0.22em",
          fontSize: 14,
          textTransform: "uppercase",
          marginBottom: 28,
        }}
      >
        Coming soon
      </p>

      <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.92, marginBottom: 32 }}>
        This drop is in production. When it goes live, it lands here first.
        Join Spot Up Society to know the moment it drops, or book a working
        session if you do not want to wait.
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
