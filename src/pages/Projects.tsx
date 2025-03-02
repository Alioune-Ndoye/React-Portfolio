interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  imageUrl: string; // Added image URL property
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A sample project description',
      url: '#',
      imageUrl: '/path-to-project-image-1.jpg' // Update with actual image path
    },
    // Add more projects with image URLs
    {
      id: 1,
      title: 'Project 1',
      description: 'A sample project description',
      url: '#',
      imageUrl: '/path-to-project-image-1.jpg' // Update with actual image path
    },

    {
      id: 1,
      title: 'Project 1',
      description: 'A sample project description',
      url: '#',
      imageUrl: '/path-to-project-image-1.jpg' // Update with actual image path
    },

    {
      id: 1,
      title: 'Project 1',
      description: 'A sample project description',
      url: '#',
      imageUrl: '/path-to-project-image-1.jpg' // Update with actual image path
    },

    {
      id: 1,
      title: 'Project 1',
      description: 'A sample project description',
      url: '#',
      imageUrl: '/path-to-project-image-1.jpg' // Update with actual image path
    },

    {
      id: 1,
      title: 'Project 1',
      description: 'A sample project description',
      url: '#',
      imageUrl: '/path-to-project-image-1.jpg' // Update with actual image path
    },
  ];

  return (
    <section className="projects p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
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
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm">{project.description}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};