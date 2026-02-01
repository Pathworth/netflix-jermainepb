import React, { useMemo, useState } from "react";
import "./Skills.css";
import { skillsPillars } from "../data/skillsPillars";

// Icons (React Icons)
import { FiCompass, FiFileText, FiShield, FiZap, FiUsers, FiCheckSquare } from "react-icons/fi";
import { FaBullhorn, FaHardHat, FaStore } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { AiOutlineCloud, AiOutlineTool } from "react-icons/ai";
import { BsGear, BsKanban, BsPerson, BsHeart } from "react-icons/bs";
import { MdOutlinePlayCircle, MdOutlineArchitecture, MdOutlineAutoGraph, MdOutlineMenuBook } from "react-icons/md";
import { TbBinaryTree2 } from "react-icons/tb";

type IconPairProps = { left: JSX.Element; right?: JSX.Element };

const IconPair = ({ left, right }: IconPairProps) => (
  <div className="pillar-icon">
    <span className="pillar-icon-item">{left}</span>
    {right ? <span className="pillar-icon-item">{right}</span> : null}
  </div>
);

// Map iconKey -> icon(s)
// These are outline-ish icons. We can swap any one later without changing page logic.
const iconMap: Record<string, JSX.Element> = {
  megaphone_shield: <IconPair left={<HiOutlineSpeakerphone />} right={<FiShield />} />,
  blueprint_gear: <IconPair left={<MdOutlineArchitecture />} right={<BsGear />} />,
  head_spark: <IconPair left={<BsPerson />} right={<MdOutlineAutoGraph />} />,
  brain_cloud: <IconPair left={<TbBinaryTree2 />} right={<AiOutlineCloud />} />,
  shield_lightning: <IconPair left={<FiShield />} right={<FiZap />} />,
  book_blocks: <IconPair left={<MdOutlineMenuBook />} right={<BsKanban />} />,
  community_scale: <IconPair left={<FiUsers />} right={<AiOutlineTool />} />,
  checklist_rocket: <IconPair left={<FiCheckSquare />} right={<MdOutlineAutoGraph />} />,
  silhouette_halo: <IconPair left={<BsPerson />} right={<FiShield />} />,
  compass_document: <IconPair left={<FiCompass />} right={<FiFileText />} />,
  bullhorn_signal: <IconPair left={<FaBullhorn />} right={<MdOutlineAutoGraph />} />,
  hardhat_clipboard: <IconPair left={<FaHardHat />} right={<FiFileText />} />,
  storefront_uparrow: <IconPair left={<FaStore />} right={<MdOutlineAutoGraph />} />,
  heart_blueprint: <IconPair left={<BsHeart />} right={<MdOutlineArchitecture />} />,
  pentool_play: <IconPair left={<AiOutlineTool />} right={<MdOutlinePlayCircle />} />,
};

const Skills: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const ordered = useMemo(() => {
    // Keeps the order you put in skillsPillars.ts
    return skillsPillars;
  }, []);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="skills-page">
      <div className="skills-header">
        <h1 className="skills-title">Skills</h1>
        <p className="skills-helper">Click a pillar to expand.</p>
      </div>

      <div className="pillars-grid">
        {ordered.map((p) => {
          const isOpen = openId === p.id;

          return (
            <div key={p.id} className={`pillar-block ${isOpen ? "open" : ""}`}>
              <button
                className="pillar-card"
                onClick={() => toggle(p.id)}
                aria-expanded={isOpen}
                aria-controls={`panel-${p.id}`}
                type="button"
              >
                <div className="pillar-card-inner">
                  <div className="pillar-card-icon">{iconMap[p.iconKey]}</div>
                  <div className="pillar-card-title">{p.title}</div>
                </div>
              </button>

              {isOpen ? (
                <div id={`panel-${p.id}`} className="pillar-expanded" role="region">
                  <div className="expanded-top">
                    <div className="expanded-left">{iconMap[p.iconKey]}</div>

                    <div className="expanded-center">
                      <div className="expanded-title">{p.title}</div>
                      {p.microHeadline ? (
                        <div className="expanded-micro">{p.microHeadline}</div>
                      ) : null}
                    </div>

                    <button className="expanded-close" onClick={() => setOpenId(null)} type="button">
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
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
