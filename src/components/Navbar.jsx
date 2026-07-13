import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar container">
        <a href="#home" className="logo">
          Samidjon<span>.</span>
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#education" onClick={closeMenu}>
              Education
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;