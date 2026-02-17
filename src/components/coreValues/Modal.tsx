// src/pages/CoreValues.tsx
import React, { useMemo, useState } from "react";
import "./CoreValues.css";

import Modal from "../components/coreValues/Modal";
import { coreValuesPage, CoreValueId, Receipt, Scenario, ValueDef } from "../data/coreValues";

type ActiveModal =
  | { type: "receipt"; receipt: Receipt }
  | { type: "value"; value: ValueDef }
  | { type: "library"; name: string; definition?: string }
  | { type: "voice"; title: string; lines: string[] }
  | null;

function shortPreview(text: string, max = 160) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, max).trim() + "…";
}

export default function CoreValuesPage() {
  const [lens, setLens] = useState<CoreValueId | null>(null);
  const [modal, setModal] = useState<ActiveModal>(null);

  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [pickedChoice, setPickedChoice] = useState<{
    scenarioId: string;
    choiceId: "A" | "B" | "C";
  } | null>(null);

  const valuesById = useMemo(() => {
    const map = new Map<CoreValueId, ValueDef>();
    coreValuesPage.values.forEach((v) => map.set(v.id, v));
    return map;
  }, []);

  const orderedScenarios = useMemo(() => {
    const scenarios = [...coreValuesPage.scenarios];

    if (!lens) return scenarios;

    // Lens first, then the rest
    const top = scenarios.filter((s) => s.valueId === lens);
    const rest = scenarios.filter((s) => s.valueId !== lens);
    return [...top, ...rest];
  }, [lens]);

  const activeScenario: Scenario | undefined = orderedScenarios[scenarioIndex];

  const season2Receipts = useMemo(() => {
    const ids = new Set(coreValuesPage.season2.receiptIds);
    return coreValuesPage.receipts.filter((r) => ids.has(r.id));
  }, []);

  const season2Scenarios = useMemo(() => {
    const ids = new Set(coreValuesPage.season2.valueIds);
    return coreValuesPage.scenarios.filter((s) => ids.has(s.valueId));
  }, []);

  const onPickLens = (id: CoreValueId) => {
    setLens(id);
    setScenarioIndex(0);
    setPickedChoice(null);

    const val = valuesById.get(id);
    if (val) setModal({ type: "value", value: val });
  };

  const onPickScenarioChoice = (scenario: Scenario, choiceId: "A" | "B" | "C") => {
    setPickedChoice({ scenarioId: scenario.id, choiceId });
  };

  const resetScenarioReveal = () => setPickedChoice(null);

  const closeModal = () => setModal(null);

  const openValueModal = (id: CoreValueId) => {
    const v = valuesById.get(id);
    if (!v) return;
    setModal({ type: "value", value: v });
  };

  const openReceiptModal = (receipt: Receipt) => {
    setModal({ type: "receipt", receipt });
  };

  const openVoiceModal = (value: ValueDef) => {
    const lines = value.voiceLines || [];
    if (lines.length === 0) return;
    setModal({ type: "voice", title: `${value.name} — Hear it (soon)`, lines });
  };

  return (
    <div className="cvPage">
      {/* HERO */}
      <header className="cvHero">
        <div className="cvHeroInner">
          <h1 className="cvTitle">{coreValuesPage.constants.title}</h1>
          <p className="cvSubtitle">{coreValuesPage.constants.primaryFeeling}</p>

          {lens ? (
            <div className="cvLensRow">
              <span className="cvLabel">Lens:</span>
              <button
                className="cvChip cvChipActive"
                onClick={() => openValueModal(lens)}
                aria-label="Open selected lens details"
              >
                {valuesById.get(lens)?.name || lens}
              </button>
              <button
                className="cvChip cvChipGhost"
                onClick={() => {
                  setLens(null);
                  setScenarioIndex(0);
                  setPickedChoice(null);
                }}
                aria-label="Clear lens filter"
              >
                Clear
              </button>
            </div>
          ) : (
            <div className="cvLensRow">
              <span className="cvLabel">Pick a lens:</span>
              <span className="cvHint">Choose a value. The deck will prioritize it.</span>
            </div>
          )}
        </div>
      </header>

      {/* 1) RECEIPTS WALL */}
      <section className="cvSection">
        <div className="cvSectionHeader">
          <h2 className="cvH2">Receipts</h2>
          <p className="cvP">Moments that prove the code.</p>
        </div>

        <div className="cvRail" role="list" aria-label="Receipts rail">
          {coreValuesPage.receipts.map((r) => (
            <button
              key={r.id}
              className="cvCard"
              onClick={() => openReceiptModal(r)}
              role="listitem"
              aria-label={`Open receipt: ${r.title}`}
            >
              <div className="cvCardTop">
                <span className="cvTag">{valuesById.get(r.mappedValue)?.name}</span>
              </div>
              <div className="cvCardTitle">{r.title}</div>
              <div className="cvCardBody">{shortPreview(r.whatHappened, 120)}</div>
              <div className="cvCardFooter">Open</div>
            </button>
          ))}
        </div>
      </section>

      {/* 2) CHOOSE YOUR CODE */}
      <section className="cvSection">
        <div className="cvSectionHeader">
          <h2 className="cvH2">Choose your code</h2>
          <p className="cvP">Pick what matters to you. I’ll show how it moves in real life.</p>
        </div>

        <div className="cvGrid" aria-label="Featured values grid">
          {coreValuesPage.featuredOrder.map((id) => {
            const v = valuesById.get(id);
            if (!v) return null;
            const active = lens === id;

            return (
              <button
                key={id}
                className={`cvTile ${active ? "cvTileActive" : ""}`}
                onClick={() => onPickLens(id)}
                aria-label={`Select lens: ${v.name}`}
              >
                <div className="cvTileName">{v.name}</div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3) SCENARIO DECK */}
      <section className="cvSection">
        <div className="cvSectionHeader">
          <h2 className="cvH2">Scenario deck</h2>
          <p className="cvP">Values under pressure. Pick a choice. Then I’ll show my move.</p>
        </div>

        <div className="cvScenarioShell">
          <div className="cvScenarioTopBar">
            <div className="cvScenarioMeta">
              <span className="cvTag">
                {activeScenario ? valuesById.get(activeScenario.valueId)?.name : "—"}
              </span>
              <span className="cvSmall">
                {orderedScenarios.length ? `${scenarioIndex + 1} / ${orderedScenarios.length}` : ""}
              </span>
            </div>

            <div className="cvScenarioNav">
              <button
                className="cvBtn cvBtnGhost"
                onClick={() => {
                  setScenarioIndex((i) => Math.max(0, i - 1));
                  resetScenarioReveal();
                }}
                disabled={scenarioIndex === 0}
                aria-label="Previous scenario"
              >
                Prev
              </button>
              <button
                className="cvBtn cvBtnGhost"
                onClick={() => {
                  setScenarioIndex((i) => Math.min(orderedScenarios.length - 1, i + 1));
                  resetScenarioReveal();
                }}
                disabled={scenarioIndex >= orderedScenarios.length - 1}
                aria-label="Next scenario"
              >
                Next
              </button>
            </div>
          </div>

          {activeScenario ? (
            <div className="cvScenarioCard">
              <h3 className="cvH3">{activeScenario.title}</h3>
              <p className="cvP">{activeScenario.situation}</p>

              <div className="cvChoices" role="group" aria-label="Scenario choices">
                {activeScenario.choices.map((c) => {
                  const isPicked =
                    pickedChoice?.scenarioId === activeScenario.id && pickedChoice.choiceId === c.id;

                  return (
                    <button
                      key={c.id}
                      className={`cvChoice ${isPicked ? "cvChoicePicked" : ""} ${
                        c.isMyMove ? "cvChoiceMyMove" : ""
                      }`}
                      onClick={() => onPickScenarioChoice(activeScenario, c.id)}
                      aria-label={`Choose option ${c.id}`}
                    >
                      <div className="cvChoiceLabel">
                        Choice {c.id}
                        {c.isMyMove ? <span className="cvChoiceBadge">my move</span> : null}
                      </div>
                      <div className="cvChoiceText">{c.text}</div>
                    </button>
                  );
                })}
              </div>

              {/* Reveal */}
              {pickedChoice?.scenarioId === activeScenario.id ? (
                <div className="cvReveal" aria-label="Scenario reveal">
                  <div className="cvRevealHeader">
                    <span className="cvTag">
                      Mapped value: {valuesById.get(activeScenario.valueId)?.name}
                    </span>
                    <button
                      className="cvBtn cvBtnGhost"
                      onClick={resetScenarioReveal}
                      aria-label="Reset choice"
                    >
                      Reset
                    </button>
                  </div>

                  <ol className="cvSteps">
                    {activeScenario.mySteps.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ol>

                  <div className="cvJPLine">“{activeScenario.jpLine}”</div>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="cvScenarioCard">
              <p className="cvP">No scenarios found.</p>
            </div>
          )}
        </div>
      </section>

      {/* 4) SEASON 2 */}
      <section className="cvSection">
        <div className="cvSectionHeader">
          <h2 className="cvH2">{coreValuesPage.season2.title}</h2>
          <p className="cvP">Deeper cuts. Still fully playable.</p>
        </div>

        <div className="cvSeasonTwoGrid">
          {coreValuesPage.season2.valueIds.map((id) => {
            const v = valuesById.get(id);
            if (!v) return null;

            return (
              <button
                key={id}
                className="cvTile cvTileSeason"
                onClick={() => {
                  setLens(id);
                  openValueModal(id);
                }}
                aria-label={`Open Season 2 value: ${v.name}`}
              >
                <div className="cvTileName">{v.name}</div>
                <div className="cvTileSub">{shortPreview(v.definition, 70)}</div>
              </button>
            );
          })}
        </div>

        <div className="cvSeasonBlock">
          <div className="cvMiniHeader">Receipts featured in Season 2</div>
          <div className="cvRail" role="list" aria-label="Season 2 receipts rail">
            {season2Receipts.map((r) => (
              <button
                key={r.id}
                className="cvCard cvCardSmall"
                onClick={() => openReceiptModal(r)}
                role="listitem"
                aria-label={`Open receipt: ${r.title}`}
              >
                <div className="cvCardTop">
                  <span className="cvTag">{valuesById.get(r.mappedValue)?.name}</span>
                </div>
                <div className="cvCardTitle">{r.title}</div>
                <div className="cvCardFooter">Open</div>
              </button>
            ))}
          </div>
        </div>

        <div className="cvSeasonBlock">
          <div className="cvMiniHeader">Featured in the deck</div>
          <div className="cvP cvQuiet">
            {season2Scenarios.map((s) => (
              <button
                key={s.id}
                className="cvInlineLink"
                onClick={() => {
                  const idx = orderedScenarios.findIndex((x) => x.id === s.id);
                  if (idx >= 0) {
                    setScenarioIndex(idx);
                    setPickedChoice(null);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                aria-label={`Jump to scenario: ${s.title}`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5) VALUES LIBRARY */}
      <section className="cvSection">
        <div className="cvSectionHeader">
          <h2 className="cvH2">Values library</h2>
          <p className="cvP cvQuiet">Optional depth. Quieter on purpose.</p>
        </div>

        <div className="cvAccordion" aria-label="Values library shelves">
          {coreValuesPage.libraryShelves.map((shelf) => (
            <details key={shelf.id} className="cvShelf">
              <summary className="cvShelfSummary">{shelf.title}</summary>
              <div className="cvShelfBody">
                {shelf.values.map((v) => (
                  <button
                    key={v.id}
                    className="cvChip cvChipGhost"
                    onClick={() =>
                      setModal({
                        type: "library",
                        name: v.name,
                        definition: v.definition,
                      })
                    }
                    aria-label={`Open library value: ${v.name}`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cvCTA">
        <div className="cvCTACard">
          <div className="cvCTATitle">Ready when you are.</div>
          <div className="cvCTASub">{coreValuesPage.constants.doneWhen}</div>
          <button className="cvBtn cvBtnPrimary" aria-label="Partner with me">
            {coreValuesPage.constants.ctaLabel}
          </button>
        </div>
      </section>

      {/* MODALS */}
      <Modal
        open={modal?.type === "receipt"}
        title={modal?.type === "receipt" ? modal.receipt.title : ""}
        onClose={closeModal}
        ariaLabel="Receipt modal"
      >
        {modal?.type === "receipt" ? (
          <div className="cvModalStack">
            <div className="cvModalMeta">
              <span className="cvTag">
                {valuesById.get(modal.receipt.mappedValue)?.name}
              </span>
            </div>

            <div className="cvModalSection">
              <div className="cvModalLabel">What happened</div>
              <div className="cvModalText">{modal.receipt.whatHappened}</div>
            </div>

            <div className="cvModalSection">
              <div className="cvModalLabel">Decision</div>
              <div className="cvModalText">{modal.receipt.decision}</div>
            </div>

            {modal.receipt.jpLine ? (
              <div className="cvJPLine">“{modal.receipt.jpLine}”</div>
            ) : null}
          </div>
        ) : null}
      </Modal>

      <Modal
        open={modal?.type === "value"}
        title={modal?.type === "value" ? modal.value.name : ""}
        onClose={closeModal}
        ariaLabel="Value modal"
      >
        {modal?.type === "value" ? (
          <div className="cvModalStack">
            <div className="cvModalSection">
              <div className="cvModalLabel">Definition</div>
              <div className="cvModalText">{modal.value.definition}</div>
            </div>

            <div className="cvModalSection">
              <div className="cvModalLabel">Looks like</div>
              <div className="cvModalText">{modal.value.looksLike}</div>
            </div>

            <div className="cvModalSection">
              <div className="cvModalLabel">I refuse</div>
              <div className="cvModalText">{modal.value.iRefuse}</div>
            </div>

            <div className="cvDivider" />

            <div className="cvModalSection">
              <div className="cvModalLabel">This matters because</div>
              <div className="cvModalText">{modal.value.reveal.mattersBecause}</div>
            </div>

            <div className="cvModalSection">
              <div className="cvModalLabel">People feel it when I’m in charge</div>
              <div className="cvModalText">{modal.value.reveal.peopleFeelWhenImInCharge}</div>
            </div>

            {modal.value.reveal.whenImOff ? (
              <div className="cvModalSection">
                <div className="cvModalLabel">When I’m off, it looks like</div>
                <div className="cvModalText">{modal.value.reveal.whenImOff}</div>
              </div>
            ) : null}

            <div className="cvModalActions">
              <button
                className="cvBtn cvBtnPrimary"
                onClick={() => openVoiceModal(modal.value)}
                disabled={!modal.value.voiceLines?.length}
                aria-label="Hear it (soon)"
                title={modal.value.voiceLines?.length ? "" : "Hear it (soon)"}
              >
                Hear it (soon)
              </button>
              <button
                className="cvBtn cvBtnGhost"
                onClick={() => {
                  setLens(modal.value.id);
                  closeModal();
                }}
                aria-label="Set lens to this value"
              >
                Set lens
              </button>
            </div>
          </div>
        ) : null}
      </Modal>

      <Modal
        open={modal?.type === "library"}
        title={modal?.type === "library" ? modal.name : ""}
        onClose={closeModal}
        ariaLabel="Library value modal"
      >
        {modal?.type === "library" ? (
          <div className="cvModalStack">
            <div className="cvModalText">
              {modal.definition ? modal.definition : "Definition coming soon"}
            </div>
          </div>
        ) : null}
      </Modal>

      <Modal
        open={modal?.type === "voice"}
        title={modal?.type === "voice" ? modal.title : ""}
        onClose={closeModal}
        ariaLabel="Voice lines modal"
      >
        {modal?.type === "voice" ? (
          <div className="cvModalStack">
            {modal.lines.map((l, idx) => (
              <div key={idx} className="cvQuote">
                “{l}”
              </div>
            ))}
            <div className="cvQuiet cvSmall">
              Audio wiring later. This is the placeholder.
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
