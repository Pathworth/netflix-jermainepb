import React, { useEffect, useMemo, useState } from "react";
import "./Skills.css";
import { skillsPillars } from "../data/skillsPillars";

// Title art (SVG primary + PNG fallback)
import titleSvg from "../images/My Superpower Title Page final svg.svg";
import titlePng from "../images/My Superpower Title Page final.png";

// Icons
import {
  FiShield,
  FiZap,
  FiUsers,
  FiCheckSquare,
  FiCompass,
  FiFileText,
} from "react-icons/fi";
import { BsGear, BsHeart, BsPerson } from "react-icons/bs";
import { AiOutlineCloud, AiOutlineTool } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaBullhorn, FaHardHat, FaStore } from "react-icons/fa";
import {
  MdOutlineArchitecture,
  MdOutlineMenuBook,
  MdOutlinePlayCircle,
  MdOutlineAutoGraph,
} from "react-icons/md";

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
    title: "Growth & Creativity",
    ids: [
      "ai-digital-enablement",
      "marketing-brand-digital-strategy",
      "entrepreneurship-business-foundations",
      "nonprofit-creation-scaling-governance",
      "creative-design-digital-production",
    ],
  },
];

// Range stays 87–96, never under 80.
const pillarMeta: Record<string, { score: number; tags: string[] }> = {
  "leadership-communication": { score: 95, tags: ["Professional", "Nonprofit", "Youth"] },
  "human-insight-talent": { score: 94, tags: ["Professional", "Youth"] },
  "leadership-presence-character": { score: 96, tags: ["Professional", "Stakeholders"] },
  "crisis-conflict": { score: 92, tags: ["Professional", "Nonprofit"] },
  "consulting-strategic-advisory": { score: 93, tags: ["Professional", "Stakeholders"] },

  "strategy-systems": { score: 94, tags: ["Professional", "Small Business"] },
  "program-project-execution": { score: 93, tags: ["Professional", "Nonprofit"] },
  "training-design-curriculum": { score: 92, tags: ["Professional", "Youth"] },
  "construction-project-ops-management": { score: 88, tags: ["Professional"] },
  "community-governance-impact": { score: 91, tags: ["Nonprofit", "Community"] },

  "ai-digital-enablement": { score: 92, tags: ["Small Business", "Nonprofit"] },
  "marketing-brand-digital-strategy": { score: 90, tags: ["Small Business", "Professional"] },
  "entrepreneurship-business-foundations": { score: 90, tags: ["Small Business", "Founders"] },
  "nonprofit-creation-scaling-governance": { score: 89, tags: ["Nonprofit", "Boards"] },
  "creative-design-digital-production": { score: 87, tags: ["Professional", "Small Business"] },
};

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

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [openId]);

  const renderPillarCard = (p: (typeof skillsPillars)[number]) => {
    const meta = pillarMeta[p.id] || { score: 90, tags: [] };

    return (
      <button
        key={p.id}
        className="pillar-card"
        type="button"
        onClick={() => setOpenId(p.id)}
        aria-haspopup="dialog"
        aria-expanded={openId === p.id}
        aria-controls="skills-dialog"
      >
        <div className="pillar-top">
          <div className="pillar-icon">{iconMap[p.iconKey]}</div>
          <div className="pillar-plus" aria-hidden="true">
            +
          </div>
        </div>

        <div className="pillar-title">{p.title}</div>

        <div className="pillar-tags">
          {meta.tags.slice(0, 3).map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="pillar-bottom">
          <div className="pillar-score">
            <div className="score-number">{meta.score}/100</div>
            <div className="score-bar">
              <span className="score-fill" style={{ width: `${meta.score}%` }} />
            </div>
          </div>

          <span className="pillar-cta">Learn more</span>
        </div>
      </button>
    );
  };

  return (
    <div className="skills-page">
      <header className="skills-header">
        <picture className="skills-title-art">
          <source srcSet={titleSvg} type="image/svg+xml" />
          <img src={titlePng} alt="My Superpowers" />
        </picture>

        <div className="skills-subtitle">Pick a pillar to open the full view.</div>
      </header>

      {groups.map((g) => {
        const groupPillars = g.ids
          .map((id) => pillarById.get(id))
          .filter((p): p is (typeof skillsPillars)[number] => Boolean(p));

        const firstRow = groupPillars.slice(0, 3);
        const secondRow = groupPillars.slice(3, 5);

        return (
          <section className="skills-section" key={g.title}>
            <h2 className="skills-section-title">{g.title}</h2>

            {/* Row 1: 3 cards */}
            <div className="pillars-row pillars-row--three">
              {firstRow.map((p) => renderPillarCard(p))}
            </div>

            {/* Row 2: 2 cards centered between the 3 above */}
            {secondRow.length ? (
              <div className="pillars-row pillars-row--two">
                {secondRow.map((p) => renderPillarCard(p))}
              </div>
            ) : null}
          </section>
        );
      })}

      {/* Modal */}
      {openPillar ? (
        <div className="skills-modal-overlay" role="presentation" onClick={close}>
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
                  ) : (
                    <div className="panel-micro">What people actually experience</div>
                  )}

                  <div className="panel-meta">
                    {(pillarMeta[openPillar.id]?.tags || []).slice(0, 4).map((t) => (
                      <span key={t} className="tag tag--soft">
                        {t}
                      </span>
                    ))}
                    <span className="panel-score">
                      {(pillarMeta[openPillar.id]?.score || 90)}/100
                    </span>
                  </div>
                </div>

                <button className="panel-close" type="button" onClick={close}>
                  Close
                </button>
              </div>

              <div className="panel-cards">
                {openPillar.items.map((line, idx) => (
                  <div className="skill-card" key={`${openPillar.id}-${idx}`}>
                    <div className="skill-card-top">
                      <span className="skill-dot" aria-hidden="true" />
                      <div className="skill-card-title">{line.skill}</div>
                    </div>
                    <div className="skill-card-exp">{line.experience}</div>
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
