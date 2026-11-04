import { FaArrowDown, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const marqueeItems = [
  "Kubernetes", "Docker", "AWS", "Terraform", "GitHub Actions", "GitLab CI/CD",
  "ArgoCD", "Helm", "React", "TypeScript", "ASP.NET Core", "FastAPI", "PostgreSQL",
];

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-8 overflow-hidden bg-[var(--black)]"
    >
      <div className="container-wide relative z-10 w-full flex-1 flex flex-col justify-center">
        <div
          className="animate-fade-in-up"
          style={{ opacity: 0, animationDelay: "100ms" }}
        >
          <p className="font-mono text-xs text-[var(--white-muted)] uppercase tracking-[0.2em] mb-6">
            Hey, I'm Ravin
          </p>
        </div>

        <h1
          className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[1] tracking-[-0.03em] text-[var(--white)] uppercase mb-6 animate-fade-in-up"
          style={{ opacity: 0, animationDelay: "200ms" }}
        >
          A DevOps Engineer{" "}
          <span className="text-[var(--yellow)]">
            building cloud-native infrastructure and scalable systems.
          </span>
        </h1>

        <div
          className="max-w-2xl mb-10 animate-fade-in-up"
          style={{ opacity: 0, animationDelay: "400ms" }}
        >
          <p className="text-lg text-[var(--white-dim)] leading-relaxed">
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
            className="text-sm font-semibold text-[var(--black)] bg-[var(--yellow)] px-6 py-3 hover:bg-[var(--yellow-dim)] transition-colors uppercase tracking-wider"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-[var(--white)] border-2 border-[var(--white)] px-6 py-3 hover:bg-[var(--white)] hover:text-[var(--black)] transition-colors uppercase tracking-wider"
          >
            Contact me
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a href="https://github.com/ravin00" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--white-muted)] hover:text-[var(--yellow)] transition-colors">
              <FaGithub className="text-lg" />
            </a>
            <a href="https://www.linkedin.com/in/ravin-bandara-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--white-muted)] hover:text-[var(--yellow)] transition-colors">
              <FaLinkedin className="text-lg" />
            </a>
            <a href="https://medium.com/@ravinbandara76" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="text-[var(--white-muted)] hover:text-[var(--yellow)] transition-colors">
              <FaMedium className="text-lg" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="w-full border-t border-[var(--black-border)] pt-6 animate-fade-in-up"
        style={{ opacity: 0, animationDelay: "600ms" }}
      >
        <div className="marquee">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="font-mono text-xs text-[var(--white-muted)] uppercase tracking-wider whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 right-8 hidden md:flex items-center gap-2 font-mono text-[10px] text-[var(--white-muted)] hover:text-[var(--yellow)] transition-colors uppercase tracking-wider"
        aria-label="Scroll down"
      >
        Scroll <FaArrowDown className="text-[8px]" />
      </a>
    </section>
  );
};
