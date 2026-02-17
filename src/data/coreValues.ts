export type CoreValueId =
  | "self-reflection"
  | "authenticity"
  | "courage"
  | "integrity"
  | "accountability"
  | "compassion"
  | "freedom"
  | "student-mode";

export type Receipt = {
  id: string;
  title: string;
  whatHappened: string;
  decision: string;
  mappedValue: CoreValueId;
  jpLine?: string;
};

export type ValueReveal = {
  mattersBecause: string;
  peopleFeelWhenImInCharge: string;
  whenImOff?: string;
};

export type ValueDef = {
  id: CoreValueId;
  name: string;
  definition: string;
  looksLike: string;
  iRefuse: string;
  reveal: ValueReveal;
  voiceLines?: string[];
};

export type ScenarioChoice = {
  id: "A" | "B" | "C";
  text: string;
  isMyMove?: boolean;
};

export type Scenario = {
  id: string;
  valueId: CoreValueId;
  title: string;
  situation: string;
  choices: ScenarioChoice[];
  mySteps: string[];
  jpLine: string;
};

export type LibraryValue = {
  id: string;
  name: string;
  definition?: string;
};

export type LibraryShelf = {
  id: string;
  title: string;
  values: LibraryValue[];
};

export const coreValuesPage: {
  constants: {
    title: string;
    primaryFeeling: string;
    ctaLabel: string;
    doneWhen: string;
  };
  featuredOrder: CoreValueId[];
  receipts: Receipt[];
  values: ValueDef[];
  scenarios: Scenario[];
  season2: { title: string; valueIds: CoreValueId[]; receiptIds: string[] };
  libraryShelves: LibraryShelf[];
} = {
  constants: {
    title: "Core Values",
    primaryFeeling: "Authentic Truth and self power",
    ctaLabel: "Partner with me",
    doneWhen:
      "This page makes people feel seen and fired up, and shows the code I live by when it matters.",
  },

  featuredOrder: [
    "self-reflection",
    "authenticity",
    "courage",
    "integrity",
    "accountability",
    "compassion",
    "freedom",
    "student-mode",
  ],

  receipts: [
    {
      id: "r1",
      title: "I Hold the Weight, Then Help Move It",
      whatHappened:
        "People come to me when they’re frustrated, crisis, or carrying something heavy. I listen without judging and try to understand what it feels like from their side. Then I help them choose a decision that protects their future, not just their feelings in the moment.",
      decision: "I lead with empathy, then I move us into a plan.",
      mappedValue: "compassion",
      jpLine: "Comfort is easy. Support out of love.",
    },
    {
      id: "r2",
      title: "My Name Is Not for Sale",
      whatHappened:
        "I’ve been offered shortcuts. Jobs, access, information, the kind of “in” that comes with a price tag on your principles. I’ve watched how easy it is to justify it when the moment feels big. I’m not built to win like that.",
      decision:
        "I chose the uncomfortable path over the compromised one, every time!",
      mappedValue: "integrity",
      jpLine: "I can rebuild opportunities. I’m not rebuilding my name.",
    },
    {
      id: "r3",
      title: "Not Afraid of What Happens Next",
      whatHappened:
        "I take accountability for my actions every time. Even when something isn’t fully on me, I still pull the lesson, because I’m not trying to repeat the same pain in a different outfit. I left school twice. Years passed. I went back anyway and finished because I was tired of carrying an unfinished promise in my name.",
      decision:
        "I stopped negotiating with myself I owned my choices, I look forward to every lesson, even if it’s not mines, and prepare my next move.",
      mappedValue: "accountability",
      jpLine:
        "Guilt fades fast. Silence feels good for a minute. Accountability changes your life forever, and growth is expected.",
    },
    {
      id: "r4",
      title: "Learning is the power of living.",
      whatHappened:
        "I stay teachable, so life can keep giving me new options.” It’s not about being smart. It’s about staying curious. When somebody is training me, I don’t interrupt to prove I already know. I still learn it their way first, earn trust through solid action, then I offer a better method only if after I proved I could do it, I improved it..",
      decision: "I respect the process first, before I tried to optimize it.",
      mappedValue: "student-mode",
      jpLine: "Teach me the rules. Then watch my work ethics pay dividends.",
    },
    {
      id: "r5",
      title: "Pause. Scan. Decide.",
      whatHappened:
        "Before I react, I audit myself. I do a body scan and an emotional scan, then I decide how I’m moving, because I’m not letting a moment pull me out of who I am. This world is distracting with noise, being reactive, and addicted to rushification (Dopamine full of instant gratification). I don’t want to be led by emotions and calling it “truth or This is me”",
      decision: "I pause, scan, then decide on purpose.",
      mappedValue: "self-reflection",
      jpLine: "A quick pause saves a long regret.",
    },
    {
      id: "r6",
      title: "I Don’t Live Divided",
      whatHappened:
        "Authenticity is alignment for me. Spiritual, emotional, and physical all saying the same thing. If I catch myself drifting into gossip, people-pleasing, or moving out of character, I correct it. I’m not building a life where I have to explain two versions of me.",
      decision:
        "Alignment over Approval. I choose alignment even when it costs comfort.",
      mappedValue: "authenticity",
      jpLine: "If I can’t respect it, I can’t do it.",
    },
    {
      id: "r7",
      title: "I Didn’t Negotiate With Fear",
      whatHappened:
        "Aspen. Ski trip. I felt fear moving through my core. That year my word was fear, and I made myself a promise: I would face it on purpose, not because anyone pushed me. I did it because I was done letting fear make choices for me.",
      decision: "I challenged the fear instead of negotiating with it.",
      mappedValue: "courage",
      jpLine: "Courage is fear with direction. The decision gives it a job.",
    },
    {
      id: "r8",
      title: "I’m Not Built to Beg for Air",
      whatHappened:
        "When I feel limited, unheard, or dependent on someone else’s permission, something in me wakes up. I pause and audit what’s happening, check my emotions, and get honest about what I can control. Then I build a plan that creates options, even if it takes longer.",
      decision: "I commit to building choices instead of waiting for permission.",
      mappedValue: "freedom",
      jpLine: "I don’t ask for freedom. I create the door and design the path.",
    },
  ],

  values: [
    /* keep your existing values array as-is */
  ] as ValueDef[],

  scenarios: [
    /* keep your existing scenarios array as-is */
  ] as Scenario[],

  season2: {
    title: "Season 2",
    valueIds: ["freedom", "student-mode"],
    receiptIds: ["r4", "r8"],
  },

  libraryShelves: [
    /* keep your existing shelves array as-is */
  ],
};
