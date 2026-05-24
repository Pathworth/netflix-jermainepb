import React from "react";
import { Link, useLocation } from "react-router-dom";

type PillarKey =
  | "chairman-of-ai"
  | "community-builder"
  | "speaking-workshops"
  | "meet-jermaine";

type Props = {
  pillar: PillarKey;
};

const PILLAR_LABEL: Record<PillarKey, string> = {
  "chairman-of-ai": "CHAIRMAN OF AI",
  "community-builder": "COMMUNITY BUILDER",
  "speaking-workshops": "SPEAKING & WORKSHOPS",
  "meet-jermaine": "MEET JERMAINE",
};

const PILLAR_PATH: Record<PillarKey, string> = {
  "chairman-of-ai": "/chairman-of-ai",
  "community-builder": "/community-builder",
  "speaking-workshops": "/speaking-workshops",
  "meet-jermaine": "/meet-jermaine",
};

/**
 * Generic placeholder destination for any pillar lane.
 *
 * Mounted at /<pillar>/coming-soon. Reads a `?title=` query param so the
 * card the visitor clicked is named back to them. CTAs route to a real
 * booking flow and to the pillar's About page. Back link returns to the
 * pillar landing.
 */
export default function PillarComingSoon({ pillar }: Props) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const title = params.get("title") || "This piece";

  const aboutPath = `${PILLAR_PATH[pillar]}/about`;

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
        JP ORIGINAL · {PILLAR_LABEL[pillar]}
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
        Sign up to be notified, or book a working session if you do not want
        to wait.
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
          to={aboutPath}
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
          to={PILLAR_PATH[pillar]}
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          &larr; Back to {PILLAR_LABEL[pillar]}
        </Link>
      </p>
    </section>
  );
}
