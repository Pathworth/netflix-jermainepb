import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import jpShield from "../../images/01 - Icon JP - Initials - Blue Trans - PNG.png";
import type { ContentRow as ContentRowData } from "../../data/chairmanOfAIRows";
import "./ContentRow.css";

type Props = {
  row: ContentRowData;
  /** Stagger animation index. Higher numbers fade in later. */
  index?: number;
};

/**
 * Netflix-style horizontal content row.
 *
 * Renders an eyebrow + title above a horizontally-scrolling carousel of
 * cards. Each card uses a gradient cover with the JP shield, a badge
 * chip, and the card title. Click routes via react-router for internal
 * paths or opens externally otherwise.
 */
const ContentRow: React.FC<Props> = ({ row, index = 0 }) => {
  const navigate = useNavigate();
  const scrollerRef = useRef<HTMLDivElement>(null);

  const go = (route: string) => {
    if (!route) return;
    if (route.startsWith("/")) {
      navigate(route);
    } else {
      window.open(route, "_blank", "noopener,noreferrer");
    }
  };

  const scrollBy = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const distance = el.clientWidth * 0.85 * direction;
    el.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <motion.section
      className="content-row"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      aria-label={row.title}
    >
      <header className="content-row__header">
        {row.eyebrow && (
          <p className="content-row__eyebrow">{row.eyebrow}</p>
        )}
        <h2 className="content-row__title">{row.title}</h2>
      </header>

      <div className="content-row__carousel">
        <button
          type="button"
          className="content-row__arrow content-row__arrow--left"
          aria-label="Scroll left"
          onClick={() => scrollBy(-1)}
        >
          <FaChevronLeft />
        </button>

        <div className="content-row__scroller" ref={scrollerRef}>
          {row.cards.map((card) => (
            <button
              type="button"
              key={card.title}
              className={`content-card content-card--${card.gradient}`}
              onClick={() => go(card.route)}
              aria-label={card.title}
            >
              <div className="content-card__cover">
                <img
                  src={jpShield}
                  alt=""
                  className="content-card__shield"
                  aria-hidden
                />
                {card.badge && (
                  <span className="content-card__badge">{card.badge}</span>
                )}
              </div>
              <div className="content-card__meta">
                <h3 className="content-card__title">{card.title}</h3>
                {card.subtitle && (
                  <p className="content-card__subtitle">{card.subtitle}</p>
                )}
              </div>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="content-row__arrow content-row__arrow--right"
          aria-label="Scroll right"
          onClick={() => scrollBy(1)}
        >
          <FaChevronRight />
        </button>
      </div>
    </motion.section>
  );
};

export default ContentRow;
