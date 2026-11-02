import { FiAward, FiCalendar, FiExternalLink } from "react-icons/fi";
import { certifications } from "../data/portfolioData.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Certifications"
          title="Certifications & Achievements"
          subtitle="Internship certificates, courses and achievements"
        />
        <div className="cert-grid">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <article className="glass cert-card">
                <span className="cert-icon"><FiAward /></span>
                <h3>{c.title}</h3>
                <p className="edu-place">{c.org}</p>
                <p className="muted cert-date"><FiCalendar /> {c.date}</p>
                {c.file ? (
                  <a className="btn btn-small btn-glass" href={c.file} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink /> View Certificate
                  </a>
                ) : (
                  <span className="btn btn-small btn-disabled" aria-disabled="true">
                    Certificate file coming soon
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
