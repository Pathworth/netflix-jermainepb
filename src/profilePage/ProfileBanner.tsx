import React, { useEffect, useState } from "react";
import "./ProfileBanner.css";
import PlayButton from "../components/PlayButton";
import MoreInfoButton from "../components/MoreInfoButton";
import { getProfileBanner } from "../queries/getProfileBanner";
import { ProfileBanner as ProfileBannerType } from "../types";

const ProfileBanner: React.FC = () => {
  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);

  useEffect(() => {
    let alive = true;

    async function fetchData() {
      const data = await getProfileBanner();
      if (alive) setBannerData(data);
    }

    fetchData();
    return () => {
      alive = false;
    };
  }, []);

  if (!bannerData) return <div className="profile-banner">Loading...</div>;

  const handlePlayClick = () => {
    if (bannerData.resumeLink?.url) window.open(bannerData.resumeLink.url, "_blank");
  };

  const handleLinkedinClick = () => {
    if (bannerData.linkedinLink) window.open(bannerData.linkedinLink, "_blank");
  };

  return (
    <div
      className="profile-banner"
      style={{
        backgroundImage: bannerData.backgroundImage?.url
          ? `url(${bannerData.backgroundImage.url})`
          : undefined,
      }}
    >
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          {bannerData.headline}
        </h1>

        <p className="banner-description">{bannerData.profileSummary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
