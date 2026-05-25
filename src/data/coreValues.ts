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
  inTheMoment: string; // What happened → In The Moment
  theProcess: string; // Decision → The Process
  mappedValue: CoreValueId; // Mapped Value → Value Tag chip
  gospel?: string; // JP line → The Gospel of JP
};

export type ValueReveal = {
  mattersBecause: string;
  peopleFeel: string;
  whenOff?: string;
};

export type ValueDef = {
  id: CoreValueId;
  name: string;
  whatItIs: string; // Definition → What it is
  howIMove: string; // Looks like → How I move
  iWont: string; // I refuse → I won’t
  reveal: ValueReveal;
  voiceLines: string[];
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
  myStrategies: string[]; // My 2–3 steps → My Strategies (Steps)
  gospel: string; // JP line → The Gospel of JP
};

export type SupportingValue = {
  name: string;
  /** One-line preview shown on the tile in the grid. */
  description: string;
  /** Longer reflection shown when the tile is opened in a modal. */
  reflection: string;
};

export type LibraryShelf = {
  id: string;
  title: string;
  /** Optional one-line shelf description shown under the shelf title. */
  description?: string;
  values: SupportingValue[];
};

export const coreValuesPage: {
  intro: {
    title: string;
    experienceIntro: string;
  };
  sectionNames: {
    realSituations: string;
    whatMatters: string;
    underPressure: string;
    season2: string;
    valuesLibrary: string;
  };
  featuredValuesOrder: CoreValueId[];
  receipts: Receipt[];
  values: ValueDef[];
  scenarios: Scenario[];
  season2: {
    focusValueIds: CoreValueId[];
    featuredReceiptIds: string[];
  };
  libraryShelves: LibraryShelf[];
  cta: {
    label: string;
  };
} = {
  intro: {
    title: "Core Values",
    experienceIntro:
      "Don’t just read my values. Step into my shoes, experience what it’s like as me. Pick one value and I’ll put you in a real situation and show you what it looks like when it matter and see how I move under pressure.",
  },

  sectionNames: {
    realSituations: "Real Situations",
    whatMatters: "What Matters to You",
    underPressure: "Under Pressure",
    season2: "Season 2: More Life. More Values",
    valuesLibrary: "More Supporting Values",
  },

  featuredValuesOrder: [
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
      inTheMoment:
        "People come to me when they’re frustrated, crisis, or carrying something heavy. I listen without judging and try to understand what it feels like from their side. Then I help them choose a decision that protects their future, not just their feelings in the moment.",
      theProcess: "I lead with empathy, then I move us into a plan.",
      mappedValue: "compassion",
      gospel: "Comfort is easy. Support out of love.",
    },
    {
      id: "r2",
      title: "My Name Is Not for Sale",
      inTheMoment:
        "I’ve been offered shortcuts. Jobs, access, information, the kind of “in” that comes with a price tag on your principles. I’ve watched how easy it is to justify it when the moment feels big. I’m not built to win like that.",
      theProcess:
        "I chose the uncomfortable path over the compromised one, every time!",
      mappedValue: "integrity",
      gospel: "I can rebuild opportunities. I’m not rebuilding my name.",
    },
    {
      id: "r3",
      title: "Not Afraid of What Happens Next",
      inTheMoment:
        "I take accountability for my actions every time. Even when something isn’t fully on me, I still pull the lesson, because I’m not trying to repeat the same pain in a different outfit. I left school twice. Years passed. I went back anyway and finished because I was tired of carrying an unfinished promise in my name.",
      theProcess:
        "I stopped negotiating with myself I owned my choices, I look forward to every lesson, even if it’s not mines, and prepare my next move.",
      mappedValue: "accountability",
      gospel:
        "Guilt fades fast. Silence feels good for a minute. Accountability changes your life forever, and growth is expected.",
    },
    {
      id: "r4",
      title: "Learning is the power of living.",
      inTheMoment:
        "I stay teachable, so life can keep giving me new options.” It’s not about being smart. It’s about staying curious. When somebody is training me, I don’t interrupt to prove I already know. I still learn it their way first, earn trust through solid action, then I offer a better method only if after I proved I could do it, I improved it..",
      theProcess: "I respect the process first, before I tried to optimize it.",
      mappedValue: "student-mode",
      gospel: "Teach me the rules. Then watch my work ethic pay dividends.",
    },
    {
      id: "r5",
      title: "Pause. Scan. Decide.",
      inTheMoment:
        "Before I react, I audit myself. I do a body scan and an emotional scan, then I decide how I’m moving, because I’m not letting a moment pull me out of who I am. This world is distracting with noise, being reactive, and addicted to rushification (Dopamine full of instant gratification). I don’t want to be led by emotions and calling it “truth or This is me”",
      theProcess: "I pause, scan, then decide on purpose.",
      mappedValue: "self-reflection",
      gospel: "A quick pause saves a long regret.",
    },
    {
      id: "r6",
      title: "I Don’t Live Divided",
      inTheMoment:
        "Authenticity is alignment for me. Spiritual, emotional, and physical all saying the same thing. If I catch myself drifting into gossip, people-pleasing, or moving out of character, I correct it. I’m not building a life where I have to explain two versions of me.",
      theProcess:
        "Alignment over Approval. I choose alignment even when it costs comfort.",
      mappedValue: "authenticity",
      gospel: "If I can’t respect it, I can’t do it.",
    },
    {
      id: "r7",
      title: "I Didn’t Negotiate With Fear",
      inTheMoment:
        "Aspen. Ski trip. I felt fear moving through my core. That year my word was fear, and I made myself a promise: I would face it on purpose, not because anyone pushed me. I did it because I was done letting fear make choices for me.",
      theProcess: "I challenged the fear instead of negotiating with it.",
      mappedValue: "courage",
      gospel: "Courage is fear with direction. The decision gives it a job.",
    },
    {
      id: "r8",
      title: "I’m Not Built to Beg for Air",
      inTheMoment:
        "When I feel limited, unheard, or dependent on someone else’s permission, something in me wakes up. I pause and audit what’s happening, check my emotions, and get honest about what I can control. Then I build a plan that creates options, even if it takes longer.",
      theProcess:
        "I commit to building choices instead of waiting for permission.",
      mappedValue: "freedom",
      gospel: "I don’t ask for freedom. I create the door and design the path.",
    },
  ],

  values: [
    {
      id: "self-reflection",
      name: "Self-reflection",
      whatItIs: "I pause long enough to be honest with myself.",
      howIMove: "I do a body scan, an emotional scan, then I decide on purpose.",
      iWont: "I refuse to let a mood make my choices and call it truth.",
      reveal: {
        mattersBecause:
          "If I don’t pause and check myself, I’ll make a permanent decision off a temporary feeling.",
        peopleFeel: "Dependable, because I don’t let emotions run the room.",
        whenOff: "I move too fast and realize later I skipped the self-scan.",
      },
      voiceLines: [
        "Give me ten seconds. I’m scanning before I speak. I’d rather pause now than regret it all week.",
        "If my body is yelling, I don’t answer out loud yet. I breathe, name it, then choose the response I can stand on.",
      ],
    },
    {
      id: "authenticity",
      name: "Authenticity",
      whatItIs: "I live in one piece.",
      howIMove:
        "My spirit, my words, and my actions match, even when nobody’s watching.",
      iWont: "I refuse to be two versions of me for anybody.",
      reveal: {
        mattersBecause:
          "Living with multiple masks will drain you, and I’m not paying that price.",
        peopleFeel:
          "Consistent, because they know they’re getting the real me every time.",
        whenOff:
          "I overthink the room and start performing instead of being present, and social anxiety tries to write the script.",
      },
      voiceLines: [
        "You’re getting one Jermaine. Same in public, same in private. If I’m not aligned, I reset before I respond.",
        "If I feel myself performing, that’s my cue. I slow down, come back to myself, and then I re-enter the room.",
      ],
    },
    {
      id: "courage",
      name: "Courage",
      whatItIs: "I move even when I’m scared.",
      howIMove: "I name the fear, give it a job, and take the step anyway.",
      iWont: "I refuse to negotiate with fear.",
      reveal: {
        mattersBecause:
          "Fear will keep shrinking your life if you let it make choices.",
        peopleFeel: "Forward motion, because I’ll name what’s real and still move.",
        whenOff: "I hesitate too long and let a small moment build momentum.",
      },
      voiceLines: [
        "Fear can ride in the car, but it can’t drive. I pick the direction and I move.",
        "I don’t wait to feel ready. I take the next right step, and confidence catches up later.",
      ],
    },
    {
      id: "integrity",
      name: "Integrity",
      whatItIs: "My name is not for sale.",
      howIMove:
        "I turn down shortcuts that cost character, even when the offer looks sweet.",
      iWont: "I refuse to win if it costs my name.",
      reveal: {
        mattersBecause:
          "If your name gets damaged, everything you build sits on shaky ground.",
        peopleFeel: "Trust, because the standard doesn’t change based on the offer.",
        whenOff:
          "I let a “small” thing slide that should’ve been addressed early.",
      },
      voiceLines: [
        "If it costs my name, it costs too much. I’ll walk away and sleep good.",
        "Shortcuts always come with receipts. I’m not signing my name to anything I wouldn’t stand on in daylight.",
      ],
    },
    {
      id: "accountability",
      name: "Accountability",
      whatItIs: "I own my choices, and I take the lesson.",
      howIMove:
        "I say “that’s on me,” fix what I can, and change the pattern for next time.",
      iWont: "I refuse to apologize without adjusting.",
      reveal: {
        mattersBecause: "Ownership is how you grow without lying to yourself.",
        peopleFeel: "Relief, because excuses don’t live here and problems get handled.",
        whenOff:
          "I carry too much instead of naming what needs to change and who owns it.",
      },
      voiceLines: [
        "If it’s on me, I say it. Then I fix it and tighten the pattern. No speeches.",
        "I don’t apologize to feel better. I adjust so it doesn’t happen again.",
      ],
    },
    {
      id: "compassion",
      name: "Compassion",
      whatItIs: "I hold the weight, then help you move it.",
      howIMove:
        "I listen without judging, then I give you steps that protect your future, not just your feelings.",
      iWont: "I refuse to comfort you into staying stuck.",
      reveal: {
        mattersBecause: "People don’t need another speech, they need a way through.",
        peopleFeel:
          "Seen and heard, because I listen without judging and I don’t leave them unanswered.",
        whenOff:
          "I jump into fix-it mode too fast and don’t sit with them long enough to fully hear what they’re carrying.",
      },
      voiceLines: [
        "Tell me what’s heavy. I’ll listen first. Then we’ll build a next step that protects tomorrow, not just today.",
        "I’m not here to hype you up and send you back into pain. We’re leaving with a plan.",
      ],
    },
    {
      id: "freedom",
      name: "Freedom",
      whatItIs: "I build options so my life isn’t dependent on permission.",
      howIMove:
        "When I feel boxed in, I assess what’s real, then I create a plan that opens doors.",
      iWont: "I refuse to beg for air.",
      reveal: {
        mattersBecause: "I’m not built to need permission to live my life, or be micromanaged.",
        peopleFeel:
          "Space to be themselves, because I make room for people to be heard, creative, and respected.",
        whenOff: "I overthink too long before I make the move.",
      },
      voiceLines: [
        "If I can’t breathe in it, I can’t stay in it. I start building options immediately.",
        "Freedom is choices. Skills. Money. Relationships that don’t trap you. I build the door before I need it.",
      ],
    },
    {
      id: "student-mode",
      name: "Student Mode",
      whatItIs: "I stay teachable so life can keep giving me new options.",
      howIMove:
        "I learn it your way first, earn trust through action, then improve it with proof.",
      iWont: "I refuse to let ego make me slow.",
      reveal: {
        mattersBecause: "The moment you stop learning, you stop growing.",
        peopleFeel:
          "Confidence, because I stay teachable and improve what’s in front of us.",
        whenOff:
          "I get too comfortable and stop studying, and that’s when I start getting stagnant.",
      },
      voiceLines: [
        "I love being the student in a new room. Teach me the rules, then watch me get sharp.",
        "Ego makes people slow. I ask the question, learn fast, then turn it into something repeatable.",
      ],
    },
  ],

  scenarios: [
    {
      id: "s1",
      valueId: "self-reflection",
      title: "“I’m triggered right now.”",
      situation:
        "Somebody says something that hits a nerve. You can feel your body heat up and your thoughts start sprinting.",
      choices: [
        { id: "A", text: "Snap back and match their energy." },
        { id: "B", text: "Swallow it, stay quiet, and carry it all day." },
        { id: "C", text: "Pause, scan, then respond on purpose.", isMyMove: true },
      ],
      myStrategies: [
        "I do a quick body scan and name what I’m feeling.",
        "I ask, “What do I actually need right now, and what’s the outcome I want?”",
        "I respond with a boundary or a question, not a reaction.",
      ],
      gospel: "A quick pause saves a long regret.",
    },
    {
      id: "s2",
      valueId: "authenticity",
      title: "“Everybody’s gossiping.”",
      situation:
        "The room is bonding over talking about someone. You can feel the pull to join in and keep it light.",
      choices: [
        { id: "A", text: "Jump in so you don’t look “weird.”" },
        { id: "B", text: "Fake a laugh and stay close to the circle." },
        { id: "C", text: "Exit the energy without making a scene.", isMyMove: true },
      ],
      myStrategies: [
        "I check alignment: “Is this me, or is this me trying to fit?”",
        "I redirect the conversation or I remove myself calmly.",
        "If needed, I say it plain: “I don’t talk about people like that.”",
      ],
      gospel: "I’m not building a life I have to explain later.",
    },
    {
      id: "s3",
      valueId: "courage",
      title: "“Say it out loud.”",
      situation:
        "Everyone sees the real issue, but nobody wants to be the one to name it. Silence is starting to cost more than honesty.",
      choices: [
        { id: "A", text: "Let it slide and hope it fixes itself." },
        { id: "B", text: "Talk about it privately and never address it in the room." },
        { id: "C", text: "Name it and bring it to attention, then move to the next step.", isMyMove: true },
      ],
      myStrategies: [
        "I state the issue without attacking the person.",
        "I say what “better” looks like in one sentence.",
        "I set the next move with ownership and timing.",
      ],
      gospel: "I don’t negotiate with fear.",
    },
    {
      id: "s4",
      valueId: "integrity",
      title: "“Do it off the record.”",
      situation:
        "Somebody offers you an advantage, but it comes with a hidden trade or doesn’t feel right but you’ll have to live with. It’s the kind of thing people justify later.",
      choices: [
        { id: "A", text: "Take it and tell yourself it’s “how the game goes.”" },
        { id: "B", text: "Avoid the decision and stay around the situation anyway." },
        { id: "C", text: "Say no and keep my name intact.", isMyMove: true },
      ],
      myStrategies: [
        "I ask myself, “If this got exposed tomorrow, would I still be proud?”",
        "I decline clearly without debating it.",
        "I choose the longer road and keep moving.",
      ],
      gospel: "My name is not for sale.",
    },
    {
      id: "s5",
      valueId: "accountability",
      title: "“You dropped the ball.”",
      situation:
        "Something didn’t get done the way it needed to. You can feel the urge to explain, defend, or point to what other people didn’t do.",
      choices: [
        { id: "A", text: "Blame the circumstances and move on." },
        { id: "B", text: "Stay quiet and hope nobody notices." },
        { id: "C", text: "Own it, fix it, then adjust so it doesn’t repeat.", isMyMove: true },
      ],
      myStrategies: [
        "I say it straight: “That’s on me.”",
        "I handle the situation with urgency and clarity.",
        "I tighten the pattern that allowed it to happen.",
      ],
      gospel: "I refuse to apologize without adjusting.",
    },
    {
      id: "s6",
      valueId: "compassion",
      title: "“I want to quit today.”",
      situation:
        "Somebody is emotionally tapped and ready to make a big decision off a heavy day. They want comfort, but what they need is a plan.",
      choices: [
        { id: "A", text: "“Quit right now. You’ll figure it out.”" },
        { id: "B", text: "“Just deal with it. That’s life.”" },
        { id: "C", text: "Hold the weight, then help them move it.", isMyMove: true },
      ],
      myStrategies: [
        "I listen until I understand what’s really driving the feeling.",
        "I map what happens if they move today vs. move prepared.",
        "I help them build the next steps: timeline, money, options.",
      ],
      gospel: "Comfort is easy. The next move is love.",
    },
    {
      id: "s7",
      valueId: "freedom",
      title: "“You feel boxed in.”",
      situation:
        "You’re in a situation where you feel limited, unheard, or like your future depends on somebody else’s permission. You can feel the pressure building.",
      choices: [
        { id: "A", text: "Stay quiet and accept it." },
        { id: "B", text: "Blow it up out of anger and walk away with no plan." },
        { id: "C", text: "Pause, assess, then create options.", isMyMove: true },
      ],
      myStrategies: [
        "I do an emotional scan so I’m not moving off anger.",
        "I get honest about what I can control and what I can’t.",
        "I build an exit or adjustment plan that creates choices, even if it takes longer.",
      ],
      gospel: "I don’t ask for freedom. I create the door and design the path.",
    },
    {
      id: "s8",
      valueId: "student-mode",
      title: "“New room, new rules.”",
      situation:
        "You’re in a space where you don’t know the full process yet. You can either fake it, freeze, or learn fast.",
      choices: [
        { id: "A", text: "Act like you already know and hope you don’t get exposed." },
        { id: "B", text: "Stay quiet, wait, and fall behind." },
        { id: "C", text: "Ask, learn, apply, then improve.", isMyMove: true },
      ],
      myStrategies: [
        "I ask the question that reveals the rules of the room.",
        "I learn it the right way first and execute it the right way.",
        "Once I’m solid, I improve it with ideas, processes, or a strategy.",
      ],
      gospel: "Teach me the rules. Then watch my work ethic pay dividends.",
    },
  ],

  season2: {
    focusValueIds: ["freedom", "student-mode"],
    featuredReceiptIds: ["r4", "r8"],
  },

  libraryShelves: [
    {
      id: "name-standard",
      title: "How I Carry My Name",
      description: "The values that hold up when nobody is watching.",
      values: [
        {
          name: "Honesty",
          description: "Say it plain or don't say it.",
          reflection:
            "If a regular person can't understand what I just said, I didn't say it right. I read it out loud before it leaves my mouth. Honesty isn't volume. It's clarity that nobody has to translate.",
        },
        {
          name: "Fairness",
          description: "Same rules whether you're in the room or not.",
          reflection:
            "I don't change the standard based on who's watching or who can pay more. Fairness is the standard I hold for the room when nobody is keeping score. If I let it slide once, I'll let it slide twice.",
        },
        {
          name: "Loyalty",
          description: "Loyalty is not a feeling. It's something I engineer in.",
          reflection:
            "Loyalty is not a feeling I ask for. It's a thing I build into the relationship from the first conversation. I show up the way I said I'd show up, especially when it costs me. That's how loyalty earns itself.",
        },
        {
          name: "Generosity",
          description: "I give without making you ask twice.",
          reflection:
            "I'd rather over-give than make somebody perform for help. If I have it and you need it and the timing is right, it moves. I don't keep score. I keep moving.",
        },
        {
          name: "Responsibility",
          description: "I show up for what I said I'd show up for.",
          reflection:
            "If I said it, I'm doing it. If something gets in the way, I name it early and I bring options, not excuses. Responsibility is just integrity under a deadline.",
        },
        {
          name: "Self-respect",
          description: "I don't need a room to tell me what I'm worth.",
          reflection:
            "Self-respect is the floor. If I lose it for an opportunity, I lost more than I won. I keep my own opinion of me at the top of the stack so nobody else's opinion can pull me out of who I am.",
        },
      ],
    },
    {
      id: "skill-growth",
      title: "How I Keep Growing",
      description: "The values that keep me sharp and movable.",
      values: [
        {
          name: "Personal Growth",
          description: "I'm not the same man I was last quarter. Good.",
          reflection:
            "Growth is the proof that I'm still in the conversation with myself. If I look back six months and don't see a difference, I missed something. I track the version I'm becoming, not just the wins.",
        },
        {
          name: "Self-improvement",
          description: "Small reps over big speeches.",
          reflection:
            "I don't announce what I'm working on. I work on it. Quietly. Then the room notices the difference before I name it. Small reps over big speeches, every time.",
        },
        {
          name: "Adaptability",
          description: "The terrain keeps changing. I keep moving.",
          reflection:
            "Every wave hits the same way: the people who stand still lose the most. I stay light enough to adjust without losing what makes me me. The standard doesn't change. The route to it does.",
        },
        {
          name: "Flexibility",
          description: "Hold the standard. Move with the moment.",
          reflection:
            "I'm not rigid. I'm anchored. Big difference. I'll change my approach in real time if the situation calls for it. What I won't change is what I stand on.",
        },
        {
          name: "Open-mindedness",
          description: "I learn it your way first. Then I see if mine fits.",
          reflection:
            "I don't walk into rooms ready to teach. I walk in ready to learn. When I'm being trained, I follow the process all the way through before I offer a better one. After I've earned the right to speak, then I share.",
        },
        {
          name: "Uniqueness",
          description: "I don't blend. I'm not built for it.",
          reflection:
            "Trying to look like everybody else is the fastest way to disappear. I lean into the parts of me that don't fit clean. Those are usually the parts the work actually needs.",
        },
        {
          name: "Creativity",
          description: "There's always a third option if I sit with it long enough.",
          reflection:
            "When the room says A or B, I check for C. Creativity for me isn't about being clever. It's about refusing to accept a false choice. Sit with the problem longer than the room expects, and the third option shows up.",
        },
      ],
    },
    {
      id: "people-love",
      title: "How I Hold People",
      description: "The values that decide how I show up for everybody around me.",
      values: [
        {
          name: "Family",
          description: "Family is who I protect first.",
          reflection:
            "Family for me isn't only blood. It's the people I'd put my time, my name, and my work on the line for. They get the first version of me, not the public one. Whoever made the list gets protected from there.",
        },
        {
          name: "Community",
          description: "I don't show up because it pays. I show up because they built me.",
          reflection:
            "Detroit raised me. The chapters and committees and rooms I sit in didn't owe me a seat. The work I do for the community is rent on the foundation that got me here. It's not charity. It's accounting.",
        },
        {
          name: "Giving Support",
          description: "I hold the weight, then I help you move it.",
          reflection:
            "When somebody comes to me carrying something heavy, I don't rush to fix it. I sit with it long enough to understand. Then we move it together. I'm not here to comfort you into staying stuck.",
        },
        {
          name: "Self-compassion",
          description: "I extend myself the same grace I give everybody else.",
          reflection:
            "I'm hardest on me. I have to remember that the same patience I give a friend who's struggling is the patience I owe myself when I'm in it. Self-compassion isn't soft. It's how I stay in the game long enough to keep showing up.",
        },
      ],
    },
    {
      id: "freedom-health",
      title: "How I Stay Free",
      description: "The values that keep me in command of my own life.",
      values: [
        {
          name: "Independence",
          description: "I build options. I don't beg for them.",
          reflection:
            "Independence isn't being alone. It's having choices. When I feel boxed in, I don't blow up the room. I build a door. Then I decide whether to walk through it.",
        },
        {
          name: "Frugality",
          description: "I don't spend what doesn't matter.",
          reflection:
            "I'm not cheap. I'm intentional. If a dollar serves the goal, it moves. If it doesn't, it stays. Frugality for me is just respect for the work it took to earn the dollar in the first place.",
        },
        {
          name: "Sustainability",
          description: "Build it so it lasts. Build it so it pays.",
          reflection:
            "I don't build flashes. I build foundations. If a system or a relationship can't run for years, I'd rather not start it. Sustainability is the long game disguised as patience.",
        },
        {
          name: "Wellness",
          description: "Body, mind, spirit. All three need maintenance.",
          reflection:
            "I can't lead anything if I'm running on empty. I treat my body, my mind, and my spirit like equipment I depend on. Maintenance isn't optional. It's how I stay useful to the people who need me.",
        },
      ],
    },
  ],

  cta: {
    label: "Partner with me",
  },
};
