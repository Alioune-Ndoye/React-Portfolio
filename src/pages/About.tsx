export default function About() {
    return (
      <section className="about">
        <h2>About Me</h2>
        <div className="about-content">
        <div className="bio">
          <p>
            Hi! I'm a passionate developer with expertise in modern web technologies.
            I love creating clean, efficient, and user-friendly applications.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or learning about UX design.
          </p>
        </div>
        
        <div className="skills">
          <h3>Technical Skills</h3>
          <ul>
            <li>JavaScript/TypeScript</li>
            <li>React & Next.js</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>SQL/NoSQL Databases</li>
          </ul>
          <div className="skill-item">Skill Name</div>
        </div>
        </div>
      </section>
    )
  }