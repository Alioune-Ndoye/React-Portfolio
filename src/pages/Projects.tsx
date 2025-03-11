interface Project {
  id: number;
  url: string;
  imageUrl: string; // URL to the image
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      url: 'https://github.com/Alioune-Ndoye/Weather-Dashboard',
      imageUrl: '/images/weather.gif', // Path from the public folder
    },
    {
      id: 2,
      url: 'https://github.com/Alioune-Ndoye/Vehicle-builder',
      imageUrl: '/images/car.gif',
    },
    {
      id: 3,
      url: 'https://github.com/Alioune-Ndoye/employee-tracker',
      imageUrl: '/images/employee.gif',
    },
    {
      id: 4,
      url: 'https://github.com/Alioune-Ndoye/HubSearch',
      imageUrl: '/images/hub.gif',
    },
  ];

  return (
    <section className="projects p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
            >
              <img
                src={project.imageUrl} // Directly using the image path from public folder
                alt={`Project ${project.id}`}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
