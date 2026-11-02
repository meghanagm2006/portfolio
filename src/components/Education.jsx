import { FiMapPin, FiCalendar } from "react-icons/fi";
import { education } from "../data/portfolioData.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

// A circular ring that shows a percentage (pure SVG, no library needed).
function PercentRing({ value }) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="ring" role="img" aria-label={`${value} percent`}>
      <svg viewBox="0 0 80 80" width="92" height="92">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#f472b6" />
          </linearGradient>
        </defs>
        <circle cx="40" cy="40" r={radius} className="ring-bg" />
        <circle
          cx="40"
          cy="40"
          r={radius}
          className="ring-fg"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 40 40)"
        />
      </svg>
      <span className="ring-text">{value}%</span>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle eyebrow="Education" title="My Education" subtitle="My academic journey so far" />
        <div className="timeline">
          {education.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="timeline-item">
              <span className="timeline-dot" aria-hidden="true" />
              <article className="glass edu-card">
                <div className="edu-main">
                  <span className="badge">{item.status}</span>
                  <h3>{item.title}</h3>
                  <p className="edu-place">{item.place}</p>
                  <p className="muted">{item.detail}</p>
                  <ul className="meta">
                    <li><FiCalendar /> {item.duration}</li>
                    <li><FiMapPin /> {item.location}</li>
                  </ul>
                </div>
                {item.percentage !== null && <PercentRing value={item.percentage} />}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
