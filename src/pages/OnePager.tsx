import React from "react";
import { Link } from "react-router-dom";

export default function OnePager() {
  return (
    <div style={{ padding: "40px 20px", color: "#fff", background: "#000", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: 12 }}>One-Pager</h1>
      <p style={{ maxWidth: 720, lineHeight: 1.6, opacity: 0.9 }}>
        This is a placeholder. Once your PDF is ready, we will link it here or trigger a download.
      </p>
      <div style={{ marginTop: 24 }}>
        <Link to="/browse" style={{ color: "#48b0ff" }}>Back to Browse</Link>
      </div>
    </div>
  );
}
