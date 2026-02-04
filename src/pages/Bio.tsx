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

  // Which asset is currently previewed (Netflix “focus”)
  const [focusedAssetId, setFocusedAssetId] = useState<string | null>(null);

  // Which asset is “selected/committed”
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null);

  // Sync state if URL changes (back/forward)
  useEffect(() => {
    function onPop() {
      setActiveBp(getBpFromUrl(defaultBp));
    }
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Write bp into URL
  useEffect(() => {
    setBpInUrl(activeBp);
  }, [activeBp]);

  const blueprint = useMemo(
    () => BIO_BLUEPRINTS.find((b) => b.key === activeBp) ?? BIO_BLUEPRINTS[0],
    [activeBp]
  );

  // When blueprint changes, default focus/selection to first asset
  useEffect(() => {
    const first = blueprint.assets[0]?.id ?? null;
    setFocusedAssetId(first);
    setSelectedAssetId(first);
  }, [blueprint.key]); // intentional: reset when switching rail item

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

  // Keyboard support (basic Netflix remote feel)
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      // Ignore if user is typing in an input/select
      const tag = (document.activeElement?.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;

      const bpIndex = BIO_BLUEPRINTS.findIndex((b) => b.key === activeBp);
      const assets = blueprint.assets;
      const aIndex = assets.findIndex((a) => a.id === (focusedAssetId ?? selectedAssetId));

      if (e.key === "ArrowUp") {
        e.preventDefault();

        // If we’re currently focused on assets, move within assets
        if (aIndex >= 0) {
          const next = clamp(aIndex - 1, 0, assets.length - 1);
          onAssetFocus(assets[next].id);
          return;
        }

        // Otherwise move blueprint rail
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
        // “Commit” focused asset
        if (focusedAssetId) {
          e.preventDefault();
          onAssetSelect(focusedAssetId);
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeBp, blueprint.assets, focusedAssetId, selectedAssetId]);

  // CTA behavior (safe now, real actions later)
  async function handlePrimaryAction(asset: AssetItem | null) {
    if (!asset) return;

    if (activeBp === "contact" && asset.id === "email") {
      try {
        await navigator.clipboard.writeText(CONTACT_VALUES.email);
      } catch {
        // ignore
      }
      return;
    }
  }

  const showRightMeta =
    focusedAsset?.metaLeft || focusedAsset?.metaRight
      ? `${focusedAsset?.metaLeft ?? ""}${focusedAsset?.metaLeft && focusedAsset?.metaRight ? " • " : ""}${focusedAsset?.metaRight ?? ""}`
      : "";

  return (
    <main className="bioN-page">
      {/* HERO */}
      <header className="bioN-hero">
        <div className="bioN-hero-inner">
          <div className="bioN-hero-left">
            <h1 className="bioN-title">Blueprint: Bio</h1>
            <p className="bioN-sub">
              Browse the Blueprint rail. Preview assets instantly. Click to commit.
            </p>

            <div className="bioN-hero-ctas">
              <button type="button" className="bioN-btn bioN-btn-primary" disabled aria-disabled="true">
                Download Master Bio
              </button>
              <button type="button" className="bioN-btn bioN-btn-secondary" disabled aria-disabled="true">
                Download Bio Kit
              </button>
            </div>
          </div>

          <div className="bioN-hero-right">
            <div className="bioN-pill">Updated: 2026</div>
          </div>
        </div>
      </header>

      {/* MAIN NETFLIX LAYOUT */}
      <section className="bioN-shell" aria-label="Blueprint and assets">
        {/* LEFT RAIL */}
        <aside className="bioN-rail" aria-label="Blueprint rail">
          <div className="bioN-rail-head">
            <div className="bioN-rail-title">BLUEPRINTS</div>
          </div>

          <div className="bioN-rail-list" role="list">
            {BIO_BLUEPRINTS.map((b) => {
              const isActive = b.key === activeBp;

              return (
                <button
                  key={b.key}
                  type="button"
                  className={[
                    "bioN-rail-item",
                    isActive ? "bioN-rail-item-active" : "",
                  ].filter(Boolean).join(" ")}
                  onClick={() => onBlueprintChange(b.key)}
                  onMouseEnter={() => onBlueprintChange(b.key)}
                  aria-current={isActive ? "page" : undefined}
                  data-id={`bio-rail-${b.key}`}
                >
                  <span className="bioN-rail-dot" aria-hidden="true" />
                  <span className="bioN-rail-text">
                    <span className="bioN-rail-label">{b.label}</span>
                    {b.sublabel ? <span className="bioN-rail-sublabel">{b.sublabel}</span> : null}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="bioN-rail-foot">
            <div className="bioN-rail-meta">
              <span className="bioN-rail-meta-label">ASSETS</span>
              <span className="bioN-rail-meta-value">{blueprint.assets.length}</span>
            </div>
            <div className="bioN-rail-meta-hint">Updates by Blueprint.</div>
          </div>
        </aside>

        {/* RIGHT LANE */}
        <section className="bioN-lane" aria-label="Assets lane">
          {/* FEATURED */}
          <div className="bioN-feature" aria-label="Featured asset">
            <div className="bioN-feature-thumb" aria-hidden="true">
              <div className="bioN-feature-thumb-inner">16:9</div>
            </div>

            <div className="bioN-feature-body">
              <div className="bioN-feature-kicker">FEATURED</div>
              <div className="bioN-feature-title">{focusedAsset?.title ?? "—"}</div>
              <div className="bioN-feature-desc">{focusedAsset?.description ?? ""}</div>

              {showRightMeta ? <div className="bioN-feature-meta">{showRightMeta}</div> : null}

              <div className="bioN-feature-actions">
                <button
                  type="button"
                  className="bioN-btn bioN-btn-primary"
                  onClick={() => handlePrimaryAction(focusedAsset)}
                  disabled={!focusedAsset?.available}
                  aria-disabled={!focusedAsset?.available}
                >
                  {activeBp === "contact" && focusedAsset?.id === "email" ? "Copy Email" : "Open"}
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

          {/* FEATURED COPY PANEL */}
          <div className="bioN-copy" aria-label="Featured copy">
            {activeBp === "contact" && (focusedAsset?.id === "email") ? (
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
                  <p key={idx} className="bioN-copy-p">{p}</p>
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
                const isFocused = a.id === (focusedAssetId ?? selectedAssetId);
                const isSelected = a.id === selectedAssetId;

                return (
                  <button
                    key={a.id}
                    type="button"
                    className={[
                      "bioN-row",
                      isFocused ? "bioN-row-focused" : "",
                      isSelected ? "bioN-row-selected" : "",
                    ].filter(Boolean).join(" ")}
                    onMouseEnter={() => onAssetFocus(a.id)}
                    onFocus={() => onAssetFocus(a.id)}
                    onClick={() => onAssetSelect(a.id)}
                    data-id={`bio-asset-${a.id}`}
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
                          ? `${a.metaLeft ?? ""}${a.metaLeft && a.metaRight ? " • " : ""}${a.metaRight ?? ""}`
                          : ""}
                      </span>
                    </span>

                    <span className="bioN-row-cta">
                      <span className={["bioN-tag", a.available ? "bioN-tag-live" : "bioN-tag-soon"].join(" ")}>
                        {a.available ? "Preview" : "Soon"}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
