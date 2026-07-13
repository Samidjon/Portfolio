import { experience } from "../data/portfolioData";

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-heading">
          <p>Professional background</p>
          <h2>Experience</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-card" key={item.id}>
              <div className="timeline-header">
                <div>
                  <h3>{item.position}</h3>
                  <p className="company-name"><a href="" target="_blank" rel="noopener noreferrer">
                    {item.company}
                  </a></p>
                </div>

                <span>{item.period}</span>
              </div>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;