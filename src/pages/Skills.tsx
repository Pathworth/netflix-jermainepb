import React, { useEffect, useMemo, useState } from "react";
import "./Skills.css";
import { skillsPillars } from "../data/skillsPillars";

// Icons (same iconKey setup you already use)
import { FiShield, FiZap, FiUsers, FiCheckSquare, FiCompass, FiFileText } from "react-icons/fi";
import { BsGear, BsHeart, BsPerson } from "react-icons/bs";
import { AiOutlineCloud, AiOutlineTool } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaBullhorn, FaHardHat, FaStore } from "react-icons/fa";
import { MdOutlineArchitecture, MdOutlineMenuBook, MdOutlinePlayCircle, MdOutlineAutoGraph } from "react-icons/md";

const iconMap: Record<string, JSX.Element> = {
  megaphone_shield: (
    <span className="icon-pair">
      <HiOutlineSpeakerphone />
      <FiShield />
    </span>
  ),
  blueprint_gear: (
    <span className="icon-pair">
      <MdOutlineArchitecture />
      <BsGear />
    </span>
  ),
  head_spark: (
    <span className="icon-pair">
      <BsPerson />
      <MdOutlineAutoGraph />
    </span>
  ),
  brain_cloud: (
    <span className="icon-pair">
      <AiOutlineTool />
      <AiOutlineCloud />
    </span>
  ),
  shield_lightning: (
    <span className="icon-pair">
      <FiShield />
      <FiZap />
    </span>
  ),
  book_blocks: (
    <span className="icon-pair">
      <MdOutlineMenuBook />
      <FiCheckSquare />
    </span>
  ),
  community_scale: (
    <span className="icon-pair">
      <FiUsers />
      <AiOutlineTool />
    </span>
  ),
  checklist_rocket: (
    <span className="icon-pair">
      <FiCheckSquare />
      <MdOutlineAutoGraph />
    </span>
  ),
  silhouette_halo: (
    <span className="icon-pair">
      <BsPerson />
      <FiShield />
    </span>
  ),
  compass_document: (
    <span className="icon-pair">
      <FiCompass />
      <FiFileText />
    </span>
  ),
  bullhorn_signal: (
    <span className="icon-pair">
      <FaBullhorn />
      <MdOutlineAutoGraph />
    </span>
  ),
  hardhat_clipboard: (
    <span className="icon-pair">
      <FaHardHat />
      <FiFileText />
    </span>
  ),
  storefront_uparrow: (
    <span className="icon-pair">
      <FaStore />
      <MdOutlineAutoGraph />
    </span>
  ),
  heart_blueprint: (
    <span className="icon-pair">
      <BsHeart />
      <MdOutlineArchitecture />
    </span>
  ),
  pentool_play: (
    <span className="icon-pair">
      <AiOutlineTool />
      <MdOutlinePlayCircle />
    </span>
  ),
};

type Group = {
  title: string;
  ids: string[];
};

const groups: Group[] = [
  {
    title: "Core Leadership",
    ids: [
      "leadership-communication",
      "human-insight-talent",
      "leadership-presence-character",
      "crisis-conflict",
      "consulting-strategic-advisory",
    ],
  },
  {
    title: "Build & Deliver",
    ids: [
      "strategy-systems",
      "program-project-execution",
      "training-design-curriculum",
      "construction-project-ops-management",
      "community-governance-impact",
    ],
  },
  {
    title: "Growth & Creative",
    ids: [
      "ai-digital-enablement",
      "marketing-brand-digital-strategy",
      "entrepreneurship-business-foundations",
      "nonprofit-creation-scaling-governance",
      "creative-design-digital-production",
    ],
  },
];

const Skills: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const pillarById = useMemo(() => {
    const map = new Map<string, (typeof skillsPillars)[number]>();
    skillsPillars.forEach((p) => map.set(p.id, p));
    return map;
  }, []);

  const openPillar = openId ? pillarById.get(openId) : null;

  const close = () => setOpenId(null);

  useEffect(() => {
    if (!openId) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);

    // lock scroll behind modal
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [openId]);

  return (
    <div className="skills-page">
      <header className="skills-header">
        <h1 className="skills-title">Skills</h1>
      </header>

      {groups.map((g) => {
        const groupPillars = g.ids
          .map((id) => pillarById.get(id))
          .filter(Boolean) as typeof skillsPillars;

        return (
          <section className="skills-section" key={g.title}>
            <h2 className="skills-section-title">{g.title}</h2>

            <div className="pillars-grid">
              {groupPillars.map((p) => {
                const isActive = openId === p.id;

                return (
                  <button
                    key={p.id}
                    className={`pillar-card ${isActive ? "pillar-card--active" : ""}`}
                    type="button"
                    onClick={() => setOpenId(p.id)}
                    aria-haspopup="dialog"
                    aria-expanded={isActive}
                    aria-controls="skills-dialog"
                  >
                    <div className="pillar-card-inner">
                      <div className="pillar-card-icon">{iconMap[p.iconKey]}</div>
                      <div className="pillar-card-title">{p.title}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Spotlight modal / bottom sheet */}
      {openPillar ? (
        <div
          className="skills-modal-overlay"
          role="presentation"
          onClick={close}
        >
          <div
            id="skills-dialog"
            className="skills-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${openPillar.title} details`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="skills-panel">
              <div className="panel-top">
                <div className="panel-icon">{iconMap[openPillar.iconKey]}</div>

                <div className="panel-head">
                  <div className="panel-title">{openPillar.title}</div>
                  {openPillar.microHeadline ? (
                    <div className="panel-micro">{openPillar.microHeadline}</div>
                  ) : null}
                </div>

                <button className="panel-close" type="button" onClick={close}>
                  Close
                </button>
              </div>

              <div className="panel-rows" role="list">
                {openPillar.items.map((line, idx) => (
                  <div className="panel-row" role="listitem" key={`${openPillar.id}-${idx}`}>
                    <div className="panel-skill">{line.skill}</div>
                    <div className="panel-exp">{line.experience}</div>
                  </div>
                ))}
              </div>

              <div className="panel-bottom">
                <button className="panel-close panel-close--full" type="button" onClick={close}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Skills;
