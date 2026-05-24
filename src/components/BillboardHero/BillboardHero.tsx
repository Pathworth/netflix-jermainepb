import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { FaPlay, FaInfoCircle, FaChevronDown } from "react-icons/fa";
import jpIcon from "../../images/01 - Icon JP - Initials - Blue Trans - PNG.png";
import "./BillboardHero.css";

export type BillboardCta = {
  label: string;
  route: string;
  icon?: "play" | "watch" | "book" | "info" | "read";
};

export type BillboardHeroProps = {
  pillar:
    | "chairman-of-ai"
    | "community-builder"
    | "speaking-workshops"
    | "meet-jermaine";
  badge: string;
  titleImage?: string;
  titleFallback: string;
  headline?: string;
  tagline: string;
  primaryCta: BillboardCta;
  secondaryCta: BillboardCta;
  backgroundImage: string;
  backgroundVideo?: string;
  metadata?: string[];
};

/**
 * Reusable Netflix-style billboard hero.
 *
 * Drives every lane page. Pillar-specific config gets passed in as props.
 * Phase 1 uses a static cinematic background; Phase 2 swaps in muted video.
 */
const BillboardHero: React.FC<BillboardHeroProps> = ({
  pillar,
  badge,
  titleImage,
  titleFallback,
  headline,
  tagline,
  primaryCta,
  secondaryCta,
  backgroundImage,
  backgroundVideo,
  metadata,
}) => {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const go = (route: string) => {
    if (!route) return;
    if (route.startsWith("/")) {
      navigate(route);
    } else {
      window.open(route, "_blank", "noopener,noreferrer");
    }
  };

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  return (
    <section
      className={`billboard-hero billboard-hero--${pillar}`}
      aria-label={`${pillar} billboard hero`}
    >
      <div className="billboard-hero__bg-layer">
        {backgroundVideo ? (
          <video
            className="billboard-hero__bg-video"
            src={backgroundVideo}
            autoPlay
            muted
            loop
            playsInline
            poster={backgroundImage}
          />
        ) : (
          <motion.div
            className="billboard-hero__bg-image"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            initial={reduceMotion ? false : { scale: 1.0 }}
            animate={reduceMotion ? undefined : { scale: 1.06 }}
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }
            }
          />
        )}
        <div className="billboard-hero__gradient billboard-hero__gradient--top" />
        <div className="billboard-hero__gradient billboard-hero__gradient--left" />
        <div className="billboard-hero__gradient billboard-hero__gradient--bottom" />
      </div>

      <div className="billboard-hero__content">
        <motion.div className="billboard-hero__badge" {...fadeUp(0)}>
          <img src={jpIcon} alt="" className="billboard-hero__badge-icon" />
          <span className="billboard-hero__badge-text">{badge}</span>
        </motion.div>

        {metadata && metadata.length > 0 && (
          <motion.ul className="billboard-hero__metadata" {...fadeUp(0.15)}>
            {metadata.map((m) => (
              <li key={m} className="billboard-hero__metadata-chip">
                {m}
              </li>
            ))}
          </motion.ul>
        )}

        <motion.div className="billboard-hero__title" {...fadeUp(0.3)}>
          {titleImage ? (
            <img
              src={titleImage}
              alt={titleFallback}
              className="billboard-hero__title-image"
            />
          ) : (
            <h1 className="billboard-hero__title-text">{titleFallback}</h1>
          )}
        </motion.div>

        {headline && (
          <motion.p className="billboard-hero__eyebrow" {...fadeUp(0.5)}>
            {headline}
          </motion.p>
        )}

        <motion.p className="billboard-hero__tagline" {...fadeUp(0.65)}>
          {tagline}
        </motion.p>

        <motion.div className="billboard-hero__buttons" {...fadeUp(0.85)}>
          <button
            type="button"
            className="billboard-hero__btn billboard-hero__btn--primary"
            onClick={() => go(primaryCta.route)}
          >
            <FaPlay aria-hidden /> {primaryCta.label}
          </button>
          <button
            type="button"
            className="billboard-hero__btn billboard-hero__btn--secondary"
            onClick={() => go(secondaryCta.route)}
          >
            <FaInfoCircle aria-hidden /> {secondaryCta.label}
          </button>
        </motion.div>
      </div>

      <motion.div
        className="billboard-hero__chevron"
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
  );
};

export default BillboardHero;
