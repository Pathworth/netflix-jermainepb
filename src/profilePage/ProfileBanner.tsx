import React, { useEffect, useState } from "react";
import "./ProfileBanner.css";
import PlayButton from "../components/PlayButton";
import MoreInfoButton from "../components/MoreInfoButton";
import { getProfileBanner } from "../queries/getProfileBanner";
import { ProfileBanner as ProfileBannerType } from "../types";
import { useNavigate } from "react-router-dom";

type Props = {
  profile: string;
};

const ProfileBanner: React.FC<Props> = ({ profile }) => {
  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        const data = await getProfileBanner(profile);
        if (!cancelled) setBannerData(data);
      } catch (err) {
        // fail-safe: avoid crashing render
        if (!cancelled) {
          setBannerData({
            headline: "Jermaine Peguese",
            profileSummary:
              "Practical AI for people who need the work done.\n\nThis page is loading a safe fallback banner. We’ll plug in final links soon.",
            resumeLink: { url: "/browse" },
            linkedinLink: "https://linkedin.com",
            bookingLink: "/contact?intent=working-session",
            bookingLabel: "Request a Working Session",
          });
        }
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [profile]);

  if (!bannerData) return <div>Loading...</div>;

  const openOrRoute = (url: string) => {
    if (!url) return;

    // Internal route
    if (url.startsWith("/")) {
      navigate(url);
      return;
    }

    // External link
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleResumeClick = () => {
    const url = bannerData.resumeLink?.url || "/browse";
    openOrRoute(url);
  };

  // Second button: bookingLink first; otherwise go to /one-pager; final fallback LinkedIn
  const secondUrl =
    bannerData.bookingLink ?? "/one-pager" ?? bannerData.linkedinLink;

  const secondLabel =
    bannerData.bookingLabel ??
    (bannerData.bookingLink ? "Request a Working Session" : "Download the One-Pager");

  const handleSecondClick = () => openOrRoute(secondUrl);

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          {bannerData.headline}
        </h1>

        <p className="banner-description">{bannerData.profileSummary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handleResumeClick} label="Resume" />
          <MoreInfoButton onClick={handleSecondClick} label={secondLabel} />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
