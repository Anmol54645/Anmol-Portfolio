const Projects = () => {
  const projects = [
    {
      title: "Anmol FinTech",
      image: "/fintech.png",
      description:
        "A full-stack Loan Management Platform featuring authentication, loan applications, approval workflows, dashboards, and role-based access control.",
      tech: ["React.js", "Redux Toolkit", "Django", "MySQL"],
      github: "https://github.com/Anmol54645/Anmol-fintech.git",
      live: "https://anmol-fintech.vercel.app/login",
    },
    {
      title: "AnmolTweet",
      image: "/tweet.png",
      description:
        "Twitter-like social media application where users can create, edit, delete and manage tweets with secure authentication.",
      tech: ["Python", "Django", "SQLite"],
      github: "https://github.com/Anmol54645/AnmolTweet",
      live: "https://anmoltweet.onrender.com/tweet",
    },
    {
      title: "Quiz App",
      image: "/quiz.png",
      description:
        "Interactive quiz platform with dynamic questions, score tracking, and responsive user interface.",
      tech: ["React.js", "JavaScript", "CSS"],
      github: "https://github.com/Anmol54645/quiz-app",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Projects
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Some of my featured development projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-800 text-blue-400 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-slate-800 hover:bg-slate-700 py-2 rounded-lg transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;