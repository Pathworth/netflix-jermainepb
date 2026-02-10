export type WorkSeason = {
  id: string;
  order: number; // explicit, never rely on dates
  role: string; // context label
  organization: string; // canonical when applicable
  dateRange: string;

  logline: string; // exact excerpt
  storyPreview: string; // exact excerpt (no duplication with logline in dock)
  storyFull: string; // exact full text
  whatItBuilt: string; // exact

  tags?: string[];
  posterImage?: string | null;
  heroMedia?: string | null;
};

export const FEATURED_SEASON_ID = "we-pathworth";

/**
 * One placeholder "poster image" used across all seasons until real posters are added.
 * Easy swap later: set posterImage per season.
 */
export const POSTER_PLACEHOLDER_DATA_URI =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs>
    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b1630"/>
      <stop offset="0.55" stop-color="#05070c"/>
      <stop offset="1" stop-color="#000000"/>
    </linearGradient>
    <radialGradient id="g2" cx="35%" cy="25%" r="70%">
      <stop offset="0" stop-color="#0a4cff" stop-opacity="0.25"/>
      <stop offset="0.6" stop-color="#0a4cff" stop-opacity="0"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
      <feColorMatrix type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 .10 0" />
    </filter>
  </defs>

  <rect width="1600" height="900" fill="url(#g1)"/>
  <rect width="1600" height="900" fill="url(#g2)"/>
  <rect width="1600" height="900" filter="url(#noise)" opacity="0.35"/>
</svg>
`);

export const workSeasons: WorkSeason[] = [
  {
    id: "we-pathworth",
    order: 1,
    role: "President and CEO",
    organization: "Pathworth Consulting & Solutions",
    dateRange: "Sep 2016 to Now",

    logline: "Pathworth started with one question that still guides him.",
    storyPreview: "What is my path worth?",
    storyFull:
      "Pathworth started with one question that still guides him. What is my path worth?\n\n" +
      "Jermaine built the company to grow with him, not trap him in one version of himself. The work has moved through seasons: consulting and solutions, financial education, digital marketing, and a deeper focus on AI and automation as the world shifted.\n\n" +
      "The core stayed the same. He turns ambition into action. He builds usable systems, clearer decisions, and practical tools that fit client style. He cares about what people can maintain, not what sounds good at the time.\n\n" +
      "Pathworth is also personal. It is the work that kept him aligned when other things were uncertain, and it carries the discipline earned in every season before it.",
    whatItBuilt:
      "Vision with discipline, clear problem solving, the ability to teach complex tools in relatable concepts, and systems that hold up under pressure.",

    tags: [],
    posterImage: null,
    heroMedia: null,
  },

  {
    id: "we-naacp-fffd",
    order: 2,
    role: "Senior Project Manager",
    organization: "NAACP Detroit Branch",
    dateRange: "Dec 2023 to Now",

    logline: "Move-in day starts with two empty halls and a deadline that does not blink.",
    storyPreview:
      "Crews stack in. Vendors need answers. Volunteers need direction. Ten thousand people will judge the night by how smooth it feels.",
    storyFull:
      "Move-in day starts with two empty halls and a deadline that does not blink. Crews stack in. Vendors need answers. Volunteers need direction. Ten thousand people will judge the night by how smooth it feels.\n\n" +
      "Jermaine turns that pressure into a clean experience. He created the entire ticketing and digital entry process, so the front door works for every guest, every time. He keeps the build-out, show flow, and on-the-floor decisions tight enough that the room stays calm, even when the back end is moving fast.\n\n" +
      "He protects what the Dinner has been for decades while opening space for fresh fundraising moments that fit the tradition. Over 400 tables means the details are the job. Timing. Ownership. Clear calls. No room for mistakes.\n\n" +
      "His standard is simple. If people feel like it was effortless, the work was done right.",
    whatItBuilt:
      "Large-scale operations, calm leadership under pressure, clear communication across many moving parts, and the discipline to refine the process every year.",

    tags: ["Annual Fight for Freedom Fund Dinner"],
    posterImage: null,
    heroMedia: null,
  },

  {
    id: "we-naacp-special-projects",
    order: 3,
    role: "Special Projects Manager",
    organization: "NAACP Detroit Branch",
    dateRange: "Sep 2021 to Now",

    logline: "Special projects is the work nobody can neatly label, but it still has to be done right.",
    storyPreview: "It comes with a tight deadline and a direct consequence if it is missed.",
    storyFull:
      "Special projects is the work nobody can neatly label, but it still has to be done right. It comes with a tight deadline and a direct consequence if it is missed.\n\n" +
      "Jermaine steps in when something has no clear owner, when the stakes are public, or when the timeline is tight and the work cannot be delayed. He develops programs end to end. Recruitment. Scheduling. Training. Partner coordination. Youth summer employment payroll coordination and tracking. Outcomes.\n\n" +
      "He also brings new concepts to life: creative program experiences, stronger partner coordination, and efficient ways to recruit, train, and run the work so it connects for the people it serves.\n\n" +
      "He keeps commitments on time without bruising relationships. People feel respected, even when the standard stays firm.\n\n" +
      "His pattern is consistent. Protect the mission. Protect the people. Keep the work simple enough that someone else can carry it forward.",
    whatItBuilt:
      "Full-cycle program control, sound judgment, partner management, and the ability to keep work moving without burning trust.",

    tags: [],
    posterImage: null,
    heroMedia: null,
  },

  {
    id: "we-naacp-ea",
    order: 4,
    role: "Executive Assistant",
    organization: "NAACP Detroit Branch",
    dateRange: "Apr 2019 to Sep 2021",

    logline: "Jermaine treated this role as operational protection.",
    storyPreview: "Leadership should walk into a room prepared. Period.",
    storyFull:
      "Jermaine treated this role as operational protection. Leadership should walk into a room prepared. Period.\n\n" +
      "He moved quietly and paid attention. He listened more than he spoke, learned how the organization truly moved, and handled issues before they became problems.\n\n" +
      "This season trained timing and priorities in rooms where pressure is intense, and reputations are on the line.\n\n" +
      "This is where his instincts sharpened. He spots the gap, closes the gap, and keeps the work moving.",
    whatItBuilt:
      "Discretion, readiness, strong priorities, room-reading, and the ability to stabilize chaos without making it about him.",

    tags: [],
    posterImage: null,
    heroMedia: null,
  },

  {
    id: "we-rpex",
    order: 5,
    role: "Founding Chapter President",
    organization: "Recession Proof Extreme Inc. Michigan Chapter",
    dateRange: "Sep 2021 to Now",

    logline: "This season taught Jermaine what it takes to build community the right way.",
    storyPreview: "Recruitment. Programs. Fundraising. Consistency. Care.",
    storyFull:
      "This season taught Jermaine what it takes to build community the right way. Recruitment. Programs. Fundraising. Consistency. Care.\n\n" +
      "He learned people do not stay for a title. They stay for how you make them feel and what you help them become. So, he listened closely, remembered what mattered to each member, and built experiences that met practical needs.\n\n" +
      "Under his leadership the chapter grew from 19 members to 125+. It earned Chapter of the Year and Model Chapter of the Year in 2022, and it exceeded fundraising expectations inside a national network.\n\n" +
      "He held standards without being funny acting. That balance is rare.",
    whatItBuilt:
      "Community-building that scales, leadership without ego, strong relationship memory, and the ability to hold a high bar while still making people feel seen.",

    tags: [],
    posterImage: null,
    heroMedia: null,
  },

  {
    id: "we-nlc",
    order: 6,
    role: "Recruitment Chair",
    organization: "New Leaders Council Detroit",
    dateRange: "Jul 2020 to Sep 2022",

    logline: "Recruitment is judgment.",
    storyPreview: "You are choosing who belongs in the room and why.",
    storyFull:
      "Recruitment is judgment. You are choosing who belongs in the room and why.\n\n" +
      "Jermaine recruited and guided 50+ emerging leaders into the program across multiple cohorts. He looked for people with values and follow-through, not just visibility.\n\n" +
      "He recruited for impact, not familiarity. He found leaders who did not even know the program existed, treated their potential like an asset, and personalized every invite with clear expectations and alignment from the beginning.\n\n" +
      "This season also stretched him into public communication. When the work needs a voice, you do not hide from the camera.",
    whatItBuilt:
      "Talent spotting, confident public communication, strong judgment about fit, and the ability to build a leadership bench with intention.",

    tags: [],
    posterImage: null,
    heroMedia: null,
  },

  {
    id: "we-temp",
    order: 7,
    role: "Production and Temp Work",
    organization: "ResourceMFG and Forge Industrial Staffing",
    dateRange: "2018 to 2019",

    logline: "This was a reset season.",
    storyPreview: "Plans shifted. Pride had to be humble and quiet. Work still had to be excellent.",
    storyFull:
      "This was a reset season. Plans shifted. Pride had to be humble and quiet. Work still had to be excellent.\n\n" +
      "Jermaine treated temp work like a bridge with standards. He showed up with a money goal, delivered clean output, and earned trust fast. Staying late, learning what supervisors needed, and being consistent turned into respect quickly.\n\n" +
      "He learned humility without shrinking. Discipline without excuses.\n\n" +
      "It taught him how rebuilding looks in real life. Clock in. Do the work. Stack the next step.",
    whatItBuilt:
      "Endurance, consistency, quality under pressure, management awareness, and the habit of rebuilding without shame.",

    tags: [],
    posterImage: null,
    heroMedia: null,
  },

  {
    id: "we-mastec",
    order: 8,
    role: "AT&T Digital Life Field Technician",
    organization: "MasTec Advanced Technologies",
    dateRange: "Nov 2014 to Jun 2017",

    logline: "Jermaine walked into homes where emotions were already high.",
    storyPreview:
      "Some people were excited. Some were nervous. Some were frustrated because the last tech left a mess.",
    storyFull:
      "Jermaine walked into homes where emotions were already high. Some people were excited. Some were nervous. Some were frustrated because the last tech left a mess.\n\n" +
      "He learned to enter calm, listen first, diagnose fast, and explain simply. Then deliver the fix in a way that restore trust.\n\n" +
      "The work ran on strict metrics and accountability. He managed his own truck, inventory, routes, and customer expectations across markets. He worked across Michigan and on the road in Maryland, Virginia, D.C., Milwaukee, and Chicago.\n\n" +
      "The method stayed steady. Listen. Diagnose. Explain. Fix. Leave the home better than he found it.",
    whatItBuilt:
      "Trust-fast communication, rapid diagnosis, calm under pressure, and accountability that looks like ownership.",

    tags: [],
    posterImage: null,
    heroMedia: null,
  },

  {
    id: "we-dbc",
    order: 9,
    role: "Account Representative",
    organization: "Detroit Business Consulting",
    dateRange: "Sep 2014 to Nov 2014",

    logline: "Door-to-door taught Jermaine resilience in the most honest way.",
    storyPreview: "You step into unknown spaces, read energy fast, and keep the message clear.",
    storyFull:
      "Door-to-door taught Jermaine resilience in the most honest way. You step into unknown spaces, read energy fast, and keep the message clear.\n\n" +
      "He learned how to handle objections without taking them personally and how to keep going when the day is long and the answer is often no.\n\n" +
      "Trust had to be earned in minutes. Focus had to last for hours.\n\n" +
      "This season sharpened quick connection and clean communication under repetition.",
    whatItBuilt:
      "Mental toughness, persuasion with integrity, situational awareness, and the ability to connect fast without forcing it.",

    tags: [],
    posterImage: null,
    heroMedia: null,
  },

  {
    id: "we-el-apm",
    order: 10,
    role: "Assistant Project Manager",
    organization: "E.L. Mechanical Inc.",
    dateRange: "Jan 2012 to Apr 2014",

    logline: "Construction taught Jermaine fast: if you miss details, you pay for it twice.",
    storyPreview: "He lived in the full cycle. Budgets and labor reports. RFIs. Schedule pressure.",
    storyFull:
      "Construction taught Jermaine fast: if you miss details, you pay for it twice.\n\n" +
      "He lived in the full cycle. Budgets and labor reports. RFIs. Schedule pressure. Submittals and closeouts. Purchase orders, material logs, and change orders where every decision had a cost and a paper trail.\n\n" +
      "He kept crews, vendors, and timelines on the same page by speaking in facts, not assumptions. When something was about to go sideways, he caught it early, called it clearly, and moved the work forward.\n\n" +
      "Execution was the scoreboard.",
    whatItBuilt:
      "Disciplined project control, documentation habits that prevent problems, sharper risk awareness, and follow-through that stays consistent when the pressure rises.",

    tags: [],
    posterImage: null,
    heroMedia: null,
  },

  {
    id: "we-el-ops",
    order: 11,
    role: "Estimating, Warehouse, and Administrative Work",
    organization: "E.L. Mechanical Inc.",
    dateRange: "Jan 2009 to May 2011",

    logline: "This was the operations foundation.",
    storyPreview: "Inventory. Equipment. Vendor access. Estimates. Reporting. Training. Calendars.",
    storyFull:
      "This was the operations foundation. Inventory. Equipment. Vendor access. Estimates. Reporting. Training. Calendars.\n\n" +
      "It is the work nobody praises, but everybody depends on. Jermaine learned how chaos starts, and how structure stops it.\n\n" +
      "Small gaps become big problems later. Tracking and routines were not optional.\n\n" +
      "This season built a respect for systems and a commitment to clarity when things get messy.",
    whatItBuilt:
      "Operational reliability, organization at speed, strong tracking habits, and the instinct to create clarity when things get messy.",

    tags: [],
    posterImage: null,
    heroMedia: null,
  },

  {
    id: "we-fruit",
    order: 12,
    role: "Fruit Etc On The Go",
    organization: "",
    dateRange: "Mid 2000s",

    logline: "This was early proof that presence matters.",
    storyPreview: "Jermaine took responsibility seriously, kept the space clean, and stayed consistent.",
    storyFull:
      "This was early proof that presence matters. Jermaine took responsibility seriously, kept the space clean, and stayed consistent.\n\n" +
      "He learned that small details are not small when they repeat every day.\n\n" +
      "Standards show up in basics. Basics shape what people remember.",
    whatItBuilt: "Consistency, service standards, and respect for small improvements that add up.",

    tags: [],
    posterImage: null,
    heroMedia: null,
  },

  {
    id: "we-entrepreneurship",
    order: 13,
    role: "Early Entrepreneurship, From 10 Year's Through Young Adulthood",
    organization: "Detroit",
    dateRange: "1997 to 2009",

    logline: "Jermaine was building businesses before the word entrepreneur had shine.",
    storyPreview:
      "A neighborhood candy store. Selling class notes. Fireworks. Hair extensions on college campuses before the online wave. Cars. Sporting and Entertainment Tickets. If it had value, he learned how to move it.",
    storyFull:
      "Jermaine was building businesses before the word entrepreneur had shine. A neighborhood candy store. Selling class notes. Fireworks. Hair extensions on college campuses before the online wave. Cars. Sporting and Entertainment Tickets. If it had value, he learned how to move it.\n\n" +
      "That season trained timing, demand, and confidence talking to anybody. He learned how to deliver, collect, and do it again.\n\n" +
      "High school graduation came in 2006, but the training started long before that.\n\n" +
      "It was hands-on education in people, value, and follow-through.",
    whatItBuilt: "Pattern recognition, persuasion with integrity, fast adaptation, and confidence built from earned reps.",

    tags: [],
    posterImage: null,
    heroMedia: null,
  },
].sort((a, b) => a.order - b.order);

export const getSeasonById = (id: string): WorkSeason =>
  workSeasons.find((s) => s.id === id) ?? workSeasons[0];

export const getFeaturedSeason = (): WorkSeason => getSeasonById(FEATURED_SEASON_ID);
