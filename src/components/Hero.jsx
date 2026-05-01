import { personal, experience } from "../data/portfolio";
import "./Hero.css";

const currentJob = experience.find((e) => e.current);
const techAndTools = ["Java", "Spring Boot", "TypeScript", "React", "MySQL", "PostgreSQL", "Cache", "MQTT", "DevOps"];

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">{personal.title}</p>
          <h1 className="hero__name">{personal.name}</h1>
          <p className="hero__bio">{personal.bio}</p>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">8+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">12+</span>
              <span className="hero__stat-label">Projects Shipped</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">4</span>
              <span className="hero__stat-label">Companies</span>
            </div>
          </div>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Work
            </a>
            <a href="mailto:zaymaungmaungmyint.info@gmail.com" className="btn btn--outline">
              Get In Touch
            </a>
          </div>

          <div className="hero__links">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="hero__social-link"
              aria-label="Email"
            >
              <EmailIcon />
              {personal.email}
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__card-section">
              <p className="hero__card-label">Currently</p>
              <p className="hero__card-company">{currentJob.company}</p>
              <p className="hero__card-role">{currentJob.role}</p>
              <span className="hero__card-status">Full-time</span>
            </div>

            <div className="hero__card-divider" />

            <div className="hero__card-section">
              <p className="hero__card-label">Tech & Tools</p>
              <div className="hero__card-tags">
                {techAndTools.map((t) => (
                  <span key={t} className="hero__card-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="hero__card-divider" />

            <div className="hero__card-section">
              <p className="hero__card-label">Location</p>
              <p className="hero__card-value">{personal.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
