import { FiMapPin, FiBookOpen, FiAward } from "react-icons/fi";
import { personal } from "../data/portfolioData.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";
import ProfilePhoto from "./ProfilePhoto.jsx";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle eyebrow="About" title="About Me" subtitle="A little about who I am" />
        <Reveal>
          <div className="glass about-card">
            <div className="about-photo">
              <ProfilePhoto size="medium" />
            </div>
            <div className="about-body">
              <h3>Aspiring software developer</h3>
              <p>{personal.about}</p>
              <ul className="chips">
                <li><FiBookOpen /> {personal.branch}</li>
                <li><FiAward /> {personal.year}</li>
                <li><FiMapPin /> {personal.location}</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
