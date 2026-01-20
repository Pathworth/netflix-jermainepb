import React from "react";

type Props = { children: React.ReactNode };
type State = { hasError: boolean; error?: Error };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // This prints a readable stack in the console
    console.error("ErrorBoundary caught:", error);
    console.error(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, color: "#fff", background: "#000", minHeight: "100vh" }}>
          <h1 style={{ marginBottom: 12 }}>App crashed</h1>
          <pre style={{ whiteSpace: "pre-wrap", opacity: 0.9 }}>
            {String(this.state.error)}
          </pre>
          <p style={{ marginTop: 16, opacity: 0.8 }}>
            Open DevTools Console for full details.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
