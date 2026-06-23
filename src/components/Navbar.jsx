import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-blue-400"
        >
          Anmol's Portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <a
            href="#about"
            className="hover:text-blue-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-blue-400 transition"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="hover:text-blue-400 transition"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="hover:text-blue-400 transition"
          >
            Projects
          </a>

          <a
            href="#profiles"
            className="hover:text-blue-400 transition"
          >
            Profiles
          </a>

          <a
            href="#contact"
            className="hover:text-blue-400 transition"
          >
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <div className="flex flex-col items-center py-6 gap-5">

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400"
            >
              Skills
            </a>

            <a
              href="#experience"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400"
            >
              Experience
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400"
            >
              Projects
            </a>

            <a
              href="#profiles"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400"
            >
              Profiles
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400"
            >
              Contact
            </a>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;