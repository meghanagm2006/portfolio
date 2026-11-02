import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase,
  FaFileWord, FaFilePowerpoint, FaGitAlt, FaComments, FaUsers,
  FaPuzzlePiece, FaRegClock, FaBolt,
} from "react-icons/fa";
import { SiC } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { skills } from "../data/portfolioData.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

const icons = {
  c: SiC, python: FaPython, java: FaJava, html: FaHtml5, css: FaCss3Alt,
  js: FaJs, react: FaReact, db: FaDatabase, word: FaFileWord,
  ppt: FaFilePowerpoint, code: VscVscode, git: FaGitAlt, chat: FaComments,
  team: FaUsers, puzzle: FaPuzzlePiece, clock: FaRegClock, bolt: FaBolt,
};

function SkillGroup({ title, items, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="skill-group">
        <h3>{title}</h3>
        <ul className="skill-grid">
          {items.map((s) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.name} className="glass skill-card">
                <span className="skill-icon">{Icon && <Icon />}</span>
                <span className="skill-name">{s.name}</span>
                {s.level && <span className="skill-level">{s.level}</span>}
              </li>
            );
          })}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Skills"
          title="Skills & Tools"
          subtitle="What I know and what I am still learning"
        />
        <SkillGroup title="Technical Skills" items={skills.technical} />
        <SkillGroup title="Tools" items={skills.tools} delay={80} />
        <SkillGroup title="Soft Skills" items={skills.soft} delay={160} />
      </div>
    </section>
  );
}
