import { skills } from "../data/portfolio";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-label">What I Know</span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-desc">
          A versatile stack built across 5+ years of professional development,
          from backend systems to cloud integrations.
        </p>

        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.category} className="skills__card">
              <h3 className="skills__card-title">{group.category}</h3>
              <div className="skills__tags">
                {group.items.map((item) => (
                  <span key={item} className="skills__tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
