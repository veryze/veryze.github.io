import React, { useState, useEffect } from "react";
import "./App.css";

const projects = [
  {
    title: "Personal Website",
    description: "A portfolio website showcasing my projects and skills.",
    link: "https://veryze.github.io/",
  },
  {
    title: "Sample Project 1",
    description: "Description for project 1.",
    link: "#",
  },
  {
    title: "Sample Project 2",
    description: "Description for project 2.",
    link: "#",
  },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App">
      <header className={`header ${scrolled ? "header-small" : ""}`}>
        <div className="logo">veryze</div>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#intro" onClick={() => setMenuOpen(false)}>Intro</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button
          className="hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        <section id="intro" className="section intro">
          <h1 className="fadein">Hi, I'm veryze.</h1>
          <p className="fadein" style={{ animationDelay: "0.2s" }}>
            I'm a university student and developer. Welcome to my minimal portfolio.
          </p>
        </section>

        <section id="projects" className="section projects">
          <h2 className="fadein">Projects</h2>
          <div className="project-list fadein" style={{ animationDelay: "0.2s" }}>
            {projects.map((p, i) => (
              <a
                key={p.title}
                className="project-card"
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2 className="fadein">Contact</h2>
          <p className="fadein" style={{ animationDelay: "0.2s" }}>
            <a href="mailto:managk24@gmail.com">Email me</a> or connect on{" "}
            <a href="https://github.com/veryze" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
