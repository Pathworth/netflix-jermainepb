import React from "react";
import { useLocation } from "react-router-dom";
import "./ProfilePage.css";
import type { ProfileType } from "./profileTypes";

import ProfileBanner from "./ProfileBanner";
import TopPicksRow from "./TopPicksRow";
import ContinueWatching from "./ContinueWatching";

// ✅ Rename ProfileType to match YOUR pillars
export type ProfileType =
  | "ai-strategist"
  | "community-builder"
  | "speaking-workshops"
  | "meet-jermaine";

type Props = {
  profile: ProfileType;
};

const defaultGifs: Record<ProfileType, string> = {
  "ai-strategist": "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  "community-builder": "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  "speaking-workshops": "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  "meet-jermaine": "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
};

const ProfilePage: React.FC<Props> = ({ profile }) => {
  const location = useLocation();

  // Optional: if you ever want to pass a gif through navigation state
  const backgroundGif =
    location.state?.backgroundGif || defaultGifs[profile];

  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner />
      </div>

      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
