import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { FaPlay, FaInfoCircle, FaDownload, FaFilePdf, FaImages, FaEnvelope, FaLinkedin, FaInstagram, FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";
import jpIcon from "../images/01 - Icon JP - Initials - Blue Trans - PNG.png";
import {
  BIO_BLUEPRINTS,
  BIO_COPY,
  CONTACT_VALUES,
  type BlueprintKey,
  type AssetItem,
} from "../data/bio";
import "./Bio.css";

/**
 * Bio — Netflix Limited Series treatment.
 *
 * Hero up top in the lane-page idiom (JP icon stripe, badge chip,
 * metadata, big title, logline, two buttons, scroll chevron). Tab bar
 * below mirrors the existing six BIO_BLUEPRINTS. The Master Bio renders
 * as numbered "episodes" — each paragraph becomes its own card with a
 * chapter title and runtime estimate. Variants (Value Proposition, AI
 * Origin Story) use the same episode treatment with their own chapter
 * titles. Bio Kit / Media / Contact use download/action card layouts.
 *
 * Deep-link URLs (?bp=master-bio etc) keep working.
 */

type ChapterMeta = {
  title: string;
  runtime: string;
};

const CHAPTERS: Partial<Record<string, ChapterMeta[]>> = {
  // Master Bio — 7 paragraphs
  "master-bio": [
    { title: "Episode 1 · The Way He Walks In", runtime: "1 min" },
    { title: "Episode 2 · The Standard", runtime: "1 min" },
    { title: "Episode 3 · Promises Kept", runtime: "45 sec" },
    { title: "Episode 4 · Pathworth", runtime: "1 min" },
    { title: "Episode 5 · Detroit", runtime: "1.5 min" },
    { title: "Episode 6 · The Chapter", runtime: "45 sec" },
    { title: "Episode 7 · The Pattern", runtime: "30 sec" },
  ],
  // Value Proposition — 4 paragraphs
  "value-prop": [
    { title: "Chapter 1 · From Intention To Outcome", runtime: "30 sec" },
    { title: "Chapter 2 · Across The Work", runtime: "30 sec" },
    { title: "Chapter 3 · Standards With Care", runtime: "20 sec" },
    { title: "Chapter 4 · Bring Him In For The Outcome", runtime: "20 sec" },
  ],
  // AI Origin Story — 4 paragraphs
  "ai-origin": [
    { title: "Chapter 1 · First Contact", runtime: "30 sec" },
    { title: "Chapter 2 · The Wall", runtime: "30 sec" },
    { title: "Chapter 3 · Master The Skill", runtime: "30 sec" },
    { title: "Chapter 4 · Expertise And Passion", runtime: "30 sec" },
  ],
};

// Map of which COPY key each blueprint shows in Episodes view.
const COPY_KEY_FOR_BP: Partial<Record<BlueprintKey, string>> = {
  "master-bio": "master-bio",
  "value-proposition": "value-prop",
  "ai-origin-story": "ai-origin",
};

function getBpFromUrl(defaultBp: BlueprintKey): BlueprintKey {
  try {
    const url = new URL(window.location.href);
    const bp = url.searchParams.get("bp") as BlueprintKey | null;
    const valid = BIO_BLUEPRINTS.some((b) => b.key === bp);
    return valid && bp ? bp : defaultBp;
  } catch {
    return defaultBp;
  }
}

function setBpInUrl(bp: BlueprintKey) {
  try {
    const url = new URL(window.location.href);
    url.searchParams.set("bp", bp);
    window.history.replaceState({}, "", url.toString());
  } catch {
    // ignore
  }
}

export default function Bio() {
  const defaultBp: BlueprintKey = "master-bio";
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const [activeBp, setActiveBp] = useState<BlueprintKey>(() =>
    getBpFromUrl(defaultBp)
  );
  const [openChapterIdx, setOpenChapterIdx] = useState<number>(0);
  const detailsRef = useRef<HTMLDivElement>(null);

  // Hydrate URL state on browser back/forward
  useEffect(() => {
    function onPop() {
      setActiveBp(getBpFromUrl(defaultBp));
    }
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Reflect active blueprint in URL
  useEffect(() => {
    setBpInUrl(activeBp);
    setOpenChapterIdx(0);
  }, [activeBp]);

  const blueprint = useMemo(
    () => BIO_BLUEPRINTS.find((b) => b.key === activeBp) ?? BIO_BLUEPRINTS[0],
    [activeBp]
  );

  const copyKey = COPY_KEY_FOR_BP[activeBp];
  const copy = copyKey ? BIO_COPY[copyKey] : undefined;
  const chapters = copyKey ? CHAPTERS[copyKey] : undefined;

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  return (
    <main className="bio-page">
      {/* ============================================================
          HERO — Netflix Limited Series title card
          ============================================================ */}
      <section className="bio-hero" aria-label="Bio hero">
        <div className="bio-hero__bg">
          <div className="bio-hero__bg-sweep" />
          <div className="bio-hero__bg-portrait" />
          <div className="bio-hero__gradient bio-hero__gradient--top" />
          <div className="bio-hero__gradient bio-hero__gradient--left" />
          <div className="bio-hero__gradient bio-hero__gradient--bottom" />
        </div>

        <div className="bio-hero__content">
          <motion.div className="bio-hero__badge" {...fadeUp(0)}>
            <img
              src={jpIcon}
              alt=""
              className="bio-hero__badge-icon"
              aria-hidden
            />
            <span className="bio-hero__badge-text">
              JP ORIGINAL · LIMITED SERIES
            </span>
          </motion.div>

          <motion.ul className="bio-hero__metadata" {...fadeUp(0.15)}>
            <li className="bio-hero__metadata-chip">2026</li>
            <li className="bio-hero__metadata-chip">7 Episodes</li>
            <li className="bio-hero__metadata-chip">Documentary</li>
            <li className="bio-hero__metadata-chip">Detroit</li>
          </motion.ul>

          <motion.h1 className="bio-hero__title" {...fadeUp(0.3)}>
            JERMAINE PEGUESE
          </motion.h1>

          <motion.p className="bio-hero__eyebrow" {...fadeUp(0.5)}>
            FOUNDER · CHAIRMAN OF AI · DETROIT
          </motion.p>

          <motion.p className="bio-hero__tagline" {...fadeUp(0.65)}>
            Enters rooms with intentional purpose. Listens long enough to
            understand the mission, the people, and what nobody is saying
            out loud. Then moves with intention.
          </motion.p>

          <motion.div className="bio-hero__buttons" {...fadeUp(0.85)}>
            <button
              type="button"
              className="bio-hero__btn bio-hero__btn--primary"
              onClick={() =>
                navigate("/meet-jermaine/coming-soon?title=The%20Bio%20Reel")
              }
            >
              <FaPlay aria-hidden /> Play Bio Reel
            </button>
            <button
              type="button"
              className="bio-hero__btn bio-hero__btn--secondary"
              onClick={scrollToDetails}
            >
              <FaInfoCircle aria-hidden /> More Info
            </button>
          </motion.div>
        </div>

        <motion.div
          className="bio-hero__chevron"
          aria-hidden
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <FaChevronDown />
        </motion.div>
      </section>

      {/* ============================================================
          TAB BAR — series detail navigation
          ============================================================ */}
      <nav className="bio-tabs" aria-label="Bio sections" ref={detailsRef}>
        <div className="bio-tabs__inner">
          {BIO_BLUEPRINTS.map((b) => {
            const isActive = b.key === activeBp;
            const shortLabel = SHORT_LABEL[b.key] ?? b.label;
            return (
              <button
                key={b.key}
                type="button"
                className={`bio-tab ${isActive ? "bio-tab--active" : ""}`}
                onClick={() => setActiveBp(b.key)}
                aria-current={isActive ? "page" : undefined}
              >
                {shortLabel}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ============================================================
          TAB CONTENT — varies per blueprint
          ============================================================ */}
      <section className="bio-content" aria-label="Section content">
        {/* Episodes / Chapters view for text blueprints */}
        {copy && chapters ? (
          <EpisodeList
            heading={blueprint.label}
            sublabel={blueprint.sublabel}
            body={copy.body}
            chapters={chapters}
            openIdx={openChapterIdx}
            onToggle={(i) => setOpenChapterIdx(i === openChapterIdx ? -1 : i)}
          />
        ) : null}

        {/* Bio Kit — downloads */}
        {activeBp === "bio-kit" ? (
          <DownloadGrid
            heading="Bio Kit"
            sublabel={blueprint.sublabel ?? "Downloads & brand assets"}
            assets={blueprint.assets}
          />
        ) : null}

        {/* Media — feature cards */}
        {activeBp === "media" ? (
          <MediaList
            heading="Media"
            sublabel={blueprint.sublabel ?? "Press, clips, features"}
            assets={blueprint.assets}
          />
        ) : null}

        {/* Contact */}
        {activeBp === "contact" ? <ContactPanel /> : null}
      </section>
    </main>
  );
}

// ============================================================
// Short tab labels — keep the bar tight
// ============================================================
const SHORT_LABEL: Partial<Record<BlueprintKey, string>> = {
  "master-bio": "Episodes",
  "value-proposition": "Value Prop",
  "ai-origin-story": "AI Origin",
  "bio-kit": "Bio Kit",
  media: "Media",
  contact: "Contact",
};

// ============================================================
// Sub-components
// ============================================================

type EpisodeListProps = {
  heading: string;
  sublabel?: string;
  body: string[];
  chapters: ChapterMeta[];
  openIdx: number;
  onToggle: (idx: number) => void;
};

const EpisodeList: React.FC<EpisodeListProps> = ({
  heading,
  sublabel,
  body,
  chapters,
  openIdx,
  onToggle,
}) => {
  return (
    <div className="bio-episodes">
      <header className="bio-section-head">
        <h2 className="bio-section-title">{heading}</h2>
        {sublabel ? <p className="bio-section-sub">{sublabel}</p> : null}
      </header>

      <ol className="bio-episodes__list">
        {body.map((paragraph, idx) => {
          const meta = chapters[idx];
          const isOpen = idx === openIdx;
          const episodeNumber = String(idx + 1).padStart(2, "0");
          return (
            <li
              key={idx}
              className={`bio-episode ${isOpen ? "bio-episode--open" : ""}`}
            >
              <button
                type="button"
                className="bio-episode__head"
                onClick={() => onToggle(idx)}
                aria-expanded={isOpen}
              >
                <span className="bio-episode__num" aria-hidden>
                  {episodeNumber}
                </span>
                <span className="bio-episode__thumb" aria-hidden>
                  <img
                    src={jpIcon}
                    alt=""
                    className="bio-episode__thumb-mark"
                  />
                </span>
                <span className="bio-episode__meta">
                  <span className="bio-episode__title">
                    {meta?.title ?? `Episode ${idx + 1}`}
                  </span>
                  <span className="bio-episode__teaser">
                    {paragraph.length > 110
                      ? paragraph.slice(0, 110) + "…"
                      : paragraph}
                  </span>
                </span>
                <span className="bio-episode__runtime">
                  {meta?.runtime ?? ""}
                </span>
              </button>
              {isOpen ? (
                <div className="bio-episode__body">
                  <p className="bio-episode__paragraph">{paragraph}</p>
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

type DownloadGridProps = {
  heading: string;
  sublabel?: string;
  assets: AssetItem[];
};

const DownloadGrid: React.FC<DownloadGridProps> = ({
  heading,
  sublabel,
  assets,
}) => {
  const iconFor = (type: string) => {
    if (type === "PDF") return <FaFilePdf aria-hidden />;
    if (type === "ZIP") return <FaImages aria-hidden />;
    return <FaDownload aria-hidden />;
  };

  return (
    <div className="bio-downloads">
      <header className="bio-section-head">
        <h2 className="bio-section-title">{heading}</h2>
        {sublabel ? <p className="bio-section-sub">{sublabel}</p> : null}
      </header>

      <div className="bio-downloads__grid">
        {assets.map((a) => (
          <div
            key={a.id}
            className={`bio-download ${
              a.available ? "" : "bio-download--soon"
            }`}
          >
            <div className="bio-download__icon">{iconFor(a.type)}</div>
            <div className="bio-download__meta">
              <h3 className="bio-download__title">{a.title}</h3>
              <p className="bio-download__desc">{a.description}</p>
              <span
                className={`bio-download__tag ${
                  a.available
                    ? "bio-download__tag--live"
                    : "bio-download__tag--soon"
                }`}
              >
                {a.available ? a.metaLeft || "Live" : "Coming soon"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

type MediaListProps = {
  heading: string;
  sublabel?: string;
  assets: AssetItem[];
};

const MediaList: React.FC<MediaListProps> = ({ heading, sublabel, assets }) => {
  return (
    <div className="bio-media">
      <header className="bio-section-head">
        <h2 className="bio-section-title">{heading}</h2>
        {sublabel ? <p className="bio-section-sub">{sublabel}</p> : null}
      </header>

      <div className="bio-media__grid">
        {assets.map((a) => (
          <div key={a.id} className="bio-media-card">
            <div className="bio-media-card__cover">
              <FaExternalLinkAlt aria-hidden className="bio-media-card__icon" />
              <span className="bio-media-card__tag">
                {a.available ? "Live" : "Coming soon"}
              </span>
            </div>
            <div className="bio-media-card__meta">
              <h3 className="bio-media-card__title">{a.title}</h3>
              <p className="bio-media-card__desc">{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactPanel: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_VALUES.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <div className="bio-contact">
      <header className="bio-section-head">
        <h2 className="bio-section-title">Contact</h2>
        <p className="bio-section-sub">Reach out direct.</p>
      </header>

      <div className="bio-contact__grid">
        <button
          type="button"
          className="bio-contact-card"
          onClick={copyEmail}
        >
          <FaEnvelope aria-hidden className="bio-contact-card__icon" />
          <div className="bio-contact-card__meta">
            <h3 className="bio-contact-card__title">Email</h3>
            <p className="bio-contact-card__value">{CONTACT_VALUES.email}</p>
            <span className="bio-contact-card__tag">
              {copied ? "Copied" : "Tap to copy"}
            </span>
          </div>
        </button>

        <div className="bio-contact-card bio-contact-card--soon">
          <FaLinkedin aria-hidden className="bio-contact-card__icon" />
          <div className="bio-contact-card__meta">
            <h3 className="bio-contact-card__title">LinkedIn</h3>
            <p className="bio-contact-card__value">Profile link added soon.</p>
            <span className="bio-contact-card__tag bio-contact-card__tag--soon">
              Coming soon
            </span>
          </div>
        </div>

        <div className="bio-contact-card bio-contact-card--soon">
          <FaInstagram aria-hidden className="bio-contact-card__icon" />
          <div className="bio-contact-card__meta">
            <h3 className="bio-contact-card__title">Instagram</h3>
            <p className="bio-contact-card__value">Profile link added soon.</p>
            <span className="bio-contact-card__tag bio-contact-card__tag--soon">
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
