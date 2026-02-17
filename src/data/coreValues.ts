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

export const coreValuesPage = {
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
  ] as CoreValueId[],

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
    {
      id: "self-reflection",
      name: "Self-reflection",
      definition: "I pause long enough to be honest with myself.",
      looksLike: "I do a body scan, an emotional scan, then I decide on purpose.",
      iRefuse: "I refuse to let a mood make my choices and call it truth.",
      reveal: {
        mattersBecause:
          "If I don’t pause and check myself, I’ll make a permanent decision off a temporary feeling.",
        peopleFeelWhenImInCharge:
          "Dependable, because I don’t let emotions run the room.",
        whenImOff:
          "I move too fast and realize later I skipped the self-scan.",
      },
      voiceLines: [
        "Give me ten seconds. I’m scanning before I speak. I’d rather pause now than regret it all week.",
      ],
    },
    {
      id: "authenticity",
      name: "Authenticity",
      definition: "I live in one piece.",
      looksLike:
        "My spirit, my words, and my actions match, even when nobody’s watching.",
      iRefuse: "I refuse to be two versions of me for anybody.",
      reveal: {
        mattersBecause:
          "Living with multiple masks will drain you, and I’m not paying that price.",
        peopleFeelWhenImInCharge:
          "Consistent, because they know they’re getting the real me every time.",
        whenImOff:
          "I overthink the room and start performing instead of being present, and social anxiety tries to write the script.",
      },
      voiceLines: ["You’re getting one Jermaine. Same in public, same in private."],
    },
    {
      id: "courage",
      name: "Courage",
      definition: "I move even when I’m scared.",
      looksLike: "I name the fear, give it a job, and take the step anyway.",
      iRefuse: "I refuse to negotiate with fear.",
      reveal: {
        mattersBecause:
          "Fear will keep shrinking your life if you let it make choices.",
        peopleFeelWhenImInCharge:
          "Forward motion, because I’ll name what’s real and still move.",
        whenImOff: "I hesitate too long and let a small moment build momentum.",
      },
      voiceLines: ["Fear can ride in the car, but it can’t drive."],
    },
    {
      id: "integrity",
      name: "Integrity",
      definition: "My name is not for sale.",
      looksLike:
        "I turn down shortcuts that cost character, even when the offer looks sweet.",
      iRefuse: "I refuse to win if it costs my name.",
      reveal: {
        mattersBecause:
          "If your name gets damaged, everything you build sits on shaky ground.",
        peopleFeelWhenImInCharge:
          "Trust, because the standard doesn’t change based on the offer.",
        whenImOff:
          "I let a “small” thing slide that should’ve been addressed early.",
      },
      voiceLines: ["If it costs my name, it costs too much."],
    },
    {
      id: "accountability",
      name: "Accountability",
      definition: "I own my choices, and I take the lesson.",
      looksLike:
        "I say “that’s on me,” fix what I can, and change the pattern for next time.",
      iRefuse: "I refuse to apologize without adjusting.",
      reveal: {
        mattersBecause: "Ownership is how you grow without lying to yourself.",
        peopleFeelWhenImInCharge:
          "Relief, because excuses don’t live here and problems get handled.",
        whenImOff:
          "I carry too much instead of naming what needs to change and who owns it.",
      },
      voiceLines: ["I don’t apologize to feel better. I adjust."],
    },
    {
      id: "compassion",
      name: "Compassion",
      definition: "I hold the weight, then help you move it.",
      looksLike:
        "I listen without judging, then I give you steps that protect your future, not just your feelings.",
      iRefuse: "I refuse to comfort you into staying stuck.",
      reveal: {
        mattersBecause:
          "People don’t need another speech, they need a way through.",
        peopleFeelWhenImInCharge:
          "Seen and heard, because I listen without judging and I don’t leave them unanswered.",
        whenImOff:
          "I jump into fix-it mode too fast and don’t sit with them long enough to fully hear what they’re carrying.",
      },
      voiceLines: ["Tell me what’s heavy. I’ll listen first. Then we move."],
    },
    {
      id: "freedom",
      name: "Freedom",
      definition: "I build options so my life isn’t dependent on permission.",
      looksLike:
        "When I feel boxed in, I assess what’s real, then I create a plan that opens doors.",
      iRefuse: "I refuse to beg for air.",
      reveal: {
        mattersBecause:
          "I’m not built to need permission to live my life, or be micromanaged.",
        peopleFeelWhenImInCharge:
          "Space to be themselves, because I make room for people to be heard, creative, and respected.",
        whenImOff: "I overthink too long before I make the move.",
      },
      voiceLines: ["I don’t ask for freedom. I create the door."],
    },
    {
      id: "student-mode",
      name: "Student Mode",
      definition: "I stay teachable so life can keep giving me new options.",
      looksLike:
        "I learn it your way first, earn trust through action, then improve it with proof.",
      iRefuse: "I refuse to let ego make me slow.",
      reveal: {
        mattersBecause: "The moment you stop learning, you stop growing.",
        peopleFeelWhenImInCharge:
          "Confidence, because I stay teachable and improve what’s in front of us.",
        whenImOff:
          "I get too comfortable and stop studying, and that’s when I start getting stagnant.",
      },
      voiceLines: ["Teach me the rules. Then watch my work ethic pay dividends."],
    },
  ] as ValueDef[],

  scenarios: [
    {
      id: "s1",
      valueId: "self-reflection",
      title: "I’m triggered right now.",
      situation:
        "Somebody says something that hits a nerve. You can feel your body heat up and your thoughts start sprinting.",
      choices: [
        { id: "A", text: "Snap back and match their energy." },
        { id: "B", text: "Swallow it, stay quiet, and carry it all day." },
        { id: "C", text: "Pause, scan, then respond on purpose.", isMyMove: true },
      ],
      mySteps: [
        "I do a quick body scan and name what I’m feeling.",
        "I ask, “What do I actually need right now, and what’s the outcome I want?”",
        "I respond with a boundary or a question, not a reaction.",
      ],
      jpLine: "A quick pause saves a long regret.",
    },
    {
      id: "s7",
      valueId: "freedom",
      title: "You feel boxed in.",
      situation:
        "You’re in a situation where you feel limited, unheard, or like your future depends on somebody else’s permission.",
      choices: [
        { id: "A", text: "Stay quiet and accept it." },
        { id: "B", text: "Blow it up out of anger and walk away with no plan." },
        { id: "C", text: "Pause, assess, then create options.", isMyMove: true },
      ],
      mySteps: [
        "I do an emotional scan so I’m not moving off anger.",
        "I get honest about what I can control and what I can’t.",
        "I build an exit or adjustment plan that creates choices, even if it takes longer.",
      ],
      jpLine: "I don’t ask for freedom. I create the door and design the path.",
    },
  ] as Scenario[],

  season2: {
    title: "Season 2",
    valueIds: ["freedom", "student-mode"] as CoreValueId[],
    receiptIds: ["r4", "r8"],
  },

  libraryShelves: [
    {
      id: "shelf-name-standard",
      title: "Name + Standard",
      values: [
        { id: "honesty", name: "Honesty" },
        { id: "fairness", name: "Fairness" },
        { id: "loyalty", name: "Loyalty" },
        { id: "generosity", name: "Generosity" },
        { id: "responsibility", name: "Responsibility" },
        { id: "self-respect", name: "Self-respect" },
      ],
    },
  ] as LibraryShelf[],
};
