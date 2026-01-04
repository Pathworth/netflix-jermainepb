import React from "react";
import { useNavigate } from "react-router-dom";
import "./TopPicksRow.css";
import {
  FaCode,
  FaBriefcase,
  FaCertificate,
  FaHandsHelping,
  FaProjectDiagram,
  FaEnvelope,
  FaMusic,
  FaBook,
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

const topPicksConfig: Record<ProfileType, Pick[]> = {
  "ai-strategist": [
    { title: "AI Systems", imgSrc: "https://picsum.photos/seed/ai-systems/250/200", icon: <FaCode />, route: "/browse" },
    { title: "Automation", imgSrc: "https://picsum.photos/seed/automation/250/200", icon: <FaProjectDiagram />, route: "/browse" },
    { title: "Playbooks", imgSrc: "https://picsum.photos/seed/playbooks/250/200", icon: <FaBook />, route: "/browse" },
    { title: "Case Studies", imgSrc: "https://picsum.photos/seed/case-studies/250/200", icon: <FaBriefcase />, route: "/browse" },
    { title: "Recommendations", imgSrc: "https://picsum.photos/seed/recommendations/250/200", icon: <FaHandsHelping />, route: "/browse" },
    { title: "Contact", imgSrc: "https://picsum.photos/seed/contact/250/200", icon: <FaEnvelope />, route: "/contact-me" },
  ],

  "community-builder": [
    { title: "Programs", imgSrc: "https://picsum.photos/seed/programs/250/200", icon: <FaProjectDiagram />, route: "/browse" },
    { title: "Partnerships", imgSrc: "https://picsum.photos/seed/partnerships/250/200", icon: <FaHandsHelping />, route: "/browse" },
    { title: "Events", imgSrc: "https://picsum.photos/seed/events/250/200", icon: <FaBriefcase />, route: "/browse" },
    { title: "Impact", imgSrc: "https://picsum.photos/seed/impact/250/200", icon: <FaCertificate />, route: "/browse" },
    { title: "Media", imgSrc: "https://picsum.photos/seed/media/250/200", icon: <FaMusic />, route: "/browse" },
    { title: "Contact", imgSrc: "https://picsum.photos/seed/contact2/250/200", icon: <FaEnvelope />, route: "/contact-me" },
  ],

  "speaking-workshops": [
    { title: "Keynotes", imgSrc: "https://picsum.photos/seed/keynotes/250/200", icon: <FaBriefcase />, route: "/browse" },
    { title: "Workshops", imgSrc: "https://picsum.photos/seed/workshops/250/200", icon: <FaProjectDiagram />, route: "/browse" },
    { title: "Training", imgSrc: "https://picsum.photos/seed/training/250/200", icon: <FaCode />, route: "/browse" },
    { title: "Topics", imgSrc: "https://picsum.photos/seed/topics/250/200", icon: <FaBook />, route: "/browse" },
    { title: "Testimonials", imgSrc: "https://picsum.photos/seed/testimonials/250/200", icon: <FaHandsHelping />, route: "/browse" },
    { title: "Book Me", imgSrc: "https://picsum.photos/seed/bookme/250/200", icon: <FaEnvelope />, route: "/contact-me" },
  ],

  "meet-jermaine": [
    { title: "My Story", imgSrc: "https://picsum.photos/seed/story/250/200", icon: <FaBook />, route: "/browse" },
    { title: "Work", imgSrc: "https://picsum.photos/seed/work/250/200", icon: <FaBriefcase />, route: "/browse" },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/projects/250/200", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/certs/250/200", icon: <FaCertificate />, route: "/certifications" },
    { title: "Recommendations", imgSrc: "https://picsum.photos/seed/recs/250/200", icon: <FaHandsHelping />, route: "/recommendations" },
    { title: "Contact", imgSrc: "https://picsum.photos/seed/contact3/250/200", icon: <FaEnvelope />, route: "/contact-me" },
  ],
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile] ?? [];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks</h2>

      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div
            key={index}
            className="pick-card"
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }}
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
