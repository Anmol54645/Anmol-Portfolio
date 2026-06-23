import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 md:py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Education
        </h2>

        <p className="text-center text-gray-400 mb-12">
          My academic background and qualifications.
        </p>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:border-blue-500 transition-all duration-300">

          <div className="flex items-start gap-4">

            <div className="bg-blue-500/10 p-4 rounded-full">
              <FaGraduationCap
                size={28}
                className="text-blue-400"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Bachelor of Technology (B.Tech)
              </h3>

              <p className="text-blue-400 mt-1">
                Computer Science & Engineering (Data Science)
              </p>

              <p className="text-gray-300 mt-3">
                Ajay Kumar Garg Engineering College, Ghaziabad
              </p>

              <p className="text-gray-400 mt-2">
                2023 – 2026
              </p>

              <p className="mt-4 text-lg font-medium">
                CGPA: <span className="text-blue-400">7.51</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;