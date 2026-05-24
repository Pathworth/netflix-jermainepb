import type { ContentRow } from "./chairmanOfAIRows";

/**
 * Community Builder lane — row data.
 *
 * Detroit-first, people-first. The civic and nonprofit work that runs
 * through Jermaine's life. NAACP Detroit Branch, RPX Michigan, NLC
 * Detroit, plus the programs he owns inside those organizations.
 */

const soon = (title: string): string =>
  `/community-builder/coming-soon?title=${encodeURIComponent(title)}`;

export const communityBuilderRows: ContentRow[] = [
  // ──────────────────────────────────────────────────────────────────
  // Row 1 — Community in Motion · Watch
  // ──────────────────────────────────────────────────────────────────
  {
    eyebrow: "JP ORIGINAL",
    title: "Community in Motion · Watch",
    cards: [
      {
        title: "The Community Builder Reel",
        subtitle: "The work, in the rooms, with the people.",
        badge: "FEATURED",
        route: soon("The Community Builder Reel"),
        gradient: "blue-electric",
      },
      {
        title: "B.R.I.D.G.E.S. Program Highlight",
        subtitle: "Youth employment, Detroit-built.",
        badge: "PROGRAM",
        route: soon("B.R.I.D.G.E.S. Program Highlight"),
        gradient: "blue-deep",
      },
      {
        title: "Fight for Freedom Fund Dinner Recap",
        subtitle: "The night the city shows up.",
        badge: "EVENT",
        route: soon("Fight for Freedom Fund Dinner Recap"),
        gradient: "blue-twilight",
      },
      {
        title: "Back-to-School / Stay-In-School Rally",
        subtitle: "August. Every year. The kids come first.",
        badge: "ANNUAL",
        route: soon("Back-to-School Stay-In-School Rally"),
        gradient: "blue-sky",
      },
      {
        title: "RPX Michigan: Chapter of the Year",
        subtitle: "How a chapter holds the standard.",
        badge: "STORY",
        route: soon("RPX Michigan Chapter of the Year"),
        gradient: "blue-mist",
      },
      {
        title: "NLC Detroit · Recruitment Stories",
        subtitle: "Building the next class of civic leaders.",
        badge: "LEADERSHIP",
        route: soon("NLC Detroit Recruitment Stories"),
        gradient: "blue-twilight",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 2 — Programs I Lead
  // ──────────────────────────────────────────────────────────────────
  {
    title: "Programs I Lead",
    cards: [
      {
        title: "B.R.I.D.G.E.S.",
        subtitle: "Building Resources in Detroit, Giving Expanded Services.",
        badge: "NAACP",
        route: soon("B.R.I.D.G.E.S."),
        gradient: "blue-electric",
      },
      {
        title: "Fight for Freedom Fund Dinner",
        subtitle: "The Detroit Branch's signature evening.",
        badge: "FFFFD",
        route: soon("Fight for Freedom Fund Dinner"),
        gradient: "blue-deep",
      },
      {
        title: "Back-to-School / Stay-In-School Rally",
        subtitle: "Annual rally for Detroit students. August.",
        badge: "ANNUAL",
        route: soon("Back-to-School Stay-In-School Rally"),
        gradient: "blue-sky",
      },
      {
        title: "Digital E.T.A.",
        subtitle: "Education, Training, Access. Small business cohort.",
        badge: "COHORT",
        route: soon("Digital E.T.A."),
        gradient: "blue-twilight",
      },
      {
        title: "Shop Detroit",
        subtitle: "Detroit small business activation.",
        badge: "ACTIVATION",
        route: soon("Shop Detroit"),
        gradient: "blue-mist",
      },
      {
        title: "RPX Michigan Chapter",
        subtitle: "Founding Chapter President. Chapter of the Year.",
        badge: "CHAPTER",
        route: soon("RPX Michigan Chapter"),
        gradient: "blue-electric",
      },
      {
        title: "NLC Detroit Recruitment",
        subtitle: "2020–2022 Recruitment Chair. Class building.",
        badge: "LEADERSHIP",
        route: soon("NLC Detroit Recruitment"),
        gradient: "blue-deep",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 3 — Where I Sit · Committees & Boards
  // ──────────────────────────────────────────────────────────────────
  {
    title: "Where I Sit · Committees & Boards",
    cards: [
      {
        title: "NAACP Detroit Branch · Membership",
        subtitle: "Special Projects Manager. Heads Membership.",
        badge: "DEPARTMENT",
        route: soon("NAACP Detroit Branch Membership"),
        gradient: "blue-electric",
      },
      {
        title: "NAACP Detroit · Volunteer Coordination",
        subtitle: "Volunteers are how the work happens.",
        badge: "OPERATIONS",
        route: soon("NAACP Detroit Volunteer Coordination"),
        gradient: "blue-sky",
      },
      {
        title: "Health & Wellness Committee",
        subtitle: "Staff liaison.",
        badge: "COMMITTEE",
        route: soon("Health & Wellness Committee"),
        gradient: "blue-deep",
      },
      {
        title: "Economic Development Committee",
        subtitle: "Staff liaison.",
        badge: "COMMITTEE",
        route: soon("Economic Development Committee"),
        gradient: "blue-twilight",
      },
      {
        title: "Membership Committee",
        subtitle: "Staff liaison.",
        badge: "COMMITTEE",
        route: soon("Membership Committee"),
        gradient: "blue-mist",
      },
      {
        title: "NLC Detroit Board",
        subtitle: "Board member after the leadership program.",
        badge: "BOARD",
        route: soon("NLC Detroit Board"),
        gradient: "blue-twilight",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 4 — Partner with Me
  // ──────────────────────────────────────────────────────────────────
  {
    title: "Partner with Me · Sponsor or Volunteer",
    cards: [
      {
        title: "Sponsor the FFFFD",
        subtitle: "Table and ad sponsorship for the annual dinner.",
        badge: "SPONSOR",
        route: soon("Sponsor the FFFFD"),
        gradient: "blue-electric",
      },
      {
        title: "Volunteer at the Rally",
        subtitle: "Back-to-School / Stay-In-School. August.",
        badge: "VOLUNTEER",
        route: soon("Volunteer at the Rally"),
        gradient: "blue-sky",
      },
      {
        title: "Become a B.R.I.D.G.E.S. Partner",
        subtitle: "Job sites, mentors, training partners.",
        badge: "PARTNER",
        route: soon("Become a B.R.I.D.G.E.S. Partner"),
        gradient: "blue-deep",
      },
      {
        title: "Apply to NLC Detroit",
        subtitle: "Class of next year. Civic leadership program.",
        badge: "APPLY",
        route: soon("Apply to NLC Detroit"),
        gradient: "blue-twilight",
      },
      {
        title: "Donate · NAACP Detroit Branch",
        subtitle: "Direct support for branch operations.",
        badge: "DONATE",
        route: soon("Donate to NAACP Detroit Branch"),
        gradient: "blue-mist",
      },
      {
        title: "Book a Community Consult",
        subtitle: "For nonprofits, civic groups, faith leaders.",
        badge: "BOOK",
        route: "/contact?intent=community",
        gradient: "blue-electric",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 5 — Free Stuff · Stay Connected
  // ──────────────────────────────────────────────────────────────────
  {
    title: "Free Stuff · Stay Connected",
    cards: [
      {
        title: "Community Newsletter Signup",
        subtitle: "Programs, events, and what's next.",
        badge: "FREE",
        route: soon("Community Newsletter Signup"),
        gradient: "blue-electric",
      },
      {
        title: "Watch the Community Story",
        subtitle: "Why this work, in my own words.",
        badge: "WATCH",
        route: soon("Watch the Community Story"),
        gradient: "blue-deep",
      },
      {
        title: "Read About Detroit's New Era",
        subtitle: "Where the work is going next.",
        badge: "READ",
        route: soon("Read About Detroit's New Era"),
        gradient: "blue-sky",
      },
      {
        title: "NAACP Detroit Membership Form",
        subtitle: "Join the branch.",
        badge: "JOIN",
        route: soon("NAACP Detroit Membership Form"),
        gradient: "blue-twilight",
      },
      {
        title: "The Community Builder Manifesto",
        subtitle: "Protect the mission. Protect the people.",
        badge: "MANIFESTO",
        route: soon("The Community Builder Manifesto"),
        gradient: "blue-mist",
      },
    ],
  },
];
