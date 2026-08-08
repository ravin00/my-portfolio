import {
  FaAws,
  FaDatabase,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaJava,
  FaJira,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaTerminal,
} from "react-icons/fa";
import {
  SiArgo,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiGithubactions,
  SiHelm,
  SiJfrog,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiSharp,
  SiSpringboot,
  SiStorybook,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import ravinPhoto from "../../assets/WhatsApp Image 2026-02-02 at 03.44.56.jpeg";
import { RevealOnScroll } from "../RevealOnScroll";

const primaryStack = {
  Frontend: [
    { name: "React", Icon: FaReact, color: "#61DAFB" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  ],
  Backend: [
    { name: "C#", Icon: SiSharp, color: "#512BD4" },
    { name: "ASP.NET Core", Icon: SiDotnet, color: "#512BD4" },
    { name: "Entity Framework Core", Icon: FaDatabase, color: "#512BD4" },
  ],
};

const supportingGroups = [
  {
    title: "Cloud & DevOps",
    items: [
      { name: "Azure", Icon: VscAzure, color: "#0078D4" },
      { name: "Docker", Icon: FaDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
      { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
      { name: "Helm", Icon: SiHelm, color: "#0F1689" },
      { name: "ArgoCD", Icon: SiArgo, color: "#EF7B4D" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "SQL Server", Icon: FaDatabase, color: "#CC2927" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    ],
  },
];

const tertiaryGroups = [
  {
    title: "Additional experience",
    items: [
      { name: "Java", Icon: FaJava, color: "#ED8B00" },
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
      { name: "Python", Icon: FaPython, color: "#3776AB" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
      { name: "Express", Icon: SiExpress, color: "#000000" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "Bash", Icon: FaTerminal, color: "#4EAA25" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", Icon: FaGitAlt, color: "#F05032" },
      { name: "Linux", Icon: FaLinux, color: "#000000" },
      { name: "JIRA", Icon: FaJira, color: "#0052CC" },
      { name: "Figma", Icon: FaFigma, color: "#F24E1E" },
      { name: "Storybook", Icon: SiStorybook, color: "#FF4785" },
      { name: "JFrog", Icon: SiJfrog, color: "#41BF47" },
    ],
  },
];

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Creative Software",
    period: "Aug 2024 — Apr 2025",
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
          "Contributed to backend services with FastAPI — developing APIs and optimising workflows for seamless integration with the frontend.",
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
    company: "Cognite — Oslo, Norway",
    period: "Aug 2024 — Apr 2025",
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
    period: "Jun 2024 — Present",
    type: "Community",
    highlights: [
      "Full-stack development on community projects using Next.js.",
      "Knowledge sharing, mentoring and active contribution to events.",
    ],
  },
];

const education = {
  degree: "BSc (Hons) in Information Technology",
  school: "SLIIT — Sri Lanka Institute of Information Technology",
  period: "2022 — 2026",
  specialization: "Specialising in Information Technology",
};

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

const AdditionalChip = ({ item }) => {
  const Icon = item.Icon;
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs text-[var(--text-subtle)] hover:text-[var(--text-muted)] transition-colors">
      <Icon className="text-xs opacity-70" style={{ color: item.color }} />
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
                Focused on React and ASP.NET Core.
              </h2>
              <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
                <p>
                  I'm a Full-Stack Software Engineer specialising in{" "}
                  <span className="text-[var(--text)] font-medium">React</span> and{" "}
                  <span className="text-[var(--text)] font-medium">ASP.NET Core</span>.
                  I design, build, deploy and maintain cloud-native applications
                  end-to-end.
                </p>
                <p>
                  My day-to-day is a typed React frontend talking to an ASP.NET
                  Core API, backed by PostgreSQL or SQL Server, containerised
                  with Docker and shipped to Kubernetes on Azure through
                  GitOps pipelines (GitHub Actions, Terraform, ArgoCD).
                </p>
                <p>
                  I care about clarity — in code, in APIs, and in how a system
                  behaves. I prefer small services with sensible defaults over
                  clever ones.
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

            {/* Supporting groups — core stack */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
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

            {/* Tertiary — supplementary skills */}
            <div className="grid md:grid-cols-2 gap-4">
              {tertiaryGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-xl border border-dashed border-[var(--border)] p-6 bg-transparent"
                >
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)] mb-3">
                    {group.title}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {group.items.map((item) => (
                      <AdditionalChip key={item.name} item={item} />
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
