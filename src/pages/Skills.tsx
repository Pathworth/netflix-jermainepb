// src/pages/Skills.tsx
import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../components/NavBar";
import "../pages/Skills.css";

import { skillsPillars } from "../data/skillsPillars";

// Icons (react-icons/lu). IMPORTANT: No LuDraftingCompass here.
import {
  LuMegaphone,
  LuShield,
  LuCog,
  LuSparkles,
  LuUser,
  LuBrain,
  LuCloud,
  LuZap,
  LuBookOpen,
  LuBlocks,
  LuUsers,
  LuScale,
  LuClipboardCheck,
  LuRocket,
  LuBadgeCheck,
  LuCompass,
  LuFileText,
  LuSignal,
  LuHardHat,
  LuClipboardList,
  LuStore,
  LuTrendingUp,
  LuHeartHandshake,
  LuPenTool,
  LuPlay,
} from "react-icons/lu";

type PillarMeta = {
  score: number;
  tags: string[];
};

const pillarMeta: Record<string, PillarMeta> = {
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

// Map your iconKey -> actual icons.
// Each key returns an array so you can show 2 icons like the earlier version.
const iconSets: Record<string, React.ReactNode[]> = {
  megaphone_shield: [<LuMegaphone key="a" />, <LuShield key="b" />],
  blueprint_gear: [<LuCompass key="a" />, <LuCog key="b" />], // fixed (no LuDraftingCompass)
  head_spark: [<LuUser key="a" />, <LuSparkles key="b" />],
  brain_cloud: [<LuBrain key="a" />, <LuCloud key="b" />],
  shield_lightning: [<LuShield key="a" />, <LuZap key="b" />],
  book_blocks: [<LuBookOpen key="a" />, <LuBlocks key="b" />],
  community_scale: [<LuUsers key="a" />, <LuScale key="b" />],
  checklist_rocket: [<LuClipboardCheck key="a" />, <LuRocket key="b" />],
  silhouette_halo: [<LuUser key="a" />, <LuBadgeCheck key="b" />],
  compass_document: [<LuCompass key="a" />, <LuFileText key="b" />],
  bullhorn_signal: [<LuMegaphone key="a" />, <LuSignal key="b" />],
  hardhat_clipboard: [<LuHardHat key="a" />, <LuClipboardList key="b" />],
  storefront_uparrow: [<LuStore key="a" />, <LuTrendingUp key="b" />],
  heart_blueprint: [<LuHeartHandshake key="a" />, <LuCompass key="b" />], // fixed (no LuDraftingCompass)
  pentool_play: [<LuPenTool key="a" />, <LuPlay key="b" />],
};

function clampScore(score: number) {
  const n = Number(score);
  if (Number.isNaN(n)) return 90;
  return Math.max(80, Math.min(99, n));
}

type SectionDef = {
  title: string;
  ids: string[];
};

export default function Skills() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const sections: SectionDef[] = useMemo(
    () => [
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
    ],
    []
  );

  const pillarById = useMemo(() => {
    const map = new Map<string, (typeof skillsPillars)[number]>();
    skillsPillars.forEach((p) => map.set(p.id, p));
    return map;
  }, []);

  const activePillar = activeId ? pillarById.get(activeId) : undefined;

  // Lock scroll + escape close when modal open
  useEffect(() => {
    if (!activeId) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };

    document.body.classList.add("skills-modal-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("skills-modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeId]);

  return (
    <div className="skillsPage">
      <Navbar />

      <header className="skillsHero">
        <h1 className="skillsTitle">Superpowers</h1>
        <p className="skillsSub">Pick a pillar to open the full view.</p>
      </header>

      <div className="skillsWrap">
        {sections.map((section) => {
          const cards = section.ids.map((id) => pillarById.get(id)).filter(Boolean) as (typeof skillsPillars)[number][];

          return (
            <section key={section.title} className="skillsSection">
              <div className="sectionHeading">
                <h2>{section.title}</h2>
              </div>

              <div className="pillarsGrid">
                {cards.map((pillar) => {
                  const meta = pillarMeta[pillar.id] || { score: 90, tags: ["Professional"] };
                  const score = clampScore(meta.score);
                  const icons = iconSets[pillar.iconKey] || [<LuBadgeCheck key="fallback" />];

                  return (
                    <article key={pillar.id} className="pillarCard">
                      <div className="cardTop">
                        <div className="cardIcons" aria-hidden="true">
                          {icons.slice(0, 2).map((node, idx) => (
                            <span key={idx} className="iconBubble">
                              {node}
                            </span>
                          ))}
                        </div>

                        <button
                          type="button"
                          className="miniPlus"
                          onClick={() => setActiveId(pillar.id)}
                          aria-label={`Open ${pillar.title}`}
                          title="Open"
                        >
                          +
                        </button>
                      </div>

                      <h3 className="pillarTitle">{pillar.title}</h3>

                      <div className="tagRow">
                        {meta.tags.slice(0, 3).map((t) => (
                          <span key={t} className="tagChip">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="scoreRow">
                        <span className="scoreText">{score}/100</span>
                      </div>

                      <div className="progressTrack" aria-hidden="true">
                        <div className="progressFill" style={{ width: `${score}%` }} />
                      </div>

                      <div className="cardActions">
                        <button type="button" className="learnMoreBtn" onClick={() => setActiveId(pillar.id)}>
                          Learn more
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* MODAL */}
      {activePillar && (
        <>
          <div className="skillsBackdrop" onClick={() => setActiveId(null)} />

          <div className="skillsModalShell" role="dialog" aria-modal="true" aria-label={`${activePillar.title} details`}>
            <div className="skillsModal auraRotate">
              <div className="modalHeader">
                <div className="modalIcons" aria-hidden="true">
                  {(iconSets[activePillar.iconKey] || [<LuBadgeCheck key="x" />])
                    .slice(0, 2)
                    .map((node, idx) => (
                      <span key={idx} className="iconBubble large">
                        {node}
                      </span>
                    ))}
                </div>

                <div className="modalTitleBlock">
                  <h3 className="modalTitle">{activePillar.title}</h3>
                  <p className="modalSub">{activePillar.microHeadline}</p>
                </div>

                <div className="modalRight">
                  <button type="button" className="closeBtn" onClick={() => setActiveId(null)}>
                    Close
                  </button>
                </div>
              </div>

              <div className="modalMetaRow">
                {(pillarMeta[activePillar.id]?.tags || ["Professional"]).slice(0, 4).map((t) => (
                  <span key={t} className="tagChip modal">
                    {t}
                  </span>
                ))}

                <span className="modalScore">
                  {clampScore(pillarMeta[activePillar.id]?.score ?? 90)}/100
                </span>
              </div>

              <div className="modalDivider" />

              {/* Premium “stat card” grid */}
              <div className="itemsGrid">
                {activePillar.items.map((item) => (
                  <div key={item.skill} className="itemCard">
                    <div className="itemDot" aria-hidden="true" />
                    <div className="itemText">
                      <div className="itemSkill">{item.skill}</div>
                      <div className="itemExp">{item.experience}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
