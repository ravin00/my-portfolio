import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
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
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--black)]/95 backdrop-blur-md border-b border-[var(--black-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[var(--yellow)]"
          >
            RAVIN BANDARA<span className="text-[var(--white-muted)]">&reg;</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--white-dim)] hover:text-[var(--yellow)] transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-semibold text-[var(--black)] bg-[var(--yellow)] px-5 py-2.5 hover:bg-[var(--yellow-dim)] transition-colors"
            >
              Let's Talk
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--white)]"
            aria-label="Open menu"
          >
            <HiMenuAlt4 className="text-xl" />
          </button>
        </div>
      </div>
    </nav>
  );
};
