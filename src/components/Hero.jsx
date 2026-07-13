import profileImage from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I&apos;m</p>

          <h1>
            Samidjon <span>Normuradov</span>
          </h1>

          <h2>Junior Front-End Developer</h2>

          <p className="hero-description">
            Software Engineering student at Asia Pacific University with an
            interest in front-end development, web technologies and
            cybersecurity.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button button-primary">
              View Projects
            </a>

            <a href="#contact" className="button button-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={profileImage}
            alt="Samid Normuradov"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;