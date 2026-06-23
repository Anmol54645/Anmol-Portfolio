import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const CodingProfiles = () => {
  const profiles = [
    {
      name: "GitHub",
      icon: <FaGithub size={50} />,
      link: "https://github.com/Anmol54645",
      description: "Explore my projects, repositories, and contributions.",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={50} />,
      link: "https://www.linkedin.com/in/anmol-kumar-prajapati-4623082b2",
      description: "Connect with me professionally and view my experience.",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode size={50} />,
      link: "https://leetcode.com/Anmol546",
      description: "Check out my coding practice and problem-solving skills.",
    },
  ];

  return (
    <section id="profiles" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Coding Profiles
        </h2>

        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explore my professional profiles, coding achievements, and development work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              <div className="flex justify-center mb-5 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                {profile.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {profile.name}
              </h3>

              <p className="text-gray-400 text-sm leading-6 mb-5">
                {profile.description}
              </p>

              <span className="text-blue-400 font-medium">
                Visit Profile →
              </span>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;