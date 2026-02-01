import React, { useMemo, useState } from "react";
import "./Skills.css";
import { skillsPillars } from "../data/skillsPillars";

// Icons (same set you already use)
import { FiShield, FiZap, FiUsers, FiCheckSquare, FiCompass, FiFileText } from "react-icons/fi";
import { BsGear, BsHeart, BsPerson } from "react-icons/bs";
import { AiOutlineCloud, AiOutlineTool } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaBullhorn, FaHardHat, FaStore } from "react-icons/fa";
import { MdOutlineArchitecture, MdOutlineMenuBook, MdOutlinePlayCircle, MdOutlineAutoGraph } from "react-icons/md";

const iconMap: Record<string, JSX.Element> = {
  megaphone_shield: <span className="icon-pair"><HiOutlineSpeakerphone /><FiShield /></span>,
  blueprint_gear: <span className="icon-pair"><MdOutlineArchitecture /><BsGear /></span>,
  head_spark: <span className="icon-pair"><BsPerson /><MdOutlineAutoGraph /></span>,
  brain_cloud: <span className="icon-pair"><AiOutlineTool /><AiOutlineCloud /></span>,
  shield_lightning: <span className="icon-pair"><FiShield /><FiZap /></span>,
  book_blocks: <span className="icon-pair"><MdOutlineMenuBook /><FiCheckSquare /></span>,
  community_scale: <span className="icon-pair"><FiUsers /><AiOutlineTool /></span>,
  checklist_rocket: <span className="icon-pair"><FiCheckSquare /><MdOutlineAutoGraph /></span>,
  silhouette_halo: <span className="icon-pair"><BsPerson /><FiShield /></span>,
  compass_document: <span className="icon-pair"><FiCompass /><FiFileText /></span>,
  bullhorn_signal: <span className="icon-pair"><FaBullhorn /><MdOutlineAutoGraph /></span>,
  hardhat_clipboard: <span className="icon-pair"><FaHardHat /><FiFileText /></span>,
  storefront_uparrow: <span className="icon-pair"><FaStore /><MdOutlineAutoGraph /></span>,
  heart_blueprint: <span className="icon-pair"><BsHeart /><MdOutlineArchitecture /></span>,
  pentool_play: <span className="icon-pair"><AiOutlineTool /><MdOutlinePlayCircle /></span>,
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

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  const renderExpanded = (id: string) => {
    const p = pillarById.get(id);
    if (!p) return null;

    return (
      <div className="pillar-expanded pillar-expanded--full">
        <div className="expanded-top">
          <div className="expanded-left">{iconMap[p.iconKey]}</div>

          <div className="expanded-center">
            <div className="expanded-title">{p.title}</div>
            {p.microHeadline ? <div className="expanded-micro">{p.microHeadline}</div> : null}
          </div>

          <button className="expanded-close" type="button" onClick={() => setOpenId(null)}>
            Close
          </button>
        </div>

        <div className="expanded-body">
          {p.items.map((line, idx) => (
            <div className="expanded-row" key={`${p.id}-${idx}`}>
              <div className="expanded-skill">{line.skill}</div>
              <div className="expanded-exp">{line.experience}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="skills-page">
      <div className="skills-header">
        <h1 className="skills-title">Skills</h1>
        <p className="skills-helper">Click a pillar to expand.</p>
      </div>

      {groups.map((g) => {
        const groupPillars = g.ids.map((id) => pillarById.get(id)).filter(Boolean) as typeof skillsPillars;
        const openInGroup = openId && g.ids.includes(openId);

        return (
          <section className="skills-section" key={g.title}>
            <h2 className="skills-section-title">{g.title}</h2>

            <div className="pillars-grid">
              {groupPillars.map((p) => {
                const isOpen = openId === p.id;

                return (
                  <button
                    key={p.id}
                    className={`pillar-card ${isOpen ? "pillar-card--active" : ""}`}
                    type="button"
                    onClick={() => toggle(p.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="pillar-card-inner">
                      <div className="pillar-card-icon">{iconMap[p.iconKey]}</div>
                      <div className="pillar-card-title">{p.title}</div>
                    </div>
                  </button>
                );
              })}

              {/* Expanded panel spans full width of the grid */}
              {openInGroup ? renderExpanded(openId as string) : null}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Skills;
