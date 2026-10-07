import { FaArrowRight, FaAws, FaGithub, FaJs, FaLinkedin, FaReact } from "react-icons/fa";
import { HiArrowDownRight } from "react-icons/hi2";
import {
  SiDocker,
  SiDotnet,
  SiFastapi,
  SiGithubactions,
  SiKubernetes,
  SiPostgresql,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

const techStack = [
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
  { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "ASP.NET Core", Icon: SiDotnet, color: "#512BD4" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
];

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />

      <div className="container-tight relative z-10 w-full">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-white text-xs font-medium text-[var(--text-muted)] mb-8 animate-fade-in-up"
            style={{ opacity: 0 }}
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for new opportunities
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-[var(--text)] tracking-tight leading-[1.05] mb-6 flex flex-wrap gap-x-4">
            {"Ravin Bandara".split(" ").map((word, i) => (
              <span
                key={word}
                className="inline-block animate-fade-in-up"
                style={{ opacity: 0, animationDelay: `${120 + i * 90}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            className="text-xl sm:text-2xl text-[var(--text-muted)] leading-relaxed mb-4 max-w-2xl animate-fade-in-up"
            style={{ opacity: 0, animationDelay: "220ms" }}
          >
            DevOps Engineer with a full-stack development background in{" "}
            <span className="text-[var(--text)] font-medium">Kubernetes</span>,{" "}
            <span className="text-[var(--text)] font-medium">AWS</span> and{" "}
            <span className="text-[var(--text)] font-medium">GitOps</span>.
          </p>

          <p
            className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-10 max-w-2xl animate-fade-in-up"
            style={{ opacity: 0, animationDelay: "300ms" }}
          >
            I build and operate cloud-native infrastructure - CI/CD pipelines,
            container orchestration and GitOps workflows.
          </p>

          <div
            className="flex flex-wrap items-center gap-3 mb-12 animate-fade-in-up"
            style={{ opacity: 0, animationDelay: "380ms" }}
          >
            <a href="#projects" className="btn-primary">
              View my work <FaArrowRight className="text-xs" />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
            <div className="flex items-center gap-1 ml-2">
              <a
                href="https://github.com/ravin00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-muted)] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ravin-bandara-/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-muted)] transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ opacity: 0, animationDelay: "460ms" }}
          >
            <p className="eyebrow mb-4">Primary stack</p>
            <div className="marquee">
              <div className="marquee-track">
                {[...techStack, ...techStack].map((tech, i) => {
                  const Icon = tech.Icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors whitespace-nowrap"
                    >
                      <Icon className="text-xl" style={{ color: tech.color }} />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="hidden md:flex absolute bottom-8 right-6 items-center gap-2 text-xs font-mono text-[var(--text-subtle)] hover:text-[var(--text)] transition-colors"
        >
          Scroll <HiArrowDownRight />
        </a>
      </div>
    </section>
  );
};
