import { useEffect, useState } from "react";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

const items = [
  { id: "home", label: "Home", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "projects", label: "Projects", num: "03" },
  { id: "github-live", label: "Activity", num: "04" },
  { id: "contact", label: "Contact", num: "05" },
];

export const Sidebar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
  };

  return (
    <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-[280px] flex-col bg-white border-r border-[var(--border)] z-30">
      <div className="p-8 pb-6">
        <a
          href="#home"
          onClick={(e) => handleClick(e, "home")}
          className="inline-block"
        >
          <p className="font-display text-xl font-semibold text-[var(--text)] tracking-tight leading-tight">
            Ravin Bandara
          </p>
          <p className="text-sm text-[var(--text-muted)] mt-0.5">
            Software Engineer
          </p>
        </a>

        <div className="flex items-center gap-2 mt-4">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs text-[var(--text-muted)]">
            Open to opportunities
          </span>
        </div>
      </div>

      <div className="h-px bg-[var(--border)] mx-8" />

      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-subtle)] px-4 mb-3">
          Navigate
        </p>
        <ul className="space-y-0.5">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`group flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? "bg-[var(--bg-muted)] text-[var(--text)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-subtle)]"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] transition-colors ${
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--text-subtle)]"
                    }`}
                  >
                    {item.num}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      isActive ? "font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="ml-auto w-1 h-1 rounded-full bg-[var(--accent)]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="h-px bg-[var(--border)] mx-8" />

      <div className="p-8 pt-6 space-y-4">
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "contact")}
          className="btn-primary w-full justify-center text-sm py-2.5"
        >
          Get in touch <FaArrowRight className="text-[10px]" />
        </a>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/ravin00"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-colors"
          >
            <FaGithub className="text-sm" />
          </a>
          <a
            href="https://www.linkedin.com/in/ravin-bandara-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-colors"
          >
            <FaLinkedin className="text-sm" />
          </a>
          <span className="ml-auto text-xs font-mono text-[var(--text-subtle)]">
            Colombo, LK
          </span>
        </div>
      </div>
    </aside>
  );
};
