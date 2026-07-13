import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section className="section section-dark" id="skills">
      <div className="container">
        <div className="section-heading">
          <p>My toolkit</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;