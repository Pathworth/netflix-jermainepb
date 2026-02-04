export type BlueprintKey =
  | "master-bio"
  | "value-proposition"
  | "ai-origin-story"
  | "bio-kit"
  | "media"
  | "contact";

export type AssetType = "TEXT" | "PDF" | "ZIP" | "LINK";

export type AssetItem = {
  id: string;
  title: string;
  description: string;
  metaLeft?: string;   // e.g., "3–5 min read"
  metaRight?: string;  // e.g., "Updated 2026"
  type: AssetType;
  available?: boolean; // if false => disabled
};

export type BlueprintDef = {
  key: BlueprintKey;
  label: string;       // left rail label
  sublabel?: string;   // small hint
  assets: AssetItem[]; // “episodes” for this blueprint
};

export const BIO_BLUEPRINTS: BlueprintDef[] = [
  {
    key: "master-bio",
    label: "Blueprint: Master Bio",
    sublabel: "Official bio",
    assets: [
      {
        id: "master-bio",
        title: "Master Bio",
        description:
          "The official narrative bio used for press, events, and partner packets.",
        metaLeft: "3–5 min read",
        metaRight: "Updated 2026",
        type: "TEXT",
        available: true,
      },
      {
        id: "short-bio",
        title: "Short Bio",
        description: "A clean, short version for programs, intros, and quick bios.",
        metaLeft: "45–60 sec",
        metaRight: "Coming soon",
        type: "PDF",
        available: false,
      },
      {
        id: "one-line-intro",
        title: "One-Line Intro",
        description: "A single line you can paste into intros and captions.",
        metaLeft: "10 sec",
        metaRight: "Coming soon",
        type: "TEXT",
        available: false,
      },
    ],
  },

  {
    key: "value-proposition",
    label: "Blueprint: Value Proposition",
    sublabel: "Why bring Jermaine in",
    assets: [
      {
        id: "value-prop",
        title: "Value Proposition",
        description:
          "The positioning statement that explains the outcomes Jermaine is brought in to deliver.",
        metaLeft: "45–75 sec",
        metaRight: "Updated 2026",
        type: "TEXT",
        available: true,
      },
      {
        id: "value-prop-short",
        title: "Value Proposition (Short)",
        description: "A tighter version for decks, captions, and intros.",
        metaLeft: "20–30 sec",
        metaRight: "Coming soon",
        type: "TEXT",
        available: false,
      },
    ],
  },

  {
    key: "ai-origin-story",
    label: "Blueprint: AI Origin Story",
    sublabel: "How the AI work started",
    assets: [
      {
        id: "ai-origin",
        title: "AI Origin Story",
        description:
          "How Jermaine started with AI, hit the wall, and mastered personalization without losing voice.",
        metaLeft: "60–90 sec",
        metaRight: "Updated 2026",
        type: "TEXT",
        available: true,
      },
      {
        id: "ai-origin-short",
        title: "AI Origin Story (Short)",
        description: "A short version for stage intros and short-form content.",
        metaLeft: "20–30 sec",
        metaRight: "Coming soon",
        type: "TEXT",
        available: false,
      },
    ],
  },

  {
    key: "bio-kit",
    label: "Blueprint: Bio Kit",
    sublabel: "Downloads & brand assets",
    assets: [
      {
        id: "long-bio-pdf",
        title: "Long Bio (PDF)",
        description: "Press-ready long bio PDF.",
        metaLeft: "PDF",
        metaRight: "Coming soon",
        type: "PDF",
        available: false,
      },
      {
        id: "short-bio-pdf",
        title: "Short Bio (PDF)",
        description: "Short bio PDF for programs and packets.",
        metaLeft: "PDF",
        metaRight: "Coming soon",
        type: "PDF",
        available: false,
      },
      {
        id: "headshots-zip",
        title: "Headshots (ZIP)",
        description: "Official headshots for flyers, press, and booking.",
        metaLeft: "ZIP",
        metaRight: "Coming soon",
        type: "ZIP",
        available: false,
      },
      {
        id: "logos-zip",
        title: "Logos (ZIP)",
        description: "Brand logos and marks for approved use.",
        metaLeft: "ZIP",
        metaRight: "Coming soon",
        type: "ZIP",
        available: false,
      },
    ],
  },

  {
    key: "media",
    label: "Blueprint: Media",
    sublabel: "Press, clips, features",
    assets: [
      {
        id: "media-1",
        title: "Media Feature (Placeholder)",
        description: "Replace this with your first real media link.",
        metaLeft: "2 min read",
        metaRight: "Coming soon",
        type: "LINK",
        available: false,
      },
      {
        id: "media-2",
        title: "Podcast / Clip (Placeholder)",
        description: "Replace this with your first clip or podcast.",
        metaLeft: "3–5 min",
        metaRight: "Coming soon",
        type: "LINK",
        available: false,
      },
    ],
  },

  {
    key: "contact",
    label: "Blueprint: Contact",
    sublabel: "Reach out & connect",
    assets: [
      {
        id: "email",
        title: "Email",
        description: "Copy the email address and reach out directly.",
        metaLeft: "Copy",
        metaRight: "Live",
        type: "TEXT",
        available: true,
      },
      {
        id: "linkedin",
        title: "LinkedIn",
        description: "Open the LinkedIn profile (add link later).",
        metaLeft: "Open",
        metaRight: "Coming soon",
        type: "LINK",
        available: false,
      },
      {
        id: "instagram",
        title: "Instagram",
        description: "Open Instagram (add link later).",
        metaLeft: "Open",
        metaRight: "Coming soon",
        type: "LINK",
        available: false,
      },
    ],
  },
];

// Featured copy blocks for TEXT assets
export const BIO_COPY: Record<string, { heading: string; body: string[] }> = {
  "master-bio": {
    heading: "Master Bio",
    body: [
      "This is the placeholder master bio area. When you paste the final bio, it will live here as the main featured content.",
      "It should read clean, scan clean, and feel premium. We can format it into short sections once the final bio is approved.",
    ],
  },

  "value-prop": {
    heading: "Value Proposition",
    body: [
      "Jermaine Peguese helps people move from intention to outcome. He pays attention before he speaks, earns trust quickly, and brings clarity people can act on.",
      "Across community initiatives, entrepreneurship, training, and technology, he designs experiences that land with audiences, builds structure that holds up, and strengthens the people doing the work.",
      "He’s known for high standards paired with real care, and for saying what needs to be said without making anyone small.",
      "If you want progress you can point to, bring Jermaine in for the outcome, not the conversation.",
    ],
  },

  "ai-origin": {
    heading: "AI Origin Story",
    body: [
      "Jermaine’s relationship with AI started in late 2022 when he saw ChatGPT being talked about online. Curiosity first, he tried it the same day and immediately recognized the advantage.",
      "Then he hit the wall. The output was fast, but it didn’t sound like him, and he wasn’t willing to let a tool rewrite his voice or blend him into everybody else.",
      "So he treated it like a skill to master. He studied how to coach the tool, shape inputs, and refine outputs until it reflected his standards.",
      "Over time, that work became expertise and a clear passion: helping people personalize AI, expand what they believe is possible, and solve real problems without losing who they are.",
    ],
  },
};

export const CONTACT_VALUES = {
  email: "hello@jermainepeguese.com",
};

// Back-compat export: older components may still import BIO_KIT_ASSETS.
// Keeps the build from failing while we migrate everything to BIO_BLUEPRINTS.
export const BIO_KIT_ASSETS = (
  BIO_BLUEPRINTS.find((b) => b.key === "bio-kit")?.assets ?? []
);
