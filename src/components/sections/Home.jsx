import { FaArrowDown, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const marqueeItems = [
  "Kubernetes", "Docker", "AWS", "Terraform", "GitHub Actions", "GitLab CI/CD",
  "ArgoCD", "Helm", "React", "TypeScript", "ASP.NET Core", "FastAPI", "PostgreSQL",
];

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-8 overflow-hidden bg-[var(--white)]"
    >
      <div className="container-wide relative z-10 w-full flex-1 flex flex-col justify-center">
        <div
          className="animate-fade-in-up"
          style={{ opacity: 0, animationDelay: "100ms" }}
        >
          <p className="font-pixel text-sm text-[var(--text-muted)] uppercase tracking-[0.2em] mb-6">
            Hey, I'm Ravin
          </p>
        </div>

        <h1
          className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[1] tracking-tight text-[var(--text)] uppercase mb-6 animate-fade-in-up"
          style={{ opacity: 0, animationDelay: "200ms" }}
        >
          A DevOps Engineer{" "}
          <span className="text-[var(--red)]">
            building cloud-native infrastructure and scalable systems.
          </span>
        </h1>

        <div
          className="max-w-2xl mb-10 animate-fade-in-up"
          style={{ opacity: 0, animationDelay: "400ms" }}
        >
          <p className="text-lg text-[var(--text-dim)] leading-relaxed">
            I build and operate CI/CD pipelines, container orchestration and
            GitOps workflows - with a full-stack development background in
            React, FastAPI and ASP.NET Core.
          </p>
        </div>

        <div
          className="flex flex-wrap items-center gap-4 mb-16 animate-fade-in-up"
          style={{ opacity: 0, animationDelay: "500ms" }}
        >
          <a
            href="#work"
            className="text-sm font-semibold text-[var(--white)] bg-[var(--red)] px-6 py-3 hover:bg-[var(--red-dark)] transition-colors uppercase tracking-wider"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-[var(--text)] border-2 border-[var(--text)] px-6 py-3 hover:bg-[var(--text)] hover:text-[var(--white)] transition-colors uppercase tracking-wider"
          >
            Contact me
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a href="https://github.com/ravin00" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--text-muted)] hover:text-[var(--red)] transition-colors">
              <FaGithub className="text-lg" />
            </a>
            <a href="https://www.linkedin.com/in/ravin-bandara-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--text-muted)] hover:text-[var(--red)] transition-colors">
              <FaLinkedin className="text-lg" />
            </a>
            <a href="https://medium.com/@ravinbandara76" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="text-[var(--text-muted)] hover:text-[var(--red)] transition-colors">
              <FaMedium className="text-lg" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="w-full border-t border-[var(--gray-border)] pt-6 animate-fade-in-up"
        style={{ opacity: 0, animationDelay: "600ms" }}
      >
        <div className="marquee">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="font-pixel text-xs text-[var(--text-muted)] uppercase tracking-wider whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 right-8 hidden md:flex items-center gap-2 font-pixel text-[10px] text-[var(--text-muted)] hover:text-[var(--red)] transition-colors uppercase tracking-wider"
        aria-label="Scroll down"
      >
        Scroll <FaArrowDown className="text-[8px]" />
      </a>
    </section>
  );
};
