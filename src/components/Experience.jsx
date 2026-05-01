import { experience, education, certifications } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import "./Experience.css";

export default function Experience() {
  const [layoutRef, inView] = useInView();

  return (
    <section id="experience" className="experience">
      <div className="container">
        <span className="section-label">My Journey</span>
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-desc">
          A decade of growth — from OJT engineer to senior developer across
          multiple industries and tech stacks.
        </p>

        <div ref={layoutRef} className={`experience__layout${inView ? " is-visible" : ""}`}>
          {/* Work */}
          <div className="experience__col">
            <h3 className="experience__col-heading">
              <WorkIcon /> Work History
            </h3>
            <div className="experience__timeline">
              {experience.map((job, i) => (
                <div key={i} className="timeline__item">
                  <div className="timeline__dot-wrap">
                    <div className={`timeline__dot${job.current ? " timeline__dot--current" : ""}`} />
                    {i < experience.length - 1 && (
                      <div className="timeline__line" />
                    )}
                  </div>
                  <div className="timeline__content">
                    <span className="timeline__period">{job.period}</span>
                    <h4 className="timeline__role">{job.role}</h4>
                    <p className="timeline__company">{job.company}</p>
                    {job.current && (
                      <span className="timeline__badge">Current</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="experience__col">
            <h3 className="experience__col-heading">
              <EduIcon /> Education
            </h3>
            <div className="experience__timeline">
              {education.map((edu, i) => (
                <div key={i} className="timeline__item">
                  <div className="timeline__dot-wrap">
                    <div className="timeline__dot timeline__dot--edu" />
                    {i < education.length - 1 && (
                      <div className="timeline__line" />
                    )}
                  </div>
                  <div className="timeline__content">
                    <span className="timeline__period">{edu.year}</span>
                    <h4 className="timeline__role">{edu.degree}</h4>
                    <p className="timeline__company">{edu.institution}</p>
                    {edu.current && (
                      <span className="timeline__badge">In Progress</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="experience__col-heading experience__col-heading--certs">
              <CertIcon /> Certifications
            </h3>
            <div className="certs__list">
              {certifications.map((cert) => (
                <span key={cert} className="certs__badge">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function EduIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}

function CertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}
