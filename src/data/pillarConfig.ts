import neoJermaine from "../images/neo-matrix-jermaine-right.png";
import type { BillboardHeroProps } from "../components/BillboardHero";

/**
 * Pillar-specific BillboardHero configuration.
 *
 * Phase 1 ships Chairman of AI only. Other lanes still mount the legacy
 * ProfilePage component and will be migrated to BillboardHero in Phase 2.
 */

export type PillarKey =
  | "chairman-of-ai"
  | "community-builder"
  | "speaking-workshops"
  | "meet-jermaine";

export const pillarConfig: Partial<Record<PillarKey, BillboardHeroProps>> = {
  "chairman-of-ai": {
    pillar: "chairman-of-ai",
    badge: "JP ORIGINAL · CHAIRMAN OF AI",
    titleFallback: "CHAIRMAN OF AI",
    headline: "THE OPERATOR'S SEAT AT THE AI TABLE",
    tagline:
      "Practical AI for the people and organizations usually left out of the conversation. Calm in chaos. Clarity in complexity. Built so you can actually use it.",
    primaryCta: {
      label: "Watch the Manifesto",
      route: "/chairman-of-ai/manifesto",
      icon: "watch",
    },
    secondaryCta: {
      label: "More Info",
      route: "/chairman-of-ai/about",
      icon: "info",
    },
    backgroundImage: neoJermaine,
    metadata: [
      "Founder, Pathworth Consulting",
      "Detroit",
      "AI Operator",
    ],
  },
};
