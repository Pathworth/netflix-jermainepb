import React from "react";
import BillboardHero from "../components/BillboardHero";
import ContentRow from "../components/ContentRow";
import { pillarConfig } from "../data/pillarConfig";
import { speakingWorkshopsRows } from "../data/speakingWorkshopsRows";

/**
 * Speaking & Workshops lane page.
 *
 * Phase 2: BillboardHero replaces the legacy ProfilePage. Five
 * ContentRows below the hero cover keynotes, workshops, talks &
 * topics, booking, and free entry points.
 */
export default function SpeakingWorkshops() {
  const config = pillarConfig["speaking-workshops"];

  if (!config) {
    return (
      <div style={{ padding: 80, color: "#fff" }}>
        Speaking & Workshops configuration is missing.
      </div>
    );
  }

  return (
    <>
      <BillboardHero {...config} />
      <div className="speaking-rows">
        {speakingWorkshopsRows.map((row, i) => (
          <ContentRow key={row.title} row={row} index={i} />
        ))}
      </div>
    </>
  );
}
