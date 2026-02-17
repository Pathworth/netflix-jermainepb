import React, { useMemo, useState } from "react";
import "./CoreValues.css";
import {
  coreValuesPage,
  CoreValueId,
  Receipt,
  Scenario,
  ValueDef,
} from "../data/coreValues";

type DrawerMode =
  | { type: "situation"; item: Receipt }
  | { type: "value"; item: ValueDef }
  | { type: "voice"; title: string; lines: string[] }
  | { type: "library"; title: string; body: string }
  | null;

function preview(text: string, max = 140) {
  const t = text.replace(/\s+/g, " ").trim();
  return t.length <= max ? t : t.slice(0, max).trim() + "…";
}

export default function CoreValues() {
  // progression unlocks
  const [openedSituationOnce, setOpenedSituationOnce] = useState(false);
  const [pickedLensOnce, setPickedLensOnce] = useState(false);
  const [completedScenarioOnce, setCompletedScenarioOnce] = useState(false);

  const [lens, setLens] = useState<CoreValueId | null>(null);

  const [drawer, setDrawer] = useState<DrawerMode>(null);

  // scenario deck state
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
    const list = [...coreValuesPage.scenarios];
    if (!lens) return list;

    const top = list.filter((s) => s.valueId === lens);
    const rest = list.filter((s) => s.valueId !== lens);
    return [...top, ...rest];
  }, [lens]);

  const activeScenario: Scenario | undefined = orderedScenarios[scenarioIndex];

  const season2Receipts = useMemo(() => {
    const ids = new Set(coreValuesPage.season2.featuredReceiptIds);
    return coreValuesPage.receipts.filter((r) => ids.has(r.id));
  }, []);

  const closeDrawer = () => setDrawer(null);

  const openSituation = (item: Receipt) => {
    setOpenedSituationOnce(true);
    setDrawer({ type: "situation", item });
  };

  const openValue = (item: ValueDef) => {
    setDrawer({ type: "value", item });
  };

  const pickLens = (id: CoreValueId) => {
    setLens(id);
    setPickedLensOnce(true);
    setScenarioIndex(0);
    setPickedChoice(null);

    const v = valuesById.get(id);
    if (v) openValue(v);
  };

  const clearLens = () => {
    setLens(null);
    setScenarioIndex(0);
    setPickedChoice(null);
  };

  const pickScenarioChoice = (choiceId: "A" | "B" | "C") => {
    if (!activeScenario) return;
    setPickedChoice({ scenarioId: activeScenario.id, choiceId });
  };

  const nextScenario = () => {
    // only count completion once we actually revealed at least once
    if (!completedScenarioOnce) setCompletedScenarioOnce(true);

    setPickedChoice(null);
    setScenarioIndex((i) => {
      const next = Math.min(orderedScenarios.length - 1, i + 1);
      return next;
    });
  };

  const lensName = lens ? valuesById.get(lens)?.name : null;

  return (
    <div className="cvRoom">
      {/* HERO */}
      <header className="cvHero">
        <div className="cvHeroInner">
          <div className="cvHeroTop">
            <h1 className="cvTitle">{coreValuesPage.intro.title}</h1>

            {/* Sticky Lens indicator (appears after selecting) */}
            {lens ? (
              <div className="cvLensPill" aria-label="Selected lens">
                <span className="cvLensLabel">Lens</span>
                <button
                  className="cvChip cvChipActive"
                  onClick={() => {
                    const v = valuesById.get(lens);
                    if (v) openValue(v);
                  }}
                  aria-label="Open lens details"
                >
                  {lensName}
                </button>
                <button className="cvChip cvChipGhost" onClick={clearLens} aria-label="Change lens">
                  Change
                </button>
              </div>
            ) : null}
          </div>

          <p className="cvIntro">{coreValuesPage.intro.experienceIntro}</p>

          {/* subtle progression indicator */}
          <div className="cvProgress">
            <div className={`cvDot ${openedSituationOnce ? "on" : ""}`} />
            <div className={`cvDot ${pickedLensOnce ? "on" : ""}`} />
            <div className={`cvDot ${completedScenarioOnce ? "on" : ""}`} />
            <div className="cvProgressHint">
              {completedScenarioOnce
                ? "Season 2 is live."
                : pickedLensOnce
                ? "Make one call under pressure to unlock Season 2."
                : openedSituationOnce
                ? "Pick a value to set your lens."
                : "Start with a real situation."}
            </div>
          </div>
        </div>
      </header>

      {/* PHASE 1 — Real Situations */}
      <section className="cvPhase cvPhaseActive">
        <div className="cvPhaseHeader">
          <h2 className="cvH2">{coreValuesPage.sectionNames.realSituations}</h2>
          <div className="cvSub">Open one. The experience wakes up.</div>
        </div>

        <div className="cvRail" aria-label="Real Situations rail">
          {coreValuesPage.receipts.map((r) => {
            const tag = valuesById.get(r.mappedValue)?.name || "Value";
            return (
              <button
                key={r.id}
                className="cvEpisode"
                onClick={() => openSituation(r)}
                aria-label={`Open real situation: ${r.title}`}
              >
                <div className="cvEpisodeTop">
                  <span className="cvTag">{tag}</span>
                  <span className="cvOpenHint">Open</span>
                </div>

                <div className="cvEpisodeTitle">{r.title}</div>
                <div className="cvEpisodeBody">{preview(r.inTheMoment, 155)}</div>
              </button>
            );
          })}
        </div>
      </section>

      {/* PHASE 2 — What Matters to You */}
      <section className={`cvPhase ${openedSituationOnce ? "cvPhaseActive" : "cvPhaseLocked"}`}>
        <div className="cvPhaseHeader">
          <h2 className="cvH2">{coreValuesPage.sectionNames.whatMatters}</h2>
          <div className="cvSub">Start With What You Believe.</div>
        </div>

        <div className="cvValuesGrid" aria-label="Featured value tiles">
          {coreValuesPage.featuredValuesOrder.map((id) => {
            const v = valuesById.get(id);
            if (!v) return null;

            const isSelected = lens === id;

            return (
              <button
                key={id}
                className={`cvValueTile ${isSelected ? "selected" : ""}`}
                onClick={() => {
                  if (!openedSituationOnce) return;
                  pickLens(id);
                }}
                aria-label={`Select value lens: ${v.name}`}
              >
                <div className="cvValueName">{v.name}</div>
              </button>
            );
          })}
        </div>

        {!openedSituationOnce ? (
          <div className="cvLockHint">
            Open at least one Real Situation to unlock this.
          </div>
        ) : null}
      </section>

      {/* PHASE 3 — Under Pressure */}
      <section className={`cvPhase ${pickedLensOnce ? "cvPhaseActive" : "cvPhaseLocked"}`}>
        <div className="cvPhaseHeader cvPhaseHeaderRow">
          <div>
            <h2 className="cvH2">
              {coreValuesPage.sectionNames.underPressure}
              <span className="cvPrompt"> — Make the Call</span>
            </h2>
            <div className="cvSub">
              This is the interactive core. Pick an option. Watch the reveal.
            </div>
          </div>

          {lens ? (
            <div className="cvInlineLens">
              <span className="cvLensLabelSmall">Lens</span>
              <span className="cvTag">{lensName}</span>
            </div>
          ) : null}
        </div>

        <div className="cvScenarioShell">
          {!pickedLensOnce ? (
            <div className="cvLockHint">
              Pick a value to set your lens before you enter the deck.
            </div>
          ) : null}

          {activeScenario ? (
            <div className={`cvScenarioCard ${pickedLensOnce ? "" : "disabled"}`}>
              <div className="cvScenarioHeader">
                <span className="cvTag">
                  {valuesById.get(activeScenario.valueId)?.name}
                </span>

                <div className="cvScenarioCount">
                  {scenarioIndex + 1} / {orderedScenarios.length}
                </div>
              </div>

              <h3 className="cvH3">{activeScenario.title}</h3>
              <p className="cvScenarioText">{activeScenario.situation}</p>

              <div className="cvChoices" role="group" aria-label="Scenario choices">
                {activeScenario.choices.map((c) => {
                  const isPicked =
                    pickedChoice?.scenarioId === activeScenario.id &&
                    pickedChoice.choiceId === c.id;

                  return (
                    <button
                      key={c.id}
                      className={`cvChoice ${c.isMyMove ? "myMove" : ""} ${isPicked ? "picked" : ""}`}
                      onClick={() => {
                        if (!pickedLensOnce) return;
                        pickScenarioChoice(c.id);
                      }}
                      aria-label={`Choose option ${c.id}`}
                    >
                      <div className="cvChoiceTop">
                        <div className="cvChoiceKey">Choice {c.id}</div>
                        {c.isMyMove ? <div className="cvBadge">my move</div> : null}
                      </div>
                      <div className="cvChoiceText">{c.text}</div>
                    </button>
                  );
                })}
              </div>

              {/* Reveal */}
              {pickedChoice?.scenarioId === activeScenario.id ? (
                <div className="cvReveal">
                  <div className="cvRevealTop">
                    <span className="cvTag">
                      Value Tag: {valuesById.get(activeScenario.valueId)?.name}
                    </span>
                    <button
                      className="cvMiniBtn"
                      onClick={() => setPickedChoice(null)}
                      aria-label="Reset reveal"
                    >
                      Reset
                    </button>
                  </div>

                  <div className="cvRevealGrid">
                    <div className="cvRevealBlock">
                      <div className="cvFieldLabel">My Strategies (Steps)</div>
                      <ol className="cvSteps">
                        {activeScenario.myStrategies.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ol>
                    </div>

                    <div className="cvGospel">
                      <div className="cvFieldLabel">The Gospel of JP</div>
                      <div className="cvPullQuote">“{activeScenario.gospel}”</div>
                    </div>
                  </div>

                  <div className="cvNextRow">
                    <button
                      className="cvBtnPrimary"
                      onClick={nextScenario}
                      aria-label="Next Scenario"
                    >
                      Next Scenario
                    </button>

                    <button
                      className="cvBtnGhost"
                      onClick={() => {
                        const v = valuesById.get(activeScenario.valueId);
                        if (v) openValue(v);
                      }}
                      aria-label="Open mapped value details"
                    >
                      View Value
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="cvLockHint">No scenarios found.</div>
          )}
        </div>
      </section>

      {/* PHASE 4 — Season 2 */}
      <section className={`cvPhase ${completedScenarioOnce ? "cvPhaseActive" : "cvPhaseLocked"}`}>
        <div className="cvPhaseHeader">
          <h2 className="cvH2">{coreValuesPage.sectionNames.season2}</h2>
          <div className="cvSub">
            After you make one call under pressure, this chapter arrives.
          </div>
        </div>

        {!completedScenarioOnce ? (
          <div className="cvLockHint">
            Complete at least one scenario reveal to unlock Season 2.
          </div>
        ) : null}

        <div className="cvSeasonGrid">
          {coreValuesPage.season2.focusValueIds.map((id) => {
            const v = valuesById.get(id);
            if (!v) return null;
            return (
              <button
                key={id}
                className="cvSeasonTile"
                onClick={() => pickLens(id)}
                aria-label={`Season 2 focus value: ${v.name}`}
                disabled={!completedScenarioOnce}
              >
                <div className="cvSeasonTitle">{v.name}</div>
                <div className="cvSeasonDesc">{preview(v.whatItIs, 90)}</div>
              </button>
            );
          })}
        </div>

        <div className="cvMiniRailWrap">
          <div className="cvMiniRailTitle">Featured Real Situations</div>
          <div className="cvRail cvMiniRail" aria-label="Season 2 receipts rail">
            {season2Receipts.map((r) => {
              const tag = valuesById.get(r.mappedValue)?.name || "Value";
              return (
                <button
                  key={r.id}
                  className="cvMiniEpisode"
                  onClick={() => openSituation(r)}
                  disabled={!completedScenarioOnce}
                >
                  <div className="cvEpisodeTop">
                    <span className="cvTag">{tag}</span>
                    <span className="cvOpenHint">Open</span>
                  </div>
                  <div className="cvEpisodeTitle">{r.title}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* PHASE 5 — Values Library (quiet depth) */}
      <section className="cvPhase cvPhaseQuiet">
        <div className="cvPhaseHeader">
          <h2 className="cvH2">{coreValuesPage.sectionNames.valuesLibrary}</h2>
          <div className="cvSub">Quiet depth. Optional. Easy scanning.</div>
        </div>

        <div className="cvLibrary">
          {coreValuesPage.libraryShelves.map((shelf) => (
            <details className="cvShelf" key={shelf.id}>
              <summary className="cvShelfTitle">{shelf.title}</summary>
              <div className="cvShelfBody">
                {shelf.values.map((v) => (
                  <button
                    key={v}
                    className="cvLibraryChip"
                    onClick={() =>
                      setDrawer({
                        type: "library",
                        title: v,
                        body: "Definition coming soon",
                      })
                    }
                    aria-label={`Open library value: ${v}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="cvCTA">
        <button className="cvCTAButton" aria-label="Partner with me">
          {coreValuesPage.cta.label}
        </button>
      </section>

      {/* Drawer + overlay */}
      <div
        className={`cvOverlay ${drawer ? "open" : ""}`}
        onClick={closeDrawer}
        role="presentation"
      />

      <aside
        className={`cvDrawer ${drawer ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Core Values drawer"
      >
        <div className="cvDrawerHeader">
          <div className="cvDrawerTitle">
            {drawer?.type === "situation"
              ? drawer.item.title
              : drawer?.type === "value"
              ? drawer.item.name
              : drawer?.type === "voice"
              ? drawer.title
              : drawer?.type === "library"
              ? drawer.title
              : ""}
          </div>
          <button className="cvClose" onClick={closeDrawer} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="cvDrawerBody">
          {/* Real Situation drawer */}
          {drawer?.type === "situation" ? (
            <div className="cvDrawerStack">
              <div className="cvMetaRow">
                <span className="cvTag">
                  Value Tag: {valuesById.get(drawer.item.mappedValue)?.name}
                </span>
              </div>

              <div className="cvField">
                <div className="cvFieldLabel">In The Moment</div>
                <div className="cvFieldText">{drawer.item.inTheMoment}</div>
              </div>

              <div className="cvField">
                <div className="cvFieldLabel">The Process</div>
                <div className="cvFieldText">{drawer.item.theProcess}</div>
              </div>

              {drawer.item.gospel ? (
                <div className="cvGospelBlock">
                  <div className="cvFieldLabel">The Gospel of JP</div>
                  <div className="cvPullQuote big">“{drawer.item.gospel}”</div>
                </div>
              ) : null}

              <button
                className="cvBtnPrimary full"
                onClick={() => {
                  const v = valuesById.get(drawer.item.mappedValue);
                  if (v) pickLens(v.id);
                }}
              >
                Use this as my Lens
              </button>
            </div>
          ) : null}

          {/* Value drawer */}
          {drawer?.type === "value" ? (
            <div className="cvDrawerStack">
              <div className="cvMetaRow">
                <span className="cvTag">{drawer.item.name}</span>
              </div>

              <div className="cvField">
                <div className="cvFieldLabel">What it is</div>
                <div className="cvFieldText">{drawer.item.whatItIs}</div>
              </div>

              <div className="cvField">
                <div className="cvFieldLabel">How I move</div>
                <div className="cvFieldText">{drawer.item.howIMove}</div>
              </div>

              <div className="cvField">
                <div className="cvFieldLabel">I won’t</div>
                <div className="cvFieldText">{drawer.item.iWont}</div>
              </div>

              <div className="cvDivider" />

              <div className="cvField">
                <div className="cvFieldLabel">This matters because…</div>
                <div className="cvFieldText">{drawer.item.reveal.mattersBecause}</div>
              </div>

              <div className="cvField">
                <div className="cvFieldLabel">People feel it when I’m in charge…</div>
                <div className="cvFieldText">{drawer.item.reveal.peopleFeel}</div>
              </div>

              {drawer.item.reveal.whenOff ? (
                <div className="cvField">
                  <div className="cvFieldLabel">When I’m off…</div>
                  <div className="cvFieldText">{drawer.item.reveal.whenOff}</div>
                </div>
              ) : null}

              <div className="cvDrawerActions">
                <button
                  className="cvBtnPrimary"
                  onClick={() =>
                    setDrawer({
                      type: "voice",
                      title: "Hear it (soon)",
                      lines: drawer.item.voiceLines,
                    })
                  }
                >
                  Hear it (soon)
                </button>

                <button
                  className="cvBtnGhost"
                  onClick={() => {
                    setLens(drawer.item.id);
                    setPickedLensOnce(true);
                    closeDrawer();
                  }}
                >
                  Set Lens
                </button>
              </div>
            </div>
          ) : null}

          {/* Voice drawer */}
          {drawer?.type === "voice" ? (
            <div className="cvDrawerStack">
              {drawer.lines.map((l, idx) => (
                <div key={idx} className="cvVoiceQuote">
                  “{l}”
                </div>
              ))}
              <div className="cvQuietNote">
                Audio wiring later. This is the text bank.
              </div>
            </div>
          ) : null}

          {/* Library drawer */}
          {drawer?.type === "library" ? (
            <div className="cvDrawerStack">
              <div className="cvFieldText">{drawer.body}</div>
            </div>
          ) : null}
        </div>
      </aside>
    </div>
  );
}
