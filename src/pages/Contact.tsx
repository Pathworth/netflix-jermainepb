import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Contact() {
  const { search } = useLocation();
  const intent = new URLSearchParams(search).get("intent");

  const title =
    intent === "working-session"
      ? "Request a Working Session"
      : "Contact Jermaine";

  return (
    <div style={{ padding: "40px 20px", color: "#fff", background: "#000", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: 12 }}>{title}</h1>
      <p style={{ maxWidth: 720, lineHeight: 1.6, opacity: 0.9 }}>
        This is a placeholder contact page. Next step is adding your form or booking link.
      </p>
      <div style={{ marginTop: 24 }}>
        <Link to="/browse" style={{ color: "#48b0ff" }}>Back to Browse</Link>
      </div>
    </div>
  );
}
