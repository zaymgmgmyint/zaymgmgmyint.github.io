import { useSyncExternalStore } from "react";

// Base.astro sets data-theme before paint. The <html> attribute is the source
// of truth; React just subscribes to it.
function subscribe(callback) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

const getTheme = () => document.documentElement.dataset.theme || "dark";
const getServerTheme = () => "dark";

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage can be blocked; the toggle still works for this visit
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      style={{
        background: "none",
        border: "1px solid var(--line)",
        borderRadius: "2px",
        color: "var(--text-muted)",
        cursor: "pointer",
        font: "inherit",
        fontSize: "0.8125rem",
        padding: "0.3rem 0.7rem",
      }}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
