import React from "react";
import BillboardHero from "../components/BillboardHero";
import TopPicksRow from "../profilePage/TopPicksRow";
import ContinueWatching from "../profilePage/ContinueWatching";
import { pillarConfig } from "../data/pillarConfig";

/**
 * Chairman of AI lane page.
 *
 * Replaces the old AI Strategist page. Uses the new BillboardHero in place of
 * the old static-GIF ProfileBanner. The two existing rows (TopPicksRow,
 * ContinueWatching) still key off "ai-strategist" in their internal config
 * during Phase 1; row keys get renamed in Phase 2 when the rest of the lanes
 * migrate to BillboardHero.
 */
export default function ChairmanOfAI() {
  const config = pillarConfig["chairman-of-ai"];

  if (!config) {
    return (
      <div style={{ padding: 80, color: "#fff" }}>
        Chairman of AI configuration is missing.
      </div>
    );
  }

  return (
    <>
      <BillboardHero {...config} />
      <TopPicksRow profile="ai-strategist" />
      <ContinueWatching profile="ai-strategist" />
    </>
  );
}
