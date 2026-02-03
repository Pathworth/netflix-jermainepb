export type BlueprintKey = "masterBio" | "bioKit" | "media" | "contact";

export type AssetType = "PDF" | "ZIP_PHOTOS" | "ZIP_LOGOS" | "TEXT" | "LINK";

export type BlueprintDef = {
  key: BlueprintKey;
  navLabel: string;
  assetsCount: number | "TBD";
};

export type AssetItem = {
  id: string;
  name: string;
  description: string;
  type: AssetType;
  label: string; // e.g., "2 min read", "Photos", "Brand assets"
  available?: boolean; // false => Coming soon
};

export type MediaItem = {
  id: string;
  title: string;
  source: string;
  date: string;
  label?: string; // e.g., "2 min read"
  available?: boolean;
};

export const BIO_BLUEPRINTS: BlueprintDef[] = [
  { key: "masterBio", navLabel: "Blueprint: Master Bio", assetsCount: 1 },
  { key: "bioKit", navLabel: "Blueprint: Bio Kit", assetsCount: "TBD" },
  { key: "media", navLabel: "Blueprint: Media", assetsCount: "TBD" },
  { key: "contact", navLabel: "Blueprint: Contact", assetsCount: "TBD" },
];

export const BIO_KIT_ASSETS: AssetItem[] = [
  {
    id: "long-bio",
    name: "Long Bio (PDF)",
    description: "Full narrative bio used for press, events, and official packets.",
    type: "PDF",
    label: "3–5 min read",
    available: false,
  },
  {
    id: "short-bio",
    name: "Short Bio (PDF)",
    description: "Clean short version for intros, programs, and quick bios.",
    type: "PDF",
    label: "1 min read",
    available: false,
  },
  {
    id: "one-pager",
    name: "One-Pager (PDF)",
    description: "Single-page overview for partners and decision makers.",
    type: "PDF",
    label: "2 min read",
    available: false,
  },
  {
    id: "headshots",
    name: "Headshots (ZIP)",
    description: "Official headshots for media, flyers, and booking packets.",
    type: "ZIP_PHOTOS",
    label: "Photos",
    available: false,
  },
  {
    id: "logos",
    name: "Logos (ZIP)",
    description: "Brand logos and marks for approved use.",
    type: "ZIP_LOGOS",
    label: "Brand assets",
    available: false,
  },
];

export const BIO_MEDIA_ITEMS: MediaItem[] = [
  {
    id: "press-1",
    title: "Press mention (placeholder)",
    source: "Source name",
    date: "2026",
    label: "2 min read",
    available: false,
  },
  {
    id: "press-2",
    title: "Article / PDF (placeholder)",
    source: "Source name",
    date: "2026",
    label: "2 min read",
    available: false,
  },
  {
    id: "press-3",
    title: "Podcast / clip (placeholder)",
    source: "Source name",
    date: "2026",
    available: false,
  },
];

export const BIO_CONTACT = {
  email: "hello@jermainepeguese.com",
  linkedinLabel: "LinkedIn (coming soon)",
  bookingLabel: "Booking (coming soon)",
};
