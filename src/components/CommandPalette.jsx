import { useEffect, useMemo, useRef, useState } from "react";

function score(item, terms) {
  const title = item.title.toLowerCase();
  const text = `${item.kind} ${item.text}`.toLowerCase();
  let total = 0;
  for (const t of terms) {
    if (title.startsWith(t)) total += 4;
    else if (title.includes(t)) total += 3;
    else if (text.includes(t)) total += 1;
    else return 0;
  }
  return total;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(null);
  const [failed, setFailed] = useState(false);
  const [active, setActive] = useState(0);
  const dialogRef = useRef(null);
  const inputRef = useRef(null);

  // Cmd/Ctrl+K toggles; "/" opens when not typing in a field.
  useEffect(() => {
    const onKey = (e) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable;
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "/" && !typing && !open) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      inputRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open || index || failed) return;
    fetch("/search.json")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setIndex)
      .catch(() => setFailed(true));
  }, [open, index, failed]);

  const results = useMemo(() => {
    if (!index) return [];
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (terms.length === 0) return index.filter((i) => i.kind === "Page");
    return index
      .map((item) => ({ item, s: score(item, terms) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 8)
      .map((r) => r.item);
  }, [index, query]);

  const go = (item) => {
    setOpen(false);
    if (item.external) window.open(item.url, "_blank", "noopener,noreferrer");
    else window.location.assign(item.url);
  };

  const onInputKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      go(results[active]);
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
    setActive(0);
  };

  return (
    <>
      <button type="button" className="palette-trigger" onClick={() => setOpen(true)} aria-label="Search the site">
        Search <kbd>⌘K</kbd>
      </button>
      <dialog
        ref={dialogRef}
        className="palette"
        aria-label="Search the site"
        onClose={() => setOpen(false)}
        onClick={(e) => e.target === dialogRef.current && setOpen(false)}
      >
        <div className="palette__box">
          <input
            ref={inputRef}
            type="search"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[active] ? `palette-opt-${active}` : undefined}
            placeholder="Search work, wiki and writing"
            value={query}
            onChange={onChange}
            onKeyDown={onInputKey}
            autoComplete="off"
          />
          <ul id="palette-list" role="listbox" className="palette__list">
            {results.map((item, i) => (
              <li
                key={item.url + item.title}
                id={`palette-opt-${i}`}
                role="option"
                aria-selected={i === active}
                className={i === active ? "is-active" : undefined}
                onMouseEnter={() => setActive(i)}
                onClick={() => go(item)}
              >
                <span>{item.title}</span>
                <span className="palette__kind">{item.kind}</span>
              </li>
            ))}
          </ul>
          <p className="palette__status" role="status">
            {failed
              ? "Search isn't available right now."
              : index && query && results.length === 0
                ? "No results. Try another word."
                : ""}
          </p>
        </div>
      </dialog>
    </>
  );
}
