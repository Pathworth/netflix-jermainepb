import React, { useEffect, useMemo, useState } from "react";
import "./Skills.css";
import Navbar from "../components/NavBar";
import { skillsPillars } from "../data/skillsPillars";
import type { SkillPillar } from "../types/SkillPillar";

import {
  LuMegaphone,
  LuShield,
  LuDraftingCompass,
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
  LuMegaphoneOff,
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
  score: number; // 80–100
  tags: string[];
  group: "Core Leadership" | "Build & Deliver" | "Growth & Creative";
};

const iconSets: Record<string, React.ReactNode[]> = {
  megaphone_shield: [<LuMegaphone key="a" />, <LuShield key="b" />],
  blueprint_gear: [<LuDraftingCompass key="a" />, <LuCog key="b" />],
  head_spark: [<LuUser key="a" />, <LuSparkles key="b" />],
  brain_cloud: [<LuBrain key="a" />, <LuCloud key="b" />],
  shield_lightning: [<LuShield key="a" />, <LuZap key="b" />],
  book_blocks: [<LuBookOpen key="a" />, <LuBlocks key="b" />],
  community_scale: [<LuUsers key="a" />, <LuScale key="b" />],
  checklist_rocket: [<LuClipboardCheck key="a" />, <LuRocket key="b" />],
  silhouette_halo: [<LuUser key="a" />, <LuBadgeCheck key="b" />],
  compass_document: [<LuCompass key="a" />, <LuFileText key="b" />],
  bullhorn_signal: [<LuMegaphoneOff key="a" />, <LuSignal key="b" />],
  hardhat_clipboard: [<LuHardHat key="a" />, <LuClipboardList key="b" />],
  storefront_uparrow: [<LuStore key="a" />, <LuTrendingUp key="b" />],
  heart_blueprint: [<LuHeartHandshake key="a" />, <LuDraftingCompass key="b" />],
  pentool_play: [<LuPenTool key="a" />, <LuPlay key="b" />],
};

const metaById: Record<string, PillarMeta> = {
  "leadership-communication": { score: 95, tags: ["Professional", "Nonprofit", "Youth"], group: "Core Leadership" },
  "human-insight-talent": { score: 94, tags: ["Professional", "Youth"], group: "Core Leadership" },
  "leadership-presence-character": { score: 96, tags: ["Professional", "Stakeholders"], group: "Core Leadership" },
  "crisis-conflict": { score: 92, tags: ["Professional", "Nonprofit"], group: "Core Leadership" },
  "consulting-strategic-advisory": { score: 93, tags: ["Professional", "Stakeholders"], group: "Core Leadership" },

  "strategy-systems": { score: 94, tags: ["Professional", "Small Business"], group: "Build & Deliver" },
  "program-project-execution": { score: 93, tags: ["Professional", "Nonprofit"], group: "Build & Deliver" },
  "training-design-curriculum": { score: 92, tags: ["Professional", "Youth"], group: "Build & Deliver" },
  "construction-project-ops-management": { score: 88, tags: ["Professional"], group: "Build & Deliver" },
  "community-governance-impact": { score: 91, tags: ["Nonprofit", "Community"], group: "Build & Deliver" },

  "ai-digital-enablement": { score: 92, tags: ["Small Business", "Nonprofit"], group: "Growth & Creative" },
  "marketing-brand-digital-strategy": { score: 90, tags: ["Small Business", "Professional"], group: "Growth & Creative" },
  "entrepreneurship-business-foundations": { score: 90, tags: ["Small Business", "Founders"], group: "Growth & Creative" },
  "nonprofit-creation-scaling-governance": { score: 89, tags: ["Nonprofit", "Boards"], group: "Growth & Creative" },
  "creative-design-digital-production": { score: 87, tags: ["Professional", "Small Business"], group: "Growth & Creative" },
};

function clampMeta(pillar: SkillPillar): PillarMeta {
  return (
    metaById[pillar.id] ?? {
      score: 90,
      tags: ["Professional"],
      group: "Core Leadership",
    }
  );
}

function useEscapeToClose(onClose: () => void, isOpen: boolean) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, isOpen]);
}

type PillarCardProps = {
  pillar: SkillPillar;
  meta: PillarMeta;
  onOpen: () => void;
};

function PillarCard({ pillar, meta, onOpen }: PillarCardProps) {
  const icons = iconSets[pillar.iconKey] ?? [<LuSparkles key="a" />];

  return (
    <article className="sp-card">
      <div className="sp-cardAura" aria-hidden="true" />
      <button className="sp-plus" type="button" onClick={onOpen} aria-label={`Open ${pillar.title}`}>
        +
      </button>

      <div className="sp-cardTop">
        <div className="sp-icons" aria-hidden="true">
          {icons.map((ic, idx) => (
            <span className="sp-icon" key={idx}>
              {ic}
            </span>
          ))}
        </div>
      </div>

      <h3 className="sp-cardTitle">{pillar.title}</h3>

      <div className="sp-tags">
        {meta.tags.map((t) => (
          <span className="sp-tag" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="sp-scoreRow">
        <div className="sp-scoreText">{meta.score}/100</div>
        <div className="sp-bar" role="img" aria-label={`Skill level ${meta.score} out of 100`}>
          <div className="sp-barFill" style={{ width: `${meta.score}%` }} />
        </div>
      </div>

      <div className="sp-actions">
        <button className="sp-learn" type="button" onClick={onOpen}>
          Learn more
        </button>
      </div>
    </article>
  );
}

type ModalProps = {
  pillar: SkillPillar;
  meta: PillarMeta;
  onClose: () => void;
};

function PillarModal({ pillar, meta, onClose }: ModalProps) {
  useEscapeToClose(onClose, true);

  const icons = iconSets[pillar.iconKey] ?? [<LuSparkles key="a" />];

  return (
    <div className="sp-modalOverlay" role="dialog" aria-modal="true" aria-label={`${pillar.title} details`}>
      <div className="sp-modalBackdrop" onClick={onClose} />

      <div className="sp-modal">
        <div className="sp-modalAura" aria-hidden="true" />

        <header className="sp-modalHeader">
          <div className="sp-modalIcons" aria-hidden="true">
            {icons.map((ic, idx) => (
              <span className="sp-icon" key={idx}>
                {ic}
              </span>
            ))}
          </div>

          <div className="sp-modalTitleWrap">
            <h3 className="sp-modalTitle">{pillar.title}</h3>
            <p className="sp-modalMicro">{pillar.microHeadline}</p>

            <div className="sp-modalMeta">
              <div className="sp-tags sp-tagsTight">
                {meta.tags.map((t) => (
                  <span className="sp-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="sp-modalScore">{meta.score}/100</div>
            </div>
          </div>

          <button className="sp-close" type="button" onClick={onClose}>
            Close
          </button>
        </header>

        <div className="sp-modalBody">
          <div className="sp-detailGrid">
            {pillar.items.map((row) => (
              <div className="sp-detailCard" key={row.skill}>
                <div className="sp-dot" aria-hidden="true" />
                <div className="sp-detailText">
                  <div className="sp-detailSkill">{row.skill}</div>
                  <div className="sp-detailExp">{row.experience}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [openId, setOpenId] = useState<string | null>(null);

  const all = useMemo(() => {
    return skillsPillars.map((p) => ({ pillar: p, meta: clampMeta(p) }));
  }, []);

  const grouped = useMemo(() => {
    const g = {
      "Core Leadership": [] as { pillar: SkillPillar; meta: PillarMeta }[],
      "Build & Deliver": [] as { pillar: SkillPillar; meta: PillarMeta }[],
      "Growth & Creative": [] as { pillar: SkillPillar; meta: PillarMeta }[],
    };

    for (const x of all) g[x.meta.group].push(x);
    return g;
  }, [all]);

  const openPillar = useMemo(() => {
    if (!openId) return null;
    return all.find((x) => x.pillar.id === openId) ?? null;
  }, [openId, all]);

  return (
    <div className="sp-page">
      <Navbar />

      <section className="sp-wrap">
        <header className="sp-hero">
          <h1 className="sp-title">Superpowers</h1>
          <p className="sp-subtitle">Pick a pillar to open the full view.</p>
        </header>

        <div className="sp-sections">
          <section className="sp-section">
            <div className="sp-sectionHeader">
              <div className="sp-line" />
              <h2 className="sp-sectionTitle">Core Leadership</h2>
              <div className="sp-line" />
            </div>

            <div className="sp-grid">
              {grouped["Core Leadership"].map(({ pillar, meta }) => (
                <PillarCard
                  key={pillar.id}
                  pillar={pillar}
                  meta={meta}
                  onOpen={() => setOpenId(pillar.id)}
                />
              ))}
            </div>
          </section>

          <section className="sp-section">
            <div className="sp-sectionHeader">
              <div className="sp-line" />
              <h2 className="sp-sectionTitle">Build &amp; Deliver</h2>
              <div className="sp-line" />
            </div>

            <div className="sp-grid">
              {grouped["Build & Deliver"].map(({ pillar, meta }) => (
                <PillarCard
                  key={pillar.id}
                  pillar={pillar}
                  meta={meta}
                  onOpen={() => setOpenId(pillar.id)}
                />
              ))}
            </div>
          </section>

          <section className="sp-section">
            <div className="sp-sectionHeader">
              <div className="sp-line" />
              <h2 className="sp-sectionTitle">Growth &amp; Creative</h2>
              <div className="sp-line" />
            </div>

            <div className="sp-grid">
              {grouped["Growth & Creative"].map(({ pillar, meta }) => (
                <PillarCard
                  key={pillar.id}
                  pillar={pillar}
                  meta={meta}
                  onOpen={() => setOpenId(pillar.id)}
                />
              ))}
            </div>
          </section>
        </div>
      </section>

      {openPillar ? (
        <PillarModal
          pillar={openPillar.pillar}
          meta={openPillar.meta}
          onClose={() => setOpenId(null)}
        />
      ) : null}
    </div>
  );
}
