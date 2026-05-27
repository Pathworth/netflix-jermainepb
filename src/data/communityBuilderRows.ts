import type { ContentRow } from "./chairmanOfAIRows";

/**
 * Community Builder lane — row data (v2).
 *
 * Org-by-org treatment. Each major organization Jermaine carries gets its
 * own row so visitors can read the work as separate stories rather than
 * one mashed-up list. Pulls from the Master Skill, the Pathworth Bible,
 * and the directory of NAACP / Organizations / JP Brand archives.
 *
 * Six rows:
 *   1. NAACP Detroit Branch · The Work I Lead    (headline programs)
 *   2. NAACP Detroit Branch · Where I Sit        (committees, departments)
 *   3. RPX Michigan · The Chapter I Built        (founding role + awards)
 *   4. NLC Detroit · Building the Next Class     (fellowship + recruitment)
 *   5. Stories Behind the Work                   (personal angle on civic work)
 *   6. Partner with Me · Sponsor, Volunteer, Connect (action row)
 *
 * Cards route to /community-builder/coming-soon?title=... as placeholders
 * until real destinations come online.
 */

const soon = (title: string): string =>
  `/community-builder/coming-soon?title=${encodeURIComponent(title)}`;

export const communityBuilderRows: ContentRow[] = [
  // ──────────────────────────────────────────────────────────────────
  // Row 1 — NAACP Detroit Branch · The Work I Lead
  // ──────────────────────────────────────────────────────────────────
  {
    eyebrow: "NAACP DETROIT BRANCH",
    title: "The Work I Lead",
    cards: [
      {
        title: "Fight for Freedom Fund Dinner",
        subtitle: "The Detroit Branch's signature evening. Lead project manager.",
        badge: "FFFFD",
        route: soon("Fight for Freedom Fund Dinner"),
        gradient: "blue-electric",
      },
      {
        title: "B.R.I.D.G.E.S.",
        subtitle: "Building Resources in Detroit, Giving Expanded Services. Partnered with GDYT.",
        badge: "YOUTH",
        route: soon("B.R.I.D.G.E.S."),
        gradient: "blue-deep",
      },
      {
        title: "Back-to-School / Stay-In-School Rally",
        subtitle: "Annual August rally for Detroit students.",
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
        subtitle: "Small business activation for the city.",
        badge: "ACTIVATION",
        route: soon("Shop Detroit"),
        gradient: "blue-mist",
      },
      {
        title: "Ask The Lawyer",
        subtitle: "Legal access programming for the community.",
        badge: "PROGRAM",
        route: soon("Ask The Lawyer"),
        gradient: "blue-electric",
      },
      {
        title: "Education Symposium",
        subtitle: "Annual symposium on Detroit education.",
        badge: "ANNUAL",
        route: soon("Education Symposium"),
        gradient: "blue-deep",
      },
      {
        title: "MDOC Job Fair",
        subtitle: "Job fair built with the Michigan Department of Corrections.",
        badge: "JOBS",
        route: soon("MDOC Job Fair"),
        gradient: "blue-twilight",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 2 — NAACP Detroit Branch · Where I Sit
  // ──────────────────────────────────────────────────────────────────
  {
    eyebrow: "NAACP DETROIT BRANCH",
    title: "Where I Sit · Committees + Departments",
    cards: [
      {
        title: "Membership Department",
        subtitle: "Special Projects Manager. Department head.",
        badge: "DEPARTMENT",
        route: soon("NAACP Detroit Membership Department"),
        gradient: "blue-electric",
      },
      {
        title: "Volunteer Coordination",
        subtitle: "How the work actually gets done.",
        badge: "OPERATIONS",
        route: soon("Volunteer Coordination"),
        gradient: "blue-sky",
      },
      {
        title: "Health & Wellness Committee",
        subtitle: "Staff liaison.",
        badge: "COMMITTEE",
        route: soon("Health and Wellness Committee"),
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
        title: "Career Day + Job Club",
        subtitle: "The workforce development cycle.",
        badge: "WORKFORCE",
        route: soon("Career Day and Job Club"),
        gradient: "blue-twilight",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 3 — RPX Michigan · The Chapter I Built
  // ──────────────────────────────────────────────────────────────────
  {
    eyebrow: "RECESSION PROOF EXTREME · MICHIGAN CHAPTER",
    title: "The Chapter I Built",
    cards: [
      {
        title: "Founding Chapter President",
        subtitle: "I started the Michigan chapter from zero.",
        badge: "FOUNDER",
        route: soon("RPX Michigan Founding Chapter President"),
        gradient: "blue-electric",
      },
      {
        title: "Chapter of the Year",
        subtitle: "Earned during the chapter's most active run.",
        badge: "AWARD",
        route: soon("RPX Michigan Chapter of the Year"),
        gradient: "blue-deep",
      },
      {
        title: "Model Chapter of the Year",
        subtitle: "Recognized for how the chapter operated.",
        badge: "AWARD",
        route: soon("RPX Michigan Model Chapter of the Year"),
        gradient: "blue-sky",
      },
      {
        title: "19 to 125+ Members",
        subtitle: "From founding cohort to a full community of entrepreneurs.",
        badge: "GROWTH",
        route: soon("RPX Michigan Member Growth"),
        gradient: "blue-twilight",
      },
      {
        title: "Financial Literacy Programming",
        subtitle: "Money habits that hold for builders.",
        badge: "PROGRAM",
        route: soon("RPX Michigan Financial Literacy"),
        gradient: "blue-mist",
      },
      {
        title: "Personal Development Sessions",
        subtitle: "The inner work behind the outer work.",
        badge: "PROGRAM",
        route: soon("RPX Michigan Personal Development"),
        gradient: "blue-electric",
      },
      {
        title: "Entrepreneur Network",
        subtitle: "Relationships that outlast a single meeting.",
        badge: "NETWORK",
        route: soon("RPX Michigan Entrepreneur Network"),
        gradient: "blue-deep",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 4 — NLC Detroit · Building the Next Class
  // ──────────────────────────────────────────────────────────────────
  {
    eyebrow: "NEW LEADERS COUNCIL · DETROIT",
    title: "Building the Next Class",
    cards: [
      {
        title: "Class of 2020 Fellow",
        subtitle: "The six-month civic leadership program that started it.",
        badge: "FELLOW",
        route: soon("NLC Detroit Class of 2020"),
        gradient: "blue-electric",
      },
      {
        title: "Board Member",
        subtitle: "Joined the board after finishing the fellowship.",
        badge: "BOARD",
        route: soon("NLC Detroit Board Member"),
        gradient: "blue-deep",
      },
      {
        title: "Recruitment Chair · 2020 to 2022",
        subtitle: "Two cycles. 35 to 50 applicants per year for a 20-seat class.",
        badge: "CHAIR",
        route: soon("NLC Detroit Recruitment Chair"),
        gradient: "blue-sky",
      },
      {
        title: "Class Build-Out Sessions",
        subtitle: "How I read the room and picked the cohort.",
        badge: "PROCESS",
        route: soon("NLC Detroit Class Build-Out"),
        gradient: "blue-twilight",
      },
      {
        title: "Civic Leadership Development",
        subtitle: "What new leaders need before they walk in.",
        badge: "PROGRAM",
        route: soon("NLC Detroit Civic Leadership"),
        gradient: "blue-mist",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 5 — Stories Behind the Work
  // The personal angle. Why I do this work at all.
  // ──────────────────────────────────────────────────────────────────
  {
    eyebrow: "JP ORIGINAL · STORIES",
    title: "Stories Behind the Work",
    cards: [
      {
        title: "Why I Serve",
        subtitle: "The honest answer.",
        badge: "STORY",
        route: soon("Why I Serve"),
        gradient: "blue-electric",
      },
      {
        title: "Detroit Built Me",
        subtitle: "The neighborhoods, the people, the standard.",
        badge: "STORY",
        route: soon("Detroit Built Me"),
        gradient: "blue-deep",
      },
      {
        title: "The First Room That Felt Like Home",
        subtitle: "Where I learned what community costs.",
        badge: "STORY",
        route: soon("First Room That Felt Like Home"),
        gradient: "blue-twilight",
      },
      {
        title: "The Mentors Who Showed Up",
        subtitle: "Who I am still carrying forward.",
        badge: "STORY",
        route: soon("Mentors Who Showed Up"),
        gradient: "blue-sky",
      },
      {
        title: "What “I Got You” Means in Community",
        subtitle: "The phrase carries weight in this work.",
        badge: "STORY",
        route: soon("I Got You in Community"),
        gradient: "blue-mist",
      },
      {
        title: "Building Without Being Seen",
        subtitle: "Most of the work doesn't get headlines. That's the work.",
        badge: "STORY",
        route: soon("Building Without Being Seen"),
        gradient: "blue-twilight",
      },
      {
        title: "Protect the Mission, Protect the People",
        subtitle: "My standing line for every civic room I walk into.",
        badge: "CODE",
        route: soon("Protect the Mission Protect the People"),
        gradient: "blue-electric",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  // Row 6 — Partner with Me · Sponsor, Volunteer, Connect
  // The one CTA row. Action lives here.
  // ──────────────────────────────────────────────────────────────────
  {
    title: "Partner with Me · Sponsor, Volunteer, Connect",
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
        route: soon("Become B.R.I.D.G.E.S. Partner"),
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
        route: soon("Donate to NAACP Detroit"),
        gradient: "blue-mist",
      },
      {
        title: "Book a Community Consult",
        subtitle: "For nonprofits, civic groups, faith leaders.",
        badge: "BOOK",
        route: "/contact?intent=community",
        gradient: "blue-electric",
      },
      {
        title: "Community Newsletter",
        subtitle: "Programs, events, and what's next.",
        badge: "FREE",
        route: soon("Community Newsletter Signup"),
        gradient: "blue-sky",
      },
    ],
  },
];
