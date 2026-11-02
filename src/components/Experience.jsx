import { FiCheckCircle } from "react-icons/fi";
import { experience } from "../data/portfolioData.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Experience"
          title="Experience"
          subtitle="Volunteering and self-learning"
        />
        <div className="exp-grid">
          {experience.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <article className="glass exp-card">
                <span className="badge">{item.period}</span>
                <h3>{item.title}</h3>
                <p className="edu-place">{item.org}</p>
                <ul className="check-list">
                  {item.points.map((p) => (
                    <li key={p}>
                      <FiCheckCircle /> <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
