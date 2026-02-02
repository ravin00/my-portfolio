import { useEffect } from "react";
import { FaBars, FaCoffee, FaGithub, FaLinkedin, FaRocket } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-xl bg-white/80 border-b-4 border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="font-heading text-3xl text-gray-800 cartoon-text-small hover:animate-shake">
            by<span className="text-purple-600">RAVIN</span>
          </a>

          {/* Mobile menu button */}
          <div
            className="w-12 h-12 relative cursor-pointer z-40 md:hidden flex items-center justify-center cartoon-card hover:animate-shake"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <FaBars className="text-xl" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#about" className="sticker hover:bg-yellow-200">
              <FaRocket className="inline mr-2 text-purple-500" />
              About
            </a>
            <a href="#projects" className="sticker hover:bg-cyan-200">
              <FaGithub className="inline mr-2" />
              Projects
            </a>
            <a href="https://buymeacoffee.com" target="_blank" rel="noopener noreferrer" className="sticker hover:bg-amber-200">
              <FaCoffee className="inline mr-2 text-amber-600" />
              Buy Coffee
            </a>
          </div>

          {/* Social + Contact */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://linkedin.com/in/ravinbandara" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 cartoon-card flex items-center justify-center hover:bg-blue-100">
              <FaLinkedin className="text-blue-600" />
            </a>
            <a href="https://github.com/ravin00" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 cartoon-card flex items-center justify-center hover:bg-gray-100">
              <FaGithub />
            </a>
            <a href="#contact" className="btn-funky px-6 py-2 text-gray-800">
              Let's Talk! 💬
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
