import { useState } from "react";

export default function CopyButton({ text }) {
  const [state, setState] = useState("idle");

  // The async clipboard API needs a secure, focused page; fall back to a hidden textarea.
  const legacyCopy = () => {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  };

  const copy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      ok = legacyCopy();
    }
    setState(ok ? "copied" : "failed");
    setTimeout(() => setState("idle"), 1800);
  };

  const label = { idle: "Copy", copied: "Copied", failed: "Copy failed" }[state];

  return (
    <button type="button" onClick={copy} className="copy-btn" aria-live="polite">
      {label}
    </button>
  );
}
