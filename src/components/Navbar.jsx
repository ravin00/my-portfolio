import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#github-live", label: "Activity" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 lg:hidden ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-tight">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="font-display text-lg font-semibold text-[var(--text)] tracking-tight"
          >
            Ravin<span className="text-[var(--accent)]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/ravin00"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-muted)] transition-colors"
            >
              <FaGithub className="text-base" />
            </a>
            <a
              href="https://www.linkedin.com/in/ravin-bandara-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-muted)] transition-colors"
            >
              <FaLinkedin className="text-base" />
            </a>
            <a href="#contact" className="btn-primary ml-2 py-2 px-4 text-sm">
              Get in touch
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[var(--text)] hover:bg-[var(--bg-muted)] transition-colors"
            aria-label="Open menu"
          >
            <HiMenuAlt4 className="text-xl" />
          </button>
        </div>
      </div>
    </nav>
  );
};
