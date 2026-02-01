import React, { useMemo, useState } from "react";
import "./Skills.css";
import { skillsPillars } from "../data/skillsPillars";

// If you already have a SkillPillar type, import it instead of this.
type SkillItem = { skill: string; experience: string };
type SkillPillar = {
  id: string;
  title: string;
  microHeadline: string;
  iconKey: string;
  items: SkillItem[];
  // Optional UI fields (safe even if missing)
  tags?: string[];
  score?: number; // 80–100
};

type Section = {
  id: "core" | "build" | "growth";
  title: string;
  pillarIds: string[];
};

const SECTIONS: Section[] = [
  {
    id: "core",
    title: "Core Leadership",
    pillarIds: [
      "leadership-communication",
      "human-insight-talent",
      "leadership-presence-character",
      "crisis-conflict",
      "consulting-strategic-advisory",
    ],
  },
  {
    id: "build",
    title: "Build & Deliver",
    pillarIds: [
      "strategy-systems",
      "program-project-execution",
      "training-design-curriculum",
      "construction-project-ops-management",
      "community-governance-impact",
    ],
  },
  {
    id: "growth",
    title: "Growth & Creative",
    pillarIds: [
      "ai-digital-enablement",
      "marketing-brand-digital-strategy",
      "entrepreneurship-business-foundations",
      "nonprofit-creation-scaling-governance",
      "creative-design-digital-production",
    ],
  },
];

function PillarIcon({ iconKey }: { iconKey: string }) {
  // Uses your existing icons setup if you already have it.
  // If you already render icons elsewhere, swap this with your iconMap call.
  // Keeping it simple here so the file runs even if iconMap changes.
  return <span className="sp-iconMark" aria-hidden="true" />;
}

export default function Skills() {
  const [openId, setOpenId] = useState<string | null>(null);

  const pillarById = useMemo(() => {
    const map = new Map<string, SkillPillar>();
    (skillsPillars as SkillPillar[]).forEach((p) => map.set(p.id, p));
    return map;
  }, []);

  const openPillar = openId ? (pillarById.get(openId) as SkillPillar | undefined) : undefined;

  const close = () => setOpenId(null);

  return (
    <section className="sp-page">
      <header className="sp-header">
        <h1 className="sp-title">Superpowers</h1>
        <p className="sp-subtitle">Pick a pillar to open the full view.</p>
      </header>

      <div className="sp-sections">
        {SECTIONS.map((section) => {
          const pillars = section.pillarIds
            .map((id) => pillarById.get(id))
            .filter(Boolean) as SkillPillar[];

          return (
            <div key={section.id} className="sp-section">
              <div className="sp-sectionTitleRow">
                <h2 className="sp-sectionTitle">{section.title}</h2>
                <div className="sp-sectionRule" aria-hidden="true" />
              </div>

              {/* The grid centers automatically when there are 2 cards */}
              <div className="sp-grid">
                {pillars.map((p) => {
                  const score = p.score ?? 92;
                  const tags = p.tags ?? ["Professional"];

                  return (
                    <article key={p.id} className="sp-card">
                      {/* Rotating aura */}
                      <div className="sp-aura" aria-hidden="true" />

                      <div className="sp-cardTop">
                        <div className="sp-cardIcons">
                          <PillarIcon iconKey={p.iconKey} />
                        </div>

                        <button
                          type="button"
                          className="sp-plusBtn"
                          onClick={() => setOpenId(p.id)}
                          aria-label={`Open ${p.title}`}
                        >
                          +
                        </button>
                      </div>

                      <h3 className="sp-cardTitle">{p.title}</h3>

                      <div className="sp-tags">
                        {tags.slice(0, 3).map((t) => (
                          <span key={t} className="sp-tag">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="sp-scoreRow">
                        <div className="sp-scoreText">{score}/100</div>
                        <div className="sp-scoreBar" aria-hidden="true">
                          <div className="sp-scoreFill" style={{ width: `${score}%` }} />
                        </div>
                      </div>

                      <div className="sp-cardActions">
                        <button
                          type="button"
                          className="sp-learnBtn"
                          onClick={() => setOpenId(p.id)}
                        >
                          Learn more
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded View Modal */}
      {openPillar && (
        <div className="sp-modalOverlay" role="dialog" aria-modal="true">
          <button className="sp-modalBackdrop" onClick={close} aria-label="Close" />

          <div className="sp-modal">
            {/* Modal aura */}
            <div className="sp-modalAura" aria-hidden="true" />

            <div className="sp-modalHeader">
              <div className="sp-modalIcon">
                <PillarIcon iconKey={openPillar.iconKey} />
              </div>

              <div className="sp-modalTitleWrap">
                <div className="sp-modalTitle">{openPillar.title}</div>
                <div className="sp-modalMicro">{openPillar.microHeadline}</div>

                <div className="sp-modalMeta">
                  {(openPillar.tags ?? ["Professional"]).slice(0, 4).map((t) => (
                    <span key={t} className="sp-tag sp-tag--filled">
                      {t}
                    </span>
                  ))}
                  <span className="sp-modalScore">
                    {(openPillar.score ?? 92)}/100
                  </span>
                </div>
              </div>

              <button type="button" className="sp-closeBtn" onClick={close}>
                Close
              </button>
            </div>

            <div className="sp-modalGrid">
              {openPillar.items.map((it) => (
                <div key={it.skill} className="sp-itemCard">
                  <div className="sp-dot" aria-hidden="true" />
                  <div className="sp-itemText">
                    <div className="sp-itemSkill">{it.skill}</div>
                    <div className="sp-itemExp">{it.experience}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
