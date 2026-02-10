export type WorkSeason = {
  id: string;
  order: number; // explicit ordering, never derived
  role: string; // context label
  organization: string; // canonical when applicable
  dateRange: string;

  logline: string; // exact excerpt
  storyPreview: string; // exact excerpt (no duplication with logline)
  storyFull: string; // exact text
  whatItBuilt: string; // exact text (without the "What it built in him:" label)

  tags?: string[];
  posterImage?: string | null; // optional future real posters
  heroMedia?: string | null;
};

export const FEATURED_SEASON_ID = "we-pathworth";

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
      "End
