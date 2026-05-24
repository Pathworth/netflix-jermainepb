import type { ContentRow } from "./chairmanOfAIRows";

/**
 * Meet Jermaine lane — row data.
 *
 * Trust anchor. Not a resume. The story, values, lanes, and ways to
 * connect. Routes to the existing deep pages (/bio, /work-experience,
 * /core-values, /skills, /one-pager) where the real content lives, with
 * lighter placeholders for video and reflection assets still being
 * produced.
 */

const soon = (title: string): string =>
  `/meet-jermaine/coming-soon?title=${encodeURIComponent(title)}`;

export const meetJermaineRows: ContentRow[] = [
  // ──────────────────────────────────────────────────────────────────
  // Row 1 — About Me · Watch
  // ──────────────────────────────────────────────────────────────────
  {
    eyebrow: "JP ORIGINAL",
    title: "About Me · Watch",
    cards: [
      {
        title: "The Bio Reel",
        subtitle: "Who I am, in three minutes.",
        badge: "FEATURED",
        route: soon("The Bio Reel"),
        gradient: "blue-electric",
      },
      {
        title: "Origin Story · Detroit",
        subtitle: "Where the work and the man come from.",
        badge: "STORY",
        route: soon("Origin Story Detroit"),
        gradient: "blue-deep",
      },
      {
        title: "The Two Questions · Why Pathworth",
        subtitle: "Why I built the company I built.",
        badge: "STORY",
        route: soon("The Two Questions Why Pathworth"),
        gradient: "blue-twilight",
      },
      {
        title: "The Father's Mentorship",
        subtitle: "What I learned from him and brought into the work.",
        badge: "STORY",
        route: soon("The Father's Mentorship"),
        gradient: "blue-sky",
      },
      {
        title: "Warrior Way Back · Wayne State",
        subtitle: "Finishing the degree as an adult learner.",
        badge: "STORY",
        route: soon("Warrior Way Back Wayne State"),
        gradient: "blue-mist",
      },
      {
        title: "Coming Home · Choosing Detroit",
        subtitle: "Why the work stays here.",
        badge: "STORY",
        route: soon("Coming Home Choosing Detroit"),
        gradient: "blue-twilight",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 2 — The Story · Read
  // Routes to existing deep pages where they exist.
  // ──────────────────────────────────────────────────────────────────
  {
    title: "The Story · Read",
    cards: [
      {
        title: "Blueprint · Bio",
        subtitle: "The full bio in Netflix-style sections.",
        badge: "BLUEPRINT",
        route: "/bio",
        gradient: "blue-electric",
      },
      {
        title: "Experience Seasons",
        subtitle: "Work history as Netflix Top 10 posters.",
        badge: "SEASONS",
        route: "/work-experience",
        gradient: "blue-deep",
      },
      {
        title: "My Master Bio",
        subtitle: "Calm. Clarity. Follow-through.",
        badge: "BIO",
        route: soon("My Master Bio"),
        gradient: "blue-sky",
      },
      {
        title: "The Construction Mindset",
        subtitle: "What construction taught me about the work.",
        badge: "ESSAY",
        route: soon("The Construction Mindset"),
        gradient: "blue-twilight",
      },
      {
        title: "The Why Behind Pathworth",
        subtitle: "Founder letter excerpt.",
        badge: "ESSAY",
        route: soon("The Why Behind Pathworth"),
        gradient: "blue-mist",
      },
      {
        title: "The Recovery Chapter",
        subtitle: "How the comeback was built.",
        badge: "STORY",
        route: soon("The Recovery Chapter"),
        gradient: "blue-twilight",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 3 — What I Stand On · Values
  // Routes to existing deep pages.
  // ──────────────────────────────────────────────────────────────────
  {
    title: "What I Stand On · Values",
    cards: [
      {
        title: "Core Values · Receipts",
        subtitle: "Real moments that prove each value.",
        badge: "VALUES",
        route: "/core-values",
        gradient: "blue-electric",
      },
      {
        title: "Superpowers · The 15 Pillars",
        subtitle: "What I bring to every room I enter.",
        badge: "SKILLS",
        route: "/skills",
        gradient: "blue-deep",
      },
      {
        title: "The Standing Code",
        subtitle: "Alignment over approval. People over ego.",
        badge: "CODE",
        route: soon("The Standing Code"),
        gradient: "blue-sky",
      },
      {
        title: "Student Mode",
        subtitle: "Learn forever. Hold the standard.",
        badge: "VALUE",
        route: soon("Student Mode"),
        gradient: "blue-twilight",
      },
      {
        title: "Built From Grit",
        subtitle: "The neighborhoods that built me built the company.",
        badge: "VALUE",
        route: soon("Built From Grit"),
        gradient: "blue-mist",
      },
      {
        title: "The Pathworth Mission Fund",
        subtitle: "How premium clients fund community work.",
        badge: "COMMITMENT",
        route: soon("The Pathworth Mission Fund"),
        gradient: "blue-electric",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 4 — The Lanes I Carry
  // ──────────────────────────────────────────────────────────────────
  {
    title: "The Lanes I Carry",
    cards: [
      {
        title: "Founder · Pathworth",
        subtitle: "President and CEO of Pathworth Consulting & Solutions.",
        badge: "CEO",
        route: "/chairman-of-ai",
        gradient: "blue-electric",
      },
      {
        title: "Chairman of AI",
        subtitle: "Personal brand. Public face of the Rebalance Era.",
        badge: "BRAND",
        route: "/chairman-of-ai",
        gradient: "blue-deep",
      },
      {
        title: "Special Projects Manager · NAACP Detroit",
        subtitle: "Membership, Volunteer Coordination, FFFFD, B.R.I.D.G.E.S.",
        badge: "NAACP",
        route: "/community-builder",
        gradient: "blue-twilight",
      },
      {
        title: "Chapter President · RPX Michigan",
        subtitle: "Founding chapter. Chapter of the Year.",
        badge: "RPX",
        route: "/community-builder",
        gradient: "blue-sky",
      },
      {
        title: "Board Member · NLC Detroit",
        subtitle: "Class of 2020. Recruitment Chair 2020–2022.",
        badge: "NLC",
        route: "/community-builder",
        gradient: "blue-mist",
      },
      {
        title: "Educator · YOUseful With AI",
        subtitle: "The workshop format. The four editions.",
        badge: "EDUCATOR",
        route: "/speaking-workshops",
        gradient: "blue-twilight",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 5 — Connect With Me
  // ──────────────────────────────────────────────────────────────────
  {
    title: "Connect With Me",
    cards: [
      {
        title: "Contact",
        subtitle: "The general inbox.",
        badge: "CONTACT",
        route: "/contact",
        gradient: "blue-electric",
      },
      {
        title: "Book a Working Session",
        subtitle: "$400/hr standard. Two-hour minimum.",
        badge: "BOOK",
        route: "/contact?intent=working-session",
        gradient: "blue-deep",
      },
      {
        title: "The One-Pager",
        subtitle: "Professional summary, ready to send.",
        badge: "DOWNLOAD",
        route: "/one-pager",
        gradient: "blue-sky",
      },
      {
        title: "Speaking Inquiry",
        subtitle: "Book me for keynotes, workshops, or trainings.",
        badge: "SPEAKING",
        route: "/contact?intent=speaking",
        gradient: "blue-twilight",
      },
      {
        title: "The Rebalance Drop · Newsletter",
        subtitle: "Weekly note from the Chairman.",
        badge: "SUBSCRIBE",
        route: soon("The Rebalance Drop Newsletter"),
        gradient: "blue-mist",
      },
      {
        title: "Schedule with Harper Wilson",
        subtitle: "Call the office. (313) 631-9919.",
        badge: "CALL",
        route: soon("Schedule with Harper Wilson"),
        gradient: "blue-electric",
      },
    ],
  },
];
