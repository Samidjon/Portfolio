"use client";

import { useState, type ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, AtSign, Check, Code2,
  Github, Globe2, Heart, Linkedin, Mail, Menu, Sparkles, X,
} from "lucide-react";
import { projects, site, skills } from "@/data/site";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Samid, go to home">
      <span className="brand-mark">s<span>.</span></span>
      <span className="brand-name">samid<span className="brand-spark">✳</span></span>
    </a>
  );
}

function Mascot() {
  return (
    <div className="mascot-stage" aria-label="Illustration of a friendly developer mascot" role="img">
      <div className="mascot-halo" />
      <motion.div className="float-chip chip-code" animate={{ y: [0, -10, 0], rotate: [-7, -2, -7] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <Code2 size={24} strokeWidth={2.5} />
      </motion.div>
      <motion.div className="float-chip chip-star" animate={{ y: [0, 12, 0], rotate: [8, 20, 8] }} transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}>✦</motion.div>
      <motion.div className="float-chip chip-heart" animate={{ y: [0, -8, 0], rotate: [5, -6, 5] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}><Heart size={22} fill="currentColor" /></motion.div>
      <motion.div className="mascot-art" animate={{ y: [0, -5, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
        <img src="/mascot.svg" alt="" />
      </motion.div>
      <div className="mascot-note note-left"><span className="note-dot" /> always curious</div>
      <div className="mascot-note note-right"><Sparkles size={15} /> shipping ideas</div>
      <div className="mascot-ground" />
    </div>
  );
}

function ProjectArtwork({ visual }: { visual: string }) {
  const glyphs: Record<string, string> = {
    math: "× ÷ +", hacker: "{ }", studio: "✳", football: "⚽", sirius: "S", security: "⌁", antivirus: "✓",
  };
  return (
    <div className={`project-art art-${visual}`} aria-hidden="true">
      <div className="art-glow" />
      <span className="art-orbit orbit-one" />
      <span className="art-orbit orbit-two" />
      <div className="art-window">
        <div className="window-dots"><i /><i /><i /></div>
        <div className="window-glyph">{glyphs[visual]}</div>
        {visual === "hacker" && <div className="terminal-lines"><i /><i /><i /></div>}
        {visual === "football" && <div className="pitch-line" />}
        {visual === "math" && <div className="math-badge">XP +120</div>}
        {visual === "antivirus" && <div className="shield-check">✓</div>}
      </div>
      <span className="art-sticker">{visual === "math" ? "LEVEL UP!" : visual === "security" ? "SCAN READY" : visual === "football" ? "TEAM MODE" : "MADE WITH ♥"}</span>
    </div>
  );
}

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>;
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="home">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <div className="container nav-wrap">
          <Brand />
          <button className="mobile-menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            {[ ["Home", "#home"], ["About", "#about"], ["Projects", "#projects"], ["Skills", "#skills"], ["Contact", "#contact"] ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>{label}</a>
            ))}
          </nav>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
        </div>
      </header>

      <section className="hero section-pad">
        <div className="container hero-grid">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
            <div className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEERING STUDENT <span className="eyebrow-spark">✳</span></div>
            <h1>Hey, I&apos;m<br /><span className="name-highlight">Samid<span className="name-period">.</span></span></h1>
            <p className="hero-role">Software Engineer <span className="role-star">✳</span><br className="role-break" /> &amp; <span className="purple-text">Creative Developer</span></p>
            <p className="hero-description">I build playful web experiences, useful tools and little ideas that grow into real products. Currently studying Software Engineering at APU and always learning something new.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-light" href="#about">A little about me <ArrowDown size={16} /></a>
            </div>
            <div className="hero-socials">
              <span>FIND ME AROUND THE WEB</span>
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              {site.linkedin ? <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a> : null}
              <button onClick={copyEmail} aria-label="Copy email address" title={copied ? "Email copied" : "Copy email address"}>{copied ? <Check size={18} /> : <Mail size={18} />}</button>
              {copied && <span className="copy-hint">Email copied!</span>}
            </div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}>
            <div className="hero-scribble scribble-top">✳</div>
            <div className="hero-scribble scribble-bottom">〰</div>
            <div className="hero-sticker sticker-hello">hello there! <span>✌</span></div>
            <Mascot />
            <div className="hero-caption"><span className="caption-arrow">↙</span><span>BUILD<br />THINGS<br /><b>WITH HEART.</b></span></div>
          </motion.div>
        </div>
        <div className="container quick-facts">
          <motion.div className="fact-card fact-lilac" whileHover={{ y: -4, rotate: -1 }}><span className="fact-icon">✦</span><div><strong>Curious by default</strong><span>Learning new things daily</span></div></motion.div>
          <motion.div className="fact-card fact-yellow" whileHover={{ y: -4, rotate: 1 }}><span className="fact-icon">⌘</span><div><strong>Web + software</strong><span>From pixels to logic</span></div></motion.div>
          <motion.div className="fact-card fact-mint" whileHover={{ y: -4, rotate: -1 }}><span className="fact-icon">♡</span><div><strong>Made with care</strong><span>Details matter to me</span></div></motion.div>
        </div>
      </section>

      <section className="projects-section section-pad" id="projects">
        <div className="container">
          <motion.div className="section-heading projects-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <div><SectionLabel number="01">THE THINGS I MAKE</SectionLabel><h2>Some little <span className="highlight-underline">big ideas.</span></h2><p className="section-subtitle">A few projects from my corner of the internet. Each one taught me something new.</p></div>
            <a className="text-link" href={site.github} target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={17} /></a>
          </motion.div>
          <div className="project-grid">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article key={project.number} className="project-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={reveal} transition={{ delay: (index % 3) * 0.07 }} whileHover={{ y: -7 }}>
                  <ProjectArtwork visual={project.visual} />
                  <div className="project-card-body">
                    <div className="project-meta"><span>{project.number} / {project.category}</span><span className="project-icon"><Icon size={17} /></span></div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <div className="project-footer">
                      {project.href ? <a href={project.href} target="_blank" rel="noreferrer">{project.hrefLabel ?? "Explore project"}<ArrowUpRight size={15} /></a> : <span className="project-note">{project.note}</span>}
                      <span className="project-footer-spark">✳</span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="container about-grid">
          <motion.div className="about-visual" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <div className="about-blob" />
            <div className="about-sun">✦</div>
            <div className="about-note"><span>MY CURRENT QUEST</span><strong>Make useful things.<br />Keep it playful.</strong><span className="note-doodle">↘</span></div>
            <img src="/mascot.svg" alt="Samid's playful developer mascot" />
            <div className="about-sticker">100%<br /><b>LEARNING MODE</b></div>
          </motion.div>
          <motion.div className="about-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <SectionLabel number="02">A LITTLE INTRO</SectionLabel>
            <h2>Developer brain.<br /><span className="purple-text">Curious heart.</span></h2>
            <p>I&apos;m Samid, a Software Engineering student at Asia Pacific University in Malaysia. I enjoy turning ideas into interactive websites, games and tools that solve real problems.</p>
            <p>I like switching between creative frontend work and technical challenges — from polished interfaces to Python experiments and cybersecurity projects. I&apos;m still learning, always building, and excited to work with people who care about what they make.</p>
            <div className="about-values">
              <div><span className="value-icon value-peach"><Code2 size={18} /></span><span><b>Build to learn</b><small>Small experiments, real progress</small></span></div>
              <div><span className="value-icon value-blue"><Globe2 size={18} /></span><span><b>Think in systems</b><small>Curiosity beyond the interface</small></span></div>
              <div><span className="value-icon value-green"><Heart size={18} /></span><span><b>Care about details</b><small>Useful, friendly experiences</small></span></div>
            </div>
            <a className="button button-dark about-button" href="#contact">Let&apos;s build something <ArrowRight size={17} /></a>
          </motion.div>
        </div>
      </section>

      <section className="skills-section section-pad" id="skills">
        <div className="container">
          <motion.div className="section-heading skills-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <div><SectionLabel number="03">MY TOOLBOX</SectionLabel><h2>Tools of the <span className="highlight-underline highlight-blue">trade.</span></h2><p className="section-subtitle">Technologies I&apos;ve used in projects, coursework and experiments.</p></div>
            <div className="skills-doodle"><span>Always curious</span><ArrowDownRight size={28} /></div>
          </motion.div>
          <div className="skill-grid">
            {skills.map((skill, index) => (
              <motion.div key={skill.name} className="skill-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.035, duration: 0.35 }} whileHover={{ y: -5, rotate: index % 2 === 0 ? -1.5 : 1.5 }}>
                <span className={`skill-symbol ${skill.color}`}>{skill.name === "React" ? "⚛" : skill.name === "Next.js" ? "N" : skill.name === "TypeScript" ? "TS" : skill.name === "JavaScript" ? "JS" : skill.name === "Tailwind CSS" ? "≈" : skill.name === "Motion" ? "↝" : skill.name === "Node.js" ? "⬡" : skill.name === "Python" ? "Py" : skill.name === "SQL / MySQL" ? "▤" : skill.name === "Supabase" ? "◕" : skill.name === "Git & GitHub" ? "⌘" : "◇"}</span>
                <span className="skill-name">{skill.name}</span><span className="skill-group">{skill.group}</span>
              </motion.div>
            ))}
          </div>
          <div className="learning-banner"><div className="learning-face">✺</div><div><strong>There&apos;s always something new to learn.</strong><span>Currently exploring better UI motion, product thinking and security tooling.</span></div><span className="learning-arrow">↗</span></div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="container">
          <motion.div className="contact-card" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65 }}>
            <div className="contact-spark contact-spark-a">✳</div><div className="contact-spark contact-spark-b">✦</div>
            <div className="contact-content"><SectionLabel number="04">YOUR TURN</SectionLabel><h2>Got a fun idea?<br /><span>Let&apos;s make it real.</span></h2><p>I&apos;m open to internships, freelance projects and collaborations. Tell me what you&apos;re working on.</p>
              <div className="contact-actions"><a className="button button-lemon" href={`mailto:${site.email}`}> <Mail size={17} /> Send me an email <ArrowUpRight size={16} /></a><a className="button button-outline-light" href={site.github} target="_blank" rel="noreferrer"><Github size={17} /> Find me on GitHub</a></div>
              <button className="copy-email" onClick={copyEmail}>{copied ? <Check size={15} /> : <AtSign size={15} />}{copied ? "Email copied to clipboard" : site.email}</button>
            </div>
            <div className="contact-orbit"><div className="orbit-ring" /><div className="orbit-planet">☺</div><div className="orbit-star">✦</div><div className="orbit-label">GOOD<br />IDEAS<br />AHEAD</div></div>
          </motion.div>
          <footer className="site-footer"><Brand /><span>Designed with curiosity & a little bit of chaos.</span><a href="#home">Back to top ↑</a><small>© {new Date().getFullYear()} Samid</small></footer>
        </div>
      </section>
    </main>
  );
}
