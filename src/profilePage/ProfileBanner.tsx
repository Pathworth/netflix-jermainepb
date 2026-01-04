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
    async function fetchData() {
      const data = await getProfileBanner(profile);
      setBannerData(data);
    }
    fetchData();
  }, [profile]);

  if (!bannerData) return <div>Loading...</div>;

  const openOrRoute = (url: string) => {
    // Internal route
    if (url.startsWith("/")) {
      navigate(url);
      return;
    }
    // External link
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleResumeClick = () => openOrRoute(bannerData.resumeLink.url);

  // Button 2 priority:
  // 1) bookingLink if present (your /contact?intent=working-session)
  // 2) fallback to /one-pager
  // 3) fallback to LinkedIn
  const secondUrl = bannerData.bookingLink ?? "/one-pager";
  const secondLabel = bannerData.bookingLabel ?? "Download the One-Pager";

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
