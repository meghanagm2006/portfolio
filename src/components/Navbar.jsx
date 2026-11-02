import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, personal } from "../data/portfolioData.js";
import useActiveSection from "../hooks/useActiveSection.js";

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="nav-inner" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={goTo("home")}>
          <span className="brand-dot">M</span>
          <span className="brand-name">{personal.name}</span>
        </a>

        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <ul className={`nav-links ${open ? "nav-open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? "active" : ""}
                onClick={goTo(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
