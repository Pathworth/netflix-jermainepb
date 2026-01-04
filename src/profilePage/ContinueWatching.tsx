import React from 'react';
import { Link } from 'react-router-dom';
import type { ProfileType } from "./profileTypes";
import './ContinueWatching.css';


interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig: Record<ProfileType, { title: string; imgSrc: string; link: string }[]> = {
  "ai-strategist": [
    { title: "Systems", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/browse" },
    { title: "Automation", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/browse" },
    { title: "AI Playbook", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/browse" },
    { title: "Book Jermaine", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/browse" },
  ],
  "community-builder": [
    { title: "Programs", imgSrc: "https://picsum.photos/id/1035/300/200", link: "/browse" },
    { title: "Partnerships", imgSrc: "https://picsum.photos/id/1036/300/200", link: "/browse" },
    { title: "Events", imgSrc: "https://picsum.photos/id/1037/300/200", link: "/browse" },
    { title: "Connect", imgSrc: "https://picsum.photos/id/1039/300/200", link: "/browse" },
  ],
  "speaking-workshops": [
    { title: "Keynotes", imgSrc: "https://picsum.photos/id/1045/300/200", link: "/browse" },
    { title: "Workshops", imgSrc: "https://picsum.photos/id/1046/300/200", link: "/browse" },
    { title: "Training", imgSrc: "https://picsum.photos/id/1047/300/200", link: "/browse" },
    { title: "Book a Talk", imgSrc: "https://picsum.photos/id/1049/300/200", link: "/browse" },
  ],
  "meet-jermaine": [
    { title: "Story", imgSrc: "https://picsum.photos/id/1055/300/200", link: "/browse" },
    { title: "Values", imgSrc: "https://picsum.photos/id/1056/300/200", link: "/browse" },
    { title: "Work", imgSrc: "https://picsum.photos/id/1057/300/200", link: "/browse" },
    { title: "Contact", imgSrc: "https://picsum.photos/id/1059/300/200", link: "/browse" },
  ],
};


const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
