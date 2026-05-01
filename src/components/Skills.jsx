import { skills } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import "./Skills.css";

export default function Skills() {
  const [gridRef, inView] = useInView();

  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-label">What I Know</span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-desc">
          A versatile stack built across 5+ years of professional development,
          from backend systems to cloud integrations.
        </p>

        <div ref={gridRef} className={`skills__grid${inView ? " is-visible" : ""}`}>
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
