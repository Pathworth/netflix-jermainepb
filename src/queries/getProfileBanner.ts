// queries/getProfileBanner.ts
import datoCMSClient from './datoCMSClient';
import { ProfileBanner } from '../types';
// src/queries/getProfileBanner.ts
import { ProfileBanner } from "../types";

const FALLBACK_BANNER: ProfileBanner = {
  backgroundImage: {
    url: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  },
  headline: "Jermaine Jay Peguese",
  resumeLink: { url: "https://example.com" }, // put your real resume link
  linkedinLink: "https://linkedin.com/in/your-link", // put your real LinkedIn
  profileSummary:
    "AI Strategist focused on practical automation, systems, and real-world execution.",
};

const GET_PROFILE_BANNER = `
 {
{
  profilebanner {
    backgroundImage {
      url
    }
    backgroundImage { url }
    headline
    resumeLink {
      url
    }
    resumeLink { url }
    linkedinLink
    profileSummary
  }
}
`;

export async function getProfileBanner(): Promise<ProfileBanner> {
  const data = await datoCMSClient.request<{ profilebanner: ProfileBanner }>(GET_PROFILE_BANNER);
  console.log("🚀 ~ getProfileBanner ~ data:", data)
  return data.profilebanner;
  try {
    // Dynamic import so Vercel hostname issues cannot crash the whole app at startup.
    const { default: datoCMSClient } = await import("./datoCMSClient");

    const data = await datoCMSClient.request<{ profilebanner: ProfileBanner }>(
      GET_PROFILE_BANNER
    );

    return data?.profilebanner ?? FALLBACK_BANNER;
  } catch (err) {
    // No DatoCMS account or hostname not mapped = use fallback and keep the site alive.
    console.warn("[getProfileBanner] Using fallback banner. DatoCMS not configured.", err);
    return FALLBACK_BANNER;
  }
