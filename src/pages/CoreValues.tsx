import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaArrowLeft,
  FaTimes,
  FaPlay,
  FaBookOpen,
  FaChevronRight,
  FaRedo,
} from "react-icons/fa";
import jpIcon from "../images/01 - Icon JP - Initials - Blue Trans - PNG.png";
import {
  coreValuesPage,
  type CoreValueId,
  type Receipt,
  type Scenario,
  type ValueDef,
} from "../data/coreValues";
import "./CoreValues.css";

/**
 * Core Values — The Code Room (Guided Room) experience.
 *
 * A stage-based, cinematic, "step into my shoes" interactive page. One
 * full-viewport stage at a time. The user moves through a loop:
 *
 *   Cold Open → Real Situations → Pick Your Lens → Under Pressure →
 *   Reveal → Next Scenario → Season 2 → More Supporting Values
 *
 * The signature interaction: at the Under Pressure stage, the user picks
 * one of three choices (A/B/C). The reveal acknowledges what was picked
 * versus what Jermaine would do. Same scenario, different framings.
 *
 * Browse all 30 supporting values is available from any stage via the
 * persistent corner menu.
 */

// ──────────────────────────────────────────────────────────────────────
// Stage state machine
// ──────────────────────────────────────────────────────────────────────

type Stage =
  | "cold-open"
  | "situations"
  | "lens"
  | "pressure"
  | "season-2"
  | "supporting";

type Season = 1 | 2;

// ──────────────────────────────────────────────────────────────────────
// Main component
// ──────────────────────────────────────────────────────────────────────

export default function CoreValues() {
  const reduceMotion = useReducedMotion();

  // Stage and lens
  const [stage, setStage] = useState<Stage>("cold-open");
  const [season, setSeason] = useState<Season>(1);
  const [lens, setLens] = useState<CoreValueId | null>(null);

  // Situations stage
  const [openReceipt, setOpenReceipt] = useState<Receipt | null>(null);
  const [activeReceiptIdx, setActiveReceiptIdx] = useState(0);

  // Pressure stage
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [picked, setPicked] = useState<{
    scenarioId: string;
    choiceId: "A" | "B" | "C";
    isMyMove: boolean;
  } | null>(null);

  // Supporting values modal
  const [openSupporting, setOpenSupporting] = useState<{
    name: string;
  } | null>(null);

  // ──────────────────────────────────────────────────────────────
  // Derived data
  // ──────────────────────────────────────────────────────────────

  const valuesById = useMemo(() => {
    const map = new Map<CoreValueId, ValueDef>();
    coreValuesPage.values.forEach((v) => map.set(v.id, v));
    return map;
  }, []);

  // Scenarios used in current run: Season 1 = all 8; Season 2 = Freedom + Student Mode only
  const scenarios: Scenario[] = useMemo(() => {
    if (season === 2) {
      const focusIds = new Set(coreValuesPage.season2.focusValueIds);
      return coreValuesPage.scenarios.filter((s) => focusIds.has(s.valueId));
    }

    // Season 1 — if lens is set, put lens scenarios first
    const list = [...coreValuesPage.scenarios];
    if (!lens) return list;
    const top = list.filter((s) => s.valueId === lens);
    const rest = list.filter((s) => s.valueId !== lens);
    return [...top, ...rest];
  }, [season, lens]);

  const activeScenario: Scenario | undefined = scenarios[scenarioIdx];

  const lensValue = lens ? valuesById.get(lens) : null;

  // ──────────────────────────────────────────────────────────────
  // Stage transitions
  // ──────────────────────────────────────────────────────────────

  const goToStage = (next: Stage) => {
    setStage(next);
    // Reset transient state when entering a new stage
    if (next === "pressure") {
      setScenarioIdx(0);
      setPicked(null);
    }
    if (next === "situations") {
      setOpenReceipt(null);
    }
    // Keep URL hash in sync
    try {
      window.history.replaceState({}, "", `#stage=${next}`);
    } catch {
      // ignore
    }
    // Scroll to top of viewport
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      // ignore
    }
  };

  // Initialize stage from URL hash on mount
  useEffect(() => {
    try {
      const hash = window.location.hash;
      const match = hash.match(/stage=([a-z0-9-]+)/);
      const fromHash = match?.[1] as Stage | undefined;
      if (
        fromHash &&
        (
          [
            "cold-open",
            "situations",
            "lens",
            "pressure",
            "season-2",
            "supporting",
          ] as Stage[]
        ).includes(fromHash)
      ) {
        setStage(fromHash);
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePickLens = (id: CoreValueId) => {
    setLens(id);
  };

  const handleAdvanceToPressure = () => {
    if (!lens) return;
    setSeason(1);
    goToStage("pressure");
  };

  const handlePickChoice = (choiceId: "A" | "B" | "C") => {
    if (!activeScenario) return;
    const choice = activeScenario.choices.find((c) => c.id === choiceId);
    if (!choice) return;
    setPicked({
      scenarioId: activeScenario.id,
      choiceId,
      isMyMove: !!choice.isMyMove,
    });
  };

  const handleNextScenario = () => {
    setPicked(null);
    if (scenarioIdx >= scenarios.length - 1) {
      // End of deck — drop into Season 2 interstitial unless already there
      if (season === 1) {
        goToStage("season-2");
      } else {
        goToStage("supporting");
      }
      return;
    }
    setScenarioIdx((i) => i + 1);
  };

  const handleEnterSeason2 = () => {
    setSeason(2);
    setScenarioIdx(0);
    setPicked(null);
    goToStage("pressure");
  };

  const handleRestart = () => {
    setSeason(1);
    setLens(null);
    setOpenReceipt(null);
    setActiveReceiptIdx(0);
    setScenarioIdx(0);
    setPicked(null);
    goToStage("cold-open");
  };

  // ──────────────────────────────────────────────────────────────
  // Persistent corner UI
  // ──────────────────────────────────────────────────────────────

  const CornerMenu = () => (
    <div className="cv2-corner">
      {lensValue && stage !== "cold-open" ? (
        <button
          type="button"
          className="cv2-lens-chip"
          onClick={() => goToStage("lens")}
          aria-label="Change lens"
        >
          <span className="cv2-lens-chip__label">Lens</span>
          <span className="cv2-lens-chip__value">{lensValue.name}</span>
        </button>
      ) : null}

      {stage !== "supporting" ? (
        <button
          type="button"
          className="cv2-corner-btn"
          onClick={() => goToStage("supporting")}
          title="Browse all values"
        >
          <FaBookOpen aria-hidden />
          <span>All Values</span>
        </button>
      ) : null}

      {stage !== "cold-open" ? (
        <button
          type="button"
          className="cv2-corner-btn"
          onClick={handleRestart}
          title="Restart experience"
        >
          <FaRedo aria-hidden />
          <span>Restart</span>
        </button>
      ) : null}
    </div>
  );

  // ──────────────────────────────────────────────────────────────
  // Stage renderers
  // ──────────────────────────────────────────────────────────────

  const stageVariants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -24 },
  };

  const renderStage = () => {
    switch (stage) {
      case "cold-open":
        return (
          <ColdOpen
            key="cold-open"
            onBegin={() => goToStage("situations")}
            onBrowse={() => goToStage("supporting")}
          />
        );

      case "situations":
        return (
          <SituationsStage
            key="situations"
            valuesById={valuesById}
            openReceipt={openReceipt}
            onOpenReceipt={setOpenReceipt}
            onCloseReceipt={() => setOpenReceipt(null)}
            activeIdx={activeReceiptIdx}
            onActiveIdxChange={setActiveReceiptIdx}
            onContinue={() => goToStage("lens")}
          />
        );

      case "lens":
        return (
          <LensStage
            key="lens"
            valuesById={valuesById}
            picked={lens}
            onPick={handlePickLens}
            onContinue={handleAdvanceToPressure}
          />
        );

      case "pressure":
        return (
          <PressureStage
            key={`pressure-${season}`}
            season={season}
            scenarios={scenarios}
            scenarioIdx={scenarioIdx}
            activeScenario={activeScenario}
            valuesById={valuesById}
            picked={picked}
            onPickChoice={handlePickChoice}
            onNextScenario={handleNextScenario}
            onChangeLens={() => goToStage("lens")}
            reduceMotion={!!reduceMotion}
          />
        );

      case "season-2":
        return (
          <Season2Interstitial
            key="season-2"
            onEnter={handleEnterSeason2}
            onSkip={() => goToStage("supporting")}
            valuesById={valuesById}
          />
        );

      case "supporting":
        return (
          <SupportingValuesStage
            key="supporting"
            onBack={() => goToStage("cold-open")}
            open={openSupporting}
            onOpen={setOpenSupporting}
            onClose={() => setOpenSupporting(null)}
          />
        );
    }
  };

  return (
    <div className={`cv2-room cv2-stage-${stage}`}>
      <CornerMenu />

      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          variants={stageVariants}
          initial={reduceMotion ? false : "initial"}
          animate="animate"
          exit={reduceMotion ? undefined : "exit"}
          transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
          className="cv2-stage"
        >
          {renderStage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// Stage 1 — Cold Open
// ══════════════════════════════════════════════════════════════════════

const ColdOpen: React.FC<{
  onBegin: () => void;
  onBrowse: () => void;
}> = ({ onBegin, onBrowse }) => {
  return (
    <section className="cv2-cold" aria-label="Core Values cold open">
      <div className="cv2-cold__bg" />

      <div className="cv2-cold__content">
        <div className="cv2-badge">
          <img src={jpIcon} alt="" aria-hidden className="cv2-badge__icon" />
          <span className="cv2-badge__text">JP ORIGINAL · INTERACTIVE</span>
        </div>

        <h1 className="cv2-cold__title">CORE VALUES</h1>

        <p className="cv2-cold__lede">
          {coreValuesPage.intro.experienceIntro}
        </p>

        <div className="cv2-cold__actions">
          <button
            type="button"
            className="cv2-btn cv2-btn--primary"
            onClick={onBegin}
          >
            <FaPlay aria-hidden /> Begin Experience
          </button>
          <button
            type="button"
            className="cv2-link"
            onClick={onBrowse}
          >
            <FaBookOpen aria-hidden /> Browse all values
          </button>
        </div>
      </div>
    </section>
  );
};

// ══════════════════════════════════════════════════════════════════════
// Stage 2 — Real Situations
// ══════════════════════════════════════════════════════════════════════

const SituationsStage: React.FC<{
  valuesById: Map<CoreValueId, ValueDef>;
  openReceipt: Receipt | null;
  onOpenReceipt: (r: Receipt) => void;
  onCloseReceipt: () => void;
  activeIdx: number;
  onActiveIdxChange: (i: number) => void;
  onContinue: () => void;
}> = ({
  valuesById,
  openReceipt,
  onOpenReceipt,
  onCloseReceipt,
  activeIdx,
  onActiveIdxChange,
  onContinue,
}) => {
  const receipts = coreValuesPage.receipts;
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);

  const next = () => onActiveIdxChange(Math.min(activeIdx + 1, receipts.length - 1));
  const prev = () => onActiveIdxChange(Math.max(activeIdx - 1, 0));

  const handleOpen = (r: Receipt) => {
    setHasOpenedOnce(true);
    onOpenReceipt(r);
  };

  return (
    <section className="cv2-situations" aria-label="Real Situations">
      <header className="cv2-section-head">
        <p className="cv2-eyebrow">REAL SITUATIONS</p>
        <h2 className="cv2-section-title">
          Open one. The room is listening.
        </h2>
        <p className="cv2-section-sub">
          These are real moments. Tap one to step inside.
        </p>
      </header>

      <div className="cv2-deck">
        <button
          type="button"
          className="cv2-deck-arrow cv2-deck-arrow--left"
          onClick={prev}
          disabled={activeIdx === 0}
          aria-label="Previous"
        >
          <FaArrowLeft />
        </button>

        <div className="cv2-deck-track">
          {receipts.map((r, i) => {
            const offset = i - activeIdx;
            const isActive = offset === 0;
            return (
              <motion.button
                type="button"
                key={r.id}
                className={`cv2-rcard ${isActive ? "cv2-rcard--active" : ""}`}
                onClick={() => (isActive ? handleOpen(r) : onActiveIdxChange(i))}
                animate={{
                  x: `${offset * 110}%`,
                  scale: isActive ? 1 : 0.78,
                  opacity: Math.abs(offset) > 2 ? 0 : isActive ? 1 : 0.5,
                  zIndex: 10 - Math.abs(offset),
                }}
                transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                aria-label={`Real situation: ${r.title}`}
              >
                <div className="cv2-rcard__bg" />
                <div className="cv2-rcard__overlay" />
                <div className="cv2-rcard__content">
                  <span className="cv2-tag">
                    {valuesById.get(r.mappedValue)?.name || "Value"}
                  </span>
                  <h3 className="cv2-rcard__title">{r.title}</h3>
                  {isActive && (
                    <p className="cv2-rcard__teaser">
                      {r.inTheMoment.slice(0, 140)}…
                    </p>
                  )}
                  {isActive && (
                    <span className="cv2-rcard__cta">
                      Tap to step inside <FaChevronRight aria-hidden />
                    </span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        <button
          type="button"
          className="cv2-deck-arrow cv2-deck-arrow--right"
          onClick={next}
          disabled={activeIdx === receipts.length - 1}
          aria-label="Next"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="cv2-deck-counter">
        {activeIdx + 1} / {receipts.length}
      </div>

      <div className="cv2-section-foot">
        {hasOpenedOnce ? (
          <button
            type="button"
            className="cv2-btn cv2-btn--primary"
            onClick={onContinue}
          >
            Pick a Value Lens <FaArrowRight aria-hidden />
          </button>
        ) : (
          <p className="cv2-foot-hint">Open at least one to continue.</p>
        )}
      </div>

      {/* Receipt full-screen overlay */}
      <AnimatePresence>
        {openReceipt && (
          <motion.div
            className="cv2-receipt-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onCloseReceipt}
          >
            <motion.article
              className="cv2-receipt-modal__panel"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <header className="cv2-receipt-modal__head">
                <span className="cv2-tag">
                  Value Tag: {valuesById.get(openReceipt.mappedValue)?.name}
                </span>
                <button
                  type="button"
                  className="cv2-icon-btn"
                  onClick={onCloseReceipt}
                  aria-label="Close"
                >
                  <FaTimes />
                </button>
              </header>

              <h2 className="cv2-receipt-modal__title">{openReceipt.title}</h2>

              <div className="cv2-receipt-modal__body">
                <div className="cv2-field">
                  <p className="cv2-field__label">In The Moment</p>
                  <p className="cv2-field__text">{openReceipt.inTheMoment}</p>
                </div>

                <div className="cv2-field">
                  <p className="cv2-field__label">The Process</p>
                  <p className="cv2-field__text">{openReceipt.theProcess}</p>
                </div>

                {openReceipt.gospel && (
                  <blockquote className="cv2-gospel">
                    <span className="cv2-gospel__label">The Gospel of JP</span>
                    <p className="cv2-gospel__quote">
                      &ldquo;{openReceipt.gospel}&rdquo;
                    </p>
                  </blockquote>
                )}
              </div>

              <footer className="cv2-receipt-modal__foot">
                <button
                  type="button"
                  className="cv2-btn cv2-btn--primary"
                  onClick={() => {
                    onCloseReceipt();
                    onContinue();
                  }}
                >
                  Pick a Value Lens <FaArrowRight aria-hidden />
                </button>
                <button
                  type="button"
                  className="cv2-btn cv2-btn--ghost"
                  onClick={onCloseReceipt}
                >
                  Back to Situations
                </button>
              </footer>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// ══════════════════════════════════════════════════════════════════════
// Stage 3 — Pick Your Lens
// ══════════════════════════════════════════════════════════════════════

const LensStage: React.FC<{
  valuesById: Map<CoreValueId, ValueDef>;
  picked: CoreValueId | null;
  onPick: (id: CoreValueId) => void;
  onContinue: () => void;
}> = ({ valuesById, picked, onPick, onContinue }) => {
  const [expanded, setExpanded] = useState<CoreValueId | null>(null);

  return (
    <section className="cv2-lens" aria-label="Pick your lens">
      <header className="cv2-section-head">
        <p className="cv2-eyebrow">START WITH WHAT YOU BELIEVE</p>
        <h2 className="cv2-section-title">
          Pick the value that matters most to you.
        </h2>
        <p className="cv2-section-sub">
          One tap sets your lens for the rest of the experience.
        </p>
      </header>

      <div className="cv2-lens-grid">
        {coreValuesPage.featuredValuesOrder.map((id) => {
          const v = valuesById.get(id);
          if (!v) return null;
          const isPicked = picked === id;
          const isExpanded = expanded === id;
          return (
            <motion.button
              type="button"
              key={id}
              className={`cv2-lens-tile ${isPicked ? "cv2-lens-tile--picked" : ""}`}
              onClick={() => {
                if (isPicked) {
                  setExpanded(isExpanded ? null : id);
                } else {
                  onPick(id);
                  setExpanded(id);
                }
              }}
              animate={{
                scale: picked && !isPicked ? 0.95 : 1,
                opacity: picked && !isPicked ? 0.55 : 1,
              }}
              transition={{ duration: 0.3 }}
              aria-label={`Pick value: ${v.name}`}
              aria-pressed={isPicked}
            >
              <div className="cv2-lens-tile__name">{v.name}</div>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    className="cv2-lens-tile__details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="cv2-lens-tile__row">
                      <span className="cv2-lens-tile__row-label">What it is</span>
                      <span className="cv2-lens-tile__row-text">{v.whatItIs}</span>
                    </p>
                    <p className="cv2-lens-tile__row">
                      <span className="cv2-lens-tile__row-label">How I move</span>
                      <span className="cv2-lens-tile__row-text">{v.howIMove}</span>
                    </p>
                    <p className="cv2-lens-tile__row">
                      <span className="cv2-lens-tile__row-label">I won't</span>
                      <span className="cv2-lens-tile__row-text">{v.iWont}</span>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      <div className="cv2-section-foot">
        {picked ? (
          <button
            type="button"
            className="cv2-btn cv2-btn--primary"
            onClick={onContinue}
          >
            Enter Under Pressure <FaArrowRight aria-hidden />
          </button>
        ) : (
          <p className="cv2-foot-hint">Pick one to continue.</p>
        )}
      </div>
    </section>
  );
};

// ══════════════════════════════════════════════════════════════════════
// Stage 4 — Under Pressure
// ══════════════════════════════════════════════════════════════════════

const PressureStage: React.FC<{
  season: Season;
  scenarios: Scenario[];
  scenarioIdx: number;
  activeScenario: Scenario | undefined;
  valuesById: Map<CoreValueId, ValueDef>;
  picked: { scenarioId: string; choiceId: "A" | "B" | "C"; isMyMove: boolean } | null;
  onPickChoice: (id: "A" | "B" | "C") => void;
  onNextScenario: () => void;
  onChangeLens: () => void;
  reduceMotion: boolean;
}> = ({
  season,
  scenarios,
  scenarioIdx,
  activeScenario,
  valuesById,
  picked,
  onPickChoice,
  onNextScenario,
  onChangeLens,
  reduceMotion,
}) => {
  if (!activeScenario) {
    return (
      <section className="cv2-pressure">
        <p className="cv2-foot-hint">No scenarios available.</p>
      </section>
    );
  }

  const scenarioValue = valuesById.get(activeScenario.valueId);
  const hasRevealed = picked?.scenarioId === activeScenario.id;
  const isLast = scenarioIdx === scenarios.length - 1;

  return (
    <section className="cv2-pressure" aria-label="Under Pressure">
      <header className="cv2-section-head">
        <p className="cv2-eyebrow">
          {season === 2 ? "SEASON 2 · UNDER PRESSURE" : "UNDER PRESSURE"}
        </p>
        <h2 className="cv2-section-title">Make the call.</h2>
        <div className="cv2-pressure__meta">
          <span className="cv2-tag">{scenarioValue?.name}</span>
          <span className="cv2-counter">
            {scenarioIdx + 1} / {scenarios.length}
          </span>
        </div>
      </header>

      <article className="cv2-scenario">
        <h3 className="cv2-scenario__title">{activeScenario.title}</h3>
        <p className="cv2-scenario__prose">{activeScenario.situation}</p>

        <div className="cv2-choices" role="group" aria-label="Make your call">
          {activeScenario.choices.map((c) => {
            const isThisPicked =
              picked?.scenarioId === activeScenario.id &&
              picked.choiceId === c.id;
            const otherPicked =
              picked?.scenarioId === activeScenario.id &&
              picked.choiceId !== c.id;
            return (
              <motion.button
                type="button"
                key={c.id}
                className={`cv2-choice ${isThisPicked ? "cv2-choice--picked" : ""}`}
                onClick={() => onPickChoice(c.id)}
                disabled={!!picked}
                animate={{
                  opacity: otherPicked ? 0.3 : 1,
                  scale: isThisPicked ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
                aria-label={`Choice ${c.id}: ${c.text}`}
              >
                <span className="cv2-choice__text">{c.text}</span>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {hasRevealed && (
            <motion.div
              className="cv2-reveal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <RevealContent
                isMyMove={picked.isMyMove}
                scenario={activeScenario}
                reduceMotion={reduceMotion}
                onNext={onNextScenario}
                isLast={isLast}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </article>

      {!hasRevealed && (
        <div className="cv2-pressure__foot">
          <button
            type="button"
            className="cv2-link"
            onClick={onChangeLens}
          >
            Change lens
          </button>
        </div>
      )}
    </section>
  );
};

const RevealContent: React.FC<{
  isMyMove: boolean;
  scenario: Scenario;
  reduceMotion: boolean;
  onNext: () => void;
  isLast: boolean;
}> = ({ isMyMove, scenario, reduceMotion, onNext, isLast }) => {
  const beatVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="cv2-reveal__inner">
      <motion.p
        className={`cv2-reveal__verdict ${isMyMove ? "cv2-reveal__verdict--match" : ""}`}
        variants={beatVariants}
        initial={reduceMotion ? false : "initial"}
        animate="animate"
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        {isMyMove
          ? "You moved like Jermaine."
          : "Jermaine would have moved differently. Here's how:"}
      </motion.p>

      <motion.div
        className="cv2-reveal__strategies"
        variants={beatVariants}
        initial={reduceMotion ? false : "initial"}
        animate="animate"
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="cv2-field__label">My Strategies</p>
        <ol className="cv2-steps">
          {scenario.myStrategies.map((s, i) => (
            <motion.li
              key={i}
              className="cv2-steps__item"
              initial={reduceMotion ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.25 }}
            >
              {s}
            </motion.li>
          ))}
        </ol>
      </motion.div>

      <motion.blockquote
        className="cv2-gospel"
        variants={beatVariants}
        initial={reduceMotion ? false : "initial"}
        animate="animate"
        transition={{ duration: 0.5, delay: 1.7 }}
      >
        <span className="cv2-gospel__label">The Gospel of JP</span>
        <p className="cv2-gospel__quote">&ldquo;{scenario.gospel}&rdquo;</p>
      </motion.blockquote>

      <motion.div
        className="cv2-reveal__actions"
        variants={beatVariants}
        initial={reduceMotion ? false : "initial"}
        animate="animate"
        transition={{ duration: 0.5, delay: 2.1 }}
      >
        <button type="button" className="cv2-btn cv2-btn--primary" onClick={onNext}>
          {isLast ? "Finish Run" : "Next Scenario"} <FaArrowRight aria-hidden />
        </button>
      </motion.div>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════════
// Stage 5 — Season 2 Interstitial
// ══════════════════════════════════════════════════════════════════════

const Season2Interstitial: React.FC<{
  onEnter: () => void;
  onSkip: () => void;
  valuesById: Map<CoreValueId, ValueDef>;
}> = ({ onEnter, onSkip, valuesById }) => {
  const focusValues = coreValuesPage.season2.focusValueIds
    .map((id) => valuesById.get(id))
    .filter(Boolean) as ValueDef[];

  return (
    <section className="cv2-season2" aria-label="Season 2 interstitial">
      <header className="cv2-section-head cv2-section-head--center">
        <p className="cv2-eyebrow">SEASON 2</p>
        <h2 className="cv2-section-title">More Life. More Values.</h2>
        <p className="cv2-section-sub cv2-section-sub--center">
          Two values worth going deeper on. Same format. Different pressure.
        </p>
      </header>

      <div className="cv2-season2__cards">
        {focusValues.map((v) => (
          <div key={v.id} className="cv2-season2-card">
            <span className="cv2-tag">Focus Value</span>
            <h3 className="cv2-season2-card__name">{v.name}</h3>
            <p className="cv2-season2-card__what">{v.whatItIs}</p>
            <p className="cv2-season2-card__row">
              <span className="cv2-season2-card__row-label">How I move</span>
              <span>{v.howIMove}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="cv2-section-foot">
        <button type="button" className="cv2-btn cv2-btn--primary" onClick={onEnter}>
          Enter Season 2 <FaArrowRight aria-hidden />
        </button>
        <button type="button" className="cv2-link" onClick={onSkip}>
          Skip to all values
        </button>
      </div>
    </section>
  );
};

// ══════════════════════════════════════════════════════════════════════
// Stage 6 — More Supporting Values
// ══════════════════════════════════════════════════════════════════════

const SupportingValuesStage: React.FC<{
  onBack: () => void;
  open: { name: string } | null;
  onOpen: (v: { name: string }) => void;
  onClose: () => void;
}> = ({ onBack, open, onOpen, onClose }) => {
  return (
    <section className="cv2-supporting" aria-label="More Supporting Values">
      <header className="cv2-section-head">
        <p className="cv2-eyebrow">MORE SUPPORTING VALUES</p>
        <h2 className="cv2-section-title">Browse the rest of the code.</h2>
        <p className="cv2-section-sub">
          {coreValuesPage.libraryShelves.reduce(
            (sum, s) => sum + s.values.length,
            0
          )}{" "}
          values across {coreValuesPage.libraryShelves.length} shelves.
        </p>
      </header>

      <div className="cv2-shelves">
        {coreValuesPage.libraryShelves.map((shelf) => (
          <div key={shelf.id} className="cv2-shelf">
            <h3 className="cv2-shelf__title">{shelf.title}</h3>
            <div className="cv2-shelf__grid">
              {shelf.values.map((name) => (
                <button
                  type="button"
                  key={name}
                  className="cv2-supporting-tile"
                  onClick={() => onOpen({ name })}
                  aria-label={`Open ${name}`}
                >
                  <div className="cv2-supporting-tile__cover">
                    <img
                      src={jpIcon}
                      alt=""
                      aria-hidden
                      className="cv2-supporting-tile__mark"
                    />
                  </div>
                  <div className="cv2-supporting-tile__name">{name}</div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="cv2-section-foot">
        <button type="button" className="cv2-btn cv2-btn--ghost" onClick={onBack}>
          Back to start
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="cv2-receipt-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          >
            <motion.div
              className="cv2-receipt-modal__panel cv2-receipt-modal__panel--small"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              <header className="cv2-receipt-modal__head">
                <span className="cv2-tag">Supporting Value</span>
                <button
                  type="button"
                  className="cv2-icon-btn"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <FaTimes />
                </button>
              </header>

              <h2 className="cv2-receipt-modal__title">{open.name}</h2>

              <p className="cv2-field__text">
                This is part of Jermaine's wider code. Featured values get the
                full experience treatment. This one lives in the library for
                now, and may move into the featured rotation in a future
                season.
              </p>

              <footer className="cv2-receipt-modal__foot">
                <button
                  type="button"
                  className="cv2-btn cv2-btn--primary"
                  onClick={onClose}
                >
                  Close
                </button>
              </footer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
