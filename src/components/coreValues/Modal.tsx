import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

type Props = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
};

export default function Modal({ open, title, onClose, children, ariaLabel }: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab") return;

      const root = panelRef.current;
      if (!root) return;

      const focusables = Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    setTimeout(() => panelRef.current?.focus(), 0);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="cvModalOverlay" role="presentation" onMouseDown={onClose}>
      <div
        className="cvModalPanel"
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel || title || "Modal"}
        tabIndex={-1}
        ref={panelRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="cvModalHeader">
          <div className="cvModalTitle">{title}</div>
          <button className="cvIconBtn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>
        <div className="cvModalBody">{children}</div>
      </div>
    </div>,
    document.body
  );
}
