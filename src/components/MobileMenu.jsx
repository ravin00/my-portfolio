import { FaCode, FaEnvelope, FaHome, FaRocket, FaTimes } from "react-icons/fa";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center
                  transition-all duration-500 ease-in-out
                  ${menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
        }`}
      style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 w-12 h-12 cartoon-card bg-white flex items-center justify-center text-2xl hover:rotate-180 transition-transform duration-500"
        aria-label="Close Menu"
      >
        <FaTimes />
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`cartoon-card bg-white px-8 py-4 my-3 text-xl font-funky font-bold
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: menuOpen ? '100ms' : '0ms', transition: 'all 0.5s' }}
      >
        <FaHome className="inline mr-3 text-purple-500" />
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`cartoon-card bg-white px-8 py-4 my-3 text-xl font-funky font-bold
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: menuOpen ? '200ms' : '0ms', transition: 'all 0.5s' }}
      >
        <FaRocket className="inline mr-3 text-cyan-500" />
        About Me
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`cartoon-card bg-white px-8 py-4 my-3 text-xl font-funky font-bold
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: menuOpen ? '300ms' : '0ms', transition: 'all 0.5s' }}
      >
        <FaCode className="inline mr-3 text-green-500" />
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`cartoon-card bg-white px-8 py-4 my-3 text-xl font-funky font-bold
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: menuOpen ? '400ms' : '0ms', transition: 'all 0.5s' }}
      >
        <FaEnvelope className="inline mr-3 text-pink-500" />
        Contact
      </a>
    </div>
  );
};
