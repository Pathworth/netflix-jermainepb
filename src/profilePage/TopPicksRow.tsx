import React from "react";
import { useNavigate } from "react-router-dom";
import "./TopPicksRow.css";
import {
  FaCode,
  FaBriefcase,
  FaHandsHelping,
  FaProjectDiagram,
  FaEnvelope,
  FaBook,
  FaFileAlt,
  FaWrench,
} from "react-icons/fa";

type ProfileType =
  | "ai-strategist"
  | "community-builder"
  | "speaking-workshops"
  | "meet-jermaine";

interface TopPicksRowProps {
  profile: ProfileType;
}

type Pick = {
  title: string;
  imgSrc: string;
  route: string;
  icon?: React.ReactNode;
};

const rowTitleByProfile: Record<ProfileType, string> = {
  "ai-strategist": "AI That Clears the Clutter",
  "community-builder": "Community Work That Moves",
  "speaking-workshops": "Speaking & Workshops Highlights",
  "meet-jermaine": "Start Here",
};

const topPicksConfig: Record<ProfileType, Pick[]> = {
  "ai-strategist": [
    {
      title: "Start Here",
      imgSrc: "https://picsum.photos/seed/start-here/250/200",
      icon: <FaBook />,
      route: "/browse",
    },
    {
      title: "Ops Tune-Up",
      imgSrc: "https://picsum.photos/seed/ops-tuneup/250/200",
      icon: <FaWrench />,
      route: "/browse",
    },
    {
      title: "AI Systems",
      imgSrc: "https://picsum.photos/seed/ai-systems/250/200",
      icon: <FaCode />,
      route: "/browse",
    },
    {
      title: "Automation",
      imgSrc: "https://picsum.photos/seed/automation/250/200",
      icon: <FaProjectDiagram />,
      route: "/browse",
    },
    {
      title: "Proof Stories",
      imgSrc: "https://picsum.photos/seed/proof-stories/250/200",
      icon: <FaBriefcase />,
      route: "/browse",
    },
    {
      title: "Working Session",
      imgSrc: "https://picsum.photos/seed/working-session/250/200",
      icon: <FaEnvelope />,
      route: "/contact?intent=working-session",
    },
    {
      title: "One-Pager",
      imgSrc: "https://picsum.photos/seed/one-pager/250/200",
      icon: <FaFileAlt />,
      route: "/one-pager",
    },
  ],

  "community-builder": [
    {
      title: "Programs",
      imgSrc: "https://picsum.photos/seed/programs/250/200",
      icon: <FaProjectDiagram />,
      route: "/browse",
    },
    {
      title: "Partnerships",
      imgSrc: "https://picsum.photos/seed/partnerships/250/200",
      icon: <FaHandsHelping />,
      route: "/browse",
    },
    {
      title: "Events",
      imgSrc: "https://picsum.photos/seed/events/250/200",
      icon: <FaBriefcase />,
      route: "/browse",
    },
    {
      title: "Impact",
      imgSrc: "https://picsum.photos/seed/impact/250/200",
      icon: <FaBriefcase />,
      route: "/browse",
    },
    {
      title: "Connect",
      imgSrc: "https://picsum.photos/seed/connect/250/200",
      icon: <FaEnvelope />,
      route: "/contact?intent=community",
    },
    {
      title: "One-Pager",
      imgSrc: "https://picsum.photos/seed/community-onepager/250/200",
      icon: <FaFileAlt />,
      route: "/one-pager",
    },
  ],

  "speaking-workshops": [
    {
      title: "Keynotes",
      imgSrc: "https://picsum.photos/seed/keynotes/250/200",
      icon: <FaBriefcase />,
      route: "/browse",
    },
    {
      title: "Workshops",
      imgSrc: "https://picsum.photos/seed/workshops/250/200",
      icon: <FaProjectDiagram />,
      route: "/browse",
    },
    {
      title: "Training",
      imgSrc: "https://picsum.photos/seed/training/250/200",
      icon: <FaCode />,
      route: "/browse",
    },
    {
      title: "Topics",
      imgSrc: "https://picsum.photos/seed/topics/250/200",
      icon: <FaBook />,
      route: "/browse",
    },
    {
      title: "Book a Talk",
      imgSrc: "https://picsum.photos/seed/book-a-talk/250/200",
      icon: <FaEnvelope />,
      route: "/contact?intent=speaking",
    },
    {
      title: "One-Pager",
      imgSrc: "https://picsum.photos/seed/speaking-onepager/250/200",
      icon: <FaFileAlt />,
      route: "/one-pager",
    },
  ],

  "meet-jermaine": [
    {
      title: "My Story",
      imgSrc: "https://picsum.photos/seed/story/250/200",
      icon: <FaBook />,
      route: "/browse",
    },
    {
      title: "Work",
      imgSrc: "https://picsum.photos/seed/work/250/200",
      icon: <FaBriefcase />,
      route: "/browse",
    },
    {
      title: "Values",
      imgSrc: "https://picsum.photos/seed/values/250/200",
      icon: <FaHandsHelping />,
      route: "/browse",
    },
    {
      title: "What I Do",
      imgSrc: "https://picsum.photos/seed/what-i-do/250/200",
      icon: <FaProjectDiagram />,
      route: "/browse",
    },
    {
      title: "Contact",
      imgSrc: "https://picsum.photos/seed/contact/250/200",
      icon: <FaEnvelope />,
      route: "/contact?intent=general",
    },
    {
      title: "One-Pager",
      imgSrc: "https://picsum.photos/seed/meet-onepager/250/200",
      icon: <FaFileAlt />,
      route: "/one-pager",
    },
  ],
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile] ?? [];
  const rowTitle = rowTitleByProfile[profile] ?? "Top Picks";

  return (
    <div className="top-picks-row">
      <h2 className="row-title">{rowTitle}</h2>

      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div
            key={`${pick.title}-${index}`}
            className="pick-card"
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") navigate(pick.route);
            }}
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
