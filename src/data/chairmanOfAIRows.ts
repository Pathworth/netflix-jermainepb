/**
 * Chairman of AI lane — row data.
 *
 * Phase 1.5 of the site rebuild. Replaces the legacy TopPicksRow +
 * ContinueWatching placeholder content with five curated rows pulled from
 * the Pathworth Business Bible v4.0 catalog and the Master Skill.
 *
 * Every card routes to either /chairman-of-ai/coming-soon (for content
 * still being produced) or an existing internal route. When real product
 * pages and assets are ready, swap the `route` field per card.
 */

export type GradientTheme =
  | "blue-deep"
  | "blue-electric"
  | "blue-sky"
  | "blue-twilight"
  | "blue-mist";

export type ContentCard = {
  /** Card title. Shown big on the card. */
  title: string;
  /** One-line subtitle. Shown small under the title on hover. */
  subtitle?: string;
  /** Small uppercase tag (e.g. "FLAGSHIP", "FREE", "$497"). Top-left chip. */
  badge?: string;
  /** Destination route. Internal paths only for Phase 1.5. */
  route: string;
  /** Gradient theme for the placeholder cover. */
  gradient: GradientTheme;
};

export type ContentRow = {
  /** Row title. Shown above the carousel. */
  title: string;
  /** Optional row eyebrow. Renders smaller above the title. */
  eyebrow?: string;
  /** Cards in the row. Carousel scrolls horizontally. */
  cards: ContentCard[];
};

/**
 * Build a /chairman-of-ai/coming-soon route with the title pre-filled
 * so the placeholder page can show what someone clicked into.
 */
const soon = (title: string): string =>
  `/chairman-of-ai/coming-soon?title=${encodeURIComponent(title)}`;

export const chairmanOfAIRows: ContentRow[] = [
  // ──────────────────────────────────────────────────────────────────
  // Row 1 — Chairman Originals · Watch
  // Video + audio. The Manifesto leads. Frameworks explained.
  // ──────────────────────────────────────────────────────────────────
  {
    eyebrow: "JP ORIGINAL",
    title: "Chairman Originals · Watch",
    cards: [
      {
        title: "The Chairman of AI Manifesto",
        subtitle: "The opening statement, recorded direct.",
        badge: "FEATURED",
        route: "/chairman-of-ai/manifesto",
        gradient: "blue-electric",
      },
      {
        title: "The Rebalance Era",
        subtitle: "The philosophy behind the movement.",
        badge: "PHILOSOPHY",
        route: soon("The Rebalance Era · In One Take"),
        gradient: "blue-twilight",
      },
      {
        title: "The Two Questions",
        subtitle: "What is my path worth. What is it worth fighting for.",
        badge: "ORIGIN",
        route: soon("The Two Questions"),
        gradient: "blue-deep",
      },
      {
        title: "DIBS Explained",
        subtitle: "Dabbler. Implementer. Builder. Strategist.",
        badge: "FRAMEWORK",
        route: soon("DIBS Explained"),
        gradient: "blue-sky",
      },
      {
        title: "The Four Stages",
        subtitle: "Recalibrate. Restore. Rebuild. Run.",
        badge: "FRAMEWORK",
        route: soon("The Four Stages"),
        gradient: "blue-mist",
      },
      {
        title: "Signature AF · Episode 1",
        subtitle: "The series, raw and direct.",
        badge: "SERIES",
        route: soon("Signature AF · Episode 1"),
        gradient: "blue-twilight",
      },
      {
        title: "YOUseful With AI · Workshop Recap",
        subtitle: "What happens when the room learns out loud.",
        badge: "LIVE",
        route: soon("YOUseful With AI Workshop Recap"),
        gradient: "blue-electric",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 2 — Chairman Originals · Read
  // PDFs, articles, downloads.
  // ──────────────────────────────────────────────────────────────────
  {
    eyebrow: "JP ORIGINAL",
    title: "Chairman Originals · Read",
    cards: [
      {
        title: "The Origin Prompt Workbook",
        subtitle: "Build the identity layer your AI loads first.",
        badge: "WORKBOOK",
        route: soon("The Origin Prompt Workbook"),
        gradient: "blue-electric",
      },
      {
        title: "The R3W Quickstart",
        subtitle: "Role. Request. Result with context.",
        badge: "FORMULA",
        route: soon("The R3W Quickstart"),
        gradient: "blue-sky",
      },
      {
        title: "The AI Tool Stack",
        subtitle: "Stop tool-hopping. Go deeper on fewer tools.",
        badge: "REFERENCE",
        route: soon("The AI Tool Stack"),
        gradient: "blue-mist",
      },
      {
        title: "HDN · The Buzzword Blocker",
        subtitle: "Hashtag Directive Notation. Strip AI-sounding language.",
        badge: "SYSTEM",
        route: soon("HDN · The Buzzword Blocker"),
        gradient: "blue-twilight",
      },
      {
        title: "The Brand VoicePrint",
        subtitle: "Map your voice so AI can represent it correctly.",
        badge: "TOOL",
        route: soon("The Brand VoicePrint Field Guide"),
        gradient: "blue-deep",
      },
      {
        title: "P.E.R.F.O.R.M. Cheat Sheet",
        subtitle: "The seven-step AI workflow on one page.",
        badge: "CHEAT SHEET",
        route: soon("P.E.R.F.O.R.M. Cheat Sheet"),
        gradient: "blue-sky",
      },
      {
        title: "The Founder Letter",
        subtitle: "Why Pathworth exists. In my own words.",
        badge: "ESSAY",
        route: soon("The Founder Letter"),
        gradient: "blue-twilight",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 3 — Workshops & Cohorts
  // ──────────────────────────────────────────────────────────────────
  {
    title: "Workshops & Cohorts",
    cards: [
      {
        title: "YOUseful With AI · Everyday Work",
        subtitle: "Practical AI for professionals and teams.",
        badge: "WORKSHOP",
        route: soon("YOUseful With AI · Everyday Work"),
        gradient: "blue-electric",
      },
      {
        title: "YOUseful With AI · Nonprofit Edition",
        subtitle: "Built for mission-driven teams. Community pricing.",
        badge: "NONPROFIT",
        route: soon("YOUseful With AI · Nonprofit Edition"),
        gradient: "blue-deep",
      },
      {
        title: "YOUseful With AI · Youth Edition",
        subtitle: "Hands-on AI for students and young adults.",
        badge: "YOUTH",
        route: soon("YOUseful With AI · Youth Edition"),
        gradient: "blue-sky",
      },
      {
        title: "The Setup",
        subtitle: "One session. Walk out with your Origin Prompt.",
        badge: "1-DAY",
        route: soon("The Setup"),
        gradient: "blue-twilight",
      },
      {
        title: "Spot Up Signature",
        subtitle: "Four-week transformation cohort. Max 20.",
        badge: "$1,497",
        route: soon("Spot Up Signature"),
        gradient: "blue-electric",
      },
      {
        title: "Spot Up Syndicate",
        subtitle: "Invite-only after Signature. Builders' room.",
        badge: "$297/MO",
        route: soon("Spot Up Syndicate"),
        gradient: "blue-mist",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 4 — Work With Me · Pathworth Concierge
  // The business arm. Calibration leads.
  // ──────────────────────────────────────────────────────────────────
  {
    eyebrow: "POWERED BY PATHWORTH INTELLIGENCE",
    title: "Work With Me · Pathworth Concierge",
    cards: [
      {
        title: "The Calibration",
        subtitle: "$497 diagnostic. Delivered through The Envelope.",
        badge: "START HERE",
        route: soon("The Calibration"),
        gradient: "blue-electric",
      },
      {
        title: "Pathworth Total Concierge",
        subtitle: "Standard. Professional. Authority. The full system.",
        badge: "FLAGSHIP",
        route: soon("Pathworth Total Concierge"),
        gradient: "blue-deep",
      },
      {
        title: "Pathworth Site Concierge",
        subtitle: "Your website, run by us. From $297/mo.",
        badge: "MANAGED",
        route: soon("Pathworth Site Concierge"),
        gradient: "blue-twilight",
      },
      {
        title: "Pathworth Voice Concierge",
        subtitle: "AI receptionist on your business line. From $397/mo.",
        badge: "MANAGED",
        route: soon("Pathworth Voice Concierge"),
        gradient: "blue-sky",
      },
      {
        title: "Pathworth Chat Concierge",
        subtitle: "Conversational AI for inbound. From $297/mo.",
        badge: "MANAGED",
        route: soon("Pathworth Chat Concierge"),
        gradient: "blue-mist",
      },
      {
        title: "Pathworth Knowledge Vault",
        subtitle: "Build your business's brain. One-time install.",
        badge: "BUILD",
        route: soon("Pathworth Knowledge Vault"),
        gradient: "blue-twilight",
      },
      {
        title: "Pathworth Database Reactivator",
        subtitle: "Turn dormant contacts into revenue.",
        badge: "CAMPAIGN",
        route: soon("Pathworth Database Reactivator"),
        gradient: "blue-electric",
      },
      {
        title: "Pathworth Consulting · Working Session",
        subtitle: "Strategic thinking partner. $400/hr standard.",
        badge: "1:1",
        route: "/contact?intent=working-session",
        gradient: "blue-deep",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 5 — Free Stuff · Spot Up Society
  // Lowest barrier. Front door to the ecosystem.
  // ──────────────────────────────────────────────────────────────────
  {
    title: "Free Stuff · Spot Up Society",
    cards: [
      {
        title: "Join Spot Up Society",
        subtitle: "Free community. The first door.",
        badge: "FREE",
        route: soon("Join Spot Up Society"),
        gradient: "blue-electric",
      },
      {
        title: "The DIBS Self-Assessment",
        subtitle: "Where are you with AI right now.",
        badge: "ASSESS",
        route: soon("The DIBS Self-Assessment"),
        gradient: "blue-sky",
      },
      {
        title: "The Two Questions",
        subtitle: "What is your path worth. Worth fighting for.",
        badge: "REFLECT",
        route: soon("The Two Questions · Reflection Prompt"),
        gradient: "blue-twilight",
      },
      {
        title: "R3W Starter Prompts",
        subtitle: "A sample pack to get you moving.",
        badge: "DOWNLOAD",
        route: soon("R3W Starter Prompts"),
        gradient: "blue-mist",
      },
      {
        title: "The Rebalance Drop",
        subtitle: "Weekly newsletter from the Chairman.",
        badge: "NEWSLETTER",
        route: soon("The Rebalance Drop · Newsletter"),
        gradient: "blue-deep",
      },
    ],
  },
];
