import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left Side */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Anmol Kumar Prajapati
            </h3>

            <p className="text-gray-400 mt-2">
              Full Stack Developer | React.js | Django | Python
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">

            <a
              href="https://github.com/Anmol54645"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/anmol-kumar-prajapati-4623082b2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://leetcode.com/Anmol546"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition duration-300"
            >
              <SiLeetcode size={24} />
            </a>

            <a
              href="mailto:anmol46645@gmail.com"
              className="text-gray-400 hover:text-red-400 transition duration-300"
            >
              <FaEnvelope size={24} />
            </a>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="mt-8 pt-6 border-t border-slate-800 text-center">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Anmol Kumar Prajapati. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Built with React.js, Tailwind CSS & ❤️
          </p>

          <a
            href="#home"
            className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition"
          >
            ↑ Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;