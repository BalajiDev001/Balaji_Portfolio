function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React.js",
    "Python",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub"
  ];

  return (
    <section id="skills" className="container py-5">
      <h2>Skills</h2>

      <div className="row">
        {skills.map((skill) => (
          <div className="col-md-3 mb-3" key={skill}>
            <div className="card skill-card">
              <div className="card-body text-center">
                {skill}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;