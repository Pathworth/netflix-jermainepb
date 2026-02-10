export type WorkSeason = {
  id: string;
  order: number; // 1 = most recent
  role: string;
  org: string;
  dateRange: string;
  location?: string;

  logline: string;

  storyPreview: string; // short Netflix-style preview
  storyFull: string; // full story, paragraph breaks with \n\n
  whatItBuilt: string; // always visible in dock

  posterImage?: string; // optional 16:9 key art (path or url)
  heroMedia?: string; // optional hero background (path or url)
};

export const workSeasons: WorkSeason[] = [
  {
    id: "season-01",
    order: 1,
    role: "Senior Project Manager",
    org: "Annual Fundraising Dinner (Nonprofit)",
    dateRange: "Dec 2023 — Now",
    location: "Detroit, MI",
    logline: "High-pressure event operations where calm execution is the standard.",
    storyPreview:
      "Move-in starts with an empty room and a deadline that does not negotiate. My job is to make it feel effortless for every guest, even when the back end is moving fast.",
    storyFull:
      "Move-in day starts with two empty halls and a deadline that does not blink. Crews stack in. Vendors need answers. Volunteers need direction. Thousands of people will judge the night by how smooth it feels.\n\nI turn that pressure into a clean experience. I tighten the show flow, protect the front door, and keep decisions clear so the room stays calm when timing gets loud.\n\nThe standard is simple: if people feel like it was effortless, the work was done right.",
    whatItBuilt:
      "Large-scale operations, calm leadership under pressure, clean communication across many moving parts, and the discipline to refine the process every year.",
    posterImage: "/assets/work-experience/posters/season-01.jpg",
    heroMedia: "/assets/work-experience/hero/season-01.jpg",
  },
  {
    id: "season-02",
    order: 2,
    role: "Special Projects Manager",
    org: "Civil Rights Organization (Detroit Branch)",
    dateRange: "Sep 2021 — Now",
    location: "Detroit, MI",
    logline: "I step in when the work has no clear owner and the stakes are public.",
    storyPreview:
      "Special projects is the work nobody can neatly label, but it still has to be done right. I take messy assignments and turn them into something people can run.",
    storyFull:
      "Special projects is the work nobody can neatly label, but it still has to be done right. It comes with tight timelines and real consequences if it is missed.\n\nI step in when something has no clear owner, when the stakes are public, or when the work cannot be delayed. I build programs end to end: recruitment, scheduling, training, partner coordination, tracking, and outcomes.\n\nMy pattern stays consistent: protect the mission, protect the people, and keep the work simple enough that someone else can carry it forward.",
    whatItBuilt:
      "Full-cycle program control, sound judgment, partner management, and the ability to keep work moving without burning trust.",
    posterImage: "/assets/work-experience/posters/season-02.jpg",
    heroMedia: "/assets/work-experience/hero/season-02.jpg",
  },
  {
    id: "season-03",
    order: 3,
    role: "Executive Assistant",
    org: "Civil Rights Organization (Detroit Branch)",
    dateRange: "Apr 2019 — Sep 2021",
    location: "Detroit, MI",
    logline: "Operational protection so leadership walks in ready. Period.",
    storyPreview:
      "I learned timing and priorities in rooms where pressure is intense and reputations are on the line. I handled issues early, quietly, and correctly.",
    storyFull:
      "I treated this role as operational protection. Leadership should walk into a room prepared. Period.\n\nI moved quietly and paid attention. I listened more than I spoke, learned how the organization truly moved, and handled issues before they became problems.\n\nThis season sharpened instincts: spot the gap, close the gap, and keep the work moving without making it about me.",
    whatItBuilt:
      "Discretion, readiness, strong priorities, room-reading, and the ability to stabilize chaos without needing credit.",
    posterImage: "/assets/work-experience/posters/season-03.jpg",
    heroMedia: "/assets/work-experience/hero/season-03.jpg",
  },
  {
    id: "season-04",
    order: 4,
    role: "President & CEO",
    org: "Pathworth Consulting & Solutions",
    dateRange: "Sep 2016 — Now",
    location: "Detroit, MI",
    logline: "Turning ambition into action with usable systems people can maintain.",
    storyPreview:
      "Pathworth grew through seasons, but the core stayed the same: build clarity, build systems, and make the next step obvious.",
    storyFull:
      "Pathworth started with one question that still guides me: What is my path worth?\n\nI built the company to grow with me, not trap me in one version of myself. The work has moved through seasons: consulting and solutions, financial education, digital support, and deeper focus on AI and automation as the world shifted.\n\nThe core stayed the same. I turn pressure into progress with systems people can actually maintain.",
    whatItBuilt:
      "Vision with discipline, clear problem-solving, the ability to teach complex tools in relatable terms, and systems that hold up under pressure.",
    posterImage: "/assets/work-experience/posters/season-04.jpg",
    heroMedia: "/assets/work-experience/hero/season-04.jpg",
  },
  {
    id: "season-05",
    order: 5,
    role: "Founding Chapter President",
    org: "Entrepreneur Community Chapter",
    dateRange: "Sep 2021 — Now",
    location: "Michigan",
    logline: "Community building that scales without losing care.",
    storyPreview:
      "Titles do not keep people. The experience does. I built programs that met real needs and held a high standard without bruising relationships.",
    storyFull:
      "This season taught me what it takes to build community the right way: recruitment, programs, fundraising, consistency, and care.\n\nPeople do not stay for a title. They stay for how you make them feel and what you help them become. So I listened closely, remembered what mattered, and built experiences that met practical needs.\n\nI held a high standard without being funny acting. That balance is rare.",
    whatItBuilt:
      "Community-building that scales, leadership without ego, strong relationship memory, and the ability to hold the bar while making people feel seen.",
    posterImage: "/assets/work-experience/posters/season-05.jpg",
    heroMedia: "/assets/work-experience/hero/season-05.jpg",
  },
  {
    id: "season-06",
    order: 6,
    role: "Recruitment Chair",
    org: "Leadership Development Program",
    dateRange: "Jul 2020 — Sep 2022",
    location: "Detroit, MI",
    logline: "Recruitment is judgment: choosing who belongs in the room and why.",
    storyPreview:
      "I brought in leaders with values and follow-through. Not just visibility. Clear expectations from the first message.",
    storyFull:
      "Recruitment is judgment. You are choosing who belongs in the room and why.\n\nI recruited and guided emerging leaders into the program across multiple cohorts. I looked for values and follow-through, not just visibility.\n\nThis season also stretched public communication. When the work needs a voice, you do not hide from the camera.",
    whatItBuilt:
      "Talent spotting, confident public communication, strong judgment about fit, and the ability to build a leadership bench with intention.",
    posterImage: "/assets/work-experience/posters/season-06.jpg",
    heroMedia: "/assets/work-experience/hero/season-06.jpg",
  },
  {
    id: "season-07",
    order: 7,
    role: "Field Technician",
    org: "Home Technology Services",
    dateRange: "Nov 2014 — Jun 2017",
    location: "MI + Multi-State",
    logline: "Enter calm, diagnose fast, explain simply, deliver the fix.",
    storyPreview:
      "I walked into homes where emotions were already high. I learned to restore trust fast and leave the home better than I found it.",
    storyFull:
      "I walked into homes where emotions were already high. Some people were excited. Some were nervous. Some were frustrated because the last tech left a mess.\n\nI learned to enter calm, listen first, diagnose fast, and explain simply. Then deliver the fix in a way that restores trust.\n\nThe method stayed steady: listen, diagnose, explain, fix, and leave the home better than I found it.",
    whatItBuilt:
      "Trust-fast communication, rapid diagnosis, calm under pressure, and accountability that looks like ownership.",
    posterImage: "/assets/work-experience/posters/season-07.jpg",
    heroMedia: "/assets/work-experience/hero/season-07.jpg",
  },
  {
    id: "season-08",
    order: 8,
    role: "Assistant Project Manager",
    org: "Mechanical Contractor",
    dateRange: "Jan 2012 — Apr 2014",
    location: "Detroit, MI",
    logline: "If you miss details, you pay twice. Execution is the scoreboard.",
    storyPreview:
      "Budgets, labor reports, RFIs, schedules, closeouts. I learned how to keep crews and timelines aligned by speaking in facts.",
    storyFull:
      "Construction taught me fast: if you miss details, you pay for it twice.\n\nI lived in the full cycle: budgets and labor reports, RFIs, schedule pressure, submittals and closeouts, purchase orders, material logs, and change orders where every decision had a cost and a paper trail.\n\nWhen something was about to go sideways, I caught it early, called it clearly, and moved the work forward.",
    whatItBuilt:
      "Disciplined project control, documentation habits that prevent problems, sharper risk awareness, and follow-through that stays steady under pressure.",
    posterImage: "/assets/work-experience/posters/season-08.jpg",
    heroMedia: "/assets/work-experience/hero/season-08.jpg",
  },
].sort((a, b) => a.order - b.order);

export const getFeaturedSeason = () => workSeasons[0];
export const getSeasonById = (id: string) => workSeasons.find((s) => s.id === id) ?? workSeasons[0];
