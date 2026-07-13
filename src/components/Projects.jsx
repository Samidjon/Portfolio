import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section className="section section-dark" id="projects">
      <div className="container">
        <div className="section-heading">
          <p>Selected work</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-number">
                {String(project.id).padStart(2, "0")}
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="technology-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>

                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;