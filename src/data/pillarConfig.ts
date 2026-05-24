import neoJermaine from "../images/neo-matrix-jermaine-right.png";
import pantherJermaine from "../images/black-panther-jermaine.png";
import ironJermaine from "../images/iron-man-jermaine-right.png";
import batmanJermaine from "../images/batman-jermaine.png";
import type { BillboardHeroProps } from "../components/BillboardHero";

/**
 * Pillar-specific BillboardHero configuration.
 *
 * Phase 1 shipped Chairman of AI on the new BillboardHero. Phase 2
 * brings Community Builder, Speaking & Workshops, and Meet Jermaine
 * onto the same component, each with its own art, badge, eyebrow,
 * tagline, buttons, and metadata chips.
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

  "community-builder": {
    pillar: "community-builder",
    badge: "JP ORIGINAL · COMMUNITY BUILDER",
    titleFallback: "COMMUNITY BUILDER",
    headline: "WHERE CONNECTION FUELS CHANGE",
    tagline:
      "Detroit-first, people-first. The work that doesn't get headlines but builds the city we actually want. Protect the mission. Protect the people. Leave something others can carry forward.",
    primaryCta: {
      label: "Watch the Reel",
      route: "/community-builder/coming-soon?title=The%20Community%20Builder%20Reel",
      icon: "watch",
    },
    secondaryCta: {
      label: "More Info",
      route: "/community-builder/about",
      icon: "info",
    },
    backgroundImage: pantherJermaine,
    metadata: [
      "NAACP Detroit Branch",
      "RPX Michigan",
      "NLC Detroit",
    ],
  },

  "speaking-workshops": {
    pillar: "speaking-workshops",
    badge: "JP ORIGINAL · SPEAKING & WORKSHOPS",
    titleFallback: "SPEAKING & WORKSHOPS",
    headline: "WHERE THE ROOM LEARNS OUT LOUD",
    tagline:
      "Keynotes that move rooms. Workshops that install skills. Trainings that respect your team's intelligence. Built so people walk out knowing more about themselves than when they walked in.",
    primaryCta: {
      label: "Watch the Speaker Reel",
      route: "/speaking-workshops/coming-soon?title=The%20Speaker%20Reel",
      icon: "watch",
    },
    secondaryCta: {
      label: "More Info",
      route: "/speaking-workshops/about",
      icon: "info",
    },
    backgroundImage: ironJermaine,
    metadata: [
      "Keynote · Workshop · Training",
      "YOUseful With AI",
      "Detroit-based",
    ],
  },

  "meet-jermaine": {
    pillar: "meet-jermaine",
    badge: "JP ORIGINAL · MEET JERMAINE",
    titleFallback: "MEET JERMAINE",
    headline: "THE OPERATOR BEHIND THE WORK",
    tagline:
      "Detroit-based. Founder of Pathworth. Chairman of AI. Father's son. Community organizer. The man behind every line of work on this site. Calm in chaos. Clarity in complexity. Follow-through that holds.",
    primaryCta: {
      label: "Watch the Bio Reel",
      route: "/meet-jermaine/coming-soon?title=The%20Bio%20Reel",
      icon: "watch",
    },
    secondaryCta: {
      label: "More Info",
      route: "/meet-jermaine/about",
      icon: "info",
    },
    backgroundImage: batmanJermaine,
    metadata: [
      "Detroit",
      "Founder · Pathworth",
      "Chairman of AI",
    ],
  },
};
