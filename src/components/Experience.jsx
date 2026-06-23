import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Experience
        </h2>

        <p className="text-center text-gray-400 mb-12">
          My professional experience and industry exposure.
        </p>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:border-blue-500 transition-all duration-300">

          <div className="flex flex-col md:flex-row md:items-center gap-4">

            <div className="bg-blue-500/10 p-4 rounded-full w-fit">
              <FaBriefcase
                size={28}
                className="text-blue-400"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                IBM Internship
              </h3>

              <p className="text-blue-400 mt-1">
                Web & Mobile Development Intern
              </p>
            </div>

          </div>

          <div className="mt-6">
            <p className="text-gray-300 leading-8">
              Completed an internship focused on
              Web and Mobile Application Development,
              where I gained practical experience in
              software development, team collaboration,
              and problem-solving.
            </p>

            <p className="text-gray-300 leading-8 mt-4">
              Worked with modern development tools and
              technologies while contributing to projects,
              improving coding practices, and understanding
              industry-standard workflows.
            </p>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li>✔ Developed and enhanced web application features.</li>
              <li>✔ Collaborated in project-based development tasks.</li>
              <li>✔ Improved debugging and problem-solving skills.</li>
              <li>✔ Gained exposure to real-world software development practices.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;