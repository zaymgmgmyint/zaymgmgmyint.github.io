import { personal } from "../data/portfolio";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo-mark">Z</span>
          <span className="footer__name">{personal.name}</span>
        </div>

        <p className="footer__tagline">
          Senior Software Developer · Myanmar
        </p>

        <div className="footer__links">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            GitHub
          </a>
          <span className="footer__sep">·</span>
          <a
            href={`mailto:${personal.email}`}
            className="footer__link"
          >
            Email
          </a>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} {personal.name}. Built with React & Vite.
        </p>
      </div>
    </footer>
  );
}
