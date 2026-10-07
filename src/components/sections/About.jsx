import {
  FaAws,
  FaDatabase,
  FaDocker,
  FaJs,
  FaPython,
  FaReact,
  FaTerminal,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
  SiArgo,
  SiDotnet,
  SiFastapi,
  SiGithubactions,
  SiGrafana,
  SiHelm,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiOpentelemetry,
  SiPostgresql,
  SiPrometheus,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import ravinPhoto from "../../assets/WhatsApp Image 2026-02-02 at 03.44.56.jpeg";
import { RevealOnScroll } from "../RevealOnScroll";

const primaryStack = {
  "Cloud & Infrastructure": [
    { name: "AWS", Icon: FaAws, color: "#FF9900" },
    { name: "Azure", Icon: VscAzure, color: "#0078D4" },
    { name: "Docker", Icon: FaDocker, color: "#2496ED" },
    { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
    { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
  ],
  "CI/CD & GitOps": [
    { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
    { name: "ArgoCD", Icon: SiArgo, color: "#EF7B4D" },
    { name: "Helm", Icon: SiHelm, color: "#0F1689" },
    { name: "Buildpacks", Icon: FaDocker, color: "#2496ED" },
  ],
  "Observability": [
    { name: "Prometheus", Icon: SiPrometheus, color: "#E6522C" },
    { name: "Grafana", Icon: SiGrafana, color: "#F46800" },
    { name: "OpenTelemetry", Icon: SiOpentelemetry, color: "#425CC7" },
  ],
};

const supportingGroups = [
  {
    title: "Development",
    items: [
      { name: "React", Icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "ASP.NET Core", Icon: SiDotnet, color: "#512BD4" },
      { name: "Python", Icon: FaPython, color: "#3776AB" },
      { name: "Bash", Icon: FaTerminal, color: "#4EAA25" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "SQL Server", Icon: FaDatabase, color: "#CC2927" },
    ],
  },
];

const experiences = [
  {
    role: "Systems & DevOps Engineer Intern",
    company: "Vizuamatix",
    period: "Oct 2026 - Present",
    type: "Full-time",
    highlights: [
      "Working on systems engineering and DevOps workflows to support product infrastructure.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Creative Software",
    period: "Aug 2024 - Apr 2025",
    type: "Full-time · Hybrid",
    groups: [
      {
        title: "Frontend Development",
        items: [
          "Designed and implemented the frontend for a self-service portal in React, building reusable, scalable components aligned with an internal design system for consistency and maintainability.",
        ],
      },
      {
        title: "UX & Design Collaboration",
        items: [
          "Worked closely with designers and stakeholders in Figma to create wireframes, prototypes and user flows that aligned business objectives with user needs.",
        ],
      },
      {
        title: "Backend Development",
        items: [
          "Contributed to backend services with FastAPI - developing APIs and optimising workflows for seamless integration with the frontend.",
        ],
      },
      {
        title: "DevOps Exposure",
        items: [
          "Assisted the DevOps team and participated in KT sessions to build a strong understanding of modern cloud-native workflows.",
          "Assisted with GitOps workflows using ArgoCD and Terraform for automated, version-controlled deployments and infrastructure provisioning.",
          "Contributed to CI/CD pipelines with GitHub Actions to improve release reliability and delivery speed.",
          "Supported cloud infrastructure tasks on AWS and GCP, including Kubernetes deployments via GitOps pipelines.",
          "Assisted in automating operational workflows with Python and shell scripting.",
          "Worked with Docker, Kubernetes and Helm charts to support scalable, containerised deployments.",
        ],
      },
    ],
    stack: [
      "React",
      "FastAPI",
      "Figma",
      "GitHub Actions",
      "GitOps",
      "ArgoCD",
      "Terraform",
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "Helm",
      "Python",
      "Shell",
      "Git",
      "JIRA",
      "JFrog",
      "Buildpacks",
      "Backstage",
      "CI/CD",
    ],
  },
  {
    role: "External Junior Software Engineer",
    company: "Cognite - Oslo, Norway",
    period: "Aug 2024 - Apr 2025",
    type: "Remote · via Creative Software",
    highlights: [
      "Engaged externally through Creative Software as part of a placement with Cognite in Oslo, Norway.",
      "Contributed to the development and enhancement of Cognite's products in industrial data management and analytics.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions that drive customer value.",
    ],
  },
  {
    role: "Developer",
    company: "MS Club of SLIIT",
    period: "Jun 2024 - Present",
    type: "Community",
    highlights: [
      "Full-stack development on community projects using Next.js.",
      "Knowledge sharing, mentoring and active contribution to events.",
    ],
  },
];

const education = {
  degree: "BSc (Hons) in Information Technology",
  school: "SLIIT - Sri Lanka Institute of Information Technology",
  period: "2022 - 2026",
  specialization: "Specialising in Information Technology",
};

const blogs = [
  { title: "A Cure for the React useState Hell", url: "https://medium.com/@ravinbandara76/a-cure-for-the-react-usestate-hell-c5ad8ae62d83" },
  { title: "The Micro-Services Journey: .NET, Docker, Kubernetes, API Gateways & Observability", url: "https://medium.com/@ravinbandara76/the-micro-services-journey-net-docker-kubernetes-api-gateways-observability-made-simple-db8ba5a82d2d" },
  { title: "Building Microservices with .NET, Docker and Kubernetes", url: "https://medium.com/@ravinbandara76/building-microservices-with-net-docker-and-kubernetes-946d44398af7" },
  { title: "From Zero to Kubernetes in Production", url: "https://medium.com/@ravinbandara76/from-zero-to-kubernetes-in-production-step-by-step-guide-for-setting-up-a-secure-observable-b0bc9f99929b" },
  { title: "GitOps: The DevOps Evolution You Shouldn't Ignore", url: "https://medium.com/@ravinbandara76/gitops-the-devops-evolution-you-shouldnt-ignore-ee2843e6b80b" },
  { title: "Mastering Debounce in React", url: "https://medium.com/@ravinbandara76/mastering-debounce-in-react-optimize-performance-like-a-pro-e1e28d06001d" },
  { title: "React Hydration: A Deep Dive with Practical Examples", url: "https://medium.com/@ravinbandara76/react-hydration-a-deep-dive-with-practical-examples-d9bbc512ff03" },
];

const PrimaryChip = ({ item }) => {
  const Icon = item.Icon;
  return (
    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[var(--border-strong)] text-sm font-medium text-[var(--text)] shadow-sm">
      <Icon className="text-base" style={{ color: item.color }} />
      {item.name}
    </span>
  );
};

const SupportingChip = ({ item }) => {
  const Icon = item.Icon;
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[var(--bg-subtle)] border border-[var(--border)] text-sm text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-colors">
      <Icon className="text-base" style={{ color: item.color }} />
      {item.name}
    </span>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-tight">
        <RevealOnScroll>
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 mb-24">
            <div>
              <p className="eyebrow mb-4">About</p>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--text)] mb-6">
                DevOps engineer who can also build the app.
              </h2>
              <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
                <p>
                  I'm a{" "}
                  <span className="text-[var(--text)] font-medium">DevOps Engineer</span>{" "}
                  with a full-stack development background. I work with{" "}
                  <span className="text-[var(--text)] font-medium">Kubernetes</span>,{" "}
                  <span className="text-[var(--text)] font-medium">Docker</span>,{" "}
                  <span className="text-[var(--text)] font-medium">Terraform</span> and{" "}
                  <span className="text-[var(--text)] font-medium">AWS</span> to
                  build and operate cloud-native infrastructure.
                </p>
                <p>
                  My day-to-day is CI/CD pipelines with GitHub Actions, GitOps
                  workflows through ArgoCD, and containerised deployments on
                  Kubernetes. I also build the applications that run on this
                  infrastructure - React frontends, FastAPI and ASP.NET Core
                  backends, backed by PostgreSQL or MongoDB.
                </p>
                <p>
                  I care about reliability, automation and keeping things
                  simple. If it can be a pipeline, it shouldn't be a manual
                  step.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] aspect-[4/5] max-w-md mx-auto">
                <img
                  src={ravinPhoto}
                  alt="Ravin Bandara"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden sm:block">
                <div className="card-elevated px-4 py-3 bg-white">
                  <p className="text-xs text-[var(--text-subtle)]">Based in</p>
                  <p className="text-sm font-medium text-[var(--text)]">
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll stagger>
          <div className="mb-24">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="eyebrow mb-3">Experience</p>
                <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text)]">
                  Where I've worked
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.role + exp.company}
                  data-stagger-item
                  className="card p-6 sm:p-8 grid md:grid-cols-[220px_1fr] gap-6"
                >
                  <div>
                    <p className="text-xs font-mono text-[var(--text-subtle)] uppercase tracking-wider mb-2">
                      {exp.period}
                    </p>
                    <p className="text-xs text-[var(--text-subtle)]">{exp.type}</p>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-[var(--text)]">
                      {exp.role}
                    </h4>
                    <p className="text-sm text-[var(--accent)] font-medium mb-4">
                      {exp.company}
                    </p>

                    {exp.groups ? (
                      <div className="space-y-5">
                        {exp.groups.map((group) => (
                          <div key={group.title}>
                            <p className="text-xs font-mono uppercase tracking-wider text-[var(--text)] mb-2">
                              {group.title}
                            </p>
                            <ul className="space-y-2">
                              {group.items.map((item, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-[var(--text-muted)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-px before:bg-[var(--border-strong)]"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-2">
                        {exp.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-sm text-[var(--text-muted)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-px before:bg-[var(--border-strong)]"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.stack && (
                      <div className="mt-5 pt-5 border-t border-[var(--border)]">
                        <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)] mb-3">
                          Stack
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.stack.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center px-2 py-0.5 rounded-md bg-[var(--bg-subtle)] border border-[var(--border)] text-xs font-mono text-[var(--text-muted)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mb-24">
            <div className="mb-10">
              <p className="eyebrow mb-3">Education</p>
              <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text)]">
                Academic background
              </h3>
            </div>
            <div className="card p-6 sm:p-8 grid md:grid-cols-[220px_1fr] gap-6">
              <div>
                <p className="text-xs font-mono text-[var(--text-subtle)] uppercase tracking-wider">
                  {education.period}
                </p>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-[var(--text)]">
                  {education.degree}
                </h4>
                <p className="text-sm text-[var(--accent)] font-medium mb-2">
                  {education.school}
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  {education.specialization}
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mb-24">
            <div className="mb-10">
              <p className="eyebrow mb-3">Writing</p>
              <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text)]">
                Blog posts
              </h3>
            </div>
            <div className="space-y-3">
              {blogs.map((blog) => (
                <a
                  key={blog.url}
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-5 flex items-center justify-between gap-4 group block"
                >
                  <span className="text-sm font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {blog.title}
                  </span>
                  <FaArrowUpRightFromSquare className="text-xs text-[var(--text-subtle)] group-hover:text-[var(--accent)] transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div>
            <div className="mb-10">
              <p className="eyebrow mb-3">Tech stack</p>
              <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text)]">
                What I build with
              </h3>
            </div>

            {/* Primary Stack */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--text)]">
                  Primary stack
                </p>
                <span className="tag tag-accent">Specialisation</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(primaryStack).map(([title, items]) => (
                  <div
                    key={title}
                    className="rounded-xl border-2 border-[var(--text)] bg-[var(--accent-soft)] p-6"
                  >
                    <p className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-4">
                      {title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <PrimaryChip key={item.name} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Supporting groups */}
            <div className="grid md:grid-cols-2 gap-4">
              {supportingGroups.map((group) => (
                <div key={group.title} className="card p-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)] mb-4">
                    {group.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <SupportingChip key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
