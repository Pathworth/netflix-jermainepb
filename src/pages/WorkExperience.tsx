import React, { useEffect, useMemo, useRef, useState } from "react";
import { getFeaturedSeason, getSeasonById, workSeasons, WorkSeason } from "../data/workExperience";
import "./WorkExperience.css";

import nfPoster01 from "../images/NF Poster Holder 01.png";
import nfPoster02 from "../images/NF Poster Holder 02.png";

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
  if (p === l) return "";
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
