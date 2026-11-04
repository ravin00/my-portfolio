import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const items = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-[var(--red)] transition-opacity duration-300 md:hidden ${
        menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none invisible"
      }`}
    >
      <div className="px-4 h-full flex flex-col">
        <div className="flex items-center justify-between h-16">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[var(--green)]">
            RAVIN BANDARA<span className="text-[var(--white-muted)]">&reg;</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-[var(--white)]"
            aria-label="Close menu"
          >
            <HiX className="text-xl" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center gap-1 -mt-16">
          {items.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-5xl font-black uppercase text-[var(--white)] tracking-tight py-1 transition-all duration-500 hover:text-[var(--green)] ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 50 + 100}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="pb-8 flex items-center gap-6 border-t border-[var(--white)]/20 pt-6">
          <a href="https://github.com/ravin00" target="_blank" rel="noopener noreferrer" className="text-[var(--white)]/60 hover:text-[var(--green)] transition-colors">
            <FaGithub className="text-lg" />
          </a>
          <a href="https://www.linkedin.com/in/ravin-bandara-/" target="_blank" rel="noopener noreferrer" className="text-[var(--white)]/60 hover:text-[var(--green)] transition-colors">
            <FaLinkedin className="text-lg" />
          </a>
          <a href="https://medium.com/@ravinbandara76" target="_blank" rel="noopener noreferrer" className="text-[var(--white)]/60 hover:text-[var(--green)] transition-colors">
            <FaMedium className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};
