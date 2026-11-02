import { FiExternalLink, FiCode, FiImage } from "react-icons/fi";
import { projects } from "../data/portfolioData.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

function LinkButton({ href, icon, label }) {
  if (!href) {
    return (
      <span className="btn btn-small btn-disabled" aria-disabled="true">
        {icon} {label}: coming soon
      </span>
    );
  }
  return (
    <a className="btn btn-small btn-glass" href={href} target="_blank" rel="noopener noreferrer">
      {icon} {label}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Projects"
          title="My Projects"
          subtitle="Things I have built and am building"
        />
        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="glass project-card">
                <div className="project-image">
                  {p.image ? (
                    <img src={p.image} alt={`${p.title} preview`} loading="lazy" width="600" height="340" />
                  ) : (
                    <div className="image-placeholder">
                      <FiImage />
                      <span>Add a project image</span>
                    </div>
                  )}
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  {p.subtitle && <p className="project-sub">{p.subtitle}</p>}
                  <p className="muted">{p.description}</p>
                  <ul className="tags">
                    {p.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div className="btn-row">
                    <LinkButton href={p.liveLink} icon={<FiExternalLink />} label="Live Demo" />
                    <LinkButton href={p.codeLink} icon={<FiCode />} label="Source Code" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
