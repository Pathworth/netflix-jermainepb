import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  getFeaturedSeason,
  getSeasonById,
  POSTER_PLACEHOLDER_DATA_URI,
  workSeasons,
  WorkSeason,
} from "../data/workExperience";
import "./WorkExperience.css";

function splitParagraphs(text: string) {
  return text
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);
}

function scrollToDock(el: HTMLElement | null) {
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const top = window.scrollY + rect.top - 92;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function cleanPreview(logline: string, preview: string) {
  const l = (logline || "").trim();
  const p = (preview || "").trim();
  if (!l || !p) return p;
  if (p.startsWith(l)) return p.slice(l.length).trimStart();
  return p;
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

function Modal({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
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
    <div className="weModalBackdrop" role="dialog" aria-modal="true" aria-label={title} onMouseDown={onClose}>
      <div className="weModal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="weModalTop">
          <div className="weModalTitle">{title}</div>
          <button type="button" className="weModalClose" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="weModalBody">{children}</div>
      </div>
    </div>
  );
}

function PosterTile({
  season,
  selected,
  onSelect,
  variant,
}: {
  season: WorkSeason;
  selected: boolean;
  onSelect: () => void;
  variant: "shelf" | "grid";
}) {
  const img = season.posterImage || POSTER_PLACEHOLDER_DATA_URI;

  const posterStyle: React.CSSProperties = {
    backgroundImage: `url("${img}")`,
  };

  return (
    <button
      type="button"
      className={["weTile", `weTile--${variant}`, selected ? "isSelected" : ""].join(" ")}
      onClick={onSelect}
      aria-label={`${season.order}. ${season.role}${season.organization ? `, ${season.organization}` : ""}`}
    >
      <div className="weTileVisual">
        <div className="weNumber" aria-hidden="true">
          {season.order}
        </div>

        <div className="wePoster" style={posterStyle}>
          <div className="wePosterSheen" aria-hidden="true" />
          <div className="wePosterVignette" aria-hidden="true" />

          <div className="wePosterOverlay">
            {season.role ? <div className="wePosterTitle">{season.role}</div> : null}
            {season.organization ? <div className="wePosterOrg">{season.organization}</div> : null}
            {season.dateRange ? (
              <div className="wePosterMeta">
                <span className="weDot" aria-hidden="true" />
                <span>{season.dateRange}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </button>
  );
}

export default function WorkExperience() {
  const featured = useMemo(() => getFeaturedSeason(), []);
  const [selectedId, setSelectedId] = useState<string>(featured.id);
  const [expanded, setExpanded] = useState(false);
  const [fullViewOpen, setFullViewOpen] = useState(false);

  const shelfRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const dockAnchorRef = useRef<HTMLDivElement | null>(null);

  const selected = useMemo(() => getSeasonById(selectedId), [selectedId]);

  useEffect(() => {
    setExpanded(false);
  }, [selectedId]);

  const onSelect = (id: string) => {
    setSelectedId(id);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToDock(dockAnchorRef.current));
    });
  };

  const onHeroRead = () => onSelect(featured.id);

  const onHeroBrowse = () => {
    if (!shelfRef.current) return;
    const rect = shelfRef.current.getBoundingClientRect();
    const top = window.scrollY + rect.top - 92;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  const onJumpGrid = () => {
    if (!gridRef.current) return;
    const rect = gridRef.current.getBoundingClientRect();
    const top = window.scrollY + rect.top - 92;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  const fullParagraphs = useMemo(() => splitParagraphs(selected.storyFull || ""), [selected.storyFull]);

  const previewText = useMemo(
    () => cleanPreview(selected.logline || "", selected.storyPreview || ""),
    [selected.logline, selected.storyPreview]
  );

  return (
    <div className="wePage">
      <section className="weHero">
        <div className="weHeroInner">
          <h1 className="weHeadline">WORK EXPERIENCE</h1>

          <div className="weHeroMeta">
            {featured.role ? <div className="weHeroRole">{featured.role}</div> : null}
            {featured.organization ? <div className="weHeroOrg">{featured.organization}</div> : null}
            {featured.dateRange ? <div className="weHeroDates">{featured.dateRange}</div> : null}
          </div>

          {featured.logline ? <p className="weHeroLogline">{featured.logline}</p> : null}

          <div className="weHeroButtons">
            <button type="button" className="weBtn weBtnPrimary" onClick={onHeroRead} aria-label="Read Story">
              Read Story
            </button>
            <button type="button" className="weBtn weBtnSecondary" onClick={onHeroBrowse} aria-label="Browse Seasons">
              Browse Seasons
            </button>
          </div>
        </div>

        <div className="weHeroFade" aria-hidden="true" />
      </section>

      <section className="weSection" ref={shelfRef}>
        <div className="weSectionTop">
          <h2 className="weSectionTitle">Experience Seasons</h2>
          <button type="button" className="weInlineBtn weInlineBtnStrong" onClick={onJumpGrid} aria-label="All Seasons Library">
            All Seasons Library
          </button>
        </div>

        <div className="weShelfWrap">
          <div className="weShelf" role="list" aria-label="Experience Seasons">
            {workSeasons.map((season) => (
              <div className="weShelfItem" role="listitem" key={season.id}>
                <PosterTile
                  season={season}
                  selected={season.id === selectedId}
                  onSelect={() => onSelect(season.id)}
                  variant="shelf"
                />
              </div>
            ))}
          </div>
          <div className="weShelfFade weShelfFade--left" aria-hidden="true" />
          <div className="weShelfFade weShelfFade--right" aria-hidden="true" />
        </div>

        <div ref={dockAnchorRef} className="weDockAnchor" />

        <section className="weDock" aria-label="Detail Dock">
          <div className="weDockWash" aria-hidden="true" />
          <div className="weDockEdgeFade" aria-hidden="true" />

          <div className="weDockHeader">
            <div className="weRoleLabel">ROLE</div>

            <div className="weDockTopLine">
              {selected.role ? <div className="weDockRole">{selected.role}</div> : null}
              {selected.organization ? <div className="weDockOrg">{selected.organization}</div> : null}
            </div>

            {selected.dateRange ? <div className="weDockDates">{selected.dateRange}</div> : null}

            {selected.tags && selected.tags.length ? (
              <div className="weTags">
                {selected.tags.map((t) => (
                  <span key={t} className="weTag">
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div className="weDockBody">
            {selected.logline ? <div className="weDockLogline">{selected.logline}</div> : null}

            <div className="weStory">
              {!expanded ? (
                previewText ? <p className="weStoryText">{previewText}</p> : null
              ) : (
                fullParagraphs.map((p, idx) => (
                  <p className="weStoryText" key={`${selected.id}-p-${idx}`}>
                    {p}
                  </p>
                ))
              )}

              {selected.storyFull ? (
                <div className="weDockControls">
                  <button
                    type="button"
                    className="weInlineBtn weInlineBtnSoft"
                    onClick={() => setExpanded((v) => !v)}
                    aria-label={expanded ? "Collapse" : "Read more"}
                  >
                    {expanded ? "Collapse" : "Read more"}
                  </button>

                  <button
                    type="button"
                    className="weInlineBtn weInlineBtnStrong"
                    onClick={() => setFullViewOpen(true)}
                    aria-label="Open Full View"
                  >
                    Open Full View
                  </button>
                </div>
              ) : null}
            </div>

            {selected.whatItBuilt ? (
              <div className="weBuilt">
                <div className="weBuiltTitle">WHAT IT BUILT IN HIM</div>
                <div className="weBuiltText">{selected.whatItBuilt}</div>
              </div>
            ) : null}
          </div>
        </section>
      </section>

      <section className="weSection" ref={gridRef}>
        <div className="weSectionTop weSectionTop--grid">
          <h2 className="weSectionTitle">All Seasons Library</h2>
        </div>

        <div className="weGrid" role="list" aria-label="All Seasons Library">
          {workSeasons.map((season) => (
            <div className="weGridItem" role="listitem" key={`grid-${season.id}`}>
              <PosterTile
                season={season}
                selected={season.id === selectedId}
                onSelect={() => onSelect(season.id)}
                variant="grid"
              />
            </div>
          ))}
        </div>
      </section>

      <Modal
        open={fullViewOpen}
        title={`${selected.role}${selected.organization ? ` | ${selected.organization}` : ""}`}
        onClose={() => setFullViewOpen(false)}
      >
        <div className="weFullMeta">
          <div className="weRoleLabel">ROLE</div>
          {selected.role ? <div className="weFullRole">{selected.role}</div> : null}
          {selected.organization ? <div className="weFullOrg">{selected.organization}</div> : null}
          {selected.dateRange ? <div className="weFullDates">{selected.dateRange}</div> : null}
        </div>

        {selected.logline ? <div className="weFullLogline">{selected.logline}</div> : null}

        <div className="weFullStory">
          {splitParagraphs(selected.storyFull || "").map((p, idx) => (
            <p className="weFullText" key={`full-${selected.id}-${idx}`}>
              {p}
            </p>
          ))}
        </div>

        {selected.whatItBuilt ? (
          <div className="weFullBuilt">
            <div className="weBuiltTitle">WHAT IT BUILT IN HIM</div>
            <div className="weBuiltText">{selected.whatItBuilt}</div>
          </div>
        ) : null}

        <div className="weModalFooter">
          <button type="button" className="weBtn weBtnPrimary" onClick={() => setFullViewOpen(false)} aria-label="Close">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
