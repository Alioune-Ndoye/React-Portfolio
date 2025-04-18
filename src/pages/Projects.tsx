interface Project {
  id: number;
  title: string;
  description: string;
  url: string;         // GitHub repo
  liveUrl: string;     // Live deployment
  imageUrl: string;    // Thumbnail image path
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Weather Dashboard',
      description: 'A weather app showing current and forecast weather using OpenWeather API.',
      url: 'https://github.com/Alioune-Ndoye/Weather-Dashboard',
      liveUrl: 'https://weather5-8zgs.onrender.com/',
      imageUrl: '/images/weather.gif',
    },
    {
      id: 2,
      title: 'Vehicle Builder',
      description: 'Customize and build virtual vehicles with this interactive app.',
      url: 'https://github.com/Alioune-Ndoye/Vehicle-builder',
      liveUrl: '#',
      imageUrl: '/images/car.gif',
    },
    {
      id: 3,
      title: 'Employee Tracker',
      description: 'Command-line interface to manage employee data using MySQL.',
      url: '#',
      liveUrl: 'https://employee-tracker-demo.netlify.app',
      imageUrl: '/images/employee.gif',
    },
    {
      id: 4,
      title: 'HubSearch',
      description: 'Search GitHub users and view profiles using GitHub API.',
      url: 'https://github.com/Alioune-Ndoye/HubSearch',
      liveUrl: 'https://hubsearch-1.onrender.com',
      imageUrl: '/images/hub.gif',
    },
    {
      id: 5,
      title: 'Task Tracker',
      description: 'A full-stack MERN task management app with authentication.',
      url: 'https://github.com/Alioune-Ndoye/Kanban-Unlock',
      liveUrl: 'https://kanban-unlock.onrender.com',
      imageUrl: '/images/lock.gif',
    },
    {
      id: 6,
      title: 'Google Books Search',
      description: 'A simple search interface mimicking Google’s search engine using GOOGLE BOOK API.',
      url: 'https://github.com/Alioune-Ndoye/Crypto-Dashboard',
      liveUrl: 'https://google-books-o5hg.onrender.com/',
      imageUrl: '/images/book.gif',
    },
  ];

  return (
    <section className="projects p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white"
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between text-sm text-blue-500">
                <a href={project.url} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
