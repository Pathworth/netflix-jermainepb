import React from "react";
import BillboardHero from "../components/BillboardHero";
import ContentRow from "../components/ContentRow";
import { pillarConfig } from "../data/pillarConfig";
import { meetJermaineRows } from "../data/meetJermaineRows";

/**
 * Meet Jermaine lane page.
 *
 * Phase 2: BillboardHero replaces the legacy ProfilePage. Five
 * ContentRows below the hero route to the existing deep pages
 * (/bio, /work-experience, /core-values, /skills, /one-pager) and
 * surface the story, values, lanes, and ways to connect.
 */
export default function MeetJermaine() {
  const config = pillarConfig["meet-jermaine"];

  if (!config) {
    return (
      <div style={{ padding: 80, color: "#fff" }}>
        Meet Jermaine configuration is missing.
      </div>
    );
  }

  return (
    <>
      <BillboardHero {...config} />
      <div className="meet-jermaine-rows">
        {meetJermaineRows.map((row, i) => (
          <ContentRow key={row.title} row={row} index={i} />
        ))}
      </div>
    </>
  );
}
