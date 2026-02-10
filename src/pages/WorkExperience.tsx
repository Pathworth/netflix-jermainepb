import React, { useEffect, useMemo, useRef, useState } from "react";
import { getFeaturedSeason, getSeasonById, workSeasons, WorkSeason } from "../data/workExperience";
import "./WorkExperience.css";

type DockMode = "collapsed" | "expanded";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function formatOrder(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

function splitParagraphs(text: string) {
  return text
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);
}

function scrollToEl(el: HTMLElement | null, offset = 88) {
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const top = window.scrollY + rect.top - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

function PosterTile({
  season,
  isActive,
  onClick,
  variant = "shelf",
}: {
  season: WorkSeason;
  isActive: boolean;
  onClick: () => void;
  variant?: "shelf" | "grid";
}) {
  const orderText = formatOrder(season.order);
  const titleLine = season.role;
  const subLine = season.org;

  const bgUrl = season.posterImage?.trim() ? `url("${season.posterImage}")` : "";
  const posterStyle: React.CSSProperties = bgUrl
    ? {
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.20), rgba(0,0,0,.78)), ${bgUrl}`,
      }
    : {
        backgroundImage:
          "linear-gradient(135deg, rgba(0,123,255,.35), rgba(0,0,0,.85) 60%, rgba(0,0,0,.95))",
      };

  return (
    <button
      type="button"
      className={[
        "we-tile",
        `we-tile--${variant}`,
        isActive ? "is-active" : "",
      ].join(" ")}
      onClick={onClick}
      aria-label={`Open season ${season.order}: ${season.role} at ${season.org}`}
    >
      <div className="we-tileNumber" aria-hidden="true">
        {orderText}
      </div>

      <div className="we-poster" style={posterStyle}>
        <div className="we-posterOverlay">
          <div className="we-posterTitle">{titleLine}</div>
          <div className="we-posterSub">{subLine}</div>
          <div className="we-posterMeta">
            <span className="we-metaDot" aria-hidden="true" />
            <span>{season.dateRange}</span>
          </div>
        </div>
      </div>
    </button>
  );
}

function Modal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="we-modalBackdrop" role="dialog" aria-modal="true" aria-label={title} onMouseDown={onClose}>
      <div className="we-modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="we-modalTop">
          <div className="we-modalTitle">{title}</div>
          <button type="button" className="we-modalClose" onClick={onClose} aria-label="Close full view">
            ✕
          </button>
        </div>
        <div className="we-modalBody">{children}</div>
      </div>
    </div>
  );
}

export default function WorkExperience() {
  const featured = useMemo(() => getFeaturedSeason(), []);
  const [selectedId, setSelectedId] = useState<string>(featured.id);
  const [dockMode, setDockMode] = useState<DockMode>("collapsed");
  const [fullViewOpen, setFullViewOpen] = useState(false);

  const shelfRef = useRef<HTMLDivElement | null>(null);
  const dockRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const selected = useMemo(() => getSeasonById(selectedId), [selectedId]);

  useEffect(() => {
    setDockMode("collapsed");
  }, [selectedId]);

  const heroBg = useMemo(() => {
    const raw = selected?.heroMedia || featured.heroMedia || "";
    if (!raw) return "";
    return `url("${raw}")`;
  }, [selected?.heroMedia, featured.heroMedia]);

  const heroStyle: React.CSSProperties = heroBg
    ? {
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.72) 45%, rgba(0,0,0,.35) 70%, rgba(0,0,0,.20) 100%),
                          linear-gradient(180deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,.55) 55%, rgba(0,0,0,.92) 100%),
                          ${heroBg}`,
      }
    : {
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.72) 45%, rgba(0,0,0,.40) 70%, rgba(0,0,0,.20) 100%), linear-gradient(135deg, rgba(0,123,255,.35), rgba(0,0,0,.92) 60%, rgba(0,0,0,.98))",
      };

  const setAndRevealDock = (id: string) => {
    setSelectedId(id);
    // Let React render the dock content, then scroll.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToEl(dockRef.current, 92);
      });
    });
  };

  const onHeroReadStory = () => setAndRevealDock(featured.id);

  const onHeroBrowse = () => scrollToEl(shelfRef.current, 92);

  const onJumpGrid = () => scrollToEl(gridRef.current, 92);

  const dockPreview = useMemo(() => {
    const raw = selected.storyPreview.trim();
    // Keep dock preview tight.
    const max = 260;
    if (raw.length <= max) return raw;
    return raw.slice(0, max).trimEnd() + "…";
  }, [selected.storyPreview]);

  const dockStoryParagraphs = useMemo(() => splitParagraphs(selected.storyFull), [selected.storyFull]);

  const dockStoryToShow = useMemo(() => {
    if (dockMode === "expanded") return dockStoryParagraphs;
    return dockStoryParagraphs.slice(0, clamp(dockStoryParagraphs.length, 1, 2));
  }, [dockMode, dockStoryParagraphs]);

  return (
    <div className="we-page">
      {/* HERO */}
      <section className="we-hero" style={heroStyle}>
        <div className="we-heroInner">
          <div className="we-heroKicker">Featured Season</div>
          <h1 className="we-heroTitle">WORK EXPERIENCE</h1>

          <div className="we-heroMeta">
            <div className="we-heroRole">{featured.role}</div>
            <div className="we-heroOrg">{featured.org}</div>
            <div className="we-heroDates">{featured.dateRange}</div>
          </div>

          <p className="we-heroLogline">{featured.logline}</p>

          <div className="we-heroButtons">
            <button type="button" className="we-btn we-btnPrimary" onClick={onHeroReadStory} aria-label="Read the featured story">
              Read Story
            </button>
            <button type="button" className="we-btn we-btnSecondary" onClick={onHeroBrowse} aria-label="Browse experience seasons">
              Browse Seasons
            </button>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SEASONS SHELF */}
      <section className="we-section" ref={shelfRef}>
        <div className="we-sectionTop">
          <h2 className="we-sectionTitle">Experience Seasons</h2>

          <div className="we-sectionActions">
            <button type="button" className="we-inlineBtn" onClick={onJumpGrid} aria-label="Jump to All Seasons Library">
              All Seasons Library
            </button>
          </div>
        </div>

        <div className="we-shelfWrap">
          <div className="we-shelf" role="list" aria-label="Experience seasons shelf">
            {workSeasons.map((season) => (
              <div className="we-shelfItem" key={season.id} role="listitem">
                <PosterTile
                  season={season}
                  variant="shelf"
                  isActive={season.id === selectedId}
                  onClick={() => setAndRevealDock(season.id)}
                />
              </div>
            ))}
          </div>
          <div className="we-shelfFade we-shelfFade--left" aria-hidden="true" />
          <div className="we-shelfFade we-shelfFade--right" aria-hidden="true" />
        </div>

        {/* DETAIL DOCK */}
        <div className="we-dockAnchor" ref={dockRef} />

        <section className="we-dock" aria-label="Season details dock">
          <div className="we-dockGlow" aria-hidden="true" />

          <div className="we-dockHeader">
            <div className="we-roleLabel">ROLE</div>
            <div className="we-dockTopLine">
              <div className="we-dockRole">{selected.role}</div>
              <div className="we-dockOrg">{selected.org}</div>
            </div>

            <div className="we-dockMetaRow">
              <span className="we-dockMeta">{selected.dateRange}</span>
              {selected.location ? <span className="we-dockMeta">• {selected.location}</span> : null}
            </div>
          </div>

          <div className="we-dockBody">
            <div className="we-dockLogline">{selected.logline}</div>

            <div className="we-dockStory">
              {dockMode === "collapsed" ? (
                <p className="we-dockPreview">{dockPreview}</p>
              ) : null}

              {dockStoryToShow.map((p, idx) => (
                <p className="we-dockParagraph" key={`${selected.id}-p-${idx}`}>
                  {p}
                </p>
              ))}

              <div className="we-dockControls">
                <button
                  type="button"
                  className="we-inlineBtn"
                  onClick={() => setDockMode((m) => (m === "collapsed" ? "expanded" : "collapsed"))}
                  aria-label={dockMode === "collapsed" ? "Read more of the story" : "Collapse story"}
                >
                  {dockMode === "collapsed" ? "Read more" : "Collapse"}
                </button>

                <button
                  type="button"
                  className="we-inlineBtn we-inlineBtnStrong"
                  onClick={() => setFullViewOpen(true)}
                  aria-label="Open full view"
                >
                  Open Full View
                </button>
              </div>
            </div>

            <div className="we-built">
              <div className="we-builtTitle">What it built in him</div>
              <div className="we-builtText">{selected.whatItBuilt}</div>
            </div>
          </div>
        </section>
      </section>

      {/* ALL SEASONS LIBRARY */}
      <section className="we-section" ref={gridRef}>
        <div className="we-sectionTop">
          <h2 className="we-sectionTitle">All Seasons Library</h2>
          <div className="we-sectionHint">Current → oldest. Click any tile to update the dock.</div>
        </div>

        <div className="we-grid" role="list" aria-label="All seasons library grid">
          {workSeasons.map((season) => (
            <div key={season.id} className="we-gridItem" role="listitem">
              <PosterTile
                season={season}
                variant="grid"
                isActive={season.id === selectedId}
                onClick={() => setAndRevealDock(season.id)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* FULL VIEW MODAL */}
      <Modal
        open={fullViewOpen}
        title={`${selected.role} | ${selected.org}`}
        onClose={() => setFullViewOpen(false)}
      >
        <div className="we-fullMeta">
          <div className="we-fullRoleLabel">ROLE</div>
          <div className="we-fullRole">{selected.role}</div>
          <div className="we-fullOrg">{selected.org}</div>
          <div className="we-fullDates">
            {selected.dateRange}
            {selected.location ? ` • ${selected.location}` : ""}
          </div>
        </div>

        <div className="we-fullLogline">{selected.logline}</div>

        <div className="we-fullStory">
          {splitParagraphs(selected.storyFull).map((p, idx) => (
            <p className="we-fullParagraph" key={`full-${selected.id}-${idx}`}>
              {p}
            </p>
          ))}
        </div>

        <div className="we-fullBuilt">
          <div className="we-builtTitle">What it built in him</div>
          <div className="we-builtText">{selected.whatItBuilt}</div>
        </div>

        <div className="we-fullFooter">
          <button type="button" className="we-btn we-btnPrimary" onClick={() => setFullViewOpen(false)} aria-label="Close full view">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
