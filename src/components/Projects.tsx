import Link from "next/link";

// Sample project data - replace with your own projects
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    liveDemo: "https://example.com/project1",
    sourceCode: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, task assignment, and progress tracking features.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://example.com/project2",
    sourceCode: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current conditions and forecasts for multiple locations using weather API data.",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
    liveDemo: "https://example.com/project3",
    sourceCode: "https://github.com/yourusername/project3",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="card hover:translate-y-[-5px] transition-all duration-300">
      <div className="w-full h-48 mb-4 rounded-md overflow-hidden bg-gray-300 flex items-center justify-center">
        <span className="text-gray-600 text-lg">{project.title} Screenshot</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {project.description}
      </p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
          Technologies Used:
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-3 mt-auto">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-sm py-2"
          >
            Live Demo
          </a>
        )}
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-sm py-2"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section bg-white dark:bg-dark">
      <div className="container mx-auto p-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Here are some of the projects I've worked on. Each project represents different challenges and solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            See More on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
