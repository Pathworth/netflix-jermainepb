import React, { useEffect, useMemo, useState } from "react";
import "./Bio.css";

import {
  BIO_BLUEPRINTS,
  BIO_KIT_ASSETS,
  BIO_MEDIA_ITEMS,
  BIO_CONTACT,
  type BlueprintKey,
  type AssetItem,
  type MediaItem,
} from "../data/bio";

function formatAssetsCount(count: number | "TBD") {
  return count === "TBD" ? "TBD assets" : `${count} asset${count === 1 ? "" : "s"}`;
}

function getBpFromUrl(defaultValue: BlueprintKey): BlueprintKey {
  try {
    const url = new URL(window.location.href);
    const bp = url.searchParams.get("bp") as BlueprintKey | null;
    const valid = BIO_BLUEPRINTS.some((b) => b.key === bp);
    return valid && bp ? bp : defaultValue;
  } catch {
    return defaultValue;
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

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="bio-chip">{children}</span>;
}

function Btn({
  children,
  disabled,
  variant = "primary",
  onClick,
  dataId,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  dataId?: string;
}) {
  const cls = [
    "bio-btn",
    variant === "primary" ? "bio-btn-primary" : "bio-btn-secondary",
    disabled ? "bio-btn-disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={cls}
      disabled={!!disabled}
      onClick={disabled ? undefined : onClick}
      aria-disabled={!!disabled}
      data-id={dataId}
    >
      {disabled ? "Coming soon" : children}
    </button>
  );
}

function FeatureCard({
  title,
  description,
  metaLeft,
  metaRight,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  description: string;
  metaLeft: string;
  metaRight?: string;
  primaryCta?: React.ReactNode;
  secondaryCta?: React.ReactNode;
}) {
  return (
    <section className="bio-feature" aria-label={`${title} card`}>
      <div className="bio-feature-thumb" aria-hidden="true">
        <div className="bio-feature-thumb-inner">16:9</div>
      </div>

      <div className="bio-feature-body">
        <h2 className="bio-feature-title">{title}</h2>
        <p className="bio-feature-desc">{description}</p>

        <div className="bio-feature-meta">
          <div className="bio-feature-meta-left">{metaLeft}</div>
          {metaRight ? <div className="bio-feature-meta-right">{metaRight}</div> : null}
        </div>

        {(primaryCta || secondaryCta) && (
          <div className="bio-feature-ctas">
            {primaryCta}
            {secondaryCta}
          </div>
        )}
      </div>
    </section>
  );
}

function AssetRow({ item }: { item: AssetItem }) {
  const icon =
    item.type === "PDF"
      ? "PDF"
      : item.type === "ZIP_PHOTOS"
      ? "ZIP"
      : item.type === "ZIP_LOGOS"
      ? "ZIP"
      : item.type === "TEXT"
      ? "TXT"
      : "LINK";

  return (
    <div className="bio-row">
      <div className="bio-row-icon" aria-hidden="true">
        {icon}
      </div>

      <div className="bio-row-main">
        <div className="bio-row-top">
          <div className="bio-row-title">{item.name}</div>
          <Chip>{item.label}</Chip>
        </div>
        <div className="bio-row-desc">{item.description}</div>
      </div>

      <div className="bio-row-cta">
        <Btn
          variant="secondary"
          disabled={!item.available}
          dataId={`bio-asset-${item.id}`}
          onClick={() => {}}
        >
          {item.type === "TEXT" ? "Copy" : "Download"}
        </Btn>
      </div>
    </div>
  );
}

function MediaRow({ item }: { item: MediaItem }) {
  return (
    <div className="bio-row">
      <div className="bio-row-thumb" aria-hidden="true">
        <div className="bio-row-thumb-inner">16:9</div>
      </div>

      <div className="bio-row-main">
        <div className="bio-row-top">
          <div className="bio-row-title">{item.title}</div>
          {item.label ? <Chip>{item.label}</Chip> : null}
        </div>
        <div className="bio-row-desc">
          {item.source} • {item.date}
        </div>
      </div>

      <div className="bio-row-cta">
        <Btn
          variant="secondary"
          disabled={!item.available}
          dataId={`bio-media-${item.id}`}
          onClick={() => {}}
        >
          View
        </Btn>
      </div>
    </div>
  );
}

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function doCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <div className="bio-copy-row">
      <div className="bio-copy-label">{label}</div>
      <div className="bio-copy-value">{value}</div>
      <Btn variant="secondary" onClick={doCopy} dataId={`bio-copy-${label.toLowerCase().replace(/\s+/g, "-")}`}>
        {copied ? "Copied" : "Copy"}
      </Btn>
    </div>
  );
}

export default function Bio() {
  const defaultBp: BlueprintKey = "masterBio";
  const [active, setActive] = useState<BlueprintKey>(() => getBpFromUrl(defaultBp));

  // Keep state synced from URL if user manually edits it.
  useEffect(() => {
    function onPop() {
      setActive(getBpFromUrl(defaultBp));
    }
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Write selection into URL.
  useEffect(() => {
    setBpInUrl(active);
  }, [active]);

  const activeDef = useMemo(() => BIO_BLUEPRINTS.find((b) => b.key === active) ?? BIO_BLUEPRINTS[0], [active]);

  return (
    <main className="bio-page">
      {/* HERO */}
      <header className="bio-hero">
        <div className="bio-hero-bg" aria-hidden="true" />
        <div className="bio-hero-overlay" aria-hidden="true" />

        <div className="bio-hero-inner">
          <div className="bio-hero-left">
            <h1 className="bio-hero-title">Blueprint: Bio</h1>
            <p className="bio-hero-sub">
              This page holds the official bio, press-ready assets, and contact details in one place.
            </p>

            <div className="bio-hero-actions">
              <Btn disabled dataId="bio-hero-download-master">
                Download Master Bio (PDF)
              </Btn>
              <Btn disabled variant="secondary" dataId="bio-hero-download-kit">
                Download Bio Kit (ZIP)
              </Btn>
            </div>
          </div>

          <div className="bio-hero-right">
            <div className="bio-hero-updated">Updated: 2026</div>
          </div>
        </div>
      </header>

      {/* BODY */}
      <section className="bio-body">
        {/* Mobile selector */}
        <div className="bio-mobilebar" aria-label="Mobile blueprint selector">
          <label className="bio-mobile-label" htmlFor="bioBlueprintSelect">
            Blueprint Menu
          </label>

          <select
            id="bioBlueprintSelect"
            className="bio-mobile-select"
            value={active}
            onChange={(e) => setActive(e.target.value as BlueprintKey)}
          >
            {BIO_BLUEPRINTS.map((b) => (
              <option key={b.key} value={b.key}>
                {b.navLabel}
              </option>
            ))}
          </select>

          <div className="bio-mobile-badge">{formatAssetsCount(activeDef.assetsCount)}</div>
        </div>

        <div className="bio-grid">
          {/* Column 1 */}
          <aside className="bio-col bio-col-nav" aria-label="Blueprint navigation">
            <div className="bio-col-header">BLUEPRINTS</div>

            <div className="bio-nav">
              {BIO_BLUEPRINTS.map((b) => {
                const isActive = b.key === active;
                return (
                  <button
                    key={b.key}
                    type="button"
                    className={["bio-nav-item", isActive ? "bio-nav-item-active" : ""].filter(Boolean).join(" ")}
                    onClick={() => setActive(b.key)}
                    aria-current={isActive ? "page" : undefined}
                    data-id={`bio-nav-${b.key}`}
                  >
                    <span className="bio-nav-dot" aria-hidden="true" />
                    <span className="bio-nav-text">{b.navLabel}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Column 2 */}
          <aside className="bio-col bio-col-assets" aria-label="Assets count">
            <div className="bio-col-header">ASSETS</div>
            <div className="bio-assets">
              <div className="bio-assets-count">{formatAssetsCount(activeDef.assetsCount)}</div>
              <div className="bio-assets-hint">This number changes by Blueprint.</div>
            </div>
          </aside>

          {/* Column 3 */}
          <section className="bio-col bio-col-content" aria-label="Blueprint content">
            {active === "masterBio" && (
              <>
                <FeatureCard
                  title="Master Bio"
                  description="The official narrative bio used for press, events, and partner packets."
                  metaLeft="Read time: 3–5 min"
                  metaRight="Updated 2026"
                  primaryCta={<Btn disabled dataId="bio-master-download">Download PDF</Btn>}
                  secondaryCta={<Btn disabled variant="secondary" dataId="bio-master-copy">Copy short intro</Btn>}
                />

                <article className="bio-copy" aria-label="Master bio text">
                  <h3 className="bio-copy-h3">Headline (placeholder)</h3>
                  <p>
                    This is where the full bio text will live. The spacing and line height are tuned so it reads clean,
                    feels premium, and is easy to scan.
                  </p>

                  <h4 className="bio-copy-h4">Subhead (placeholder)</h4>
                  <p>
                    Add sections as needed. This layout supports headings and short sections without forcing a redesign.
                  </p>

                  <div className="bio-strip">
                    <div className="bio-strip-text">Official assets become 1-click when they are added.</div>
                    <div className="bio-strip-actions">
                      <Btn disabled dataId="bio-strip-download">Download PDF</Btn>
                      <Btn disabled variant="secondary" dataId="bio-strip-copy">Copy short intro</Btn>
                    </div>
                  </div>
                </article>
              </>
            )}

            {active === "bioKit" && (
              <>
                <FeatureCard
                  title="Bio Kit"
                  description="A single place for bios, headshots, and brand marks."
                  metaLeft={formatAssetsCount(activeDef.assetsCount)}
                  primaryCta={<Btn disabled dataId="bio-kit-download">Download</Btn>}
                />

                <div className="bio-stack" aria-label="Bio kit list">
                  {BIO_KIT_ASSETS.map((a) => (
                    <AssetRow key={a.id} item={a} />
                  ))}
                </div>
              </>
            )}

            {active === "media" && (
              <>
                <FeatureCard
                  title="Media"
                  description="Press mentions, articles, and clips."
                  metaLeft={formatAssetsCount(activeDef.assetsCount)}
                />

                <div className="bio-stack" aria-label="Media list">
                  {BIO_MEDIA_ITEMS.map((m) => (
                    <MediaRow key={m.id} item={m} />
                  ))}
                </div>
              </>
            )}

            {active === "contact" && (
              <>
                <FeatureCard
                  title="Contact"
                  description="A clean place to reach out, book, or connect."
                  metaLeft={formatAssetsCount(activeDef.assetsCount)}
                />

                <div className="bio-contact" aria-label="Contact panel">
                  <CopyRow label="Email" value={BIO_CONTACT.email} />

                  <div className="bio-contact-links">
                    <button
                      type="button"
                      className="bio-linkbtn"
                      disabled
                      aria-disabled="true"
                      data-id="bio-contact-linkedin"
                    >
                      {BIO_CONTACT.linkedinLabel}
                    </button>
                  
                    <button
                      type="button"
                      className="bio-linkbtn"
                      disabled
                      aria-disabled="true"
                      data-id="bio-contact-booking"
                    >
                      {BIO_CONTACT.bookingLabel}
                    </button>
                  </div>


                  <div className="bio-contact-note">Optional: we can add a short form later.</div>
                </div>
              </>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
