// src/profilePage/ProfileBanner.tsx
import React, { useEffect, useState } from "react";
import "./ProfileBanner.css";
import PlayButton from "../components/PlayButton";
import MoreInfoButton from "../components/MoreInfoButton";
import { getProfileBanner, ProfileType } from "../queries/getProfileBanner";
import { ProfileBanner as ProfileBannerType } from "../types";
import { useNavigate } from "react-router-dom";

type Props = {
  profile: ProfileType;
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
      } catch {
        if (!cancelled) {
          setBannerData({
            backgroundImage: { url: "" },
            headline: "Jermaine Peguese",
            profileSummary:
              "Practical AI for people who need the work done.\n\nIf it’s not usable, it doesn’t go out.",
            resumeLink: { url: "/one-pager" },
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
    if (url.startsWith("/")) return navigate(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleResumeClick = () => openOrRoute(bannerData.resumeLink?.url || "/browse");

  // Second button: bookingLink first; otherwise go to /one-pager
  const secondUrl = bannerData.bookingLink ?? "/one-pager";
  const secondLabel = bannerData.bookingLabel ?? "Download the One-Pager";

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          {bannerData.headline}
        </h1>

        <p className="banner-description">{bannerData.profileSummary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handleResumeClick} label="Resume" />
          <MoreInfoButton onClick={() => openOrRoute(secondUrl)} label={secondLabel} />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
