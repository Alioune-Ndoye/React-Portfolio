

interface Project {
    id: number;
    title: string;
    description: string;
    url: string;
  }
  
export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A sample project description',
      url: '#'
    },
    // Add more projects
  ]

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
        {projects.map(project => (
          <article key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url}>View Project</a>
          </article>
        ))}
       </div>
      </div>
    </section>
  );
};