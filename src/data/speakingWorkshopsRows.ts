import type { ContentRow } from "./chairmanOfAIRows";

/**
 * Speaking & Workshops lane — row data.
 *
 * Keynotes, workshops, trainings, cohorts. Built so rooms learn out
 * loud and walk out knowing more about themselves than when they
 * walked in. Pulls from YOUseful With AI, The Setup, Spot Up Signature,
 * Spot Up Syndicate.
 */

const soon = (title: string): string =>
  `/speaking-workshops/coming-soon?title=${encodeURIComponent(title)}`;

export const speakingWorkshopsRows: ContentRow[] = [
  // ──────────────────────────────────────────────────────────────────
  // Row 1 — Live Recordings · Watch
  // ──────────────────────────────────────────────────────────────────
  {
    eyebrow: "JP ORIGINAL",
    title: "Live Recordings · Watch",
    cards: [
      {
        title: "The Speaker Reel",
        subtitle: "Highlights from rooms across Detroit and beyond.",
        badge: "FEATURED",
        route: soon("The Speaker Reel"),
        gradient: "blue-electric",
      },
      {
        title: "The Rebalance Era · Keynote",
        subtitle: "The headline talk. Roomful.",
        badge: "KEYNOTE",
        route: soon("The Rebalance Era Keynote"),
        gradient: "blue-deep",
      },
      {
        title: "YOUseful With AI · Workshop Recap",
        subtitle: "What happens when the room learns out loud.",
        badge: "WORKSHOP",
        route: soon("YOUseful With AI Workshop Recap"),
        gradient: "blue-twilight",
      },
      {
        title: "Spot Up Signature · Cohort Highlights",
        subtitle: "Four weeks. Twenty people. Real transformation.",
        badge: "COHORT",
        route: soon("Spot Up Signature Cohort Highlights"),
        gradient: "blue-sky",
      },
      {
        title: "The Setup · Live Session",
        subtitle: "One sitting. Walk out with your Origin Prompt.",
        badge: "WORKSHOP",
        route: soon("The Setup Live Session"),
        gradient: "blue-mist",
      },
      {
        title: "Panel · AI Without Erasing You",
        subtitle: "Live panel discussion.",
        badge: "PANEL",
        route: soon("Panel · AI Without Erasing You"),
        gradient: "blue-twilight",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 2 — Workshops & Cohorts
  // ──────────────────────────────────────────────────────────────────
  {
    title: "Workshops & Cohorts",
    cards: [
      {
        title: "YOUseful With AI · Everyday Work",
        subtitle: "For professionals and corporate teams.",
        badge: "$3K–$8K",
        route: soon("YOUseful With AI · Everyday Work"),
        gradient: "blue-electric",
      },
      {
        title: "YOUseful With AI · Nonprofit",
        subtitle: "Mission-driven teams. Community pricing.",
        badge: "NONPROFIT",
        route: soon("YOUseful With AI · Nonprofit"),
        gradient: "blue-deep",
      },
      {
        title: "YOUseful With AI · Business",
        subtitle: "Entrepreneurs and small business owners.",
        badge: "BUSINESS",
        route: soon("YOUseful With AI · Business"),
        gradient: "blue-twilight",
      },
      {
        title: "YOUseful With AI · Youth Edition",
        subtitle: "Students and young adults. Hands-on.",
        badge: "YOUTH",
        route: soon("YOUseful With AI · Youth"),
        gradient: "blue-sky",
      },
      {
        title: "The Setup",
        subtitle: "One sitting. Origin Prompt in your hands.",
        badge: "1-DAY",
        route: soon("The Setup"),
        gradient: "blue-mist",
      },
      {
        title: "Spot Up Signature · 4-Week Cohort",
        subtitle: "P.A.T.H., P.E.R.F.O.R.M., BrandGPT, VoicePrint.",
        badge: "$1,497",
        route: soon("Spot Up Signature"),
        gradient: "blue-twilight",
      },
      {
        title: "Spot Up Syndicate",
        subtitle: "Invite-only builders' room. Monthly.",
        badge: "$297/MO",
        route: soon("Spot Up Syndicate"),
        gradient: "blue-electric",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 3 — Talks & Topics
  // ──────────────────────────────────────────────────────────────────
  {
    title: "Talks & Topics",
    cards: [
      {
        title: "The Rebalance Era",
        subtitle: "The keynote. The frame for everything.",
        badge: "KEYNOTE",
        route: soon("The Rebalance Era Talk"),
        gradient: "blue-electric",
      },
      {
        title: "Practical AI for Real Operators",
        subtitle: "For people doing the work, not the talk.",
        badge: "TALK",
        route: soon("Practical AI for Real Operators"),
        gradient: "blue-sky",
      },
      {
        title: "The Two Questions",
        subtitle: "What is my path worth. Worth fighting for.",
        badge: "TALK",
        route: soon("The Two Questions Talk"),
        gradient: "blue-deep",
      },
      {
        title: "Calm in Chaos · The Operator's Mindset",
        subtitle: "How to lead when everything is on fire.",
        badge: "TALK",
        route: soon("Calm in Chaos Talk"),
        gradient: "blue-twilight",
      },
      {
        title: "The Four Stages of AI Adoption",
        subtitle: "Recalibrate. Restore. Rebuild. Run.",
        badge: "FRAMEWORK",
        route: soon("The Four Stages Talk"),
        gradient: "blue-mist",
      },
      {
        title: "Brand VoicePrint · Voice First",
        subtitle: "How to teach AI to sound like you.",
        badge: "WORKSHOP",
        route: soon("Brand VoicePrint Talk"),
        gradient: "blue-electric",
      },
      {
        title: "AI Without Erasing You",
        subtitle: "Human-in-the-loop is the only loop that holds.",
        badge: "TALK",
        route: soon("AI Without Erasing You"),
        gradient: "blue-deep",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 4 — Book Me to Speak
  // ──────────────────────────────────────────────────────────────────
  {
    eyebrow: "POWERED BY PATHWORTH",
    title: "Book Me to Speak",
    cards: [
      {
        title: "Speaking Inquiry",
        subtitle: "Submit a request. I'll be back in 48 hours.",
        badge: "START HERE",
        route: "/contact?intent=speaking",
        gradient: "blue-electric",
      },
      {
        title: "Keynote · Conference or Event",
        subtitle: "60–90 minutes. The signature talk.",
        badge: "$3,000",
        route: soon("Keynote · Conference"),
        gradient: "blue-deep",
      },
      {
        title: "Half-Day Workshop",
        subtitle: "Three to four hours. Hands-on.",
        badge: "$5,000",
        route: soon("Half-Day Workshop"),
        gradient: "blue-twilight",
      },
      {
        title: "Full-Day Workshop",
        subtitle: "Six to eight hours. Full immersion.",
        badge: "$8,000",
        route: soon("Full-Day Workshop"),
        gradient: "blue-sky",
      },
      {
        title: "Nonprofit Edition",
        subtitle: "Community pricing. Same delivery standard.",
        badge: "COMMUNITY",
        route: soon("Nonprofit Speaking Edition"),
        gradient: "blue-mist",
      },
      {
        title: "Youth Edition",
        subtitle: "Schools and youth programs. Negotiable.",
        badge: "YOUTH",
        route: soon("Youth Speaking Edition"),
        gradient: "blue-twilight",
      },
      {
        title: "Working Session · 1:1",
        subtitle: "Strategic thinking partner. $400/hr.",
        badge: "1:1",
        route: "/contact?intent=working-session",
        gradient: "blue-deep",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 5 — Free Stuff · Sample the Room
  // ──────────────────────────────────────────────────────────────────
  {
    title: "Free Stuff · Sample the Room",
    cards: [
      {
        title: "Watch the Speaker Reel",
        subtitle: "See the work in three minutes.",
        badge: "FREE",
        route: soon("Watch the Speaker Reel"),
        gradient: "blue-electric",
      },
      {
        title: "Join Spot Up Society",
        subtitle: "Free community. Open door.",
        badge: "FREE",
        route: soon("Join Spot Up Society"),
        gradient: "blue-sky",
      },
      {
        title: "The Two Questions · Reflection",
        subtitle: "A prompt to use before your next big decision.",
        badge: "REFLECT",
        route: soon("The Two Questions Reflection"),
        gradient: "blue-twilight",
      },
      {
        title: "The DIBS Self-Assessment",
        subtitle: "Where you are with AI right now.",
        badge: "ASSESS",
        route: soon("The DIBS Self-Assessment"),
        gradient: "blue-mist",
      },
      {
        title: "The Rebalance Drop · Newsletter",
        subtitle: "Weekly note from the Chairman.",
        badge: "SUBSCRIBE",
        route: soon("The Rebalance Drop Newsletter"),
        gradient: "blue-deep",
      },
    ],
  },
];
