import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Feel free to connect with me for opportunities,
          collaborations, or professional discussions.
        </p>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-lg">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Email */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-semibold mb-3">
                <FaEnvelope className="text-blue-400" />
                Email
              </h3>

              <a
                href="mailto:anmol46645@gmail.com"
                className="text-blue-400 hover:text-blue-300 break-all"
              >
                anmol46645@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-semibold mb-3">
                <FaPhone className="text-blue-400" />
                Phone
              </h3>

              <a
                href="tel:+918081146107"
                className="text-blue-400 hover:text-blue-300"
              >
                +91 8081146107
              </a>
            </div>

          </div>

          {/* Social Links */}
          <div className="mt-10 pt-8 border-t border-slate-800">

            <h3 className="text-xl font-semibold text-center mb-6">
              Connect With Me
            </h3>

            <div className="flex flex-wrap justify-center gap-6">

              <a
                href="https://github.com/Anmol54645"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 px-5 py-3 rounded-xl hover:bg-slate-700 transition"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/anmol-kumar-prajapati-4623082b2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 px-5 py-3 rounded-xl hover:bg-slate-700 transition"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="https://leetcode.com/Anmol546"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 px-5 py-3 rounded-xl hover:bg-slate-700 transition"
              >
                <SiLeetcode />
                LeetCode
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;