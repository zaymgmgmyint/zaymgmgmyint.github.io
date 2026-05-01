import { useState } from "react";
import { projects } from "../data/portfolio";
import "./Projects.css";

const typeConfig = {
  "E-Commerce":    { bg: "#fef3c7", fg: "#92400e" },
  "Logistics":     { bg: "#d1fae5", fg: "#065f46" },
  "Healthcare":    { bg: "#fee2e2", fg: "#991b1b" },
  "Live Commerce": { bg: "#ede9fe", fg: "#5b21b6" },
  "FinTech":       { bg: "#ffedd5", fg: "#9a3412" },
  "Transport":     { bg: "#d1fae5", fg: "#065f46" },
  "Entertainment": { bg: "#ede9fe", fg: "#5b21b6" },
  "CRM":           { bg: "#ffedd5", fg: "#9a3412" },
  "Non-Profit":    { bg: "#fee2e2", fg: "#991b1b" },
  "Enterprise":    { bg: "#dbeafe", fg: "#1e40af" },
};

const types = ["All", ...Array.from(new Set(projects.map((p) => p.type)))];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-label">What I've Built</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-desc">
          Real-world applications across e-commerce, healthcare, fintech,
          logistics, and enterprise domains.
        </p>

        <div className="projects__filters">
          {types.map((type) => {
            const count =
              type === "All"
                ? projects.length
                : projects.filter((p) => p.type === type).length;
            return (
              <button
                key={type}
                className={`projects__filter${active === type ? " projects__filter--active" : ""}`}
                onClick={() => setActive(type)}
              >
                {type}
                <span className="projects__filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="projects__grid" key={active}>
          {filtered.map((project, i) => {
            const cfg = typeConfig[project.type] ?? { bg: "#f3f4f6", fg: "#374151" };
            return (
              <div
                className="projects__card"
                key={project.name}
                style={{ "--i": i }}
              >
                <div className="projects__card-top">
                  <span
                    className="projects__type-badge"
                    style={{ background: cfg.bg, color: cfg.fg }}
                  >
                    {project.type}
                  </span>
                  <span className="projects__count">
                    {project.items.length}{" "}
                    {project.items.length === 1 ? "platform" : "platforms"}
                  </span>
                </div>

                <h3 className="projects__name">{project.name}</h3>

                <ul className="projects__deliverables">
                  {project.items.map((item) => (
                    <li key={item} className="projects__deliverable">
                      <span className="projects__dot" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link"
                >
                  View Project
                  <ArrowIcon />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}
