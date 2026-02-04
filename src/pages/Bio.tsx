import React, { useEffect, useMemo, useState } from "react";
import "./Bio.css";

import {
  BIO_BLUEPRINTS,
  BIO_COPY,
  CONTACT_VALUES,
  type BlueprintKey,
  type AssetItem,
} from "../data/bio";

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

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function Bio() {
  const defaultBp: BlueprintKey = "master-bio";

  const [activeBp, setActiveBp] = useState<BlueprintKey>(() => getBpFromUrl(defaultBp));
  const [focusedAssetId, setFocusedAssetId] = useState<string | null>(null);
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null);

  useEffect(() => {
    function onPop() {
      setActiveBp(getBpFromUrl(defaultBp));
    }
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    setBpInUrl(activeBp);
  }, [activeBp]);

  const blueprint = useMemo(
    () => BIO_BLUEPRINTS.find((b) => b.key === activeBp) ?? BIO_BLUEPRINTS[0],
    [activeBp]
  );

  useEffect(() => {
    const first = blueprint.assets[0]?.id ?? null;
    setFocusedAssetId(first);
    setSelectedAssetId(first);
  }, [blueprint.key, blueprint.assets]);

  const focusedAsset: AssetItem | null = useMemo(() => {
    const id = focusedAssetId ?? selectedAssetId;
    if (!id) return null;
    return blueprint.assets.find((a) => a.id === id) ?? null;
  }, [blueprint.assets, focusedAssetId, selectedAssetId]);

  const featuredKey = focusedAsset?.id ?? "";
  const featuredCopy = BIO_COPY[featuredKey];

  function onBlueprintChange(next: BlueprintKey) {
    setActiveBp(next);
  }

  function onAssetFocus(assetId: string) {
    setFocusedAssetId(assetId);
  }

  function onAssetSelect(assetId: string) {
    setSelectedAssetId(assetId);
    setFocusedAssetId(assetId);
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const tag = (document.activeElement?.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;

      const bpIndex = BIO_BLUEPRINTS.findIndex((b) => b.key === activeBp);
      const assets = blueprint.assets;
      const currentAssetId = focusedAssetId ?? selectedAssetId;
      const aIndex = assets.findIndex((a) => a.id === currentAssetId);

      if (e.key === "ArrowUp") {
        e.preventDefault();

        if (aIndex >= 0) {
          const next = clamp(aIndex - 1, 0, assets.length - 1);
          onAssetFocus(assets[next].id);
          return;
        }

        const nextBp = clamp(bpIndex - 1, 0, BIO_BLUEPRINTS.length - 1);
        onBlueprintChange(BIO_BLUEPRINTS[nextBp].key);
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();

        if (aIndex >= 0) {
          const next = clamp(aIndex + 1, 0, assets.length - 1);
          onAssetFocus(assets[next].id);
          return;
        }

        const nextBp = clamp(bpIndex + 1, 0, BIO_BLUEPRINTS.length - 1);
        onBlueprintChange(BIO_BLUEPRINTS[nextBp].key);
        return;
      }

      if (e.key === "Enter") {
        if (focusedAssetId) {
          e.preventDefault();
          onAssetSelect(focusedAssetId);
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeBp, blueprint.assets, focusedAssetId, selectedAssetId]);

  async function handlePrimaryAction(asset: AssetItem | null) {
    if (!asset) return;

    if (activeBp === "contact" && asset.id === "email") {
      try {
        await navigator.clipboard.writeText(CONTACT_VALUES.email);
      } catch {
        // ignore
      }
    }
  }

  const rightMeta =
    focusedAsset?.metaLeft || focusedAsset?.metaRight
      ? `${focusedAsset?.metaLeft ?? ""}${
          focusedAsset?.metaLeft && focusedAsset?.metaRight ? " • " : ""
        }${focusedAsset?.metaRight ?? ""}`
      : "";

  return (
    <main className="bioN-page">
      <header className="bioN-hero">
        <div className="bioN-hero-inner">
          <div className="bioN-hero-left">
            <h1 className="bioN-title">Blueprint: Bio</h1>
            <p className="bioN-sub">
              Browse the Blueprint rail. Preview assets instantly. Click to commit.
            </p>

            <div className="bioN-hero-ctas">
              <button
                type="button"
                className="bioN-btn bioN-btn-primary"
                disabled
                aria-disabled="true"
              >
                Download Master Bio
              </button>
              <button
                type="button"
                className="bioN-btn bioN-btn-secondary"
                disabled
                aria-disabled="true"
              >
                Download Bio Kit
              </button>
            </div>
          </div>

          <div className="bioN-hero-right">
            <div className="bioN-pill">Updated: 2026</div>
          </div>
        </div>
      </header>

      {/* Netflix-style: 3 columns */}
      <section className="bioN-ntx" aria-label="Blueprint and assets">
        {/* LEFT: Blueprint list (with counts column aligned per row) */}
        <aside className="bioN-rail" aria-label="Blueprint rail">
          <div className="bioN-rail-head">
            <div className="bioN-rail-title">BLUEPRINTS</div>
          </div>

          <div className="bioN-rail-list" role="list">
            {BIO_BLUEPRINTS.map((b) => {
              const isActive = b.key === activeBp;
              const countLabel = `${b.assets.length} ${b.assets.length === 1 ? "asset" : "assets"}`;

              return (
                <button
                  key={b.key}
                  type="button"
                  className={[
                    "bioN-rail-item",
                    isActive ? "bioN-rail-item-active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => onBlueprintChange(b.key)}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="bioN-rail-left">
                    <span className="bioN-rail-dot" aria-hidden="true" />
                    <span className="bioN-rail-text">
                      <span className="bioN-rail-label">{b.label}</span>
                      {b.sublabel ? (
                        <span className="bioN-rail-sublabel">{b.sublabel}</span>
                      ) : null}
                    </span>
                  </span>

                  <span className="bioN-rail-count" aria-label={countLabel}>
                    {countLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* RIGHT: Viewer */}
        <section className="bioN-lane" aria-label="Assets lane">
          <div className="bioN-laneScroll">
            {/* FEATURED */}
            <div className="bioN-feature" aria-label="Featured asset">
              <div className="bioN-feature-thumb" aria-hidden="true">
                <div className="bioN-feature-thumb-inner">16:9</div>
              </div>

              <div className="bioN-feature-body">
                <div className="bioN-feature-kicker">FEATURED</div>
                <div className="bioN-feature-title">{focusedAsset?.title ?? "—"}</div>
                <div className="bioN-feature-desc">{focusedAsset?.description ?? ""}</div>

                {rightMeta ? <div className="bioN-feature-meta">{rightMeta}</div> : null}

                <div className="bioN-feature-actions">
                  <button
                    type="button"
                    className="bioN-btn bioN-btn-primary"
                    onClick={() => handlePrimaryAction(focusedAsset)}
                    disabled={!focusedAsset?.available}
                    aria-disabled={!focusedAsset?.available}
                  >
                    {activeBp === "contact" && focusedAsset?.id === "email"
                      ? "Copy Email"
                      : "Open"}
                  </button>

                  <button
                    type="button"
                    className="bioN-btn bioN-btn-secondary"
                    disabled
                    aria-disabled="true"
                  >
                    Coming soon
                  </button>
                </div>
              </div>
            </div>

            {/* COPY */}
            <div className="bioN-copy" aria-label="Featured copy">
              {activeBp === "contact" && focusedAsset?.id === "email" ? (
                <>
                  <h2 className="bioN-copy-h">Email</h2>
                  <p className="bioN-copy-p">{CONTACT_VALUES.email}</p>
                  <p className="bioN-copy-p bioN-muted">
                    Click “Copy Email” above. Social links will go live when added.
                  </p>
                </>
              ) : featuredCopy ? (
                <>
                  <h2 className="bioN-copy-h">{featuredCopy.heading}</h2>
                  {featuredCopy.body.map((p, idx) => (
                    <p key={idx} className="bioN-copy-p">
                      {p}
                    </p>
                  ))}
                </>
              ) : (
                <>
                  <h2 className="bioN-copy-h">Preview</h2>
                  <p className="bioN-copy-p bioN-muted">
                    This blueprint’s featured preview will appear here when the asset copy is added.
                  </p>
                </>
              )}
            </div>

            {/* ASSETS LIST */}
            <div className="bioN-listWrap" aria-label="Assets list">
              <div className="bioN-listHead">
                <div className="bioN-listTitle">ASSETS</div>
                <div className="bioN-listCount">{blueprint.assets.length}</div>
              </div>

              <div className="bioN-list" role="list">
                {blueprint.assets.map((a, idx) => {
                  const current = focusedAssetId ?? selectedAssetId;
                  const isFocused = a.id === current;
                  const isSelected = a.id === selectedAssetId;

                  return (
                    <button
                      key={a.id}
                      type="button"
                      className={[
                        "bioN-row",
                        isFocused ? "bioN-row-focused" : "",
                        isSelected ? "bioN-row-selected" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onMouseEnter={() => onAssetFocus(a.id)}
                      onFocus={() => onAssetFocus(a.id)}
                      onClick={() => onAssetSelect(a.id)}
                      aria-label={`Preview ${a.title}`}
                      style={{ animationDelay: `${idx * 0.04}s` }}
                    >
                      <span className="bioN-row-bar" aria-hidden="true" />
                      <span className="bioN-row-thumb" aria-hidden="true">
                        <span className="bioN-row-thumb-inner">16:9</span>
                      </span>

                      <span className="bioN-row-main">
                        <span className="bioN-row-title">{a.title}</span>
                        <span className="bioN-row-desc">{a.description}</span>
                        <span className="bioN-row-meta">
                          {(a.metaLeft || a.metaRight)
                            ? `${a.metaLeft ?? ""}${
                                a.metaLeft && a.metaRight ? " • " : ""
                              }${a.metaRight ?? ""}`
                            : ""}
                        </span>
                      </span>

                      <span className="bioN-row-cta">
                        <span
                          className={[
                            "bioN-tag",
                            a.available ? "bioN-tag-live" : "bioN-tag-soon",
                          ].join(" ")}
                        >
                          {a.available ? "Preview" : "Soon"}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
