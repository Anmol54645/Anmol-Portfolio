const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Python",
        "Django",
        "REST APIs",
      ],
    },
    {
      title: "Database",
      skills: [
        "MySQL",
        "SQLite",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Vercel",
        "Render",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Technical Skills
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 shadow-lg"
            >

              <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-800 px-4 py-2 rounded-full text-sm md:text-base text-gray-200 hover:bg-blue-600 transition duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;