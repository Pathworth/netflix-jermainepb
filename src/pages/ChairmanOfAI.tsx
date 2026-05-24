import React from "react";
import BillboardHero from "../components/BillboardHero";
import ContentRow from "../components/ContentRow";
import { pillarConfig } from "../data/pillarConfig";
import { chairmanOfAIRows } from "../data/chairmanOfAIRows";

/**
 * Chairman of AI lane page.
 *
 * Phase 1: BillboardHero replaced the legacy AI Strategist banner.
 * Phase 1.5: ContentRows replace TopPicksRow + ContinueWatching with
 * five curated rows drawn from the Pathworth Business Bible v4.0
 * catalog. Card destinations point to internal placeholder pages until
 * the real product and content pages come online.
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
      <div className="chairman-rows">
        {chairmanOfAIRows.map((row, i) => (
          <ContentRow key={row.title} row={row} index={i} />
        ))}
      </div>
    </>
  );
}
