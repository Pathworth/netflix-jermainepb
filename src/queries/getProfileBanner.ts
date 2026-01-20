import { ProfileBanner } from "../types";

export type ProfileType =
  | "ai-strategist"
  | "community-builder"
  | "speaking-workshops"
  | "meet-jermaine";

/**
 * NOTE:
 * Your ProfileBanner type requires:
 * - backgroundImage: { url: string }
 * - headline: string
 * - resumeLink: { url: string }
 * - linkedinLink: string
 * - profileSummary: string
 *
 * We also use (optional):
 * - bookingLink?: string
 * - bookingLabel?: string
 */
const bannerByProfile: Record<ProfileType, ProfileBanner> = {
  "ai-strategist": {
    backgroundImage: { url: "" }, // leave blank for now (we're using GIF background in ProfilePage)
    headline: "Jermaine Peguese",
    profileSummary:
      "Practical AI for people who need the work done.\n\nI help leaders clear the clutter and finish what matters. We start with what’s stuck, build simple systems, and reduce the back-and-forth. One workflow at a time, with progress you can actually see.",
    resumeLink: { url: "https://jermainepeguese.com/resume" }, // placeholder
    linkedinLink: "https://linkedin.com", // placeholder
    bookingLink: "/contact?intent=working-session",
    bookingLabel: "Request a Working Session",
  },

  "community-builder": {
    backgroundImage: { url: "" },
    headline: "Community Builder",
    profileSummary:
      "I build programs, partnerships, and youth pathways that create real outcomes. Detroit-first, people-first.",
    resumeLink: { url: "https://jermainepeguese.com/resume" },
    linkedinLink: "https://linkedin.com",
    bookingLink: "/contact?intent=community",
    bookingLabel: "Connect",
  },

  "speaking-workshops": {
    backgroundImage: { url: "" },
    headline: "Speaking & Workshops",
    profileSummary:
      "Hands-on sessions that teach practical AI and better systems. People leave with tools they can use immediately.",
    resumeLink: { url: "https://jermainepeguese.com/resume" },
    linkedinLink: "https://linkedin.com",
    bookingLink: "/contact?intent=speaking",
    bookingLabel: "Book a Talk",
  },

  "meet-jermaine": {
    backgroundImage: { url: "" },
    headline: "Meet Jermaine",
    profileSummary:
      "Detroit-born, truth-first, built for follow-through. This is the story, the values, and the work.",
    resumeLink: { url: "https://jermainepeguese.com/resume" },
    linkedinLink: "https://linkedin.com",
    bookingLink: "/contact?intent=general",
    bookingLabel: "Contact",
  },
};

export async function getProfileBanner(profile: ProfileType): Promise<ProfileBanner> {
  return bannerByProfile[profile] ?? bannerByProfile["ai-strategist"];
}

