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
    let isMounted = true;

    async function fetchData() {
      const data = await getProfileBanner(profile);
      if (isMounted) setBannerData(data);
    }

    fetchData();

    return () => {
      isMounted = false;
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

  const handleResumeClick = () => openOrRoute(bannerData.resumeLink?.url || "/browse");

  // Second button priority:
  // 1) bookingLink (your /contact?intent=working-session)
  // 2) /one-pager
  // 3) LinkedIn
  const secondUrl = bannerData.bookingLink ?? "/one-pager" ?? bannerData.linkedinLink;
  const secondLabel = bannerData.bookingLabel || "Download the One-Pager";

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
