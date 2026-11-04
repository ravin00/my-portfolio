import { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "AFIE",
    tagline: "Autonomous FinOps Intelligence Engine for Kubernetes",
    period: "2026 - Present",
    category: "Cloud",
    status: "In Progress",
    problem:
      "Kubernetes teams overpay for compute because static resource limits and manual tuning can't keep up with dynamic workloads.",
    solution:
      "A reinforcement-learning operator (PPO + SHAP) that observes 47 telemetry features and autonomously right-sizes workloads with explainable, policy-constrained actions.",
    impact:
      "Cuts unnecessary cluster spend while keeping SLOs intact, with transparent recommendations engineers can trust.",
    features: [
      "Continuous cluster telemetry ingested into a 47-dim state vector",
      "PPO reinforcement-learning agent with SHAP-based explainability",
      "Kubernetes operator with a Policy Constraint Layer (PCL) for safe actions",
      "React/TypeScript ops dashboard for real-time decision review",
    ],
    metrics: [
      "Autonomous cost optimisation with policy-enforced SLO guardrails",
      "Every RL action explained via SHAP - no black-box decisions in prod",
      "47-dim telemetry state vector feeding a PPO agent in near real-time",
      "Local KIND stack lifts to Azure (Event Hub, Cosmos DB, Azure ML) unchanged",
      "GitOps deploy via ArgoCD + Terraform - version-controlled from day one",
    ],
    stack: ["ASP.NET Core", "C#", "Python", "PPO", "SHAP", "Kubernetes", "Terraform", "ArgoCD", "React", "TypeScript", "Azure"],
    github: "https://github.com/ravin00/AFIE",
    featured: true,
  },
  {
    title: "EduMind",
    tagline: "Learning Analytics Platform",
    period: "2025 - Present",
    category: "Cloud",
    status: "Shipped",
    problem: "Academic teams lacked early-warning visibility for student risk.",
    solution:
      "Built an explainable analytics workflow with live behaviour tracking and transparent outputs.",
    impact: "Improved intervention readiness with clearer trend visibility.",
    features: [
      "Live behaviour tracking across LMS interactions",
      "Early-warning risk model with explainable outputs",
      "Instructor dashboard for cohort trends and drill-downs",
    ],
    metrics: [
      "Intervention lead time reduced through live behavioural signals",
      "Explainable risk model - instructors see the drivers, not just the score",
      "Terraform-managed GKE deployment - infra is reproducible from a repo",
    ],
    stack: ["React", "FastAPI", "Scikit-learn", "PostgreSQL", "TimescaleDB", "GKE", "Terraform"],
    github: "https://github.com/VoidEngineers/EduMind",
    featured: true,
  },
  {
    title: "SkillHive",
    tagline: "Social Learning Platform",
    period: "2025 - Present",
    category: "Web",
    status: "Shipped",
    problem: "Learners needed a cleaner way to plan and collaborate in one place.",
    solution:
      "Designed a community-first platform with modular service flows and structured engagement.",
    impact: "Peer collaboration quality and consistency improved.",
    features: [
      "Community-first learning threads and skill hubs",
      "Structured engagement flows and challenges",
      "Modular service layer reused across features",
    ],
    metrics: [
      "Community-first threads with structured engagement flows",
      "Modular service layer reused across three+ feature areas",
      "Spring Boot REST layer with clean separation of concerns",
    ],
    stack: ["Spring Boot", "React", "Tailwind", "Redux", "PostgreSQL"],
    github: "https://github.com/VoidEngineers/SkillHive-POC",
    featured: true,
  },
  {
    title: "Self-Service Portal",
    tagline: "Cognite - F25e",
    period: "Aug 2024 - Apr 2025",
    category: "Cloud",
    summary:
      "Enterprise self-service portal for resource requests and monitoring with automated delivery workflows.",
    stack: ["React", "TypeScript", "FastAPI", "Docker", "Kubernetes", "Argo CD"],
    github: "#",
  },
  {
    title: "ExpenseTracker",
    tagline: "Microservices",
    period: "May 2025 - Jun 2025",
    category: "Backend",
    summary:
      "Financial management platform with modular .NET services for budgeting and analytics.",
    stack: ["ASP.NET Core", "C#", "PostgreSQL", "React", "Docker", "Kubernetes"],
    github: "https://github.com/ravin00/ExpenseTracker",
  },
  {
    title: "Cafe Management System",
    tagline: "End-to-end operations",
    period: "Apr 2024 - Oct 2025",
    category: "Web",
    summary:
      "Full cafe operations and order management platform with CI and GitOps support.",
    stack: ["React", "TypeScript", "Redux", "Docker", "Argo CD"],
    github: "https://github.com/ravin00/Cafe-Management-System",
  },
  {
    title: "Time Sync",
    tagline: "Academic Scheduler",
    period: "Feb 2025 - May 2025",
    category: "Backend",
    summary:
      "Scheduling platform with real-time collaboration and conflict detection.",
    stack: ["Spring Boot", "React", "MongoDB", "Kubernetes"],
    github: "https://github.com/VoidEngineers/Academic_Scheduler",
  },
];

const filterChips = ["All", "Web", "Backend", "Cloud"];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const featured = projects.filter((p) => p.featured);
  const other = useMemo(() => {
    const base = projects.filter((p) => !p.featured);
    return activeFilter === "All"
      ? base
      : base.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="py-24 md:py-32 bg-[var(--black-light)]">
      <div className="container-wide">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <p className="section-label mb-4">Work</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--white)] uppercase leading-[1.05] mb-4">
              Selected <span className="text-[var(--green)]">projects</span>
            </h2>
            <p className="text-lg text-[var(--white-dim)] leading-relaxed">
              Product-focused builds framed with the problem, the approach and the outcome.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll stagger>
          <div className="space-y-6 mb-20">
            {featured.map((project) => (
              <article
                key={project.title}
                data-stagger-item
                className="bg-[var(--black)] border border-[var(--black-border)] p-6 md:p-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 hover:border-[var(--green)] transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="font-mono text-[10px] font-semibold text-[var(--black)] bg-[var(--green)] px-2 py-1 uppercase tracking-wider">
                      Featured
                    </span>
                    <span className="font-mono text-[10px] text-[var(--white-muted)] uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.status === "In Progress" && (
                      <span className="font-mono text-[10px] text-[var(--green)] border border-[var(--green)]/30 px-2 py-0.5 uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
                        {project.status}
                      </span>
                    )}
                    <span className="font-mono text-[10px] text-[var(--white-muted)] ml-auto tracking-wider">
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-[var(--white)] uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--white-muted)] mb-6">
                    {project.tagline}
                  </p>

                  <dl className="space-y-3 mb-6">
                    {[
                      ["Problem", project.problem],
                      ["Approach", project.solution],
                      ["Impact", project.impact],
                    ].map(([label, text]) => (
                      <div key={label}>
                        <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--green)] mb-1">
                          {label}
                        </dt>
                        <dd className="text-sm text-[var(--white-dim)] leading-relaxed">
                          {text}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {project.features && (
                    <div className="mb-6">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--green)] mb-2">
                        Key features
                      </p>
                      <ul className="space-y-1.5">
                        {project.features.map((f) => (
                          <li
                            key={f}
                            className="text-sm text-[var(--white-dim)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-px before:bg-[var(--green)]"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] text-[var(--white-muted)] border border-[var(--black-border)] px-2 py-1 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--black)] bg-[var(--green)] px-4 py-2 hover:bg-[var(--green-dim)] transition-colors uppercase tracking-wider"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                  </div>
                </div>

                <div className="border border-[var(--black-border)] bg-[var(--black-light)] p-6">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--green)] mb-4">
                    Outcome signals
                  </p>
                  <ul className="space-y-3">
                    {project.metrics.map((metric) => (
                      <li key={metric} className="flex gap-3 text-sm text-[var(--white-dim)]">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--green)] flex-shrink-0" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll stagger delayStep={50}>
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h3 className="text-2xl font-black text-[var(--white)] uppercase">
              More work
            </h3>
            <div className="flex gap-1">
              {filterChips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setActiveFilter(chip)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                    activeFilter === chip
                      ? "bg-[var(--green)] text-[var(--black)]"
                      : "text-[var(--white-muted)] hover:text-[var(--green)] border border-[var(--black-border)]"
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {other.map((project) => (
              <a
                key={project.title}
                data-stagger-item
                href={project.github !== "#" ? project.github : undefined}
                target={project.github !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="bg-[var(--black)] border border-[var(--black-border)] p-6 block group hover:border-[var(--green)] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-[var(--white-muted)] uppercase tracking-wider">
                    {project.period}
                  </span>
                  <FaGithub className="text-[var(--white-muted)] group-hover:text-[var(--green)] transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-[var(--white)] group-hover:text-[var(--green)] transition-colors uppercase">
                  {project.title}
                </h4>
                <p className="text-sm text-[var(--white-muted)] mb-4">
                  {project.tagline}
                </p>
                <p className="text-sm text-[var(--white-dim)] leading-relaxed mb-4">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] text-[var(--white-muted)] border border-[var(--black-border)] px-2 py-0.5 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/ravin00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--black)] bg-[var(--green)] px-6 py-3 hover:bg-[var(--green-dim)] transition-colors uppercase tracking-wider"
            >
              <FaGithub /> All Repositories
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
