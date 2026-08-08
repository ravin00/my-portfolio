import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const items = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#github-live", label: "Activity" },
  { href: "#contact", label: "Contact" },
];

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-white transition-opacity duration-300 md:hidden ${
        menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none invisible"
      }`}
    >
      <div className="container-tight h-full flex flex-col">
        <div className="flex items-center justify-between h-16">
          <span className="font-display text-lg font-semibold text-[var(--text)]">
            Ravin<span className="text-[var(--accent)]">.</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-lg text-[var(--text)] hover:bg-[var(--bg-muted)]"
            aria-label="Close menu"
          >
            <HiX className="text-xl" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center gap-2 -mt-16">
          {items.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`font-display text-4xl sm:text-5xl font-semibold text-[var(--text)] tracking-tight py-2 transition-all duration-500 ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 50 + 100}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="pb-8 flex items-center gap-4 border-t border-[var(--border)] pt-6">
          <a
            href="https://github.com/ravin00"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ravin-bandara-/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};
