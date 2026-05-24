import React from "react";
import BillboardHero from "../components/BillboardHero";
import ContentRow from "../components/ContentRow";
import { pillarConfig } from "../data/pillarConfig";
import { communityBuilderRows } from "../data/communityBuilderRows";

/**
 * Community Builder lane page.
 *
 * Phase 2: BillboardHero replaces the legacy ProfilePage. Five
 * ContentRows below the hero pull from the civic and nonprofit work
 * Jermaine leads through NAACP Detroit Branch, RPX Michigan, and NLC
 * Detroit.
 */
export default function CommunityBuilder() {
  const config = pillarConfig["community-builder"];

  if (!config) {
    return (
      <div style={{ padding: 80, color: "#fff" }}>
        Community Builder configuration is missing.
      </div>
    );
  }

  return (
    <>
      <BillboardHero {...config} />
      <div className="community-rows">
        {communityBuilderRows.map((row, i) => (
          <ContentRow key={row.title} row={row} index={i} />
        ))}
      </div>
    </>
  );
}
