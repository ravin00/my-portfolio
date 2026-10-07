import { useMemo, useState } from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { RevealOnScroll } from "../RevealOnScroll";

const statusStyles = {
  "In Progress": "bg-amber-50 text-amber-700 border-amber-200",
};

const PRIMARY_TECHS = new Set([
  "React",
  "TypeScript",
  "Next.js",
  "ASP.NET Core",
  "FastAPI",
  "AWS",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
]);

const StackTag = ({ name }) => {
  const primary = PRIMARY_TECHS.has(name);
  return (
    <span
      className={
        primary
          ? "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium font-mono bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)]/20"
          : "tag"
      }
    >
      {name}
    </span>
  );
};

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
    architecture: [
      "Local-first: KIND cluster; lifts to Azure (Event Hub, Cosmos DB, Azure ML) unchanged.",
      "ASP.NET Core telemetry pipeline · Python PPO trainer · GitOps via ArgoCD + Terraform.",
    ],
    metrics: [
      "Autonomous cost optimisation with policy-enforced SLO guardrails",
      "Every RL action explained via SHAP - no black-box decisions in prod",
      "47-dim telemetry state vector feeding a PPO agent in near real-time",
      "Local KIND stack lifts to Azure (Event Hub · Cosmos DB · Azure ML) unchanged",
      "GitOps deploy via ArgoCD + Terraform - version-controlled from day one",
      "IEEE paper planned on the RL evaluation results and PCL safety model",
    ],
    stack: [
      "ASP.NET Core",
      "C#",
      "Python",
      "PPO",
      "SHAP",
      "Kubernetes",
      "Terraform",
      "ArgoCD",
      "React",
      "TypeScript",
      "Azure",
    ],
    github: "https://github.com/ravin00/AFIE",
    demo: "",
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
    architecture: [
      "FastAPI service with a Scikit-learn model; TimescaleDB for time-series events.",
      "React frontend; deployed to GKE via Terraform.",
    ],
    metrics: [
      "Intervention lead time reduced through live behavioural signals",
      "Explainable risk model - instructors see the drivers, not just the score",
      "Cohort trend drill-downs for at-a-glance intervention planning",
      "TimescaleDB pipeline scales to years of student event history",
      "Terraform-managed GKE deployment - infra is reproducible from a repo",
      "Model outputs versioned alongside training data for auditability",
    ],
    stack: ["React", "FastAPI", "Scikit-learn", "PostgreSQL", "TimescaleDB", "GKE", "Terraform"],
    github: "https://github.com/VoidEngineers/EduMind",
    demo: "",
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
    architecture: [
      "Spring Boot REST services · PostgreSQL · React + Redux frontend with Tailwind.",
    ],
    metrics: [
      "Community-first threads with structured engagement flows",
      "Modular service layer reused across three+ feature areas",
      "Redux state management keeps client UX predictable across screens",
      "Spring Boot REST layer with clean separation of concerns",
      "PostgreSQL relational schema chosen for reliable multi-entity joins",
      "Tailwind design tokens keep UI consistent across contributors",
    ],
    stack: ["Spring Boot", "React", "Tailwind", "Redux", "PostgreSQL"],
    github: "https://github.com/VoidEngineers/SkillHive-POC",
    demo: "",
    featured: true,
  },
  {
    title: "Self-Service Portal",
    tagline: "Cognite · F25e",
    period: "Aug 2024 - Apr 2025",
    category: "Cloud",
    status: "Shipped",
    summary:
      "Enterprise self-service portal for resource requests and monitoring with automated delivery workflows.",
    impact: "Reduced manual operations by standardising request and release paths.",
    features: [
      "Reusable component library matching an internal design system",
      "GitOps-based automated release paths across environments",
    ],
    stack: ["React", "TypeScript", "FastAPI", "Docker", "Kubernetes", "Argo CD"],
    github: "#",
  },
  {
    title: "ExpenseTracker",
    tagline: "Microservices",
    period: "May 2025 - Jun 2025",
    category: "Backend",
    status: "Shipped",
    summary:
      "Financial management platform with modular .NET services for budgeting and analytics.",
    impact: "Improved maintainability through service-oriented architecture.",
    features: [
      "Independent .NET services per bounded context",
      "React dashboard for budgets and analytics",
    ],
    stack: ["ASP.NET Core", "C#", "PostgreSQL", "React", "Docker", "Kubernetes"],
    github: "https://github.com/ravin00/ExpenseTracker",
  },
  {
    title: "Cafe Management System",
    tagline: "End-to-end operations",
    period: "Apr 2024 - Oct 2025",
    category: "Web",
    status: "Shipped",
    summary:
      "Full cafe operations and order management platform with CI and GitOps support.",
    impact: "Enabled faster, more predictable releases.",
    features: [
      "End-to-end order lifecycle from placement to fulfilment",
      "Redux-managed client state with typed React components",
      "Argo CD-driven release pipeline",
    ],
    stack: ["React", "TypeScript", "Redux", "Docker", "Argo CD"],
    github: "https://github.com/ravin00/Cafe-Management-System",
  },
  {
    title: "Time Sync",
    tagline: "Academic Scheduler",
    period: "Feb 2025 - May 2025",
    category: "Backend",
    status: "Shipped",
    summary:
      "Scheduling platform with real-time collaboration and conflict detection.",
    impact: "Improved timetable reliability and planning visibility.",
    features: [
      "Real-time conflict detection across schedules",
      "Collaborative editing with live sync",
      "Kubernetes deployment for horizontal scale",
    ],
    stack: ["Spring Boot", "React", "MongoDB", "Kubernetes"],
    github: "https://github.com/VoidEngineers/Academic_Scheduler",
  },
];

const filterChips = ["All", "Web", "Backend", "Cloud"];

const CategoryBadge = ({ category }) => (
  <span className="inline-flex items-center text-xs font-medium text-[var(--text-muted)]">
    {category}
  </span>
);

const StatusPill = ({ status }) => {
  const cls = statusStyles[status];
  if (!cls) return null;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border ${cls}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
};

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
    <section id="projects" className="py-24 sm:py-32 bg-[var(--bg-subtle)]">
      <div className="container-tight">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <p className="eyebrow mb-3">Projects</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--text)] mb-4">
              Selected case studies
            </h2>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              Product-focused builds framed with the problem, the approach and the
              outcome.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll stagger>
          <div className="space-y-6 mb-16">
            {featured.map((project) => (
                <article
                  key={project.title}
                  data-stagger-item
                  className="card p-6 sm:p-10 bg-white grid lg:grid-cols-[1.15fr_0.85fr] gap-8"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="tag tag-accent">Featured</span>
                      <CategoryBadge category={project.category} />
                      <StatusPill status={project.status} />
                      <span className="text-xs font-mono text-[var(--text-subtle)] ml-auto">
                        {project.period}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--text)] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] mb-6">
                      {project.tagline}
                    </p>

                    <dl className="space-y-3 mb-6">
                      <div>
                        <dt className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)] mb-1">
                          Problem
                        </dt>
                        <dd className="text-sm text-[var(--text)] leading-relaxed">
                          {project.problem}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)] mb-1">
                          Approach
                        </dt>
                        <dd className="text-sm text-[var(--text)] leading-relaxed">
                          {project.solution}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)] mb-1">
                          Impact
                        </dt>
                        <dd className="text-sm text-[var(--text)] leading-relaxed">
                          {project.impact}
                        </dd>
                      </div>
                    </dl>

                    {project.features && project.features.length > 0 && (
                      <div className="mb-6">
                        <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)] mb-2">
                          Key features
                        </p>
                        <ul className="space-y-1.5">
                          {project.features.map((f) => (
                            <li
                              key={f}
                              className="text-sm text-[var(--text)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-px before:bg-[var(--border-strong)]"
                            >
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.architecture && project.architecture.length > 0 && (
                      <div className="mb-6">
                        <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)] mb-2">
                          Architecture
                        </p>
                        <ul className="space-y-1.5">
                          {project.architecture.map((a) => (
                            <li
                              key={a}
                              className="text-sm text-[var(--text-muted)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-px before:bg-[var(--border-strong)]"
                            >
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.stack.map((tech) => (
                        <StackTag key={tech} name={tech} />
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary py-2 px-3.5 text-sm"
                        >
                          <FaGithub /> Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary py-2 px-3.5 text-sm"
                        >
                          Live <FaArrowUpRightFromSquare className="text-xs" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] p-6">
                    <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)] mb-4">
                      Outcome signals
                    </p>
                    <ul className="space-y-3">
                      {project.metrics.map((metric) => (
                        <li key={metric} className="flex gap-3 text-sm text-[var(--text)]">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[var(--text-subtle)] flex-shrink-0" />
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
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h3 className="font-display text-2xl font-semibold text-[var(--text)]">
              More work
            </h3>
            <div className="flex gap-1 p-1 rounded-lg bg-white border border-[var(--border)]">
              {filterChips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setActiveFilter(chip)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    activeFilter === chip
                      ? "bg-[var(--text)] text-white"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
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
                  className="card p-6 bg-white block group"
                >
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <CategoryBadge category={project.category} />
                    <StatusPill status={project.status} />
                    <span className="text-xs font-mono text-[var(--text-subtle)] ml-auto">
                      {project.period}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h4 className="font-display text-lg font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h4>
                    <FaGithub className="text-[var(--text-subtle)] group-hover:text-[var(--text)] transition-colors flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-sm text-[var(--text-muted)] mb-4">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                    {project.summary}
                  </p>

                  {project.features && project.features.length > 0 && (
                    <ul className="space-y-1 mb-4">
                      {project.features.map((f) => (
                        <li
                          key={f}
                          className="text-xs text-[var(--text)] leading-relaxed pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-px before:bg-[var(--border-strong)]"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="text-sm text-[var(--text)] mb-4">
                    <span className="text-xs font-mono uppercase text-[var(--text-subtle)] mr-2">
                      Impact
                    </span>
                    {project.impact}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <StackTag key={tech} name={tech} />
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
              className="btn-secondary"
            >
              <FaGithub /> View all repositories
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
