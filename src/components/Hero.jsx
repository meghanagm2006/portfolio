import { FiDownload, FiFolder, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "../data/portfolioData.js";
import useTyping from "../hooks/useTyping.js";
import ProfilePhoto from "./ProfilePhoto.jsx";

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  const typed = useTyping(personal.roles);

  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <span className="pill">Welcome to my portfolio</span>
          <h1>
            <span className="hero-hi">Hi, I'm</span>
            <span className="gradient-text">{personal.displayName}</span>
          </h1>
          <p className="typing" aria-live="polite">
            <span>{typed}</span>
            <span className="cursor" aria-hidden="true">|</span>
          </p>
          <p className="hero-intro">{personal.introduction}</p>

          <div className="btn-row">
            <a href="#projects" className="btn btn-primary" onClick={scrollTo("projects")}>
              <FiFolder /> View My Projects
            </a>
            <a href={personal.resume} className="btn btn-glass" download>
              <FiDownload /> Download Resume
            </a>
            <a href="#contact" className="btn btn-glass" onClick={scrollTo("contact")}>
              <FiMail /> Contact Me
            </a>
          </div>

          <div className="social-row">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-linkedin"
            >
              <FaLinkedin /> Connect on LinkedIn
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <FaLinkedin />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub profile (opens in a new tab)"
              title={personal.githubIsPlaceholder ? "GitHub link coming soon" : "GitHub"}
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <ProfilePhoto size="large" />
          <div className="float-card float-card-1">
            <strong>3rd Year</strong>
            <span>ISE Student</span>
          </div>
          <div className="float-card float-card-2">
            <strong>Bengaluru</strong>
            <span>Atria Institute of Technology</span>
          </div>
        </div>
      </div>
    </section>
  );
}
