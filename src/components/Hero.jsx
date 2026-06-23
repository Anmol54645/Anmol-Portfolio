import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Profile Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="/profile.jpeg"
          alt="Anmol Kumar Prajapati"
          className="w-36 h-36 md:w-52 md:h-52 rounded-full mx-auto border-4 border-blue-500 object-cover shadow-lg"
        />

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold mt-8"
        >
          Anmol Kumar Prajapati
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-3xl text-blue-400 mt-4 font-semibold"
        >
          Full Stack Developer
        </motion.p>

        {/* Skills */}
        <p className="max-w-2xl mx-auto mt-6 text-gray-300 text-base md:text-lg leading-8">
          Passionate Full Stack Developer skilled in
          HTML, CSS, JavaScript, React.js, Python,
          Django, MySQL, REST APIs and modern web technologies.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="/Anmol_Resume_.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-xl font-medium"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="border border-blue-500 hover:bg-blue-500 hover:text-white transition px-8 py-3 rounded-xl font-medium"
          >
            View Projects
          </a>

        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-10">

          <a
            href="https://github.com/Anmol54645"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={30} />
          </a>

          <a
            href="https://www.linkedin.com/in/anmol-kumar-prajapati-4623082b2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <FaLinkedin size={30} />
          </a>

          <a
            href="https://leetcode.com/Anmol546"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            <SiLeetcode size={30} />
          </a>

        </div>

        {/* Contact Info */}
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-gray-400">

          <a
            href="mailto:anmol46645@gmail.com"
            className="hover:text-blue-400 transition"
          >
            📧 anmol46645@gmail.com
          </a>

          <a
            href="tel:+918081146107"
            className="hover:text-blue-400 transition"
          >
            📞 +91 8081146107
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;