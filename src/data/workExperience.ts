export type WorkSeason = {
  id: string;
  order: number; // 1 = most recent
  role: string; // context label
  organization: string; // canonical when applicable
  dateRange: string;

  logline: string; // exact sentence excerpt
  storyPreview: string; // exact excerpt
  storyFull: string; // exact full text
  whatItBuilt: string; // exact

  tags?: string[];
  posterImage?: string | null;
  heroMedia?: string | null;
};

export const workSeasons: WorkSeason[] = [
  {
    id: `we-1`,
    order: 1,
    role: `Senior Project Manager`,
    organization: `NAACP Detroit Branch`,
    dateRange: `Dec 2023 to Now`,
    logline: `Move-in day starts with two empty halls and a deadline that does not blink.`,
    storyPreview: `Move-in day starts with two empty halls and a deadline that does not blink. Crews stack in. Vendors need answers. Volunteers need direction. Ten thousand people will judge the night by how smooth it feels.`,
    storyFull: `Move-in day starts with two empty halls and a deadline that does not blink. Crews stack in. Vendors need answers. Volunteers need direction. Ten thousand people will judge the night by how smooth it feels.

Jermaine turns that pressure into a clean experience. He created the entire ticketing and digital entry process, so the front door works for every guest, every time. He keeps the build-out, show flow, and on-the-floor decisions tight enough that the room stays calm, even when the back end is moving fast.

He protects what the Dinner has been for decades while opening space for fresh fundraising moments that fit the tradition. Over 400 tables means the details are the job. Timing. Ownership. Clear calls. No room for mistakes.

His standard is simple. If people feel like it was effortless, the work was done right.`,
    whatItBuilt: `Large-scale operations, calm leadership under pressure, clear communication across many moving parts, and the discipline to refine the process every year.`,
    tags: [`Annual Fight for Freedom Fund Dinner`],
    posterImage: null,
    heroMedia: null,
  },
  {
    id: `we-2`,
    order: 2,
    role: `Special Projects Manager`,
    organization: `NAACP Detroit Branch`,
    dateRange: `Sep 2021 to Now`,
    logline: `Special projects is the work nobody can neatly label, but it still has to be done right.`,
    storyPreview: `Special projects is the work nobody can neatly label, but it still has to be done right. It comes with a tight deadline and a direct consequence if it is missed.`,
    storyFull: `Special projects is the work nobody can neatly label, but it still has to be done right. It comes with a tight deadline and a direct consequence if it is missed.

Jermaine steps in when something has no clear owner, when the stakes are public, or when the timeline is tight and the work cannot be delayed. He develops programs end to end. Recruitment. Scheduling. Training. Partner coordination. Youth summer employment payroll coordination and tracking. Outcomes.

He also brings new concepts to life: creative program experiences, stronger partner coordination, and efficient ways to recruit, train, and run the work so it connects for the people it serves.

He keeps commitments on time without bruising relationships. People feel respected, even when the standard stays firm.

His pattern is consistent. Protect the mission. Protect the people. Keep the work simple enough that someone else can carry it forward.`,
    whatItBuilt: `Full-cycle program control, sound judgment, partner management, and the ability to keep work moving without burning trust.`,
    tags: [],
    posterImage: null,
    heroMedia: null,
  },
  {
    id: `we-3`,
    order: 3,
    role: `Executive Assistant`,
    organization: `NAACP Detroit Branch`,
    dateRange: `Apr 2019 to Sep 2021`,
    logline: `Jermaine treated this role as operational protection.`,
    storyPreview: `Jermaine treated this role as operational protection. Leadership should walk into a room prepared. Period.`,
    storyFull: `Jermaine treated this role as operational protection. Leadership should walk into a room prepared. Period.

He moved quietly and paid attention. He listened more than he spoke, learned how the organization truly moved, and handled issues before they became problems.

This season trained timing and priorities in rooms where pressure is intense, and reputations are on the line.

This is where his instincts sharpened. He spots the gap, closes the gap, and keeps the work moving.`,
    whatItBuilt: `Discretion, readiness, strong priorities, room-reading, and the ability to stabilize chaos without making it about him.`,
    tags: [],
    posterImage: null,
    heroMedia: null,
  },
  {
    id: `we-4`,
    order: 4,
    role: `President and CEO`,
    organization: `Pathworth Consulting & Solutions`,
    dateRange: `Sep 2016 to Now`,
    logline: `Pathworth started with one question that still guides him.`,
    storyPreview: `Pathworth started with one question that still guides him. What is my path worth?`,
    storyFull: `Pathworth started with one question that still guides him. What is my path worth?

Jermaine built the company to grow with him, not trap him in one version of himself. The work has moved through seasons: consulting and solutions, financial education, digital marketing, and a deeper focus on AI and automation as the world shifted.

The core stayed the same. He turns ambition into action. He builds usable systems, clearer decisions, and practical tools that fit client style. He cares about what people can maintain, not what sounds good at the time.

Pathworth is also personal. It is the work that kept him aligned when other things were uncertain, and it carries the discipline earned in every season before it.`,
    whatItBuilt: `Vision with discipline, clear problem solving, the ability to teach complex tools in relatable concepts, and systems that hold up under pressure.`,
    tags: [],
    posterImage: null,
    heroMedia: null,
  },
  {
    id: `we-5`,
    order: 5,
    role: `Founding Chapter President`,
    organization: `Recession Proof Extreme Inc. Michigan Chapter`,
    dateRange: `Sep 2021 to Now`,
    logline: `This season taught Jermaine what it takes to build community the right way.`,
    storyPreview: `This season taught Jermaine what it takes to build community the right way. Recruitment. Programs. Fundraising. Consistency. Care.`,
    storyFull: `This season taught Jermaine what it takes to build community the right way. Recruitment. Programs. Fundraising. Consistency. Care.

He learned people do not stay for a title. They stay for how you make them feel and what you help them become. So, he listened closely, remembered what mattered to each member, and built experiences that met practical needs.

Under his leadership the chapter grew from 19 members to 125+. It earned Chapter of the Year and Model Chapter of the Year in 2022, and it exceeded fundraising expectations inside a national network.

He held standards without being funny acting. That balance is rare.`,
    whatItBuilt: `Community-building that scales, leadership without ego, strong relationship memory, and the ability to hold a high bar while still making people feel seen.`,
    tags: [],
    posterImage: null,
    heroMedia: null,
  },
  {
    id: `we-6`,
    order: 6,
    role: `Recruitment Chair`,
    organization: `New Leaders Council Detroit`,
    dateRange: `Jul 2020 to Sep 2022`,
    logline: `Recruitment is judgment.`,
    storyPreview: `Recruitment is judgment. You are choosing who belongs in the room and why.`,
    storyFull: `Recruitment is judgment. You are choosing who belongs in the room and why.

Jermaine recruited and guided 50+ emerging leaders into the program across multiple cohorts. He looked for people with values and follow-through, not just visibility.

He recruited for impact, not familiarity. He found leaders who did not even know the program existed, treated their potential like an asset, and personalized every invite with clear expectations and alignment from the beginning.

This season also stretched him into public communication. When the work needs a voice, you do not hide from the camera.`,
    whatItBuilt: `Talent spotting, confident public communication, strong judgment about fit, and the ability to build a leadership bench with intention.`,
    tags: [],
    posterImage: null,
    heroMedia: null,
  },
  {
    id: `we-7`,
    order: 7,
    role: `Production and Temp Work`,
    organization: `ResourceMFG and Forge Industrial Staffing`,
    dateRange: `2018 to 2019`,
    logline: `This was a reset season.`,
    storyPreview: `This was a reset season. Plans shifted. Pride had to be humble and quiet. Work still had to be excellent.`,
    storyFull: `This was a reset season. Plans shifted. Pride had to be humble and quiet. Work still had to be excellent.

Jermaine treated temp work like a bridge with standards. He showed up with a money goal, delivered clean output, and earned trust fast. Staying late, learning what supervisors needed, and being consistent turned into respect quickly.

He learned humility without shrinking. Discipline without excuses.

It taught him how rebuilding looks in real life. Clock in. Do the work. Stack the next step.`,
    whatItBuilt: `Endurance, consistency, quality under pressure, management awareness, and the habit of rebuilding without shame.`,
    tags: [],
    posterImage: null,
    heroMedia: null,
  },
  {
    id: `we-8`,
    order: 8,
    role: `AT&T Digital Life Field Technician`,
    organization: `MasTec Advanced Technologies`,
    dateRange: `Nov 2014 to Jun 2017`,
    logline: `Jermaine walked into homes where emotions were already high.`,
    storyPreview: `Jermaine walked into homes where emotions were already high. Some people were excited. Some were nervous. Some were frustrated because the last tech left a mess.`,
    storyFull: `Jermaine walked into homes where emotions were already high. Some people were excited. Some were nervous. Some were frustrated because the last tech left a mess.

He learned to enter calm, listen first, diagnose fast, and explain simply. Then deliver the fix in a way that restore trust.

The work ran on strict metrics and accountability. He managed his own truck, inventory, routes, and customer expectations across markets. He worked across Michigan and on the road in Maryland, Virginia, D.C., Milwaukee, and Chicago.

The method stayed steady. Listen. Diagnose. Explain. Fix. Leave the home better than he found it.`,
    whatItBuilt: `Trust-fast communication, rapid diagnosis, calm under pressure, and accountability that looks like ownership.`,
    tags: [],
    posterImage: null,
    heroMedia: null,
  },
  {
    id: `we-9`,
    order: 9,
    role: `Account Representative`,
    organization: `Detroit Business Consulting`,
    dateRange: `Sep 2014 to Nov 2014`,
    logline: `Door-to-door taught Jermaine resilience in the most honest way.`,
    storyPreview: `Door-to-door taught Jermaine resilience in the most honest way. You step into unknown spaces, read energy fast, and keep the message clear.`,
    storyFull: `Door-to-door taught Jermaine resilience in the most honest way. You step into unknown spaces, read energy fast, and keep the message clear.

He learned how to handle objections without taking them personally and how to keep going when the day is long and the answer is often no.

Trust had to be earned in minutes. Focus had to last for hours.

This season sharpened quick connection and clean communication under repetition.`,
    whatItBuilt: `Mental toughness, persuasion with integrity, situational awareness, and the ability to connect fast without forcing it.`,
    tags: [],
    posterImage: null,
    heroMedia: null,
  },
  {
    id: `we-10`,
    order: 10,
    role: `Assistant Project Manager`,
    organization: `E.L. Mechanical Inc.`,
    dateRange: `Jan 2012 to Apr 2014`,
    logline: `Construction taught Jermaine fast: if you miss details, you pay for it twice.`,
    storyPreview: `Construction taught Jermaine fast: if you miss details, you pay for it twice.`,
    storyFull: `Construction taught Jermaine fast: if you miss details, you pay for it twice.

He lived in the full cycle. Budgets and labor reports. RFIs. Schedule pressure. Submittals and closeouts. Purchase orders, material logs, and change orders where every decision had a cost and a paper trail.

He kept crews, vendors, and timelines on the same page by speaking in facts, not assumptions. When something was about to go sideways, he caught it early, called it clearly, and moved the work forward.

Execution was the scoreboard.`,
    whatItBuilt: `Disciplined project control, documentation habits that prevent problems, sharper risk awareness, and follow-through that stays consistent when the pressure rises.`,
    tags: [],
    posterImage: null,
    heroMedia: null,
  },
  {
    id: `we-11`,
    order: 11,
    role: `Estimating, Warehouse, and Administrative Work`,
    organization: `E.L. Mechanical`,
    dateRange: `Jan 2009 to May 2011`,
    logline: `This was the operations foundation.`,
    storyPreview: `This was the operations foundation. Inventory. Equipment. Vendor access. Estimates. Reporting. Training. Calendars.`,
    storyFull: `This was the operations foundation. Inventory. Equipment. Vendor access. Estimates. Reporting. Training. Calendars.

It is the work nobody praises, but everybody depends on. Jermaine learned how chaos starts, and how structure stops it.

Small gaps become big problems later. Tracking and routines were not optional.

This season built a respect for systems and a commitment to clarity when things get messy.`,
    whatItBuilt: `Operational reliability, organization at speed, strong tracking habits, and the instinct to create clarity when things get messy.`,
    tags: [],
    posterImage: null,
    heroMedia: null,
  },
  {
    id: `we-12`,
    order: 12,
    role: `Fruit Etcetera On The Go`,
    organization: ``,
    dateRange: `Mid 2000s`,
    logline: `This was early proof that presence matters.`,
    storyPreview: `This was early proof that presence matters. Jermaine took responsibility seriously, kept the space clean, and stayed consistent.`,
    storyFull: `This was early proof that presence matters. Jermaine took responsibility seriously, kept the space clean, and stayed consistent.

He learned that small details are not small when they repeat every day.

Standards show up in basics. Basics shape what people remember.`,
    whatItBuilt: `Consistency, service standards, and respect for small improvements that add up.`,
    tags: [],
    posterImage: null,
    heroMedia: null,
  },
  {
    id: `we-13`,
    order: 13,
    role: `Early Entrepreneurship, Age 10 Through Young Adulthood`,
    organization: `Detroit`,
    dateRange: `1998 to 2009`,
    logline: `Jermaine was building businesses before the word entrepreneur had shine.`,
    storyPreview: `Jermaine was building businesses before the word entrepreneur had shine. A neighborhood candy store. Selling class notes. Fireworks. Hair extensions on college campuses before the online wave. Cars. Sporting and Entertainment Tickets. If it had value, he learned how to move it.`,
    storyFull: `Jermaine was building businesses before the word entrepreneur had shine. A neighborhood candy store. Selling class notes. Fireworks. Hair extensions on college campuses before the online wave. Cars. Sporting and Entertainment Tickets. If it had value, he learned how to move it.

That season trained timing, demand, and confidence talking to anybody. He learned how to deliver, collect, and do it again.

High school graduation came in 2006, but the training started long before that.

It was hands-on education in people, value, and follow-through.`,
    whatItBuilt: `Pattern recognition, persuasion with integrity, fast adaptation, and confidence built from earned reps.`,
    tags: [],
    posterImage: null,
    heroMedia: null,
  },
].sort((a, b) => a.order - b.order);

export const getFeaturedSeason = (): WorkSeason => workSeasons[0];
export const getSeasonById = (id: string): WorkSeason =>
  workSeasons.find((s) => s.id === id) ?? workSeasons[0];
